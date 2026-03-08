"use client";

import { motion, type Variants } from "framer-motion";
import {
  buildingProjects,
  learningTopics,
} from "@/data/buildingData";
import { ExternalLink } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.08,
    },
  }),
};

/* ─── Circular progress ring ─── */
function ProgressRing({
  progress,
  color,
  size = 52,
}: {
  progress: number;
  color: string;
  size?: number;
}) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[0.6rem] font-mono text-[#999]">
        {progress}%
      </span>
    </div>
  );
}

/* ─── Status accent colours ─── */
function getAccent(status: string) {
  switch (status) {
    case "Almost Done":
      return { ring: "#34d399", dot: "bg-emerald-400", glow: "shadow-emerald-500/10" };
    case "In Progress":
      return { ring: "#38bdf8", dot: "bg-sky-400", glow: "shadow-sky-500/10" };
    case "Just Started":
      return { ring: "#a78bfa", dot: "bg-violet-400", glow: "shadow-violet-500/10" };
    default:
      return { ring: "#fbbf24", dot: "bg-amber-400", glow: "shadow-amber-500/10" };
  }
}

/* ────────────────────────────────────────────── */
/*  Main Component                                */
/* ────────────────────────────────────────────── */
export default function Building() {
  return (
    <section
      className="w-full py-24 px-6 md:px-16 lg:px-24"
      style={{ background: "#030303" }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center mb-14 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          className="text-sm tracking-[0.3em] uppercase flex items-center gap-3 mb-3"
          style={{ color: "#aaa" }}
        >
          — THE WORKSHOP
        </h2>
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">
          Currently In The Works
        </h1>
        <p className="text-sm md:text-base text-[#888] max-w-lg leading-relaxed">
          What I&apos;m building, breaking, and learning right now.
        </p>
      </motion.div>

      {/* ─── Bento Grid ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-min">
        {/* ── Featured Building Card (spans 4 cols) ── */}
        {buildingProjects[0] && (
          <motion.div
            className={`md:col-span-4 row-span-1 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-400 group ${getAccent(buildingProjects[0].status).glow}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                {/* Pulsing live dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${getAccent(buildingProjects[0].status).dot}`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${getAccent(buildingProjects[0].status).dot}`} />
                </span>
                <span className="text-xs font-medium text-[#888] tracking-wide uppercase">
                  {buildingProjects[0].status}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#555]">{buildingProjects[0].date}</span>
                {buildingProjects[0].link && (
                  <a href={buildingProjects[0].link} target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-end justify-between gap-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#e5e5e5] mb-3 group-hover:text-white transition-colors">
                  {buildingProjects[0].title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed mb-5 max-w-lg">
                  {buildingProjects[0].description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {buildingProjects[0].techStack.map((tech) => (
                    <span key={tech} className="text-[0.65rem] px-2.5 py-0.5 rounded-full border border-white/[0.08] text-[#777] bg-white/[0.02]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ProgressRing progress={buildingProjects[0].progress} color={getAccent(buildingProjects[0].status).ring} size={64} />
            </div>
          </motion.div>
        )}

        {/* ── First Learning Card (spans 2 cols, same row) ── */}
        {learningTopics[0] && (
          <motion.div
            className="md:col-span-2 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 group flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {learningTopics[0].emoji}
              </div>
              <h4 className="text-base font-semibold text-[#e5e5e5] mb-2 group-hover:text-white transition-colors">
                {learningTopics[0].title}
              </h4>
              <p className="text-xs text-[#888] leading-relaxed mb-4">
                {learningTopics[0].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {learningTopics[0].tags.map((tag) => (
                <span key={tag} className="text-[0.6rem] px-2 py-0.5 rounded-full border border-white/[0.08] text-[#666] bg-white/[0.02]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Remaining Building Cards (3 cols each) ── */}
        {buildingProjects.slice(1).map((project, i) => {
          const accent = getAccent(project.status);
          return (
            <motion.div
              key={project.id}
              className={`md:col-span-3 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 group ${accent.glow}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i + 2}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${accent.dot}`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${accent.dot}`} />
                  </span>
                  <span className="text-[0.65rem] font-medium text-[#888] tracking-wide uppercase">
                    {project.status}
                  </span>
                  <span className="text-[0.65rem] text-[#555]">· {project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-white transition-colors">
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-end justify-between gap-5">
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-[#e5e5e5] mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[#888] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[0.65rem] px-2.5 py-0.5 rounded-full border border-white/[0.08] text-[#777] bg-white/[0.02]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ProgressRing progress={project.progress} color={accent.ring} />
              </div>
            </motion.div>
          );
        })}

        {/* ── Remaining Learning Cards (2 + 1 in a row of 6) ── */}
        {learningTopics.slice(1).map((topic, i) => (
          <motion.div
            key={topic.id}
            className="md:col-span-3 lg:col-span-3 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={i + 4}
          >
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                {topic.emoji}
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-base font-semibold text-[#e5e5e5] mb-1 group-hover:text-white transition-colors">
                  {topic.title}
                </h4>
                <p className="text-xs text-[#888] leading-relaxed mb-3">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {topic.tags.map((tag) => (
                    <span key={tag} className="text-[0.6rem] px-2 py-0.5 rounded-full border border-white/[0.08] text-[#666] bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
