"use client";

import PageHero from "@/components/layout/PageHero";
import { ArrowRight, ShieldCheck, CheckSquare, RefreshCw, BarChart2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DepositoryServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="CDSL Depository Services"
        subtitle="Secure electronic holding and settlement of your financial assets. Enjoy instant credits, settlements, and e-voting support."
        breadcrumbs={[{ label: "Products & Services" }, { label: "Depository Services" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left / Middle: Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Secure Demat Services with CDSL</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A Depository is an institution that holds securities (like shares, debentures, government bonds, mutual funds) of investors in electronic/dematerialized form. Shri Venkatesh Stock Broker Services is a registered Depository Participant (DP) with **Central Depository Services (India) Ltd. (CDSL)**.
                </p>
                <p>
                  <strong>Our CDSL DP ID:</strong> <code className="bg-muted px-2 py-1 rounded font-mono text-sm font-bold text-primary">IN-DP-41-2015</code>.
                </p>
                <p>
                  Holding your securities electronically eliminates the risks associated with physical certificates, such as loss in transit, theft, mutilation, and fake certificates.
                </p>
              </div>
            </section>

            {/* Core Depository Features */}
            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Depository Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Dematerialization (Demat)",
                    desc: "Convert your physical share certificates into electronic assets safely and quickly.",
                    icon: RefreshCw,
                  },
                  {
                    title: "Pledge & Unpledge",
                    desc: "Pledge your electronic securities in favor of banks or lenders to secure loans or trading margins easily.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Corporate Benefits",
                    desc: "Receive auto-credits for bonus shares, stock splits, and dividends straight to your linked accounts.",
                    icon: CheckSquare,
                  },
                  {
                    title: "Consolidated CAS Statements",
                    desc: "Receive a single Consolidated Account Statement (CAS) summarizing all holdings across depositories monthly.",
                    icon: BarChart2,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-muted/40 border border-border/50 rounded-2xl flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-background rounded-xl flex items-center justify-center text-primary shadow-xs">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Demat Process steps */}
            <section className="bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">How to Dematerialize Physical Shares?</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Submit DRF Form", desc: "Obtain a Demat Request Form (DRF) from us and fill in the details of the physical shares." },
                  { step: "2", title: "Surrender Certificates", desc: "Surrender your physical share certificates with 'Surrendered for Dematerialisation' written on them." },
                  { step: "3", title: "Verification & Upload", desc: "We verify the forms and upload the details to CDSL, generating a Demat Request Number (DRN)." },
                  { step: "4", title: "CDSL Credit", desc: "The company's registrar verifies physical signatures, confirms blockings, and CDSL credits shares to your Demat account." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-display mb-6">Ready to Demat your shares?</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Open a modern demat and trading account under CDSL depository services. Get started in minutes.
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
                <li><Link href="/products/equity" className="text-primary hover:underline">Equity Trading</Link></li>
                <li><Link href="/products/derivatives" className="text-primary hover:underline">Derivatives Trading</Link></li>
                <li><Link href="/investor-resources/downloads" className="text-primary hover:underline">Download Forms</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
