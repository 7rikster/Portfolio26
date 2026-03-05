export interface Achievement {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICPC Regionalist",
    description:
      "Qualified for the ICPC Asia Regional Contest, competing against top programmers across Asia.",
    imageUrl: "/achievements/icpc.jpg",
  },
  {
    id: 2,
    title: "IICPC Finalist",
    description:
      "Secured a spot in the IICPC National Finals, showcasing strong problem-solving skills.",
    imageUrl: "/achievements/iicpc.jpg",
  },
  {
    id: 3,
    title: "Smart India Hackathon",
    description:
      "Won the Smart India Hackathon, building innovative solutions for real-world problems.",
    imageUrl: "/achievements/sih.jpg",
  },
  {
    id: 4,
    title: "CodeChef 5★",
    description:
      "Achieved 5-star rating on CodeChef with a peak rating of 2100+, placing in the top percentile globally.",
    imageUrl: "/achievements/codechef.jpg",
  },
  {
    id: 5,
    title: "Google Summer of Code",
    description:
      "Selected as a contributor for GSoC, working on open-source projects with global impact.",
    imageUrl: "/achievements/gsoc.jpg",
  },
];
