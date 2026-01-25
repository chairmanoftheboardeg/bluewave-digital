(function () {
  // Mobile menu
  const burger = document.querySelector("[data-burger]");
  const mobile = document.querySelector("[data-mobile]");
  if (burger && mobile) {
    burger.addEventListener("click", () => {
      const open = mobile.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Close mobile on link click
  document.querySelectorAll("[data-mobile] a").forEach(a => {
    a.addEventListener("click", () => {
      const mobile = document.querySelector("[data-mobile]");
      const burger = document.querySelector("[data-burger]");
      if (mobile) mobile.classList.remove("open");
      if (burger) burger.setAttribute("aria-expanded", "false");
    });
  });

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));

  // Active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav] a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Year
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
