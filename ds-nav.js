/* Menandai nomor soal yang sedang dibaca pada baris nomor yang menempel di atas. */
(function () {
  var nav = document.querySelector("nav.nomor, nav#nav");
  if (!nav || !("IntersectionObserver" in window)) return;
  function init() {
    var map = new Map();
    nav.querySelectorAll("a[href^='#']").forEach(function (a) {
      var t = document.getElementById(a.hash.slice(1));
      if (t) map.set(t, a);
    });
    if (!map.size) return;
    var cur = null;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var a = map.get(e.target);
        if (cur === a) return;
        if (cur) cur.removeAttribute("aria-current");
        a.setAttribute("aria-current", "true"); cur = a;
        var l = a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2;
        nav.scrollTo({ left: l, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    }, { rootMargin: "-18% 0px -72% 0px" });
    map.forEach(function (_, t) { io.observe(t); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
