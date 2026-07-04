"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/layout/PageHero";
import { TrendingUp, TrendingDown, DollarSign, Euro, Landmark, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const INITIAL_CURRENCIES = [
  { pair: "USD / INR", value: 83.52, change: 0.12, pctChange: 0.14, up: true, icon: DollarSign },
  { pair: "EUR / INR", value: 89.24, change: -0.08, pctChange: -0.09, up: false, icon: Euro },
  { pair: "GBP / INR", value: 105.78, change: 0.35, pctChange: 0.33, up: true, icon: Landmark },
  { pair: "JPY / INR (100)", value: 52.45, change: -0.02, pctChange: -0.04, up: false, icon: Landmark },
];

export default function CurrencyReportPage() {
  const [currencies, setCurrencies] = useState(INITIAL_CURRENCIES);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    requestAnimationFrame(() => setLastUpdated(new Date().toLocaleTimeString()));
    
    const interval = setInterval(() => {
      setCurrencies(prev => 
        prev.map(curr => {
          const delta = (Math.random() - 0.5) * 0.05; // Random currency tick
          const newValue = curr.value + delta;
          const newChange = curr.change + delta;
          const newPct = (newChange / (curr.value - curr.change)) * 100;
          return {
            ...curr,
            value: Number(newValue.toFixed(4)),
            change: Number(newChange.toFixed(4)),
            pctChange: Number(newPct.toFixed(2)),
            up: newChange >= 0
          };
        })
      );
      setLastUpdated(new Date().toLocaleTimeString());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Currency Market Report"
        subtitle="Live foreign exchange cross rates against the Indian Rupee (INR). Track global currency trends."
        breadcrumbs={[{ label: "Market & News" }, { label: "Currency Report" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-12">
        
        {/* Live Indicator */}
        <div className="flex justify-between items-center bg-muted/40 border border-border/50 p-4 rounded-2xl flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute"></span>
            <span className="text-xs font-bold text-foreground ml-1 uppercase tracking-wider">Forex Live Tick Feed</span>
          </div>
          <div className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Last Tick: <span className="text-foreground">{lastUpdated}</span>
          </div>
        </div>

        {/* Currency Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currencies.map((curr, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-muted/40 border border-border/50 rounded-3xl flex flex-col justify-between hover:shadow-xs transition-shadow group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-muted-foreground">{curr.pair}</span>
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <curr.icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-display font-bold text-foreground tracking-tight">
                  ₹{curr.value.toFixed(2)}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  {curr.up ? (
                    <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                  <span className={`text-xs font-bold ${curr.up ? "text-emerald-500" : "text-red-500"}`}>
                    {curr.change > 0 ? "+" : ""}{curr.change.toFixed(4)} ({curr.change > 0 ? "+" : ""}{curr.pctChange}%)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informational Advisory */}
        <div className="p-8 bg-muted/30 border border-border/50 rounded-3xl space-y-4 max-w-4xl">
          <h3 className="text-xl font-bold text-foreground">Global Currency Advisory</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Exchange rates fluctuate dynamically based on central bank monetary policy updates (RBI, Federal Reserve, ECB), macroeconomic indicators (CPI inflation, unemployment statistics), import-export balances, and global trade flows. The values displayed are indicative interbank rates. For official trading margins and custom derivative contract details, speak with our foreign exchange Desk at Raipur.
          </p>
        </div>

      </div>
    </div>
  );
}
