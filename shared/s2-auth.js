/* S² accounts: sign in with Google, Microsoft or email, and sync progress + notes.
   Uses Firebase Authentication and Cloud Firestore (loaded from Google's CDN).
   Accounts stay off until shared/s2-firebase-config.js has an apiKey.
   For previewing the UI without Firebase, add ?auth=preview to any URL. */
(function () {
  "use strict";
  if (window.S2Auth) return;

  var SDK = "https://www.gstatic.com/firebasejs/12.15.0/";
  var PROGRESS = "s2-progress-v1", NOTE = "s2-note:", PROFILE = "s2-profile", CARDS = "s2-cards";
  function json(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  var cfg = window.S2_FIREBASE || {};
  var preview = /[?&]auth=preview\b/.test(location.search);
  var live = !!(cfg.apiKey || window.S2AuthBackend || preview);
  var enabled = true; /* the button always shows; until Firebase is set up it explains that accounts are coming */
  var backend = null, user = null, state = "out", lastSync = 0, pushTimer = null, applying = false, buttons = [];

  window.S2Auth = { enabled: enabled, user: function () { return user; }, open: open };
  if (!enabled) return;

  /* ---------- styles ---------- */
  var css = "" +
    ".s2-acct-btn{display:inline-flex;align-items:center;gap:6px;height:38px;min-width:38px;padding:0 10px;border-radius:12px;border:1.5px solid var(--line,#dce1ee);background:var(--card,#fff);color:var(--ink,#171b36);font:inherit;font-weight:700;font-size:.9rem;cursor:pointer;vertical-align:middle;margin-left:6px}" +
    ".s2-acct-btn:hover{border-color:var(--accent,#3b5bdb)}" +
    ".s2-acct-btn .av{width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:var(--accent,#3b5bdb);color:#fff;font-size:.8rem;overflow:hidden}" +
    ".s2-acct-btn .av img{width:100%;height:100%;object-fit:cover}" +
    "@media(max-width:560px){.s2-acct-btn .lbl{display:none}}" +
    ".s2-auth-back{position:fixed;inset:0;z-index:1000;background:rgba(10,12,28,.55);display:flex;align-items:center;justify-content:center;padding:16px}" +
    ".s2-auth{width:min(420px,100%);max-height:calc(100vh - 32px);overflow:auto;background:var(--card,#fff);color:var(--ink,#171b36);border-radius:20px;border:1.5px solid var(--line,#dce1ee);padding:24px;font-family:var(--font-body,system-ui);box-shadow:0 20px 60px rgba(0,0,0,.25)}" +
    ".s2-auth h2{font-family:var(--font-display,system-ui);font-size:1.5rem;margin:0 0 4px}" +
    ".s2-auth p.sub{margin:0 0 18px;color:var(--ink-2,#4b5174);font-size:.95rem}" +
    ".s2-auth .prov{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:11px 14px;margin:0 0 10px;border-radius:12px;border:1.5px solid var(--line,#dce1ee);background:var(--card,#fff);color:var(--ink,#171b36);font:inherit;font-weight:700;cursor:pointer}" +
    ".s2-auth .prov:hover{border-color:var(--accent,#3b5bdb)}.s2-auth .prov svg{width:20px;height:20px;flex:none}" +
    ".s2-auth .or{display:flex;align-items:center;gap:10px;color:var(--ink-3,#7a809e);font-size:.85rem;margin:14px 0}.s2-auth .or:before,.s2-auth .or:after{content:'';flex:1;height:1.5px;background:var(--line,#dce1ee)}" +
    ".s2-auth label{display:block;font-weight:700;font-size:.9rem;margin:10px 0 4px}" +
    ".s2-auth input{width:100%;box-sizing:border-box;padding:10px 12px;border-radius:10px;border:1.5px solid var(--line,#dce1ee);background:var(--surface-2,#f7f8fc);color:var(--ink,#171b36);font:inherit}" +
    ".s2-auth input:focus{outline:2px solid var(--accent,#3b5bdb);outline-offset:1px}" +
    ".s2-auth .go{width:100%;margin-top:16px;padding:12px;border-radius:12px;border:0;background:var(--accent,#3b5bdb);color:#fff;font:inherit;font-weight:700;cursor:pointer}" +
    ".s2-auth .go:disabled{opacity:.6;cursor:wait}" +
    ".s2-auth .links{display:flex;justify-content:space-between;gap:10px;margin-top:12px;font-size:.9rem;flex-wrap:wrap}" +
    ".s2-auth .links button,.s2-auth .x{background:none;border:0;padding:0;color:var(--accent-text,#263f9e);font:inherit;cursor:pointer;text-decoration:underline}" +
    ".s2-auth .x{float:right;text-decoration:none;font-size:1.4rem;line-height:1;color:var(--ink-3,#7a809e)}" +
    ".s2-auth .msg{margin-top:12px;padding:10px 12px;border-radius:10px;font-size:.92rem}.s2-auth .msg.bad{background:var(--bad-soft,#fde6e8);color:var(--bad,#c62835)}.s2-auth .msg.good{background:var(--good-soft,#def5e8);color:var(--good,#128a52)}" +
    ".s2-auth .who{display:flex;align-items:center;gap:12px;margin:6px 0 16px}.s2-auth .who .av{width:48px;height:48px;border-radius:50%;background:var(--accent,#3b5bdb);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.3rem;overflow:hidden;flex:none}.s2-auth .who .av img{width:100%;height:100%;object-fit:cover}" +
    ".s2-auth .who b{display:block}.s2-auth .who span{color:var(--ink-2,#4b5174);font-size:.9rem;word-break:break-all}" +
    ".s2-auth .sync{padding:10px 12px;border-radius:10px;background:var(--surface-2,#f7f8fc);font-size:.92rem;margin-bottom:14px}" +
    ".s2-auth .row{display:flex;gap:10px;flex-wrap:wrap}.s2-auth .row button{flex:1}" +
    ".s2-auth .ghost{padding:11px;border-radius:12px;border:1.5px solid var(--line,#dce1ee);background:var(--card,#fff);color:var(--ink,#171b36);font:inherit;font-weight:700;cursor:pointer}" +
    ".s2-auth .danger{margin-top:18px;font-size:.85rem;color:var(--ink-3,#7a809e)}.s2-auth .danger button{background:none;border:0;padding:0;font:inherit;text-decoration:underline;cursor:pointer;color:var(--bad,#c62835)}" +
    ".s2-auth .fine{font-size:.8rem;color:var(--ink-3,#7a809e);margin-top:14px}";
  var st = document.createElement("style"); st.textContent = css; (document.head || document.documentElement).appendChild(st);

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function initial(u) { var n = (u && (u.name || u.email)) || "?"; return n.trim().charAt(0).toUpperCase(); }
  function avatar(u) { return u && u.photo ? "<img src='" + esc(u.photo) + "' alt='' referrerpolicy='no-referrer'>" : esc(initial(u)); }
  function ago(t) { if (!t) return "not yet"; var s = Math.round((Date.now() - t) / 1000); return s < 10 ? "just now" : s < 60 ? s + " seconds ago" : s < 3600 ? Math.round(s / 60) + " min ago" : Math.round(s / 3600) + " h ago"; }
  var G = "<svg viewBox='0 0 48 48' aria-hidden='true'><path fill='#FFC107' d='M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z'/><path fill='#FF3D00' d='M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z'/><path fill='#4CAF50' d='M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z'/><path fill='#1976D2' d='M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z'/></svg>";
  var M = "<svg viewBox='0 0 23 23' aria-hidden='true'><path fill='#f35325' d='M1 1h10v10H1z'/><path fill='#81bc06' d='M12 1h10v10H12z'/><path fill='#05a6f0' d='M1 12h10v10H1z'/><path fill='#ffba08' d='M12 12h10v10H12z'/></svg>";

  function friendly(e) {
    var c = (e && e.code) || "";
    var map = {
      "auth/invalid-credential": "That email or password isn't right.", "auth/wrong-password": "That email or password isn't right.", "auth/user-not-found": "There's no account with that email. Create one instead?",
      "auth/invalid-email": "That doesn't look like an email address.", "auth/email-already-in-use": "There's already an account with that email. Sign in instead.",
      "auth/weak-password": "Use a password with at least 6 characters.", "auth/missing-password": "Enter your password.",
      "auth/account-exists-with-different-credential": "You already have an account with this email using a different sign-in method. Use that one.",
      "auth/network-request-failed": "Couldn't connect. Check your internet and try again.", "auth/too-many-requests": "Too many attempts. Wait a few minutes and try again.",
      "auth/popup-blocked": "Your browser blocked the sign-in window. Allow pop-ups for this site and try again.",
      "auth/unauthorized-domain": "Sign-in isn't set up for this web address yet.", "auth/operation-not-allowed": "That sign-in method isn't switched on yet.",
      "auth/requires-recent-login": "For safety, sign out and back in, then try again.", "auth/user-disabled": "This account has been disabled."
    };
    return map[c] || "Something went wrong" + (c ? " (" + c.replace("auth/", "") + ")" : "") + ". Please try again.";
  }

  /* ---------- local data ---------- */
  function readLocal() {
    var p = {}, notes = {};
    try { p = JSON.parse(localStorage.getItem(PROGRESS)) || {}; } catch (e) {}
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(NOTE) === 0) { try { notes[k] = JSON.parse(localStorage.getItem(k)); } catch (e) {} }
    }
    return { progress: p, notes: notes, profile: json(PROFILE), cards: json(CARDS) || {} };
  }
  function writeLocal(d) {
    applying = true;
    try {
      localStorage.setItem(PROGRESS, JSON.stringify(d.progress || {}));
      Object.keys(d.notes || {}).forEach(function (k) { if (d.notes[k]) localStorage.setItem(k, JSON.stringify(d.notes[k])); });
      if (d.profile) localStorage.setItem(PROFILE, JSON.stringify(d.profile));
      localStorage.setItem(CARDS, JSON.stringify(d.cards || {}));
    } catch (e) {}
    applying = false;
  }
  /* after signing out, remove this account's data from the device (it's safe in the account) */
  function clearLocal() {
    applying = true;
    try {
      var ks = [];
      for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k === PROGRESS || k === PROFILE || k === CARDS || (k && k.indexOf(NOTE) === 0)) ks.push(k); }
      ks.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) {}
    applying = false;
  }
  function ratio(x) { return x && x.t ? x.s / x.t : -1; }
  function mergeItem(a, b) {
    if (!a) return b; if (!b) return a;
    var newer = (a.v || 0) >= (b.v || 0) ? a : b, older = newer === a ? b : a, out = {};
    Object.keys(older).forEach(function (k) { out[k] = older[k]; });
    Object.keys(newer).forEach(function (k) { out[k] = newer[k]; });
    ["best", "exam"].forEach(function (k) { if (a[k] || b[k]) out[k] = ratio(a[k]) >= ratio(b[k]) ? a[k] : b[k]; });
    if (a.fc || b.fc) { var u = {}; (a.fc || []).concat(b.fc || []).forEach(function (x) { u[JSON.stringify(x)] = x; }); out.fc = Object.keys(u).map(function (k) { return u[k]; }); }
    ["read", "video", "done"].forEach(function (k) { if (a[k] || b[k]) out[k] = a[k] || b[k]; });
    return out;
  }
  function merge(L, R) {
    R = R || {}; var lp = L.progress || {}, rp = R.progress || {}, p = {};
    Object.keys(rp).concat(Object.keys(lp)).forEach(function (k) { if (["days", "items", "xp"].indexOf(k) < 0) p[k] = lp[k] !== undefined ? lp[k] : rp[k]; });
    p.xp = Math.max(lp.xp || 0, rp.xp || 0);
    p.days = {}; [rp.days || {}, lp.days || {}].forEach(function (d) { Object.keys(d).forEach(function (k) { p.days[k] = Math.max(p.days[k] || 0, d[k] || 0); }); });
    p.items = {}; var li = lp.items || {}, ri = rp.items || {};
    Object.keys(ri).concat(Object.keys(li)).forEach(function (k) { p.items[k] = mergeItem(li[k], ri[k]); });
    var notes = {}, ln = L.notes || {}, rn = R.notes || {};
    Object.keys(rn).concat(Object.keys(ln)).forEach(function (k) { var a = ln[k], b = rn[k]; notes[k] = !a ? b : !b ? a : ((a.updated || 0) >= (b.updated || 0) ? a : b); });
    var lpf = L.profile, rpf = R.profile, profile = !lpf ? rpf : !rpf ? lpf : ((lpf.updated || 0) >= (rpf.updated || 0) ? lpf : rpf);
    if (lpf && rpf && lpf.skipped && !lpf.level && rpf.level) profile = rpf;
    var cards = {}, lc = L.cards || {}, rc = R.cards || {};
    Object.keys(rc).concat(Object.keys(lc)).forEach(function (k) { var a = lc[k], b = rc[k]; cards[k] = !a ? b : !b ? a : ((a.updated || 0) >= (b.updated || 0) ? a : b); });
    return { progress: p, notes: notes, profile: profile || null, cards: cards };
  }
  function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

  /* ---------- sync ---------- */
  function setState(s) { state = s; paint(); }
  function syncDown() {
    if (!user) return Promise.resolve();
    setState("syncing");
    return backend.load(user.uid).then(function (remote) {
      var local = readLocal(), merged = merge(local, remote);
      var localChanged = !same(merged.progress, local.progress) || !same(merged.notes, local.notes) || !same(merged.cards, local.cards) || !same(merged.profile, local.profile);
      writeLocal(merged);
      return backend.save(user.uid, merged).then(function () {
        lastSync = Date.now(); setState("in");
        if (localChanged) {
          var flag = "s2-auth-reloaded";
          try { if (!sessionStorage.getItem(flag)) { sessionStorage.setItem(flag, "1"); location.reload(); return; } } catch (e) {}
        }
        try { sessionStorage.removeItem("s2-auth-reloaded"); } catch (e) {}
        var pf = merged.profile;
        if (window.S2Subjects && (!pf || (!pf.level && !pf.skipped))) S2Subjects.pick();
      });
    }).catch(function (e) { console.warn("S2 sync failed", e); setState("error"); });
  }
  function pushSoon() {
    if (!user || applying) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 2500);
  }
  function pushNow() {
    clearTimeout(pushTimer); pushTimer = null;
    if (!user) return Promise.resolve();
    setState("syncing");
    var uid = user.uid;
    return backend.load(uid).then(function (remote) {
      var merged = merge(readLocal(), remote);
      return backend.save(uid, merged);
    }).then(function () { lastSync = Date.now(); setState("in"); }).catch(function (e) { console.warn("S2 sync failed", e); setState("error"); });
  }
  (function watchStorage() {
    var proto = window.Storage && Storage.prototype; if (!proto) return;
    var set = proto.setItem, rem = proto.removeItem;
    proto.setItem = function (k, v) { set.call(this, k, v); if (this === window.localStorage && (k === PROGRESS || k === PROFILE || k === CARDS || String(k).indexOf(NOTE) === 0)) pushSoon(); };
    proto.removeItem = function (k) { rem.call(this, k); if (!applying && this === window.localStorage && String(k).indexOf(NOTE) === 0) pushSoon(); };
  })();
  document.addEventListener("visibilitychange", function () { if (document.hidden && pushTimer) pushNow(); });
  window.addEventListener("pagehide", function () { if (pushTimer) pushNow(); });

  /* ---------- account button ---------- */
  function makeButton() {
    var b = document.createElement("button"); b.type = "button"; b.className = "s2-acct-btn";
    b.onclick = function () { open(); };
    buttons.push(b); paintButton(b); return b;
  }
  function paintButton(b) {
    if (user) { b.classList.remove("out"); b.innerHTML = "<span class='av'>" + avatar(user) + "</span>"; b.title = "Account: " + (user.name || user.email) + (state === "error" ? " (sync problem)" : ""); b.setAttribute("aria-label", "Your account"); }
    else { b.classList.add("out"); b.innerHTML = "<span aria-hidden='true'>👤</span><span class='lbl'>Sign in</span>"; b.title = "Sign in to save your progress across devices"; b.setAttribute("aria-label", "Sign in"); }
  }
  function paint() { buttons.forEach(paintButton); var m = document.querySelector(".s2-auth[data-view='account']"); if (m) renderAccount(m); }
  function attach() {
    var themes = document.querySelectorAll(".s2-theme-btn");
    for (var i = 0; i < themes.length; i++) {
      var t = themes[i];
      if (t.nextElementSibling && t.nextElementSibling.classList.contains("s2-acct-btn")) continue;
      t.insertAdjacentElement("afterend", makeButton());
    }
  }
  function startAttach() {
    attach();
    if (window.MutationObserver) new MutationObserver(function () { attach(); }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) startAttach(); else document.addEventListener("DOMContentLoaded", startAttach);

  /* ---------- modal ---------- */
  var back = null, view = "start", email = "";
  function close() { if (back) { back.remove(); back = null; document.removeEventListener("keydown", onKey); } }
  function onKey(e) { if (e.key === "Escape") close(); }
  function open(v) {
    close();
    back = document.createElement("div"); back.className = "s2-auth-back";
    back.innerHTML = "<div class='s2-auth' role='dialog' aria-modal='true' aria-labelledby='s2-auth-h'></div>";
    back.addEventListener("mousedown", function (e) { if (e.target === back) close(); });
    document.body.appendChild(back); document.addEventListener("keydown", onKey);
    render(v || (user ? "account" : "start"));
  }
  function render(v) {
    view = v; var box = back.querySelector(".s2-auth"); box.setAttribute("data-view", v);
    if (v === "account") return renderAccount(box);
    var x = "<button type='button' class='x' aria-label='Close'>×</button>";
    if (v === "start" && !live) {
      box.innerHTML = x + "<h2 id='s2-auth-h'>Accounts are coming soon</h2><p class='sub'>Soon you'll be able to sign in with Google, Microsoft or email and pick up on any device.</p>" +
        "<div class='sync'>For now, everything you do (your subjects, progress, XP, streak, notes and flashcards) is saved on this device.</div>" +
        (window.S2Subjects ? "<button type='button' class='go' data-subjects>Choose my subjects</button>" : "");
      var sb = box.querySelector("[data-subjects]");
      if (sb) sb.onclick = function () { close(); window.S2Subjects.pick(); };
      box.querySelector(".x").onclick = close;
      return;
    }
    if (v === "start") {
      box.innerHTML = x + "<h2 id='s2-auth-h'>Sign in to S²</h2><p class='sub'>Save your subjects, progress, XP, streak, notes and flashcards, and pick up on any device.</p>" +
        "<button type='button' class='prov' data-p='google'>" + G + "Continue with Google</button>" +
        "<button type='button' class='prov' data-p='microsoft'>" + M + "Continue with Microsoft</button>" +
        "<div class='or'>or</div><button type='button' class='prov' data-v='email-in'>✉️ Continue with email</button>" +
        "<div class='msg' hidden></div>" +
        "<p class='fine'>You don't need an account to use S². Without one, progress is saved on this device only. When you sign in, anything already saved on this device is added to your account. Signing out removes it from this device. See our <a href='" + root() + "privacy.html'>privacy policy</a>.</p>";
    } else if (v === "email-in" || v === "email-up") {
      var up = v === "email-up";
      box.innerHTML = x + "<h2 id='s2-auth-h'>" + (up ? "Create an account" : "Sign in with email") + "</h2><p class='sub'>" + (up ? "It's free. Your progress on this device will be saved to your new account." : "Welcome back.") + "</p>" +
        "<form novalidate>" + (up ? "<label for='s2a-name'>First name</label><input id='s2a-name' autocomplete='given-name' maxlength='40'>" : "") +
        "<label for='s2a-email'>Email</label><input id='s2a-email' type='email' autocomplete='email' value='" + esc(email) + "' required>" +
        "<label for='s2a-pass'>Password</label><input id='s2a-pass' type='password' autocomplete='" + (up ? "new-password" : "current-password") + "' minlength='6' required>" +
        "<button class='go' type='submit'>" + (up ? "Create account" : "Sign in") + "</button></form>" +
        "<div class='msg' hidden></div><div class='links'>" + (up ? "<button type='button' data-v='email-in'>I already have an account</button>" : "<button type='button' data-v='email-up'>Create an account</button><button type='button' data-v='reset'>Forgot password?</button>") +
        "<button type='button' data-v='start'>Other ways to sign in</button></div>";
    } else if (v === "reset") {
      box.innerHTML = x + "<h2 id='s2-auth-h'>Reset your password</h2><p class='sub'>We'll email you a link to choose a new password.</p>" +
        "<form novalidate><label for='s2a-email'>Email</label><input id='s2a-email' type='email' autocomplete='email' value='" + esc(email) + "' required><button class='go' type='submit'>Send reset link</button></form>" +
        "<div class='msg' hidden></div><div class='links'><button type='button' data-v='email-in'>Back to sign in</button></div>";
    }
    wire(box);
    var f = box.querySelector("input,button.prov"); if (f) f.focus();
  }
  function msg(box, text, good) { var m = box.querySelector(".msg"); if (!m) return; m.hidden = !text; m.className = "msg " + (good ? "good" : "bad"); m.textContent = text || ""; }
  function busy(box, on) { [].forEach.call(box.querySelectorAll("button,input"), function (e) { e.disabled = on; }); }
  function wire(box) {
    var x = box.querySelector(".x"); if (x) x.onclick = close;
    [].forEach.call(box.querySelectorAll("[data-v]"), function (b) { b.onclick = function () { var e = box.querySelector("#s2a-email"); if (e) email = e.value; render(b.getAttribute("data-v")); }; });
    [].forEach.call(box.querySelectorAll("[data-p]"), function (b) {
      b.onclick = function () {
        msg(box, ""); busy(box, true);
        ready().then(function () { return backend[b.getAttribute("data-p")](); })
          .then(function () { busy(box, false); }, function (e) { busy(box, false); if (e && /popup-closed|cancelled-popup/.test(e.code || "")) return; msg(box, friendly(e)); });
      };
    });
    var form = box.querySelector("form");
    if (form) form.onsubmit = function (ev) {
      ev.preventDefault(); msg(box, "");
      var em = box.querySelector("#s2a-email").value.trim(), pw = box.querySelector("#s2a-pass"), nm = box.querySelector("#s2a-name"); email = em;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return msg(box, "Enter a valid email address.");
      if (view === "reset") {
        busy(box, true);
        return ready().then(function () { return backend.reset(em); }).then(function () { busy(box, false); msg(box, "Check your inbox for a reset link. It may take a minute, and check spam too.", true); }, function (e) { busy(box, false); msg(box, friendly(e)); });
      }
      if (!pw.value) return msg(box, "Enter your password.");
      if (view === "email-up" && pw.value.length < 6) return msg(box, "Use a password with at least 6 characters.");
      busy(box, true);
      ready().then(function () { return view === "email-up" ? backend.emailUp(em, pw.value, nm ? nm.value.trim() : "") : backend.emailIn(em, pw.value); })
        .then(function () { busy(box, false); }, function (e) { busy(box, false); msg(box, friendly(e)); });
    };
  }
  function renderAccount(box) {
    if (!user) return render("start");
    var s = state === "syncing" ? "🔄 Syncing…" : state === "error" ? "⚠️ Couldn't sync. Your progress is still saved on this device and will sync when you're back online." : "✅ Progress and notes synced · " + ago(lastSync);
    box.innerHTML = "<button type='button' class='x' aria-label='Close'>×</button><h2 id='s2-auth-h'>Your account</h2>" +
      "<div class='who'><div class='av'>" + avatar(user) + "</div><div><b>" + esc(user.name || "S² learner") + "</b><span>" + esc(user.email || "") + "</span></div></div>" +
      "<div class='sync'>" + s + "</div>" +
      "<div class='row'><button type='button' class='ghost' data-a='sync'>Sync now</button><button type='button' class='ghost' data-a='out'>Sign out</button></div>" +
      "<div class='danger'>Want everything gone? <button type='button' data-a='delete'>Delete my account</button></div><div class='msg' hidden></div>";
    box.querySelector(".x").onclick = close;
    box.querySelector("[data-a='sync']").onclick = function () { pushNow(); };
    box.querySelector("[data-a='out']").onclick = function () {
      busy(box, true);
      pushNow().then(function () {
        if (state === "error" && !confirm("We couldn't save your latest progress to your account (are you offline?). Sign out anyway? Unsynced progress will stay on this device.")) { busy(box, false); return; }
        var clear = state !== "error";
        return backend.signOut().then(function () {
          if (clear) clearLocal();
          close(); location.reload();
        });
      }).catch(function (e) { busy(box, false); msg(box, friendly(e)); });
    };
    box.querySelector("[data-a='delete']").onclick = function () {
      if (!confirm("Delete your S² account and the progress and notes saved in it? Progress on this device stays. This can't be undone.")) return;
      busy(box, true);
      backend.deleteAccount(user.uid).then(function () { close(); if (window.S2 && S2.chip) S2.chip("Account deleted"); }, function (e) { busy(box, false); msg(box, friendly(e)); });
    };
  }
  function root() {
    var s = document.querySelector("script[src*='s2-auth.js']");
    return s ? s.getAttribute("src").replace(/shared\/s2-auth\.js.*$/, "") : "";
  }

  /* ---------- backend ---------- */
  var readyP = null;
  function ready() {
    if (readyP) return readyP;
    if (window.S2AuthBackend) { backend = window.S2AuthBackend; readyP = Promise.resolve(); return readyP; }
    if (!cfg.apiKey) return Promise.reject({ code: "auth/operation-not-allowed" });
    readyP = loadFirebase().then(function (b) { backend = b; }, function (e) { readyP = null; throw e; });
    return readyP;
  }
  function loadFirebase() {
    return Promise.all([import(SDK + "firebase-app.js"), import(SDK + "firebase-auth.js"), import(SDK + "firebase-firestore.js")]).then(function (m) {
      var A = m[1], F = m[2], app = m[0].initializeApp(cfg), auth = A.getAuth(app), db = F.getFirestore(app);
      auth.useDeviceLanguage && auth.useDeviceLanguage();
      function pop(provider) {
        return A.signInWithPopup(auth, provider).catch(function (e) {
          if (e && (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment")) return A.signInWithRedirect(auth, provider);
          throw e;
        });
      }
      A.getRedirectResult(auth).catch(function (e) { console.warn(e); });
      return {
        onUser: function (cb) { A.onAuthStateChanged(auth, function (u) { cb(u ? { uid: u.uid, name: u.displayName, email: u.email, photo: u.photoURL } : null); }); },
        google: function () { var p = new A.GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" }); return pop(p); },
        microsoft: function () { var p = new A.OAuthProvider("microsoft.com"); p.setCustomParameters({ prompt: "select_account" }); return pop(p); },
        emailIn: function (e, pw) { return A.signInWithEmailAndPassword(auth, e, pw); },
        emailUp: function (e, pw, name) { return A.createUserWithEmailAndPassword(auth, e, pw).then(function (c) { if (name) return A.updateProfile(c.user, { displayName: name }).then(function () { user = { uid: c.user.uid, name: name, email: c.user.email, photo: null }; paint(); }); }); },
        reset: function (e) { return A.sendPasswordResetEmail(auth, e); },
        signOut: function () { return A.signOut(auth); },
        deleteAccount: function (uid) { return F.deleteDoc(F.doc(db, "users", uid)).then(function () { return A.deleteUser(auth.currentUser); }); },
        load: function (uid) { return F.getDoc(F.doc(db, "users", uid)).then(function (s) { if (!s.exists()) return null; var d = s.data(); try { return JSON.parse(d.data); } catch (e) { return null; } }); },
        save: function (uid, data) { return F.setDoc(F.doc(db, "users", uid), { data: JSON.stringify(data), updated: F.serverTimestamp(), version: 1 }); }
      };
    });
  }

  /* start: restore the signed-in user (only loads Firebase if configured or a test backend exists) */
  if (cfg.apiKey || window.S2AuthBackend) {
    ready().then(function () {
      backend.onUser(function (u) {
        var was = user && user.uid; user = u; paint();
        if (u && u.uid !== was) { if (back) close(); syncDown(); }
        if (!u) setState("out");
      });
    }).catch(function (e) { console.warn("S2 accounts unavailable", e); });
  }
})();
