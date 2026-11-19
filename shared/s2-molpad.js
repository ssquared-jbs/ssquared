/* S² MolPad — draw displayed formulae and check them against an answer.
   Answer molecules are written in a small SMILES subset: C, N, O, H, F, Cl, Br, I,
   bonds "-" "=" "#", branches "( )". Hydrogens are added automatically to the answer. */
(function () {
  "use strict";
  var VALENCE = { C: 4, N: 3, O: 2, H: 1, F: 1, Cl: 1, Br: 1, I: 1 };
  var NAMES = { C: "carbon", N: "nitrogen", O: "oxygen", H: "hydrogen", F: "fluorine", Cl: "chlorine", Br: "bromine", I: "iodine" };

  // ---------- answer parsing ----------
  function parseSmiles(s) {
    var atoms = [], bonds = [], stack = [], prev = -1, order = 1, i = 0;
    while (i < s.length) {
      var ch = s[i];
      if (ch === "(") { stack.push(prev); i++; continue; }
      if (ch === ")") { prev = stack.pop(); i++; continue; }
      if (ch === "=") { order = 2; i++; continue; }
      if (ch === "#") { order = 3; i++; continue; }
      if (ch === "-") { order = 1; i++; continue; }
      var el = null;
      if (s.substr(i, 2) === "Cl" || s.substr(i, 2) === "Br") { el = s.substr(i, 2); i += 2; }
      else if ("CNOHFI".indexOf(ch) >= 0) { el = ch; i++; }
      else throw new Error("Bad SMILES: " + s);
      atoms.push(el);
      var idx = atoms.length - 1;
      if (prev >= 0) bonds.push([prev, idx, order]);
      prev = idx; order = 1;
    }
    // add hydrogens
    var used = atoms.map(function () { return 0; });
    bonds.forEach(function (b) { used[b[0]] += b[2]; used[b[1]] += b[2]; });
    var n = atoms.length;
    for (var a = 0; a < n; a++) {
      var free = (VALENCE[atoms[a]] || 0) - used[a];
      for (var h = 0; h < free; h++) { atoms.push("H"); bonds.push([a, atoms.length - 1, 1]); }
    }
    return { atoms: atoms, bonds: bonds };
  }

  // ---------- graph comparison ----------
  function formula(m) {
    var c = {}; m.atoms.forEach(function (a) { c[a] = (c[a] || 0) + 1; }); return c;
  }
  function formulaStr(c) {
    var order = ["C", "H"].concat(Object.keys(c).filter(function (k) { return k !== "C" && k !== "H"; }).sort());
    return order.filter(function (k) { return c[k]; }).map(function (k) { return k + (c[k] > 1 ? "<sub>" + c[k] + "</sub>" : ""); }).join("");
  }
  function adj(m) {
    var A = m.atoms.map(function () { return []; });
    m.bonds.forEach(function (b) { A[b[0]].push([b[1], b[2]]); A[b[1]].push([b[0], b[2]]); });
    return A;
  }
  // Weisfeiler–Lehman refinement with bond orders; returns sorted label multiset
  function signature(m) {
    var A = adj(m), lab = m.atoms.slice();
    for (var it = 0; it < 6; it++) {
      lab = lab.map(function (l, i) {
        return l + "[" + A[i].map(function (e) { return e[1] + ":" + lab[e[0]]; }).sort().join(",") + "]";
      });
      // hash labels so they stay short but comparable between molecules
      lab = lab.map(hash);
    }
    return lab.slice().sort().join("|");
  }
  function hash(str) {
    var h1 = 5381, h2 = 52711;
    for (var i = 0; i < str.length; i++) { var c = str.charCodeAt(i); h1 = (h1 * 33) ^ c; h2 = (h2 * 31) ^ c; h1 |= 0; h2 |= 0; }
    return (h1 >>> 0).toString(36) + (h2 >>> 0).toString(36);
  }
  function components(m) {
    var A = adj(m), seen = {}, count = 0;
    for (var i = 0; i < m.atoms.length; i++) {
      if (seen[i]) continue; count++;
      var st = [i]; seen[i] = 1;
      while (st.length) { var x = st.pop(); A[x].forEach(function (e) { if (!seen[e[0]]) { seen[e[0]] = 1; st.push(e[0]); } }); }
    }
    return count;
  }
  function heavy(m) {
    var keep = [], map = {};
    m.atoms.forEach(function (a, i) { if (a !== "H") { map[i] = keep.length; keep.push(a); } });
    var bonds = m.bonds.filter(function (b) { return b[0] in map && b[1] in map; }).map(function (b) { return [map[b[0]], map[b[1]], b[2]]; });
    return { atoms: keep, bonds: bonds };
  }

  /* Compare a drawn molecule with the answer. Returns {ok, msg, partial} */
  function check(drawn, smiles, opts) {
    opts = opts || {};
    var ans = parseSmiles(smiles);
    if (!drawn.atoms.length) return { ok: false, msg: "Draw a molecule first. Pick an atom from the toolbar and click the grid." };
    // valence
    var used = drawn.atoms.map(function () { return 0; });
    drawn.bonds.forEach(function (b) { used[b[0]] += b[2]; used[b[1]] += b[2]; });
    for (var i = 0; i < drawn.atoms.length; i++) {
      var v = VALENCE[drawn.atoms[i]];
      if (used[i] > v) return { ok: false, msg: "One of your " + NAMES[drawn.atoms[i]] + " atoms has " + used[i] + " bonds. " + cap(NAMES[drawn.atoms[i]]) + " can only make " + v + " bond" + (v > 1 ? "s" : "") + " (a double bond counts as 2).", bad: i };
    }
    if (components(drawn) > 1) return { ok: false, msg: "Your drawing is in separate pieces. Every atom should be joined into one molecule." };

    var fa = formula(ans), fd = formula(drawn);
    var hd = heavy(drawn), ha = heavy(ans);
    var heavySame = signature(hd) === signature(ha);
    var fullSame = signature(drawn) === signature(ans);
    if (fullSame) return { ok: true, msg: "Correct. Every atom and bond is in the right place." };

    // hydrogens missing but skeleton right
    if (heavySame && (fd.H || 0) < (fa.H || 0)) {
      var under = [];
      drawn.atoms.forEach(function (a, i) { if (a !== "H" && used[i] < VALENCE[a]) under.push(a); });
      return { ok: false, partial: true, msg: "Your carbon skeleton is right, but " + ((fa.H || 0) - (fd.H || 0)) + " hydrogen atom" + ((fa.H || 0) - (fd.H || 0) === 1 ? " is" : "s are") + " missing. A displayed formula shows every atom and every bond" + (under.length ? ": check each " + NAMES[under[0]] + " has " + VALENCE[under[0]] + " bonds." : ".") };
    }
    if (heavySame) return { ok: false, partial: true, msg: "Your carbon skeleton is right, but the hydrogens don't match. Check each carbon has exactly 4 bonds." };

    // compare element counts (excluding H first)
    var els = {}; Object.keys(fa).concat(Object.keys(fd)).forEach(function (k) { els[k] = 1; });
    var diffs = [];
    Object.keys(els).forEach(function (k) {
      if (k === "H") return;
      if ((fa[k] || 0) !== (fd[k] || 0)) diffs.push("you have " + (fd[k] || 0) + " " + NAMES[k] + " atom" + ((fd[k] || 0) === 1 ? "" : "s") + " but the answer needs " + (fa[k] || 0));
    });
    if (diffs.length) return { ok: false, msg: "Not quite: " + diffs.join("; ") + "." + (opts.hint ? " " + opts.hint : "") };

    // same heavy atoms; compare bond orders
    var dbA = ans.bonds.filter(function (b) { return b[2] === 2; }).length, dbD = drawn.bonds.filter(function (b) { return b[2] === 2; }).length;
    var tbA = ans.bonds.filter(function (b) { return b[2] === 3; }).length, tbD = drawn.bonds.filter(function (b) { return b[2] === 3; }).length;
    if (dbA !== dbD) return { ok: false, msg: "Check your double bonds: the answer has " + dbA + " double bond" + (dbA === 1 ? "" : "s") + " and you've drawn " + dbD + "." + (opts.hint ? " " + opts.hint : "") };
    if (tbA !== tbD) return { ok: false, msg: "Check your triple bonds: the answer has " + tbA + " and you've drawn " + tbD + "." };
    if ((fa.H || 0) !== (fd.H || 0)) return { ok: false, msg: "The number of hydrogen atoms is wrong: you have " + (fd.H || 0) + " and the answer has " + (fa.H || 0) + ". Each carbon needs exactly 4 bonds." };
    return { ok: false, msg: "You've drawn " + formulaStr(fd) + ", which is the right formula, but the atoms are joined in a different order. That makes it an isomer, not the answer." + (opts.hint ? " " + opts.hint : "") };
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // ---------- drawing pad ----------
  var GRID = 44, W = 616, H = 352;
  function Pad(host) {
    var self = this;
    this.atoms = []; this.bonds = []; this.tool = "C"; this.history = [];
    host.innerHTML =
      '<div class="molpad">' +
      '<div class="molpad-tools" role="toolbar" aria-label="Drawing tools">' +
      ["C", "H", "O", "N", "F", "Cl", "Br"].map(function (e) { return '<button type="button" data-tool="' + e + '" class="mp-atom">' + e + "</button>"; }).join("") +
      '<span class="mp-sep"></span>' +
      '<button type="button" data-tool="1" title="Single bond">―</button><button type="button" data-tool="2" title="Double bond">═</button><button type="button" data-tool="3" title="Triple bond">≡</button>' +
      '<span class="mp-sep"></span>' +
      '<button type="button" data-tool="erase" title="Rubber">Rubber</button><button type="button" data-act="undo">Undo</button><button type="button" data-act="clear">Clear</button>' +
      "</div>" +
      '<svg class="molpad-svg" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="xMidYMid meet" aria-label="Drawing area"></svg>' +
      '<div class="molpad-help">Pick an atom, then click the grid to place it. Drag from one atom to another (or to an empty spot) to make a bond. Click a bond with ═ or ≡ to change it. Click an atom to swap its element.</div>' +
      "</div>";
    this.svg = host.querySelector("svg");
    this.toolbar = host.querySelector(".molpad-tools");
    this.toolbar.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.act === "undo") return self.undo();
      if (b.dataset.act === "clear") { self.save(); self.atoms = []; self.bonds = []; return self.render(); }
      self.setTool(b.dataset.tool);
    });
    this.setTool("C");
    this.bindPointer();
    this.render();
  }
  Pad.prototype.setTool = function (t) {
    this.tool = t;
    [].forEach.call(this.toolbar.querySelectorAll("[data-tool]"), function (b) { b.classList.toggle("on", b.dataset.tool === t); });
  };
  Pad.prototype.save = function () { this.history.push(JSON.stringify([this.atoms, this.bonds])); if (this.history.length > 50) this.history.shift(); };
  Pad.prototype.undo = function () { var h = this.history.pop(); if (!h) return; var d = JSON.parse(h); this.atoms = d[0]; this.bonds = d[1]; this.render(); };
  Pad.prototype.pt = function (evt) {
    var r = this.svg.getBoundingClientRect();
    var x = (evt.clientX - r.left) / r.width * W, y = (evt.clientY - r.top) / r.height * H;
    return { x: x, y: y, gx: Math.round(x / GRID) * GRID, gy: Math.round(y / GRID) * GRID };
  };
  Pad.prototype.atomAt = function (x, y) {
    for (var i = 0; i < this.atoms.length; i++) { var a = this.atoms[i]; if (Math.hypot(a.x - x, a.y - y) < GRID * 0.45) return i; }
    return -1;
  };
  Pad.prototype.bondAt = function (x, y) {
    var best = -1, bd = 9;
    for (var i = 0; i < this.bonds.length; i++) {
      var b = this.bonds[i], p = this.atoms[b[0]], q = this.atoms[b[1]];
      var dx = q.x - p.x, dy = q.y - p.y, L = dx * dx + dy * dy, t = Math.max(0, Math.min(1, ((x - p.x) * dx + (y - p.y) * dy) / L));
      var d = Math.hypot(p.x + t * dx - x, p.y + t * dy - y);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  };
  Pad.prototype.findBond = function (i, j) {
    for (var k = 0; k < this.bonds.length; k++) { var b = this.bonds[k]; if ((b[0] === i && b[1] === j) || (b[0] === j && b[1] === i)) return k; }
    return -1;
  };
  Pad.prototype.addAtom = function (el, x, y) {
    x = Math.max(GRID / 2, Math.min(W - GRID / 2, x)); y = Math.max(GRID / 2, Math.min(H - GRID / 2, y));
    var ex = this.atomAt(x, y); if (ex >= 0) return ex;
    this.atoms.push({ el: el, x: x, y: y }); return this.atoms.length - 1;
  };
  Pad.prototype.bond = function (i, j, order) {
    if (i === j) return;
    var k = this.findBond(i, j);
    if (k >= 0) { this.bonds[k][2] = order || (this.bonds[k][2] % 3) + 1; }
    else this.bonds.push([i, j, order || 1]);
  };
  Pad.prototype.erase = function (pt) {
    var a = this.atomAt(pt.x, pt.y);
    if (a >= 0) {
      this.bonds = this.bonds.filter(function (b) { return b[0] !== a && b[1] !== a; }).map(function (b) { return [b[0] > a ? b[0] - 1 : b[0], b[1] > a ? b[1] - 1 : b[1], b[2]]; });
      this.atoms.splice(a, 1); return;
    }
    var b = this.bondAt(pt.x, pt.y); if (b >= 0) this.bonds.splice(b, 1);
  };
  Pad.prototype.bindPointer = function () {
    var self = this, start = null, ghost = null;
    this.svg.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      var p = self.pt(e); start = { p: p, atom: self.atomAt(p.x, p.y) };
      self.svg.setPointerCapture && self.svg.setPointerCapture(e.pointerId);
    });
    this.svg.addEventListener("pointermove", function (e) {
      if (!start || start.atom < 0 || self.tool === "erase") return;
      var p = self.pt(e), a = self.atoms[start.atom];
      if (!ghost) { ghost = document.createElementNS("http://www.w3.org/2000/svg", "line"); ghost.setAttribute("class", "mp-ghost"); self.svg.appendChild(ghost); }
      ghost.setAttribute("x1", a.x); ghost.setAttribute("y1", a.y); ghost.setAttribute("x2", p.x); ghost.setAttribute("y2", p.y);
    });
    this.svg.addEventListener("pointerup", function (e) {
      if (!start) return;
      var p = self.pt(e), endAtom = self.atomAt(p.x, p.y), moved = Math.hypot(p.x - start.p.x, p.y - start.p.y) > GRID * 0.4;
      if (ghost) { ghost.remove(); ghost = null; }
      var t = self.tool, order = /^[123]$/.test(t) ? +t : 0, el = VALENCE[t] ? t : "C";
      self.save();
      if (t === "erase") self.erase(p);
      else if (start.atom >= 0 && moved) {
        var j = endAtom >= 0 ? endAtom : self.addAtom(order ? "C" : el, p.gx, p.gy);
        self.bond(start.atom, j, order || (self.findBond(start.atom, j) >= 0 ? 0 : 1));
      } else if (start.atom >= 0) {
        if (!order) self.atoms[start.atom].el = el;
      } else {
        var b = self.bondAt(p.x, p.y);
        var nearBond = b >= 0 && (function () { var bb = self.bonds[b], P = self.atoms[bb[0]], Q = self.atoms[bb[1]]; var dx = Q.x - P.x, dy = Q.y - P.y, L = dx * dx + dy * dy, tt = Math.max(0, Math.min(1, ((p.x - P.x) * dx + (p.y - P.y) * dy) / L)); return Math.hypot(P.x + tt * dx - p.x, P.y + tt * dy - p.y) < 10; })();
        if (nearBond) self.bonds[b][2] = order || (self.bonds[b][2] % 3) + 1;
        else if (!order) self.addAtom(el, p.gx, p.gy);
        else self.history.pop();
      }
      start = null; self.render();
    });
  };
  Pad.prototype.render = function () {
    var s = "";
    for (var x = GRID; x < W; x += GRID) for (var y = GRID; y < H; y += GRID) s += '<circle cx="' + x + '" cy="' + y + '" r="1.6" class="mp-dot"/>';
    var self = this;
    this.bonds.forEach(function (b) {
      var p = self.atoms[b[0]], q = self.atoms[b[1]], dx = q.x - p.x, dy = q.y - p.y, L = Math.hypot(dx, dy) || 1, nx = -dy / L * 5, ny = dx / L * 5;
      var offs = b[2] === 1 ? [0] : b[2] === 2 ? [-1, 1] : [-1.6, 0, 1.6];
      offs.forEach(function (o) { s += '<line x1="' + (p.x + nx * o) + '" y1="' + (p.y + ny * o) + '" x2="' + (q.x + nx * o) + '" y2="' + (q.y + ny * o) + '" class="mp-bond"/>'; });
    });
    this.atoms.forEach(function (a, i) {
      s += '<g class="mp-atom-g' + (a.el === "C" ? " c" : "") + (self.bad === i ? " bad" : "") + '"><circle cx="' + a.x + '" cy="' + a.y + '" r="15"/><text x="' + a.x + '" y="' + a.y + '" dy="0.35em" text-anchor="middle">' + a.el + "</text></g>";
    });
    this.svg.innerHTML = s;
  };
  Pad.prototype.value = function () {
    return { atoms: this.atoms.map(function (a) { return a.el; }), bonds: this.bonds.map(function (b) { return b.slice(); }) };
  };
  Pad.prototype.mark = function (i) { this.bad = i; this.render(); };
  Pad.prototype.lock = function (on) { this.svg.style.pointerEvents = on ? "none" : ""; this.toolbar.style.display = on ? "none" : ""; };
  Pad.prototype.load = function (smiles) {
    // lay out an answer for "show answer": simple tree layout on the grid
    var m = parseSmiles(smiles), A = adj(m), pos = {}, used = {};
    var heavyIdx = m.atoms.map(function (a, i) { return a !== "H" ? i : -1; }).filter(function (i) { return i >= 0; });
    var cx = GRID * 2, cy = Math.round(H / 2 / GRID) * GRID, dirs = [[1, 0], [0, -1], [0, 1], [-1, 0]];
    function key(x, y) { return x + "," + y; }
    function place(i, x, y, from) {
      pos[i] = [x, y]; used[key(x, y)] = 1;
      var nb = A[i].filter(function (e) { return e[0] !== from && !(e[0] in pos); });
      nb.sort(function (a, b) { return (m.atoms[a[0]] === "H") - (m.atoms[b[0]] === "H"); });
      nb.forEach(function (e) {
        for (var d = 0; d < dirs.length; d++) {
          var nx = x + dirs[d][0] * GRID * (m.atoms[e[0]] === "H" ? 1 : 2), ny = y + dirs[d][1] * GRID * (m.atoms[e[0]] === "H" ? 1 : 2);
          if (nx < GRID / 2 || nx > W - GRID / 2 || ny < GRID / 2 || ny > H - GRID / 2 || used[key(nx, ny)]) continue;
          if (m.atoms[e[0]] !== "H" && (used[key(x + dirs[d][0] * GRID, y + dirs[d][1] * GRID)])) continue;
          if (m.atoms[e[0]] !== "H") used[key(x + dirs[d][0] * GRID, y + dirs[d][1] * GRID)] = 1;
          place(e[0], nx, ny, i); return;
        }
        place(e[0], x + GRID * 0.6, y + GRID * 0.6, i);
      });
    }
    if (heavyIdx.length) place(heavyIdx[0], cx, cy, -1);
    this.atoms = m.atoms.map(function (el, i) { return { el: el, x: (pos[i] || [GRID, GRID])[0], y: (pos[i] || [GRID, GRID])[1] }; });
    this.bonds = m.bonds.map(function (b) { return b.slice(); });
    this.render();
  };

  window.MolPad = { Pad: Pad, check: check, parse: parseSmiles, formula: function (s) { return formulaStr(formula(parseSmiles(s))); } };
})();
