// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  sections.forEach(section => observer.observe(section));
});
