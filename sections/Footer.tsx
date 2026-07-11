"use client";

import { siteConfig } from "@/config/site";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 64;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-background relative z-10 border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Copyright */}
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <span className="font-display font-bold text-sm tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-[11px] font-mono text-muted-foreground">
            © {currentYear} Uma Maheshwari. All rights reserved.
          </span>
        </div>

        {/* Middle Section: Site Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-semibold text-muted-foreground">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded p-0.5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded p-0.5"
            aria-label="View Resume PDF in a new tab"
          >
            View Resume
          </a>
        </nav>

        {/* Right Section: Back to Top & Social Connect */}
        <div className="flex items-center gap-4">
          {/* Social connect list */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top indicator */}
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-full bg-foreground text-background hover:opacity-90 shadow-md flex items-center justify-center transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Small tech credit line */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-8 border-t border-border/20 pt-6">
        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/60">
          Handcrafted in Next.js + Tailwind CSS + TypeScript + Framer Motion. Built for scalability.
        </span>
      </div>
    </footer>
  );
}
