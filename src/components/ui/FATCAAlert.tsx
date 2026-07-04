"use client";

import { useEffect, useState } from "react";
import { X, ShieldAlert, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, getFileUrl } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function FATCAAlert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage for dismissal state
    const isDismissed = localStorage.getItem("v-fatca-dismissed");
    if (!isDismissed) {
      // Delay showing the popup slightly for a premium feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("v-fatca-dismissed", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-background/95 dark:bg-background/90 backdrop-blur-md border border-border/80 shadow-2xl rounded-3xl p-6 overflow-hidden"
          role="alert"
          aria-live="assertive"
        >
          {/* Top colored accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Dismiss FATCA notice"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex gap-4 items-start pr-6 mt-1">
            <div className="p-3 bg-amber-500/10 text-amber-600 rounded-2xl shrink-0">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-base mb-1">
                FATCA Self Certification
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                If your Demat account was opened between <strong>July 1, 2014</strong> and <strong>August 31, 2015</strong>, submit your FATCA declaration urgently.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 mt-2">
            <a
              href={getFileUrl("/download/Corporate Self Certification.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full rounded-xl text-xs font-bold gap-2 py-2.5 h-auto justify-start border-border/60 hover:bg-amber-500/10 hover:text-amber-600 hover:border-amber-500/30 transition-all"
              )}
            >
              <Download className="w-3.5 h-3.5" /> Corporate Self-Certificate Form
            </a>
            <a
              href={getFileUrl("/download/Individual Self declaration.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full rounded-xl text-xs font-bold gap-2 py-2.5 h-auto justify-start border-border/60 hover:bg-amber-500/10 hover:text-amber-600 hover:border-amber-500/30 transition-all"
              )}
            >
              <Download className="w-3.5 h-3.5" /> Individual Self-Declaration Form
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
