"use client";

import PageHero from "@/components/layout/PageHero";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const MOCK_IPOS = [
  {
    company: "Tata Financial Services Ltd.",
    status: "Open",
    priceBand: "₹480 - ₹510",
    dates: "June 28 - July 2, 2026",
    lotSize: "30 Shares",
    size: "₹1,200 Cr",
  },
  {
    company: "Green Future Energy Systems",
    status: "Upcoming",
    priceBand: "₹210 - ₹225",
    dates: "July 8 - July 12, 2026",
    lotSize: "60 Shares",
    size: "₹650 Cr",
  },
  {
    company: "MediCare Biotech India",
    status: "Closed",
    priceBand: "₹910 - ₹950",
    dates: "June 15 - June 19, 2026",
    lotSize: "15 Shares",
    size: "₹880 Cr",
  },
];

export default function IpoPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="IPO Investment Services"
        subtitle="Access and apply for Initial Public Offerings (IPOs) in India. Leverage ASBA for secure bid blockings directly from your bank account."
        breadcrumbs={[{ label: "Products & Services" }, { label: "IPO" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left / Middle: Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">What is an IPO?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  An Initial Public Offering (IPO) is the process by which a private company offers shares to the public for the first time, transitioning into a publicly traded corporation. IPOs allow companies to raise capital from public investors to fund expansion, reduce debt, or unlock valuation.
                </p>
                <p>
                  As an investor, IPOs present early-stage opportunities to buy stakes in high-growth companies before their shares list on national exchanges (BSE/NSE).
                </p>
              </div>
            </section>

            {/* ASBA Explanation */}
            <section className="bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-8 h-8 text-primary shrink-0" />
                <h3 className="text-2xl font-display font-bold text-foreground">ASBA (Application Supported by Blocked Amount)</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                ASBA is a mandatory application mechanism regulated by SEBI. When you apply for an IPO via ASBA, the application money remains blocked in your bank account instead of getting debited. The amount gets debited ONLY if shares are allotted to you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "No Funds Debit", desc: "Capital remains in your bank account, continuing to earn interest." },
                  { title: "Instant Unblock", desc: "Blocked funds are instantly freed if zero or partial allotment occurs." },
                  { title: "Secure & Compliant", desc: "No cheques or physical money transfer required." },
                ].map((item, i) => (
                  <div key={i} className="bg-background border border-border/40 p-5 rounded-2xl">
                    <h4 className="font-bold text-sm text-foreground mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mock IPO List */}
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">IPO Listings Watch</h2>
              <div className="space-y-4">
                {MOCK_IPOS.map((ipo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-background border border-border/50 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="font-bold text-lg text-foreground">{ipo.company}</h4>
                        <span className={cn(
                          "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                          ipo.status === "Open" && "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-800",
                          ipo.status === "Upcoming" && "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800",
                          ipo.status === "Closed" && "bg-muted text-muted-foreground border-border/60"
                        )}>
                          {ipo.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <div>
                          <p className="text-[10px] text-muted-foreground/60 mb-0.5">Price Band</p>
                          <p className="text-foreground text-sm font-bold normal-case">{ipo.priceBand}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground/60 mb-0.5">Issue Dates</p>
                          <p className="text-foreground text-sm font-bold normal-case">{ipo.dates}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground/60 mb-0.5">Min Lot Size</p>
                          <p className="text-foreground text-sm font-bold normal-case">{ipo.lotSize}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground/60 mb-0.5">Issue Size</p>
                          <p className="text-foreground text-sm font-bold normal-case">{ipo.size}</p>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {ipo.status === "Open" ? (
                        <Link
                          href="/open-account"
                          className={cn(buttonVariants(), "h-11 rounded-full text-sm font-bold px-6 flex items-center justify-center gap-1.5")}
                        >
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="h-11 rounded-full text-sm font-bold px-6 border border-border bg-muted/20 text-muted-foreground cursor-not-allowed w-full md:w-auto"
                        >
                          {ipo.status === "Upcoming" ? "Upcoming" : "Closed"}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-display mb-6">Invest in upcoming IPOs</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Applying for an IPO is seamless through ASBA with your demat account linked to us.
              </p>
              <Link
                href="/open-account"
                className={cn(buttonVariants(), "w-full h-13 rounded-full font-bold text-sm justify-center items-center flex gap-2 text-white")}
              >
                Open Demat Account <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 bg-muted/40 rounded-3xl border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/products/mutual-funds" className="text-primary hover:underline">Mutual Funds SIP</Link></li>
                <li><Link href="/products/equity" className="text-primary hover:underline">Equity Trading</Link></li>
                <li><Link href="/investor-resources/downloads" className="text-primary hover:underline">Download Forms</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
