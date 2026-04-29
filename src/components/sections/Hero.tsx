"use client";

import Link from "next/link";
import { ArrowRight, Shield, Award, Users, MapPin, TrendingUp, BarChart3, Activity } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-16 pb-20 w-full">
      {/* Interactive Ambient Background */}
      <div 
        className="absolute inset-0 z-0 opacity-30 dark:opacity-40 transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-primary) 0%, transparent 40%)`,
          filter: "blur(80px)"
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
              <Shield className="w-3.5 h-3.5" />
              SEBI Registered Intermediary
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Invest with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Clarity & Edge.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-medium">
              Join thousands of investors from retail to HNI leveraging our 15+ years of market expertise. Fast execution, robust technology, and transparent pricing.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
              <Link
                href="/open-account"
                className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 rounded-full text-lg font-semibold shadow-[0_0_40px_-10px_var(--color-primary)] hover:shadow-[0_0_60px_-15px_var(--color-primary)] transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center gap-2")}
              >
                Start Trading Now <ArrowRight className="ml-1 w-5 h-5" />
              </Link>
              <Link
                href="/about/company-overview"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-8 rounded-full font-semibold text-lg hover:bg-muted w-full sm:w-auto border-border/50")}
              >
                Discover Our Platform
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-8 border-t border-border/40">
              {[
                { icon: Award, text: "15+ Years", sub: "Experience" },
                { icon: Shield, text: "SEBI", sub: "Registered" },
                { icon: Users, text: "BSE", sub: "Member" },
                { icon: MapPin, text: "CDSL", sub: "Depository" }
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col gap-1 items-start group cursor-default">
                  <div className="p-2.5 rounded-xl bg-primary/5 text-primary mb-2 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-bold text-lg leading-tight">{badge.text}</span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{badge.sub}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content: Premium Glass Card / Dashboard Mockup */}
          <motion.div 
            className="lg:col-span-5 relative w-full h-full lg:min-h-[600px] flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          >
            {/* Main Glass Panel */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] border border-border/50 bg-background/40 backdrop-blur-2xl shadow-2xl p-6 flex flex-col overflow-hidden group">
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[60px] -z-10 group-hover:bg-accent/30 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] -z-10 group-hover:bg-primary/30 transition-colors duration-500"></div>

              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-muted-foreground font-semibold text-sm">Portfolio Value</h3>
                  <div className="text-3xl font-display font-bold text-foreground">₹24,59,200.50</div>
                </div>
                <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full text-sm font-bold border border-emerald-500/20">
                  <TrendingUp className="w-4 h-4" />
                  +12.4%
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="flex-1 w-full bg-muted/20 rounded-2xl border border-border/30 p-4 flex flex-col justify-end gap-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end px-2 gap-1.5 pb-4 opacity-80">
                  {[40, 30, 50, 45, 70, 60, 80, 75, 90, 85, 100, 95].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-primary/80 to-accent rounded-t-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: "easeOut" }}
                    />
                  ))}
                </div>
                
                {/* Floating Activity Pill */}
                <motion.div 
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
                  <span className="text-xs font-bold text-foreground">Live Market</span>
                </motion.div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-muted/30 border border-border/40 rounded-xl p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                  <BarChart3 className="w-6 h-6 text-primary mb-2" />
                  <div className="font-bold text-sm text-foreground">Analytics</div>
                  <div className="text-xs text-muted-foreground mt-1">Deep insights</div>
                </div>
                <div className="bg-primary text-primary-foreground rounded-xl p-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer flex flex-col justify-between">
                  <TrendingUp className="w-6 h-6 mb-2" />
                  <div>
                    <div className="font-bold text-sm">Quick Trade</div>
                    <div className="text-xs opacity-80 mt-1">Execute instantly</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div 
              className="absolute -right-8 top-12 p-4 bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground">NIFTY 50</div>
                  <div className="text-sm font-bold text-foreground">22,514.65 <span className="text-emerald-500">+0.8%</span></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
