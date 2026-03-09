import About from "@/components/about";
import WhyHireMe from "@/components/WhyHireMe";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `About — Priyanshu Kashyap`,
    description: "A dive into my journey",
  };
}

export default function AboutPage() {
    return (
        <main
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
            style={{ background: "black" }}
        >
            <About showMoreButton={false} />
            <WhyHireMe/>
        </main>
    );
}