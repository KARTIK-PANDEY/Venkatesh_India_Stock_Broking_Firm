"use client";

import PageHero from "@/components/layout/PageHero";
import { AlertTriangle, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function RiskDisclosurePage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Mandatory Risk Disclosure"
        subtitle="Important regulatory risk disclosure mandated by SEBI for all individual traders dealing in Equity Futures & Options (F&O) segment."
        breadcrumbs={[{ label: "Investor Resources" }, { label: "Risk Disclosure" }]}
      />

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24 space-y-12">
        
        {/* Warning Panel */}
        <div className="p-8 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 rounded-r-3xl space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-600 shrink-0 animate-bounce" />
            <h2 className="text-2xl font-display font-bold text-red-900 dark:text-red-400">
              Risk Disclosure Document: Equity F&O Segment
            </h2>
          </div>
          <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed font-semibold">
            Based on the SEBI Study on &quot;Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&O) Segment&quot; dated January 25, 2023 (FY 2021-22):
          </p>

          {/* Points list */}
          <div className="grid gap-4 mt-6">
            {[
              "9 out of 10 individual traders in equity F&O segment incurred net losses.",
              "On average, loss makers registered net trading losses close to ₹50,000.",
              "Over and above the net trading losses incurred, loss-makers expended an additional 28% of net trading losses as transaction costs.",
              "Those making net profits, incurred 15% to 50% of such profits as transaction costs."
            ].map((pt, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-background border border-red-500/10 dark:border-red-900/30 rounded-2xl">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600/10 text-red-600 font-bold text-sm shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-foreground/90 font-medium pt-0.5 leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-red-700 dark:text-red-400 italic leading-relaxed pt-4">
            * Publication of these disclosures is mandatory under SEBI Circular No. SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/79 dated May 19, 2023. Investors are requested to acknowledge and read the above metrics carefully before initiating derivative transactions.
          </p>
        </div>

        {/* Informative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-muted/40 border border-border/50 rounded-2xl space-y-4">
            <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" /> Risk Management (RMS) Policy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Shri Venkatesh Stock Broker Services, we enforce strict Risk Management checks. Clients trading in derivatives are required to provide 100% upfront margins (SPAN + Exposure) prior to initiating position buys or sells. Leverage is provided in compliance with exchange guidelines.
            </p>
          </div>

          <div className="p-6 bg-muted/40 border border-border/50 rounded-2xl space-y-4">
            <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Investor Advisory
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We urge investors to carefully consider their risk tolerance, capital adequacy, and derivatives knowledge. Futures and options are highly leveraged derivative products that can lead to losses exceeding your initial capital if market positions move adversely.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/open-account"
            className={cn(buttonVariants(), "rounded-full h-12 font-bold px-8 inline-flex items-center gap-1.5")}
          >
            Acknowledge & Continue Account Opening <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
