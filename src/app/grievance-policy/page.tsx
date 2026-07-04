import PageHero from "@/components/layout/PageHero";
import { Mail, Phone, ExternalLink, HelpCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Grievance Policy & Redressal | Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
  description: "Read our client grievance redressal policy, including compliance helplines, internal escalation stages, and SEBI SCORES filing details.",
};

export default function GrievancePolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Grievance Redressal Policy"
        subtitle="Our structured framework for submitting, monitoring, and resolving client complaints."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Grievance Policy" }]}
      />

      <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-12">
        
        {/* Core statement */}
        <section className="bg-muted/40 p-8 rounded-3xl border border-border/50 flex gap-4 items-start">
          <HelpCircle className="w-8 h-8 text-primary shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Redressal Commitment</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We strive to provide premium trading and depository services. However, if you experience issues or hold concerns regarding your account transactions, we maintain a robust redressal framework designed to address complaints within regulatory timelines.
            </p>
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-10 divide-y divide-border/40">
          
          <section className="space-y-4 pt-10 first:pt-0">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" /> 1. Internal Redressal Steps
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Investors should escalate their complaints step-by-step through our internal desks before escalating to external regulators:
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-muted/30 border border-border/40 rounded-2xl">
                <h4 className="font-bold text-sm text-foreground">Step 1: Contact Support Desk</h4>
                <p className="text-xs text-muted-foreground mt-1">Email your grievance to <strong>irfan_regent@yahoo.com</strong> or <strong>shri_vsb@yahoo.in</strong>, or call <strong>0771-4059071</strong>. Support queries are resolved within 2 working days.</p>
              </div>
              <div className="p-5 bg-muted/30 border border-border/40 rounded-2xl">
                <h4 className="font-bold text-sm text-foreground">Step 2: Compliance Officer Escalation</h4>
                <p className="text-xs text-muted-foreground mt-1">If the desk resolution does not satisfy you, write to Compliance Officer <strong>Ms. Prashita Sheolikar</strong> (Email: <strong>{COMPANY_INFO.compliance.email}</strong>, Tel: <strong>{COMPANY_INFO.compliance.phone}</strong>).</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> 2. Escalation to SEBI SCORES 2.0
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If your grievance remains unresolved after 30 days, you can lodge it on the SEBI Complaints Redress System (SCORES) portal. SEBI monitors and reviews these cases directly. File a complaint online at: <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold inline-flex items-center gap-1">scores.sebi.gov.in <ExternalLink className="w-3.5 h-3.5" /></a>
            </p>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-primary" /> 3. SmartODR Portal
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              For online conciliation and arbitration, disputes can be submitted to the SmartODR Online Dispute Resolution portal. Register online at: <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold inline-flex items-center gap-1">smartodr.in <ExternalLink className="w-3.5 h-3.5" /></a>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
