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
    <div className="relative w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-2 px-4 flex items-center justify-center text-sm md:text-base transition-all duration-300 z-50">
      <div className="flex items-center gap-3">
        <Bell className="w-4 h-4 animate-bounce" />
        <span className="font-medium text-primary-foreground/90">{message}</span>
        <Link
          href={ctaHref}
          className="ml-2 font-bold underline hover:text-primary-foreground transition-colors"
        >
          {ctaText}
        </Link>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors focus:outline-none"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
