"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, Check, X } from "lucide-react";

interface ModalNotice {
  id: number;
  title: string;
  text: string;
}

const MODAL_NOTICES: ModalNotice[] = [
  {
    id: 1,
    title: "Prevent Unauthorized Transactions",
    text: "Prevent Unauthorized Transactions in your demat account --> Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from CDSL on the same day......................issued in the interest of investors.",
  },
  {
    id: 2,
    title: "One-Time KYC Process",
    text: "KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.",
  },
  {
    id: 3,
    title: "ASBA Facility for IPO Subscription",
    text: "No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account.",
  },
];

export default function StatutoryModalSequence() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Trigger immediately on page load (window.onload)
    const triggerModal = () => {
      setIsOpen(true);
    };

    if (document.readyState === "complete") {
      triggerModal();
    } else {
      window.addEventListener("load", triggerModal);
      const timer = setTimeout(triggerModal, 150);
      return () => {
        window.removeEventListener("load", triggerModal);
        clearTimeout(timer);
      };
    }
  }, []);

  // Auto focus the primary button when step changes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        nextButtonRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isOpen]);

  const handleNext = () => {
    if (currentIndex < MODAL_NOTICES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const isFinalStep = currentIndex === MODAL_NOTICES.length - 1;
  const currentNotice = MODAL_NOTICES[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          key="statutory-alert-card"
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-24 sm:top-28 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] bg-background/98 dark:bg-background/95 backdrop-blur-xl border-2 border-border/80 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(11,37,69,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-foreground overflow-hidden"
          role="region"
          aria-labelledby="statutory-modal-tag"
          aria-describedby="statutory-modal-content"
        >
          {/* Top colored accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-primary to-accent"
            aria-hidden="true"
          />

          {/* Header section with top tag and dismiss X */}
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-border/60">
            <div
              id="statutory-modal-tag"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-[11px] font-bold uppercase tracking-wider"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true" />
              <span>Attention Investors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                {currentIndex + 1} / {MODAL_NOTICES.length}
              </span>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close statutory notice"
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Step progress pills */}
          <div className="flex gap-1.5 my-3" aria-label="Notice sequence progress">
            {MODAL_NOTICES.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  idx === currentIndex
                    ? "bg-emerald-600 dark:bg-emerald-500"
                    : idx < currentIndex
                    ? "bg-emerald-600/40 dark:bg-emerald-500/40"
                    : "bg-muted"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Main content body */}
          <div className="py-1.5">
            <h2 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" aria-hidden="true" />
              <span>{currentNotice.title}</span>
            </h2>

            <div
              id="statutory-modal-content"
              className="bg-muted/40 border border-border/60 rounded-xl p-3.5 text-xs sm:text-[13px] leading-relaxed text-foreground font-medium max-h-[160px] overflow-y-auto"
            >
              {currentNotice.text}
            </div>
          </div>

          {/* Interactive Button Row */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <div>
              {currentIndex > 0 ? (
                <button
                  id="statutory-prev-btn"
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center justify-center gap-1 bg-muted/80 hover:bg-muted text-foreground font-semibold text-xs sm:text-sm py-2 px-3.5 rounded-lg border border-border/70 transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                >
                  <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}
            </div>

            <div className="flex items-center gap-2">
              {!isFinalStep ? (
                <button
                  id="statutory-next-btn"
                  ref={nextButtonRef}
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-2 px-5 rounded-lg shadow-md shadow-emerald-900/20 transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              ) : (
                <button
                  id="statutory-close-btn"
                  ref={nextButtonRef}
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-black active:bg-slate-950 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs sm:text-sm py-2 px-5 rounded-lg shadow-md transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-500/50"
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Close &amp; Enter Site</span>
                </button>
              )}
            </div>
          </div>

          {/* Consistent Footer Broker Branding */}
          <div className="pt-3 mt-3.5 border-t border-border/60 text-center text-[10px] text-muted-foreground leading-tight space-y-0.5">
            <p className="font-bold text-foreground">
              Shri Venkatesh Stock Broker Services India Pvt Ltd (6434)
            </p>
            <p>C- 21/22, Shyam Market, 1st Floor, Pandri, Raipur (C.G.)</p>
            <p>Tele:- 0771-4059071/72</p>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
