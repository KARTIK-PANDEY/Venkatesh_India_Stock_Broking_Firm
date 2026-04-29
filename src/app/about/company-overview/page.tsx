import { Building2, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { COMPANY_INFO, REGISTRATION_DETAILS, GROUP_COMPANIES } from "@/lib/constants";

export const metadata = {
  title: "Company Overview | About Us | Shri Venkatesh Stock Broker Services",
  description: "Learn about Shri Venkatesh Stock Broker Services India Pvt. Ltd. – a SEBI-registered broker serving investors since 2010.",
};

export default function CompanyOverviewPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-accent py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">Company Overview</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            A trusted name in financial services — building wealth and relationships since 2010.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24 space-y-20">
        {/* About */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                <strong className="text-foreground">Shri Venkatesh Stock Broker Services India Pvt. Ltd.</strong> is a SEBI-registered
                stock broking firm headquartered in Raipur, Chhattisgarh. Founded in 2010, we have grown
                into one of the most trusted financial services providers in eastern and central India.
              </p>
              <p>
                We are members of BSE and operate as Depository Participants with CDSL.
              </p>
              <p>
                Our comprehensive suite of services spans equity trading, derivatives, commodities,
                mutual funds, IPOs, and depository services — all under one roof.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: "SEBI Registered", value: "INZ000231135" },
              { icon: Building2, label: "Incorporated", value: "2010" },
              { icon: TrendingUp, label: "Exchanges", value: "BSE · CDSL" },
              { icon: Users, label: "Depository", value: "CDSL Member" },
            ].map((item, i) => (
              <div key={i} className="bg-muted/40 border border-border/50 rounded-2xl p-5 flex flex-col gap-3">
                <item.icon className="w-7 h-7 text-primary" />
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration */}
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">Registration Details</h2>
          <div className="bg-muted/40 border border-border/50 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["SEBI Registration No.", REGISTRATION_DETAILS.sebi_reg],
                  ["BSE Cash Membership", REGISTRATION_DETAILS.bse_cash],
                  ["BSE F&O Membership", REGISTRATION_DETAILS.bse_fo],
                  ["CDSL DP ID", REGISTRATION_DETAILS.cdsl_dp],
                  ["CIN", REGISTRATION_DETAILS.cin],
                ].map(([label, value], i) => (
                  <tr key={i} className="border-b border-border/50 last:border-b-0">
                    <td className="px-6 py-4 font-semibold text-muted-foreground w-1/2">{label}</td>
                    <td className="px-6 py-4 font-mono font-bold text-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Group Companies */}
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">Group Companies</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {GROUP_COMPANIES.map((co, i) => (
              <div key={i} className="bg-muted/40 border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <h3 className="font-bold text-foreground mb-2">{co.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{co.activity}</p>
                <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">{co.registration}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-muted/40 border border-border/50 rounded-2xl p-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Registered Office</h2>
          <p className="text-muted-foreground text-lg">{COMPANY_INFO.address}</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
            <span>📞 {COMPANY_INFO.phones.join(" / ")}</span>
            <span>✉️ {COMPANY_INFO.email}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
