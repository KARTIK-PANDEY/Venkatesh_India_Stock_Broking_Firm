"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, RefreshCw, VolumeX, ShieldCheck } from "lucide-react";

interface AccessibleCaptchaProps {
  idPrefix?: string;
  onCodeChange?: (code: string) => void;
  onValidate?: (isValid: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

// Unambiguous characters for readability (excludes 0, O, 1, I)
const CAPTCHA_CHARS = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

function generateRandomCode(length = 5): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += CAPTCHA_CHARS.charAt(Math.floor(Math.random() * CAPTCHA_CHARS.length));
  }
  return result;
}

export function AccessibleCaptcha({
  idPrefix = "contact",
  onCodeChange,
  onValidate,
  value,
  onChange,
  error,
  disabled = false,
}: AccessibleCaptchaProps) {
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [screenReaderAnnouncement, setScreenReaderAnnouncement] = useState("");
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Render canvas with distorted characters and noise
  const renderCanvas = useCallback((code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background
    ctx.fillStyle = "#f1f5f9"; // Slate 100
    ctx.fillRect(0, 0, width, height);

    // Decorative random background lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(100, 116, 139, ${0.15 + Math.random() * 0.25})`;
      ctx.lineWidth = 1 + Math.random();
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height
      );
      ctx.stroke();
    }

    // Decorative dots/noise
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(15, 23, 42, ${0.1 + Math.random() * 0.2})`;
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Render each character with slight rotation
    const charSpacing = width / (code.length + 1);
    ctx.textBaseline = "middle";

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const x = (i + 1) * charSpacing;
      const y = height / 2 + (Math.random() * 6 - 3);
      const angle = (Math.random() * 24 - 12) * (Math.PI / 180);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = "bold 24px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
      ctx.fillStyle = "#0f172a"; // High contrast slate 900
      ctx.fillText(char, -7, 0);
      ctx.restore();
    }
  }, []);

  const refreshCaptcha = useCallback(() => {
    const newCode = generateRandomCode(5);
    setCaptchaCode(newCode);
    if (onCodeChange) onCodeChange(newCode);
    if (onValidate) onValidate(false);
    renderCanvas(newCode);
    setScreenReaderAnnouncement("New security verification code generated. You can listen to the audio code using the audio CAPTCHA button.");
  }, [onCodeChange, onValidate, renderCanvas]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    const initialCode = generateRandomCode(5);
    setCaptchaCode(initialCode);
    if (onCodeChange) onCodeChange(initialCode);
    renderCanvas(initialCode);
  }, [onCodeChange, renderCanvas]);

  // Audio CAPTCHA using Web Speech Synthesis
  const playAudioCaptcha = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setScreenReaderAnnouncement(
        `Audio CAPTCHA: The verification code is: ${captchaCode.split("").join(", ")}.`
      );
      return;
    }

    window.speechSynthesis.cancel();

    // Spaced out characters for distinct pronunciation
    const phoneticText = captchaCode
      .split("")
      .map((char) => `${char}.`)
      .join(" ");

    const speechMessage = `Security verification code. Please enter the following 5 characters: ${phoneticText}. I repeat: ${phoneticText}.`;

    const utterance = new SpeechSynthesisUtterance(speechMessage);
    utterance.rate = 0.8; // Slower pace for clarity
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    utterance.onstart = () => {
      setIsPlayingAudio(true);
      setScreenReaderAnnouncement("Playing audio verification code. Please listen carefully.");
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setScreenReaderAnnouncement("Audio playback completed.");
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setScreenReaderAnnouncement(`Verification code: ${captchaCode.split("").join(", ")}`);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    onChange(val);
    if (onValidate) {
      onValidate(val.trim() === captchaCode.trim());
    }
  };

  const inputId = `${idPrefix}-captcha-input`;
  const hintId = `${idPrefix}-captcha-hint`;
  const errorId = `${idPrefix}-captcha-error`;

  return (
    <div className="space-y-3 bg-muted/30 p-4 rounded-xl border border-border/60">
      {/* Live Region for Screen Reader Announcements */}
      <div className="sr-only" role="status" aria-live="polite">
        {screenReaderAnnouncement}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Visual CAPTCHA Canvas */}
        <div className="flex items-center gap-2">
          <div className="rounded-lg overflow-hidden border border-border shadow-xs bg-slate-100 dark:bg-muted/60 shrink-0">
            <canvas
              ref={canvasRef}
              width={160}
              height={44}
              role="img"
              aria-label="Security verification code. If you cannot see the displayed characters, activate the Audio CAPTCHA button to hear the code announced aloud."
              className="block"
            />
          </div>

          {/* Action buttons: Audio & Refresh */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={playAudioCaptcha}
              disabled={disabled || !isClient}
              title="Listen to Audio CAPTCHA"
              aria-label="Listen to Audio CAPTCHA"
              className="p-2 rounded-lg bg-background hover:bg-primary/10 hover:text-primary text-foreground border border-border/60 transition-colors focus:ring-2 focus:ring-primary focus:outline-hidden disabled:opacity-50 cursor-pointer flex items-center justify-center shrink-0"
            >
              {isPlayingAudio ? (
                <VolumeX className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
              ) : (
                <Volume2 className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={refreshCaptcha}
              disabled={disabled || !isClient}
              title="Generate new CAPTCHA code"
              aria-label="Generate new CAPTCHA code"
              className="p-2 rounded-lg bg-background hover:bg-primary/10 hover:text-primary text-foreground border border-border/60 transition-colors focus:ring-2 focus:ring-primary focus:outline-hidden disabled:opacity-50 cursor-pointer flex items-center justify-center shrink-0"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
          <span>GIGW &amp; WCAG accessible verification</span>
        </p>
      </div>

      {/* Input Field */}
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1"
        >
          Verification Code <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id={inputId}
          name="captcha"
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter the 5 characters"
          maxLength={6}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          required
          aria-required="true"
          aria-describedby={`${hintId} ${error ? errorId : ""}`}
          aria-invalid={!!error}
          disabled={disabled}
          className={`w-full bg-background border rounded-lg h-11 px-4 tracking-widest uppercase font-mono font-bold text-base focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground ${
            error ? "border-red-500 focus:ring-red-500" : "border-border/60"
          }`}
        />
        <p id={hintId} className="text-[11px] text-muted-foreground">
          Enter the characters shown above or use the audio button to listen to the code.
        </p>
        {error && (
          <p id={errorId} className="text-xs text-red-600 dark:text-red-400 font-bold" aria-live="polite">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
