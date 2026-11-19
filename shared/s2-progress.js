/* S² progress engine — streaks, recent activity and mastery.
   Everything is stored in this browser only (localStorage). No accounts. */
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

  window.S2 = { touch: touch, item: item, items: items, streak: streak, ring: ring, streakPill: streakPill, weekHtml: weekHtml, timeAgo: timeAgo, markActive: function () { markActive(); save(); }, reset: reset, today: today };
})();
