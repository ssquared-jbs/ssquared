/* Mandarin² — S² app bar, progress tracking and dashboard.
   Loaded on every Mandarin² page after s2-progress.js and s2-mandarin-map.js. */
(function () {
  "use strict";
  var S2 = window.S2, MAP = window.MANDARIN_MAP || [];
  if (!S2) return;

  // ---------- paths ----------
  var me = document.currentScript || document.querySelector('script[src$="s2-mandarin.js"]');
  var BASE = me.src.replace(/s2-mandarin\.js.*$/, "");               // .../mandarin/
  var here = location.href.split("#")[0].split("?")[0];
  var PATH = here.indexOf(BASE) === 0 ? here.slice(BASE.length) : here.split("/").slice(-2).join("/");
  if (PATH === "" || PATH === "/") PATH = "index.html";
  function url(p) { return BASE + p; }

  var LESSON_INDEX = {};
  var TOTAL_LESSONS = 0;
  MAP.forEach(function (t, ti) { t.lessons.forEach(function (l) { LESSON_INDEX[l.u] = { topic: t, ti: ti, t: l.t }; TOTAL_LESSONS++; }); });

  function key(p) { return "man:" + p; }
  function prog(p) { return S2.item(key(p)) || {}; }
  function lessonPct(p) { return prog(p).pct || 0; }
  function topicPct(t) {
    if (!t.lessons.length) return 0;
    var s = 0; t.lessons.forEach(function (l) { s += lessonPct(l.u); }); return Math.round(s / t.lessons.length);
  }
  function coursePct() { var s = 0, n = 0; MAP.forEach(function (t) { t.lessons.forEach(function (l) { s += lessonPct(l.u); n++; }); }); return n ? Math.round(s / n) : 0; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var isGame = /^three-plus-two\//.test(PATH);
  var body = document.body;

  // ---------- page title ----------
  function pageTitle() {
    if (LESSON_INDEX[PATH]) return LESSON_INDEX[PATH].t;
    var h = document.querySelector(".lesson-hero h2, .page-intro h2, .rf-start-screen h2, .match-hero h2, .writing-hero h2, .quiz-hero h2, #topicDisplay");
    var t = h ? h.textContent.trim() : document.title.replace(/\s*[|·-]?\s*Mandarin².*$/, "");
    return t || "Mandarin²";
  }

  // ---------- chrome ----------
  function chrome() {
    if (isGame) return;
    body.classList.add("s2", "s2-mandarin");
    var header = document.querySelector("body > header") || document.querySelector("header");
    var sub = "";
    if (header) {
      var p = header.querySelector("p"); sub = p ? p.textContent.trim() : "";
      var h1 = header.querySelector("h1"), h1t = h1 ? h1.textContent.trim() : "";
      if (h1t && !/^Mandarin²$/.test(h1t)) {
        sub = sub || h1t;
        var ttl = el("h1", "s2-page-title", esc(h1t));
        header.parentNode.insertBefore(ttl, header.nextSibling);
      }
    } else { header = el("header"); body.insertBefore(header, body.firstChild); }
    sub = sub.replace(/^Cambridge IGCSE Mandarin\s*\|\s*/, "") || "IGCSE Mandarin revision";
    header.className = "s2-appbar";
    var nav = [["index.html", "Home"], ["learn.html", "Learn"], ["quizzes/quizzes.html", "Quizzes"], ["flashcards.html", "Flashcards"], ["three-plus-two/three-plus-two.html", "3+2 Game"], ["../workbook.html?s=mandarin", "Workbook"]];
    var section = PATH === "index.html" ? "index.html" : /^learn/.test(PATH) ? "learn.html" : /^quizzes\//.test(PATH) ? "quizzes/quizzes.html" : /^flashcards/.test(PATH) ? "flashcards.html" : "";
    header.innerHTML =
      '<a class="s2-logo" href="' + url("../index.html") + '" title="Back to Ssquared HQ">S<sup>2</sup></a>' +
      '<div class="s2-brand"><a class="s2-title" href="' + url("index.html") + '">Mandarin²</a><span class="s2-sub">' + esc(sub) + "</span></div>" +
      '<nav class="s2-nav" aria-label="Mandarin²">' + nav.map(function (n) {
        return '<a href="' + url(n[0]) + '"' + (section === n[0] ? ' class="active" aria-current="page"' : "") + ">" + n[1] + "</a>";
      }).join("") + "</nav>";
    header.appendChild(S2.xpPill());
    header.appendChild(S2.streakPill());
    header.appendChild(S2.themeButton());
    if (header.parentNode !== body || header !== body.firstElementChild) body.insertBefore(header, body.firstChild);

    var footer = document.querySelector("footer");
    if (!footer) { footer = el("footer"); body.appendChild(footer); }
    footer.className = "s2-footer";
    footer.innerHTML = '<span>Mandarin² · part of <a href="' + url("../index.html") + '" style="margin:0">Ssquared HQ</a></span><span><a href="' + url("about.html") + '">About</a><a href="' + url("privacy.html") + '">Privacy Policy</a><a href="' + url("contact.html") + '">Contact</a></span>';
  }

  // ---------- tracking ----------
  function trackLesson() {
    var steps = [].slice.call(document.querySelectorAll(".step"));
    if (!steps.length) return;
    var info = LESSON_INDEX[PATH] || { t: pageTitle(), topic: null };
    var bar = el("div", "s2-lesson-progress", '<div class="s2-lesson-inner"><span class="lbl"></span><div class="s2-bar"><i></i></div></div>');
    var appbar = document.querySelector(".s2-appbar");
    if (appbar) appbar.parentNode.insertBefore(bar, appbar.nextSibling); else body.insertBefore(bar, body.firstChild);
    var best = prog(PATH).pct || 0;
    function update() {
      var idx = -1;
      steps.forEach(function (s, i) { if (s.classList.contains("active-step")) idx = i; });
      if (idx < 0) idx = 0;
      var pct = Math.round((idx + 1) / steps.length * 100);
      bar.querySelector(".lbl").textContent = "Step " + (idx + 1) + " of " + steps.length;
      bar.querySelector("i").style.width = pct + "%";
      if (pct > best || !prog(PATH).v) {
        var wasDone = best >= 100;
        best = Math.max(best, pct);
        S2.touch(key(PATH), { s: "mandarin", kind: "lesson", t: info.t, u: PATH, pct: best, topic: info.topic ? info.topic.t : "" });
        if (best >= 100 && !wasDone) { toast("Lesson complete: " + info.t); S2.confetti(); S2.addXP(50, "Lesson complete"); }
        else if (idx > 0) S2.addXP(5);
      }
    }
    var mo = new MutationObserver(update);
    steps.forEach(function (s) { mo.observe(s, { attributes: true, attributeFilter: ["class"] }); });
    update();
  }

  function trackFlashcards() {
    var pr = document.getElementById("progress");
    if (!document.getElementById("flashScene") || !pr) return;
    var title = pageTitle().replace(/ Flashcards$/, "");
    var best = prog(PATH).pct || 0;
    function update() {
      var m = /Card\s+(\d+)\s+of\s+(\d+)/.exec(pr.textContent || "");
      var pct = m ? Math.round(+m[1] / +m[2] * 100) : 0;
      if (pct > best || !prog(PATH).v) { best = Math.max(best, pct); S2.touch(key(PATH), { s: "mandarin", kind: "flashcards", t: title + " flashcards", u: PATH, pct: best }); }
    }
    new MutationObserver(update).observe(pr, { childList: true, characterData: true, subtree: true });
    update();
  }

  function trackGame() {
    var game = document.querySelector("#startScreen, #matchBoard, #promptBox, #readingText, #startBtn");
    if (!game) return;
    var kind = isGame ? "game" : "quiz";
    var title = pageTitle();
    if (isGame) title = "3+2: " + title.replace(/^THREE \+ TWO$/i, "Game").toLowerCase().replace(/^./, function (c) { return c.toUpperCase(); });
    var started = false, done = false;
    function start() { if (started) return; started = true; S2.touch(key(PATH), { s: "mandarin", kind: kind, t: title, u: PATH, plays: (prog(PATH).plays || 0) + 1 }); }
    document.addEventListener("click", function (e) { if (e.target.closest("button")) start(); }, true);
    var ends = ["endScreen", "matchEnd", "markBox", "readingFeedback"].map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if (!ends.length) return;
    var mo = new MutationObserver(function () {
      if (done) return;
      ends.forEach(function (e) {
        var vis = e.offsetParent !== null && !e.classList.contains("hidden") && e.textContent.trim().length > 0;
        if (vis && started && !done) {
          done = true;
          var xp = document.getElementById("finalXp");
          var patch = { s: "mandarin", kind: kind, t: title, u: PATH, completed: (prog(PATH).completed || 0) + 1 };
          if (xp && /\d/.test(xp.textContent)) { var n = parseInt(xp.textContent.replace(/[^\d]/g, ""), 10); patch.lastXp = n; patch.bestXp = Math.max(prog(PATH).bestXp || 0, n); }
          S2.touch(key(PATH), patch);
          S2.addXP(20, "Game finished");
        }
      });
    });
    ends.forEach(function (e) { mo.observe(e, { attributes: true, childList: true, subtree: true, characterData: true }); });
  }

  function toast(msg) {
    var t = el("div", "s2-toast", esc(msg)); t.setAttribute("role", "status"); body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2600);
  }

  // ---------- dashboard (mandarin/index.html) ----------
  function dashboard() {
    var main = document.querySelector("main");
    if (!main) return;
    var recent = S2.items("mandarin");
    var st = S2.streak();
    var done = 0, startedTopics = 0;
    MAP.forEach(function (t) { var any = false; t.lessons.forEach(function (l) { var p = lessonPct(l.u); if (p >= 100) done++; if (p > 0) any = true; }); if (any) startedTopics++; });
    var cp = coursePct();

    // next lesson: most recent unfinished lesson, otherwise the first lesson not completed
    var next = null;
    for (var i = 0; i < recent.length && !next; i++) if (recent[i].kind === "lesson" && (recent[i].pct || 0) < 100 && LESSON_INDEX[recent[i].u]) next = recent[i].u;
    if (!next) MAP.some(function (t) { return t.lessons.some(function (l) { if (lessonPct(l.u) < 100) { next = l.u; return true; } }); });
    var first = !recent.length;

    var dash = el("div", "s2-mandarin-dash");
    var html = "<section class='s2-hello'><h1>" + (first ? "Revise IGCSE Mandarin" : "Welcome back") + "</h1><p>" +
      (first ? MAP.length + " topics and " + TOTAL_LESSONS + " step-by-step lessons, plus quizzes, flashcards and the 3+2 game. Your progress is saved on this device." : "Pick up where you left off, or jump into a quiz or game.") + "</p></section>";
    html += "<div class='s2-dash'><div class='s2-card s2-continue'>";
    if (next) {
      var li = LESSON_INDEX[next], p = prog(next);
      html += S2.ring(lessonPct(next), 84).replace('class="s2-ring"', 'class="s2-ring big"') + "<div><div class='s2-kicker'>" + (first ? "Start here" : "Up next") + " · Topic " + li.topic.n + ": " + esc(li.topic.t) + "</div><h2>" + esc(li.t) + "</h2>" +
        "<div class='meta'>" + (p.v ? "Last studied " + S2.timeAgo(p.v) + ". " : "") + (lessonPct(next) ? lessonPct(next) + "% through" : "Not started yet") + "</div>" +
        "<a class='s2-btn' href='" + url(next) + "'>" + (lessonPct(next) ? "Continue lesson" : "Start lesson") + "</a></div>";
    } else {
      html += S2.ring(100, 84) + "<div><div class='s2-kicker'>Every lesson complete</div><h2>Keep it fresh with a quiz</h2><a class='s2-btn' href='" + url("quizzes/quizzes.html") + "'>Go to quizzes</a></div>";
    }
    html += "</div><div class='s2-card s2-streak-card'><div class='big'>🔥 " + st.current + "<small>day streak</small></div><p>" +
      (st.activeToday ? "You've revised today. Come back tomorrow to keep it going." : st.current ? "Revise today to keep your streak alive." : "Revise today to start a streak.") +
      (st.best > st.current ? " Best: " + st.best + " days." : "") + "</p>" + S2.weekHtml(st) + "</div></div>";
    html += "<div class='s2-stats'>" +
      "<div class='s2-card s2-stat'><div class='num'>" + cp + "%</div><div class='lbl'>Lessons completed overall</div><div class='s2-bar'><i style='width:" + cp + "%'></i></div></div>" +
      "<div class='s2-card s2-stat'><div class='num'>" + done + "<span style='font-size:1rem;color:var(--ink-3)'> / " + TOTAL_LESSONS + "</span></div><div class='lbl'>Lessons finished</div></div>" +
      "<div class='s2-card s2-stat'><div class='num'>" + startedTopics + "<span style='font-size:1rem;color:var(--ink-3)'> / " + MAP.length + "</span></div><div class='lbl'>Topics started</div></div></div>";
    html += "<h2 class='s2-section-title'>Ways to revise</h2>";
    dash.innerHTML = html;

    var intro = main.querySelector(".intro-card");
    if (intro) intro.remove();
    main.insertBefore(dash, main.firstChild);

    if (recent.length) {
      var r = el("div", "s2-recent", "<h2 class='s2-section-title'>Recently studied</h2><div class='s2-rows'>" + recent.slice(0, 5).map(function (it) {
        var label = it.kind === "lesson" ? (it.pct >= 100 ? "Lesson finished" : "Lesson " + (it.pct || 0) + "% through") :
          it.kind === "flashcards" ? "Flashcards" : it.kind === "game" ? "3+2 game" : "Quiz" + (it.bestXp ? " · best " + it.bestXp + " XP" : "");
        return "<a class='s2-row' href='" + url(it.u) + "'>" + S2.ring(it.pct || (it.completed ? 100 : 0), 44) + "<div class='grow'><div class='t'>" + esc(it.t) + "</div><div class='d'>" + label + "</div></div><span class='when'>" + S2.timeAgo(it.v) + "</span></a>";
      }).join("") + "</div>");
      main.appendChild(r);
    }
  }

  // ---------- progress on learn.html and topic pages ----------
  function learnRings() {
    if (PATH === "learn.html") {
      [].forEach.call(document.querySelectorAll("a.learn-topic-card"), function (a) {
        var href = a.getAttribute("href"), t = null;
        MAP.forEach(function (m) { if (m.u === href) t = m; });
        if (!t) return;
        var pct = topicPct(t), fin = t.lessons.filter(function (l) { return lessonPct(l.u) >= 100; }).length;
        var num = a.querySelector(".topic-number");
        var ring = el("div", "s2-topic-ring", S2.ring(pct, 58));
        if (num) num.replaceWith(ring); else a.insertBefore(ring, a.firstChild);
        var info = el("span", "s2-topic-meta", fin + " of " + t.lessons.length + " lessons finished");
        var txt = a.querySelector("div:last-child") || a; txt.appendChild(info);
        var old = a.querySelector("span:not(.s2-topic-meta)"); if (old && /Enter topic/.test(old.textContent)) old.remove();
        a.dataset.num = t.n;
      });
    }
    // subtopic cards that point at lessons
    [].forEach.call(document.querySelectorAll("a.subtopic-card, a.learn-section-card, a.learn-test-card"), function (a) {
      var target = new URL(a.getAttribute("href"), location.href).href;
      var p = target.indexOf(BASE) === 0 ? target.slice(BASE.length) : null;
      if (!p || !LESSON_INDEX[p]) return;
      var pct = lessonPct(p);
      var badge = el("span", "s2-lesson-badge" + (pct >= 100 ? " done" : pct ? " part" : ""), pct >= 100 ? "✓ Finished" : pct ? pct + "% through" : "Not started");
      a.appendChild(badge);
      a.classList.add("s2-has-badge");
    });
  }

  function notebook() {
    var isLesson = !!document.querySelector(".step"), isTopic = !!document.querySelector(".subtopic-grid, .learn-section-grid");
    if (!isLesson && !isTopic) return;
    var sc = document.createElement("script");
    sc.src = BASE + "../shared/s2-notes.js";
    sc.onload = function () {
      var main = document.querySelector("main") || body;
      var info = LESSON_INDEX[PATH], title = pageTitle();
      var topicName = info && info.topic ? "Topic " + info.topic.n + ": " + info.topic.t : "";
      if (!info) MAP.forEach(function (t) { if (t.u === PATH) topicName = "Topic " + t.n + ": " + t.t; });
      var ed = S2Notes.editor({ subject: "mandarin", id: PATH, t: title, code: info && info.topic ? info.topic.n : "", group: topicName, u: PATH, title: "My notes: " + title, workbook: BASE + "../workbook.html?s=mandarin" });
      ed.classList.add("man-notebook");
      main.appendChild(ed);
    };
    document.head.appendChild(sc);
  }

  function run() {
    chrome();
    if (PATH === "index.html") dashboard();
    learnRings();
    trackLesson();
    trackFlashcards();
    trackGame();
    notebook();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
