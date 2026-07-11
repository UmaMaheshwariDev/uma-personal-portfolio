"use client";

import { useState, useEffect } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileText, X, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Projects() {
  const projects = portfolioData.projects;
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeCaseStudy) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCaseStudy(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCaseStudy]);

  return (
    <section id="projects" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
            Proven products, engineered from concept to production.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            A hand-picked selection of full-stack projects, focusing on high performance, complex integrations, and clean design systems.
          </p>
        </div>

        {/* Projects Layout (Alternating list style) */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Visual Graphic Representation (Left or Right) */}
                <div
                  className={`lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${project.accentColor} p-1 shadow-lg group focus-within:ring-2 focus-within:ring-primary ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="absolute inset-0 bg-black/15 dark:bg-black/35 opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Decorative glass elements mimicking a UI dashboard inside */}
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden flex flex-col justify-between p-6 select-none bg-black/10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 text-white px-2 py-0.5 rounded border border-white/10">
                        {project.category}
                      </span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                      </div>
                    </div>
                    
                    {/* Centered high-impact metric */}
                    {project.metrics && project.metrics.length > 0 ? (
                      <div className="my-auto flex flex-col items-center justify-center text-center">
                        <span className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tighter drop-shadow-md">
                          {project.metrics[0].value}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-white/70 mt-1">
                          {project.metrics[0].label}
                        </span>
                      </div>
                    ) : (
                      <div className="my-auto flex flex-col items-center justify-center text-center">
                        <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight drop-shadow-md">
                          {project.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 mt-2">
                          {project.category}
                        </span>
                      </div>
                    )}

                    <div className="flex items-end justify-between">
                      <span className="font-display font-bold text-xl text-white tracking-tight">
                        {project.title}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">PROD-BUILD v1.0.4</span>
                    </div>
                  </div>
                </div>

                {/* Case Study Details (Left or Right) */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-muted-foreground mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-foreground mb-3">
                    {project.title} — {project.subtitle}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Quantitative Metric Badges */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 border-y border-border/50 py-4 w-full mb-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="text-xs text-muted-foreground font-mono leading-none mb-1.5">{metric.label}</span>
                          <span className="text-lg sm:text-xl font-bold font-display text-foreground tracking-tight">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary text-foreground/80 text-[10px] font-mono rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                    {project.links.caseStudy && (
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="px-5 py-3 bg-foreground text-background font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Read Case Study
                      </button>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 border border-border hover:bg-secondary transition-colors text-foreground font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                      >
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 border border-border hover:bg-secondary transition-colors text-foreground font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                        aria-label={`View code for ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Codebase
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop click closer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="h-16 border-b border-border px-6 flex items-center justify-between shrink-0 bg-secondary/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                    CASE STUDY: {activeCaseStudy.title}
                  </span>
                </div>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                  aria-label="Close case study details"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8">
                {/* Context Header */}
                <div>
                  <h3 className="text-2xl font-bold font-display tracking-tight mb-2">
                    {activeCaseStudy.title} — {activeCaseStudy.subtitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activeCaseStudy.longDescription}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/50 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm">
                      <Cpu className="w-4 h-4" />
                      The Engineering Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeCaseStudy.challenge}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-indigo-500 font-semibold text-sm">
                      <Sparkles className="w-4 h-4" />
                      Our Implementation Solution
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeCaseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Results Section */}
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/80 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-foreground">The Quantitative Result</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeCaseStudy.result}
                    </p>
                  </div>
                </div>

                {/* Links Footer inside Modal */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                  {activeCaseStudy.links.live && (
                    <a
                      href={activeCaseStudy.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-foreground text-background font-semibold rounded-xl text-xs flex items-center gap-1.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                    >
                      Visit Active Site
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeCaseStudy.links.github && (
                    <a
                      href={activeCaseStudy.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-border hover:bg-secondary text-foreground font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      View Codebase
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
