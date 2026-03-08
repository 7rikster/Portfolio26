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
    title: "AI-Powered Blog Creation",
    description:
      "Transform your ideas into compelling articles in seconds. Professional content creation powered by advanced AI.",
    status: "In Progress",
    progress: 50,
    date: "Dec 2025",
    techStack: ["React.js", "OpenAI API", "TailwindCSS", "Shadcn UI", "Aceternity UI"],
    link: "https://github.com/7rikster",
  },
  {
    id: 2,
    title: "Portfolio V2",
    description:
      "Redesigning my portfolio with improved animations and better UX.",
    status: "Almost Done",
    progress: 85,
    date: "Dec 2025",
    techStack: ["React", "Framer Motion", "Tailwind"],
  },
  {
    id: 3,
    title: "Route Mate",
    description:
      "Connect with verified travelers heading your way. Share rides, split costs, and make your solo journey safer and more memorable.",
    status: "In Progress",
    progress: 60,
    date: "Dec 2025",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/7rikster",
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
