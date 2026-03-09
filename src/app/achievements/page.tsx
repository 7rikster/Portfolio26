import Achievements from "@/components/Achievements";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Achievements — Priyanshu Kashyap`,
    description: "My Coding Achievements",
  };
}

export default function AchievementsPage() {
    return (
        <Achievements/>
    );
}