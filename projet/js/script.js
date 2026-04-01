// Animation apparition douce
const elements = document.querySelectorAll(".card, .stat-box");

elements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
