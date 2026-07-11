"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Layers, MonitorPlay, BarChart3, Cpu, Zap, ArrowRight, Check } from "lucide-react";

const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  MonitorPlay,
  BarChart3,
  Cpu,
  Zap
};

export function Services() {
  const services = portfolioData.services;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-background relative z-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
            Services designed to launch, scale, and polish your web products.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            I engineer web systems that combine production-grade reliability with state-of-the-art interactive layouts.
          </p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconsMap[service.iconName] || Layers;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="p-8 rounded-2xl glass-card border border-border relative flex flex-col items-start justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Popular Badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-indigo-600/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/50">
                    {service.badge}
                  </span>
                )}

                <div className="w-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-snug">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleScrollToContact}
                  className="mt-auto w-full py-3 bg-secondary/80 hover:bg-secondary text-foreground text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 border border-border transition-colors cursor-pointer group-hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                >
                  Inquire Service
                  <ArrowRight className="w-3.5 h-3.5 opacity-55 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
