"use client";

import PageHero from "@/components/layout/PageHero";
import { FileText, Download, Shield } from "lucide-react";
import { motion } from "framer-motion";

const POLICIES = [
  {
    title: "Policy on Freezing/Blocking Client Accounts",
    desc: "Detailed guidelines regarding scenarios under which a client's trading/demat account may be frozen or blocked, in compliance with CDSL and exchange rules.",
    href: "/Policy-on-FreezingBlocking-Client.pdf",
    size: "320 KB",
  },
  {
    title: "Prevention of Money Laundering Act (PMLA) Policy",
    desc: "Framework detailing customer due diligence, reporting of suspicious transactions, and training of staff to mitigate money laundering risks.",
    size: "480 KB",
  },
  {
    title: "Conflict of Interest Policy",
    desc: "Details the procedures designed to identify, monitor, and manage conflicts of interest arising in the course of our investment services.",
    size: "210 KB",
  },
  {
    title: "Transactional Surveillance Policy",
    desc: "Internal procedures outlining surveillance controls for detecting suspicious trading activity, pump-and-dump signals, or front-running practices.",
    size: "290 KB",
  },
];

export default function PoliciesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Company Policies"
        subtitle="Access and review our statutory policies, risk management protocols, and regulatory compliance documents."
        breadcrumbs={[{ label: "Compliance" }, { label: "Policies" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">
        
        {/* Policies Directory */}
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Statutory Policy Documents</h2>
          <p className="text-muted-foreground text-base max-w-3xl mb-10 leading-relaxed">
            In compliance with SEBI and exchange mandates, we maintain the following statutory internal policy documents. Click to view or request a copy from our Raipur corporate office.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {POLICIES.map((policy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-muted/40 border border-border/50 rounded-3xl hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">
                      {policy.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {policy.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                    PDF Document · {policy.size}
                  </span>
                  {policy.href ? (
                    <a
                      href={policy.href}
                      target="_blank"
                      className="text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                    >
                      Download <Download className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span
                      onClick={() => alert(`${policy.title} request submitted to compliance officer.`)}
                      className="text-xs font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      Request Document ↗
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance commitment card */}
        <div className="p-8 bg-brand-navy rounded-3xl text-white relative overflow-hidden shadow-lg max-w-4xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="flex gap-4 items-start">
            <Shield className="w-10 h-10 text-accent mt-1 shrink-0" />
            <div>
              <h3 className="text-xl font-display font-bold mb-2">Our Commitment to Clean Markets</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Shri Venkatesh Stock Broker Services India Pvt. Ltd. maintains absolute compliance with anti-money laundering (AML) laws and SEBI directives. We run routine audits of account listings and ensure that suspicious transactions are reported immediately to Financial Intelligence Unit India (FIU-IND).
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
