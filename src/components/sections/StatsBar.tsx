"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Registered Broker", value: "SEBI", suffix: "" },
  { label: "Exchange Member", value: "BSE", suffix: "" },
  { label: "Serving Since 2010", value: "Raipur", suffix: "" },
];

export default function StatsBar() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animateCounts();
    }
  }, [isInView]);

  const animateCounts = () => {
    STATS.forEach((stat, idx) => {
      if (typeof stat.value === "number") {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => {
              const next = [...prev];
              next[idx] = end;
              return next;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const next = [...prev];
              next[idx] = Math.floor(start);
              return next;
            });
          }
        }, 16);
      }
    });
  };

  return (
    <div ref={containerRef} className="w-full bg-muted/30 backdrop-blur-md border-y border-border/50 py-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center px-8 lg:border-r border-border/50 last:border-r-0 group"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3 group-hover:scale-110 transition-transform duration-500 group-hover:text-primary">
                {typeof stat.value === "number" ? (
                  <>{counts[idx]}<span className="text-primary">{stat.suffix}</span></>
                ) : (
                  <span className="text-3xl md:text-4xl">{stat.value}</span>
                )}
              </div>
              <div className="text-xs uppercase font-bold tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
