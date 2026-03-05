"use client";

import { useState, useCallback } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Achievements from "@/components/Achievements";
import Header from "@/components/header";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
      <main
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "black" }}
      >
        <Header loaded={loaded} />
        <Hero onLoaderComplete={handleLoaderComplete} />
        <About/>
        <Achievements />
      </main>
  );
}
