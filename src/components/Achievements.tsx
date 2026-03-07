"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { achievements } from "@/data/achievementData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP tween ref for smooth position animation
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  // Proxy object for GSAP to animate — avoids direct DOM reads
  const posProxy = useRef({ y: 0 });

  // Track if mouse is actually moving (vs scroll changing what's under cursor)
  const isMouseMoving = useRef(false);
  const mouseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync the proxy value to the DOM on every GSAP tick
  useEffect(() => {
    const onTick = () => {
      if (imageRef.current) {
        imageRef.current.style.top = `${posProxy.current.y}px`;
      }
    };
    gsap.ticker.add(onTick);
    return () => gsap.ticker.remove(onTick);
  }, []);

  // Clear hover when the section scrolls out of view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setHoveredIndex(null);
        }
      },
      { threshold: 0.05 }   // triggers when <5% of section is visible
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate position toward cursor with smooth deceleration
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Kill any in-progress tween and start a fresh one toward the new Y
    if (tweenRef.current) tweenRef.current.kill();

    tweenRef.current = gsap.to(posProxy.current, {
      y: e.clientY,
      duration: 0.8,
      ease: "power3.out",    // fast start → gentle deceleration → smooth stop
      overwrite: true,
    });

    // Mark that the mouse is actively moving
    isMouseMoving.current = true;
    if (mouseTimeout.current) clearTimeout(mouseTimeout.current);
    mouseTimeout.current = setTimeout(() => {
      isMouseMoving.current = false;
    }, 100);
  }, []);

  // Hover handlers — only react if mouse is actually moving
  const handleMouseEnter = useCallback((index: number) => {
    // Always allow first hover (when isMouseMoving might not be set yet)
    // or when cursor is genuinely moving
    if (isMouseMoving.current || hoveredIndex === null) {
      setHoveredIndex(index);
    }
  }, [hoveredIndex]);

  const handleMouseLeave = useCallback(() => {
    if (isMouseMoving.current) {
      setHoveredIndex(null);
    }
  }, []);

  // GSAP entrance animations
  useGSAP(() => {
    if (!sectionRef.current) return;

    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      gsap.from(row, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  const isHovering = hoveredIndex !== null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 px-6 md:px-16 lg:px-24"
      style={{ background: "#030303" }}
      id="achievements"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Section Header */}
      <div ref={headerRef} className="mb-16 flex  flex-col items-center justify-center">
        <h1 className="text-sm tracking-[0.3em] uppercase flex items-center gap-3" style={{ color: "#aaa"}}>- ACHIEVEMENTS</h1>
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight p-2 md:p-4 mb-6">My Coding Achievements</h1>
      </div>

      {/* Achievement list — always full width */}
      <div className="relative">
        <div className="w-full">
          {achievements.map((achievement, index) => {
            const isCurrent = hoveredIndex === index;
            const rowOpacity = isHovering
              ? isCurrent
                ? 1
                : 0.25
              : 1;

            return (
              <div
                key={achievement.id}
                ref={(el) => { rowRefs.current[index] = el; }}
                className="group cursor-pointer"
                style={{
                  opacity: rowOpacity,
                  transition: "opacity 0.4s ease",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Top separator line */}
                <div
                  className="w-full h-px"
                  style={{
                    background: isHovering && isCurrent
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(255,255,255,0.08)",
                    transition: "background 0.4s ease",
                  }}
                />

                <div className="flex items-baseline gap-4 md:gap-8 py-6 md:py-8">
                  <span
                    className="text-xs md:text-sm font-mono shrink-0"
                    style={{ color: "#555", minWidth: "2rem" }}
                  >
                    _{String(index + 1).padStart(2, "0")}.
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="achievement-title text-3xl md:text-5xl lg:text-7xl leading-none mb-2 transition-colors duration-300 flex items-center gap-2"
                      style={{
                        color: isCurrent ? "#e5e5e5" : "#e5e5e5",
                      }}
                    >
                      {achievement.title}
                      {isCurrent && (
                        <span
                          className="inline-block ml-3 text-2xl align-middle"
                          style={{
                            opacity: 0,
                            animation: "fadeSlideIn 0.3s ease forwards",
                          }}
                        >
                          <ExternalLink />
                        </span>
                      )}
                    </h3>
                    <p
                      className="text-xs md:text-sm max-w-xl leading-relaxed"
                      style={{ color: "#666" }}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Bottom separator for last item */}
                {index === achievements.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate preview — spring-animated floating panel */}
      <div
        ref={imageRef}
        className="hidden md:block pointer-events-none"
        style={{
          position: "fixed",
          top: 0,
          right: "4%",
          transform: isHovering
            ? "translateY(-50%) translateX(0) scale(1)"
            : "translateY(-50%) translateX(60px) scale(0.95)",
          width: "35vw",
          maxWidth: "450px",
          opacity: isHovering ? 1 : 0,
          transition:
            "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 50,
        }}
      >
        {hoveredIndex !== null && (
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={achievements[hoveredIndex].imageUrl}
              alt={`${achievements[hoveredIndex].title} certificate`}
              className="w-full h-auto object-cover"
              style={{ display: "block" }}
            />

            {/* Subtle overlay gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
