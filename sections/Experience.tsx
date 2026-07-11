"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 bg-background relative z-10 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            PROFESSIONAL TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
            Years of building for the production web.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-border/60 pl-8 ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot node */}
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-sm">
                <Briefcase className="w-3 h-3 text-indigo-500" />
              </span>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-border group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary relative">
                {/* Accent tag line */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-indigo-500 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Job Metadata Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-indigo-500">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-xs text-foreground/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
