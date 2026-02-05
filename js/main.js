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

// ================= Scroll Reveal Enhancements =================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger effect
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 120);

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ================= TRUE 3D Image Spin on Click =================
const clickableImages = document.querySelectorAll(".image-frame img");

clickableImages.forEach((img) => {
  img.addEventListener("click", () => {
    img.animate(
      [
        { transform: "rotateY(0deg)" },
        { transform: "rotateY(360deg)" }
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        iterations: 1
      }
    );
  });
});
// ================= Mobile Nav Toggle =================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


