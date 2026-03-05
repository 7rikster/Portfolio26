"use client";

import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Hero from "@/components/hero";
import About from "@/components/about";
import Achievements from "@/components/Achievements";
import Header from "@/components/header";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  return (
   
      <main
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "black" }}
      >
        <Header/>
        <Hero />
        <About/>
        <Achievements />
      </main>
    
  );
}
