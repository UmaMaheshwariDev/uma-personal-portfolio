"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Safety fallback: force completion after 1200ms max under any circumstances
    const safetyTimeout = setTimeout(() => {
      onComplete();
    }, 1200);

    const duration = 800; // 800ms total loading count time
    const interval = 20; // Update step interval in ms
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          // Wait 150ms at 100% progress before completing for smooth visual landing
          setTimeout(() => {
            onComplete();
          }, 150);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -50, 
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } 
      }}
      id="global-loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background select-none"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[30%] w-[80%] h-[80%] rounded-full bg-indigo-600/5 blur-[120px] dark:bg-indigo-600/5 animate-pulse-slow" />
        <div className="absolute -bottom-[40%] -right-[30%] w-[80%] h-[80%] rounded-full bg-purple-600/5 blur-[120px] dark:bg-purple-600/5 animate-pulse-slow" />
      </div>

      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Custom Premium Logo Initial Mark */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-black font-display font-bold text-2xl tracking-tighter shadow-xl border border-white/10 dark:border-black/10"
        >
          UM
        </motion.div>

        {/* Percentage Count */}
        <div className="flex justify-between items-baseline w-full mb-2 font-mono text-xs text-muted-foreground/80 tracking-wider">
          <span>INITIALIZING SYSTEM</span>
          <span className="font-semibold text-foreground">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Premium Progress Bar */}
        <div className="w-full h-[2px] bg-secondary rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-foreground shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        
        {/* Minimal Subtext */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-[10px] uppercase font-mono tracking-widest text-muted-foreground"
        >
          Uma Maheshwari Portfolio
        </motion.span>
      </div>
    </motion.div>
  );
}
