"use client";
import { useEffect } from "react";
import "./parallax.css"; // Assuming your CSS is in src/app for simplicity

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const layers = document.querySelectorAll(".parallax-layer");
      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const yPos = window.scrollY * speed;
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section className="parallax-layer" data-speed="0.1" id="layer1">
        Layer 1 Content
      </section>
      <section className="parallax-layer" data-speed="0.3" id="layer2">
        Layer 2 Content
      </section>
      <section className="parallax-layer" data-speed="0.5" id="layer3">
        Layer 3 Content
      </section>
    </main>
  );
}
