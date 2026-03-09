export interface Achievement {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICPC Regionalist",
    description:
      "Qualified for the ICPC Asia Amritapuri Regional Contest 2025, competing against top programmers across Asia.",
    imageUrl: "/achievements/icpc.png",
    link: "https://drive.google.com/file/d/1EpNfXFLPKAPjuiLjTJXxTChwVD34eMhb/view"
  },
  {
    id: 2,
    title: "IICPC Codefest",
    description:
      "Qualified for the IICPC Codefest Regional Contest 2026 securing a rank of 466 among 13k+ participants.",
    imageUrl: "/achievements/iicpc.jpeg",
    link: "https://drive.google.com/file/d/1tb5pXWdJE99-3RNd7n6JQxPyYzB0HJtc/view"
  },
  {
    id: 3,
    title: "Meta Hacker Cup",
    description:
      "Secured a rank of 1874 in Round 2 of the prestigious Meta Hacker Cup.",
    imageUrl: "/achievements/meta.png",
    link: "https://drive.google.com/file/d/1AXzqPmcT3lwLYBVTdIAI-R3L9REw8Mce/view"
  },
  {
    id: 4,
    title: "Codeforces Expert",
    description:
      "Achieved 5-star rating on CodeChef with a peak rating of 2100+, placing in the top percentile globally.",
    imageUrl: "/achievements/codeforces.png",
    link: "https://codeforces.com/profile/7rikster"
  },
];
