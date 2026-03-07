"use client";

import { useState, useCallback, useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Achievements from "@/components/Achievements";
import Header from "@/components/header";
import TechStack from "@/components/techStack";

export default function Home() {
  const [skipLoader, setSkipLoader] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Check sessionStorage on mount to see if loader already played
  useEffect(() => {
    if (sessionStorage.getItem("loaderPlayed") === "true") {
      setSkipLoader(true);
      setLoaded(true); // Header appears immediately
    }
  }, []);

  const handleLoaderComplete = useCallback(() => {
    sessionStorage.setItem("loaderPlayed", "true");
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
