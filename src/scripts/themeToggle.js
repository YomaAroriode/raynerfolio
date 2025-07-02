import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-controller");
  const currentTheme = localStorage.getItem("theme") || "forest";
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (toggle) toggle.checked = currentTheme === "cupcake";

  toggle?.addEventListener("change", (e) => {
    const target = e.target;
    const newTheme = target.checked ? "cupcake" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 30,
      origin: { y: 0.6 },
    });
  });
});

// on end of scroll
let fired = false;

window.addEventListener("scroll", () => {
  if (fired) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    fired = true;
    confetti({
      particleCount: 150,
      spread: 200,
      startVelocity: 30,
      origin: { y: 0.6 },
    });
  }
});

(function () {
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let position = 0;

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === konamiCode[position]) {
      position++;
      if (position === konamiCode.length) {
        position = 0;
        confetti({
          particleCount: 150,
          spread: 120,
          startVelocity: 40,
          colors: ["#ffd700", "#ffea00", "#fff700"],
          shapes: ["star", "circle"],
        });
      }
    } else {
      position = 0; // Reset if wrong key
    }
  });
})();
