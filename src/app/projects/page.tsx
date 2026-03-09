import Projects from "@/components/projects";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Projects — Priyanshu Kashyap`,
    description: "Projects — Priyanshu Kashyap",
  };
}

export default function ProjectsPage(){
    return (
        <section>
            <Projects showViewMore={false}/>
        </section>
    )
}