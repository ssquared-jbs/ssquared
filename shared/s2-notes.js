/* S² Notes — a OneNote-style notebook under every topic, saved on this device.
   Notes are stored in localStorage under "s2-note:<subject>:<id>". */
(function () {
  "use strict";
  var PREFIX = "s2-note:";

  function get(subject, id) {
    try { return JSON.parse(localStorage.getItem(PREFIX + subject + ":" + id)) || null; } catch (e) { return null; }
  }
  function put(subject, id, meta, html) {
    var clean = (html || "").replace(/<br>$/, "").trim();
    var empty = !clean || clean.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim() === "" && clean.indexOf("<input") < 0;
    try {
      if (empty) localStorage.removeItem(PREFIX + subject + ":" + id);
      else localStorage.setItem(PREFIX + subject + ":" + id, JSON.stringify({ s: subject, id: id, t: meta.t, code: meta.code || "", group: meta.group || "", u: meta.u || "", html: clean, updated: Date.now() }));
    } catch (e) {}
    try { window.dispatchEvent(new CustomEvent("s2-note-saved", { detail: { key: subject + ":" + id, from: put.from || null } })); } catch (e) {}
  }
  function all() {
    var out = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0) { var v = JSON.parse(localStorage.getItem(k)); if (v) out.push(v); }
      }
    } catch (e) {}
    return out;
  }
  // keep pasted content tidy: plain text only, keeping line breaks
  function onPaste(e) {
    e.preventDefault();
    var text = (e.clipboardData || window.clipboardData).getData("text/plain");
    document.execCommand("insertText", false, text);
  }
  function sanitize(html) {
    var d = document.createElement("div"); d.innerHTML = html;
    d.querySelectorAll("script,style,iframe,object,embed,link,meta").forEach(function (n) { n.remove(); });
    d.querySelectorAll("*").forEach(function (n) {
      [].slice.call(n.attributes).forEach(function (a) {
        if (/^on/i.test(a.name) || (a.name === "href" && /^\s*javascript:/i.test(a.value))) n.removeAttribute(a.name);
        if (a.name === "style" && !/background-color|color/.test(a.value)) n.removeAttribute("style");
      });
    });
    return d.innerHTML;
  }

  var TOOLS = [
    ["bold", "<b>B</b>", "Bold (Ctrl+B)"],
    ["italic", "<i>I</i>", "Italic (Ctrl+I)"],
    ["underline", "<u>U</u>", "Underline (Ctrl+U)"],
    ["hilite", "<span class='hl-swatch'>A</span>", "Highlight"],
    ["h", "H", "Heading"],
    ["insertUnorderedList", "• List", "Bullet list"],
    ["insertOrderedList", "1. List", "Numbered list"],
    ["todo", "☐ To-do", "Checklist item"],
    ["key", "★ Key point", "Key point box"],
    ["removeFormat", "Clear", "Clear formatting"]
  ];

  /* Build an editor. meta = {subject, id, t, code, group, u, title?, compact?} */
  function editor(meta) {
    var wrap = document.createElement("section");
    wrap.className = "s2-notebook" + (meta.compact ? " compact" : "");
    var saved = get(meta.subject, meta.id);
    wrap.innerHTML =
      (meta.compact ? "" : "<div class='nb-head'><div><h2>" + (meta.title || "My notes") + "</h2><p>Write your own notes for this topic. They save automatically on this device and appear in your <a href='" + (meta.workbook || "workbook.html") + "'>workbook</a>.</p></div></div>") +
      "<div class='nb-paper'>" +
      "<div class='nb-tools' role='toolbar' aria-label='Formatting'>" + TOOLS.map(function (t) { return "<button type='button' data-cmd='" + t[0] + "' title='" + t[2] + "' aria-label='" + t[2] + "'>" + t[1] + "</button>"; }).join("") + "</div>" +
      "<div class='nb-page' contenteditable='true' spellcheck='true' role='textbox' aria-multiline='true' aria-label='Notes for " + String(meta.t).replace(/'/g, "") + "' data-placeholder='Start typing… Try a summary in your own words, a mnemonic, or the things you keep forgetting.'></div>" +
      "<div class='nb-foot'><span class='nb-status'>" + (saved ? "Saved " + ago(saved.updated) : "Not started") + "</span><span class='nb-count'></span></div>" +
      "</div>";
    var page = wrap.querySelector(".nb-page"), status = wrap.querySelector(".nb-status"), count = wrap.querySelector(".nb-count");
    if (saved) page.innerHTML = sanitize(saved.html);
    var timer = null, firstEdit = !saved;
    function words() { var n = (page.innerText || "").trim().split(/\s+/).filter(Boolean).length; count.textContent = n ? n + " word" + (n === 1 ? "" : "s") : ""; }
    function save() {
      put.from = wrap; put(meta.subject, meta.id, meta, sanitize(page.innerHTML)); put.from = null;
      status.textContent = "Saved just now";
      if (firstEdit && window.S2 && S2.addXP) { firstEdit = false; S2.addXP(10, "First notes on this topic"); }
    }
    page.addEventListener("input", function () { status.textContent = "Saving…"; words(); clearTimeout(timer); timer = setTimeout(save, 500); });
    page.addEventListener("paste", onPaste);
    page.addEventListener("click", function (e) {
      if (e.target.matches("input[type=checkbox]")) { e.target.toggleAttribute("checked", e.target.checked); save(); }
    });
    page.addEventListener("keydown", function (e) {
      if (e.key === "Tab") { e.preventDefault(); document.execCommand(e.shiftKey ? "outdent" : "indent"); }
    });
    wrap.querySelector(".nb-tools").addEventListener("mousedown", function (e) { if (e.target.closest("button")) e.preventDefault(); });
    wrap.querySelector(".nb-tools").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      page.focus();
      var c = b.dataset.cmd;
      if (c === "hilite") {
        var cur = document.queryCommandValue("hiliteColor") || document.queryCommandValue("backColor");
        var on = /255, 2[0-9]{2}, (8|9)[0-9]|ffdf5d|255, 223, 93/i.test(cur);
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("hiliteColor", false, on ? "transparent" : "#ffdf5d");
        document.execCommand("styleWithCSS", false, false);
      } else if (c === "h") {
        var blk = (document.queryCommandValue("formatBlock") || "").toLowerCase();
        document.execCommand("formatBlock", false, blk === "h3" ? "p" : "h3");
      } else if (c === "todo") {
        document.execCommand("insertHTML", false, "<div class='nb-todo'><input type='checkbox'> &nbsp;</div>");
      } else if (c === "key") {
        var sel = window.getSelection().toString() || "Key point";
        document.execCommand("insertHTML", false, "<div class='nb-key'>★ " + sel.replace(/</g, "&lt;") + "</div><p><br></p>");
      } else document.execCommand(c);
      page.dispatchEvent(new Event("input"));
    });
    window.addEventListener("s2-note-saved", function (e) {
      if (e.detail.key !== meta.subject + ":" + meta.id || e.detail.from === wrap || document.activeElement === page) return;
      var n = get(meta.subject, meta.id); page.innerHTML = n ? sanitize(n.html) : ""; status.textContent = n ? "Saved just now" : "Not started"; words();
    });
    words();
    return wrap;
  }

  /* add a snippet to the end of a topic's notes */
  function append(meta, html) {
    var n = get(meta.subject, meta.id), cur = n ? n.html : "";
    put(meta.subject, meta.id, meta, sanitize(cur + html));
  }

  /* A floating notebook: a button that opens this topic's notes in a side panel,
     plus "Add to my notes" when the learner highlights text inside `selectFrom`. */
  function drawer(meta, selectFrom) {
    if (document.querySelector(".nb-fab")) return;
    var fab = document.createElement("button");
    fab.type = "button"; fab.className = "nb-fab"; fab.setAttribute("aria-expanded", "false");
    fab.innerHTML = "<span aria-hidden='true'>✏️</span><span class='lbl'>My notes</span>";
    fab.title = "Open your notes for " + meta.t;
    var panel = document.createElement("aside");
    panel.className = "nb-drawer"; panel.setAttribute("aria-label", "My notes"); panel.hidden = true;
    panel.innerHTML = "<div class='nb-drawer-head'><div><b>My notes</b><span>" + String(meta.code || "") + " " + String(meta.t).replace(/</g, "&lt;") + "</span></div><button type='button' class='nb-close' aria-label='Close notes'>×</button></div>";
    var ed = editor(Object.assign({}, meta, { compact: true }));
    panel.appendChild(ed);
    var tip = document.createElement("p"); tip.className = "nb-tip";
    tip.innerHTML = "Tip: highlight any text in the notes and press <b>＋ Add to my notes</b>. Everything here is in your <a href='" + (meta.workbook || "workbook.html") + "'>workbook</a> too.";
    panel.appendChild(tip);
    document.body.appendChild(fab); document.body.appendChild(panel);
    function open(focus) {
      panel.hidden = false; document.body.classList.add("nb-open"); fab.setAttribute("aria-expanded", "true");
      if (focus !== false) { var pg = panel.querySelector(".nb-page"); pg.focus(); var r = document.createRange(); r.selectNodeContents(pg); r.collapse(false); var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); }
    }
    function close() { panel.hidden = true; document.body.classList.remove("nb-open"); fab.setAttribute("aria-expanded", "false"); fab.focus(); }
    fab.onclick = function () { panel.hidden ? open() : close(); };
    panel.querySelector(".nb-close").onclick = close;
    panel.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    if (selectFrom) {
      var pop = document.createElement("button"); pop.type = "button"; pop.className = "nb-addsel"; pop.textContent = "＋ Add to my notes"; pop.hidden = true;
      document.body.appendChild(pop);
      var pending = "";
      function check() {
        var sel = window.getSelection(), text = sel ? sel.toString().trim() : "";
        if (!text || text.length < 3 || !sel.rangeCount || !selectFrom.contains(sel.anchorNode)) { pop.hidden = true; return; }
        var r = sel.getRangeAt(0).getBoundingClientRect();
        pending = text.slice(0, 1500);
        pop.hidden = false;
        pop.style.top = (window.scrollY + r.bottom + 8) + "px";
        pop.style.left = Math.max(8, Math.min(window.scrollX + r.left + r.width / 2 - 75, window.scrollX + document.documentElement.clientWidth - 170)) + "px";
      }
      document.addEventListener("mouseup", function () { setTimeout(check, 10); });
      document.addEventListener("keyup", function (e) { if (e.shiftKey || e.key === "Shift") check(); });
      document.addEventListener("selectionchange", function () { if (!window.getSelection().toString()) pop.hidden = true; });
      pop.addEventListener("mousedown", function (e) { e.preventDefault(); });
      pop.onclick = function () {
        var safe = pending.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\n+/g, "<br>");
        append(meta, "<blockquote class='nb-quote'>" + safe + "</blockquote><p><br></p>");
        pop.hidden = true; window.getSelection().removeAllRanges();
        if (window.S2 && S2.chip) S2.chip("Added to your notes ✏️");
        fab.classList.add("pulse"); setTimeout(function () { fab.classList.remove("pulse"); }, 900);
      };
    }
    return { open: open, close: close };
  }
  function ago(ts) { return window.S2 && S2.timeAgo ? S2.timeAgo(ts) : new Date(ts).toLocaleDateString(); }

  window.S2Notes = { editor: editor, get: get, all: all, sanitize: sanitize, append: append, drawer: drawer };
})();
