interface Project {
  id: number;
  title: string;
  slug: string;
  year: number;

  tagline: string; 
  description: string; 

  role: string;
  duration?: string;

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
        year: 2026,

        tagline: "A modern expense tracking platform for understanding personal spending habits.",

        description: "Expenser is a full-stack expense tracker that allows users to record, categorize, and analyze their spending through a clean dashboard and intuitive interface.",

        role: "Full Stack Developer",

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

      tagline: "AI-powered travel discovery and collaborative trip planning platform.",

      description:
        "Xplorer is a full-stack travel discovery and planning platform that enables users to explore destinations worldwide, generate AI-powered itineraries, collaborate on trips through real-time chat, and discover places based on mood and preferences.",

      role: "Full Stack Developer",
      duration: "3 weeks",

      featured: true,

      techStack: [
        "Next.js",
        "Node.js",
        "Express",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "MongoDB",
        "Firebase Auth",
        "WebSockets",
        "Gemini API",
        "Stripe",
        "Docker",
        "GitHub Actions"
      ],

      links: {
        github: "https://github.com/7rikster/xplorer",
        live: "https://xplorer-eight.vercel.app/",
      },

      heroImage: "/projects/xplorer/hero.png",

      images: [
        "/projects/xplorer/1.png",
        "/projects/xplorer/2.png",
        "/projects/xplorer/3.png",
        "/projects/xplorer/4.png",
      ],

      highlights: [
        "AI-powered travel itinerary generation using Gemini API",
        "Real-time group chat for collaborative trip planning using WebSockets",
        "Mood-based destination recommendations powered by AI",
        "Integrated Stripe payments for premium travel features",
        "Containerized deployment using Docker with CI/CD pipelines via GitHub Actions"
      ],

      overview: {
        problem:
          "Travel planning typically requires using multiple disconnected platforms for discovering destinations, planning itineraries, and collaborating with friends.",

        solution:
          "Xplorer provides a unified platform where users can explore destinations, generate AI-powered travel plans, chat with friends in real time, and collaboratively organize trips.",

        impact: [
          "Simplifies travel planning through a unified platform",
          "Improves collaboration through real-time trip communication",
          "Provides personalized travel recommendations using AI"
        ],
      },

      architecture: [
        {
          title: "Client Layer",
          description:
            "The frontend is built using Next.js and TypeScript to deliver a fast, responsive user interface with TailwindCSS for modern styling."
        },
        {
          title: "API Layer",
          description:
            "A Node.js and Express server exposes REST APIs responsible for travel data management, itinerary generation requests, and chat session handling."
        },
        {
          title: "Authentication Layer",
          description:
            "Firebase Authentication secures user sign-in, session management, and protected routes."
        },
        {
          title: "AI Services",
          description:
            "Gemini API powers AI itinerary generation and mood-based travel recommendations to personalize user travel planning."
        },
        {
          title: "Real-Time Communication",
          description:
            "WebSockets enable real-time group chat allowing users to collaborate and communicate while planning trips."
        },
        {
          title: "Data Layer",
          description:
            "MongoDB stores user data, destinations, and trip information while Prisma ORM manages database interactions."
        },
        {
          title: "Infrastructure",
          description:
            "The application is containerized using Docker and uses GitHub Actions for automated CI/CD pipelines including build, testing, and deployment."
        }
      ],

      features: [
        {
          title: "AI Travel Itinerary Generation",
          description:
            "Users can generate personalized travel itineraries based on destination and preferences using Gemini AI."
        },
        {
          title: "Mood-Based Destination Discovery",
          description:
            "Users can discover travel destinations tailored to their mood such as adventure, relaxation, or cultural exploration."
        },
        {
          title: "Real-Time Group Chat",
          description:
            "WebSocket-powered group chat enables travelers to collaborate and discuss trip plans in real time."
        },
        {
          title: "Secure Authentication",
          description:
            "Firebase Auth ensures secure user authentication and protected access to personal travel plans."
        },
        {
          title: "Payments Integration",
          description:
            "Stripe integration enables users to access premium travel features and services."
        },
        {
          title: "Responsive Travel Interface",
          description:
            "Fully responsive design ensures seamless travel planning across desktop, tablet, and mobile devices."
        }
      ],

      engineering: [
        {
          title: "Real-Time Communication Architecture",
          description:
            "Implemented WebSocket-based communication to enable low-latency real-time chat between trip participants."
        },
        {
          title: "AI Integration",
          description:
            "Designed structured prompts and API flows to integrate Gemini AI for itinerary generation and travel recommendations."
        },
        {
          title: "Database Management",
          description:
            "Used Prisma ORM with MongoDB to maintain a clean schema and efficient querying for trip and user data."
        },
        {
          title: "CI/CD Automation",
          description:
            "Implemented GitHub Actions pipelines to automate testing, building, and deployment processes."
        },
        {
          title: "Containerized Deployment",
          description:
            "Docker was used to containerize the application ensuring consistent environments across development and deployment."
        }
      ],

      learnings: [
        "Building a full-stack platform using Next.js, Node.js, and Express",
        "Implementing real-time communication systems using WebSockets",
        "Integrating generative AI APIs for personalized travel recommendations",
        "Designing CI/CD pipelines with GitHub Actions",
        "Containerizing full-stack applications using Docker"
      ],

      challenges: [
        "Managing real-time WebSocket connections while maintaining application scalability",
        "Designing reliable prompts and response parsing for AI-generated itineraries",
        "Structuring backend APIs to support both AI workflows and real-time chat",
        "Maintaining consistent environments across development and deployment using Docker"
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
      "React",
      "JavaScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "PayPal",
      "Cloudinary",
    ],

    links: {
      github: "https://github.com/7rikster/Learn.com",
      live: "https://learn-com-2.onrender.com/",
    },

    heroImage: "/projects/learn/hero.png",

    images: [
      "/projects/learn/1.png",
      "/projects/learn/2.png",
      "/projects/learn/6.png",
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
          "Built with React and JavaScript to create a fast and scalable user interface for browsing courses and learning content.",
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
      "React",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
    ],

    links: {
      github: "https://github.com/7rikster/Awwwards",
      live: "https://awwwards-rho.vercel.app/",
    },

    heroImage: "/projects/awwwards/hero.png",

    images: [
      "/projects/awwwards/1.png",
      "/projects/awwwards/2.png",
      "/projects/awwwards/3.png",
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
