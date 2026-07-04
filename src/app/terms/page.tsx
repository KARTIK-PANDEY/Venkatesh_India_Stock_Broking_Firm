import PageHero from "@/components/layout/PageHero";
import { Landmark, Scale, ShieldAlert, Award } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
  description: "Read our terms of service regarding trading accounts, CDSL depository regulations, and stock broking services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Terms & Conditions"
        subtitle="Understand the legal framework governing trading accounts and CDSL depository services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />

      <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-12">
        
        {/* Core disclaimer */}
        <section className="bg-muted/40 p-8 rounded-3xl border border-border/50 flex gap-4 items-start">
          <Scale className="w-8 h-8 text-primary shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Terms of Service Agreement</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              By opening a trading or depository account with Shri Venkatesh Stock Broker Services India Private Limited, or utilizing our services, you agree to be bound by the terms and conditions outlined below.
            </p>
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-10 divide-y divide-border/40">
          
          <section className="space-y-4 pt-10 first:pt-0">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Landmark className="w-5 h-5 text-primary" /> 1. Account Opening & Onboarding
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trading and Demat accounts are opened subject to successful KYC verification and document checks. The applicant must provide accurate, up-to-date, and complete credentials. We reserve the right to reject account registration applications if details do not match KRA database values.
            </p>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" /> 2. Trading Terminals & Risk Disclosure
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trading in stock and derivative markets involves financial risk. Order execution is dependent on BSE and CDSL network availability and systemic links. We are not liable for losses caused by technical errors, network delays, or system failures on exchange platforms.
            </p>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" /> 3. Brokerage Charges & Settlements
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Brokerage charges are levied in accordance with our tariff schedules approved by the client during onboarding. Fees, transaction taxes, GST, and SEBI charges are deducted directly from the client ledger balance. Weekly/Monthly settlements are executed as per SEBI payout calendars.
            </p>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" /> 4. Jurisdiction & Disputes
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These terms are governed by SEBI rules and Indian securities laws. Disputes arising out of trading transactions or DP activities are subject to online dispute resolution via <strong>SmartODR</strong> or the exclusive jurisdiction of the courts in Raipur, Chhattisgarh.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
