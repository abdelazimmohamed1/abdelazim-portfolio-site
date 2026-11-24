const nav = document.getElementById("nav"),
  menu = document.getElementById("menu"),
  links = document.getElementById("links");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 30);
  let c = "home";
  document.querySelectorAll("section[id]").forEach((s) => {
    if (scrollY >= s.offsetTop - 180) c = s.id;
  });
  document
    .querySelectorAll(".links a")
    .forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + c),
    );
});
menu.onclick = () => links.classList.toggle("open");
document
  .querySelectorAll(".links a")
  .forEach((a) => (a.onclick = () => links.classList.remove("open")));
const ob = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        ob.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((e) => ob.observe(e));
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- خلفية الهيرو المتحركة ----------
   بنضيف لمعان + 3 طبقات ضباب زيادة + 80 نقطة منورة (أغلبها بيضا)، لكل واحدة مكان وحجم وسرعة عشوائية.
   CSS هو اللي بيحركهم (drift و float-up). لو المستخدم طالب حركة أقل مش بنعمل حاجة. */
const heroBg = document.getElementById("heroBg");
if (heroBg) {
  ["sheen sheen-1", "sheen sheen-2", "floor"].forEach((cls) => {
    const el = document.createElement("span");
    el.className = cls;
    heroBg.appendChild(el);
  });
  for (let n = 3; n <= 5; n++) {
    const fog = document.createElement("span");
    fog.className = "fog fog-" + n;
    heroBg.appendChild(fog);
  }
  for (let i = 0; i < 12; i++) {
    const smoke = document.createElement("span");
    smoke.className = "smoke";
    smoke.style.setProperty("--x", 4 + Math.random() * 92 + "%");
    smoke.style.setProperty("--w", 260 + Math.random() * 260 + "px");
    smoke.style.setProperty("--d", 9 + Math.random() * 7 + "s");
    smoke.style.setProperty("--dl", -Math.random() * 14 + "s");
    smoke.style.setProperty("--dr", (Math.random() - 0.5) * 240 + "px");
    heroBg.appendChild(smoke);
  }
  for (let i = 0; i < 80; i++) {
    const dot = document.createElement("i");
    dot.style.left = Math.random() * 100 + "%";
    dot.style.setProperty("--size", 3 + Math.random() * 4 + "px");
    dot.style.setProperty("--dur", 6 + Math.random() * 8 + "s");
    dot.style.setProperty("--delay", -Math.random() * 14 + "s");
    dot.style.setProperty("--sx", (Math.random() - 0.5) * 120 + "px");
    heroBg.appendChild(dot);
  }
}
