"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Loader from "@/components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onLoaderComplete?: () => void;
  skipLoader?: boolean;
}

export default function Hero({ onLoaderComplete, skipLoader = false }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // If skipLoader, immediately mark as loaded and skip all loader logic
  useEffect(() => {
    if (skipLoader) {
      setLoaded(true);
      onLoaderComplete?.();
    }
  }, [skipLoader, onLoaderComplete]);

  // Lock scroll while loader is active & reset scroll position on mount
  useEffect(() => {
    if (skipLoader) return;

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [skipLoader]);

  const handleLoaderComplete = useCallback(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "";
    setLoaded(true);
    onLoaderComplete?.();
  }, [onLoaderComplete]);

  // Shrink hero quickly when user starts scrolling
  useGSAP(() => {
    if (!heroSectionRef.current) return;

    gsap.to(heroSectionRef.current, {
      padding: "36px",
      borderRadius: "1rem",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "+=100",
        scrub: 0.3,
      },
    });
  }, []);

  // Staggered entrance animations for hero content
  useGSAP(() => {
    if (!loaded || !contentRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Greeting line
    tl.fromTo(
      contentRef.current.querySelector(".hero-greeting"),
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7 },
      0.1
    );

    // Name line 1
    tl.fromTo(
      contentRef.current.querySelector(".hero-name-1"),
      { opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.9 },
      0.25
    );

    // Name line 2
    tl.fromTo(
      contentRef.current.querySelector(".hero-name-2"),
      { opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.9 },
      0.4
    );

    // Role tags
    tl.fromTo(
      contentRef.current.querySelectorAll(".hero-role"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 },
      0.7
    );

    // Intro text
    tl.fromTo(
      contentRef.current.querySelector(".hero-intro"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.85
    );

    // CTA buttons
    tl.fromTo(
      contentRef.current.querySelectorAll(".hero-cta"),
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
      1.0
    );

    // Social icons
    tl.fromTo(
      contentRef.current.querySelectorAll(".hero-social"),
      { opacity: 0, y: 15, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.06 },
      1.15
    );

    // Photo
    tl.fromTo(
      contentRef.current.querySelector(".hero-photo"),
      { opacity: 0, scale: 0.9, x: 40 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power2.out" },
      0.3
    );

    // Photo frame
    tl.fromTo(
      contentRef.current.querySelector(".hero-photo-frame"),
      { opacity: 0, scale: 0.9, x: 40 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power2.out" },
      0.45
    );
  }, [loaded]);

  return (
    <>
      {!skipLoader && <Loader onComplete={handleLoaderComplete} />}

      {/* Hero Section - black outer, beige inner */}
      <div
        ref={heroSectionRef}
        className="sticky top-0 z-10 w-screen"
        style={{ background: "black", padding: "0px" }}
      >
        <div
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-[border-radius] duration-300"
          style={{ background: "#f5f0e8", borderRadius: "inherit" }}
          id="hero_section"
        >
          {/* Subtle noise texture */}
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

          {/* Hero content — two columns */}
          <div
            ref={contentRef}
            className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 "
          >
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
              {/* ─── Left Column: Content ─── */}
              <div className="flex-1 text-center lg:text-left">
                {/* Greeting */}
                <p
                  className="hero-greeting text-xs sm:text-sm tracking-[0.35em] uppercase mb-2 opacity-0"
                  style={{ color: "#8a7560" }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-6 h-px" style={{ background: "#b5a48e" }} />
                    Welcome to my world
                  </span>
                </p>

                {/* Name with gradient */}
                <h1 className="mb-4 leading-[0.95]">
                  <span
                    className="hero-name-1 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold uppercase tracking-tight opacity-0"
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      background: "linear-gradient(135deg, #1a1410 0%, #3d2b1f 40%, #6b4c3b 70%, #8a6d5a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    I&apos;m Priyanshu
                  </span>
                  <span
                    className="hero-name-2 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold uppercase tracking-tight opacity-0"
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      background: "linear-gradient(135deg, #8a6d5a 0%, #6b4c3b 20%, #3d2b1f 45%, #1a1410 80%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Kashyap
                  </span>
                </h1>

                {/* Role tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6 justify-center lg:justify-start">
                  {["Full-Stack Developer", "Competitive Programmer", "Builder"].map(
                    (role, i) => (
                      <span key={role} className="hero-role flex items-center gap-2 opacity-0">
                        {i > 0 && (
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ background: "#b5a48e" }}
                          />
                        )}
                        <span
                          className="text-xs sm:text-sm tracking-wide"
                          style={{ color: "#8a7560" }}
                        >
                          {role}
                        </span>
                      </span>
                    )
                  )}
                </div>

                {/* Brief intro */}
                <p
                  className="hero-intro max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed mb-8 opacity-0 italic"
                  style={{ color: "#7a6b5e" }}
                >
                  I craft performant web applications, solve algorithmic challenges,
                  and build products that people actually use.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-8">
                  <div className="hero-cta opacity-0">
                    <a
                      href="https://drive.google.com/file/d/13tJvSFVl-PR7gTXxAqjuaXScJB7v19sM/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
                      style={{ background: "#1a1410", color: "#f5f0e8" }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      Resume
                    </a>
                  </div>
                  <div className="hero-cta opacity-0">
                    <a
                      href="/projects"
                      className="flex gap-2 flex-row items-center px-7 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase rounded-lg border transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "#1a1410", color: "#1a1410" }}
                    >
                      View Work
                      <MoveRight className="w-4 h-4"/>
                    </a>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  {[
                    { href: "https://github.com/7rikster", label: "GitHub", d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", d2: "M9 18c-4.51 2-5-2-7-2" },
                    { href: "https://linkedin.com/in/priyanshu-kashyap-8196a928a", label: "LinkedIn", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", rect: true },
                    { href: "https://codeforces.com/profile/7rikster", label: "Codeforces", poly: true },
                    { href: "mailto:ribupkashyap@gmail.com", label: "Email", mail: true },
                  ].map((social) => (
                    <div key={social.label} className="hero-social opacity-0">
                      <a
                        href={social.href}
                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ color: "#8a7560", border: "1px solid rgba(26, 20, 16, 0.12)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#1a1410"; e.currentTarget.style.borderColor = "rgba(26, 20, 16, 0.35)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#8a7560"; e.currentTarget.style.borderColor = "rgba(26, 20, 16, 0.12)"; }}
                      >
                      {social.mail ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      ) : social.poly ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                      ) : social.rect ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={social.d}/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={social.d}/>{social.d2 && <path d={social.d2}/>}</svg>
                      )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─── Right Column: Photo ─── */}
              <div className="flex-shrink-0 w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-[22rem] lg:h-[28rem] relative">
                {/* Decorative frame offset */}
                <div
                  className="hero-photo-frame absolute inset-0 rounded-2xl translate-x-3 translate-y-3 opacity-0"
                  style={{ border: "1.5px solid rgba(26, 20, 16, 0.12)" }}
                />
                {/* Photo container */}
                <div
                  className="hero-photo relative w-full h-full rounded-2xl overflow-hidden opacity-0"
                  style={{ background: "rgba(26, 20, 16, 0.06)" }}
                >
                  {/* Replace with: <Image src="/photo.jpg" alt="Priyanshu Kashyap" fill className="object-cover" /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-6xl sm:text-7xl font-bold opacity-[0.08]"
                      style={{ fontFamily: "var(--font-oswald), sans-serif", color: "#1a1410" }}
                    >
                      PK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
