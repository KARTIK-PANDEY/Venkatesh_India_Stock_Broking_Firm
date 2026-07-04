"use client";

import { useState, useEffect } from "react";
import { Landmark, ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WIDGET_DATA = [
  {
    name: "NIFTY 50",
    value: 24355.20,
    change: "+178.40",
    percent: "+0.74%",
    up: true,
    points: [110, 115, 108, 125, 120, 135, 130, 142, 138, 150]
  },
  {
    name: "SENSEX",
    value: 78048.00,
    change: "+403.10",
    percent: "+0.52%",
    up: true,
    points: [112, 110, 118, 114, 128, 124, 132, 128, 140, 145]
  },
  {
    name: "BANK NIFTY",
    value: 52450.50,
    change: "+210.30",
    percent: "+0.40%",
    up: true,
    points: [115, 118, 120, 125, 130, 132, 138, 140, 145, 150]
  }
];

export default function WelcomeSection() {
  const [activeWidget, setActiveWidget] = useState(0);
  const [tickerData, setTickerData] = useState(WIDGET_DATA);

  // Simulate real-time stock ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * 15; // slight positive bias
          const newValue = item.value + delta;
          const originalValue = item.value - parseFloat(item.change);
          const newChange = newValue - originalValue;
          const newPercent = (newChange / originalValue) * 100;
          
          // Rotate points arrays to simulate rolling line charts
          const newPoints = [...item.points.slice(1), item.points[item.points.length - 1] + (delta > 0 ? 3 : -3)];
          
          return {
            ...item,
            value: Number(newValue.toFixed(2)),
            change: (newChange >= 0 ? "+" : "") + newChange.toFixed(2),
            percent: (newChange >= 0 ? "+" : "") + newPercent.toFixed(2) + "%",
            up: newChange >= 0,
            points: newPoints
          };
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const selectedIdx = activeWidget;
  const currentWidget = tickerData[selectedIdx];

  // Convert points to SVG path format
  const pathD = currentWidget.points
    .map((p, i) => `${i === 0 ? "M" : "L"}${i * 30},${150 - p}`)
    .join(" ");

  const fillD = `${pathD} L${(currentWidget.points.length - 1) * 30},150 L0,150 Z`;

  return (
    <section className="py-24 bg-background w-full border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Welcome Text Box */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Welcome to Shri Venkatesh
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
              Leading the Way in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Wealth Creation & Security.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
              <p>
                Shri Venkatesh Stock Broker Services India Pvt. Ltd. is one of the well-diversified financial services providers in eastern India. Incorporated in the year 2010 at Raipur, with a clear vision of providing financial services to Retail, High Net worth Individuals, Corporate and Institutional Clients.
              </p>
              <p>
                With over a decade of dedication to regulatory compliance, client transparency, and technical innovation, we help you shape your investment portfolios to achieve sustainable growth and wealth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/about/company-overview"
                className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-accent transition-colors"
              >
                Learn More About Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Interactive Chart Widget Box */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-muted/30 border border-border/60 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-sm relative overflow-hidden group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-primary" /> Live Market Tracker
                  </h3>
                  <p className="text-xs text-muted-foreground">Real-time indices widget metrics.</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
              </div>

              {/* Index selector buttons */}
              <div className="flex gap-2 mb-6">
                {tickerData.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveWidget(idx)}
                    className={cn(
                      "px-3.5 py-2 rounded-xl text-xs font-bold transition-all",
                      activeWidget === idx
                        ? item.up
                          ? "bg-green-600 text-white shadow-md shadow-green-600/10"
                          : "bg-red-600 text-white shadow-md shadow-red-600/10"
                        : "bg-muted border border-border/55 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    )}
                  >
                    {item.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Chart Value Header */}
              <div className="mb-6 flex justify-between items-end">
                <div>
                  <div className="text-3xl font-display font-bold text-foreground tracking-tight">
                    {currentWidget.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                    Spot Index Rate
                  </div>
                </div>
                
                <div className="text-right">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-bold font-mono px-3 py-1 rounded-full border",
                      currentWidget.up
                        ? "text-green-600 bg-green-500/10 border-green-500/20"
                        : "text-red-600 bg-red-500/10 border-red-500/20"
                    )}
                  >
                    {currentWidget.up ? "▲" : "▼"} {currentWidget.change} ({currentWidget.percent})
                  </span>
                </div>
              </div>

              {/* SVG Sparkline Graph */}
              <div className="w-full h-36 bg-background/50 border border-border/40 rounded-2xl relative overflow-hidden flex items-end p-2 mb-4 group-hover:border-primary/20 transition-all">
                <svg className="w-full h-full" viewBox="0 0 270 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor={currentWidget.up ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"}
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="100%"
                        stopColor={currentWidget.up ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"}
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill path */}
                  <path d={fillD} fill="url(#chartGradient)" />
                  
                  {/* Line path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={currentWidget.up ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Floating tooltip overlay */}
                <div className="absolute top-2 left-2 text-[9px] font-bold text-muted-foreground bg-muted/65 px-1.5 py-0.5 rounded border border-border/40 uppercase tracking-widest font-mono">
                  {currentWidget.name}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground italic leading-relaxed">
                <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Rates are updated dynamically. Trade at your own risk.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
