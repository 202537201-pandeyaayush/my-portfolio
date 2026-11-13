// Aayush Pandey — portfolio interactions
(() => {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  // Keep the active navigation item in sync with the visible section.
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }

  // Add a subtle shadow after scrolling past the hero.
  const updateScrollState = () => {
    document.body.classList.toggle("scrolled", window.scrollY > 40);
  };
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
})();
