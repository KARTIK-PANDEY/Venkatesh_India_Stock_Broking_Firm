"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

export default function VoiceReader() {
  const pathname = usePathname();
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Voice reader ready.");

  const chunksRef = useRef<string[]>([]);
  const currentChunkIndexRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const speakChunkRef = useRef<(index: number) => void>(() => {});

  // Initialize SpeechSynthesis
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      requestAnimationFrame(() => setIsSupported(true));

      window.speechSynthesis.getVoices();
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.onvoiceschanged = loadVoices;

      // Listen for text selection
      const handleSelectionChange = () => {
        const sel = window.getSelection()?.toString().trim();
        setHasSelection(!!sel && sel.length > 3);
      };
      document.addEventListener("selectionchange", handleSelectionChange);

      return () => {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
        document.removeEventListener("selectionchange", handleSelectionChange);
      };
    }
  }, []);

  // Stop reading when route changes
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      chunksRef.current = [];
      currentChunkIndexRef.current = 0;
      isPlayingRef.current = false;
      isPausedRef.current = false;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPlaying(false);
      setIsPaused(false);
      setStatusMessage("Page changed. Voice reader ready.");
    }
  }, [pathname]);

  // Extract readable text dynamically from the actual page content
    // Extract readable text dynamically from the actual page content
  const extractPageContent = useCallback((): { title: string; text: string } => {
    const isHomePage = pathname === "/";

    // 1. Selected text still wins everywhere
    const selection =
      typeof window !== "undefined" ? window.getSelection()?.toString().trim() : "";
    if (selection && selection.length > 3) {
      return { title: "Selected content", text: selection };
    }

    // 2. Header content: only build this on the home page
    let logoText = "";
    let headerText = "";

    if (isHomePage) {
      const logoImg = document.querySelector("header img[alt], header a[aria-label] img");
      const logoLink = document.querySelector("header a[aria-label]");
      if (logoImg?.getAttribute("alt")) {
        logoText = logoImg.getAttribute("alt") || "";
      } else if (logoLink?.getAttribute("aria-label")) {
        logoText = logoLink.getAttribute("aria-label") || "";
      }
      if (!logoText) {
        logoText = "Shri Venkatesh Stock Broker Services India Pvt Ltd Logo";
      }

      const headerParts: string[] = [];

      const announcementBtn = document.querySelector("[aria-label='Dismiss announcement']");
      if (announcementBtn?.parentElement) {
        const annText = announcementBtn.parentElement.textContent?.trim().replace(/\s+/g, " ");
        if (annText) headerParts.push(annText);
      }

      const navItems: string[] = [];
      const navNodes = document.querySelectorAll(
        "header nav[aria-label='Primary Navigation'] button, header nav[aria-label='Primary Navigation'] a[href]"
      );
      navNodes.forEach((node) => {
        const text = node.textContent?.trim();
        if (text && !navItems.includes(text) && !["Login", "Open Account"].includes(text)) {
          navItems.push(text);
        }
      });

      if (navItems.length === 0) {
        navItems.push(
          "About Us",
          "Products and Services",
          "Compliance",
          "Investor Resources",
          "Market",
          "Contact Us"
        );
      }
      headerParts.push(`Header Navigation: ${navItems.join(", ")}.`);
      headerParts.push(`Header Actions: Login, Open Account.`);

      headerText = headerParts.join(" ");
    }

    // 3. Main content
    const mainElement =
      document.getElementById("main-content") ||
      document.querySelector("main") ||
      document.body;

    if (!mainElement) {
      const combined = `${logoText}. ${headerText} ${document.title || ""}`.trim();
      return { title: "Page", text: combined };
    }

    // Clone element to safely remove non-readable elements
    const clone = mainElement.cloneNode(true) as HTMLElement;

    const selectorsToRemove = [
      "header",
      "footer",
      "button",
      "script",
      "style",
      "svg",
      "canvas",
      "input",
      "select",
      "textarea",
      "[aria-hidden='true']",
      ".sr-only",
      "[data-voice-skip='true']",
    ];

    selectorsToRemove.forEach((selector) => {
      clone.querySelectorAll(selector).forEach((el) => el.remove());
    });

    clone.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
      const text = heading.textContent?.trim();
      if (text) heading.textContent = ` ${text}. `;
    });

    clone.querySelectorAll("p").forEach((p) => {
      const text = p.textContent?.trim();
      if (text) p.textContent = ` ${text}. `;
    });

    clone.querySelectorAll("li").forEach((li) => {
      const text = li.textContent?.trim();
      if (text) li.textContent = ` ${text}. `;
    });

    clone.querySelectorAll("th, td").forEach((cell) => {
      const text = cell.textContent?.trim();
      if (text) cell.textContent = ` ${text}, `;
    });

    const rawText = clone.innerText || clone.textContent || "";
    const cleanText = rawText
      .replace(/\s+/g, " ")
      .replace(/([.!?])\s*([.!?])/g, "$1")
      .trim();

        const pageTitle = document.title ? document.title.split("|")[0].trim() : "";

    // 4. Assemble the speech sequence
    const speechSequence: string[] = [];
    if (isHomePage) {
      speechSequence.push(
    "Welcome to Shri Venkatesh Stock Broker Services India Private Limited website."
  ); 
      if (logoText) speechSequence.push(`${logoText}.`);
      if (headerText) speechSequence.push(headerText); // ... Header Actions: Login, Open Account.
      speechSequence.push(`${COMPANY_INFO.name}.`);          // company name after Open Account
      speechSequence.push("Home Page.");                // then Home Page
    }
    if (cleanText) speechSequence.push(cleanText);

    const fullText = speechSequence.join(" ").replace(/\s+/g, " ").trim();

    return {
      title: isHomePage ? "Home Page" : pageTitle || "Current Page",
      text: fullText || "No readable text found on this page.",
    };
  }, [pathname]); // pathname must be a dependency

  // Split text into natural sentence chunks to prevent browser speech cutoff
  const splitIntoChunks = (text: string): string[] => {
    const rawMatches = text.match(/[^.!?]+(?:[.!?]+|$)/g) || [text];
    const chunks: string[] = [];
    let currentChunk = "";

    for (const sentence of rawMatches) {
      const trimmed = sentence.trim();
      if (!trimmed) continue;

      if ((currentChunk + " " + trimmed).length < 200) {
        currentChunk = currentChunk ? `${currentChunk} ${trimmed}` : trimmed;
      } else {
        if (currentChunk) chunks.push(currentChunk);
        currentChunk = trimmed;
      }
    }

    if (currentChunk) chunks.push(currentChunk);
    return chunks.length > 0 ? chunks : [text];
  };

  const getBestVoice = (): SpeechSynthesisVoice | null => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => v.lang.startsWith("en-IN")) ||
      voices.find((v) => v.lang.startsWith("en-GB")) ||
      voices.find((v) => v.lang.startsWith("en-US")) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0] ||
      null
    );
  };

  const speakChunk = useCallback((index: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const chunks = chunksRef.current;

    if (index >= chunks.length || !isPlayingRef.current) {
      setIsPlaying(false);
      setIsPaused(false);
      isPlayingRef.current = false;
      isPausedRef.current = false;
      setStatusMessage("Finished reading page content.");
      return;
    }

    currentChunkIndexRef.current = index;
    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = "en-IN";
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voice = getBestVoice();
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      if (isPlayingRef.current && !isPausedRef.current) {
        speakChunkRef.current(index + 1);
      }
    };

    utterance.onerror = (e) => {
      if (e.error === "canceled" || e.error === "interrupted") {
        return;
      }
      if (isPlayingRef.current && !isPausedRef.current) {
        speakChunkRef.current(index + 1);
      }
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    speakChunkRef.current = speakChunk;
  }, [speakChunk]);

  const handlePlay = () => {
    if (!isSupported || typeof window === "undefined") return;

    // Resume if paused
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
      isPlayingRef.current = true;
      isPausedRef.current = false;
      setStatusMessage("Reading resumed.");
      return;
    }

    // Stop existing audio
    window.speechSynthesis.cancel();

    // Extract dynamic content from active page
    const { title, text } = extractPageContent();
    const chunks = splitIntoChunks(text);

    chunksRef.current = chunks;
    currentChunkIndexRef.current = 0;
    isPlayingRef.current = true;
    isPausedRef.current = false;

    setIsPlaying(true);
    setIsPaused(false);
    setStatusMessage(`Reading ${title} aloud.`);

    speakChunk(0);
  };

  const handlePause = () => {
    if (!isSupported || typeof window === "undefined") return;
    window.speechSynthesis.pause();
    isPlayingRef.current = false;
    isPausedRef.current = true;
    setIsPlaying(false);
    setIsPaused(true);
    setStatusMessage("Reading paused.");
  };

  const handleStop = () => {
    if (!isSupported || typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    chunksRef.current = [];
    currentChunkIndexRef.current = 0;
    isPlayingRef.current = false;
    isPausedRef.current = false;
    setIsPlaying(false);
    setIsPaused(false);
    setStatusMessage("Reading stopped.");
  };

  if (!isSupported) return null;

  return (
    <>
      {/* Screen reader announcement region (WCAG 4.1.3) */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {statusMessage}
      </div>

      {/* Floating Voice Reader Widget */}
      <aside
        aria-label="Page Voice Reader"
        className="fixed bottom-8 left-8 z-50 flex items-center gap-1.5 p-1.5 bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-full animate-in fade-in slide-in-from-bottom-8 duration-500"
      >
        {/* Speaker Icon */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 ml-1"
          aria-hidden="true"
        >
          <Volume2 className="w-5 h-5" aria-hidden="true" />
        </div>

        {/* Play / Resume Button */}
        {!isPlaying ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePlay}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold px-4 h-9 cursor-pointer"
            aria-label={
              isPaused
                ? "Resume reading page content"
                : hasSelection
                ? "Listen to Selection"
                : "Listen to Page"
            }
            aria-pressed={isPlaying}
          >
            <Play className="w-4 h-4 mr-2" aria-hidden="true" />
            {isPaused ? "Resume" : hasSelection ? "Listen to Selection" : "Listen to Page"}
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePause}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold px-4 h-9 cursor-pointer"
            aria-label="Pause reading page content"
            aria-pressed={isPaused}
          >
            <Pause className="w-4 h-4 mr-2" aria-hidden="true" />
            Pause
          </Button>
        )}

        {/* Stop Button */}
        {(isPlaying || isPaused) && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleStop}
            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground w-9 h-9 mr-1 cursor-pointer"
            title="Stop reading page content"
            aria-label="Stop reading page content"
          >
            <Square className="w-4 h-4" aria-hidden="true" />
          </Button>
        )}
      </aside>
    </>
  );
}
