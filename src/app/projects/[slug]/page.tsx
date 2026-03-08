import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Priyanshu Kashyap`,
    description: project.tagline,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#030303" }}
    >
      <ProjectDetail project={project} />
    </main>
  );
}
