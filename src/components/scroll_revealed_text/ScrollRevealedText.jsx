import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealedText = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Get original text
    const text = el.innerText;

    // Clear original text
    el.innerText = "";

    // Split text into spans, preserving spaces
    const letters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char; // preserve space
      el.appendChild(span);
      return span;
    });

    // Detect mobile
    const isMobile = window.innerWidth <= 768;

    // Animate letters on scroll
    gsap.fromTo(
      letters,
      { color: "#474747" },
      {
        color: "#ffffff",
        ease: "none",
        stagger: isMobile ? 0.05 : 0.08, // faster on mobile
        scrollTrigger: {
          trigger: el,
          start: isMobile ? "top 90%" : "top 80%",
          end: isMobile ? "top 40%" : "top 25%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div style={{ color: "#fff" }}>
      <div className="container">
        <div className="scrollRevealed">
          <p ref={textRef}>
            We build cutting-edge AI solutions that help businesses automate
            processes, gain insights, and deliver smarter experiences. Whether
            you're looking to streamline operations, personalize customer
            journeys, or leverage predictive analytics, our AI-powered tools are
            designed to drive growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollRevealedText;
