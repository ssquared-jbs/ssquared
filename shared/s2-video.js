/* S² video explainers.
   A video is a list of scenes. Each scene has narration lines (say: [...]);
   line k reveals the parts of the scene marked data-step="k".
   Narration uses the browser's speech synthesis, or recorded audio files if
   video.audio is set (files named s<scene>-<line>.mp3, both counted from 1).
   Captions always show. */
(function () {
  var TTS = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  var PREF = "s2-video-prefs";
  var active = null;

  function prefs() { try { return JSON.parse(localStorage.getItem(PREF)) || {}; } catch (e) { return {}; } }
  function setPref(k, v) { var p = prefs(); p[k] = v; try { localStorage.setItem(PREF, JSON.stringify(p)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function strip(s) { var d = document.createElement("div"); d.innerHTML = s; return d.textContent || ""; }
  function spoken(s) {
    return strip(s)
      .replace(/⇌/g, " reversibly forms ").replace(/→/g, " gives ").replace(/×/g, " times ").replace(/÷/g, " divided by ")
      .replace(/ = /g, " equals ").replace(/°C/g, " degrees C").replace(/≈/g, " about ").replace(/\s+/g, " ").trim();
  }
  function words(s) { return spoken(s).split(" ").length; }
  function lineText(l) { return typeof l === "string" ? l : (l.cap || l.say || ""); }
  function lineSay(l) { return typeof l === "string" ? spoken(l) : spoken(l.say || l.cap || ""); }
  function estimate(l, rate) { return Math.max(1500, (words(lineText(l)) / 2.5) * 1000 / rate + 350); }
  function fmt(ms) { var s = Math.round(ms / 1000); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }

  /* ---------- voices ---------- */
  var voices = [];
  function loadVoices() { if (TTS) voices = speechSynthesis.getVoices().filter(function (v) { return /^en(-|_|$)/i.test(v.lang); }); }
  function rankVoice(v) {
    var n = v.name, s = 0;
    if (/en-GB|en_GB/i.test(v.lang)) s += 30;
    if (/Natural|Neural|Online|Premium|Enhanced/i.test(n)) s += 40;
    if (/Google UK English/i.test(n)) s += 35;
    if (/Sonia|Libby|Ryan|Serena|Daniel|Kate|Arthur|Martha|Stephanie/i.test(n)) s += 20;
    if (/en-US/i.test(v.lang)) s += 10;
    if (/Novelty|Bad|Bells|Bubbles|Cellos|Jester|Organ|Trinoids|Whisper|Zarvox|Albert|Fred|Junior|Ralph/i.test(n)) s -= 100;
    return s;
  }
  function bestVoice() {
    loadVoices();
    var want = prefs().voice;
    if (want) for (var i = 0; i < voices.length; i++) if (voices[i].name === want) return voices[i];
    return voices.slice().sort(function (a, b) { return rankVoice(b) - rankVoice(a); })[0] || null;
  }
  if (TTS) { loadVoices(); if (speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", loadVoices); }

  /* ---------- scene renderers ---------- */
  function st(k) { return " data-step='" + k + "'"; }
  function head(s) { return s.title ? "<h3>" + (s.tag ? "<span class='tag'>" + s.tag + "</span>" : "") + s.title + "</h3>" : ""; }
  var R = {};

  R.title = function (s, v) {
    return { html: "<div class='vx-scene vx-title'><div class='kicker'" + st(0) + ">" + (s.kicker || v.kicker || "") + "</div><h3" + st(0) + ">" + s.title + "</h3>" +
      (s.sub ? "<p" + st(s.subStep || 0) + ">" + s.sub + "</p>" : "") + "<div class='mark'>" + (s.mark || "S²") + "</div></div>" };
  };
  R.points = function (s) {
    var b = s.start || 0, h = "<div class='vx-scene vx-points" + (s.two ? " two" : "") + "'>" + head(s) + "<ul>";
    s.items.forEach(function (it, i) { h += "<li" + st(b + i) + ">" + (s.numbered ? "<span class='n'>" + (i + 1) + "</span>" : "") + "<span>" + it + "</span></li>"; });
    return { html: h + "</ul></div>" };
  };
  R.big = function (s) {
    var L = strip(s.text).length, fs = L <= 10 ? 9 : Math.max(4.5, Math.min(9, 86 / (L * 0.58)));
    return { html: "<div class='vx-scene vx-big'>" + head(s) + "<div class='big' style='font-size:" + fs.toFixed(2) + "cqw'" + st(s.start || 0) + ">" + s.text + "</div>" + (s.sub ? "<div class='sub'" + st((s.start || 0) + (s.subStep == null ? 1 : s.subStep)) + ">" + s.sub + "</div>" : "") + "</div>" };
  };
  R.equation = function (s) {
    var b = s.start || 0, h = "<div class='vx-scene vx-eq'>" + head(s);
    (s.rows || [s.parts]).forEach(function (row, r) {
      var chars = row.reduce(function (n, p) { return n + strip(typeof p === "string" ? p : p.t).length; }, 0);
      var fs = Math.max(2.2, Math.min(4.4, (86 - row.length * 4.2) / (chars * 0.62)));
      h += "<div class='row' style='font-size:" + fs.toFixed(2) + "cqw" + (r ? ";margin-top:2.4cqw" : "") + "'>";
      row.forEach(function (p) {
        var o = typeof p === "string" ? { t: p } : p, cls = /^(\+|→|⇌|=|×|÷|−)$/.test(o.t) ? "op" : (o.k ? "k" : "box");
        h += "<span class='" + cls + "'" + st(b + (o.s || 0)) + ">" + o.t + "</span>";
      });
      h += "</div>";
    });
    if (s.labels) { h += "<div class='labels'>"; s.labels.forEach(function (l) { h += "<span" + st(b + (l.s || 0)) + ">" + l.t + "</span>"; }); h += "</div>"; }
    if (s.note) h += "<div class='note'" + st(b + (s.noteStep || 0)) + ">" + s.note + "</div>";
    return { html: h + "</div>" };
  };
  R.calc = function (s) {
    var b = s.start || 0, h = "<div class='vx-scene vx-calc'>" + head(s) + (s.q ? "<div class='q'" + st(0) + ">" + s.q + "</div>" : "") + "<div class='lines'>";
    s.lines.forEach(function (l, i) { var last = i === s.lines.length - 1 && s.answer !== false; h += "<div class='line" + (last ? " ans" : "") + "'" + st(b + i) + ">" + l + "</div>"; });
    return { html: h + "</div></div>" };
  };
  R.flow = function (s) {
    var b = s.start || 0, h = "<div class='vx-scene vx-flow" + (s.col ? " col" : "") + "'>" + head(s) + "<div class='chain'>";
    s.nodes.forEach(function (n, i) {
      if (i) {
        var lab = s.arrows && s.arrows[i - 1];
        h += "<div class='arrow" + (lab ? " lbl" : "") + "'" + st(b + i) + ">" + (s.col ? (s.both ? "⇅" : "↓") : (s.both ? "⇄" : "→")) + (lab ? "<i>" + lab + "</i>" : "") + "</div>";
      }
      h += "<div class='node'" + st(b + i) + ">" + n + "</div>";
    });
    return { html: h + "</div></div>" };
  };
  R.cycle = function (s) {
    var b = s.start || 0, n = s.nodes.length, W = 1100, H = 520, cx = W / 2, cy = H / 2, rx = s.rx || 400, ry = s.ry || 195, pos = [];
    for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; pos.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]); }
    var svg = "<svg viewBox='0 0 " + W + " " + H + "' preserveAspectRatio='xMidYMid meet'><defs><marker id='vxa' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0 0L10 5L0 10z' class='fillA'/></marker></defs>";
    for (i = 0; i < n; i++) {
      if (!s.closed && s.closed !== undefined && i === n - 1) break;
      var a1 = -Math.PI / 2 + i * 2 * Math.PI / n + 0.28, a2 = -Math.PI / 2 + (i + 1) * 2 * Math.PI / n - 0.28, am = (a1 + a2) / 2;
      var p1 = [cx + rx * Math.cos(a1), cy + ry * Math.sin(a1)], p2 = [cx + rx * Math.cos(a2), cy + ry * Math.sin(a2)];
      var c = [cx + rx * 1.12 * Math.cos(am), cy + ry * 1.12 * Math.sin(am)];
      var step = b + i + 1 > b + n - 1 ? b + n - 1 + (s.closeStep || 0) : b + i + 1;
      svg += "<path class='stroke draw' pathLength='1' marker-end='url(#vxa)' d='M" + p1[0].toFixed(1) + " " + p1[1].toFixed(1) + " Q" + c[0].toFixed(1) + " " + c[1].toFixed(1) + " " + p2[0].toFixed(1) + " " + p2[1].toFixed(1) + "'" + st(step) + "/>";
      if (s.arrows && s.arrows[i]) {
        var lx = cx + rx * 0.66 * Math.cos(am), ly = cy + ry * 0.62 * Math.sin(am);
        svg += "<text class='alabel' text-anchor='middle' x='" + lx.toFixed(1) + "' y='" + ly.toFixed(1) + "'" + st(step) + ">" + s.arrows[i] + "</text>";
      }
    }
    pos.forEach(function (p, i) {
      svg += "<foreignObject x='" + (p[0] - 120) + "' y='" + (p[1] - 45) + "' width='240' height='90'" + st(b + i) + "><div xmlns='http://www.w3.org/1999/xhtml' style='height:90px;display:flex;align-items:center;justify-content:center'><div style='background:var(--card);border:3px solid var(--accent);border-radius:14px;padding:8px 12px;font-size:22px;line-height:1.15;text-align:center;color:var(--ink);font-family:var(--font-body)'>" + s.nodes[i] + "</div></div></foreignObject>";
    });
    if (s.centre) svg += "<text class='txt b' text-anchor='middle' x='" + cx + "' y='" + (cy + 9) + "'" + st(b) + ">" + s.centre + "</text>";
    return { html: "<div class='vx-scene vx-cycle'>" + head(s) + "<div class='area'>" + svg + "</svg></div></div>" };
  };
  R.svg = function (s) {
    return { html: "<div class='vx-scene vx-svg'>" + head(s) + "<div class='area'><svg viewBox='" + (s.viewBox || "0 0 1100 500") + "' preserveAspectRatio='xMidYMid meet'><defs><marker id='vxb' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0 0L10 5L0 10z' class='fillA'/></marker></defs>" + s.svg + "</svg></div></div>" };
  };
  R.compare = function (s) {
    var b = s.start || 0, h = "<div class='vx-scene vx-compare'>" + head(s) + "<table><thead><tr><th></th><th>" + s.h[0] + "</th><th>" + s.h[1] + "</th></tr></thead><tbody>";
    s.rows.forEach(function (r, i) { h += "<tr" + st(b + i) + "><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>"; });
    return { html: h + "</tbody></table></div>" };
  };
  R.pyramid = function (s) {
    var b = s.start || 0, h = "<div class='vx-scene vx-pyr'>" + head(s) + "<div class='stack'>";
    s.levels.forEach(function (l, i) { var o = typeof l === "string" ? { t: l, w: 1 - i * 0.2 } : l; h += "<div class='lvl'" + st(b + i) + " style='width:" + Math.round(o.w * 70) + "cqw'>" + o.t + "</div>"; });
    h += "</div>" + (s.side ? "<div class='side'" + st(b + (s.sideStep || s.levels.length)) + ">" + s.side + "</div>" : "");
    return { html: h + "</div>" };
  };
  function smooth(pts) {
    if (pts.length < 3) return "M" + pts.map(function (p) { return p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" L");
    var d = "M" + pts[0][0].toFixed(1) + " " + pts[0][1].toFixed(1);
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      var c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += " C" + c1[0].toFixed(1) + " " + c1[1].toFixed(1) + " " + c2[0].toFixed(1) + " " + c2[1].toFixed(1) + " " + p2[0].toFixed(1) + " " + p2[1].toFixed(1);
    }
    return d;
  }
  R.graph = function (s) {
    var b = s.start || 0, X0 = 120, Y0 = 440, X1 = 1040, Y1 = 40;
    function P(p) { return [X0 + p[0] * (X1 - X0), Y0 - p[1] * (Y0 - Y1)]; }
    var svg = "<path class='ink' d='M" + X0 + " " + Y1 + " L" + X0 + " " + Y0 + " L" + X1 + " " + Y0 + "' marker-end='url(#vxb)'" + st(b) + "/>" +
      "<text class='txt s' text-anchor='middle' x='" + ((X0 + X1) / 2) + "' y='" + (Y0 + 48) + "'" + st(b) + ">" + s.x + "</text>" +
      "<g" + st(b) + "><text class='txt s' text-anchor='middle' transform='translate(" + (X0 - 40) + " " + ((Y0 + Y1) / 2) + ") rotate(-90)'>" + s.y + "</text></g>";
    (s.lines || [{ pts: s.pts }]).forEach(function (L, i) {
      var pts = L.pts.map(P), d = L.straight ? "M" + pts.map(function (p) { return p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" L") : smooth(pts);
      svg += "<path class='stroke draw" + (L.cls ? " " + L.cls : "") + "' pathLength='1' d='" + d + "'" + (L.dash ? " stroke-dasharray='8 8'" : "") + st(b + (L.s == null ? 1 : L.s)) + " style='stroke-width:5'/>";
      if (L.label) { var e = pts[pts.length - 1]; svg += "<text class='txt b' x='" + (e[0] + 10) + "' y='" + (e[1] + 8) + "'" + st(b + (L.s == null ? 1 : L.s)) + ">" + L.label + "</text>"; }
    });
    (s.marks || []).forEach(function (m) {
      var p = P([m.x, m.y]);
      svg += "<g" + st(b + (m.s == null ? 2 : m.s)) + ">" + (m.dot !== false ? "<circle cx='" + p[0] + "' cy='" + p[1] + "' r='9' class='hlf' stroke='var(--ink)' stroke-width='2'/>" : "") +
        "<text class='txt b' text-anchor='" + (m.anchor || "middle") + "' x='" + (p[0] + (m.dx || 0)) + "' y='" + (p[1] + (m.dy == null ? -22 : m.dy)) + "'>" + m.t + "</text></g>";
    });
    return { html: "<div class='vx-scene vx-svg'>" + head(s) + "<div class='area'><svg viewBox='0 0 1100 500' preserveAspectRatio='xMidYMid meet'><defs><marker id='vxb' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0 0L10 5L0 10z' style='fill:var(--ink)'/></marker></defs>" + svg + "</svg></div></div>" };
  };
  R.atom = function (s) {
    var b = s.start || 0, cx = 550, cy = 250, svg = "", shells = s.shells || [];
    shells.forEach(function (n, i) {
      var r = 85 + i * 62, step = b + i + 1;
      svg += "<g" + st(step) + "><circle cx='" + cx + "' cy='" + cy + "' r='" + r + "' class='ink' stroke-dasharray='6 8' style='opacity:.5'/>" +
        "<g style='transform-origin:" + cx + "px " + cy + "px;animation:vxspin " + (14 + i * 8) + "s linear infinite'>";
      for (var k = 0; k < n; k++) { var a = k * 2 * Math.PI / n; svg += "<circle cx='" + (cx + r * Math.cos(a)).toFixed(1) + "' cy='" + (cy + r * Math.sin(a)).toFixed(1) + "' r='11' class='fillA'/>"; }
      svg += "</g><text class='txt s' x='" + (cx + r + 14) + "' y='" + (cy - 6) + "'>" + n + "</text></g>";
    });
    svg = "<circle cx='" + cx + "' cy='" + cy + "' r='48' class='hlf' stroke='var(--ink)' stroke-width='3'" + st(b) + "/><text class='txt b' text-anchor='middle' x='" + cx + "' y='" + (cy + 10) + "' style='font-size:32px;fill:#1a1a1a'" + st(b) + ">" + (s.symbol || "") + "</text>" + svg;
    if (s.config) svg += "<text class='txt b' x='40' y='470'" + st(b + shells.length + (s.configStep || 0)) + " style='font-size:34px'>" + s.config + "</text>";
    return { html: "<div class='vx-scene vx-svg'>" + head(s) + "<div class='area'><svg viewBox='0 0 1100 500' preserveAspectRatio='xMidYMid meet'>" + svg + "</svg></div></div>" };
  };
  R.quiz = function (s) {
    var h = "<div class='vx-scene vx-quiz'>" + head(s) + "<div class='q'" + st(0) + ">" + s.q + "</div><div class='opts'>";
    s.o.forEach(function (o, i) { h += "<button type='button' data-i='" + i + "'" + st(0) + ">" + "ABCD".charAt(i) + ". " + o + "</button>"; });
    return { html: h + "</div><div class='hint'" + st(0) + ">Pick an answer to carry on.</div></div>", quiz: true };
  };

  /* canvas simulations */
  function canvasScene(s, draw) {
    return {
      html: "<div class='vx-scene vx-sim'>" + head(s) + "<div class='area'><canvas></canvas><div class='cap'></div></div></div>",
      mount: function (root) {
        var cv = root.querySelector("canvas"), cap = root.querySelector(".cap"), ctx = cv.getContext("2d"), raf, stepN = 0, alive = true;
        var css = getComputedStyle(root), col = { a: css.getPropertyValue("--accent").trim() || "#3b5bdb", ink: css.getPropertyValue("--ink").trim() || "#171b36", b: css.getPropertyValue("--bad").trim() || "#c62835", g: css.getPropertyValue("--good").trim() || "#128a52", line: css.getPropertyValue("--line").trim() || "#ccc", hl: css.getPropertyValue("--hl").trim() || "#ffdf5d" };
        function size() { var r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1; cv.width = Math.max(1, r.width * d); cv.height = Math.max(1, r.height * d); ctx.setTransform(d, 0, 0, d, 0, 0); return r; }
        var box = size(), state = draw.init ? draw.init(box, s) : {};
        var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
        function frame() { if (!alive) return; draw.frame(ctx, box, state, stepN, col, s); if (!reduce) raf = requestAnimationFrame(frame); }
        frame();
        var onR = function () { box = size(); if (draw.resize) draw.resize(box, state, s); frame(); };
        window.addEventListener("resize", onR);
        return {
          step: function (k) { stepN = k; if (s.caps) { var c = null; for (var i = 0; i <= k && i < s.caps.length; i++) if (s.caps[i] != null) c = s.caps[i]; cap.innerHTML = c ? "<span>" + c + "</span>" : ""; } if (draw.step) draw.step(state, k, box, s); if (reduce) frame(); },
          stop: function () { alive = false; cancelAnimationFrame(raf); window.removeEventListener("resize", onR); }
        };
      }
    };
  }
  function particleSim() {
    return {
      init: function (box, s) {
        var n = s.n || 36, P = [];
        for (var i = 0; i < n; i++) P.push({ x: box.width * (0.3 + Math.random() * 0.4), y: box.height * (0.3 + Math.random() * 0.4), vx: 0, vy: 0, c: s.mode === "diffusion" ? (i < n / 2 ? 0 : 1) : 0 });
        return { P: P, n: n };
      },
      frame: function (ctx, box, S, k, col, s) {
        var modes = s.modes || [s.mode || "gas"], mode = modes[Math.min(k, modes.length - 1)], W = box.width, H = box.height - 40;
        var bw = Math.min(W * 0.55, H * 1.5), bh = H * 0.86, bx = (W - bw) / 2, by = 6, r = Math.max(5, Math.min(bw, bh) / 22);
        if (s.mode === "diffusion" || mode === "diffusion") { bw = W * 0.8; bx = W * 0.1; }
        ctx.clearRect(0, 0, W, box.height);
        ctx.strokeStyle = col.ink; ctx.lineWidth = 3; ctx.strokeRect(bx, by, bw, bh);
        if (mode === "diffusion" && k === 0) { ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.moveTo(bx + bw / 2, by); ctx.lineTo(bx + bw / 2, by + bh); ctx.stroke(); ctx.setLineDash([]); }
        var cols = Math.round(Math.sqrt(S.n)); while (S.n % cols && cols < S.n) cols++; if (cols > Math.sqrt(S.n) * 1.6) cols = Math.ceil(Math.sqrt(S.n * 1.3)); var sp = r * 2.15;
        var speed = { solid: 0, liquid: 0.9, gas: 3.2, hot: 5.5, diffusion: 1.8 }[mode] || 2;
        if (s.speeds) speed = s.speeds[Math.min(k, s.speeds.length - 1)];
        S.P.forEach(function (p, i) {
          if (mode === "solid") {
            var tx = bx + bw / 2 - (cols - 1) * sp / 2 + (i % cols) * sp, ty = by + bh - r - 4 - Math.floor(i / cols) * sp;
            p.x += (tx - p.x) * 0.12 + (Math.random() - 0.5) * 1.6; p.y += (ty - p.y) * 0.12 + (Math.random() - 0.5) * 1.6; p.vx = p.vy = 0;
          } else {
            p.vx += (Math.random() - 0.5) * 0.4 * speed; p.vy += (Math.random() - 0.5) * 0.4 * speed;
            var v = Math.hypot(p.vx, p.vy) || 1; p.vx = p.vx / v * speed; p.vy = p.vy / v * speed;
            if (mode === "liquid") p.vy += 0.6;
            p.x += p.vx; p.y += p.vy;
            var lim = mode === "diffusion" && k === 0 ? (p.c ? [bx + bw / 2 + r, bx + bw - r] : [bx + r, bx + bw / 2 - r]) : [bx + r, bx + bw - r];
            if (p.x < lim[0]) { p.x = lim[0]; p.vx = Math.abs(p.vx); if (s.flash) p.f = 6; }
            if (p.x > lim[1]) { p.x = lim[1]; p.vx = -Math.abs(p.vx); if (s.flash) p.f = 6; }
            var top = mode === "liquid" ? by + bh * 0.42 : by + r;
            if (p.y < top) { p.y = top; p.vy = Math.abs(p.vy); if (s.flash && mode !== "liquid") p.f = 6; }
            if (p.y > by + bh - r) { p.y = by + bh - r; p.vy = -Math.abs(p.vy); if (s.flash) p.f = 6; }
          }
        });
        if (mode === "liquid") for (var a = 0; a < S.P.length; a++) for (var b2 = a + 1; b2 < S.P.length; b2++) {
          var A = S.P[a], B = S.P[b2], dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy);
          if (d > 0 && d < r * 2) { var o = (r * 2 - d) / 2, ux = dx / d, uy = dy / d; A.x -= ux * o; A.y -= uy * o; B.x += ux * o; B.y += uy * o; }
        }
        S.P.forEach(function (p) {
          ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = p.c ? col.b : col.a; ctx.fill(); ctx.lineWidth = 1.5; ctx.strokeStyle = col.ink; ctx.stroke();
          if (p.f) { p.f--; ctx.beginPath(); ctx.arc(p.x, p.y, r + 6, 0, Math.PI * 2); ctx.strokeStyle = col.hl; ctx.lineWidth = 3; ctx.stroke(); }
        });
      }
    };
  }
  R.particles = function (s) { return canvasScene(s, particleSim()); };
  R.wave = function (s) {
    return canvasScene(s, {
      init: function () { return { t: 0 }; },
      frame: function (ctx, box, S, k, col, s) {
        var modes = s.modes || [s.mode || "transverse"], mode = modes[Math.min(k, modes.length - 1)], W = box.width, H = box.height - 40, mid = H / 2, A = H * 0.28, lam = W / 3.2;
        S.t += 0.035; ctx.clearRect(0, 0, W, box.height);
        ctx.strokeStyle = col.line; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(20, mid); ctx.lineTo(W - 20, mid); ctx.stroke();
        if (mode === "transverse") {
          ctx.strokeStyle = col.a; ctx.lineWidth = 4; ctx.beginPath();
          for (var x = 20; x <= W - 20; x += 4) { var y = mid - A * Math.sin(2 * Math.PI * (x / lam) - S.t * 2); x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
          ctx.stroke();
          for (x = 30; x < W - 20; x += lam / 8) { var yy = mid - A * Math.sin(2 * Math.PI * (x / lam) - S.t * 2); ctx.beginPath(); ctx.arc(x, yy, 6, 0, 7); ctx.fillStyle = col.ink; ctx.fill(); }
          var lab = s.labels || [];
          if (lab.indexOf("amplitude") >= 0 && k >= (s.ampStep || 1)) arrow(ctx, 60, mid, 60, mid - A, col.b, "amplitude");
          if (lab.indexOf("wavelength") >= 0 && k >= (s.lamStep || 2)) arrow(ctx, W / 2 - lam / 2, mid + A + 26, W / 2 + lam / 2, mid + A + 26, col.g, "wavelength", true);
        } else {
          for (var i = 0; i < 46; i++) {
            var x0 = 30 + i * (W - 60) / 45, dx = 16 * Math.sin(2 * Math.PI * (x0 / lam) - S.t * 2);
            for (var j = 0; j < 5; j++) { ctx.beginPath(); ctx.arc(x0 + dx, mid - A * 0.8 + j * A * 0.4, 5, 0, 7); ctx.fillStyle = i === 23 ? col.b : col.a; ctx.fill(); }
          }
        }
        function arrow(c, x1, y1, x2, y2, colr, t, horiz) {
          c.strokeStyle = colr; c.fillStyle = colr; c.lineWidth = 3; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
          [[x1, y1, x2, y2], [x2, y2, x1, y1]].forEach(function (q) { var an = Math.atan2(q[3] - q[1], q[2] - q[0]); c.beginPath(); c.moveTo(q[2], q[3]); c.lineTo(q[2] - 12 * Math.cos(an - 0.4), q[3] - 12 * Math.sin(an - 0.4)); c.lineTo(q[2] - 12 * Math.cos(an + 0.4), q[3] - 12 * Math.sin(an + 0.4)); c.fill(); });
          c.font = "700 16px sans-serif"; c.fillText(t, horiz ? (x1 + x2) / 2 - 40 : x1 + 10, horiz ? y1 - 8 : (y1 + y2) / 2);
        }
      }
    });
  };

  /* ---------- player ---------- */
  function Player(root, video, opts) {
    opts = opts || {};
    var P = this, pf = prefs();
    this.v = video; this.si = 0; this.li = 0; this.playing = false; this.token = 0; this.mounted = null;
    this.voice = pf.voiceOn === false ? false : (TTS || !!video.audio);
    this.cc = pf.cc !== false; this.rate = pf.rate || 1;
    var total = 0; video.scenes.forEach(function (s) { (s.say || []).forEach(function (l) { total += estimate(l, 1); }); total += 500; });
    this.total = total;
    root.classList.add("vx");
    root.innerHTML =
      "<div class='vx-head'><h2>▶ " + esc(strip(video.title || "Video explainer")) + "</h2><span class='len'>about " + Math.max(1, Math.round(total / 60000)) + " min</span></div>" +
      "<div class='vx-stage'></div><div class='vx-cc' aria-live='polite'></div>" +
      "<div class='vx-bar'><button class='play' type='button' aria-label='Play'>▶</button>" +
      "<button type='button' class='prev' aria-label='Previous scene'>⏮</button><button type='button' class='next' aria-label='Next scene'>⏭</button>" +
      "<div class='vx-prog'></div><span class='vx-time'>0:00</span>" +
      "<button type='button' class='voice' aria-pressed='" + this.voice + "' title='Narration on or off'>🔊<span class='lbl'> Voice</span></button>" +
      "<button type='button' class='ccb' aria-pressed='" + this.cc + "' title='Captions'>CC</button>" +
      "<button type='button' class='rate' title='Speed'>" + this.rate + "×</button>" +
      "<button type='button' class='scr' aria-pressed='false' title='Transcript'>📝<span class='lbl'> Transcript</span></button>" +
      "<button type='button' class='fs' title='Full screen' aria-label='Full screen'>⛶</button></div>" +
      "<div class='vx-voice-note' hidden></div><div class='vx-script' hidden></div>";
    this.root = root; this.stage = root.querySelector(".vx-stage"); this.ccEl = root.querySelector(".vx-cc");
    this.ccEl.classList.toggle("off", !this.cc);
    var prog = root.querySelector(".vx-prog");
    video.scenes.forEach(function (s, i) { var b = document.createElement("button"); b.type = "button"; b.title = "Scene " + (i + 1); b.innerHTML = "<i></i>"; b.onclick = function () { P.go(i, P.playing); }; prog.appendChild(b); });
    root.querySelector(".play").onclick = function () { P.playing ? P.pause() : P.play(); };
    root.querySelector(".prev").onclick = function () { P.go(Math.max(0, P.li > 0 ? P.si : P.si - 1), P.playing); };
    root.querySelector(".next").onclick = function () { if (P.si < video.scenes.length - 1) P.go(P.si + 1, P.playing); };
    root.querySelector(".voice").onclick = function () {
      if (!TTS && !video.audio) { P.note("Your browser doesn't have a built-in voice, so this video plays with captions only."); return; }
      P.voice = !P.voice; this.setAttribute("aria-pressed", P.voice); setPref("voiceOn", P.voice); if (P.playing) P.restartLine();
    };
    root.querySelector(".ccb").onclick = function () { P.cc = !P.cc; this.setAttribute("aria-pressed", P.cc); P.ccEl.classList.toggle("off", !P.cc); setPref("cc", P.cc); };
    root.querySelector(".rate").onclick = function () { var r = [1, 1.25, 1.5, 0.85]; P.rate = r[(r.indexOf(P.rate) + 1) % r.length]; this.textContent = P.rate + "×"; setPref("rate", P.rate); if (P.playing) P.restartLine(); };
    root.querySelector(".scr").onclick = function () { var sc = root.querySelector(".vx-script"); sc.hidden = !sc.hidden; this.setAttribute("aria-pressed", !sc.hidden); if (!sc.hidden) P.script(); };
    root.querySelector(".fs").onclick = function () { if (document.fullscreenElement) document.exitFullscreen(); else if (root.requestFullscreen) root.requestFullscreen(); };
    root.addEventListener("keydown", function (e) {
      if (e.target.tagName === "BUTTON" && (e.key === " " || e.key === "Enter")) return;
      if (e.key === " ") { e.preventDefault(); P.playing ? P.pause() : P.play(); }
      if (e.key === "ArrowRight") root.querySelector(".next").click();
      if (e.key === "ArrowLeft") root.querySelector(".prev").click();
    });
    root.tabIndex = -1;
    if (TTS && this.voice) { var vv = bestVoice(); if (vv) this.voiceInfo = vv.name; }
    this.onDone = opts.onDone; this.quizHref = opts.quizHref;
    this.show(0, 0);
    var poster = document.createElement("button"); poster.className = "vx-poster"; poster.type = "button"; poster.setAttribute("aria-label", "Play video");
    poster.innerHTML = "<span class='big-play'>▶</span>"; poster.onclick = function () { P.play(); };
    this.stage.appendChild(poster); this.poster = poster;
  }
  Player.prototype.note = function (t) { var n = this.root.querySelector(".vx-voice-note"); n.hidden = !t; n.textContent = t || ""; };
  Player.prototype.show = function (si, li) {
    var s = this.v.scenes[si], r = (R[s.type] || R.points)(s, this.v);
    if (this.si !== si || !this.stage.querySelector(".vx-scene")) {
      if (this.mounted && this.mounted.stop) this.mounted.stop();
      var old = this.stage.querySelector(".vx-scene"); if (old) old.remove();
      var tmp = document.createElement("div"); tmp.innerHTML = r.html; var node = tmp.firstChild;
      this.stage.insertBefore(node, this.stage.firstChild);
      this.mounted = r.mount ? r.mount(node) : null; this.isQuiz = !!r.quiz;
      if (r.quiz) this.wireQuiz(node, s);
      this.si = si;
    }
    this.li = li; this.reveal(li);
    var lines = s.say || []; this.ccEl.innerHTML = lines[li] != null ? lineText(lines[li]) : "";
    this.paintProgress();
  };
  Player.prototype.reveal = function (k) {
    var els = this.stage.querySelectorAll("[data-step]");
    for (var i = 0; i < els.length; i++) { var n = +els[i].getAttribute("data-step"); els[i].classList.toggle("on", n <= k); els[i].classList.toggle("now", n === k); }
    if (this.mounted && this.mounted.step) this.mounted.step(k);
  };
  Player.prototype.paintProgress = function () {
    var bars = this.root.querySelectorAll(".vx-prog i"), P = this, el = 0;
    this.v.scenes.forEach(function (s, i) {
      var n = (s.say || []).length || 1, f = i < P.si ? 1 : i > P.si ? 0 : (P.li + (P.lineDone ? 1 : 0)) / n;
      bars[i].style.width = Math.round(f * 100) + "%";
      (s.say || []).forEach(function (l, k) { if (i < P.si || (i === P.si && k < P.li)) el += estimate(l, 1); });
    });
    this.root.querySelector(".vx-time").textContent = fmt(el / this.rate) + " / " + fmt(this.total / this.rate);
    var cur = this.root.querySelector(".vx-script p.cur"); if (cur) cur.classList.remove("cur");
    var np = this.root.querySelector(".vx-script p[data-k='" + this.si + "-" + this.li + "']"); if (np) np.classList.add("cur");
  };
  Player.prototype.script = function () {
    var h = "", P = this;
    this.v.scenes.forEach(function (s, i) {
      h += "<h4>" + (i + 1) + ". " + (s.title || s.text || "Scene") + "</h4>";
      (s.say || []).forEach(function (l, k) { h += "<p data-k='" + i + "-" + k + "'>" + lineText(l) + "</p>"; });
    });
    var box = this.root.querySelector(".vx-script"); box.innerHTML = h;
    [].forEach.call(box.querySelectorAll("p"), function (p) { p.style.cursor = "pointer"; p.onclick = function () { var a = p.getAttribute("data-k").split("-"); P.go(+a[0], P.playing, +a[1]); }; });
    this.paintProgress();
  };
  Player.prototype.wireQuiz = function (node, s) {
    var P = this;
    [].forEach.call(node.querySelectorAll("button[data-i]"), function (b) {
      b.onclick = function () {
        var i = +b.getAttribute("data-i"), ok = i === s.a;
        [].forEach.call(node.querySelectorAll("button[data-i]"), function (x) { x.disabled = true; if (+x.getAttribute("data-i") === s.a) x.classList.add("ok"); });
        if (!ok) b.classList.add("no");
        var h = node.querySelector(".hint"); h.textContent = ok ? "Correct!" : "Not quite. It's " + strip(s.o[s.a]) + ".";
        P.answered = true;
        var line = ok ? (s.right || "Correct! " + (s.why || "")) : (s.wrong || "Not quite. The answer is " + strip(s.o[s.a]) + ". " + (s.why || ""));
        P.ccEl.innerHTML = line;
        if (!P.playing) { P.playing = true; P.setPlayBtn(); }
        P.speak(line, function () { P.nextScene(); });
      };
    });
  };
  Player.prototype.setPlayBtn = function () { var b = this.root.querySelector(".play"); b.textContent = this.playing ? "❚❚" : "▶"; b.setAttribute("aria-label", this.playing ? "Pause" : "Play"); };
  Player.prototype.play = function () {
    if (active && active !== this) active.pause();
    active = this;
    if (this.poster) { this.poster.remove(); this.poster = null; }
    var d = this.root.querySelector(".vx-done"); if (d) { d.remove(); this.go(0, false); }
    this.playing = true; this.setPlayBtn(); this.root.focus({ preventScroll: true });
    if (this.voice && TTS && !this.v.audio && !bestVoice()) this.note("No English voice was found on this device, so the video plays with captions only. You can turn on a voice in your device's speech settings.");
    this.restartLine();
  };
  Player.prototype.pause = function () {
    this.playing = false; this.token++; this.setPlayBtn();
    if (TTS) speechSynthesis.cancel();
    if (this.audioEl) this.audioEl.pause();
    clearTimeout(this.timer); clearTimeout(this.dog);
  };
  Player.prototype.go = function (si, keepPlaying, li) {
    this.token++; if (TTS) speechSynthesis.cancel(); if (this.audioEl) this.audioEl.pause(); clearTimeout(this.timer); clearTimeout(this.dog);
    if (this.poster) { this.poster.remove(); this.poster = null; }
    var d = this.root.querySelector(".vx-done"); if (d) d.remove();
    this.answered = false; this.lineDone = false;
    if (si !== this.si) { var old = this.stage.querySelector(".vx-scene"); if (old) old.remove(); }
    this.show(si, li || 0);
    if (keepPlaying) { this.playing = true; this.setPlayBtn(); this.restartLine(); }
  };
  Player.prototype.restartLine = function () {
    var P = this, s = this.v.scenes[this.si], lines = s.say || [];
    this.token++; if (TTS) speechSynthesis.cancel(); clearTimeout(this.timer); clearTimeout(this.dog);
    if (!this.playing) return;
    this.lineDone = false;
    if (this.isQuiz && this.li >= lines.length - 1 && this.answered) return;
    this.show(this.si, this.li);
    var line = lines[this.li];
    if (line == null) { this.timer = setTimeout(function () { P.nextScene(); }, 1500); return; }
    this.speak(line, function () {
      P.lineDone = true; P.paintProgress();
      if (P.li < lines.length - 1) { P.timer = setTimeout(function () { P.li++; P.restartLine(); }, 280 / P.rate); }
      else if (P.isQuiz && !P.answered) { P.ccEl.innerHTML = "Pick an answer to carry on."; }
      else P.timer = setTimeout(function () { P.nextScene(); }, 700 / P.rate);
    }, this.si, this.li);
  };
  Player.prototype.speak = function (line, done, si, li) {
    var P = this, tok = ++this.token, fired = false, est = estimate(line, this.rate);
    function fin() { if (fired || tok !== P.token) return; fired = true; clearTimeout(P.dog); done(); }
    if (this.voice && this.v.audio && si != null) {
      var a = this.audioEl || (this.audioEl = new Audio());
      a.src = this.v.audio.replace(/\/?$/, "/") + "s" + (si + 1) + "-" + (li + 1) + ".mp3"; a.playbackRate = this.rate;
      a.onended = fin; a.onerror = function () { P.v.audio = null; P.speak(line, done, si, li); };
      a.play().catch(function () { a.onerror(); });
      this.dog = setTimeout(fin, est * 3 + 4000);
      return;
    }
    if (this.voice && TTS && bestVoice()) {
      var u = new SpeechSynthesisUtterance(lineSay(line)), v = bestVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
      var t0 = Date.now();
      u.rate = this.rate; u.pitch = 1;
      u.onend = function () { var el = Date.now() - t0; if (el < est * 0.3) { clearTimeout(P.dog); P.dog = setTimeout(fin, est - el); } else fin(); }; u.onerror = function (e) { if (e.error !== "interrupted" && e.error !== "canceled") { P.dog = setTimeout(fin, est); } };
      this.u = u; speechSynthesis.cancel(); speechSynthesis.speak(u);
      this.dog = setTimeout(fin, est * 2.2 + 3000);
    } else {
      this.dog = setTimeout(fin, est);
    }
  };
  Player.prototype.nextScene = function () {
    if (!this.playing) return;
    if (this.si < this.v.scenes.length - 1) { this.go(this.si + 1, true); return; }
    this.finish();
  };
  Player.prototype.finish = function () {
    this.playing = false; this.setPlayBtn(); this.lineDone = true; this.paintProgress();
    var P = this, d = document.createElement("div"); d.className = "vx-done";
    d.innerHTML = "<h4>Nice one!</h4><p>" + (this.v.outro || "That's the video. Now test yourself.") + "</p><div class='row'>" +
      (this.quizHref ? "<a class='s2-btn' href='" + this.quizHref + "'>Take the quiz</a>" : "") + "<button class='s2-btn ghost' type='button'>Watch again</button></div>";
    d.querySelector("button").onclick = function () { d.remove(); P.go(0, true); };
    this.stage.appendChild(d);
    if (this.onDone) this.onDone();
  };

  window.S2Video = {
    mount: function (root, video, opts) { return new Player(root, video, opts); },
    renderers: R,
    words: function (video) { var n = 0; video.scenes.forEach(function (s) { (s.say || []).forEach(function (l) { n += words(lineText(l)); }); }); return n; }
  };
  document.addEventListener("visibilitychange", function () { if (document.hidden && active && active.playing) active.pause(); });
})();
