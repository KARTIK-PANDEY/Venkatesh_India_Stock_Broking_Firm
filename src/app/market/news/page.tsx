"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Clock, Calendar, ArrowRight, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const MOCK_NEWS = [
  {
    title: "BSE Sensex Reaches Record Peak Amid Heavy Institutional Inflow",
    desc: "Indian equity benchmark indices Sensex and Nifty touched fresh all-time highs backed by massive capital inflows from foreign portfolio investors (FPI) and robust banking sector gains.",
    category: "Markets",
    date: "June 30, 2026",
    readTime: "4 min read",
  },
  {
    title: "GST Collection Surpasses Estimate, Signaling Strong Corporate Activity",
    desc: "GST collections for the month recorded a significant jump, reflecting strong economic momentum, resilient consumer demand, and improved compliance across states.",
    category: "Economy",
    date: "June 29, 2026",
    readTime: "3 min read",
  },
  {
    title: "IT Majors Project Margin Expansion Following Strategic SaaS Onboarding",
    desc: "Leading information technology services providers report expanding operating margins as corporate tech budgets pivot toward cloud integrations and AI automation.",
    category: "Corporate",
    date: "June 28, 2026",
    readTime: "5 min read",
  },
  {
    title: "SEBI Issues Circular Clarifying Mutual Fund Settlement Disclosures",
    desc: "The regulator has released updated instructions on daily disclosure tables for asset management companies (AMCs) to enhance transparency and protect retail investments.",
    category: "Policy",
    date: "June 25, 2026",
    readTime: "6 min read",
  },
  {
    title: "RBI Monetary Policy Committee Maintains Status Quo on Benchmark Rates",
    desc: "The Reserve Bank of India keeps the repo rate unchanged at its policy meeting, balancing inflation indicators with overall economic growth projection frameworks.",
    category: "Policy",
    date: "June 22, 2026",
    readTime: "5 min read",
  },
  {
    title: "Metal Stocks Rally on Renewed Global Industrial Infrastructure Demand",
    desc: "Steel and aluminum producers register sharp price increases as international commodity hubs report supply shortfalls and rising infrastructure construction volume.",
    category: "Markets",
    date: "June 20, 2026",
    readTime: "3 min read",
  },
];

export default function FinancialNewsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const categories = ["All", "Markets", "Economy", "Corporate", "Policy"];

  const filteredNews = activeTab === "All"
    ? MOCK_NEWS
    : MOCK_NEWS.filter(article => article.category === activeTab);

  const toggleBookmark = (title: string) => {
    if (bookmarked.includes(title)) {
      setBookmarked(prev => prev.filter(t => t !== title));
    } else {
      setBookmarked(prev => [...prev, title]);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Financial News & Insights"
        subtitle="Stay updated with the latest market indicators, corporate updates, monetary policies, and regulatory shifts."
        breadcrumbs={[{ label: "Market & News" }, { label: "Financial News" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-border/40 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === cat
                  ? "bg-primary text-white shadow-xs"
                  : "bg-muted/40 border border-border/50 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 bg-muted/30 border border-border/50 rounded-3xl flex flex-col justify-between hover:border-primary/40 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-3 py-1">
                    {article.category}
                  </span>
                  <button
                    onClick={() => toggleBookmark(article.title)}
                    className="text-muted-foreground hover:text-primary transition-colors focus:outline-hidden"
                    aria-label="Bookmark article"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked.includes(article.title) ? "fill-primary text-primary" : ""}`} />
                  </button>
                </div>
                
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {article.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>
                <span className="text-primary hover:underline flex items-center gap-0.5 cursor-pointer">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
