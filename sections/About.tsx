"use client";

import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { MapPin, Calendar, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
  const { profile } = portfolioData;

  const philosophies = [
    {
      title: "Business Alignment",
      description: "I don't just write code. I build high-performance products that directly convert visits into revenue, sign-ups, and customer trust."
    },
    {
      title: "Apple-Level Polish",
      description: "Pixel-perfect spacing, fluid micro-interactions, custom animations, and accessibility tags are integrated from the first line of code."
    },
    {
      title: "Direct & Clear Collaboration",
      description: "No agencies or middlemen. We communicate directly via Slack/Discord, sharing daily staging builds to iterate with speed."
    },
    {
      title: "Production Reliability",
      description: "Strict TypeScript typing, resilient error handling, optimized asset loading, and clean architectures keep systems stable as you scale."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative z-10 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] -right-[20%] w-[35%] aspect-square rounded-full bg-indigo-600/5 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            {profile.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
            Bridging pixel-perfect visual design with enterprise-ready system architecture.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Profile details */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 border-y border-border/50 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center border border-border">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-mono tracking-wider font-semibold">Location</div>
                  <div className="text-sm font-semibold text-foreground">{profile.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center border border-border">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-mono tracking-wider font-semibold">Status</div>
                  <div className="text-sm font-semibold text-foreground">Active Freelancing</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.resumeUrl}
                download="Uma_FreeLancer.pdf"
                className="px-6 py-3 border border-border hover:bg-secondary transition-colors rounded-xl text-sm font-semibold flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                aria-label="Download Uma's Freelancer Resume PDF"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary/50 text-foreground hover:bg-secondary transition-colors rounded-xl text-sm font-semibold flex items-center gap-1.5"
              >
                Let&apos;s Work Together
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Philosophies */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {philosophies.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-semibold text-foreground text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
