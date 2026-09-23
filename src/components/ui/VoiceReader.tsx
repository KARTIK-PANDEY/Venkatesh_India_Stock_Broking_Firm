"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VoiceReader() {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Accessibility status message for screen readers
  const [statusMessage, setStatusMessage] = useState("Voice reader ready.");

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      requestAnimationFrame(() => setIsSupported(true));

      // Load voices (required in Chrome)
      window.speechSynthesis.getVoices();

      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };

      window.speechSynthesis.onvoiceschanged = loadVoices;

      return () => {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  const handlePlay = () => {
    if (!isSupported) return;

    // Resume if paused
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
      setStatusMessage("Reading resumed.");
      return;
    }

    const LANDING_PAGE_TEXT = `
      Welcome to Shri Venkatesh Stock Broker Services India Private Limited.

      We are a SEBI Registered Intermediary based in Raipur.

      Invest with Clarity and Edge. Join thousands of investors from retail to HNI leveraging our 15 plus years of market expertise. Fast execution, robust technology, and transparent pricing.

      We are proud members of BSE and a CDSL Depository Participant.

      Our core products and services include Equity Trading, Derivatives, Mutual Funds, IPO Services, and Depository Services.

      Why choose us? We offer personalized advisory, robust secure platforms, and dedicated customer support.

      Important Information for Investors. Prevent unauthorized transactions in your account by updating your mobile number and email ID with us.

      Ready to join the network? Open a trading account or partner with us today.

      Thank you for visiting Shri Venkatesh Stock Broker Services. We appreciate your visit and look forward to serving your financial needs.
    `;

    // Stop any existing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(LANDING_PAGE_TEXT.trim());

    // Better pronunciation for Indian English
    utterance.lang = "en-IN";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Select an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (voice) =>
        voice.lang.startsWith("en-IN") || voice.lang.startsWith("en")
    );

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setStatusMessage("Reading page content aloud.");
    };

    utterance.onpause = () => {
      setIsPlaying(false);
      setIsPaused(true);
      setStatusMessage("Reading paused.");
    };

    utterance.onresume = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setStatusMessage("Reading resumed.");
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setStatusMessage("Finished reading page.");
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setStatusMessage("Voice reader encountered an error.");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!isSupported) return;

    window.speechSynthesis.pause();
    setIsPlaying(false);
    setIsPaused(true);
    setStatusMessage("Reading paused.");
  };

  const handleStop = () => {
    if (!isSupported) return;

    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setStatusMessage("Reading stopped.");
  };

  if (!isSupported) return null;

  return (
    <>
      {/* Screen reader announcement region (WCAG 4.1.3) */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {statusMessage}
      </div>

      {/* Floating Voice Reader Widget */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-1.5 p-1.5 bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-full animate-in fade-in slide-in-from-bottom-8 duration-500">
        {/* Speaker Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 ml-1">
          <Volume2 className="w-5 h-5" aria-hidden="true" />
        </div>

        {/* Play / Resume Button */}
        {!isPlaying ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePlay}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold px-4 h-9"
            aria-label={
              isPaused
                ? "Resume reading the page content"
                : "Read page content aloud"
            }
            aria-pressed={isPlaying}
          >
            <Play className="w-4 h-4 mr-2" aria-hidden="true" />
            {isPaused ? "Resume" : "Listen to Page"}
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePause}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold px-4 h-9"
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
            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground w-9 h-9 mr-1"
            title="Stop reading page content"
            aria-label="Stop reading page content"
          >
            <Square className="w-4 h-4" aria-hidden="true" />
          </Button>
        )}
      </div>
    </>
  );
}