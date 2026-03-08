import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Priyanshu Kashyap",
  description: "Get in touch with Priyanshu Kashyap via email, GitHub, LinkedIn, Codeforces, or phone.",
};

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#030303" }}
    >
      <Contact />
    </main>
  );
}
