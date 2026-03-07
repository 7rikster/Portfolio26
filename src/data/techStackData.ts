export interface TechStack {
    id: number;
    name: string;
    icon: string;
}

export interface TechStackCategory {
    id: number;
    name: string;
    techs: TechStack[];
}

export const techStackCategories: TechStackCategory[] = [
    {
        id: 1,
        name: "Languages",
        techs: [
            {
                id: 1,
                name: "C++",
                icon: "devicon-cplusplus-plain",
            },
            {
                id: 2,
                name: "JavaScript",
                icon: "devicon-javascript-plain",
            },
            {
                id: 3,
                name: "TypeScript",
                icon: "devicon-typescript-plain",
            },
            
        ],
    },
    {
        id: 2,
        name: "FRONTEND",
        techs: [
            
            {
                id: 1,
                name: "React",
                icon: "devicon-react-original",
            },
            {
                id: 2,
                name: "Next.Js",
                icon: "devicon-nextjs-plain",
            },
            {
                id: 3,
                name: "Tailwind CSS",
                icon: "devicon-tailwindcss-plain",
            },
            {
                id: 4,
                name: "Framer Motion",
                icon: "devicon-framermotion-plain",
            },
            {
                id: 5,
                name: "Figma",
                icon: "devicon-figma-plain",
            },
        ],
    },
    {
        id: 3,
        name: "BACKEND",
        techs: [
            {
                id: 1,
                name: "Node.Js",
                icon: "devicon-nodejs-plain",
            },
            {
                id: 2,
                name: "Express.Js",
                icon: "devicon-express-original",
            },
        ],
    },
    {
        id: 4,
        name: "DATABASE",
        techs: [
            {
                id: 1,
                name: "MongoDB",
                icon: "devicon-mongodb-plain",
            },
            {
                id: 2,
                name: "PostgreSQL",
                icon: "devicon-postgresql-plain",
            },
            {
                id: 3,
                name: "MySQL",
                icon: "devicon-mysql-plain",
            },
            {
                id: 4,
                name: "Redis",
                icon: "devicon-redis-plain",
            },
            {
                id: 5,
                name: "Firebase",
                icon: "devicon-firebase-plain",
            },
            {
                id: 6,
                name: "Prisma",
                icon: "devicon-prisma-plain",
            },
        ],
    },
    {
        id: 5,
        name: "Tools",
        techs: [
            {
                id: 1,
                name: "Git",
                icon: "devicon-git-plain",
            },
            {
                id: 2,
                name: "GitHub",
                icon: "devicon-github-original",
            },
            {
                id: 3,
                name: "Docker",
                icon: "devicon-docker-plain",
            },
            {
                id: 4,
                name: "Postman",
                icon: "devicon-postman-plain",
            },
            {
                id: 5,
                name: "AWS",
                icon: "devicon-amazonwebservices-plain-wordmark",
            },
            {
                id: 6,
                name: "Vercel",
                icon: "devicon-vercel-original",
            },
        ],
    },
    
];

