"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const MOCK_DATA = [
  { symbol: "NIFTY 50", value: "24,355.20", change: "+178.40", percent: "+0.74%", up: true },
  { symbol: "SENSEX", value: "78,048.00", change: "+403.10", percent: "+0.52%", up: true },
  { symbol: "BANKNIFTY", value: "52,450.50", change: "+210.30", percent: "+0.40%", up: true },
  { symbol: "NIFTY IT", value: "38,205.45", change: "+320.15", percent: "+0.84%", up: true },
  { symbol: "GOLD MCX", value: "73,520.00", change: "+125.00", percent: "+0.17%", up: true },
  { symbol: "USD/INR", value: "83.52", change: "+0.05", percent: "+0.06%", up: true },
  { symbol: "CRUDE OIL", value: "6,915.00", change: "-25.00", percent: "-0.36%", up: false },
];

export default function MarketTicker() {
  const [data, setData] = useState(MOCK_DATA);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          value: (parseFloat(item.value.replace(/,/g, "")) + (Math.random() - 0.5) * 10).toLocaleString(undefined, { minimumFractionDigits: 2 }),
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-muted/60 border-b border-border/50 h-9 flex items-center overflow-hidden select-none" role="region" aria-label="Live market data">
      <button 
        onClick={() => setIsPaused(!isPaused)} 
        aria-label={isPaused ? "Play market ticker" : "Pause market ticker"}
        aria-pressed={isPaused}
        className="px-3 h-full flex items-center justify-center bg-muted border-r border-border/50 hover:bg-muted/80 focus-visible:z-10"
      >
        <span aria-hidden="true">{isPaused ? "▶" : "⏸"}</span>
      </button>
      <div 
        className={cn("flex items-center whitespace-nowrap animate-marquee hover:pause", isPaused && "pause")}
        aria-live={isPaused ? "off" : "polite"}
      >
        {/* Screen-reader accessible version (visually hidden) */}
        <div className="sr-only">
          {data.map(item => `${item.symbol}: ${item.value} (${item.up ? 'Up' : 'Down'} ${item.percent})`).join(" | ")}
        </div>
        
        {/* Visual scrolling content, hidden from screen readers to prevent noise */}
        <div aria-hidden="true" className="flex">
          {[...data, ...data].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-6 border-r border-border/30 h-full">
              <span className="text-foreground font-bold text-xs uppercase tracking-wider">{item.symbol}</span>
              <span className="text-foreground font-mono text-sm">{item.value}</span>
              <span className={cn(
                "text-xs font-bold font-mono",
                item.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              )}>
                {item.up ? "▲" : "▼"} {item.change} ({item.percent})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
