"use client";

import { useScroll, useSpring, motion, type Variants } from "framer-motion";
import Link from "@/components/Link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  year: number;
  tagline: string;
  description: string;
  role: string;
  duration?: string;
  featured: boolean;
  techStack: string[];
  links: { github?: string; live?: string };
  heroImage: string;
  images: string[];
  highlights?: string[];
  overview: { problem: string; solution: string; impact: string[] };
  architecture: { title: string; description: string }[];
  features: { title: string; description: string }[];
  engineering: { title: string; description: string }[];
  learnings: string[];
  challenges: string[];
}

interface ProjectDetailProps {
  project: Project;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};



export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="relative pt-18 sm:pt-24 md:pt-28 pb-20">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-50"
      />
      {/* ─── Back Navigation ─── */}
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-6 md:mb-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#e5e5e5] transition-colors duration-300 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to Projects
        </Link>
      </motion.div>

      {/* ─── Hero Section ─── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-8 md:mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Year & Role */}
          <motion.div
            className="flex items-center justify-between gap-4 mb-6"
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-4">
                <span className="text-sm tracking-[0.3em] uppercase text-[#666]">
                {project.year}
                </span>
                <span className="w-8 h-px bg-[#333]" />
                <span className="text-sm text-[#888]">{project.role}</span>
                <span className="w-8 h-px bg-[#333]" />
                {
                  project.duration && (
                    <span className="text-sm text-[#888]">{project.duration}</span>
                  )
                }
            </div>
            <div className="flex items-center gap-4 hidden md:flex">
                {project.links.live && (
                    <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-[1rem] text-white/70 hover:text-white hover:scale-105 transition-all duration-300 py-3 px-5 rounded-lg border border-white/40 hover:border-white"
                    >
                    <ExternalLink size={16} />
                    Live Demo
                    </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-[1rem] text-black hover:scale-105 transition-all duration-300 bg-white py-3 px-5 rounded-lg"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#e5e5e5] leading-[1.1] mb-6 max-w-4xl"
            variants={fadeUp}
            custom={1}
          >
            {project.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-md md:text-xl text-[#999] leading-relaxed max-w-3xl mb-8"
            variants={fadeUp}
            custom={2}
          >
            {project.tagline}
          </motion.p>

          {/* Tech Stack & Links row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-0"
            variants={fadeUp}
            custom={3}
          >
            {/* Tech Stack Pills */}
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
          </motion.div>
          <motion.div
            className="mt-4 md:hidden w-full flex justify-center sm:justify-end"
            variants={fadeUp}
            custom={3}
          >
            {/* Links */}
            <div className="flex items-center gap-4 md:hidden">
                {project.links.live && (
                    <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg border border-white/40 hover:border-white"
                    >
                    <ExternalLink size={16} />
                    Live Demo
                    </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm  text-black hover:scale-105 transition-all duration-300 bg-white py-2 px-3 rounded-lg"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Hero Image ─── */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.section>
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />

      {/* ─── Overview: Problem → Solution → Impact ─── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
        <SectionLabel label="Overview" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "The Problem", content: project.overview.problem, num: "01" },
            { label: "The Solution", content: project.overview.solution, num: "02" },
            {
              label: "The Impact",
              content: project.overview.impact,
              num: "03",
              isList: true,
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              <span className="text-xs text-[#555] font-mono mb-3 block">
                {item.num}
              </span>
              <h3 className="text-lg font-semibold text-[#e5e5e5] mb-3">
                {item.label}
              </h3>
              {item.isList ? (
                <ul className="space-y-2">
                  {(item.content as string[]).map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-[#999] leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#555] mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[#999] leading-relaxed">
                  {item.content as string}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Highlights ─── */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
          <SectionLabel label="Key Highlights" />
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0"
                variants={fadeUp}
                custom={i}
              >
                <span className="text-xs font-mono text-[#555] shrink-0 pt-0.5 w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm md:text-base text-[#bbb] leading-relaxed">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* ─── Architecture ─── */}
      {project.architecture.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
          <SectionLabel label="System Architecture" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.architecture.map((item, i) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#555] group-hover:bg-[#888] transition-colors duration-300" />
                  <h3 className="text-base font-semibold text-[#e5e5e5]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#999] leading-relaxed pl-5">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Features ─── */}
      {project.features.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
          <SectionLabel label="Features" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
              >
                <h3 className="text-base font-semibold text-[#e5e5e5] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#999] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Engineering ─── */}
      {project.engineering.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
          <SectionLabel label="Engineering Deep Dive" />
          <div className="space-y-5">
            {project.engineering.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-6 p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
              >
                <span className="text-xs font-mono text-[#555] shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#e5e5e5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#999] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Gallery ─── */}
      {project.images.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
          <SectionLabel label="Gallery" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Learnings & Challenges ─── */}
      {(project.learnings.length > 0 || project.challenges.length > 0) && (
        <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Learnings */}
            {project.learnings.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <SectionLabel label="What I Learned" inline />
                <div className="space-y-3 mt-6">
                  {project.learnings.map((learning, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      variants={fadeUp}
                      custom={i}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-2 shrink-0" />
                      <p className="text-sm text-[#999] leading-relaxed">
                        {learning}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <SectionLabel label="Challenges Faced" inline />
                <div className="space-y-3 mt-6">
                  {project.challenges.map((challenge, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      variants={fadeUp}
                      custom={i}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                      <p className="text-sm text-[#999] leading-relaxed">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ─── Bottom Nav ─── */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-8 border-t border-white/[0.08]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#e5e5e5] transition-colors duration-300 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to All Projects
        </Link>
      </motion.section>
    </div>
  );
}

/* ─── Section Label helper ─── */
function SectionLabel({
  label,
  inline = false,
}: {
  label: string;
  inline?: boolean;
}) {
  return (
    <motion.h2
      className={`text-sm tracking-[0.3em] uppercase text-[#666] ${
        inline ? "" : "mb-8"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      — {label}
    </motion.h2>
  );
}
