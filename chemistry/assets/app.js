/* Chemistry² — app logic. Content lives in data/topic*.js */
(function () {
  "use strict";

  var GROUPS = {
    1: { name: "Principles of chemistry", sub: "Topic 1: states of matter, atoms, bonding, moles and electrolysis" },
    2: { name: "Inorganic chemistry", sub: "Topic 2: groups, the atmosphere, metals, acids, salts and tests" },
    3: { name: "Physical chemistry", sub: "Topic 3: energetics, rates and equilibria" },
    4: { name: "Organic chemistry", sub: "Topic 4: crude oil, hydrocarbons, alcohols, acids, esters and polymers" },
    5: { name: "Edexcel GCSE extras", sub: "Content in Edexcel GCSE (1CH0) that is not in the International GCSE (4CH1)" }
  };

  var topics = (window.CHEM && window.CHEM.topics) || [];
  topics.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
  function byId(id) { for (var i = 0; i < topics.length; i++) if (topics[i].id === id) return topics[i]; return null; }
  function inGroup(g) { return topics.filter(function (t) { return t.group === g; }); }

  // ---------- storage (best scores; optional) ----------
  function getBest(key) { try { var v = localStorage.getItem("chem2-best-" + key); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function setBest(key, score, total) {
    try {
      var old = getBest(key);
      if (!old || score / total > old.s / old.t) localStorage.setItem("chem2-best-" + key, JSON.stringify({ s: score, t: total }));
    } catch (e) {}
  }

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

  // ---------- chrome ----------
  function chrome(active) {
    var back = el("a", { class: "ssquared-home-button", href: "../index.html" }, "← Back to SSQUARED HQ");
    var header = el("header", { class: "site-header" });
    header.innerHTML =
      '<h1><a href="index.html">Chemistry²</a></h1>' +
      '<p>Learn Chemistry, test yourself with quizzes and revise key facts with flashcards.</p>' +
      '<nav class="nav">' +
      ['index.html|Home', 'learn.html|Learn', 'quizzes.html|Quizzes', 'flashcards.html|Flashcards'].map(function (x) {
        var p = x.split("|"); return '<a href="' + p[0] + '"' + (active === p[0] ? ' class="active"' : "") + ">" + p[1] + "</a>";
      }).join("") +
      "</nav>";
    document.body.insertBefore(header, document.body.firstChild);
    document.body.insertBefore(back, header);
    var footer = el("footer");
    footer.innerHTML = '<p>Chemistry²</p><a href="about.html">About</a><a href="privacy.html">Privacy Policy</a><a href="contact.html">Contact</a>';
    document.body.appendChild(footer);
  }

  // ---------- pages ----------
  var pages = {};

  pages.home = function (main) {
    var nq = 0, nf = 0;
    topics.forEach(function (t) { nq += t.quiz.length; nf += t.flashcards.length; });
    var c = main.querySelector("#stats");
    if (c) c.innerHTML = '<span class="pill">' + topics.length + ' topics</span><span class="pill">' + nq + ' quiz questions</span><span class="pill">' + nf + ' flashcards</span>';
  };

  pages.learn = function (main) {
    var holder = main.querySelector("#groups");
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      var sec = el("section", { class: "group" });
      sec.appendChild(el("h2", null, (g < 5 ? "Topic " + g + ": " : "") + GROUPS[g].name));
      sec.appendChild(el("p", { class: "sub" }, GROUPS[g].sub));
      var grid = el("div", { class: "grid" });
      list.forEach(function (t) {
        var best = getBest(t.id);
        var a = el("a", { class: "card topic-card", href: "topic.html?id=" + t.id });
        a.innerHTML = "<h3><span class='code'>" + code(t) + "</span>" + t.title + "</h3>" +
          "<p>" + (t.summary || "") + "</p>" +
          "<div class='meta'>" + t.quiz.length + " questions · " + t.flashcards.length + " flashcards" +
          (best ? " · <span class='best'>Best " + best.s + "/" + best.t + "</span>" : "") + tagHtml(t) + "</div>";
        grid.appendChild(a);
      });
      sec.appendChild(grid);
      holder.appendChild(sec);
    });
  };

  pages.topic = function (main) {
    var t = byId(param("id") || "");
    if (!t) { main.innerHTML = "<p>Topic not found. <a href='learn.html'>Back to all topics</a></p>"; return; }
    document.title = code(t) + " " + t.title + " · Chemistry²";
    var idx = topics.indexOf(t), prev = topics[idx - 1], next = topics[idx + 1];
    main.innerHTML =
      "<div class='crumbs'><a href='learn.html'>Learn</a> › " + (t.group < 5 ? "Topic " + t.group + ": " : "") + GROUPS[t.group].name + "</div>" +
      "<section class='topic-hero'><span class='label'>" + (t.group < 5 ? "Topic " + code(t) : "GCSE extra " + code(t)) + "</span>" +
      "<h2 class='topic-title'>" + t.title + tagHtml(t) + "</h2><p>" + (t.summary || "") + "</p>" +
      "<div class='topic-actions'><a class='btn' href='quizzes.html?id=" + t.id + "'>📝 Quiz this topic</a><a class='btn secondary' href='flashcards.html?id=" + t.id + "'>🃏 Flashcards</a></div></section>" +
      "<article class='notes'>" + t.notes + "</article>" +
      "<section class='end-topic-section'><h2>Finished " + t.title + "?</h2><a class='btn' href='quizzes.html?id=" + t.id + "'>📝 Test yourself now</a></section>" +
      "<div class='pager'>" +
      (prev ? "<a class='btn secondary' href='topic.html?id=" + prev.id + "'>← " + code(prev) + " " + prev.title + "</a>" : "<span></span>") +
      (next ? "<a class='btn secondary' href='topic.html?id=" + next.id + "'>" + code(next) + " " + next.title + " →</a>" : "<span></span>") +
      "</div>";
    window.scrollTo(0, 0);
  };

  function picker(main, kind) {
    var target = kind === "quiz" ? "quizzes.html" : "flashcards.html";
    var unit = kind === "quiz" ? "questions" : "cards";
    var html = "<section class='page-intro'><h2>" + (kind === "quiz" ? "Quizzes" : "Flashcards") + "</h2><p>" +
      (kind === "quiz" ? "Pick a topic, or try a mixed quiz. You get the answer and an explanation after each question." : "Pick a deck. Tap a card to flip it. Mark the ones you're still learning and they'll come back round.") +
      "</p></section>";
    html += "<div class='picker-top'><a class='btn' href='" + target + "?id=all'>🎲 Mixed: everything</a>";
    Object.keys(GROUPS).forEach(function (g) { if (inGroup(+g).length) html += "<a class='btn secondary' href='" + target + "?id=g" + g + "'>" + (g < 5 ? "Topic " + g : "GCSE extras") + " mixed</a>"; });
    html += "</div>";
    Object.keys(GROUPS).forEach(function (g) {
      g = +g; var list = inGroup(g); if (!list.length) return;
      html += "<section class='group'><h2>" + (g < 5 ? "Topic " + g + ": " : "") + GROUPS[g].name + "</h2><div class='picker-list'>";
      list.forEach(function (t) {
        var n = kind === "quiz" ? t.quiz.length : t.flashcards.length;
        var best = kind === "quiz" ? getBest(t.id) : null;
        html += "<a href='" + target + "?id=" + t.id + "'><span><b>" + code(t) + "</b> " + t.title + "</span><span class='n'>" + (best ? "<span class='best'>" + best.s + "/" + best.t + "</span> · " : "") + n + " " + unit + "</span></a>";
      });
      html += "</div></section>";
    });
    main.innerHTML = html;
  }

  function collect(id, field) {
    // returns {title, items:[{item, topic}]}
    var list;
    if (id === "all") list = topics;
    else if (/^g\d$/.test(id)) list = inGroup(+id.slice(1));
    else { var t = byId(id); list = t ? [t] : []; }
    var items = [];
    list.forEach(function (t) { t[field].forEach(function (x) { items.push({ item: x, topic: t }); }); });
    var title = id === "all" ? "Mixed: everything" : /^g\d$/.test(id) ? ((+id.slice(1) < 5 ? "Topic " + id.slice(1) + ": " : "") + GROUPS[+id.slice(1)].name) : (list[0] ? code(list[0]) + " " + list[0].title : "");
    return { title: title, items: items, single: list.length === 1 ? list[0] : null };
  }

  pages.quizzes = function (main) {
    var id = param("id");
    if (!id) return picker(main, "quiz");
    var set = collect(id, "quiz");
    if (!set.items.length) { main.innerHTML = "<p>No questions found. <a href='quizzes.html'>Choose a quiz</a></p>"; return; }
    var MAX = set.single ? set.items.length : 20;
    var qs, i, score, wrong;

    function start() {
      qs = shuffle(set.items).slice(0, MAX);
      i = 0; score = 0; wrong = [];
      render();
    }
    function render() {
      var cur = qs[i], q = cur.item;
      var order = shuffle(q.o.map(function (_, k) { return k; }));
      main.innerHTML =
        "<div class='quiz-wrap'><div class='crumbs'><a href='quizzes.html'>Quizzes</a> › " + set.title + "</div>" +
        "<div class='q-meta'><span>Question " + (i + 1) + " of " + qs.length + (set.single ? "" : " · " + code(cur.topic)) + "</span><span>Score: " + score + "</span></div>" +
        "<div class='progress'><div style='width:" + (i / qs.length * 100) + "%'></div></div>" +
        "<div class='card'><div class='q-text'>" + q.q + "</div><div class='options'></div>" +
        "<div class='feedback'></div>" +
        "<div style='margin-top:14px;text-align:right'><button class='btn' id='next' style='display:none'>" + (i + 1 < qs.length ? "Next →" : "See results") + "</button></div></div></div>";
      var box = main.querySelector(".options");
      order.forEach(function (k) {
        var b = el("button", { class: "option", type: "button" }, q.o[k]);
        b.onclick = function () { answer(k, b); };
        b.dataset.k = k;
        box.appendChild(b);
      });
      function answer(k, btn) {
        var all = box.querySelectorAll(".option");
        for (var n = 0; n < all.length; n++) { all[n].disabled = true; if (+all[n].dataset.k === q.a) all[n].classList.add("correct"); }
        var fb = main.querySelector(".feedback");
        if (k === q.a) { score++; fb.className = "feedback show good"; fb.innerHTML = "<b>✅ Correct!</b> " + (q.e || ""); }
        else { btn.classList.add("wrong"); wrong.push({ q: q, pick: k, topic: cur.topic }); fb.className = "feedback show bad"; fb.innerHTML = "<b>❌ Not quite.</b> The answer is <b>" + q.o[q.a] + "</b>. " + (q.e || ""); }
        var nx = main.querySelector("#next"); nx.style.display = "inline-flex"; nx.focus();
        nx.onclick = function () { i++; if (i < qs.length) render(); else finish(); };
      }
    }
    function finish() {
      setBest(id, score, qs.length);
      var pct = Math.round(score / qs.length * 100);
      var msg = pct >= 90 ? "Outstanding! 🌟" : pct >= 70 ? "Great work! 💪" : pct >= 50 ? "Good effort. Review the ones you missed." : "Keep going. Re-read the notes, then try again.";
      var html = "<div class='quiz-wrap'><div class='crumbs'><a href='quizzes.html'>Quizzes</a> › " + set.title + "</div><div class='card' style='text-align:center'>" +
        "<div class='score-big'>" + score + " / " + qs.length + "</div><p>" + pct + "% · " + msg + "</p>" +
        "<div class='topic-actions' style='justify-content:center'><button class='btn' id='again'>Try again</button>" +
        (set.single ? "<a class='btn secondary' href='topic.html?id=" + set.single.id + "'>Back to notes</a><a class='btn secondary' href='flashcards.html?id=" + set.single.id + "'>Flashcards</a>" : "") +
        "<a class='btn secondary' href='quizzes.html'>All quizzes</a></div></div>";
      if (wrong.length) {
        html += "<div class='card' style='margin-top:16px'><h3>Review what you missed</h3>";
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
    if (!set.items.length) { main.innerHTML = "<p>No cards found. <a href='flashcards.html'>Choose a deck</a></p>"; return; }
    var deck = set.items.slice(), pos = 0, learning = [], round = 1;

    main.innerHTML =
      "<div class='crumbs'><a href='flashcards.html'>Flashcards</a> › " + set.title + "</div>" +
      "<div class='fc-stage'><div class='fc' id='fc' tabindex='0' role='button' aria-label='Flip card'>" +
      "<div class='fc-face fc-front'><span class='lbl'>Term</span><div id='front'></div></div>" +
      "<div class='fc-face fc-back'><span class='lbl'>Answer</span><div id='back'></div></div></div></div>" +
      "<div class='fc-count' id='count'></div><div class='hint'>Tap the card or press Space to flip · ← → to move</div>" +
      "<div class='fc-controls'>" +
      "<button class='btn secondary' id='prev'>← Back</button>" +
      "<button class='btn secondary' id='learn'>🔁 Still learning</button>" +
      "<button class='btn' id='got'>✅ Got it</button>" +
      "<button class='btn secondary' id='shuf'>🔀 Shuffle</button></div>" +
      (set.single ? "<div class='fc-controls'><a class='btn secondary' href='topic.html?id=" + set.single.id + "'>Back to notes</a><a class='btn secondary' href='quizzes.html?id=" + set.single.id + "'>Quiz this topic</a></div>" : "");
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
        main.querySelector("#count").innerHTML = "Now going over the cards you're still learning…";
        setTimeout(show, 700);
      } else {
        main.querySelector("#front").innerHTML = "🎉 Deck complete!";
        main.querySelector("#back").innerHTML = "Nice work.";
        main.querySelector("#count").innerHTML = "You've got every card. <a href='#' id='restart'>Start again</a>";
        main.querySelector("#restart").onclick = function (e) { e.preventDefault(); deck = set.items.slice(); pos = 0; round = 1; show(); };
      }
    }
    function flip() { card.classList.toggle("flipped"); }
    card.onclick = flip;
    main.querySelector("#got").onclick = function () { if (pos < deck.length) { pos++; show(); } };
    main.querySelector("#learn").onclick = function () { if (pos < deck.length) { learning.push(deck[pos]); pos++; show(); } };
    main.querySelector("#prev").onclick = function () { if (pos > 0) { pos--; show(); } };
    main.querySelector("#shuf").onclick = function () { deck = shuffle(deck); pos = 0; show(); };
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT") return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
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
