import { Download, ShieldCheck, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn, getFileUrl } from "@/lib/utils";

export const metadata = {
  title: "Investor Charter (SEBI 2025) | Investor Resources | Shri Venkatesh Stock Broker Services",
};

export default function InvestorCharterPage() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-background py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
                Home &gt; Investor Resources &gt; Investor Charter
              </nav>
              <h1 className="text-4xl md:text-6xl font-display leading-tight">Investor Charter</h1>
              <p className="text-accent text-lg mt-4 max-w-2xl italic">
                As mandated by SEBI Circular dated February 21, 2025
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href={getFileUrl("/Investor_Charter_SHRI_VSB.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default" }), "rounded-full px-6 h-11 text-xs shadow-lg gap-2 font-bold")}
              >
                <Download className="w-4 h-4" /> SEBI Investor Charter
              </a>
              <a
                href={getFileUrl("/Investor_Charter_STOCK_BROKER-BSe-m.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 h-11 text-xs shadow-lg gap-2 font-bold border-white/20 hover:bg-white/10 text-white")}
              >
                <Download className="w-4 h-4" /> Stock Broker Charter (BSE)
              </a>
              <a
                href="http://cp-in-10.whb.tempwebhost.net/~venkakgl/investorchart2.php"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 h-11 text-xs shadow-lg gap-2 font-bold border-white/20 hover:bg-white/10 text-white")}
              >
                <Download className="w-4 h-4" /> Charter for SVSBS
              </a>
              <a
                href="/investor-resources/complaint-data?tab=dp"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6 h-11 text-xs shadow-lg gap-2 font-bold border-white/20 hover:bg-white/10 text-white")}
              >
                <Download className="w-4 h-4" /> DP Charter (Annexure C)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Section A: Vision */}
          <section className="bg-muted/40 p-8 md:p-12 rounded-3xl border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-foreground" />
              <h2 className="text-2xl md:text-3xl font-display text-foreground uppercase tracking-wide">
                A. Vision of the Organization
              </h2>
            </div>
            <p className="text-xl text-foreground leading-relaxed italic">
              &quot;To establish and maintain a relationship of trust and ethics with the investors. To observe highest standard of compliances and transparency in the interest of the investors and the securities market.&quot;
            </p>
          </section>

          {/* Section B: Services & Timelines */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display text-foreground uppercase tracking-wide">
                B. Services Provided to Investors & Timelines
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border/50 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-background text-white text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-bold">Service Category</th>
                    <th className="px-6 py-4 font-bold">Timeline / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border bg-background text-muted-foreground">
                  {[
                    { s: "Client details entry after account opening", t: "Within 3 working days" },
                    { s: "Client onboarding / account activation", t: "Within 1 week" },
                    { s: "Order execution", t: "Same day (subject to market conditions)" },
                    { s: "Issuance of contract notes", t: "Within 24 hours of trade" },
                    { s: "Processing of client funds / payout", t: "Within regulatory timelines" },
                    { s: "Resolution of client grievances", t: "Within 21 days" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/40 transition-colors">
                      <td className="px-6 py-4 font-bold text-foreground">{row.s}</td>
                      <td className="px-6 py-4">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section C: Rights of Investors */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl md:text-3xl font-display text-foreground uppercase tracking-wide">
                C. Rights of Investors
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Right to receive contract notes within 24 hours",
                "Right to timely settlement of funds and securities",
                "Right to receive statement of accounts periodically",
                "Right to file a complaint for any grievance",
                "Right to receive all relevant documents of account opening",
                "Right to participate in eVoting for companies held"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-background border border-border/50 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section D & E: Dos and Don'ts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section className="bg-green-50 p-8 rounded-3xl border border-green-200">
              <h3 className="text-2xl font-display text-green-800 mb-6 uppercase tracking-wide">D. Dos for Investors</h3>
              <ul className="space-y-4">
                {[
                  "Read all documents before signing",
                  "Register mobile/email with stock broker",
                  "Receive contract notes for every trade",
                  "Verify trade details from exchange SMS/Email",
                  "Retain all relevant documents of transactions",
                  "Approach proper authority for grievances"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-green-700">
                    <span className="shrink-0 text-green-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-red-50 p-8 rounded-3xl border border-red-200">
              <h3 className="text-2xl font-display text-red-800 mb-6 uppercase tracking-wide">E. Don&apos;ts for Investors</h3>
              <ul className="space-y-4">
                {[
                  "Don't deal with unregistered brokers",
                  "Don't leave blanks in any form",
                  "Don't transfer funds to personal accounts",
                  "Don't share passwords with anyone",
                  "Don't fall for guaranteed return schemes",
                  "Don't ignore exchange notifications"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-red-700">
                    <span className="shrink-0 text-red-600">✗</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Section F: Grievance Redressal */}
          <section className="border-t border-border/50 pt-16">
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display text-foreground uppercase tracking-wide">
                F. Grievance Redressal Mechanism
              </h2>
            </div>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Investors should follow the below-mentioned 4-step escalation process for resolution of grievances:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { s: "Step 1", t: "Stock Broker", d: "Internal redressal within 5-7 days" },
                { s: "Step 2", t: "Stock Exchange", d: "If not resolved by broker" },
                { s: "Step 3", t: "SEBI SCORES 2.0", d: "Regulator's online portal" },
                { s: "Step 4", t: "SmartODR", d: "Online Dispute Resolution" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-muted rounded-2xl border border-border/50">
                  <span className="text-xs font-extrabold text-primary uppercase mb-2">{step.s}</span>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.t}</h4>
                  <p className="text-xs text-muted-foreground">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
