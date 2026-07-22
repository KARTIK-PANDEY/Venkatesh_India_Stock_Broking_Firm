"use client";

import { useState, useEffect, useRef } from "react";
import { Accessibility, Sliders, X, RotateCcw, Type, AlignLeft, Eye, EyeOff, Link2 } from "lucide-react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Lazy state initializers to load preferences safely on client
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">((): "normal" | "large" | "xlarge" => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("a11y-font-size");
      if (stored === "normal" || stored === "large" || stored === "xlarge") {
        return stored;
      }
    }
    return "normal";
  });

  const [letterSpacing, setLetterSpacing] = useState<"normal" | "wide" | "xwide">((): "normal" | "wide" | "xwide" => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("a11y-letter-spacing");
      if (stored === "normal" || stored === "wide" || stored === "xwide") {
        return stored;
      }
    }
    return "normal";
  });

  const [lineHeight, setLineHeight] = useState<"normal" | "comfortable" | "spacious">((): "normal" | "comfortable" | "spacious" => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("a11y-line-height");
      if (stored === "normal" || stored === "comfortable" || stored === "spacious") {
        return stored;
      }
    }
    return "normal";
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("a11y-high-contrast") === "true";
    }
    return false;
  });

  const [monochrome, setMonochrome] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("a11y-monochrome") === "true";
    }
    return false;
  });

  const [dyslexicFont, setDyslexicFont] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("a11y-dyslexic") === "true";
    }
    return false;
  });

  const [readingMask, setReadingMask] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("a11y-reading-mask") === "true";
    }
    return false;
  });

  const [linksHighlight, setLinksHighlight] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("a11y-links-highlight") === "true";
    }
    return false;
  });

  // Reading mask mouse & touch coordinate tracking
  const [mouseY, setMouseY] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerHeight / 2;
    }
    return 300;
  });

  // Handle mount state to prevent Next.js hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Keyboard accessibility & focus trapping for dialog
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Auto focus the close button or modal container
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const firstBtn = modalRef.current.querySelector<HTMLElement>("button");
        if (firstBtn) firstBtn.focus();
      }
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!readingMask) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setMouseY(e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [readingMask]);

  // Apply settings to the document root element
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    // Apply Font Size
    let fsVal = "100%";
    if (fontSize === "large") fsVal = "110%";
    else if (fontSize === "xlarge") fsVal = "120%";
    root.style.setProperty("--accessibility-font-size", fsVal);
    localStorage.setItem("a11y-font-size", fontSize);

    // Apply Letter Spacing
    let lsVal = "normal";
    if (letterSpacing === "wide") lsVal = "0.08em";
    else if (letterSpacing === "xwide") lsVal = "0.15em";
    root.style.setProperty("--accessibility-letter-spacing", lsVal);
    localStorage.setItem("a11y-letter-spacing", letterSpacing);

    // Apply Line Height
    let lhVal = "1.5";
    if (lineHeight === "comfortable") lhVal = "1.8";
    else if (lineHeight === "spacious") lhVal = "2.1";
    root.style.setProperty("--accessibility-line-height", lhVal);
    localStorage.setItem("a11y-line-height", lineHeight);

    // Apply High Contrast
    if (highContrast) {
      root.classList.add("accessibility-high-contrast");
    } else {
      root.classList.remove("accessibility-high-contrast");
    }
    localStorage.setItem("a11y-high-contrast", String(highContrast));

    // Apply Monochrome
    if (monochrome) {
      root.classList.add("accessibility-monochrome");
    } else {
      root.classList.remove("accessibility-monochrome");
    }
    localStorage.setItem("a11y-monochrome", String(monochrome));

    // Apply Dyslexic Font
    if (dyslexicFont) {
      root.classList.add("accessibility-dyslexic");
    } else {
      root.classList.remove("accessibility-dyslexic");
    }
    localStorage.setItem("a11y-dyslexic", String(dyslexicFont));

    // Apply Links Highlight
    if (linksHighlight) {
      root.classList.add("accessibility-links-highlight");
    } else {
      root.classList.remove("accessibility-links-highlight");
    }
    localStorage.setItem("a11y-links-highlight", String(linksHighlight));

    // Save Reading Mask setting
    localStorage.setItem("a11y-reading-mask", String(readingMask));

  }, [fontSize, letterSpacing, lineHeight, highContrast, monochrome, dyslexicFont, linksHighlight, readingMask, mounted]);

  // Reset to default settings
  const handleReset = () => {
    setFontSize("normal");
    setLetterSpacing("normal");
    setLineHeight("normal");
    setHighContrast(false);
    setMonochrome(false);
    setDyslexicFont(false);
    setReadingMask(false);
    setLinksHighlight(false);
  };

  // If not mounted (during SSR and first client hydration pass), render ONLY the footer trigger link
  if (!mounted) {
    return (
      <button
        className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
        title="Open Accessibility Preferences"
        aria-label="Accessibility Preferences"
      >
        <Accessibility className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
        Accessibility Preferences
      </button>
    );
  }

  return (
    <>
      {/* 1. Footer Trigger Text Link */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
        title="Open Accessibility Preferences"
        aria-label="Accessibility Preferences"
      >
        <Accessibility className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
        Accessibility Preferences
      </button>

      {/* 2. Floating Action Button (FAB) - Placed on the RIGHT side to avoid overlapping Audio Player */}
      <div className="fixed bottom-6 right-6 z-[9990]">
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none" />
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-primary-foreground/20 cursor-pointer group"
          title="Open Accessibility Menu"
          aria-label="Accessibility Menu"
        >
          <Accessibility className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-105 transition-transform" aria-hidden="true" />
        </button>
      </div>

      {/* 3. Reading Mask Focus Guide Overlay */}
      {readingMask && (
        <div
          className="fixed inset-0 pointer-events-none z-[9998] transition-all duration-75"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) calc(${mouseY}px - 35px), transparent calc(${mouseY}px - 35px), transparent calc(${mouseY}px + 35px), rgba(0, 0, 0, 0.45) calc(${mouseY}px + 35px), rgba(0, 0, 0, 0.45) 100%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 4. Modal Preferences Panel */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Modal Card */}
          <div 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-dialog-title"
            className="relative w-full max-w-md bg-background border border-border/70 rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="bg-primary/10 text-primary p-2.5 rounded-2xl">
                  <Accessibility className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="a11y-dialog-title" className="font-display font-bold text-foreground text-lg">Accessibility Preferences</h3>
                  <p className="text-xs text-muted-foreground">Adjust formatting for easier reading</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close accessibility panel (Press Escape)"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Content Adjusters */}
            <div className="space-y-6">
              {/* Adjustment Group: Text Size */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5" aria-hidden="true" /> Text Size
                </label>
                <div className="grid grid-cols-3 gap-2" role="group" aria-label="Text size options">
                  {(["normal", "large", "xlarge"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      aria-pressed={fontSize === size}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${fontSize === size
                        ? "bg-primary border-primary text-primary-foreground shadow-xs"
                        : "bg-muted/30 border-border/50 text-foreground/80 hover:bg-muted"
                        }`}
                    >
                      {size === "normal" ? "Normal" : size === "large" ? "Large" : "Extra Large"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Adjustment Group: Letter Spacing */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <AlignLeft className="w-3.5 h-3.5 rotate-90" aria-hidden="true" /> Letter Spacing
                </label>
                <div className="grid grid-cols-3 gap-2" role="group" aria-label="Letter spacing options">
                  {(["normal", "wide", "xwide"] as const).map((space) => (
                    <button
                      key={space}
                      onClick={() => setLetterSpacing(space)}
                      aria-pressed={letterSpacing === space}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${letterSpacing === space
                        ? "bg-primary border-primary text-primary-foreground shadow-xs"
                        : "bg-muted/30 border-border/50 text-foreground/80 hover:bg-muted"
                        }`}
                    >
                      {space === "normal" ? "Normal" : space === "wide" ? "Wide" : "Extra Wide"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Adjustment Group: Line Height */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <AlignLeft className="w-3.5 h-3.5" aria-hidden="true" /> Line Spacing
                </label>
                <div className="grid grid-cols-3 gap-2" role="group" aria-label="Line spacing options">
                  {(["normal", "comfortable", "spacious"] as const).map((height) => (
                    <button
                      key={height}
                      onClick={() => setLineHeight(height)}
                      aria-pressed={lineHeight === height}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${lineHeight === height
                        ? "bg-primary border-primary text-primary-foreground shadow-xs"
                        : "bg-muted/30 border-border/50 text-foreground/80 hover:bg-muted"
                        }`}
                    >
                      {height === "normal" ? "Normal" : height === "comfortable" ? "Comfortable" : "Spacious"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles Group */}
              <div className="grid grid-cols-1 gap-4 border-t border-border/40 pt-5">
                {/* Contrast Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="text-muted-foreground">
                      <Eye className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">High Contrast</p>
                      <p className="text-[11px] text-muted-foreground">For sharp text readability</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    role="switch"
                    aria-checked={highContrast}
                    aria-label="High Contrast Mode"
                    className={`relative w-11 h-6 rounded-full transition-all cursor-pointer ${highContrast ? "bg-primary" : "bg-muted border border-border"
                      }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-xs ${highContrast ? "right-1" : "left-1"
                        }`}
                    />
                  </button>
                </div>

                {/* Monochrome Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="text-muted-foreground">
                      <EyeOff className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Monochrome Mode</p>
                      <p className="text-[11px] text-muted-foreground">Remove all colors from site</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMonochrome(!monochrome)}
                    role="switch"
                    aria-checked={monochrome}
                    aria-label="Monochrome Mode"
                    className={`relative w-11 h-6 rounded-full transition-all cursor-pointer ${monochrome ? "bg-primary" : "bg-muted border border-border"
                      }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-xs ${monochrome ? "right-1" : "left-1"
                        }`}
                    />
                  </button>
                </div>

                {/* Dyslexic Font Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="text-muted-foreground">
                      <Type className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Dyslexic Font</p>
                      <p className="text-[11px] text-muted-foreground">Use custom friendly typeface</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setDyslexicFont(!dyslexicFont)}
                    role="switch"
                    aria-checked={dyslexicFont}
                    aria-label="Dyslexic Font Mode"
                    className={`relative w-11 h-6 rounded-full transition-all cursor-pointer ${dyslexicFont ? "bg-primary" : "bg-muted border border-border"
                      }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-xs ${dyslexicFont ? "right-1" : "left-1"
                        }`}
                    />
                  </button>
                </div>

                {/* Reading Mask Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="text-muted-foreground">
                      <Sliders className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Reading Mask</p>
                      <p className="text-[11px] text-muted-foreground">Horizontal focus band follows cursor</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setReadingMask(!readingMask)}
                    role="switch"
                    aria-checked={readingMask}
                    aria-label="Reading Mask Mode"
                    className={`relative w-11 h-6 rounded-full transition-all cursor-pointer ${readingMask ? "bg-primary" : "bg-muted border border-border"
                      }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-xs ${readingMask ? "right-1" : "left-1"
                        }`}
                    />
                  </button>
                </div>

                {/* Links Highlight Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="text-muted-foreground">
                      <Link2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Highlight Links</p>
                      <p className="text-[11px] text-muted-foreground">Underline and highlight all active links</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setLinksHighlight(!linksHighlight)}
                    role="switch"
                    aria-checked={linksHighlight}
                    aria-label="Highlight Links Mode"
                    className={`relative w-11 h-6 rounded-full transition-all cursor-pointer ${linksHighlight ? "bg-primary" : "bg-muted border border-border"
                      }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-xs ${linksHighlight ? "right-1" : "left-1"
                        }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer / Reset Action */}
            <div className="flex items-center justify-between border-t border-border/40 pt-5 mt-6">
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-500 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                Reset Defaults
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground py-2 px-5 text-xs font-bold rounded-xl hover:bg-primary/95 transition-all shadow-md cursor-pointer"
              >
                Apply Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
