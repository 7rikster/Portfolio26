"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Code2, Users, Rocket, Trophy, BookOpen } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

const strengths = [
  {
    icon: <Code2 size={22} />,
    title: "Full-Stack Builder",
    description:
      "From pixel-perfect frontends with React & Next.js to robust backends with Node.js and databases — I build end-to-end.",
    accent: "#38bdf8",
  },
  {
    icon: <Trophy size={22} />,
    title: "Competitive Programmer",
    description:
      "Sharpened problem-solving skills through ICPC and Codeforces, bringing algorithmic thinking to real-world engineering.",
    accent: "#fbbf24",
  },
  {
    icon: <Zap size={22} />,
    title: "Fast Learner",
    description:
      "I pick up new technologies quickly and adapt to evolving requirements. If I don't know it yet, I'll learn it fast.",
    accent: "#a78bfa",
  },
  {
    icon: <Users size={22} />,
    title: "Team Player",
    description:
      "Experienced in collaborative environments — pair programming, code reviews, and clear communication come naturally.",
    accent: "#34d399",
  },
  {
    icon: <Rocket size={22} />,
    title: "Ship-First Mentality",
    description:
      "I focus on delivering working products, not chasing perfection. Iterate fast, learn from users, and improve.",
    accent: "#fb923c",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Always Growing",
    description:
      "Currently diving deep into system design, DevOps, and advanced TypeScript — always expanding my toolkit.",
    accent: "#f472b6",
  },
];

const stats = [
  { value: "1500+", label: "DSA Problems Solved" },
  { value: "3+", label: "Projects Shipped" },
  { value: "ICPC", label: "Regionalist" },
  { value: "2+", label: "Years of Coding" },
];

export default function WhyHireMe() {
  return (
    <section
      className="w-full py-24 px-6 md:px-16 lg:px-24"
      style={{ background: "#030303" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ─── Header ─── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-sm tracking-[0.3em] uppercase flex items-center gap-3 mb-3 justify-center"
            style={{ color: "#aaa" }}
          >
            — WHY ME
          </h2>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-[#e5e5e5]">
            What I Bring to the Table
          </h1>
          <motion.p
            className="text-base md:text-lg text-[#999] leading-relaxed max-w-3xl mx-auto text-center mb-14 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                &ldquo;I&apos;m not just a developer who writes code — I&apos;m someone who
                genuinely cares about the problems I&apos;m solving. Whether it&apos;s
                helping people track and manage their spending with{" "}
                <span className="text-[#e5e5e5] not-italic font-medium">Expenser</span> or
                empowering travelers to explore cities and create itineraries with{" "}
                <span className="text-[#e5e5e5] not-italic font-medium">Xplorer</span>,
                I build with purpose.&rdquo;
            </motion.p>
        </motion.div>

        {/* ─── Stats Row ─── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center py-6 px-4 rounded-xl border border-white/[0.08] bg-white/[0.02]"
              variants={fadeUp}
              custom={i}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[0.65rem] md:text-xs text-[#888] tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>        

        {/* ─── Strengths Grid ─── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300"
              variants={fadeUp}
              custom={i}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${item.accent}12`,
                  color: item.accent,
                }}
              >
                {item.icon}
              </div>

              <h3 className="text-base font-semibold text-[#e5e5e5] mb-2 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
