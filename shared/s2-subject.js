/* S² subject engine — shared by Chemistry², Physics² and Biology².
   Each subject provides window.SUBJECT (config) and window.S2Data (topics + exam questions). */
(function () {
  "use strict";

  var CFG = window.SUBJECT || {};
  var DATA = window.S2Data || window.CHEM || { topics: [], exams: {} };
  var GROUPS = CFG.groups || {};
  var EXTRA = CFG.extrasGroup || 99;
  var S2 = window.S2;
  var topics = DATA.topics || [];
  var EXAMS = DATA.exams || {};
  var VIDEOS = DATA.videos || {};
  topics.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
  function byId(id) { for (var i = 0; i < topics.length; i++) if (topics[i].id === id) return topics[i]; return null; }
  function inGroup(g) { return topics.filter(function (t) { return t.group === g; }); }
  function groupLabel(g) { return g !== EXTRA ? "Topic " + g + ": " + GROUPS[g].name : GROUPS[g].name; }
  function groupShort(g) { return g !== EXTRA ? "Topic " + g : "GCSE extras"; }
  function exam(id) { return EXAMS[id] || []; }
  function examMarks(qs) { return qs.reduce(function (s, q) { return s + (q.m || 1); }, 0); }

  // ---------- progress ----------
  function key(id) { return CFG.keyPrefix + ":" + id; }
  function prog(id) { return (S2 && S2.item(key(id))) || {}; }
  function save(t, patch) {
    if (!S2) return;
    patch.s = CFG.slug; patch.t = t.title; patch.code = code(t); patch.u = "topic.html?id=" + t.id;
    S2.touch(key(t.id), patch);
  }
  /* Mastery. Without exam questions: notes 20, quiz 60, flashcards 20.
     With exam questions: notes 15, quiz 35, exam 35, flashcards 15. */
  function mastery(t) {
    var p = prog(t.id), hasExam = exam(t.id).length > 0;
    var w = hasExam ? [15, 35, 35, 15] : [20, 60, 0, 20], m = 0;
    if (p.read) m += w[0];
    if (p.best) m += w[1] * p.best.s / p.best.t;
    if (hasExam && p.exam) m += w[2] * p.exam.s / p.exam.t;
    if (p.fc && t.flashcards.length) m += w[3] * Math.min(p.fc.length, t.flashcards.length) / t.flashcards.length;
    return Math.round(m);
  }
  function courseMastery(list) {
    list = list || topics; if (!list.length) return 0;
    var sum = 0; list.forEach(function (t) { sum += mastery(t); }); return Math.round(sum / list.length);
  }
  if (CFG.slug === "chemistry") try {
    topics.forEach(function (t) {
      var old = localStorage.getItem("chem2-best-" + t.id);
      if (old && S2 && !prog(t.id).best) { var o = JSON.parse(old); save(t, { best: { s: o.s, t: o.t } }); }
    });
  } catch (e) {}

  // ---------- helpers ----------
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    return e;
  }
  function param(name) { var m = new RegExp("[?&]" + name + "=([^&]+)").exec(location.search); return m ? decodeURIComponent(m[1]) : null; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function tagHtml(t) {
    var s = "";
    if (t.paper2) s += ' <span class="tag tag-c">Paper 2 only</span>';
    if (t.gcse) s += ' <span class="tag tag-g">GCSE only</span>';
    return s;
  }
  function code(t) { return t.id.charAt(0) + "(" + t.id.slice(1) + ")"; }
  function ring(p, size) { return S2 ? S2.ring(p, size) : ""; }
  function bigRing(p, size) { return ring(p, size).replace('class="s2-ring"', 'class="s2-ring big"'); }
  function toast(msg) {
    var t = el("div", { class: "s2-toast", role: "status" }, msg); document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2400);
  }
  var hasAnyExam = Object.keys(EXAMS).length > 0;
  var CHEERS = ["Correct.", "Nailed it.", "Spot on.", "Yes, exactly.", "Correct, nice work.", "That's the one."];
  function cheer() { return CHEERS[Math.floor(Math.random() * CHEERS.length)]; }
  function xp(n, why) { if (S2 && S2.addXP) S2.addXP(n, why); }
  function party() { if (S2 && S2.confetti) S2.confetti(); }
  function detailHtml(t) {
    var d = (DATA.details || {})[t.id] || {}, h = "";
    if (d.deeper) h += "<h3>Going deeper</h3>" + d.deeper;
    if (d.mistakes && d.mistakes.length) h += "<div class='box box-mistake'><span class='box-title'>⚠️ Common mistakes</span><ul>" + d.mistakes.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></div>";
    if (d.tips && d.tips.length) h += "<div class='box box-tip'><span class='box-title'>🎯 Exam tips</span><ul>" + d.tips.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></div>";
    var fact = t.fact || d.fact;
    if (fact) h += "<div class='box box-fun'><span class='box-title'>🤯 Did you know?</span>" + fact + "</div>";
    return h;
  }
  function factOfDay() {
    var f = CFG.facts || []; if (!f.length) return "";
    var d = new Date(), i = (d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % f.length;
    return f[i];
  }

  // ---------- chrome ----------
  function chrome(active) {
    var bar = el("header", { class: "s2-appbar" });
    var nav = ["index.html|Home", "learn.html|Learn", "quizzes.html|Quizzes"];
    if (hasAnyExam) nav.push("exam.html|Exam questions");
    nav.push("flashcards.html|Flashcards");
    nav.push("workbook.html|Workbook");
    bar.innerHTML =
      '<a class="s2-logo" href="../index.html" title="Back to Ssquared HQ">S<sup>2</sup></a>' +
      '<div class="s2-brand"><a class="s2-title" href="index.html">' + CFG.name + '</a><span class="s2-sub">' + CFG.sub + "</span></div>" +
      '<nav class="s2-nav" aria-label="' + CFG.name + '">' + nav.map(function (x) {
        var p = x.split("|"); return '<a href="' + p[0] + '"' + (active === p[0] ? ' class="active" aria-current="page"' : "") + ">" + p[1] + "</a>";
      }).join("") + "</nav>";
    if (S2) { bar.appendChild(S2.xpPill()); bar.appendChild(S2.streakPill()); bar.appendChild(S2.themeButton()); }
    document.body.insertBefore(bar, document.body.firstChild);
    var footer = el("footer", { class: "s2-footer" });
    footer.innerHTML = '<span>' + CFG.name + ' · part of <a href="../index.html" style="margin:0">Ssquared HQ</a></span><span><a href="about.html">About</a><a href="privacy.html">Privacy Policy</a><a href="contact.html">Contact</a></span>';
    document.body.appendChild(footer);
  }

  // ---------- pages ----------
  var pages = {};

  pages.home = function (main) {
    if (!topics.length) {
      main.innerHTML = "<section class='s2-hello'><h1>" + CFG.name + " is on its way</h1><p>Notes, quizzes and flashcards for " + CFG.course + " are being added now. Check back soon.</p></section>";
      return;
    }
    var recent = S2 ? S2.items(CFG.slug) : [];
    var st = S2 ? S2.streak() : { current: 0, best: 0, week: [] };
    var started = topics.filter(function (t) { return mastery(t) > 0; });
    var mastered = topics.filter(function (t) { return mastery(t) >= 80; });
    var cm = courseMastery();
    var nextT = null, lastT = recent.length ? byId(recent[0].key.split(":")[1]) : null;
    if (lastT && mastery(lastT) < 80) nextT = lastT;
    if (!nextT) for (var i = 0; i < topics.length; i++) if (mastery(topics[i]) < 80) { nextT = topics[i]; break; }
    var first = !recent.length;
    var nq = 0, nf = 0, ne = 0; topics.forEach(function (t) { nq += t.quiz.length; nf += t.flashcards.length; ne += exam(t.id).length; });

    var html = "<section class='s2-hello'><h1>" + (first ? "Revise all of " + CFG.subjectWord : "Welcome back") + "</h1><p>" +
      (first ? CFG.intro + " " + topics.length + " subtopics, " + nq + " quiz questions" + (ne ? ", " + ne + " exam questions" : "") + " and " + nf + " flashcards. Your progress is saved on this device." :
        "Pick up where you left off, or choose any topic below.") + "</p></section>";

    html += "<div class='s2-dash'><div class='s2-card s2-continue'>";
    if (nextT) {
      var m = mastery(nextT), p = prog(nextT.id), hasEx = exam(nextT.id).length;
      var step = !p.read ? ["Read the notes", "topic.html?id=" + nextT.id] : !p.best ? ["Take the quiz", "quizzes.html?id=" + nextT.id] :
        (p.best.s / p.best.t < 0.8 ? ["Beat your quiz score", "quizzes.html?id=" + nextT.id] :
          (hasEx && !p.exam ? ["Try the exam questions", "exam.html?id=" + nextT.id] : ["Practise the flashcards", "flashcards.html?id=" + nextT.id]));
      html += bigRing(m, 84) + "<div><div class='s2-kicker'>" + (first ? "Start here" : "Up next") + "</div><h2>" + code(nextT) + " " + nextT.title + "</h2>" +
        "<div class='meta'>" + (p.v ? "Last studied " + S2.timeAgo(p.v) + ". " : "") + m + "% mastered</div>" +
        "<a class='s2-btn' href='" + step[1] + "'>" + step[0] + "</a></div>";
    } else {
      html += ring(100, 84) + "<div><div class='s2-kicker'>Course complete</div><h2>You've mastered every topic</h2><a class='s2-btn' href='quizzes.html?id=all'>Take a mixed quiz</a></div>";
    }
    html += "</div><div class='s2-card s2-streak-card'><div class='big'>🔥 " + st.current + "<small>day streak</small></div><p>" +
      (st.activeToday ? "You've revised today. Come back tomorrow to keep it going." : st.current ? "Revise today to keep your streak alive." : "Revise today to start a streak.") +
      (st.best > st.current ? " Best: " + st.best + " days." : "") + "</p>" + (S2 ? S2.weekHtml(st) : "") + "</div></div>";

    html += "<div class='s2-stats'>" +
      "<div class='s2-card s2-stat'><div class='num'>" + cm + "%</div><div class='lbl'>Course mastered</div><div class='s2-bar'><i style='width:" + cm + "%'></i></div></div>" +
      "<div class='s2-card s2-stat'><div class='num'>" + started.length + "<span style='font-size:1rem;color:var(--ink-3)'> / " + topics.length + "</span></div><div class='lbl'>Topics started</div></div>" +
      "<div class='s2-card s2-stat'><div class='num'>" + mastered.length + "</div><div class='lbl'>Topics mastered (80%+)</div></div></div>";

    var fod = factOfDay(), L = S2 && S2.level ? S2.level() : null;
    html += "<div class='fun-row'>" +
      (L ? "<div class='s2-card level-card'><div class='lv-icon'>" + L.icon + "</div><div><div class='s2-kicker'>Level " + L.n + "</div><h3>" + L.name + "</h3><div class='s2-bar'><i style='width:" + L.pct + "%'></i></div><p>" + S2.xp() + " XP" + (L.to ? " · " + (L.to - S2.xp()) + " XP to the next level" : " · top level reached") + ". Earn XP for notes, quizzes, exam marks and flashcards.</p></div></div>" : "") +
      (fod ? "<div class='s2-card fact-card'><div class='s2-kicker'>Did you know?</div><p>" + fod + "</p></div>" : "") + "</div>";
    html += "<h2 class='s2-section-title'>Your topics</h2><div class='group-grid'>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      html += "<a class='s2-card group-tile' href='learn.html#g" + g + "'>" + ring(courseMastery(list), 56) + "<div><h3>" + groupLabel(g) + "</h3><p>" + list.length + " subtopics · " + GROUPS[g].sub + "</p></div></a>";
    });
    html += "</div>";

    if (recent.length) {
      html += "<h2 class='s2-section-title'>Recently studied</h2><div class='s2-rows'>";
      recent.slice(0, 4).forEach(function (r) {
        var t = byId(r.key.split(":")[1]); if (!t) return;
        html += "<a class='s2-row' href='topic.html?id=" + t.id + "'>" + ring(mastery(t), 44) + "<div class='grow'><div class='t'>" + code(t) + " " + t.title + "</div><div class='d'>" + t.summary + "</div></div><span class='when'>" + S2.timeAgo(r.v) + "</span></a>";
      });
      html += "</div>";
    }
    html += "<div class='legend s2-card'><h3>How the content is labelled</h3><p>" + (CFG.legend || "") + "</p>" +
      "<p class='how'>Mastery adds up as you go: " + (hasAnyExam ? "notes 15%, your best quiz score 35%, your best exam-question score 35% and flashcards you know 15%." : "reading the notes counts for 20%, your best quiz score for 60% and flashcards you know for 20%.") + "</p></div>";
    main.innerHTML = html;
  };

  pages.learn = function (main) {
    var html = "<section class='s2-hello'><h1>Learn</h1><p>Every subtopic has notes, a quiz" + (hasAnyExam ? ", exam questions" : "") + " and flashcards. The ring shows how much of it you've mastered.</p></section>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      html += "<section class='group' id='g" + g + "'><div class='group-head'>" + ring(courseMastery(list), 52) + "<div><h2>" + groupLabel(g) + "</h2><p class='sub'>" + GROUPS[g].sub + "</p></div></div><div class='s2-rows'>";
      list.forEach(function (t) {
        var p = prog(t.id);
        html += "<a class='s2-row' href='topic.html?id=" + t.id + "'>" + ring(mastery(t), 44) +
          "<div class='grow'><div class='t'><span class='code'>" + code(t) + "</span> " + t.title + tagHtml(t) + (VIDEOS[t.id] ? " <span class='tag tag-v' title='Has a video explainer'>▶ Video</span>" : "") + "</div><div class='d'>" + (t.summary || "") + "</div></div>" +
          "<span class='when'>" + (p.exam ? "Exam best " + p.exam.s + "/" + p.exam.t : p.best ? "Quiz best " + p.best.s + "/" + p.best.t : p.read ? "Notes read" : "Not started") + "</span></a>";
      });
      html += "</div></section>";
    });
    main.innerHTML = html;
    if (location.hash) { var target = document.querySelector(location.hash); if (target) target.scrollIntoView(); }
  };

  pages.topic = function (main) {
    var t = byId(param("id") || "");
    if (!t) { main.innerHTML = "<p>That topic doesn't exist. <a href='learn.html'>See all topics</a></p>"; return; }
    document.title = code(t) + " " + t.title + " · " + CFG.name;
    var firstRead = !prog(t.id).read;
    save(t, { read: 1 });
    if (firstRead) setTimeout(function () { xp(10, "Notes opened"); }, 600);
    var idx = topics.indexOf(t), prev = topics[idx - 1], next = topics[idx + 1], m = mastery(t), p = prog(t.id), ex = exam(t.id);
    var vid = VIDEOS[t.id];
    var checks = (vid ? "<li class='" + (p.video ? "done" : "") + "'>Video watched</li>" : "") + "<li class='done'>Notes read</li><li class='" + (p.best ? "done" : "") + "'>Quiz" + (p.best ? " (best " + p.best.s + "/" + p.best.t + ")" : "") + "</li>" +
      (ex.length ? "<li class='" + (p.exam ? "done" : "") + "'>Exam questions" + (p.exam ? " (best " + p.exam.s + "/" + p.exam.t + ")" : "") + "</li>" : "") +
      "<li class='" + ((p.fc || []).length ? "done" : "") + "'>Flashcards" + ((p.fc || []).length ? " (" + p.fc.length + "/" + t.flashcards.length + " known)" : "") + "</li>";
    main.innerHTML =
      "<div class='crumbs'><a href='learn.html'>Learn</a> › <a href='learn.html#g" + t.group + "'>" + groupLabel(t.group) + "</a></div>" +
      "<div class='topic-layout'><div>" +
      "<header class='topic-head'><h1>" + code(t) + " " + t.title + "</h1><p>" + (t.summary || "") + tagHtml(t) + "</p></header>" +
      (vid && window.S2Video ? "<section id='video-slot'></section>" : "") +
      "<article class='notes s2-card'>" + t.notes + detailHtml(t) + "</article>" +
      "<div id='notebook-slot'></div>" +
      "<div class='pager'>" +
      (prev ? "<a class='s2-btn ghost' href='topic.html?id=" + prev.id + "'>← " + code(prev) + " " + prev.title + "</a>" : "<span></span>") +
      (next ? "<a class='s2-btn ghost' href='topic.html?id=" + next.id + "'>" + code(next) + " " + next.title + " →</a>" : "<span></span>") +
      "</div></div>" +
      "<aside class='topic-side'><div class='s2-card side-card'>" + bigRing(m, 84) +
      "<div class='side-label'>Topic mastery</div><ul class='checklist'>" + checks + "</ul>" +
      "<a class='s2-btn' href='quizzes.html?id=" + t.id + "'>Take the quiz</a>" +
      (ex.length ? "<a class='s2-btn' href='exam.html?id=" + t.id + "'>Exam questions (" + ex.length + ")</a>" : "") +
      "<a class='s2-btn ghost' href='flashcards.html?id=" + t.id + "'>Practise flashcards</a><a class='side-link' href='#notebook-slot'>✏️ My notes for this topic</a></div></aside></div>";
    if (vid && window.S2Video) {
      if (!vid.title) vid.title = code(t) + " " + t.title + " explained";
      if (!vid.kicker) vid.kicker = CFG.name + " · " + code(t);
      S2Video.mount(main.querySelector("#video-slot"), vid, {
        quizHref: "quizzes.html?id=" + t.id,
        onDone: function () { var first = !prog(t.id).video; save(t, { video: 1 }); if (first) xp(15, "Video watched"); }
      });
    }
    stepify(main.querySelector("article.notes"), t);
    if (window.S2Notes) main.querySelector("#notebook-slot").appendChild(S2Notes.editor({ subject: CFG.slug, id: t.id, t: t.title, code: code(t), group: groupLabel(t.group), u: "topic.html?id=" + t.id, title: "My notes: " + code(t) + " " + t.title }));
    window.scrollTo(0, 0);
  };

  /* ---------- step-by-step notes ---------- */
  var MODE_KEY = "s2-notes-mode";
  function stepMode() { try { return localStorage.getItem(MODE_KEY) !== "all"; } catch (e) { return true; } }
  function stepify(article, t) {
    if (!article) return;
    // 1. split into chunks: a new chunk at every h3, and long runs are split further
    var kids = [].slice.call(article.children), chunks = [], cur = null, len = 0;
    function start() { cur = []; chunks.push(cur); len = 0; }
    kids.forEach(function (k) {
      var isHead = k.tagName === "H3", size = (k.textContent || "").length + (k.querySelector("table,svg,img") ? 400 : 0);
      if (!cur || isHead || (len > 650 && cur.length >= 2 && k.tagName !== "H4" && !(cur[cur.length - 1].tagName === "H4"))) start();
      cur.push(k); len += size;
    });
    if (chunks.length < 3) return; // short notes: just show them
    var wraps = chunks.map(function (c, i) {
      var w = el("section", { class: "nchunk", "data-i": i });
      article.insertBefore(w, c[0]); c.forEach(function (k) { w.appendChild(k); });
      return w;
    });
    // 2. quick checks from the topic's own quiz, after every second chunk
    var qs = (t.quiz || []).slice(), qi = 0, checks = {};
    for (var i = 1; i < wraps.length - 1 && qi < qs.length; i += 2) checks[i] = qs[qi++];

    var bar = el("div", { class: "nstep-bar" });
    bar.innerHTML = "<div class='nstep-mode' role='group' aria-label='How to read the notes'><button type='button' data-m='step'>Step by step</button><button type='button' data-m='all'>Show everything</button></div><div class='nstep-prog'><span></span><div class='s2-bar'><i></i></div></div>";
    article.insertBefore(bar, article.firstChild);
    var ctl = el("div", { class: "nstep-next" });
    var p = prog(t.id), reached = Math.min(p.step || 0, wraps.length - 1);

    function paintBar(n) {
      bar.querySelector(".nstep-prog span").textContent = n >= wraps.length - 1 && done() ? "All " + wraps.length + " sections done ✓" : "Section " + (n + 1) + " of " + wraps.length;
      bar.querySelector(".s2-bar i").style.width = Math.round((n + 1) / wraps.length * 100) + "%";
    }
    function done() { return !!prog(t.id).notesDone; }
    function render(scrollTo) {
      var step = stepMode();
      [].forEach.call(bar.querySelectorAll("[data-m]"), function (b) { b.setAttribute("aria-pressed", (b.getAttribute("data-m") === "step") === step); });
      bar.querySelector(".nstep-prog").hidden = !step;
      wraps.forEach(function (w, i) { w.hidden = step && i > reached; w.classList.toggle("nchunk-current", step && i === reached); });
      if (!step) { if (ctl.parentNode) ctl.remove(); return; }
      paintBar(reached);
      var last = reached >= wraps.length - 1, q = checks[reached] && !checks[reached].passed ? checks[reached] : null;
      ctl.innerHTML = "";
      if (q) {
        var order = shuffle(q.o.map(function (_, k) { return k; }));
        ctl.innerHTML = "<div class='ncheck'><div class='ncheck-h'>Quick check</div><div class='ncheck-q'>" + q.q + "</div><div class='ncheck-o'></div><div class='ncheck-fb' role='status'></div></div>";
        var box = ctl.querySelector(".ncheck-o");
        order.forEach(function (k) {
          var b = el("button", { type: "button", class: "option" }, "<span>" + q.o[k] + "</span>");
          b.onclick = function () {
            [].forEach.call(box.querySelectorAll("button"), function (x) { x.disabled = true; });
            var ok = k === q.a; b.classList.add(ok ? "correct" : "wrong");
            if (!ok) [].forEach.call(box.querySelectorAll("button"), function (x, n) { if (order[n] === q.a) x.classList.add("correct"); });
            ctl.querySelector(".ncheck-fb").innerHTML = (ok ? "<b>" + cheer() + "</b> " : "<b>Not quite.</b> The answer is <b>" + q.o[q.a] + "</b>. ") + (q.e || "");
            if (ok) xp(3);
            q.passed = true;
            var go = el("button", { type: "button", class: "s2-btn" }, last ? "Finish the notes ✓" : "Continue →");
            go.onclick = advance; ctl.querySelector(".ncheck").appendChild(go); go.focus();
          };
          box.appendChild(b);
        });
      } else if (!last) {
        var b = el("button", { type: "button", class: "s2-btn" }, "I understand · Continue →");
        b.onclick = advance; ctl.appendChild(b);
        var sk = el("button", { type: "button", class: "s2-btn ghost small" }, "Show everything");
        sk.onclick = function () { setMode(false); }; ctl.appendChild(sk);
      } else if (!done()) {
        var f = el("button", { type: "button", class: "s2-btn" }, "I understand · Finish the notes ✓");
        f.onclick = finish; ctl.appendChild(f);
      } else {
        ctl.innerHTML = "<div class='ndone'><b>Notes finished ✓</b> Ready to test yourself? <a class='s2-btn small' href='quizzes.html?id=" + t.id + "'>Take the quiz</a></div>";
      }
      wraps[reached].appendChild(ctl);
      if (scrollTo) setTimeout(function () { wraps[reached].scrollIntoView({ behavior: "smooth", block: "start" }); }, 30);
    }
    function advance() {
      if (reached >= wraps.length - 1) return finish();
      reached++; save(t, { step: reached }); render(true);
      var f = wraps[reached].querySelector("h3,h4,p"); if (f) { f.tabIndex = -1; f.focus({ preventScroll: true }); }
    }
    function finish() {
      var first = !done(); save(t, { step: wraps.length - 1, notesDone: 1 });
      if (first) { xp(15, "Notes finished"); party(); }
      render(false);
    }
    function setMode(step) { try { localStorage.setItem(MODE_KEY, step ? "step" : "all"); } catch (e) {} render(false); }
    [].forEach.call(bar.querySelectorAll("[data-m]"), function (b) { b.onclick = function () { setMode(b.getAttribute("data-m") === "step"); }; });
    render(false);
  }

  function picker(main, kind) {
    var target = { quiz: "quizzes.html", fc: "flashcards.html", exam: "exam.html" }[kind];
    var title = { quiz: "Quizzes", fc: "Flashcards", exam: "Exam questions" }[kind];
    var intro = {
      quiz: "Pick a topic or try a mixed quiz. You'll see the answer and an explanation after each question, and your best score counts towards mastery.",
      fc: "Pick a deck and tap a card to flip it. Cards you mark as still learning come back round until you know them.",
      exam: "Exam-style questions for every subtopic: calculations, explanations, multiple choice and drawing. Calculations, multiple choice and drawings are marked for you. For written answers you see the mark scheme and tick off the points you made."
    }[kind];
    var html = "<section class='s2-hello'><h1>" + title + "</h1><p>" + intro + "</p></section>";
    if (kind !== "exam") {
      html += "<div class='picker-top'><a class='s2-btn' href='" + target + "?id=all'>Mixed: everything</a>";
      Object.keys(GROUPS).forEach(function (g) { if (inGroup(+g).length) html += "<a class='s2-btn ghost small' href='" + target + "?id=g" + g + "'>" + groupShort(+g) + " mixed</a>"; });
      html += "</div>";
    }
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      if (kind === "exam" && !list.some(function (t) { return exam(t.id).length; })) return;
      html += "<section class='group'><h2 class='plain'>" + groupLabel(g) + "</h2><div class='s2-rows'>";
      list.forEach(function (t) {
        var p = prog(t.id), info, href = target + "?id=" + t.id, cls = "s2-row";
        if (kind === "quiz") info = p.best ? "Best " + p.best.s + "/" + p.best.t : t.quiz.length + " questions";
        else if (kind === "fc") info = (p.fc || []).length ? p.fc.length + "/" + t.flashcards.length + " known" : t.flashcards.length + " cards";
        else {
          var ex = exam(t.id);
          if (!ex.length) { info = "Coming soon"; href = "topic.html?id=" + t.id; cls += " muted"; }
          else info = p.exam ? "Best " + p.exam.s + "/" + p.exam.t + " marks" : ex.length + " questions · " + examMarks(ex) + " marks";
        }
        html += "<a class='" + cls + "' href='" + href + "'>" + ring(mastery(t), 40) + "<div class='grow'><div class='t'><span class='code'>" + code(t) + "</span> " + t.title + "</div></div><span class='when'>" + info + "</span></a>";
      });
      html += "</div></section>";
    });
    main.innerHTML = html;
  }

  function collect(id, field) {
    var list;
    if (id === "all") list = topics;
    else if (/^g\d+$/.test(id)) list = inGroup(+id.slice(1));
    else { var t = byId(id); list = t ? [t] : []; }
    var items = [];
    list.forEach(function (t) { t[field].forEach(function (x, i) { items.push({ item: x, topic: t, i: i }); }); });
    var title = id === "all" ? "Mixed: everything" : /^g\d+$/.test(id) ? groupLabel(+id.slice(1)) : (list[0] ? code(list[0]) + " " + list[0].title : "");
    return { title: title, items: items, single: list.length === 1 ? list[0] : null };
  }

  pages.quizzes = function (main) {
    var id = param("id");
    if (!id) return picker(main, "quiz");
    var set = collect(id, "quiz");
    if (!set.items.length) { main.innerHTML = "<p>No questions found for this quiz. <a href='quizzes.html'>Choose a quiz</a></p>"; return; }
    var MAX = set.single ? set.items.length : 20;
    var qs, i, score, wrong, combo = 0, bestCombo = 0;

    function start() { qs = shuffle(set.items).slice(0, MAX); i = 0; score = 0; wrong = []; combo = 0; bestCombo = 0; render(); }
    function render() {
      var cur = qs[i], q = cur.item;
      var order = shuffle(q.o.map(function (_, k) { return k; }));
      main.innerHTML =
        "<div class='quiz-wrap'><div class='crumbs'><a href='quizzes.html'>Quizzes</a> › " + set.title + "</div>" +
        "<div class='q-meta'><span>Question " + (i + 1) + " of " + qs.length + (set.single ? "" : " · " + code(cur.topic) + " " + cur.topic.title) + "</span><span>" + (combo >= 2 ? "<span class='combo'>🔥 " + combo + " in a row</span> · " : "") + score + " correct</span></div>" +
        "<div class='s2-bar quiz-bar'><i style='width:" + (i / qs.length * 100) + "%'></i></div>" +
        "<div class='s2-card q-card'><div class='q-text'>" + q.q + "</div><div class='options'></div>" +
        "<div class='feedback' role='status'></div>" +
        "<div class='q-next'><button class='s2-btn' id='next' hidden>" + (i + 1 < qs.length ? "Next question" : "See results") + "</button></div></div></div>";
      var box = main.querySelector(".options");
      order.forEach(function (k, n) {
        var b = el("button", { class: "option", type: "button" }, "<span class='key'>" + "ABCDEF".charAt(n) + "</span><span>" + q.o[k] + "</span>");
        b.onclick = function () { answer(k, b); };
        b.dataset.k = k;
        box.appendChild(b);
      });
      function answer(k, btn) {
        var all = box.querySelectorAll(".option");
        for (var n = 0; n < all.length; n++) { all[n].disabled = true; if (+all[n].dataset.k === q.a) all[n].classList.add("correct"); }
        var fb = main.querySelector(".feedback");
        if (k === q.a) {
          score++; combo++; bestCombo = Math.max(bestCombo, combo);
          fb.className = "feedback show good"; fb.innerHTML = "<b>" + cheer() + "</b> " + (combo >= 3 ? "<span class='combo'>🔥 " + combo + " in a row!</span> " : "") + (q.e || "");
          xp(combo >= 3 ? 8 : 5);
        }
        else { combo = 0; btn.classList.add("wrong"); wrong.push({ q: q, pick: k, topic: cur.topic }); fb.className = "feedback show bad"; fb.innerHTML = "<b>Not quite.</b> The answer is <b>" + q.o[q.a] + "</b>. " + (q.e || ""); }
        var nx = main.querySelector("#next"); nx.hidden = false; nx.focus();
        nx.onclick = function () { i++; if (i < qs.length) render(); else finish(); };
      }
    }
    function finish() {
      var before = set.single ? mastery(set.single) : 0, improved = false;
      if (set.single) {
        var p = prog(set.single.id);
        if (!p.best || score / qs.length > p.best.s / p.best.t) { save(set.single, { best: { s: score, t: qs.length } }); improved = !!p.best || score > 0; }
        else save(set.single, {});
      } else if (S2) { S2.markActive(); }
      var pct = Math.round(score / qs.length * 100);
      var msg = pct === 100 ? "Perfect score. Absolute legend." : pct >= 90 ? "Outstanding." : pct >= 70 ? "Great work." : pct >= 50 ? "Good effort. Go over the questions you missed below." : "Re-read the notes, then try again.";
      if (pct >= 80) setTimeout(party, 200);
      if (improved) xp(20, "New best score");
      if (bestCombo >= 5) msg += " Best streak: " + bestCombo + " in a row 🔥";
      var html = "<div class='quiz-wrap'><div class='crumbs'><a href='quizzes.html'>Quizzes</a> › " + set.title + "</div><div class='s2-card results'>" +
        "<div class='score-big'>" + score + "<span>/" + qs.length + "</span></div><p class='pct'>" + pct + "% · " + msg + "</p>";
      if (set.single) {
        var after = mastery(set.single);
        html += "<div class='mastery-change'>" + ring(after, 64) + "<div><b>" + code(set.single) + " mastery: " + after + "%</b><br><span>" + (after > before ? "Up from " + before + "%." : improved ? "New best score." : "Your best score still counts.") + "</span></div></div>";
      }
      html += "<div class='topic-actions'><button class='s2-btn' id='again'>Try again</button>" +
        (set.single ? "<a class='s2-btn ghost' href='topic.html?id=" + set.single.id + "'>Back to notes</a>" + (exam(set.single.id).length ? "<a class='s2-btn ghost' href='exam.html?id=" + set.single.id + "'>Exam questions</a>" : "") : "") +
        "<a class='s2-btn ghost' href='quizzes.html'>All quizzes</a></div></div>";
      if (wrong.length) {
        html += "<div class='s2-card review'><h3>Review what you missed</h3>";
        wrong.forEach(function (w) {
          html += "<div class='review-item'><b>" + w.q.q + "</b><br><span class='your'>Your answer: " + w.q.o[w.pick] + "</span><br><span class='right'>Correct: " + w.q.o[w.q.a] + "</span>" +
            (w.q.e ? "<br><small>" + w.q.e + "</small>" : "") + " <small>(<a href='topic.html?id=" + w.topic.id + "'>" + code(w.topic) + " notes</a>)</small></div>";
        });
        html += "</div>";
      }
      main.innerHTML = html + "</div>";
      main.querySelector("#again").onclick = start;
      window.scrollTo(0, 0);
    }
    start();
  };

  // ---------- exam questions ----------
  function parseNum(s) {
    if (s == null) return NaN;
    s = String(s).trim().replace(/,/g, "").replace(/\s+/g, "").replace(/−/g, "-");
    var m = /^([-+]?\d*\.?\d+)(?:(?:[x×*]10\^?|e)([-+]?\d+))?/i.exec(s);
    if (!m) return NaN;
    return parseFloat(m[1]) * (m[2] ? Math.pow(10, +m[2]) : 1);
  }
  function numOk(val, q) {
    var ans = [].concat(q.ans);
    return ans.some(function (a) {
      if (q.tol != null) return Math.abs(val - a) <= q.tol;
      var rel = q.rel != null ? q.rel : 0.02;
      return Math.abs(val - a) <= Math.abs(a) * rel + 1e-12;
    });
  }
  function kwHit(text, kws) {
    text = " " + text.toLowerCase() + " ";
    return kws.some(function (k) { return text.indexOf(k.toLowerCase()) >= 0; });
  }

  pages.exam = function (main) {
    var id = param("id");
    if (!id) return picker(main, "exam");
    var t = byId(id), qs = exam(id);
    if (!t || !qs.length) { main.innerHTML = "<p>There aren't exam questions for this topic yet. <a href='exam.html'>See all exam questions</a></p>"; return; }
    document.title = "Exam questions · " + code(t) + " " + t.title + " · " + CFG.name;
    var total = examMarks(qs), state = qs.map(function () { return { done: false, got: 0 }; }), i = 0;

    function got() { return state.reduce(function (s, x) { return s + x.got; }, 0); }
    function attempted() { return state.filter(function (x) { return x.done; }).length; }

    function render() {
      var q = qs[i], st = state[i], m = q.m || 1;
      var dots = qs.map(function (_, n) {
        var s = state[n], c = s.done ? (s.got === (qs[n].m || 1) ? "full" : s.got > 0 ? "part" : "zero") : "";
        return "<button class='ex-dot " + c + (n === i ? " cur" : "") + "' data-n='" + n + "' aria-label='Question " + (n + 1) + "'>" + (n + 1) + "</button>";
      }).join("");
      main.innerHTML =
        "<div class='exam-wrap'><div class='crumbs'><a href='exam.html'>Exam questions</a> › <a href='topic.html?id=" + t.id + "'>" + code(t) + " " + t.title + "</a></div>" +
        "<div class='ex-head'><h1>" + code(t) + " " + t.title + "</h1><div class='ex-score'><b>" + got() + "</b> / " + total + " marks · " + attempted() + " of " + qs.length + " answered</div></div>" +
        "<div class='ex-dots'>" + dots + "</div>" +
        "<div class='s2-card ex-card'><div class='ex-qhead'><span class='ex-num'>Question " + (i + 1) + "</span><span class='ex-marks'>[" + m + " mark" + (m > 1 ? "s" : "") + "]</span></div>" +
        "<div class='q-text ex-q'>" + q.q + "</div><div class='ex-answer'></div><div class='feedback' role='status'></div>" +
        "<div class='ex-actions'><button class='s2-btn ghost' id='prevq'" + (i === 0 ? " disabled" : "") + ">Previous</button><span class='grow'></span><button class='s2-btn' id='check'>Check answer</button><button class='s2-btn' id='nextq' hidden>" + (i + 1 < qs.length ? "Next question" : "See results") + "</button></div></div></div>";
      [].forEach.call(main.querySelectorAll(".ex-dot"), function (b) { b.onclick = function () { i = +b.dataset.n; render(); }; });
      main.querySelector("#prevq").onclick = function () { if (i > 0) { i--; render(); } };
      var nextB = main.querySelector("#nextq"), checkB = main.querySelector("#check");
      nextB.onclick = function () { if (i + 1 < qs.length) { i++; render(); } else finish(); };
      var box = main.querySelector(".ex-answer"), fb = main.querySelector(".feedback");
      function done(mark, html, cls) {
        if (!st.done) { st.done = true; st.got = mark; if (mark > 0) xp(mark * 5, mark + " mark" + (mark > 1 ? "s" : "")); }
        fb.className = "feedback show " + (cls || (mark === m ? "good" : mark > 0 ? "part" : "bad"));
        fb.innerHTML = html;
        checkB.hidden = true; nextB.hidden = false;
        main.querySelector(".ex-score").innerHTML = "<b>" + got() + "</b> / " + total + " marks · " + attempted() + " of " + qs.length + " answered";
        var dot = main.querySelector(".ex-dot[data-n='" + i + "']"); dot.className = "ex-dot cur " + (st.got === m ? "full" : st.got > 0 ? "part" : "zero");
      }
      function msHtml(q) {
        if (!q.ms) return "";
        var pts = [].concat(q.ms);
        return "<div class='ms'><b>Mark scheme</b><ul>" + pts.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul></div>";
      }
      var kind = q.t || "mcq";

      if (kind === "mcq") {
        var order = shuffle(q.o.map(function (_, k) { return k; }));
        var opts = el("div", { class: "options" });
        order.forEach(function (k, n) {
          var b = el("button", { class: "option", type: "button" }, "<span class='key'>" + "ABCDEF".charAt(n) + "</span><span>" + q.o[k] + "</span>");
          b.dataset.k = k; opts.appendChild(b);
          b.onclick = function () {
            [].forEach.call(opts.children, function (x) { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("correct"); });
            if (k !== q.a) b.classList.add("wrong");
            done(k === q.a ? m : 0, (k === q.a ? "<b>Correct.</b> " : "<b>Not quite.</b> The answer is <b>" + q.o[q.a] + "</b>. ") + (q.e || "") + msHtml(q));
          };
        });
        box.appendChild(opts); checkB.hidden = true;
        if (st.done) { checkB.hidden = true; nextB.hidden = false; fb.className = "feedback show " + (st.got ? "good" : "bad"); fb.innerHTML = "You've answered this one (" + st.got + "/" + m + "). The answer is <b>" + q.o[q.a] + "</b>. " + (q.e || ""); [].forEach.call(opts.children, function (x) { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("correct"); }); }
      }

      else if (kind === "num") {
        box.innerHTML = "<label class='num-row'><span class='sr'>Your answer</span><input type='text' inputmode='decimal' class='num-in' autocomplete='off' placeholder='Your answer'>" + (q.unit ? "<span class='unit'>" + q.unit + "</span>" : "") + "</label>" +
          "<div class='hint-sm'>Type a number. You can write standard form like 6.0e23 or 6.0x10^23.</div>";
        var inp = box.querySelector("input");
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") checkB.click(); });
        checkB.onclick = function () {
          var v = parseNum(inp.value);
          if (isNaN(v)) { fb.className = "feedback show bad"; fb.innerHTML = "Type a number to check, for example 0.25"; return; }
          var ok = numOk(v, q), shown = [].concat(q.ans)[0];
          inp.disabled = true; inp.classList.add(ok ? "ok" : "no");
          done(ok ? m : 0, (ok ? "<b>Correct.</b> " : "<b>Not quite.</b> The answer is <b>" + shown + (q.unit ? " " + q.unit : "") + "</b>. ") + (q.e || "") + msHtml(q));
        };
        if (st.done) { inp.disabled = true; checkB.hidden = true; nextB.hidden = false; fb.className = "feedback show"; fb.innerHTML = "You've answered this one (" + st.got + "/" + m + "). Answer: <b>" + [].concat(q.ans)[0] + (q.unit ? " " + q.unit : "") + "</b>." + msHtml(q); }
        else setTimeout(function () { inp.focus(); }, 30);
      }

      else if (kind === "text") {
        box.innerHTML = "<textarea class='text-in' rows='4' placeholder='Write your answer as you would in the exam'></textarea>";
        var ta = box.querySelector("textarea");
        checkB.textContent = "Mark my answer";
        checkB.onclick = function () {
          var ans = ta.value.trim();
          if (ans.length < 3) { fb.className = "feedback show bad"; fb.innerHTML = "Write your answer first, then check it against the mark scheme."; return; }
          ta.disabled = true;
          var pts = q.ms || [];
          var html = "<b>Tick each mark-scheme point you made.</b> We've pre-ticked the ones your answer seems to include. Check them yourself.<ul class='ms-check'>" +
            pts.map(function (p, n) {
              var hit = q.kw && q.kw[n] ? kwHit(ans, q.kw[n]) : false;
              return "<li><label><input type='checkbox' data-n='" + n + "'" + (hit ? " checked" : "") + "> <span>" + p + "</span></label></li>";
            }).join("") + "</ul>" + (q.e ? "<p class='ms-note'>" + q.e + "</p>" : "") + (pts.length > m ? "<p class='ms-note'>Any " + m + " of these points get the marks.</p>" : "") +
            "<button class='s2-btn small' id='save-mark'>Save my mark</button>";
          fb.className = "feedback show neutral"; fb.innerHTML = html; checkB.hidden = true;
          fb.querySelector("#save-mark").onclick = function () {
            var n = fb.querySelectorAll("input:checked").length, mark = Math.min(m, n);
            [].forEach.call(fb.querySelectorAll("input"), function (x) { x.disabled = true; });
            this.remove();
            var verdict = mark === m ? "Full marks." : mark > 0 ? "Partial marks. Compare your answer with the points you missed." : "No marks this time. Learn the points above, then try again later.";
            done(mark, fb.innerHTML.replace(/<button[^>]*>.*?<\/button>/, "") + "<p class='ms-result'><b>" + mark + "/" + m + "</b> · " + verdict + "</p>", mark === m ? "good" : mark ? "part" : "bad");
          };
        };
        if (st.done) { ta.disabled = true; ta.placeholder = "Answered (" + st.got + "/" + m + ")"; checkB.hidden = true; nextB.hidden = false; fb.className = "feedback show neutral"; fb.innerHTML = msHtml(q); }
      }

      else if (kind === "draw") {
        var host = el("div"); box.appendChild(host);
        var pad = new window.MolPad.Pad(host);
        var answers = [].concat(q.mol);
        var tries = 0;
        checkB.onclick = function () {
          var drawn = pad.value();
          var results = answers.map(function (a) { return window.MolPad.check(drawn, a, { hint: q.hint }); });
          var best = results.filter(function (r) { return r.ok; })[0] || results.filter(function (r) { return r.partial; })[0] || results[0];
          if (best.bad != null) pad.mark(best.bad); else pad.mark(-1);
          tries++;
          var mark = best.ok ? m : best.partial ? Math.max(0, m - 1) : 0;
          if (best.ok || tries >= 2 || st.done) {
            pad.lock(true);
            done(mark, (best.ok ? "<b>Correct.</b> " : "<b>" + (best.partial ? "Nearly." : "Not quite.") + "</b> " + best.msg + " ") + (q.e || "") + msHtml(q) +
              (best.ok ? "" : "<button class='s2-btn ghost small' id='show-ans'>Show the answer</button>"));
            var sa = fb.querySelector("#show-ans");
            if (sa) sa.onclick = function () { pad.load(answers[0]); sa.remove(); };
          } else {
            fb.className = "feedback show " + (best.partial ? "part" : "bad");
            fb.innerHTML = "<b>" + (best.partial ? "Nearly." : "Not quite.") + "</b> " + best.msg + " <i>Fix it and check again. Your mark counts after this attempt.</i>";
          }
        };
        if (st.done) { pad.load(answers[0]); pad.lock(true); checkB.hidden = true; nextB.hidden = false; fb.className = "feedback show neutral"; fb.innerHTML = "You've answered this one (" + st.got + "/" + m + "). Here's the answer." + msHtml(q); }
      }
    }

    function finish() {
      var s = got(), before = mastery(t), p = prog(t.id);
      if (!p.exam || s / total > p.exam.s / p.exam.t) save(t, { exam: { s: s, t: total } }); else save(t, {});
      var after = mastery(t), pct = Math.round(s / total * 100);
      if (pct >= 70) setTimeout(party, 200);
      var grade = pct >= 80 ? "Excellent: that's top-grade territory." : pct >= 60 ? "Solid. Look over the questions you dropped marks on." : pct >= 40 ? "Getting there. Re-read the notes and try the ones you missed." : "Go back over the notes, then have another go.";
      var rows = qs.map(function (q, n) {
        var st = state[n], mm = q.m || 1;
        return "<button class='ex-res " + (st.done ? (st.got === mm ? "full" : st.got ? "part" : "zero") : "skip") + "' data-n='" + n + "'><span>Q" + (n + 1) + "</span><b>" + (st.done ? st.got : "–") + "/" + mm + "</b></button>";
      }).join("");
      main.innerHTML = "<div class='exam-wrap'><div class='crumbs'><a href='exam.html'>Exam questions</a> › " + code(t) + " " + t.title + "</div>" +
        "<div class='s2-card results'><div class='score-big'>" + s + "<span>/" + total + "</span></div><p class='pct'>" + pct + "% · " + grade + "</p>" +
        "<div class='mastery-change'>" + ring(after, 64) + "<div><b>" + code(t) + " mastery: " + after + "%</b><br><span>" + (after > before ? "Up from " + before + "%." : "Your best exam score counts towards mastery.") + "</span></div></div>" +
        (attempted() < qs.length ? "<p class='pct'>You answered " + attempted() + " of " + qs.length + " questions. Unanswered questions score 0.</p>" : "") +
        "<div class='topic-actions'><button class='s2-btn' id='again'>Start again</button><a class='s2-btn ghost' href='topic.html?id=" + t.id + "'>Back to notes</a><a class='s2-btn ghost' href='exam.html'>All exam questions</a></div></div>" +
        "<div class='s2-card review'><h3>Question by question</h3><p class='pct' style='margin:0 0 10px'>Tap a question to look at it again.</p><div class='ex-results'>" + rows + "</div></div></div>";
      main.querySelector("#again").onclick = function () { state = qs.map(function () { return { done: false, got: 0 }; }); i = 0; render(); };
      [].forEach.call(main.querySelectorAll(".ex-res"), function (b) { b.onclick = function () { i = +b.dataset.n; render(); }; });
      window.scrollTo(0, 0);
    }
    render();
  };

  pages.workbook = function (main) {
    var html = "<section class='s2-hello wb-hello'><div><h1>" + CFG.name.replace("²", "") + " workbook</h1><p>Every topic in one place, with your own notes under each heading. Type straight into any page: it saves automatically on this device. Print it or save it as a PDF to revise on paper.</p></div>" +
      "<div class='wb-actions'><button class='s2-btn ghost small' id='wb-print'>Print / save as PDF</button><a class='s2-btn ghost small' href='../workbook.html'>All subjects' notes</a></div></section>" +
      "<div class='wb-bar s2-card'><label class='wb-search'><span class='sr'>Search notes</span><input type='search' placeholder='Search your notes and topic titles'></label>" +
      "<label class='wb-toggle'><input type='checkbox' id='wb-only'> Only topics with notes</label><span class='wb-count'></span></div>" +
      "<nav class='wb-toc s2-card' aria-label='Contents'><b>Contents</b><ol>" + Object.keys(GROUPS).map(function (g) { g = +g; return inGroup(g).length ? "<li><a href='#wb-g" + g + "'>" + groupLabel(g) + "</a></li>" : ""; }).join("") + "</ol></nav>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      html += "<section class='wb-group' id='wb-g" + g + "'><h2 class='wb-group-title'>" + groupLabel(g) + "</h2>";
      list.forEach(function (t) {
        html += "<article class='wb-topic' data-id='" + t.id + "' data-title='" + (code(t) + " " + t.title).toLowerCase().replace(/'/g, "") + "'>" +
          "<header class='wb-label'><span class='wb-code'>" + code(t) + "</span><div><h3>" + t.title + tagHtml(t) + "</h3><p>" + (t.summary || "") + "</p></div>" + ring(mastery(t), 40) +
          "<a class='s2-btn ghost small' href='topic.html?id=" + t.id + "'>Open topic</a></header><div class='wb-ed'></div></article>";
      });
      html += "</section>";
    });
    main.innerHTML = html;
    var arts = [].slice.call(main.querySelectorAll(".wb-topic"));
    arts.forEach(function (a) {
      var t = byId(a.dataset.id);
      if (window.S2Notes) a.querySelector(".wb-ed").appendChild(S2Notes.editor({ subject: CFG.slug, id: t.id, t: t.title, code: code(t), group: groupLabel(t.group), u: "topic.html?id=" + t.id, compact: true }));
    });
    var q = main.querySelector(".wb-search input"), only = main.querySelector("#wb-only"), cnt = main.querySelector(".wb-count");
    function filter() {
      var term = q.value.trim().toLowerCase(), shown = 0, withNotes = 0;
      arts.forEach(function (a) {
        var text = (a.querySelector(".nb-page").innerText || "").toLowerCase(), has = text.trim().length > 0;
        if (has) withNotes++;
        var ok = (!only.checked || has) && (!term || a.dataset.title.indexOf(term) >= 0 || text.indexOf(term) >= 0);
        a.hidden = !ok; if (ok) shown++;
      });
      [].forEach.call(main.querySelectorAll(".wb-group"), function (g) { g.hidden = !g.querySelector(".wb-topic:not([hidden])"); });
      cnt.textContent = withNotes + " of " + arts.length + " topics have notes";
    }
    q.addEventListener("input", filter); only.addEventListener("change", filter);
    main.addEventListener("input", function () { clearTimeout(filter.t); filter.t = setTimeout(filter, 800); });
    main.querySelector("#wb-print").onclick = function () { window.print(); };
    filter();
  };

  pages.flashcards = function (main) {
    var id = param("id");
    if (!id) return picker(main, "fc");
    var set = collect(id, "flashcards");
    if (!set.items.length) { main.innerHTML = "<p>No cards found for this deck. <a href='flashcards.html'>Choose a deck</a></p>"; return; }
    var deck = set.items.slice(), pos = 0, learning = [], round = 1;

    function known(c) {
      var p = prog(c.topic.id), fc = (p.fc || []).slice();
      if (fc.indexOf(c.i) < 0) { fc.push(c.i); save(c.topic, { fc: fc }); xp(2); }
    }
    main.innerHTML =
      "<div class='crumbs'><a href='flashcards.html'>Flashcards</a> › " + set.title + "</div>" +
      "<div class='fc-stage'><div class='fc' id='fc' tabindex='0' role='button' aria-label='Flip card'>" +
      "<div class='fc-face fc-front'><span class='lbl'>Question</span><div id='front'></div></div>" +
      "<div class='fc-face fc-back'><span class='lbl'>Answer</span><div id='back'></div></div></div></div>" +
      "<div class='fc-count' id='count'></div><div class='hint'>Tap the card or press Space to flip. Use ← and → to move.</div>" +
      "<div class='fc-controls'>" +
      "<button class='s2-btn ghost' id='prev'>Back</button>" +
      "<button class='s2-btn ghost' id='learn'>Still learning</button>" +
      "<button class='s2-btn' id='got'>Got it</button>" +
      "<button class='s2-btn ghost' id='shuf'>Shuffle</button></div>" +
      (set.single ? "<div class='fc-controls'><a class='s2-btn ghost small' href='topic.html?id=" + set.single.id + "'>Back to notes</a><a class='s2-btn ghost small' href='quizzes.html?id=" + set.single.id + "'>Take the quiz</a></div>" : "");
    var card = main.querySelector("#fc");
    function show() {
      card.classList.remove("flipped");
      if (pos >= deck.length) return endRound();
      var c = deck[pos];
      main.querySelector("#front").innerHTML = c.item[0];
      main.querySelector("#back").innerHTML = c.item[1];
      main.querySelector("#count").innerHTML = "Card " + (pos + 1) + " of " + deck.length + (round > 1 ? " · Round " + round : "") + (set.single ? "" : " · " + code(c.topic) + " " + c.topic.title);
    }
    function endRound() {
      if (learning.length) {
        deck = shuffle(learning); learning = []; pos = 0; round++;
        main.querySelector("#count").innerHTML = "Now going over the cards you're still learning.";
        setTimeout(show, 700);
      } else {
        main.querySelector("#front").innerHTML = "Deck complete";
        main.querySelector("#back").innerHTML = "You know every card in this deck.";
        main.querySelector("#count").innerHTML = "You've got every card. <a href='#' id='restart'>Start again</a>";
        party();
        if (set.single) toast("Flashcards done: " + code(set.single) + " is now " + mastery(set.single) + "% mastered");
        main.querySelector("#restart").onclick = function (e) { e.preventDefault(); deck = set.items.slice(); pos = 0; round = 1; show(); };
      }
    }
    function flip() { card.classList.toggle("flipped"); }
    card.onclick = flip;
    main.querySelector("#got").onclick = function () { if (pos < deck.length) { known(deck[pos]); pos++; show(); } };
    main.querySelector("#learn").onclick = function () { if (pos < deck.length) { learning.push(deck[pos]); pos++; show(); } };
    main.querySelector("#prev").onclick = function () { if (pos > 0) { pos--; show(); } };
    main.querySelector("#shuf").onclick = function () { deck = shuffle(deck); pos = 0; show(); };
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable || document.body.classList.contains("nb-open") && e.target.closest && e.target.closest(".nb-drawer")) return;
      var onControl = e.target.tagName === "BUTTON" || e.target.tagName === "A";
      if ((e.key === " " || e.key === "Enter") && !onControl) { e.preventDefault(); flip(); }
      else if (e.key === "ArrowRight") { if (pos < deck.length) { pos++; show(); } }
      else if (e.key === "ArrowLeft") { if (pos > 0) { pos--; show(); } }
    });
    show();
  };

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    chrome({ home: "index.html", learn: "learn.html", topic: "learn.html", quizzes: "quizzes.html", flashcards: "flashcards.html", exam: "exam.html", workbook: "workbook.html" }[page]);
    var main = document.querySelector("main");
    if (pages[page]) pages[page](main);
    var tid = param("id"), tt = tid && byId(tid);
    if (tt && window.S2Notes && S2Notes.drawer && ["topic", "quizzes", "flashcards", "exam"].indexOf(page) >= 0)
      S2Notes.drawer({ subject: CFG.slug, id: tt.id, t: tt.title, code: code(tt), group: groupLabel(tt.group), u: "topic.html?id=" + tt.id }, page === "topic" ? main.querySelector(".notes") || main : main);
  });
})();
