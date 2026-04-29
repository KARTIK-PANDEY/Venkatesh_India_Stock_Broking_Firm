"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VoiceReader() {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);
    }

    // Stop reading when component unmounts
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if (!isSupported) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    const LANDING_PAGE_TEXT = `
      Welcome to Shri Venkatesh Stock Broker Services India Private Limited. 
      We are a SEBI Registered Intermediary based in Raipur.
      Invest with Clarity and Edge. Join thousands of investors from retail to HNI leveraging our 15 plus years of market expertise. Fast execution, robust technology, and transparent pricing.
      We are proud members of BSE and a CDSL Depository Participant.
      Our core products and services include Equity Trading, Derivatives, Commodity trading, Mutual Funds, and IPO services.
      Why choose us? We offer personalized advisory, robust secure platforms, and dedicated customer support.
      Important Information for Investors: Prevent unauthorized transactions in your account by updating your mobile numbers and email IDs with us.
      Ready to join the network? Open a trading account or partner with us today.
      Thank you for visiting Shri Venkatesh Stock Broker Services. We deeply appreciate your time and look forward to serving your financial needs!
    `;

    // Cancel any stuck speech immediately
    window.speechSynthesis.cancel();

    // Create the most vanilla utterance possible
    const utterance = new SpeechSynthesisUtterance(LANDING_PAGE_TEXT.trim());

    // We only slightly slow it down for clarity, no custom voices, no custom languages
    utterance.rate = 0.9;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      console.error("Speech synthesis error:", e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    // Speak synchronously to avoid Autoplay restrictions
    window.speechSynthesis.speak(utterance);

    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleStop = () => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-1.5 p-1.5 bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-full animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 ml-1">
        <Volume2 className="w-5 h-5" />
      </div>

      {!isPlaying ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePlay}
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold px-4 h-9"
          aria-label={isPaused ? "Resume reading" : "Read page content aloud"}
        >
          <Play className="w-4 h-4 mr-2" /> {isPaused ? "Resume" : "Listen to Page"}
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePause}
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold px-4 h-9"
          aria-label="Pause reading"
        >
          <Pause className="w-4 h-4 mr-2" /> Pause
        </Button>
      )}

      {(isPlaying || isPaused) && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleStop}
          className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground w-9 h-9 mr-1"
          title="Stop reading"
          aria-label="Stop reading"
        >
          <Square className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
