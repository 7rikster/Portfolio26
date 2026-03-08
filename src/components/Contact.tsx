"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Github, Linkedin, Code, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  copyable?: boolean;
}

const contacts: ContactLink[] = [
  {
    label: "Email",
    value: "ribupkashyap@gmail.com",
    href: "mailto:ribupkashyap@gmail.com",
    icon: <Mail size={20} />,
    accent: "#f87171",
    copyable: true,
  },
  {
    label: "GitHub",
    value: "7rikster",
    href: "https://github.com/7rikster",
    icon: <Github size={20} />,
    accent: "#e5e5e5",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/priyanshu-kashyap-8196a928a",
    icon: <Linkedin size={20} />,
    accent: "#60a5fa",
  },
  {
    label: "Codeforces",
    value: "Competitive Profile",
    href: "https://codeforces.com/profile/7rikster",
    icon: <Code size={20} />,
    accent: "#34d399",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  return (
    <section
      className="w-full py-24 px-3 md:px-16 lg:px-24 min-h-[80vh] flex flex-col justify-center"
      style={{ background: "#030303" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* ─── Header ─── */}
        <motion.div
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-sm tracking-[0.3em] uppercase flex items-center gap-3 mb-3 justify-center md:justify-start"
            style={{ color: "#aaa" }}
          >
            — GET IN TOUCH
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 text-[#e5e5e5]">
            Let&apos;s work together
          </h1>
          <p className="text-sm md:text-base text-[#888] max-w-lg leading-relaxed mx-auto md:mx-0">
            Have a project in mind, want to collaborate, or just say hello?
            I&apos;m always open to new opportunities and conversations.
          </p>
        </motion.div>

        {/* ─── Contact Links ─── */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {contacts.map((contact, i) => (
            <ContactRow key={contact.label} contact={contact} index={i} />
          ))}
        </motion.div>

        {/* ─── Footer Note ─── */}
        <motion.p
          className="mt-14 text-xs text-[#555] text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Prefer email? I typically respond within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Single Contact Row ─── */
function ContactRow({
  contact,
  index,
}: {
  contact: ContactLink;
  index: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contact.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 py-5 sm:py-6 px-5 sm:px-7 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 cursor-pointer"
      variants={fadeUp}
      custom={index}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center gap-4 sm:gap-5 min-w-0 flex-1">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${contact.accent}10`,
            color: contact.accent,
          }}
        >
          {contact.icon}
        </div>

        {/* Label + Value */}
        <div className="min-w-0">
          <span className="text-[0.65rem] font-medium tracking-widest uppercase text-[#666] block mb-0.5">
            {contact.label}
          </span>
          <span className="text-sm sm:text-base text-[#ccc] group-hover:text-white transition-colors duration-300 block truncate">
            {contact.value}
          </span>
        </div>
      </div>

      {/* Right side: copy button or arrow */}
      <div className="flex items-center gap-3">
        {contact.copyable && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-md hover:bg-white/[0.06] text-[#555] hover:text-[#ccc] transition-all duration-200"
            title="Copy"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        )}
        <ArrowUpRight
          size={16}
          className="text-[#444] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
        />
      </div>
    </motion.a>
  );
}
