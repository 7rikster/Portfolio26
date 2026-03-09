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
            "AI smart categorixation to reduce manual work",
            "Type-safe architecture using TypeScript",
            "RESTful API for efficient expense CRUD operations",
            "Personalized AI insights for better financial decisions"
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
            description:
              "Built using Next.js to create a fast and responsive user interface. TailwindCSS is used for modern styling, while client-side state management ensures smooth and interactive UI experiences."
          },
          {
            title: "Backend",
            description:
              "A Node.js and Express.js server handles API requests, business logic, and expense CRUD operations. Clerk is integrated for secure user authentication and session management."
          },
          {
            title: "Database",
            description:
              "Neon (serverless PostgreSQL) is used to store user accounts, expense records, and categories. Prisma ORM manages the database schema and enables type-safe queries and efficient data access."
          },
          {
            title: "Deployment",
            description:
              "The frontend is deployed on Vercel for optimized performance and global edge delivery, while the backend services run independently with seamless integration to the database."
          }
        ],

        features: [
            {
            title: "Expense Management",
            description: "Users can add, edit, and delete expenses while specifying amount, category, and notes, either by typing in natural language or by uploading a receipt."
            },
            {
            title: "AI Smart Categorization",
            description: "Gemini AI automatically categorizes expenses based on transaction descriptions and receipt data."
            },
            {
            title: "Analytics Dashboard",
            description: "Interactive dashboard summarizes total spending and displays insights into user financial behavior."
            },
            {
            title: "Predictive Spending Forecast",
            description: "Using historical expense data, the system predicts future spending trends and estimates the user's end-of-month expenses, helping them plan finances more effectively."
            },
            {
            title: "Budget Tracking & Smart Alerts",
            description: "Users can set monthly spending budgets for different categories. The system monitors expenses in real time and sends alerts when spending approaches or exceeds the defined limits."
            }
        ],

       engineering: [
        {
          title: "Component-Based Architecture",
          description:
            "The frontend is built using reusable React components in Next.js, enabling modular development, easier maintenance, and scalable UI architecture."
        },
        {
          title: "Efficient API Design",
          description:
            "The Node.js and Express backend exposes structured REST APIs optimized to minimize redundant queries and efficiently fetch expense data."
        },
        {
          title: "Redis Caching Layer",
          description:
            "Redis is used as an in-memory caching layer to store frequently accessed data such as user summaries and analytics results, significantly reducing database load and improving response times."
        },
        {
          title: "Type-Safe Development",
          description:
            "TypeScript is used across both frontend and backend to ensure type safety, improve developer productivity, and reduce runtime errors."
        }
      ],

        learnings: [
          "Building a complete full-stack application using Next.js, Node.js, and Express",
          "Designing efficient database schemas and managing data access using Prisma with Neon PostgreSQL",
          "Structuring scalable React component architectures",
          "Implementing Redis caching to reduce database load and significantly improve API response times",
          "Integrating AI capabilities using the Gemini API and applying prompt engineering to extract structured data",
        ],

        challenges: [
          "Designing a scalable data model for storing and querying large volumes of expense records efficiently",
          "Implementing reliable AI receipt parsing using Gemini while ensuring accurate extraction of structured data",
          "Optimizing API performance and reducing database load using Redis caching for frequently accessed analytics data",
          "Handling asynchronous background workflows for generating monthly AI insights using event-driven jobs",
        ]
    },
    {
      id: 2,
      title: "Xplorer",
      slug: "xplorer",
      year: 2025,

      tagline: "Discover places, plan journeys, and explore the world seamlessly.",

      description:
        "Xplorer is a modern travel exploration platform that helps users discover destinations, explore attractions, and plan trips with a visually rich and interactive interface.",

      role: "Full Stack Developer",
      duration: "3 weeks",

      featured: true,

      techStack: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "GSAP",
        "React",
        "Map APIs",
      ],

      links: {
        github: "https://github.com/7rikster/xplorer",
        live: "https://xplorer.vercel.app",
      },

      heroImage: "/projects/xplorer/hero.png",

      images: [
        "/projects/xplorer/1.png",
        "/projects/xplorer/2.png",
        "/projects/xplorer/3.png",
        "/projects/xplorer/4.png",
      ],

      highlights: [
        "Interactive destination exploration interface",
        "Smooth page transitions using GSAP",
        "Fully responsive modern UI",
        "Fast navigation using Next.js routing",
        "Modular architecture for scalability",
      ],

      overview: {
        problem:
          "Travelers often rely on multiple fragmented platforms to discover destinations, explore attractions, and plan their journeys.",

        solution:
          "Xplorer provides a unified platform where users can explore destinations, view curated attractions, and navigate through a visually immersive interface designed for discovery.",

        impact: [
          "Simplified destination discovery",
          "Improved user engagement through interactive UI",
          "Faster navigation with optimized frontend architecture",
        ],
      },

      architecture: [
        {
          title: "Component Based UI",
          description:
            "Built using reusable React components to ensure maintainability and scalability of the interface.",
        },
        {
          title: "Static Data Layer",
          description:
            "Project and destination data are managed using TypeScript files instead of a database for simplicity and fast builds.",
        },
        {
          title: "Next.js Routing",
          description:
            "Dynamic routing enables seamless navigation between destinations and detail pages.",
        },
      ],

      features: [
        {
          title: "Destination Discovery",
          description:
            "Users can explore curated travel destinations with detailed information and images.",
        },
        {
          title: "Interactive UI",
          description:
            "Smooth animations and transitions enhance the user experience and make exploration engaging.",
        },
        {
          title: "Responsive Design",
          description:
            "Fully optimized for desktop, tablet, and mobile devices.",
        },
        {
          title: "Fast Page Navigation",
          description:
            "Next.js optimized routing ensures quick transitions between pages.",
        },
      ],

      engineering: [
        {
          title: "Performance Optimization",
          description:
            "Optimized images and efficient rendering techniques were used to maintain fast loading times.",
        },
        {
          title: "Animation Architecture",
          description:
            "GSAP animations were structured carefully to avoid layout shifts and ensure smooth transitions.",
        },
        {
          title: "Clean Code Structure",
          description:
            "Implemented modular folder structure and TypeScript types to improve maintainability.",
        },
      ],

      learnings: [
        "Designing scalable component architectures in React",
        "Implementing advanced UI animations with GSAP",
        "Structuring large frontend projects effectively",
        "Improving UX through motion and visual hierarchy",
      ],

      challenges: [
        "Designing smooth animations without impacting performance",
        "Maintaining clean component structure as the project grew",
        "Balancing visual richness with fast loading times",
      ],
  },
  {
    id: 3,
    title: "Learn.com",
    slug: "learn-com",
    year: 2025,

    tagline:
      "A modern learning platform where instructors create courses and students learn through structured video lessons.",

    description:
      "Learn.com is a full-stack Learning Management System (LMS) that allows instructors to publish courses and students to purchase and learn them through structured video content. The platform focuses on clean UX, scalable architecture, and smooth course navigation.",

    role: "Full Stack Developer",
    duration: "4 weeks",

    featured: true,

    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Cloudinary",
    ],

    links: {
      github: "https://github.com/7rikster/Learn.com",
      live: "https://learn-com.vercel.app",
    },

    heroImage: "/projects/learn/hero.png",

    images: [
      "/projects/learn/1.png",
      "/projects/learn/2.png",
      "/projects/learn/3.png",
      "/projects/learn/4.png",
    ],

    highlights: [
      "Full LMS platform with instructor and student roles",
      "Course purchase and enrollment system",
      "Structured video-based course learning",
      "Secure payment integration",
      "Scalable backend API architecture",
    ],

    overview: {
      problem:
        "Online learning platforms are often cluttered and difficult for instructors to manage while also providing a poor learning experience for students.",

      solution:
        "Learn.com provides a streamlined platform where instructors can easily create and publish courses while students can browse, purchase, and learn through structured video lectures.",

      impact: [
        "Simplified course publishing for instructors",
        "Smooth learning experience for students",
        "Scalable LMS architecture for future growth",
      ],
    },

    architecture: [
      {
        title: "Frontend Application",
        description:
          "Built with Next.js and TypeScript to create a fast and scalable user interface for browsing courses and learning content.",
      },
      {
        title: "Backend API",
        description:
          "Node.js and Express power a REST API that handles authentication, course management, purchases, and user data.",
      },
      {
        title: "Database Layer",
        description:
          "MongoDB stores users, courses, lectures, and enrollment data in a flexible schema suitable for educational content.",
      },
      {
        title: "Media Storage",
        description:
          "Video lectures and course assets are stored and delivered using Cloudinary for optimized streaming.",
      },
    ],

    features: [
      {
        title: "Instructor Course Creation",
        description:
          "Instructors can create courses, upload lectures, and manage course content through an intuitive dashboard.",
      },
      {
        title: "Course Marketplace",
        description:
          "Students can browse available courses, view course details, and purchase them securely.",
      },
      {
        title: "Video Learning Experience",
        description:
          "Students can watch structured video lectures and navigate lessons easily within each course.",
      },
      {
        title: "User Authentication",
        description:
          "Secure login and role-based access for instructors and students.",
      },
      {
        title: "Course Enrollment",
        description:
          "After purchasing a course, students gain instant access to all course lectures.",
      },
    ],

    engineering: [
      {
        title: "Role-Based Access Control",
        description:
          "Implemented separate permissions for instructors and students to ensure secure course management.",
      },
      {
        title: "Scalable API Design",
        description:
          "Backend endpoints were structured to handle course creation, purchases, and lecture management efficiently.",
      },
      {
        title: "Optimized Media Delivery",
        description:
          "Video lectures are served using optimized media delivery to ensure smooth playback.",
      },
    ],

    learnings: [
      "Designing scalable full-stack applications",
      "Implementing role-based access systems",
      "Managing video content and media storage",
      "Building secure payment workflows",
    ],

    challenges: [
      "Handling course access after purchase",
      "Managing large video assets efficiently",
      "Designing a clean course navigation experience",
    ],
  },
  {
    id: 4,
    title: "Awwwards",
    slug: "awwwards",
    year: 2025,

    tagline:
      "A visually immersive frontend experience inspired by award-winning web design.",

    description:
      "Awwwards is a modern frontend showcase project focused on high-end animations and interactive UI. Inspired by award-winning websites, the project demonstrates advanced motion design using GSAP along with modern frontend technologies to create a smooth and visually engaging browsing experience.",

    role: "Frontend Developer",
    duration: "2 weeks",

    featured: true,

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
    ],

    links: {
      github: "https://github.com/yourusername/awwwards",
      live: "https://awwwards-clone.vercel.app",
    },

    heroImage: "/projects/awwwards/hero.png",

    images: [
      "/projects/awwwards/1.png",
      "/projects/awwwards/2.png",
      "/projects/awwwards/3.png",
      "/projects/awwwards/4.png",
    ],

    highlights: [
      "Advanced GSAP powered animations",
      "Smooth page transitions and scroll effects",
      "Modern award-style website layout",
      "Highly interactive UI components",
      "Optimized animation performance",
    ],

    overview: {
      problem:
        "Most developer portfolios focus only on functionality and often lack the level of motion design and visual polish seen in award-winning websites.",

      solution:
        "The project recreates a premium web experience by implementing advanced animations, interactive components, and cinematic transitions using GSAP and modern frontend tooling.",

      impact: [
        "Demonstrates advanced frontend animation skills",
        "Improves user engagement through motion design",
        "Showcases modern UI/UX engineering practices",
      ],
    },

    architecture: [
      {
        title: "Component Driven UI",
        description:
          "Built using modular React components to keep the animation logic isolated and maintainable.",
      },
      {
        title: "Animation Layer",
        description:
          "GSAP timelines orchestrate complex animations including scroll triggers, page transitions, and element reveals.",
      },
      {
        title: "Responsive Layout System",
        description:
          "TailwindCSS utilities ensure the layout adapts seamlessly across devices.",
      },
    ],

    features: [
      {
        title: "Scroll-Based Animations",
        description:
          "Sections animate dynamically based on scroll position, creating an immersive browsing experience.",
      },
      {
        title: "Page Transitions",
        description:
          "Smooth transitions between sections and pages using GSAP timelines.",
      },
      {
        title: "Interactive Hover Effects",
        description:
          "UI components respond to user interaction with subtle motion and visual feedback.",
      },
      {
        title: "Cinematic Hero Section",
        description:
          "Large immersive hero layout with animated elements and layered visuals.",
      },
    ],

    engineering: [
      {
        title: "GSAP Timeline Architecture",
        description:
          "Animations were structured using GSAP timelines to maintain synchronization and avoid performance issues.",
      },
      {
        title: "Animation Performance Optimization",
        description:
          "Used transform-based animations and minimized layout thrashing for smooth rendering.",
      },
      {
        title: "Clean Separation of Logic",
        description:
          "Animation logic was separated from UI components to keep the codebase clean and maintainable.",
      },
    ],

    learnings: [
      "Advanced GSAP animation techniques",
      "Designing immersive web experiences",
      "Structuring animation-heavy applications",
      "Optimizing animation performance in the browser",
    ],

    challenges: [
      "Managing complex animation timelines",
      "Ensuring smooth performance across devices",
      "Balancing visual richness with maintainable code structure",
    ],
  },
];
