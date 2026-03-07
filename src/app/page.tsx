"use client";

import { useState, useCallback } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Achievements from "@/components/Achievements";
import Header from "@/components/header";
import TechStack from "@/components/techStack";

// Module-level flag: survives client-side navigation, resets on full page reload
let hasVisitedHome = false;

export default function Home() {
  // If we've visited before (back-navigation), skip the loader
  const [skipLoader] = useState(() => hasVisitedHome);
  const [loaded, setLoaded] = useState(() => hasVisitedHome);

  const handleLoaderComplete = useCallback(() => {
    hasVisitedHome = true;
    setLoaded(true);
  }, []);

  return (
      <main
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "black" }}
      >
        <Header loaded={loaded} />
        <Hero onLoaderComplete={handleLoaderComplete} skipLoader={skipLoader} />
        <About showMoreButton={true} />
        <TechStack/>
        <Achievements />
      </main>
  );
}
