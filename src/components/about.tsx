"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
    showMoreButton: boolean;
}

export default function About({ showMoreButton }: AboutProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const paraRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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

        if (paraRef.current) {
            gsap.from(paraRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }
    }, { scope: sectionRef });

    return (
        <div className="flex flex-col items-center justify-center py-20" ref={sectionRef}>
            <div className="flex flex-col items-center justify-center" ref={headerRef}>
                <h1 className="text-sm tracking-[0.3em] uppercase flex items-center gap-3" style={{ color: "#aaa"}}>- A LITTLE ABOUT ME</h1>
                <h1 className="text-2xl md:text-4xl font-semibold tracking-tight p-2 md:p-4 mb-6">Building efficient solutions with code</h1>
            </div>
            <div className="w-full max-w-3xl text-center flex flex-col gap-3 text-[#aaa]" ref={paraRef}>
                <p>I'm a third year Computer Science Engineering student at NIT Silchar and a passionate developer who enjoys solving complex problems and building meaningful digital experiences.</p>
                <p>My primary interests lie in competitive programming, algorithms, and software development. I enjoy breaking down complex problems and designing efficient solutions using strong foundations in data structures and algorithms. Alongside problem solving, I love building modern and interactive web applications, focusing on clean design, performance, and scalability.</p>
                <p>I'm constantly exploring new technologies, improving my coding skills, and working on projects that push me to grow as a developer.</p>
            </div>
            {showMoreButton && (
                <Link href="/about">
                    <Button variant="outline" className="mt-8 cursor-pointer flex items-center justify-center gap-2">
                        Learn More <MoveRight />
                    </Button>
                </Link>
            )}
        </div>
    )
}   