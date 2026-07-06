"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { ArrowRight, BarChart3, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function MutualFundsPage() {
  // SIP Calculator State
  const [monthlyInstallment, setMonthlyInstallment] = useState(5000);
  const [expectedRate, setExpectedRate] = useState(12);
  const [years, setYears] = useState(10);

  // SIP Formula calculations
  // M = P * [ ( (1 + i)^n - 1 ) / i ] * (1 + i)
  // where i = expectedRate / 12 / 100
  // n = years * 12
  const i = expectedRate / 12 / 100;
  const n = years * 12;
  const totalInvested = monthlyInstallment * n;
  
  let totalValue = 0;
  if (i > 0) {
    totalValue = monthlyInstallment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  } else {
    totalValue = totalInvested;
  }
  
  const estimatedReturns = Math.max(0, totalValue - totalInvested);

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Mutual Fund Investment Services"
        subtitle="Diversify your portfolio through professionally managed mutual funds. SIP and Lump sum investment solutions tailormade for you."
        breadcrumbs={[{ label: "Products & Services" }, { label: "Mutual Funds" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left / Middle: Product Details */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Invest in Mutual Funds?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Mutual Funds pool savings from thousands of investors to invest in a diversified basket of stocks, bonds, and corporate debt. Managed by expert fund managers, mutual funds offer retail investors professional management and diversification at minimal cost.
                </p>
                <p>
                  At <strong className="text-foreground">Shri Venkatesh Stock Broker Services</strong>, we guide you to choose the best mutual funds corresponding to your risk appetite, horizon, and capital objectives. We help you invest through Systemic Investment Plans (SIP) or lump sum configurations.
                </p>
              </div>
            </section>

            {/* SIP vs Lumpsum Comparison */}
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">SIP vs Lump Sum</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-muted/40 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">Systematic Investment Plan (SIP)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Invest a fixed sum of money periodically (monthly/quarterly) in your chosen mutual fund scheme. Benefits from rupee-cost averaging and compounding over long terms.
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <li className="flex items-center gap-2 text-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Rupee cost averaging
                    </li>
                    <li className="flex items-center gap-2 text-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Disciplined savings habit
                    </li>
                    <li className="flex items-center gap-2 text-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Power of compounding
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-muted/40 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">Lump Sum Investment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Invest a substantial one-time block of capital in mutual funds. Best suited when you have surplus funds and want to capture market low points or long term goals.
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <li className="flex items-center gap-2 text-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Ideal for one-time wealth block
                    </li>
                    <li className="flex items-center gap-2 text-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Complete asset control
                    </li>
                    <li className="flex items-center gap-2 text-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Custom withdrawal options (SWP)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Interactive SIP Calculator */}
            <section className="bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-10 space-y-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-display font-bold text-foreground">Interactive SIP Calculator</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Project your future capital appreciation based on monthly SIP contributions, years, and expected growth rate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="space-y-6">
                  {/* Slider 1: Monthly Invest */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-foreground">
                      <span>Monthly Installment</span>
                      <span className="text-primary">₹{monthlyInstallment.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlyInstallment}
                      onChange={(e) => setMonthlyInstallment(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                      <span>₹500</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Return Rate */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-foreground">
                      <span>Expected Return Rate</span>
                      <span className="text-primary">{expectedRate}% p.a.</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={expectedRate}
                      onChange={(e) => setExpectedRate(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Slider 3: Time Period */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-foreground">
                      <span>Time Period</span>
                      <span className="text-primary">{years} Years</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="bg-background rounded-2xl border border-border/50 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground">
                      <span>Total Invested Amount:</span>
                      <span className="font-bold text-sm text-foreground">₹{totalInvested.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground">
                      <span>Estimated Return Profit:</span>
                      <span className="font-bold text-sm text-green-600">₹{Math.round(estimatedReturns).toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-border my-2"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-foreground">Future Valuation:</span>
                      <span className="text-xl font-display font-bold text-primary">₹{Math.round(totalValue).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-muted-foreground leading-relaxed mt-6 italic">
                    * Projections are based on monthly compounding and assumed return rates. Actual mutual fund schemes may yield varying results.
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-display mb-6">Invest in Mutual Funds</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Connect with our advisors to choose the best mutual funds or log in directly to manage your MF investments.
              </p>
              <a
                href="https://disafinancial.com"
                target="_blank"
                className={cn(buttonVariants(), "w-full h-13 rounded-full font-bold text-sm justify-center items-center flex gap-2 text-white")}
              >
                Log In to Disa MF Portal <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-100 dark:border-red-900/30 rounded-3xl p-8">
              <h3 className="text-red-800 dark:text-red-400 font-bold mb-4 uppercase tracking-wider text-xs flex items-center gap-1.5">
                ⚠ SEBI Regulatory Notice
              </h3>
              <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed italic">
                &quot;Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future return metrics.&quot;
              </p>
            </div>

            <div className="p-8 bg-muted/40 rounded-3xl border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/products/ipo" className="text-primary hover:underline">IPO Application</Link></li>
                <li><Link href="/products/equity" className="text-primary hover:underline">Equity Trading</Link></li>
                <li><Link href="/investor-resources/downloads" className="text-primary hover:underline">Download Registration Forms</Link></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
