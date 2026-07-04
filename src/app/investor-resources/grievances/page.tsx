"use client";

import PageHero from "@/components/layout/PageHero";
import { ExternalLink, HelpCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

export default function GrievancesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Investor Grievances"
        subtitle="File complaints directly with us or escalate via the SEBI SCORES portal. A transparent dispute redressal framework for securities markets."
        breadcrumbs={[{ label: "Investor Resources" }, { label: "Grievances" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left: Detailed Steps to file grievance */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Grievance Redressal Process</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                If you have a query, issue, or complaint regarding your trading/demat account, follow our 3-step escalation pathway:
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "Level 1",
                  title: "Direct Broker Resolution",
                  desc: "Send an email detailing your query to our grievance desk at irfan_regent@yahoo.com or shri_vsb@yahoo.in. Alternatively, call our office at 0771-4059071. Most queries are resolved within 48 business hours.",
                },
                {
                  step: "Level 2",
                  title: "Escalate to Compliance Officer",
                  desc: `If the resolution does not satisfy you, escalate to our Compliance Officer: Ms. Prashita Sheolikar (Email: ${COMPANY_INFO.compliance.email}, Tel: ${COMPANY_INFO.compliance.phone}).`,
                },
                {
                  step: "Level 3",
                  title: "File Complaint on SEBI SCORES",
                  desc: "If the complaint remains unresolved, you can file it directly on SEBI&apos;s SCORES (SEBI Complaints Redress System) portal. SCORES facilitates tracking, reporting, and systematic monitoring of grievances by SEBI.",
                },
              ].map((lvl, idx) => (
                <div key={idx} className="p-6 bg-muted/40 border border-border/50 rounded-2xl flex gap-4">
                  <div className="shrink-0 flex items-center justify-center h-12 w-24 bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider rounded-xl">
                    {lvl.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">{lvl.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lvl.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Helpline Section */}
            <div className="p-8 bg-muted/40 border border-border/50 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" /> SEBI Toll-Free Helpline
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For assistance, clarifications, or guidance regarding grievances and the SCORES filing process, investors can call SEBI&apos;s official Toll-Free helpline numbers:
              </p>
              <div className="flex flex-wrap gap-6 text-base font-bold text-primary">
                <span>📞 1800-266-7575</span>
                <span>📞 1800-22-7575</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Available in 8 languages (English, Hindi, Bengali, Gujarati, Marathi, Kannada, Telugu, and Tamil) from 9:00 AM to 6:00 PM (Monday to Saturday).
              </p>
            </div>
          </div>

          {/* Right: Portal Escalation Links */}
          <div className="space-y-8">
            {/* SCORES Link */}
            <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-display mb-4">SEBI SCORES Portal</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                SCORES 2.0 allows easy registration of grievances against brokers. Click below to file or track complaints.
              </p>
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                className={cn(buttonVariants(), "w-full h-13 rounded-full font-bold text-sm justify-center items-center flex gap-2 text-white")}
              >
                Register on SCORES <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* SmartODR Portal */}
            <div className="p-8 bg-background border border-border/50 rounded-3xl shadow-xs">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Online Dispute Resolution</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                For alternative dispute resolutions in the securities market, register on the SmartODR portal.
              </p>
              <a
                href="https://smartodr.in"
                target="_blank"
                className={cn(buttonVariants({ variant: "outline" }), "w-full h-12 rounded-full font-bold text-sm justify-center items-center flex gap-2")}
              >
                Go to SmartODR <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Contacts sidebar */}
            <div className="p-8 bg-muted/40 rounded-3xl border border-border/50 space-y-4">
              <h4 className="font-bold text-foreground">Grievance Desk</h4>
              <div className="text-xs space-y-3 font-semibold text-muted-foreground">
                <p className="flex items-center gap-2">✉️ shri_vsb@yahoo.in</p>
                <p className="flex items-center gap-2">✉️ irfan_regent@yahoo.com</p>
                <p className="flex items-center gap-2">📞 0771-4059071</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
