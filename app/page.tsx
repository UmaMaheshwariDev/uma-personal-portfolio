"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/sections/LoadingScreen";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { TechStack } from "@/sections/TechStack";
import { Experience } from "@/sections/Experience";
import { Blog } from "@/sections/Blog";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if repeat visitor
    const hasVisited = localStorage.getItem("portfolio-visited");
    // Check if prefers-reduced-motion is active
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasVisited || prefersReducedMotion) {
      setTimeout(() => setIsLoading(false), 0);
    } else {
      try {
        localStorage.setItem("portfolio-visited", "true");
      } catch {
        // Safe fallback for private browsing or disabled cookies
      }
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="flex flex-col min-h-screen relative w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans text-xs font-semibold"
      >
        Skip to content
      </a>
      
      <Navbar />
      <main id="main-content" className="flex-1 w-full overflow-hidden">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Skills />
        <TechStack />
        <Experience />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Premium initial loading sequence overlay */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
