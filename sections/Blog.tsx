"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export function Blog() {
  const blogs = portfolioData.blogs;

  return (
    <section id="blog" className="py-24 bg-background relative z-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
              TECHNICAL WRITING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
              Insights on code quality, performance, and UX.
            </h2>
            <p className="text-muted-foreground text-sm">
              I share production experiences and research on web development best practices to help teams build faster, cleaner interfaces.
            </p>
          </div>
          
          <button className="px-5 py-3 bg-secondary/80 hover:bg-secondary text-foreground text-xs font-semibold rounded-xl flex items-center gap-1.5 border border-border transition-colors cursor-pointer shrink-0">
            View All Articles
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-border flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              <div>
                {/* Meta header (Category & Date) */}
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  <span className="bg-indigo-600/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 px-2 py-0.5 rounded border border-indigo-200/50 dark:border-indigo-900/50">
                    {blog.category}
                  </span>
                  <span className="text-amber-500 font-bold">{blog.status}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-foreground group-hover:text-indigo-500 transition-colors leading-snug mb-3">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                <span className="text-xs font-semibold text-muted-foreground/60 select-none">
                  {blog.status}
                </span>
                
                <span className="text-xs font-semibold text-muted-foreground/40 flex items-center gap-1 select-none">
                  Draft Preview
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
