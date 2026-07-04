"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/layout/PageHero";
import { TrendingUp, TrendingDown, RefreshCw, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const INITIAL_INDICES = [
  { name: "NIFTY 50", value: 24355.20, change: 178.40, pctChange: 0.74, up: true },
  { name: "SENSEX", value: 78048.00, change: 403.10, pctChange: 0.52, up: true },
  { name: "BANK NIFTY", value: 52450.50, change: 210.30, pctChange: 0.40, up: true },
  { name: "NIFTY IT", value: 38205.45, change: 320.15, pctChange: 0.84, up: true },
];

const MOCK_GAINERS = [
  { symbol: "TATASTEEL", price: 168.45, change: 4.85, pctChange: 2.96 },
  { symbol: "RELIANCE", price: 2950.10, change: 65.40, pctChange: 2.27 },
  { symbol: "INFY", price: 1512.35, change: 28.90, pctChange: 1.95 },
  { symbol: "HDFCBANK", price: 1530.80, change: 21.30, pctChange: 1.41 },
];

const MOCK_LOSERS = [
  { symbol: "M&M", price: 2310.45, change: -78.40, pctChange: -3.28 },
  { symbol: "SBIN", price: 825.10, change: -18.90, pctChange: -2.24 },
  { symbol: "ICICIBANK", price: 1115.30, change: -12.45, pctChange: -1.10 },
  { symbol: "BHARTIARTL", price: 1385.00, change: -8.10, pctChange: -0.58 },
];

export default function LiveMarketWatchPage() {
  const [indices, setIndices] = useState(INITIAL_INDICES);
  const [lastUpdated, setLastUpdated] = useState("");
  const [activeTab, setActiveTab] = useState("gainers");

  useEffect(() => {
    requestAnimationFrame(() => setLastUpdated(new Date().toLocaleTimeString()));
    
    // Simulate real-time ticks
    const interval = setInterval(() => {
      setIndices(prev => 
        prev.map(ind => {
          const delta = (Math.random() - 0.48) * 20; // Slight upward bias
          const newValue = ind.value + delta;
          const newChange = ind.change + delta;
          const newPct = (newChange / (ind.value - ind.change)) * 100;
          return {
            ...ind,
            value: Number(newValue.toFixed(2)),
            change: Number(newChange.toFixed(2)),
            pctChange: Number(newPct.toFixed(2)),
            up: newChange >= 0
          };
        })
      );
      setLastUpdated(new Date().toLocaleTimeString());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Live Market Watch"
        subtitle="Real-time updates of Indian equity indices and stock listings. Stay ahead with live data feeds."
        breadcrumbs={[{ label: "Market & News" }, { label: "Live Market Watch" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">
        
        {/* Top bar: live indicator */}
        <div className="flex justify-between items-center bg-muted/40 border border-border/50 p-4 rounded-2xl flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute"></span>
            <span className="text-xs font-bold text-foreground ml-1 uppercase tracking-wider">Market Data Live Feed</span>
          </div>
          <div className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Last Tick: <span className="text-foreground">{lastUpdated}</span>
          </div>
        </div>

        {/* Indices Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {indices.map((ind, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-muted/40 border border-border/50 rounded-2xl flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <div>
                <span className="text-xs font-bold text-muted-foreground">{ind.name}</span>
                <h3 className="text-2xl font-display font-bold text-foreground mt-2 tracking-tight">
                  {ind.value.toLocaleString()}
                </h3>
              </div>

              <div className="flex items-center gap-2 mt-4">
                {ind.up ? (
                  <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span className={`text-sm font-bold ${ind.up ? "text-emerald-500" : "text-red-500"}`}>
                  {ind.change > 0 ? "+" : ""}{ind.change} ({ind.change > 0 ? "+" : ""}{ind.pctChange}%)
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gainers / Losers Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left/Mid Column: Top Performers Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
                <BarChart2 className="w-6 h-6 text-primary" /> Market Heat Watch
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("gainers")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "gainers" ? "bg-green-600 text-white" : "bg-muted/40 text-muted-foreground border border-border/50"
                  }`}
                >
                  Top Gainers
                </button>
                <button
                  onClick={() => setActiveTab("losers")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "losers" ? "bg-red-600 text-white" : "bg-muted/40 text-muted-foreground border border-border/50"
                  }`}
                >
                  Top Losers
                </button>
              </div>
            </div>

            <div className="bg-background border border-border/50 rounded-2xl overflow-hidden shadow-xs">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-muted text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border/50">
                    <th className="px-6 py-4">Symbol</th>
                    <th className="px-6 py-4">LTP (₹)</th>
                    <th className="px-6 py-4">Change (₹)</th>
                    <th className="px-6 py-4">Change (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium">
                  {(activeTab === "gainers" ? MOCK_GAINERS : MOCK_LOSERS).map((stock, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">{stock.symbol}</td>
                      <td className="px-6 py-4 font-mono">{stock.price.toLocaleString()}</td>
                      <td className={`px-6 py-4 font-mono font-bold ${activeTab === "gainers" ? "text-emerald-500" : "text-red-500"}`}>
                        {stock.change > 0 ? "+" : ""}{stock.change}
                      </td>
                      <td className={`px-6 py-4 font-mono font-bold ${activeTab === "gainers" ? "text-emerald-500" : "text-red-500"}`}>
                        {stock.pctChange > 0 ? "+" : ""}{stock.pctChange}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Mini Interactive Chart Mock */}
          <div className="bg-muted/40 p-8 rounded-3xl border border-border/50 space-y-6">
            <div>
              <h4 className="font-bold text-foreground text-lg mb-1">Index Trend Widget</h4>
              <p className="text-xs text-muted-foreground">Interactive Nifty 50 intraday trajectory.</p>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="w-full h-44 bg-background border border-border/50 rounded-2xl relative overflow-hidden flex items-end p-4 group">
              <div className="absolute top-4 left-4 bg-muted/50 border border-border/50 rounded px-2.5 py-1 text-[10px] font-bold text-primary">
                NIFTY 50 · 24H
              </div>
              <svg className="w-full h-full" viewBox="0 0 300 150">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,130 Q30,120 60,95 T120,80 T180,60 T240,40 T300,20 L300,150 L0,150 Z"
                  fill="url(#chartGlow)"
                />
                <path
                  d="M0,130 Q30,120 60,95 T120,80 T180,60 T240,40 T300,20"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="3.5"
                  className="path-animate"
                />
              </svg>
              {/* Highlight Dot */}
              <div className="absolute top-[20px] right-[4px] h-3 w-3 bg-primary rounded-full animate-ping"></div>
              <div className="absolute top-[20px] right-[4px] h-3 w-3 bg-primary rounded-full"></div>
            </div>

            <div className="text-xs text-muted-foreground leading-relaxed italic">
              * Indices values simulated in real-time. Contact our Raipur branch desk for physical terminal access during market operational hours (9:15 AM - 3:30 PM).
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
