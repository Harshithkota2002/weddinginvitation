import confetti from "canvas-confetti";

const GOLD = ["#d4af37", "#f0d98c", "#b8860b", "#fff4c2", "#e8b4a0", "#fbe3b3"];

export function burst() {
  const end = Date.now() + 1400;
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.65 },
      colors: GOLD,
      scalar: 1.1,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.65 },
      colors: GOLD,
      scalar: 1.1,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  confetti({
    particleCount: 120,
    spread: 100,
    startVelocity: 42,
    origin: { y: 0.6 },
    colors: GOLD,
    scalar: 1.2,
  });
}

export function heartsPop() {
  confetti({
    particleCount: 40,
    spread: 80,
    origin: { y: 0.6 },
    scalar: 1.6,
    colors: ["#e8b4a0", "#f3b0c3", "#d4af37"],
    shapes: ["circle"],
  });
}
