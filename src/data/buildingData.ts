export interface BuildingProject {
  id: number;
  title: string;
  description: string;
  status: "In Progress" | "Almost Done" | "Just Started" | "Paused";
  progress: number; // 0-100
  date: string;
  techStack: string[];
  link?: string;
}

export interface LearningTopic {
  id: number;
  title: string;
  description: string;
  tags: string[];
  emoji: string;
}

export const buildingProjects: BuildingProject[] = [
  {
    id: 1,
    title: "AI-Powered Expense Management",
    description:
      "A modern expense management application that helps users track spending, visualize financial habits, and gain smart insights using AI-powered analysis.",
    status: "In Progress",
    progress: 30,
    date: "Feb 2026",
    techStack: ["Next.js", "Typescript", "Gemini API", "TailwindCSS", "Node.Js", "Redis",  "Prisma", "PostgreSQL"],
    link: "https://github.com/7rikster/expenser",
  },
  {
    id: 2,
    title: "Portfolio V2",
    description:
      "Redesigning my portfolio with improved animations and better UX.",
    status: "Almost Done",
    progress: 85,
    date: "Feb 2025",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "GSAP"],
    link: "https://github.com/7rikster/Portfolio26",
  },
];

export const learningTopics: LearningTopic[] = [
  {
    id: 1,
    title: "System Design",
    description:
      "Deep diving into distributed systems, scalability patterns, and architecture decisions.",
    tags: ["Designing Data-Intensive Applications", "System Design Interview"],
    emoji: "🏗️",
  },
  {
    id: 2,
    title: "DevOps & Infrastructure",
    description: "Learning Docker, Kubernetes, and cloud deployment strategies.",
    tags: ["AWS", "Docker", "CI/CD pipelines"],
    emoji: "⚙️",
  },
  {
    id: 3,
    title: "TypeScript Advanced Patterns",
    description:
      "Mastering type-level programming and advanced TypeScript patterns.",
    tags: ["Total TypeScript", "Type Challenges"],
    emoji: "🔷",
  },
];
