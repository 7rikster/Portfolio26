import Building from "@/components/Building";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Workshop — Priyanshu Kashyap`,
    description: "What I am currently building and learning",
  };
}

export default function WorkshopPage(){
    return (
        <div>
            <Building/>
        </div>
    )
}