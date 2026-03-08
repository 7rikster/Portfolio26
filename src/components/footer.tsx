"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.15,
    },
  }),
};
import Link from "next/link";
import { Github, Linkedin, Mail, Code, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/7rikster",
    icon: <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/priyanshu-kashyap-8196a928a",
    icon: <Linkedin size={18} />,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/7rikster",
    icon: <Code size={18} />,
  },
  {
    label: "Email",
    href: "mailto:ribupkashyap@gmail.com",
    icon: <Mail size={18} />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black w-full px-3 sm:px-6 pb-3 sm:pb-6">
      <motion.div
        className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden"
        style={{ background: "#f5f0e8" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* ─── Top section ─── */}
        <div className="px-8 sm:px-12 lg:px-16 pt-14 pb-10">
          {/* CTA + Branding */}
          

          {/* ─── Links grid ─── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Navigation */}
            <motion.div className="hidden lg:block" variants={fadeUp} custom={0}>
              <h3
                className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#8a7560" }}
              >
                Navigation
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                      style={{ color: "#4a3f35" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#1a1410")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#4a3f35")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} custom={1}>
              <h3
                className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#8a7560" }}
              >
                Connect
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-2.5 transition-colors duration-200 group"
                      style={{ color: "#4a3f35" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#1a1410")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#4a3f35")
                      }
                    >
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                        {social.icon}
                      </span>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeUp} custom={2}>
              <h3
                className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#8a7560" }}
              >
                Availability
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a3f35" }}>
                Currently available for freelance work, internships, and exciting
                collaborations.
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium" style={{ color: "#6b5a49" }}>
                  Open to opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Bottom bar ─── */}
        <motion.div
          className="px-8 sm:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(26, 20, 16, 0.1)" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="px-2.5 py-1.5 rounded-md text-xs font-bold"
              style={{ background: "#1a1410", color: "#f5f0e8" }}
            >
              PK
            </div>
            <span className="text-sm font-medium" style={{ color: "#1a1410" }}>
              Priyanshu Kashyap
            </span>
          </div>
          <p className="text-xs" style={{ color: "#8a7560" }}>
            © {currentYear} · Designed & built with care
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}