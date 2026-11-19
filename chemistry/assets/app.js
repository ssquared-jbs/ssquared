/* Chemistry² — app logic. Content lives in data/topic*.js; progress uses ../shared/s2-progress.js */
(function () {
  "use strict";

  var GROUPS = {
    1: { name: "Principles of chemistry", sub: "States of matter, atoms, bonding, moles and electrolysis" },
    2: { name: "Inorganic chemistry", sub: "Groups, the atmosphere, metals, acids, salts and tests" },
    3: { name: "Physical chemistry", sub: "Energetics, rates and equilibria" },
    4: { name: "Organic chemistry", sub: "Crude oil, hydrocarbons, alcohols, acids, esters and polymers" },
    5: { name: "Edexcel GCSE extras", sub: "Content in Edexcel GCSE (1CH0) that isn't in the International GCSE (4CH1)" }
  };
  var S2 = window.S2;
  var topics = (window.CHEM && window.CHEM.topics) || [];
  topics.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
  function byId(id) { for (var i = 0; i < topics.length; i++) if (topics[i].id === id) return topics[i]; return null; }
  function inGroup(g) { return topics.filter(function (t) { return t.group === g; }); }
  function groupLabel(g) { return g < 5 ? "Topic " + g + ": " + GROUPS[g].name : GROUPS[g].name; }

  // ---------- progress ----------
  function key(id) { return "chem:" + id; }
  function prog(id) { return (S2 && S2.item(key(id))) || {}; }
  function save(t, patch) {
    if (!S2) return;
    patch.s = "chemistry"; patch.t = t.title; patch.code = code(t); patch.u = "topic.html?id=" + t.id;
    S2.touch(key(t.id), patch);
  }
  // Mastery: notes read 20%, best quiz score 60%, flashcards known 20%
  function mastery(t) {
    var p = prog(t.id), m = 0;
    if (p.read) m += 20;
    if (p.best) m += 60 * p.best.s / p.best.t;
    if (p.fc && t.flashcards.length) m += 20 * Math.min(p.fc.length, t.flashcards.length) / t.flashcards.length;
    return Math.round(m);
  }
  function courseMastery(list) {
    list = list || topics; if (!list.length) return 0;
    var sum = 0; list.forEach(function (t) { sum += mastery(t); }); return Math.round(sum / list.length);
  }
  // one-off migration of old best scores
  try {
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
  function tagHtml(t) {
    var s = "";
    if (t.paper2) s += ' <span class="tag tag-c">Paper 2 only</span>';
    if (t.gcse) s += ' <span class="tag tag-g">GCSE 1CH0</span>';
    return s;
  }
  function code(t) { return t.id.charAt(0) + "(" + t.id.slice(1) + ")"; }
  function ring(p, size) { return S2 ? S2.ring(p, size) : ""; }
  function toast(msg) {
    var t = el("div", { class: "s2-toast", role: "status" }, msg); document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2400);
  }

  // ---------- chrome ----------
  function chrome(active, sub) {
    var bar = el("header", { class: "s2-appbar" });
    bar.innerHTML =
      '<a class="s2-logo" href="../index.html" title="Back to Ssquared HQ">S<sup>2</sup></a>' +
      '<div class="s2-brand"><a class="s2-title" href="index.html">Chemistry²</a><span class="s2-sub">' + (sub || "Edexcel IGCSE &amp; GCSE Chemistry") + "</span></div>" +
      '<nav class="s2-nav" aria-label="Chemistry²">' +
      ["index.html|Home", "learn.html|Learn", "quizzes.html|Quizzes", "flashcards.html|Flashcards"].map(function (x) {
        var p = x.split("|"); return '<a href="' + p[0] + '"' + (active === p[0] ? ' class="active" aria-current="page"' : "") + ">" + p[1] + "</a>";
      }).join("") + "</nav>";
    if (S2) bar.appendChild(S2.streakPill());
    document.body.insertBefore(bar, document.body.firstChild);
    var footer = el("footer", { class: "s2-footer" });
    footer.innerHTML = '<span>Chemistry² · part of <a href="../index.html" style="margin:0">Ssquared HQ</a></span><span><a href="about.html">About</a><a href="privacy.html">Privacy Policy</a><a href="contact.html">Contact</a></span>';
    document.body.appendChild(footer);
  }

  // ---------- pages ----------
  var pages = {};

  pages.home = function (main) {
    var recent = S2 ? S2.items("chemistry") : [];
    var st = S2 ? S2.streak() : { current: 0, best: 0, week: [] };
    var started = topics.filter(function (t) { return mastery(t) > 0; });
    var mastered = topics.filter(function (t) { return mastery(t) >= 80; });
    var cm = courseMastery();

    // what to do next: last topic if unfinished, otherwise the first topic not yet mastered
    var nextT = null, lastT = recent.length ? byId(recent[0].key.replace("chem:", "")) : null;
    if (lastT && mastery(lastT) < 80) nextT = lastT;
    if (!nextT) for (var i = 0; i < topics.length; i++) if (mastery(topics[i]) < 80) { nextT = topics[i]; break; }
    var first = !recent.length;

    var nq = 0, nf = 0; topics.forEach(function (t) { nq += t.quiz.length; nf += t.flashcards.length; });

    var html = "<section class='s2-hello'><h1>" + (first ? "Revise all of GCSE Chemistry" : "Welcome back") + "</h1><p>" +
      (first ? "Every topic of Edexcel International GCSE Chemistry (4CH1) plus the extra Edexcel GCSE (1CH0) content: notes, " + nq + " quiz questions and " + nf + " flashcards. Your progress is saved on this device." :
        "Pick up where you left off, or choose any topic below.") + "</p></section>";

    html += "<div class='s2-dash'><div class='s2-card s2-continue'>";
    if (nextT) {
      var m = mastery(nextT), p = prog(nextT.id);
      var step = !p.read ? ["Read the notes", "topic.html?id=" + nextT.id] : !p.best ? ["Take the quiz", "quizzes.html?id=" + nextT.id] :
        (p.best.s / p.best.t < 0.8 ? ["Beat your quiz score", "quizzes.html?id=" + nextT.id] : ["Practise the flashcards", "flashcards.html?id=" + nextT.id]);
      html += ring(m, 84).replace('class="s2-ring"', 'class="s2-ring big"') + "<div><div class='s2-kicker'>" + (first ? "Start here" : "Up next") + "</div><h2>" + code(nextT) + " " + nextT.title + "</h2>" +
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

    html += "<h2 class='s2-section-title'>Your topics</h2><div class='group-grid'>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      var gm = courseMastery(list);
      html += "<a class='s2-card group-tile' href='learn.html#g" + g + "'>" + ring(gm, 56) + "<div><h3>" + groupLabel(g) + "</h3><p>" + list.length + " subtopics · " + GROUPS[g].sub + "</p></div></a>";
    });
    html += "</div>";

    if (recent.length) {
      html += "<h2 class='s2-section-title'>Recently studied</h2><div class='s2-rows'>";
      recent.slice(0, 4).forEach(function (r) {
        var t = byId(r.key.replace("chem:", "")); if (!t) return;
        html += "<a class='s2-row' href='topic.html?id=" + t.id + "'>" + ring(mastery(t), 44) + "<div class='grow'><div class='t'>" + code(t) + " " + t.title + "</div><div class='d'>" + t.summary + "</div></div><span class='when'>" + S2.timeAgo(r.v) + "</span></a>";
      });
      html += "</div>";
    }
    html += "<div class='legend s2-card'><h3>How the content is labelled</h3><p><span class='tag tag-c'>Paper 2 only</span> International GCSE content examined only on Paper 2 (\"C\" in the 4CH1 spec)<br><span class='tag tag-p'>Practical</span> A required practical you could be asked about<br><span class='tag tag-g'>GCSE 1CH0</span> Edexcel GCSE content that isn't in the International GCSE</p>" +
      "<p class='how'>Mastery adds up as you go: reading the notes counts for 20%, your best quiz score for 60% and flashcards you know for 20%.</p></div>";
    main.innerHTML = html;
  };

  pages.learn = function (main) {
    var html = "<section class='s2-hello'><h1>Learn</h1><p>Every subtopic has notes, a quiz and flashcards. The ring shows how much of it you've mastered.</p></section>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      html += "<section class='group' id='g" + g + "'><div class='group-head'>" + ring(courseMastery(list), 52) + "<div><h2>" + groupLabel(g) + "</h2><p class='sub'>" + GROUPS[g].sub + "</p></div></div><div class='s2-rows'>";
      list.forEach(function (t) {
        var p = prog(t.id);
        html += "<a class='s2-row' href='topic.html?id=" + t.id + "'>" + ring(mastery(t), 44) +
          "<div class='grow'><div class='t'><span class='code'>" + code(t) + "</span> " + t.title + tagHtml(t) + "</div><div class='d'>" + (t.summary || "") + "</div></div>" +
          "<span class='when'>" + (p.best ? "Quiz best " + p.best.s + "/" + p.best.t : p.read ? "Notes read" : "Not started") + "</span></a>";
      });
      html += "</div></section>";
    });
    main.innerHTML = html;
    if (location.hash) { var target = document.querySelector(location.hash); if (target) target.scrollIntoView(); }
  };

  pages.topic = function (main) {
    var t = byId(param("id") || "");
    if (!t) { main.innerHTML = "<p>That topic doesn't exist. <a href='learn.html'>See all topics</a></p>"; return; }
    document.title = code(t) + " " + t.title + " · Chemistry²";
    save(t, { read: 1 });
    var idx = topics.indexOf(t), prev = topics[idx - 1], next = topics[idx + 1], m = mastery(t);
    main.innerHTML =
      "<div class='crumbs'><a href='learn.html'>Learn</a> › <a href='learn.html#g" + t.group + "'>" + groupLabel(t.group) + "</a></div>" +
      "<div class='topic-layout'><div>" +
      "<header class='topic-head'><h1>" + code(t) + " " + t.title + "</h1><p>" + (t.summary || "") + tagHtml(t) + "</p></header>" +
      "<article class='notes s2-card'>" + t.notes + "</article>" +
      "<div class='pager'>" +
      (prev ? "<a class='s2-btn ghost' href='topic.html?id=" + prev.id + "'>← " + code(prev) + " " + prev.title + "</a>" : "<span></span>") +
      (next ? "<a class='s2-btn ghost' href='topic.html?id=" + next.id + "'>" + code(next) + " " + next.title + " →</a>" : "<span></span>") +
      "</div></div>" +
      "<aside class='topic-side'><div class='s2-card side-card'>" + ring(m, 84).replace('class="s2-ring"', 'class="s2-ring big"') +
      "<div class='side-label'>Topic mastery</div>" +
      "<ul class='checklist'><li class='done'>Notes read</li><li class='" + (prog(t.id).best ? "done" : "") + "'>Quiz" + (prog(t.id).best ? " (best " + prog(t.id).best.s + "/" + prog(t.id).best.t + ")" : "") + "</li><li class='" + ((prog(t.id).fc || []).length ? "done" : "") + "'>Flashcards" + ((prog(t.id).fc || []).length ? " (" + prog(t.id).fc.length + "/" + t.flashcards.length + " known)" : "") + "</li></ul>" +
      "<a class='s2-btn' href='quizzes.html?id=" + t.id + "'>Take the quiz</a><a class='s2-btn ghost' href='flashcards.html?id=" + t.id + "'>Practise flashcards</a></div></aside></div>";
    window.scrollTo(0, 0);
  };

  function picker(main, kind) {
    var target = kind === "quiz" ? "quizzes.html" : "flashcards.html";
    var unit = kind === "quiz" ? "questions" : "cards";
    var html = "<section class='s2-hello'><h1>" + (kind === "quiz" ? "Quizzes" : "Flashcards") + "</h1><p>" +
      (kind === "quiz" ? "Pick a topic or try a mixed quiz. You'll see the answer and an explanation after each question, and your best score counts towards mastery."
        : "Pick a deck and tap a card to flip it. Cards you mark as still learning come back round until you know them.") + "</p></section>";
    html += "<div class='picker-top'><a class='s2-btn' href='" + target + "?id=all'>Mixed: everything</a>";
    Object.keys(GROUPS).forEach(function (g) { if (inGroup(+g).length) html += "<a class='s2-btn ghost small' href='" + target + "?id=g" + g + "'>" + (g < 5 ? "Topic " + g + " mixed" : "GCSE extras mixed") + "</a>"; });
    html += "</div>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      html += "<section class='group'><h2 class='plain'>" + groupLabel(g) + "</h2><div class='s2-rows'>";
      list.forEach(function (t) {
        var p = prog(t.id), n = kind === "quiz" ? t.quiz.length : t.flashcards.length;
        var info = kind === "quiz" ? (p.best ? "Best " + p.best.s + "/" + p.best.t : n + " " + unit) : ((p.fc || []).length ? p.fc.length + "/" + n + " known" : n + " " + unit);
        html += "<a class='s2-row' href='" + target + "?id=" + t.id + "'>" + ring(mastery(t), 40) + "<div class='grow'><div class='t'><span class='code'>" + code(t) + "</span> " + t.title + "</div></div><span class='when'>" + info + "</span></a>";
      });
      html += "</div></section>";
    });
    main.innerHTML = html;
  }

  function collect(id, field) {
    var list;
    if (id === "all") list = topics;
    else if (/^g\d$/.test(id)) list = inGroup(+id.slice(1));
    else { var t = byId(id); list = t ? [t] : []; }
    var items = [];
    list.forEach(function (t) { t[field].forEach(function (x, i) { items.push({ item: x, topic: t, i: i }); }); });
    var title = id === "all" ? "Mixed: everything" : /^g\d$/.test(id) ? groupLabel(+id.slice(1)) : (list[0] ? code(list[0]) + " " + list[0].title : "");
    return { title: title, items: items, single: list.length === 1 ? list[0] : null };
  }

  pages.quizzes = function (main) {
    var id = param("id");
    if (!id) return picker(main, "quiz");
    var set = collect(id, "quiz");
    if (!set.items.length) { main.innerHTML = "<p>No questions found for this quiz. <a href='quizzes.html'>Choose a quiz</a></p>"; return; }
    var MAX = set.single ? set.items.length : 20;
    var qs, i, score, wrong, perTopic;

    function start() { qs = shuffle(set.items).slice(0, MAX); i = 0; score = 0; wrong = []; perTopic = {}; render(); }
    function render() {
      var cur = qs[i], q = cur.item;
      var order = shuffle(q.o.map(function (_, k) { return k; }));
      main.innerHTML =
        "<div class='quiz-wrap'><div class='crumbs'><a href='quizzes.html'>Quizzes</a> › " + set.title + "</div>" +
        "<div class='q-meta'><span>Question " + (i + 1) + " of " + qs.length + (set.single ? "" : " · " + code(cur.topic) + " " + cur.topic.title) + "</span><span>" + score + " correct</span></div>" +
        "<div class='s2-bar quiz-bar'><i style='width:" + (i / qs.length * 100) + "%'></i></div>" +
        "<div class='s2-card q-card'><div class='q-text'>" + q.q + "</div><div class='options'></div>" +
        "<div class='feedback' role='status'></div>" +
        "<div class='q-next'><button class='s2-btn' id='next' hidden>" + (i + 1 < qs.length ? "Next question" : "See results") + "</button></div></div></div>";
      var box = main.querySelector(".options");
      order.forEach(function (k, n) {
        var b = el("button", { class: "option", type: "button" }, "<span class='key'>" + "ABCD".charAt(n) + "</span><span>" + q.o[k] + "</span>");
        b.onclick = function () { answer(k, b); };
        b.dataset.k = k;
        box.appendChild(b);
      });
      function answer(k, btn) {
        var all = box.querySelectorAll(".option");
        for (var n = 0; n < all.length; n++) { all[n].disabled = true; if (+all[n].dataset.k === q.a) all[n].classList.add("correct"); }
        var fb = main.querySelector(".feedback");
        var tid = cur.topic.id; perTopic[tid] = perTopic[tid] || { s: 0, t: 0 }; perTopic[tid].t++;
        if (k === q.a) { score++; perTopic[tid].s++; fb.className = "feedback show good"; fb.innerHTML = "<b>Correct.</b> " + (q.e || ""); }
        else { btn.classList.add("wrong"); wrong.push({ q: q, pick: k, topic: cur.topic }); fb.className = "feedback show bad"; fb.innerHTML = "<b>Not quite.</b> The answer is <b>" + q.o[q.a] + "</b>. " + (q.e || ""); }
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
      var msg = pct >= 90 ? "Outstanding." : pct >= 70 ? "Great work." : pct >= 50 ? "Good effort. Go over the questions you missed below." : "Re-read the notes, then try again.";
      var html = "<div class='quiz-wrap'><div class='crumbs'><a href='quizzes.html'>Quizzes</a> › " + set.title + "</div><div class='s2-card results'>" +
        "<div class='score-big'>" + score + "<span>/" + qs.length + "</span></div><p class='pct'>" + pct + "% · " + msg + "</p>";
      if (set.single) {
        var after = mastery(set.single);
        html += "<div class='mastery-change'>" + ring(after, 64) + "<div><b>" + code(set.single) + " mastery: " + after + "%</b><br><span>" + (after > before ? "Up from " + before + "%." : improved ? "New best score." : "Your best score still counts.") + "</span></div></div>";
      }
      html += "<div class='topic-actions'><button class='s2-btn' id='again'>Try again</button>" +
        (set.single ? "<a class='s2-btn ghost' href='topic.html?id=" + set.single.id + "'>Back to notes</a><a class='s2-btn ghost' href='flashcards.html?id=" + set.single.id + "'>Flashcards</a>" : "") +
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

  pages.flashcards = function (main) {
    var id = param("id");
    if (!id) return picker(main, "fc");
    var set = collect(id, "flashcards");
    if (!set.items.length) { main.innerHTML = "<p>No cards found for this deck. <a href='flashcards.html'>Choose a deck</a></p>"; return; }
    var deck = set.items.slice(), pos = 0, learning = [], round = 1;

    function known(c) {
      var p = prog(c.topic.id), fc = (p.fc || []).slice();
      if (fc.indexOf(c.i) < 0) { fc.push(c.i); save(c.topic, { fc: fc }); }
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
      if (e.target.tagName === "INPUT") return;
      var onControl = e.target.tagName === "BUTTON" || e.target.tagName === "A";
      if ((e.key === " " || e.key === "Enter") && !onControl) { e.preventDefault(); flip(); }
      else if (e.key === "ArrowRight") { if (pos < deck.length) { pos++; show(); } }
      else if (e.key === "ArrowLeft") { if (pos > 0) { pos--; show(); } }
    });
    show();
  };

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    chrome({ home: "index.html", learn: "learn.html", topic: "learn.html", quizzes: "quizzes.html", flashcards: "flashcards.html" }[page]);
    var main = document.querySelector("main");
    if (pages[page]) pages[page](main);
  });
})();
