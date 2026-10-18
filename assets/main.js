(function () {
  var header = document.querySelector(".site-header");
  if (header && !header.classList.contains("always-solid")) {
    var onScroll = function () { header.classList.toggle("solid", window.scrollY > 60); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var menu = document.querySelector(".mobile-menu");
  document.querySelectorAll("[data-menu]").forEach(function (btn) {
    btn.addEventListener("click", function () { menu.classList.toggle("open"); });
  });
  if (menu) menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); });
  });

  // Newsletter has no backend yet: show the thank-you state only.
  document.querySelectorAll("form.form").forEach(function (form) {
    form.addEventListener("submit", function (e) { e.preventDefault(); form.classList.add("sent"); });
  });

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
