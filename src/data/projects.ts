export interface Project {
    id: number;
    title: string;
    slug: string;
    year: number;
    type: "Full Stack" | "Frontend" | "Backend";
    shortDescription: string;
    longDescription: string;
    techStack: string[];
    images: string[];
    githubLink?: string;
    liveLink?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "CodeRevU — AI-Powered GitHub PR Review SaaS",
        slug: "coderevu",
        year: 2025,
        type: "Full Stack",
        shortDescription:
            "Built an AI-powered GitHub pull request review platform that automatically generates structured code reviews using RAG and Gemini AI, eliminating manual review overhead for repetitive PRs.",
        longDescription:
            "CodeRevU is a SaaS platform that integrates directly with GitHub repositories to provide automated, AI-driven code reviews. It uses Retrieval-Augmented Generation (RAG) with Pinecone vector search to understand project context and Gemini AI to generate detailed, structured feedback on pull requests. The platform supports webhook-based triggers so reviews happen automatically when PRs are opened or updated, and provides a dashboard for managing repositories, viewing review history, and configuring review preferences.",
        techStack: [
            "Next.js 16",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Gemini AI",
            "Pinecone",
            "Inngest",
            "GitHub Webhooks",
        ],
        images: ["/projects/coderevu/1.png", "/projects/coderevu/2.png"],
        githubLink: "https://github.com",
        liveLink: "https://coderevu.vercel.app",
        featured: true,
    },
    {
        id: 2,
        title: "RunBook — Visual Workflow Execution Engine",
        slug: "runbook",
        year: 2025,
        type: "Full Stack",
        shortDescription:
            "Built a visual workflow automation platform with webhook-triggered, AI-augmented execution using Next.js 15, React Flow, and Inngest for event-driven orchestration.",
        longDescription:
            "RunBook is a visual workflow builder and execution engine that lets users design complex automation pipelines using a drag-and-drop node editor built with React Flow. Workflows can be triggered via webhooks, scheduled runs, or manual execution. Each workflow step can include AI-augmented processing powered by OpenAI, database queries via Prisma, HTTP requests, and conditional branching. The execution engine uses Inngest for reliable, event-driven step execution with built-in retry logic and observability.",
        techStack: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "React Flow",
            "Prisma",
            "PostgreSQL",
            "Inngest",
            "tRPC",
            "Gemini AI",
            "OpenAI",
        ],
        images: ["/projects/runbook/1.png", "/projects/runbook/2.png"],
        githubLink: "https://github.com",
        liveLink: "https://runbook.vercel.app",
        featured: false,
    },
    {
        id: 3,
        title: "DevConnect — Developer Social Platform",
        slug: "devconnect",
        year: 2024,
        type: "Full Stack",
        shortDescription:
            "A social networking platform for developers to share projects, collaborate on ideas, and connect with like-minded engineers through real-time chat and project showcases.",
        longDescription:
            "DevConnect is a full-stack social platform designed specifically for developers. It features user profiles with portfolio integration, project showcases with live previews, a real-time messaging system built with WebSockets, and a feed algorithm that surfaces relevant content based on tech stack interests. The platform includes OAuth authentication, image uploads with Cloudinary, and a responsive design optimized for both desktop and mobile experiences.",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "Cloudinary",
            "JWT",
        ],
        images: ["/projects/devconnect/1.png", "/projects/devconnect/2.png"],
        githubLink: "https://github.com",
        featured: true,
    },
];
