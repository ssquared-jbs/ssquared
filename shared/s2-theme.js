/* S² theme: sets light/dark before the page draws. Saved choice wins; otherwise follows the device. */
(function () {
  var t = null;
  try { t = localStorage.getItem("s2-theme"); } catch (e) {}
  if (t !== "light" && t !== "dark") t = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
})();
