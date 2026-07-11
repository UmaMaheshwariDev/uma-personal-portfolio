"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = portfolioData.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative z-10 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Everything you need to know about starting a project, contract terms, communication processes, and ongoing codebase handoff.
          </p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-foreground font-semibold hover:bg-secondary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:bg-secondary/50 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base tracking-tight font-display">
                    <HelpCircle className="w-4.5 h-4.5 text-indigo-500 shrink-0" />
                    {faq.question}
                  </span>
                  
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-foreground" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden bg-secondary/15"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border/50 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
