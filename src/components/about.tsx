"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";


interface AboutProps {
    showMoreButton: boolean;
}

export default function About({ showMoreButton }: AboutProps) {

    return (
        <div className="flex flex-col items-center justify-center py-20" >
            <motion.div className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="text-sm tracking-[0.3em] uppercase flex items-center gap-3" style={{ color: "#aaa"}}>- A LITTLE ABOUT ME</h1>
                <h1 className="text-2xl md:text-4xl font-semibold tracking-tight p-2 md:p-4 mb-6">Building efficient solutions with code</h1>
            </motion.div>
            <motion.div className="w-full max-w-3xl text-center flex flex-col gap-3 items-center text-[#aaa]"
                initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
            >
                <p>I'm a third year Computer Science Engineering student at NIT Silchar and a passionate developer who enjoys solving complex problems and building meaningful digital experiences.</p>
                <p>My primary interests lie in competitive programming, algorithms, and software development. I enjoy breaking down complex problems and designing efficient solutions using strong foundations in data structures and algorithms. Alongside problem solving, I love building modern and interactive web applications, focusing on clean design, performance, and scalability.</p>
                <p>I'm constantly exploring new technologies, improving my coding skills, and working on projects that push me to grow as a developer.</p>
                {showMoreButton && (
                    <Link href="/about">
                        <Button variant="outline" className="mt-8 cursor-pointer flex items-center justify-center gap-2">
                            Learn More <MoveRight />
                        </Button>
                    </Link>
                )}
            </motion.div>
            
        </div>
    )
}   