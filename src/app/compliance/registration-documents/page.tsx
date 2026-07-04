"use client";

import PageHero from "@/components/layout/PageHero";
import { ShieldCheck } from "lucide-react";
import { REGISTRATION_DETAILS } from "@/lib/constants";
import { motion } from "framer-motion";

const REG_DOCS = [
  { segment: "BSE Cash", number: REGISTRATION_DETAILS.bse_cash, type: "SEBI Stock Broker Certificate" },
  { segment: "BSE F&O", number: REGISTRATION_DETAILS.bse_fo, type: "SEBI Stock Broker Certificate" },
  { segment: "CDSL (Depository Participant)", number: REGISTRATION_DETAILS.cdsl_dp, type: "CDSL DP Registration Certificate" },
  { segment: "MCX Member ID", number: "28760", type: "MCX Membership Registry" },
  { segment: "NCDEX Member ID", number: "823", type: "NCDEX Membership Registry" },
  { segment: "Corporate Identity Number (CIN)", number: REGISTRATION_DETAILS.cin, type: "Ministry of Corporate Affairs (MCA)" },
];

export default function RegistrationDocumentsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Registration Documents"
        subtitle="SEBI registration certificates and official membership details for Shri Venkatesh Stock Broker Services India Pvt. Ltd."
        breadcrumbs={[{ label: "Compliance" }, { label: "Registration Documents" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">
        
        {/* Section 1: Official Registrations List */}
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Official SEBI & Exchange Registrations</h2>
          <p className="text-muted-foreground text-base max-w-3xl mb-8 leading-relaxed">
            We are registered with the Securities and Exchange Board of India (SEBI) and hold memberships of Bombay Stock Exchange (BSE) and Multi Commodity Exchange (MCX), along with depository participant status with CDSL.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REG_DOCS.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-muted/40 border border-border/50 rounded-2xl flex flex-col justify-between hover:border-primary/30 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-3 py-1">
                    {doc.segment}
                  </span>
                  <h3 className="font-mono font-bold text-lg text-foreground mt-4 mb-2 tracking-tight">
                    {doc.number}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {doc.type}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>Status: Active</span>
                  <span className="text-primary hover:underline cursor-pointer flex items-center gap-1">
                    View Certificate ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Statutory Advisory Box */}
        <div className="p-8 bg-muted/30 border border-border/50 rounded-3xl space-y-4 max-w-4xl">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" /> Regulatory Display Advisory
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            In compliance with SEBI and Exchange directives, registration certificates, mandatory board displays, and grievance officer coordinates are displayed prominently at our Raipur corporate headquarters and bhilai branch offices. Investors can inspect registration certificates during normal working hours at any of our branches.
          </p>
        </div>

      </div>
    </div>
  );
}
