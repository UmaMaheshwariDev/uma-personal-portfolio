"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Extract the numeric portion and any suffixes (+, %)
  const numValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numValue, {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1] as const // Out-expo easing
      });
      return controls.stop;
    }
  }, [inView, numValue, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}

export function Stats() {
  const stats = portfolioData.stats;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="stats" className="py-16 bg-background relative z-10 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-card relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Subtle accent hover indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground mb-2">
                <Counter value={stat.value} />
              </div>
              
              <div className="text-sm font-semibold text-foreground/90 mb-1 leading-snug">
                {stat.label}
              </div>
              
              <div className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
