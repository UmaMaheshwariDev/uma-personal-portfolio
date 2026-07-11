"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons";

export function Contact() {

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setFormError("");

    // Simple validation checks
    if (!name.trim()) return setFormError("Please enter your name.");
    if (!/^[a-zA-Z\s.]+$/.test(name.trim())) {
      return setFormError("Please enter a valid name containing only alphabets.");
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return setFormError("Please enter a valid email address.");
    if (!message.trim()) return setFormError("Please enter details about your project.");

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.links.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          "Project Type": projectType || "Not Specified",
          "Preferred Timeline": timeline || "Not Specified",
          message: message.trim(),
          _subject: `New Portfolio Inquiry from ${name.trim()}`
        })
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setProjectType("");
        setTimeline("");
        setMessage("");
        setSubmitSuccess(true);
      } else {
        setFormError("Failed to send inquiry. Please try again or email directly.");
      }
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative z-10 border-t border-border/40">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[10%] -left-[10%] w-[35%] aspect-square rounded-full bg-indigo-600/5 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Whether you need a full-stack MVP built, a custom analytics dashboard, or code performance optimization, I am ready to collaborate.
          </p>
        </div>

        {/* Form & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Contact Info & Status */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl glass-card border border-border">
            <div className="space-y-8">
              {/* Availability tag */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground block">
                  Current Availability
                </span>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    Accepting new projects
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Booking projects starting this month. Let&apos;s align on scopes.
                </p>
              </div>

              {/* Direct email connection */}
              <div className="space-y-3 border-t border-border/50 pt-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-2.5 text-foreground hover:text-indigo-500 transition-colors font-semibold text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-lg p-0.5"
                >
                  <Mail className="w-4.5 h-4.5 text-indigo-500" />
                  {siteConfig.links.email}
                </a>
              </div>

              {/* Social list links */}
              <div className="space-y-3 border-t border-border/50 pt-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground block">
                  Social Channels
                </span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded p-0.5"
                  >
                    <GithubIcon className="w-4 h-4 text-indigo-500" />
                    GitHub — Open Source Codebases
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded p-0.5"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-500" />
                    LinkedIn — Professional Network
                  </a>
                  <a
                    href={siteConfig.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded p-0.5"
                  >
                    <LeetcodeIcon className="w-4 h-4 text-indigo-500" />
                    LeetCode — Algorithmic Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* Closing statement */}
            <div className="border-t border-border/50 pt-8 mt-8 lg:mt-0">
              <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
                * Standard response times are within 24 business hours. Let&apos;s arrange a 15-minute video call to discuss your objectives.
              </p>
            </div>
          </div>

          {/* Right Panel: Form Content */}
          <div className="lg:col-span-7 p-8 rounded-2xl glass-card border border-border relative overflow-hidden flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                /* Success Notification Overlay */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-foreground">Inquiry Received!</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                      Thank you for reaching out. I&apos;ve received your project details and will check them over. I&apos;ll get back to you shortly!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground font-semibold rounded-xl text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* Interactive Form fields */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-semibold text-foreground/95">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 rounded-xl text-sm text-foreground focus:outline-none transition-all placeholder:text-muted-foreground/60"
                      pattern="[A-Za-z\s.]+"
                      title="Please enter only alphabets, spaces, or dots."
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-semibold text-foreground/95">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@startup.com"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 rounded-xl text-sm text-foreground focus:outline-none transition-all placeholder:text-muted-foreground/60"
                      required
                    />
                  </div>

                  {/* Project Type select */}
                  <div className="space-y-2">
                    <label htmlFor="form-project-type" className="text-xs font-semibold text-foreground/95">
                      Project Type
                    </label>
                    <select
                      id="form-project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 rounded-xl text-sm text-foreground/90 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-background">Select project type...</option>
                      <option value="landing-page" className="bg-background">Landing Page</option>
                      <option value="business-website" className="bg-background">Business Website</option>
                      <option value="portfolio-website" className="bg-background">Portfolio Website</option>
                      <option value="full-stack" className="bg-background">Full-Stack Web Application</option>
                      <option value="ai-integration" className="bg-background">AI Integration</option>
                      <option value="api-backend" className="bg-background">API or Backend Development</option>
                      <option value="bug-fixing" className="bg-background">Bug Fixing and Improvements</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>

                  {/* Preferred Timeline input */}
                  <div className="space-y-2">
                    <label htmlFor="form-timeline" className="text-xs font-semibold text-foreground/95">
                      Preferred Timeline
                    </label>
                    <input
                      id="form-timeline"
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="e.g. 2 weeks, 1 month, flexible"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 rounded-xl text-sm text-foreground focus:outline-none transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Message details */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-semibold text-foreground/95">
                      Project Goals & Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you're building, target timelines, and any integration requirements (e.g. Stripe checkout, Supabase databases)..."
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 rounded-xl text-sm text-foreground focus:outline-none transition-all resize-none placeholder:text-muted-foreground/60"
                      required
                    />
                  </div>

                  {/* Error State Banner */}
                  {formError && (
                    <div className="p-4 bg-rose-500/10 text-rose-500 rounded-xl border border-rose-500/20 text-xs font-semibold flex items-center gap-2.5 animate-pulse">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-foreground text-background font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-55 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        Sending details...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Project Inquiry
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
