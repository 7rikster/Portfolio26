"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Loader from "@/components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Lock scroll while loader is active & reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoaderComplete = useCallback(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "";
    setLoaded(true);
  }, []);

  // Shrink hero quickly when user starts scrolling
  useGSAP(() => {
    if (!heroSectionRef.current) return;

    gsap.to(heroSectionRef.current, {
      padding: "28px",
      borderRadius: "1rem",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "+=100",       // completes within 150px of scroll
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />

      {/* Hero Section - black outer, beige inner */}
      <div
        ref={heroSectionRef}
        className="sticky top-0 z-10 w-screen"
        style={{ background: "black", padding: "0px" }}
      >
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-[border-radius] duration-300"
        style={{ background: "#f5f0e8", borderRadius: "inherit" }}
        id="hero_section">
          {/* Subtle decorative elements */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Gradient orbs */}
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(circle, #d4a574, transparent)" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
            style={{ background: "radial-gradient(circle, #a0826d, transparent)" }}
          />

          {/* Hero content */}
          <div
            className="relative z-10 text-center px-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.1s",
            }}
          >
            <p
              className="text-sm tracking-[0.4em] uppercase mb-6"
              style={{ color: "#8a7560" }}
            >
              Welcome to my world
            </p>

            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-8"
              style={{ color: "#1a1410" }}
            >
              <span className="block">Creative</span>
              <span
                className="block font-extralight italic"
                style={{ color: "#6b5a49" }}
              >
                Developer
              </span>
            </h1>

            <p
              className="max-w-md mx-auto text-base md:text-lg leading-relaxed mb-10"
              style={{ color: "#7a6b5e" }}
            >
              Crafting digital experiences with precision, purpose, and a deep
              love for beautiful code.
            </p>

            <div className="flex items-center justify-center gap-6">
              <a
                href="#work"
                className="px-8 py-3 text-sm tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: "#1a1410",
                  color: "#f5f0e8",
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-sm tracking-[0.2em] uppercase rounded-full border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "#1a1410",
                  color: "#1a1410",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
