"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Listen to scroll to update background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav highlight
      const scrollPosition = window.scrollY + 100;
      const sections = siteConfig.navItems.map((item) =>
        document.getElementById(item.href.replace("#", ""))
      );

      let current = "";
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      }
      setActiveSection(current ? `#${current}` : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open, and add Escape listener to close it
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = scrolled ? 64 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "h-16 bg-background/75 border-b border-border/50 backdrop-blur-md shadow-sm"
            : "h-20 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-lg p-0.5"
            aria-label="Homepage"
          >
            <span className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-display font-bold text-base tracking-tighter group-hover:scale-105 transition-transform">
              UM
            </span>
            <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-sans text-sm font-medium">
            {siteConfig.navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full transition-colors hover:text-foreground text-muted-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:bg-secondary/40`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-secondary/80 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Block (ThemeToggle + CTA + Hamburger) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden lg:flex items-center gap-1 bg-foreground text-background px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-secondary/50 text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-16 z-30 bg-background/95 backdrop-blur-xl border-b border-border flex flex-col md:hidden"
          >
            <nav className="flex flex-col p-8 gap-4 text-lg font-display font-medium overflow-y-auto">
              {siteConfig.navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="py-2 border-b border-border/50 text-muted-foreground hover:text-foreground flex items-center justify-between"
                >
                  {item.label}
                  <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: siteConfig.navItems.length * 0.05 }}
                className="mt-6 w-full py-3.5 bg-foreground text-background rounded-xl font-semibold flex items-center justify-center gap-1.5 shadow-lg"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
