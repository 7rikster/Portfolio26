"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Phase 1: Fade in the text content (panel is already full-screen black)
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );

      // Phase 2: Morph into the rounded rectangle (shrink inward to reveal beige edges)
      tl.to(
        innerRef.current,
        {
          margin: "16px",
          borderRadius: "2rem",
          duration: 0.6,
          ease: "power3.inOut",
        },
        "+=0.15"
      );

      // Phase 3: Animate progress bar from 0% to 100%
      tl.to(
        progressBarRef.current,
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
          onUpdate: function () {
            if (percentRef.current) {
              const progress = Math.round(this.progress() * 100);
              percentRef.current.textContent = `${progress}`;
            }
          },
        },
        "+=0.1"
      );

      // Phase 4: Brief hold
      tl.to({}, { duration: 0.3 });

      // Phase 5: Morph back to full-screen (remove margin + radius) before sliding up
      tl.to(innerRef.current, {
        margin: "0px",
        borderRadius: "0rem",
        duration: 0.35,
        ease: "power2.inOut",
      });

      // Phase 6: Slide the entire loader up
      tl.to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          setIsComplete(true);
          onComplete?.();
        },
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999]"
      style={{ background: "#0a0a0a" }}
    >
      <div
        ref={innerRef}
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          background: "#0a0a0a",
          borderRadius: "0rem",
          margin: "0px",
          overflow: "hidden",
        }}
      >
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Centered content */}
        <div
          ref={contentRef}
          className="relative z-10 flex flex-col items-center gap-8"
          style={{ opacity: 0 }}
        >
          {/* Name / Logo */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-7xl font-light tracking-[0.3em] text-white/90 uppercase"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Priyanshu
            </h1>
          </div>

          {/* Progress section */}
          <div className="w-64 md:w-80 flex flex-col items-center gap-3">
            {/* Progress bar track */}
            <div className="w-full h-[40px] bg-white/5 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full"
                style={{
                  width: "0%",
                  background:
                    "white",
                }}
              />
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}
