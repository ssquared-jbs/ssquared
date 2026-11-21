/* S² subjects: the GCSE / A-level catalogue, the learner's choices, and the picker.
   Choices live in localStorage "s2-profile" and sync with the learner's account. */
(function () {
  "use strict";
  if (window.S2Subjects) return;
  var KEY = "s2-profile";

  /* Platforms that exist. "path" is relative to the site root. */
  var PLATFORMS = {
    mandarin: { name: "Mandarin²", path: "mandarin/index.html", cls: "s2-mandarin", glyph: "中文", course: "IGCSE Mandarin", blurb: "25 topics of step-by-step lessons, rapid-fire quizzes, flashcards and the 3+2 game." },
    chemistry: { name: "Chemistry²", path: "chemistry/index.html", cls: "s2-chemistry", glyph: "H₂O", course: "Edexcel IGCSE & GCSE", blurb: "Every topic with notes, videos, quizzes, exam questions, flashcards and a molecule drawer." },
    "alevel-maths": { name: "A-level Maths²", path: "alevel-maths/index.html", cls: "s2-maths", glyph: "∫", course: "Edexcel A level (9MA0)", blurb: "Pure, statistics and mechanics, with worked examples, quick checks and flashcards." },
    "english-lang": { name: "English Language²", path: "english-lang/index.html", cls: "s2-english", glyph: "Aa", course: "Edexcel GCSE (1EN0)", blurb: "Reading, writing and exam technique for both papers, with worked examples and practice questions." },
    "english-lit": { name: "English Literature²", path: "english-lit/index.html", cls: "s2-englit", glyph: "❦", course: "Edexcel GCSE (1ET0)", blurb: "Study guides for Macbeth, Romeo and Juliet, An Inspector Calls, A Christmas Carol, Jekyll and Hyde and the Conflict poems." },
    "computer-science": { name: "Computer Science²", path: "computer-science/index.html", cls: "s2-cs", glyph: "{ }", course: "Edexcel GCSE (1CP2)", blurb: "Algorithms, binary, hardware, networks, cyber security and Python programming." },
    "geography": { name: "Geography²", path: "geography/index.html", cls: "s2-geog", glyph: "🌍", course: "Edexcel GCSE B (1GB0)", blurb: "Hazards, development, cities, coasts, rivers, fieldwork, forests and energy, with case studies." },
    "history": { name: "History²", path: "history/index.html", cls: "s2-hist", glyph: "⌛", course: "Edexcel GCSE (1HI0)", blurb: "Medicine and the Western Front, the Cold War, Elizabethan England, and Weimar and Nazi Germany." },
    "psychology": { name: "Psychology²", path: "psychology/index.html", cls: "s2-psych", glyph: "Ψ", course: "Edexcel GCSE (1PS0)", blurb: "Development, memory, the brain, social influence, criminal psychology, sleep and research methods." },
    "business": { name: "Business²", path: "business/index.html", cls: "s2-bus", glyph: "£", course: "Edexcel GCSE (1BS0)", blurb: "Enterprise, market research, finance and break-even, marketing, operations and people." },
    "economics": { name: "Economics²", path: "economics/index.html", cls: "s2-econ", glyph: "⇅", course: "AQA GCSE (8136)", blurb: "Demand and supply, elasticity, market failure, inflation, unemployment, policy and trade." },
    maths: { name: "Maths²", path: "maths/index.html", cls: "s2-maths", glyph: "x²", course: "Edexcel GCSE (1MA1)", blurb: "Number, algebra, ratio, geometry, probability and statistics, Foundation and Higher, with worked examples." },
    physics: { name: "Physics²", path: "physics/index.html", cls: "s2-physics", glyph: "F=ma", course: "Edexcel IGCSE & GCSE", blurb: "Forces, electricity, waves, energy, magnetism and space, with every equation explained." },
    "alevel-chemistry-ocr": { name: "A-level Chemistry A²", path: "alevel-chemistry-ocr/index.html", cls: "s2-alevel-chemistry", glyph: "Kc", course: "OCR A level Chemistry A (H432)", blurb: "All of OCR Chemistry A, module by module, with step-by-step notes, quick checks and flashcards." },
    "alevel-chemistry": { name: "A-level Chemistry²", path: "alevel-chemistry/index.html", cls: "s2-alevel-chemistry", glyph: "ΔG", course: "Edexcel A level (9CH0)", blurb: "All 19 topics of Edexcel A level Chemistry, step by step, with quick checks and flashcards." },
    "alevel-physics": { name: "A-level Physics²", path: "alevel-physics/index.html", cls: "s2-alevel-physics", glyph: "E=hf", course: "Edexcel A level (9PH0)", blurb: "All 13 topics of Edexcel A level Physics, with worked calculations, quick checks and flashcards." },
    "alevel-biology-a": { name: "A-level Biology A²", path: "alevel-biology-a/index.html", cls: "s2-alevel-biology", glyph: "ATP", course: "Edexcel A level Biology A (9BN0)", blurb: "Salters-Nuffield Biology A, all 8 topics, with step-by-step notes, quick checks and flashcards." },
    "alevel-biology-b": { name: "A-level Biology B²", path: "alevel-biology-b/index.html", cls: "s2-alevel-biology", glyph: "DNA", course: "Edexcel A level Biology B (9BI0)", blurb: "Biology B, all 10 topics, with step-by-step notes, quick checks and flashcards." },
    "alevel-psychology": { name: "A-level Psychology²", path: "alevel-psychology/index.html", cls: "s2-psych", glyph: "Ψ", course: "Edexcel A level (9PS0)", blurb: "Social, cognitive, biological and learning approaches, clinical psychology, options, methods and statistics." },
    biology: { name: "Biology²", path: "biology/index.html", cls: "s2-biology", glyph: "DNA", course: "Edexcel IGCSE & GCSE", blurb: "Cells, the human body, plants, genetics and ecology, with key processes broken down." }
  };

  /* [id, name, platforms that cover it (empty = coming soon), optional boards: [boardId, label, platform or null]] */
  var LEVELS = {
    gcse: { name: "GCSE / IGCSE", short: "GCSE", core: ["maths", "english-lang", "english-lit"], subjects: [
      ["maths", "Maths", ["maths"]], ["english-lang", "English Language", ["english-lang"]], ["english-lit", "English Literature", ["english-lit"]],
      ["biology", "Biology", ["biology"]], ["chemistry", "Chemistry", ["chemistry"]], ["physics", "Physics", ["physics"]],
      ["combined", "Combined Science", ["biology", "chemistry", "physics"]],
      ["mandarin", "Chinese (Mandarin)", ["mandarin"]], ["french", "French", []], ["spanish", "Spanish", []], ["german", "German", []],
      ["computer-science", "Computer Science", ["computer-science"]], ["geography", "Geography", ["geography"]], ["history", "History", ["history"]], ["rs", "Religious Studies", []],
      ["business", "Business", ["business"]], ["economics", "Economics", ["economics"]], ["psychology", "Psychology", ["psychology"]], ["sociology", "Sociology", []],
      ["further-maths", "Further Maths", []], ["statistics", "Statistics", []], ["dt", "Design & Technology", []], ["art", "Art & Design", []],
      ["music", "Music", []], ["drama", "Drama", []], ["pe", "PE", []], ["food", "Food Preparation & Nutrition", []], ["media", "Media Studies", []],
      ["latin", "Latin", []], ["citizenship", "Citizenship", []]
    ] },
    alevel: { name: "A level", short: "A level", core: [], subjects: [
      ["maths", "Maths", ["alevel-maths"]], ["further-maths", "Further Maths", []], ["biology", "Biology", [], [["bio-a", "Edexcel A, Salters-Nuffield (9BN0)", "alevel-biology-a"], ["bio-b", "Edexcel B (9BI0)", "alevel-biology-b"]]],
      ["chemistry", "Chemistry", ["alevel-chemistry"], [["edexcel", "Edexcel (9CH0)", "alevel-chemistry"], ["ocr-a", "OCR A (H432)", "alevel-chemistry-ocr"]]],
      ["physics", "Physics", ["alevel-physics"]],
      ["psychology", "Psychology", ["alevel-psychology"]], ["economics", "Economics", []], ["business", "Business", []], ["computer-science", "Computer Science", []],
      ["english-lit", "English Literature", []], ["english-lang", "English Language", []], ["history", "History", []], ["geography", "Geography", []],
      ["politics", "Politics", []], ["sociology", "Sociology", []], ["law", "Law", []], ["rs", "Religious Studies / Philosophy", []],
      ["chinese", "Chinese", []], ["french", "French", []], ["spanish", "Spanish", []], ["german", "German", []],
      ["art", "Art & Design", []], ["music", "Music", []], ["drama", "Drama & Theatre", []], ["media", "Media Studies", []], ["pe", "PE", []],
      ["classics", "Classical Civilisation", []], ["accounting", "Accounting", []]
    ] }
  };

  function get() { try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; } }
  function set(p) { p.updated = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} fire(); return p; }
  var listeners = [];
  function fire() { listeners.forEach(function (f) { try { f(get()); } catch (e) {} }); }
  function boardOf(level, s, prof) {
    if (!s[3]) return null;
    var b = prof && prof.level === level && prof.boards && prof.boards[s[0]];
    for (var i = 0; i < s[3].length; i++) if (s[3][i][0] === b) return s[3][i];
    return s[3][0];
  }
  function subject(level, id, prof) {
    var L = LEVELS[level]; if (!L) return null; prof = prof || get();
    for (var i = 0; i < L.subjects.length; i++) if (L.subjects[i][0] === id) {
      var s = L.subjects[i], bd = boardOf(level, s, prof);
      return { id: id, name: s[1], platforms: bd ? (bd[2] ? [bd[2]] : []) : s[2], board: bd ? bd[0] : null, boardName: bd ? bd[1] : null };
    }
    return null;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- picker ---------- */
  var css = "" +
    ".s2-pick-back{position:fixed;inset:0;z-index:1001;background:rgba(10,12,28,.55);display:flex;align-items:center;justify-content:center;padding:16px}" +
    ".s2-pick{width:min(800px,100%);max-height:calc(100vh - 32px);display:flex;flex-direction:column;background:var(--card,#fff);color:var(--ink,#171b36);border-radius:20px;border:1.5px solid var(--line,#dce1ee);font-family:var(--font-body,system-ui);box-shadow:0 20px 60px rgba(0,0,0,.25);overflow:hidden}" +
    ".s2-pick .hd{padding:22px 24px 6px}.s2-pick .bd{padding:6px 24px;overflow:auto;flex:1}.s2-pick .ft{padding:14px 24px 18px;border-top:1.5px solid var(--line,#dce1ee);display:flex;gap:10px;align-items:center;flex-wrap:wrap}" +
    ".s2-pick h2{font-family:var(--font-display,system-ui);font-size:1.5rem;margin:0 0 4px}.s2-pick p.sub{margin:0 0 6px;color:var(--ink-2,#4b5174)}" +
    ".s2-pick .lv{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}" +
    ".s2-pick .lv button{text-align:left;padding:18px;border-radius:16px;border:2px solid var(--line,#dce1ee);background:var(--card,#fff);color:inherit;font:inherit;cursor:pointer}" +
    ".s2-pick .lv button:hover,.s2-pick .lv button[aria-pressed=true]{border-color:var(--accent,#3b5bdb);background:var(--accent-soft,#e8edff)}" +
    ".s2-pick .lv b{display:block;font-family:var(--font-display,system-ui);font-size:1.3rem}.s2-pick .lv span{color:var(--ink-2,#4b5174);font-size:.9rem}" +
    ".s2-pick .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;margin:10px 0 6px}" +
    ".s2-pick .sj{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;border:1.5px solid var(--line,#dce1ee);cursor:pointer;user-select:none}" +
    ".s2-pick .sj:has(input:checked){border-color:var(--accent,#3b5bdb);background:var(--accent-soft,#e8edff)}" +
    ".s2-pick .sj input{width:18px;height:18px;accent-color:var(--accent,#3b5bdb);flex:none}" +
    ".s2-pick .sj .n{flex:1;font-weight:700;font-size:.95rem}.s2-pick .sj .t{font-size:.72rem;font-weight:700;padding:2px 7px;border-radius:99px;background:var(--surface-2,#f1f3f9);color:var(--ink-3,#7a809e);white-space:nowrap}" +
    ".s2-pick .sj .t.on{background:var(--good-soft,#def5e8);color:var(--good,#128a52)}" +
    ".s2-pick .sj.hasb{flex-wrap:wrap}.s2-pick .bsel{display:none;flex-basis:100%;margin:4px 0 0 28px;max-width:calc(100% - 28px);padding:6px 8px;border-radius:8px;border:1.5px solid var(--line,#dce1ee);background:var(--card,#fff);color:inherit;font:inherit;font-size:.8rem;text-overflow:ellipsis}" +
    ".s2-pick .sj:has(input:checked) .bsel{display:block}" +
    ".s2-pick h3{font-size:.95rem;margin:14px 0 2px;color:var(--ink-2,#4b5174)}" +
    ".s2-pick .go{padding:12px 20px;border-radius:12px;border:0;background:var(--accent,#3b5bdb);color:#fff;font:inherit;font-weight:700;cursor:pointer;margin-left:auto}" +
    ".s2-pick .ln{background:none;border:0;padding:0;color:var(--accent-text,#263f9e);font:inherit;text-decoration:underline;cursor:pointer}" +
    ".s2-pick .count{color:var(--ink-2,#4b5174);font-size:.9rem}" +
    "@media(max-width:520px){.s2-pick .lv{grid-template-columns:1fr}}";
  var styled = false;
  function style() { if (styled) return; styled = true; var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); }

  var back = null;
  function close() { if (back) { back.remove(); back = null; document.removeEventListener("keydown", onKey); } }
  function onKey(e) { if (e.key === "Escape") { skip(); } }
  function skip() { var p = get(); if (!p) set({ skipped: true, level: null, subjects: [] }); close(); }
  function pick(opts) {
    opts = opts || {}; style(); close();
    var cur = get() || {}, level = opts.level || cur.level || null;
    back = document.createElement("div"); back.className = "s2-pick-back";
    back.innerHTML = "<div class='s2-pick' role='dialog' aria-modal='true' aria-labelledby='s2-pick-h'></div>";
    document.body.appendChild(back); document.addEventListener("keydown", onKey);
    if (level && !opts.restart) step2(level); else step1();

    function box() { return back.querySelector(".s2-pick"); }
    function step1() {
      box().innerHTML = "<div class='hd'><h2 id='s2-pick-h'>What are you studying?</h2><p class='sub'>We'll put your subjects first. You can change this any time.</p></div>" +
        "<div class='bd'><div class='lv'><button type='button' data-l='gcse'" + (cur.level === "gcse" ? " aria-pressed='true'" : "") + "><b>GCSE / IGCSE</b><span>Years 10–11</span></button>" +
        "<button type='button' data-l='alevel'" + (cur.level === "alevel" ? " aria-pressed='true'" : "") + "><b>A level</b><span>Years 12–13</span></button></div></div>" +
        "<div class='ft'><button type='button' class='ln' data-skip>Skip for now</button></div>";
      [].forEach.call(box().querySelectorAll("[data-l]"), function (b) { b.onclick = function () { step2(b.getAttribute("data-l")); }; });
      box().querySelector("[data-skip]").onclick = skip;
      box().querySelector("[data-l]").focus();
    }
    function step2(lv) {
      var L = LEVELS[lv], chosen = cur.level === lv ? (cur.subjects || []) : L.core.slice();
      var boards = cur.level === lv && cur.boards ? cur.boards : {};
      function tag(on) { return "<span class='t" + (on ? " on" : "") + "'>" + (on ? "Ready" : "Coming soon") + "</span>"; }
      function item(s) {
        var bd = boardOf(lv, s, { level: lv, boards: boards }), on = bd ? !!bd[2] : s[2].length > 0;
        var sel = s[3] ? "<select class='bsel' aria-label='Exam board for " + esc(s[1]) + "'>" + s[3].map(function (o) { return "<option value='" + o[0] + "'" + (o === bd ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("") + "</select>" : "";
        return "<label class='sj" + (s[3] ? " hasb" : "") + "' data-s='" + s[0] + "'><input type='checkbox' value='" + s[0] + "'" + (chosen.indexOf(s[0]) >= 0 ? " checked" : "") + "><span class='n'>" + esc(s[1]) + "</span>" + tag(on) + sel + "</label>";
      }
      var core = L.subjects.filter(function (s) { return L.core.indexOf(s[0]) >= 0; }), rest = L.subjects.filter(function (s) { return L.core.indexOf(s[0]) < 0; });
      box().innerHTML = "<div class='hd'><h2 id='s2-pick-h'>Your " + L.short + " subjects</h2><p class='sub'>Tick everything you're taking. Subjects marked coming soon are on the way.</p></div>" +
        "<div class='bd'>" + (core.length ? "<h3>Core subjects</h3><div class='grid'>" + core.map(item).join("") + "</div><h3>Your options</h3>" : "") + "<div class='grid'>" + rest.map(item).join("") + "</div></div>" +
        "<div class='ft'><button type='button' class='ln' data-back>← GCSE or A level</button><span class='count'></span><button type='button' class='go'>Save my subjects</button></div>";
      var b = box();
      function count() { var n = b.querySelectorAll("input:checked").length; b.querySelector(".count").textContent = n + " chosen"; }
      [].forEach.call(b.querySelectorAll("input"), function (i) { i.onchange = count; }); count();
      [].forEach.call(b.querySelectorAll(".bsel"), function (sel) {
        sel.onclick = function (e) { e.preventDefault(); e.stopPropagation(); };
        sel.onchange = function () {
          var lab = sel.closest(".sj"), id = lab.getAttribute("data-s"), s = L.subjects.filter(function (x) { return x[0] === id; })[0];
          boards[id] = sel.value; lab.querySelector("input").checked = true; count();
          var bd = boardOf(lv, s, { level: lv, boards: boards }); lab.querySelector(".t").outerHTML = tag(!!bd[2]);
        };
      });
      b.querySelector("[data-back]").onclick = step1;
      b.querySelector(".go").onclick = function () {
        var ids = [].map.call(b.querySelectorAll("input:checked"), function (i) { return i.value; });
        var keep = {}; ids.forEach(function (id) { var s = L.subjects.filter(function (x) { return x[0] === id; })[0]; if (s && s[3]) { var bd = boardOf(lv, s, { level: lv, boards: boards }); keep[id] = bd[0]; } });
        set({ level: lv, subjects: ids, boards: keep });
        close();
        if (opts.onDone) opts.onDone(get());
        if (window.S2 && S2.chip) S2.chip("Subjects saved");
      };
      var f = b.querySelector("input"); if (f) f.focus();
    }
  }

  window.S2Subjects = {
    platforms: PLATFORMS, levels: LEVELS, profile: get, save: set, subject: subject, pick: pick,
    onChange: function (f) { listeners.push(f); },
    needsPicking: function () { var p = get(); return !p || (!p.level && !p.skipped); }
  };
})();
