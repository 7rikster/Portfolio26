interface Project {
  id: number;
  title: string;
  slug: string;
  year: number;

  tagline: string; // one powerful sentence
  description: string; // short overview

  role: string; // what YOU did
  duration: string; // e.g. "2 weeks"

  featured: boolean;

  techStack: string[];

  links: {
    github?: string;
    live?: string;
  };

  heroImage: string;
  images: string[];

  highlights?: string[];

  overview: {
    problem: string;
    solution: string;
    impact: string[];
  };

  architecture: {
    title: string;
    description: string;
  }[];

  features: {
    title: string;
    description: string;
  }[];

  engineering: {
    title: string;
    description: string;
  }[];

  learnings: string[];

  challenges: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Expenser - AI-powered personal finance manager",
        slug: "expenser",
        year: 2025,

        tagline: "A modern expense tracking platform for understanding personal spending habits.",

        description: "Expenser is a full-stack expense tracker that allows users to record, categorize, and analyze their spending through a clean dashboard and intuitive interface.",

        role: "Full Stack Developer",
        duration: "2 weeks",

        featured: true,

        highlights: [
            "Full-stack expense tracking application with real-time dashboard insights",
            "Clean and responsive UI built with Next.js and TailwindCSS",
            "Category-based expense organization for better financial insights",
            "Type-safe architecture using TypeScript",
            "RESTful API for efficient expense CRUD operations"
        ],

        techStack: [
            "Next.js","React","TypeScript","TailwindCSS","Node.js","Next.js API Routes","MongoDB","Vercel"
        ],

        links: {
            github: "https://github.com/7rikster/expenser",
            live: "https://expenser.vercel.app"
        },

        heroImage: "/projects/expenser/hero.png",

        images: [
            "/projects/expenser/img1.png",
            "/projects/expenser/img2.png",
            "/projects/expenser/img3.png"
        ],

        overview: {
            problem: "Tracking daily expenses manually becomes difficult as transactions increase and users lack a clear overview of where their money is being spent.",
            solution: "Expenser provides a simple and intuitive interface where users can record expenses, organize them by categories, and visualize spending patterns using a dashboard.",
            impact: [
            "Simplifies personal financial tracking",
            "Helps users understand spending patterns",
            "Provides a centralized system for managing expenses"
            ]
        },

        architecture: [
            {
            title: "Frontend",
            description: "Built using Next.js and React to create a responsive user interface. TailwindCSS is used for styling, and client-side state management ensures smooth UI interactions."
            },
            {
            title: "Backend",
            description: "Next.js API routes handle expense CRUD operations, authentication, and communication with the database."
            },
            {
            title: "Database",
            description: "MongoDB stores user data, expense records, and categories with an optimized schema for efficient queries and aggregations."
            },
            {
            title: "Deployment",
            description: "The application is deployed on Vercel with optimized builds and automatic deployments from GitHub."
            }
        ],

        features: [
            {
            title: "Expense Management",
            description: "Users can add, edit, and delete expenses while specifying amount, category, and notes."
            },
            {
            title: "Category-Based Organization",
            description: "Expenses are organized into categories to help users better understand their spending habits."
            },
            {
            title: "Analytics Dashboard",
            description: "Interactive dashboard summarizes total spending and displays insights into user financial behavior."
            },
            {
            title: "Responsive UI",
            description: "Fully responsive interface optimized for both desktop and mobile devices."
            }
        ],

        engineering: [
            {
            title: "Component-Based Architecture",
            description: "The UI was designed using reusable React components to maintain scalability and clean code structure."
            },
            {
            title: "Efficient Data Handling",
            description: "Backend APIs were structured to minimize redundant queries and efficiently fetch expense data."
            },
            {
            title: "Type-Safe Development",
            description: "TypeScript was used throughout the project to ensure type safety and reduce runtime errors."
            }
        ],

        learnings: [
            "Building a complete full-stack application using Next.js",
            "Designing efficient database schemas for financial data",
            "Structuring scalable React component architectures",
            "Improving UI/UX for data-driven dashboards"
        ],

        challenges: [
            "Designing a database structure that supports efficient expense queries",
            "Maintaining responsive performance with dynamic expense lists",
            "Structuring reusable components for scalability"
        ]
    }
];
