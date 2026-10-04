"use client";

import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import Link from "next/link";

interface AnnouncementBarProps {
  message?: string;
  ctaText?: string;
  ctaHref?: string;
  dismissKey?: string;
}

export default function AnnouncementBar({
  message = "Welcome to Shri Venkatesh Stock Broker Services. Invest with confidence.",
  ctaText = "Open Account →",
  ctaHref = "/open-account",
  dismissKey = "v-announcement-dismissed",
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem(dismissKey);
    if (!isDismissed) {
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, [dismissKey]);

  const handleDismiss = () => {
    localStorage.setItem(dismissKey, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-primary via-primary/95 to-accent text-primary-foreground py-1.5 px-8 sm:px-10 flex items-center justify-center text-xs sm:text-[13px] transition-all duration-200 z-50 shadow-xs">
      <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-center">
        <Bell className="size-3.5 animate-bounce shrink-0" aria-hidden="true" />
        <span className="font-medium text-primary-foreground/95">{message}</span>
        <Link
          href={ctaHref}
          className="font-bold underline decoration-primary-foreground/60 underline-offset-2 hover:decoration-primary-foreground transition-colors ml-1"
        >
          {ctaText}
        </Link>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute right-2 sm:right-3 p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none cursor-pointer"
        aria-label="Dismiss announcement"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
