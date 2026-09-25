// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Nav: solid on scroll + mobile menu =====
const nav = document.querySelector(".nav");
const menu = document.getElementById("navMenu");
document.getElementById("menuToggle").addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 12));

// ===== Active link highlight =====
const links = menu.querySelectorAll("a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== Animated tech network background =====
const canvas = document.getElementById("network-bg");
const ctx = canvas.getContext("2d");
let nodes = [];
const mouse = { x: null, y: null };

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 16000));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
  }));
}
window.addEventListener("resize", resize);
window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener("mouseleave", () => { mouse.x = mouse.y = null; });
resize();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.beginPath(); ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2); ctx.fill();

    for (let j = i + 1; j < nodes.length; j++) {
      const m = nodes[j];
      const d = Math.hypot(n.x - m.x, n.y - m.y);
      if (d < 130) {
        ctx.strokeStyle = `rgba(255,255,255,${0.18 * (1 - d / 130)})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
      }
    }
    if (mouse.x !== null) {
      const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      if (d < 170) {
        ctx.strokeStyle = `rgba(255,255,255,${0.35 * (1 - d / 170)})`;
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) draw();
