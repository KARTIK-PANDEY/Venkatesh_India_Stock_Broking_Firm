"use client";

import PageHero from "@/components/layout/PageHero";
import { ShieldCheck, Mail, Phone, Scale } from "lucide-react";
import { COMPANY_INFO, REGISTRATION_DETAILS } from "@/lib/constants";

export default function MandatoryDisclosuresPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Mandatory Disclosures"
        subtitle="Mandatory public disclosures, SEBI advisories, and statutory compliance details for investor protection."
        breadcrumbs={[{ label: "Compliance" }, { label: "Mandatory Disclosures" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-12">
        
        {/* Compliance Details Table / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" /> Statutory Regulatory Disclosures
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As a SEBI-registered intermediary, we adhere to strict standards of transparency and compliance. The following disclosures are maintained in accordance with SEBI circulars and exchange rules:
              </p>
            </section>

            <div className="bg-muted/40 border border-border/50 rounded-2xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <tbody>
                  {[
                    ["SEBI Registration Number", REGISTRATION_DETAILS.sebi_reg],
                    ["CDSL Depository Participant ID", REGISTRATION_DETAILS.cdsl_dp],
                    ["BSE Cash Membership No.", REGISTRATION_DETAILS.bse_cash],
                    ["BSE F&O Membership No.", REGISTRATION_DETAILS.bse_fo],
                    ["Company Identification Number (CIN)", REGISTRATION_DETAILS.cin],
                  ].map(([label, val], idx) => (
                    <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-muted-foreground w-1/2">{label}</td>
                      <td className="px-6 py-4 font-mono font-bold text-foreground">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SEBI Helpline */}
            <div className="p-6 bg-muted/40 border border-border/50 rounded-2xl space-y-4">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> SEBI Contact Information
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For investor queries, guidance, or filing direct feedback:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-muted-foreground">
                <div className="p-4 bg-background border border-border/40 rounded-xl space-y-1">
                  <p className="text-foreground font-bold">SEBI Regional Office</p>
                  <p>SEBI Bhavan, Bandra Kurla Complex,</p>
                  <p>Bandra (East), Mumbai - 400051</p>
                </div>
                <div className="p-4 bg-background border border-border/40 rounded-xl space-y-1">
                  <p className="text-foreground font-bold">SEBI Helpdesk</p>
                  <p>Toll-Free Helpline: 1800 266 7575</p>
                  <p>Email: sebi@sebi.gov.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Officers details */}
          <div className="p-8 bg-muted/40 rounded-3xl border border-border/50 space-y-8">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Key Personnel</h3>
              <p className="text-xs text-muted-foreground">Grievance and management contacts.</p>
            </div>

            <div className="space-y-6">
              {/* Compliance Officer */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-2.5 py-0.5">
                  Compliance Officer
                </span>
                <h4 className="font-bold text-foreground text-base mt-2">{COMPANY_INFO.compliance.name}</h4>
                <div className="text-xs font-semibold text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.compliance.phone}</p>
                  <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {COMPANY_INFO.compliance.email}</p>
                </div>
              </div>

              {/* CEO */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-2.5 py-0.5">
                  CEO / Managing Director
                </span>
                <h4 className="font-bold text-foreground text-base mt-2">{COMPANY_INFO.ceo.name}</h4>
                <div className="text-xs font-semibold text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.ceo.phone}</p>
                  <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {COMPANY_INFO.ceo.email}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
