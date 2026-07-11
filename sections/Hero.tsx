"use client";

import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, ShieldCheck, Sparkles, Flame } from "lucide-react";

export function Hero() {
  const { profile } = portfolioData;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Premium Floating Ambient Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[45%] aspect-square rounded-full bg-indigo-600/10 blur-[130px] dark:bg-indigo-600/5 animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] aspect-square rounded-full bg-purple-600/10 blur-[130px] dark:bg-purple-600/5 animate-float-delayed" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-border text-xs font-semibold text-foreground/90 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {profile.availability}
          </motion.div>

          {/* Premium Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6"
          >
            {profile.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8"
          >
            {profile.subheadline}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xl shadow-foreground/5"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-4 bg-secondary/50 border border-border text-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View My Work
            </button>
            <a
              href={siteConfig.resumeUrl}
              download="Uma_FreeLancer.pdf"
              className="px-8 py-4 bg-secondary/50 border border-border text-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
              aria-label="Download Uma's Freelancer Resume PDF"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8 w-full max-w-lg"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-foreground font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-indigo-500" />
                Clean Code
              </div>
              <span className="text-xs text-muted-foreground leading-tight">Structured, readable, and typed</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-foreground font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-purple-500" />
                User Focused
              </div>
              <span className="text-xs text-muted-foreground leading-tight">Fast and mobile-responsive</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-foreground font-semibold text-sm">
                <Flame className="w-4 h-4 text-amber-500" />
                AI Ready
              </div>
              <span className="text-xs text-muted-foreground leading-tight">API chatbot & prompt actions</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Showcase Widget (Interactive Developer IDE/Dashboard mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[5/6] max-w-xl mx-auto hidden sm:block"
        >
          {/* Main IDE Window */}
          <div className="absolute inset-0 bg-[#0c0d12]/95 border border-[#1e2230] shadow-2xl shadow-black/40 rounded-2xl overflow-hidden flex flex-col">
            {/* Header window control bar */}
            <div className="h-11 border-b border-[#1e2230]/70 px-4 flex items-center justify-between bg-[#13151f]/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                um-portfolio-system
              </span>
              <div className="w-12" />
            </div>

            {/* Content area: Simulated Code Editor */}
            <div className="flex-1 p-5 font-mono text-xs overflow-y-auto leading-relaxed text-zinc-400 bg-transparent">
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">1</span>
                <span>
                  <span className="text-indigo-400">const</span> developer = {"{"}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">2</span>
                <span className="pl-4">
                  name: <span className="text-emerald-400">&quot;{siteConfig.name}&quot;</span>,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">3</span>
                <span className="pl-4">
                  role: <span className="text-emerald-400">&quot;Full-Stack Developer&quot;</span>,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">4</span>
                <span className="pl-4">
                  skills: <span className="text-purple-400">[&quot;React&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;, &quot;Spring Boot&quot;]</span>,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">5</span>
                <span className="pl-4">
                  focus: <span className="text-amber-400">&quot;Modern Web Apps &amp; AI API Integration&quot;</span>,
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">6</span>
                <span className="pl-4">
                  availability: <span className="text-sky-400">true</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 text-right select-none w-4">7</span>
                <span>{"};"}</span>
              </div>
              <div className="h-4" />
              <div className="flex items-start gap-3 border-t border-zinc-800/50 pt-4 text-zinc-300">
                <span className="text-zinc-600 text-right select-none w-4">8</span>
                <span>
                  <span className="text-indigo-400">function</span> <span className="text-purple-400">renderProduct</span>() {"{"}
                </span>
              </div>
              <div className="flex items-start gap-3 text-zinc-300">
                <span className="text-zinc-600 text-right select-none w-4">9</span>
                <span className="pl-4">
                  <span className="text-indigo-400">return</span> <span className="text-emerald-400">compileQuality</span>(developer)
                </span>
              </div>
              <div className="flex items-start gap-3 text-zinc-300">
                <span className="text-zinc-600 text-right select-none w-4">10</span>
                <span>{"}"}</span>
              </div>
            </div>
          </div>

          {/* Floating UI Widget 1: Stats Widget */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="absolute -top-6 -right-6 w-44 p-4 rounded-xl border border-border/80 glass-panel shadow-lg flex flex-col gap-1.5 backdrop-blur-xl"
          >
            <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">API Latency</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-display tracking-tight text-emerald-500">42ms</span>
              <span className="text-xs text-muted-foreground font-mono">/avg</span>
            </div>
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-emerald-500" />
            </div>
          </motion.div>

          {/* Floating UI Widget 2: Chart Widget */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 w-52 p-4 rounded-xl border border-border/80 glass-panel shadow-lg flex flex-col gap-2 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border/50 pb-1.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Lighthouse Audit</span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" className="stroke-secondary fill-none" strokeWidth="4" />
                  <circle cx="24" cy="24" r="20" className="stroke-emerald-500 fill-none" strokeWidth="4" strokeDasharray="125" strokeDashoffset="12" />
                </svg>
                <span className="text-xs font-mono font-semibold text-foreground">99</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground">Performance</span>
                <span className="text-[10px] text-muted-foreground leading-none">Best-in-class loading</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-3.5 rounded-full border border-muted-foreground flex justify-center p-[2px]"
        >
          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
