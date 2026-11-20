/* S² progress engine — streaks, recent activity and mastery.
   Stored in this browser (localStorage). If the learner signs in, s2-auth.js syncs it to their account. */
(function () {
  "use strict";
  var KEY = "s2-progress-v1";
  var mem = null;

  function today(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }
  function load() {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { mem = null; }
    if (!mem || typeof mem !== "object") mem = {};
    mem.days = mem.days || {};
    mem.items = mem.items || {};
    return mem;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) {} }

  function markActive() { var d = load(); var t = today(); d.days[t] = (d.days[t] || 0) + 1; }

  /* Record activity on an item. patch is merged into the stored item. */
  function touch(key, patch) {
    var d = load();
    var it = d.items[key] || {};
    for (var k in patch) if (patch.hasOwnProperty(k)) it[k] = patch[k];
    it.v = Date.now();
    d.items[key] = it;
    markActive();
    save();
    return it;
  }
  function item(key) { return load().items[key] || null; }
  function items(subject) {
    var d = load(), out = [];
    for (var k in d.items) if (!subject || d.items[k].s === subject) out.push(Object.assign({ key: k }, d.items[k]));
    out.sort(function (a, b) { return (b.v || 0) - (a.v || 0); });
    return out;
  }

  function streak() {
    var d = load().days, cur = 0, best = 0, run = 0;
    var day = new Date();
    if (!d[today(day)]) day.setDate(day.getDate() - 1); // streak survives until the end of today
    var probe = new Date(day);
    while (d[today(probe)]) { cur++; probe.setDate(probe.getDate() - 1); }
    var keys = Object.keys(d).sort(), prev = null;
    keys.forEach(function (k) {
      var dt = new Date(k + "T12:00:00");
      if (prev && (dt - prev) / 864e5 < 1.5) run++; else run = 1;
      if (run > best) best = run; prev = dt;
    });
    // this week, Monday first
    var now = new Date(), wd = (now.getDay() + 6) % 7, week = [];
    for (var i = 0; i < 7; i++) {
      var x = new Date(now); x.setDate(now.getDate() - wd + i);
      week.push({ done: !!d[today(x)], today: i === wd, future: i > wd });
    }
    return { current: cur, best: Math.max(best, cur), week: week, activeToday: !!d[today()] };
  }

  function ring(pct, size, label) {
    size = size || 44; pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
    var r = (size - 6) / 2, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return '<svg class="s2-ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '" role="img" aria-label="' + (label || pct + "% mastered") + '">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="s2-ring-track"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="s2-ring-fill" stroke-dasharray="' + c.toFixed(2) + '" stroke-dashoffset="' + off.toFixed(2) + '" transform="rotate(-90 ' + size / 2 + " " + size / 2 + ')"/>' +
      '<text x="50%" y="50%" dy="0.35em" text-anchor="middle" class="s2-ring-text">' + pct + "</text></svg>";
  }

  function streakPill() {
    var s = streak();
    var a = document.createElement("span");
    a.className = "s2-streak-pill" + (s.activeToday ? " is-lit" : "");
    a.title = s.activeToday ? "You've revised today. Come back tomorrow to keep your streak." : "Revise today to keep your streak going.";
    a.innerHTML = '<span aria-hidden="true">🔥</span> ' + s.current + " day" + (s.current === 1 ? "" : "s");
    return a;
  }

  function weekHtml(s) {
    var names = ["M", "T", "W", "T", "F", "S", "S"];
    return '<div class="s2-week">' + s.week.map(function (w, i) {
      return '<span class="s2-day' + (w.done ? " done" : "") + (w.today ? " today" : "") + (w.future ? " future" : "") + '" title="' + (w.done ? "Revised" : "No revision") + '">' + names[i] + "</span>";
    }).join("") + "</div>";
  }

  function timeAgo(ts) {
    var s = (Date.now() - ts) / 1000;
    if (s < 90) return "just now";
    if (s < 3600) return Math.round(s / 60) + " minutes ago";
    if (s < 86400) return Math.round(s / 3600) + " hours ago";
    var d = Math.round(s / 86400); return d === 1 ? "yesterday" : d + " days ago";
  }

  function reset(subject) {
    var d = load();
    if (!subject) { mem = { days: {}, items: {} }; }
    else for (var k in d.items) if (d.items[k].s === subject) delete d.items[k];
    save();
  }


  // ---------- XP and levels (the fun bit) ----------
  var LEVELS = [
    [0, "Spark", "✨"], [100, "Atom", "⚛️"], [250, "Molecule", "🧪"], [500, "Cell", "🦠"], [900, "Crystal", "💎"],
    [1400, "Planet", "🪐"], [2000, "Star", "⭐"], [3000, "Nebula", "🌌"], [4500, "Galaxy", "🌀"], [6500, "Universe", "🌠"]
  ];
  function xp() { return load().xp || 0; }
  function level(x) {
    x = x == null ? xp() : x;
    var i = 0; while (i + 1 < LEVELS.length && x >= LEVELS[i + 1][0]) i++;
    var cur = LEVELS[i], next = LEVELS[i + 1];
    return { n: i + 1, name: cur[1], icon: cur[2], from: cur[0], to: next ? next[0] : null, pct: next ? Math.round((x - cur[0]) / (next[0] - cur[0]) * 100) : 100 };
  }
  var pills = [];
  function xpPill() {
    var a = document.createElement("span");
    a.className = "s2-xp-pill";
    function draw() {
      var L = level(), x = xp();
      a.innerHTML = '<span aria-hidden="true">' + L.icon + "</span> Lv " + L.n + "<i style='--p:" + L.pct + "%'></i>";
      a.title = L.name + " · " + x + " XP" + (L.to ? " · " + (L.to - x) + " XP to the next level" : " · top level!");
      a.setAttribute("aria-label", "Level " + L.n + ", " + L.name + ", " + x + " XP");
    }
    draw(); pills.push(draw);
    return a;
  }
  function chip(text, cls) {
    var c = document.createElement("div");
    c.className = "s2-xp-chip " + (cls || "");
    c.textContent = text;
    if (cls === "big") document.body.appendChild(c);
    else {
      var box = document.querySelector(".s2-chips");
      if (!box) { box = document.createElement("div"); box.className = "s2-chips"; box.setAttribute("aria-live", "polite"); document.body.appendChild(box); }
      box.appendChild(c);
    }
    setTimeout(function () { c.classList.add("go"); }, 20);
    setTimeout(function () { c.remove(); }, 1600);
  }
  function addXP(n, why) {
    if (!n || n < 0) return;
    var d = load(), before = level(d.xp || 0);
    d.xp = (d.xp || 0) + Math.round(n);
    markActive(); save();
    var after = level(d.xp);
    pills.forEach(function (f) { f(); });
    chip("+" + Math.round(n) + " XP" + (why ? " · " + why : ""));
    if (after.n > before.n) {
      setTimeout(function () { confetti(); chip("Level up! You're now " + after.icon + " " + after.name, "big"); }, 350);
    }
  }
  function confetti(opts) {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var c = document.createElement("canvas"), ctx = c.getContext("2d");
    if (!ctx) return;
    c.className = "s2-confetti"; document.body.appendChild(c);
    var W = c.width = innerWidth, H = c.height = innerHeight, cs = getComputedStyle(document.body);
    var cols = [cs.getPropertyValue("--accent") || "#e0383e", "#ffdf5d", "#3fcf8e", "#2f62d8", "#d9661f", "#e0383e"];
    var parts = [];
    for (var i = 0; i < 110; i++) parts.push({ x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35, vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 13 - 4, r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - 0.5) * 0.4, c: cols[i % cols.length].trim() });
    var t0 = performance.now();
    (function frame(t) {
      var dt = Math.min(32, t - (frame.last || t)); frame.last = t;
      ctx.clearRect(0, 0, W, H);
      parts.forEach(function (p) { p.vy += 0.35 * dt / 16; p.x += p.vx * dt / 16; p.y += p.vy * dt / 16; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); });
      if (t - t0 < 2200) requestAnimationFrame(frame); else c.remove();
    })(t0);
  }

  function themeButton() {
    var b = document.createElement("button");
    b.type = "button"; b.className = "s2-theme-btn";
    function sync() {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      b.textContent = dark ? "☀️" : "🌙";
      b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      b.title = b.getAttribute("aria-label");
    }
    b.onclick = function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("s2-theme", next); } catch (e) {}
      sync();
    };
    sync();
    return b;
  }
  if (!document.documentElement.getAttribute("data-theme")) {
    var pref = null; try { pref = localStorage.getItem("s2-theme"); } catch (e) {}
    document.documentElement.setAttribute("data-theme", pref === "dark" || (pref !== "light" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light");
  }

  /* load accounts (shared/s2-firebase-config.js + shared/s2-auth.js) once per page */
  (function () {
    if (window.__s2AuthLoading) return; window.__s2AuthLoading = true;
    var me = document.currentScript || document.querySelector("script[src*='s2-progress.js']");
    var base = me ? me.getAttribute("src").replace(/s2-progress\.js.*$/, "") : "shared/";
    function add(src, then) { var t = document.createElement("script"); t.src = base + src; t.onload = then; t.onerror = then; (document.head || document.documentElement).appendChild(t); }
    add("s2-firebase-config.js", function () { add("s2-auth.js"); });
  })();

  window.S2 = { themeButton: themeButton, xp: xp, level: level, xpPill: xpPill, addXP: addXP, confetti: confetti, chip: chip, touch: touch, item: item, items: items, streak: streak, ring: ring, streakPill: streakPill, weekHtml: weekHtml, timeAgo: timeAgo, markActive: function () { markActive(); save(); }, reset: reset, today: today };
})();
