"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { techStackCategories } from "@/data/techStackData";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
            },
        });

        tl.from(headerRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
        });

        rowRefs.current.forEach((row) => {
            if (row) {
                tl.from(
                    row,
                    {
                        opacity: 0,
                        y: 25,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.35"
                );
            }
        });
    }, { scope: sectionRef });

    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            ref={sectionRef}
        >
            {/* Header */}
            <div
                className="flex flex-col items-center justify-center mb-12"
                ref={headerRef}
            >
                <h1
                    className="text-sm tracking-[0.3em] uppercase flex items-center gap-3"
                    style={{ color: "#aaa" }}
                >
                    - TECH STACK
                </h1>
                <h1 className="text-2xl md:text-4xl font-semibold tracking-tight p-2 md:p-4">
                    Tools I Work With
                </h1>
            </div>

            {/* Category Rows */}
            <div className="w-full max-w-7xl px-4">
                {techStackCategories.map((category, index) => (
                    <div
                        key={category.id}
                        ref={(el) => { rowRefs.current[index] = el; }}
                        className="flex flex-col md:flex-row md:items-center border-t border-white/10 py-8 gap-4 md:gap-8"
                    >
                        {/* Category Name — Left Column */}
                        <div className="md:w-1/4 shrink-0">
                            <h2 className="text-xs tracking-[0.25em] uppercase text-[#888] font-medium">
                                {category.name}
                            </h2>
                        </div>

                        {/* Tech Cards — Right Column */}
                        <div className="md:w-3/4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                            {category.techs.map((tech) => (
                                <div
                                    key={tech.id}
                                    className="group relative py-5 px-4 flex flex-col items-center justify-center min-w-[90px] rounded-lg border border-white/[0.06] bg-white/[0.08] cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.07)]"
                                >
                                    <i
                                        className={`${tech.icon} colored text-2xl sm:text-3xl md:text-4xl transition-all duration-300`}
                                    />
                                    <span className="mt-2 text-[10px] sm:text-xs text-[#888] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 group-hover:text-[#ddd]">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}