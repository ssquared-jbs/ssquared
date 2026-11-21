/* S² maths typesetting: renders \( … \) and \[ … \] with KaTeX wherever content appears on the page. */
(function () {
  var OPTS = {
    delimiters: [{ left: "\\[", right: "\\]", display: true }, { left: "\\(", right: "\\)", display: false }],
    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option", "input"],
    ignoredClasses: ["nb-page", "no-math"],
    throwOnError: false
  };
  var queue = [], waiting = false;
  function has(s) { return s && (s.indexOf("\\(") > -1 || s.indexOf("\\[") > -1); }
  function flush() {
    waiting = false;
    if (!window.renderMathInElement) { setTimeout(flush, 50); waiting = true; return; }
    var q = queue; queue = [];
    q.forEach(function (n) { if (n.isConnected && has(n.textContent)) { try { window.renderMathInElement(n, OPTS); } catch (e) { } } });
  }
  function add(n) {
    if (!n) return;
    if (n.nodeType === 3) n = n.parentNode;
    if (!n || n.nodeType !== 1 || n.closest && n.closest(".nb-page, .katex")) return;
    if (!has(n.textContent)) return;
    queue.push(n);
    if (!waiting) { waiting = true; (window.requestAnimationFrame || setTimeout)(flush); }
  }
  function start() {
    add(document.body);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === "characterData") add(m.target);
        else [].forEach.call(m.addedNodes, add);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
  /* Plain-text version of a maths string, e.g. for speech or titles. */
  window.S2Math = {
    plain: function (s) {
      return String(s).replace(/\\[()[\]]/g, "").replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)").replace(/\\sqrt\{([^{}]*)\}/g, "√($1)")
        .replace(/\\(times)/g, "×").replace(/\\(div)/g, "÷").replace(/\\(pi)/g, "π").replace(/\\(theta)/g, "θ").replace(/\\(le|leq)/g, "≤").replace(/\\(ge|geq)/g, "≥")
        .replace(/\\(left|right|,|;|!|quad)/g, " ").replace(/\\([a-zA-Z]+)/g, "$1").replace(/[{}]/g, "").replace(/\^/g, "^").replace(/\s+/g, " ").trim();
    }
  };
})();
