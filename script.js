// Leeroy Mwangi — Portfolio
// Plain JavaScript, no libraries. Each numbered block does one job.

// Tell the CSS that JavaScript is running (used by the scroll-reveal styles)
document.documentElement.classList.add("js");

// ---------- Grab the page elements we need ----------
const header = document.querySelector(".site-header");
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const profileImage = document.querySelector("#profile-image");

// ---------- 1. Mobile navigation menu ----------
function closeMenu() {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle.addEventListener("click", toggleMenu);

// Close the menu after tapping a link
navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Close the menu with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
    closeMenu();
    navToggle.focus();
  }
});

// ---------- 2. Header style changes after scrolling ----------
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// ---------- 3. Scroll reveal animation ----------
// IntersectionObserver tells us when an element enters the screen.
const revealObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(function (item) {
  revealObserver.observe(item);
});

// ---------- 4. Highlight the nav link of the section you're viewing ----------
const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", isCurrent);
        });
      }
    });
  },
  // Only a thin band near the middle of the screen counts as "current"
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

// ---------- 5. Show the "LM" placeholder if profile.jpg is missing ----------
function hideBrokenProfileImage() {
  profileImage.classList.add("is-missing");
}

profileImage.addEventListener("error", hideBrokenProfileImage);

// The image may have already failed before this script ran, so check too
if (profileImage.complete && profileImage.naturalWidth === 0) {
  hideBrokenProfileImage();
}