"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = portfolioData.skills;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative z-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
            A battle-tested tech stack optimized for performance and DX.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            My skill set spans across the entire product development cycle, from clean front-end interaction designs to robust and scalable database layer mappings.
          </p>
        </div>

        {/* Skills Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="p-8 rounded-2xl glass-card border border-border relative flex flex-col justify-start group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <h3 className="text-lg font-bold font-display tracking-tight text-foreground mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {category.category}
              </h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-xl bg-secondary/60 hover:bg-secondary border border-border text-xs text-foreground/80 hover:text-foreground font-medium transition-all hover:scale-[1.02] shadow-sm select-none cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
