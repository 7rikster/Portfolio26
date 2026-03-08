"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
    showViewMore: Boolean;  
}

export default function Projects({ showViewMore }: ProjectCardProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isHovering = hoveredIndex !== null;

    return (
        <section className="w-full py-24 px-6 md:px-16 lg:px-24" style={{ background: "#030303" }}>
            {/* Header */}
            <motion.div
                className="flex flex-col items-center justify-center mb-12 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="text-sm tracking-[0.3em] uppercase flex items-center gap-3" style={{ color: "#aaa"}}>- SELECTED WORKS</h1>
                <h1 className="text-2xl md:text-4xl font-semibold tracking-tight p-2 md:p-4 mb-6">Featured Projects</h1>
            </motion.div>

            {/* Project Cards */}
            <div className="max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    project.featured && (
                        <div
                            key={project.id}
                            style={{
                                opacity: isHovering ? (hoveredIndex === index ? 1 : 0.25) : 1,
                                transition: "opacity 0.4s ease",
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: index * 0.05,
                                }}
                            >
                                <Link href={`/projects/${project.slug}`}>
                                    <div className="group cursor-pointer border-t border-white/[0.08] py-10 md:py-12 transition-colors duration-300 hover:bg-white/[0.02] sm:px-4 md:px-6">
                                        {/* Title row */}
                                        <div className="flex items-start justify-between gap-4 mb-1">
                                            <h3 className="text-xl md:text-2xl font-semibold text-[#e5e5e5] group-hover:text-white transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <MoveRight
                                                className="shrink-0 mt-1 text-[#555] group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                                                size={22}
                                            />
                                        </div>

                                        {/* Year */}
                                        <p className="text-sm text-[#666] mb-4">
                                            {project.year}
                                        </p>

                                        {/* Description */}
                                        <p className="text-sm md:text-base text-[#999] leading-relaxed max-w-4xl mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tech stack tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs rounded-full border border-white/[0.1] text-[#888] bg-white/[0.03]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    )
                ))}

                {/* Bottom border for last item */}
                <div className="border-t border-white/[0.08]" />

                {/* View All Projects button */}
                {
                    showViewMore && (
                        <motion.div className="flex justify-center mt-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Link href="/projects">
                                <Button
                                    variant="outline"
                                    className="cursor-pointer flex items-center justify-center gap-2"
                                >
                                    View All Projects <MoveRight size={16} />
                                </Button>
                            </Link>
                        </motion.div>
                    )
                }
            </div>
        </section>
    );
}

