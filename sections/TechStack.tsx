"use client";

import { useState } from "react";
import { portfolioData, TechItem } from "@/data/portfolio";
import { motion } from "framer-motion";

// Custom premium SVG representations for logos
const LogoSVG = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case "next.js":
      return (
        <svg viewBox="0 0 180 180" className="w-8 h-8 fill-foreground">
          <circle cx="90" cy="90" r="90" className="fill-secondary stroke-border" strokeWidth="2" />
          <path d="M140 135.5L81.2 56H72v68h9.1V71.7l50 68.3c3.2-3.1 6.1-6.7 8.9-10.5z" />
          <rect x="113.8" y="56" width="9.1" height="68" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 stroke-sky-400 fill-none" strokeWidth="1">
          <circle r="2" className="fill-sky-400" />
          <g>
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 100 100" className="w-8 h-8 fill-[#3178c6] rounded-lg">
          <rect width="100" height="100" />
          <text x="50" y="80" fill="white" fontSize="42" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case "tailwind css":
      return (
        <svg viewBox="0 0 33 20" className="w-8 h-8 fill-cyan-400">
          <path d="M16.5 0C12.3 0 9.1 2.2 7.1 6.5C9.2 4.3 11.8 3.8 14.9 4.9C16.7 5.5 18 6.9 19.5 8.4C21.9 10.9 24.8 13.8 30.9 13.8C35.1 13.8 38.3 11.6 40.3 7.3C38.2 9.5 35.6 10 32.5 8.9C30.7 8.3 29.4 6.9 27.9 5.4C25.5 2.9 22.6 0 16.5 0ZM7.1 6.5C2.9 6.5 -0.3 8.7 -2.3 13C-0.2 10.8 2.4 10.3 5.5 11.4C7.3 12 8.6 13.4 10.1 14.9C12.5 17.4 15.4 20.3 21.5 20.3C25.7 20.3 28.9 18.1 30.9 13.8C28.8 16 26.2 16.5 23.1 15.4C21.3 14.8 20 13.4 18.5 11.9C16.1 9.4 13.2 6.5 7.1 6.5Z" />
        </svg>
      );
    case "framer motion":
      return (
        <svg viewBox="0 0 512 512" className="w-8 h-8 fill-foreground">
          <path d="M0 0h256v128H128v128h128v256L0 256V128h128V0H0zM256 0h256v128H384v128h128v256L256 256V128h128V0H256z" />
        </svg>
      );
    case "node.js":
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8 fill-emerald-500">
          <path d="M121 34.5L68 3.9c-2.5-1.4-5.5-1.4-8 0L7 34.5c-2.5 1.4-4 4.1-4 6.9v61.2c0 2.8 1.5 5.5 4 6.9l53 30.6c2.5 1.4 5.5 1.4 8 0l53-30.6c2.5-1.4 4-4.1 4-6.9V41.4c0-2.8-1.5-5.5-4-6.9zM64 13.9l43 24.8l-18.4 10.6L45.6 24.5L64 13.9zM16.9 44.5L55 22.5v44.2L16.9 88.5V44.5zm47.1 69.6L19 92.5l36-20.8v42.4zm8-44.2V22.5l38.1 22v44L72 69.9zm0 10.6v41.9l-36-20.8l36-21.1z" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 256 256" className="w-8 h-8 fill-indigo-500">
          <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm61.2 165.7c-5.8 4.2-12.8 6.7-20.4 6.7-18.3 0-33.1-14.8-33.1-33.1s14.8-33.1 33.1-33.1c7.6 0 14.6 2.5 20.4 6.7v10.9c-5-7.5-13.6-12.5-23.4-12.5-15.5 0-28 12.5-28 28s12.5 28 28 28c9.8 0 18.4-5 23.4-12.5v10.9zm-46.7-56.7h-36.2v17.2h31.9v8.6h-31.9v17.2h36.2v8.6H97.7V83.3h44.8v25.7z" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8 fill-emerald-400">
          <path d="M82.8 1L24 64.9c-2.4 2.6-.5 6.9 3.1 6.9h38.9v55.2c0 3.2 3.9 4.8 6.1 2.5l58.8-63.9c2.4-2.6.5-6.9-3.1-6.9H88.9V3.5c0-3.2-3.9-4.8-6.1-2.5z" />
        </svg>
      );
    case "prisma":
      return (
        <svg viewBox="0 0 256 295" className="w-8 h-8 fill-[#0c344b] dark:fill-[#5a67d8]">
          <path d="M128 0L0 73.9v147.8L128 295.6l128-73.9V73.9L128 0zm103.5 205.8L128 261.2l-103.5-55.4V89.8L128 34.4l103.5 55.4v116z" />
        </svg>
      );
    case "stripe":
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8 fill-[#635bff]">
          <path d="M109 52.8c0-18-9.4-25.8-24.9-25.8-15.9 0-26.6 8.9-26.6 23.1 0 22 30.1 18.5 30.1 28 0 4.2-3.8 6.5-9.3 6.5-7.6 0-14.8-3.1-20.7-6.9L52 92.5c6.8 5 17.5 8.5 27.6 8.5 16.9 0 29.4-8 29.4-24.3 0-22.3-30-18.7-30-28 0-3.8 3.5-5.9 8.6-5.9 6.6 0 12.8 2.3 17.6 5.1l3.8-15.1z" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#2496ed]">
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .101.084.186.186.186zm-2.95.078h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .101.084.186.186.186zm-2.934 0h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186H8.1c-.102 0-.186.084-.186.186v2.112c0 .101.084.186.186.186zm-2.95 0h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186H5.15c-.102 0-.186.084-.186.186v2.112c0 .101.084.186.186.186zm-2.934 0h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186H2.215c-.102 0-.186.084-.186.186v2.112c0 .101.084.186.186.186zm9.26-2.95h2.119c.102 0 .186-.084.186-.186V5.827c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.114c0 .102.084.186.186.186zm-2.95 0h2.119c.102 0 .186-.084.186-.186V5.827c0-.102-.084-.186-.186-.186H8.1c-.102 0-.186.084-.186.186v2.114c0 .102.084.186.186.186zm-2.934 0h2.119c.102 0 .186-.084.186-.186V5.827c0-.102-.084-.186-.186-.186H5.15c-.102 0-.186.084-.186.186v2.114c0 .102.084.186.186.186zm5.884-2.95h2.119c.102 0 .186-.084.186-.186V2.878c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.115c0 .101.084.186.186.186z" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 115 100" className="w-8 h-8 fill-foreground">
          <path d="M57.5 0L115 100H0L57.5 0Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-foreground fill-none" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export function TechStack() {
  const techItems = portfolioData.techStack;
  const [activeTab, setActiveTab] = useState<"All" | "Frontend" | "Backend" | "Database" | "Cloud" | "Tools">("All");

  const filteredItems = activeTab === "All" 
    ? techItems 
    : techItems.filter(item => item.category === activeTab);

  const tabs: ("All" | "Frontend" | "Backend" | "Database" | "Cloud" | "Tools")[] = [
    "All", "Frontend", "Backend", "Database", "Cloud", "Tools"
  ];

  return (
    <section id="tech-stack" className="py-24 bg-background relative z-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
              TECH STACK INTERACTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
              Premium stack for modern SaaS performance.
            </h2>
            <p className="text-muted-foreground text-sm">
              Filter my primary tools to see where my expertise lies. I regularly audit these platforms for web speed, security, and developer ecosystem health.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-secondary/40 border border-border p-1 rounded-xl shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-foreground text-background shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredItems.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl glass-card border border-border flex flex-col items-center justify-center text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary relative overflow-hidden"
            >
              {/* Bottom line hover effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <LogoSVG name={tech.name} />
              </div>

              <span className="font-display font-semibold text-sm text-foreground mb-1 block">
                {tech.name}
              </span>

              <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground block">
                {tech.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
