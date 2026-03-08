"use client";

import { useEffect, useRef } from "react";

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Create Floating Petals ──
    const petals = ["🌸", "🌺", "🌷", "💮", "🏵️", "🌹"];
    const petalCount = 25;

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.textContent = petals[Math.floor(Math.random() * petals.length)];
      petal.style.cssText = `
        position: fixed;
        top: -5vh;
        left: ${Math.random() * 100}vw;
        font-size: ${14 + Math.random() * 20}px;
        opacity: ${0.3 + Math.random() * 0.5};
        pointer-events: none;
        z-index: 1000;
        animation: floatPetal ${8 + Math.random() * 12}s linear infinite;
        animation-delay: ${Math.random() * 15}s;
      `;
      container.appendChild(petal);
    }

    // ── Create Sparkles ──
    const sparkleCount = 30;
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement("div");
      sparkle.textContent = "✨";
      sparkle.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        font-size: ${8 + Math.random() * 14}px;
        pointer-events: none;
        z-index: 999;
        animation: twinkle ${2 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      container.appendChild(sparkle);
    }

    // ── Create Floating Hearts ──
    const createHeart = () => {
      if (!container) return;
      const heart = document.createElement("div");
      heart.textContent = Math.random() > 0.5 ? "❤️" : "💕";
      heart.style.cssText = `
        position: fixed;
        bottom: -20px;
        left: ${Math.random() * 100}vw;
        font-size: ${16 + Math.random() * 24}px;
        pointer-events: none;
        z-index: 998;
        animation: floatHeart ${4 + Math.random() * 4}s ease-out forwards;
      `;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 8000);
    };

    const heartInterval = setInterval(createHeart, 2000);

    return () => {
      clearInterval(heartInterval);
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="floating-elements" aria-hidden="true" />;
}
