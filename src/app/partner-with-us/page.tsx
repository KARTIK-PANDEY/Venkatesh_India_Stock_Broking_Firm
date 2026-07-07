import Link from "next/link";
import { CheckCircle2, Mail, Phone, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Become a Sub-Broker Partner | Shri Venkatesh Stock Broker Services",
  description: "Become a sub-broker or channel partner with Shri Venkatesh Stock Broker Services India Pvt. Ltd. and earn attractive commissions.",
};

export default function PartnerWithUsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-accent py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-4">Business Opportunity</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">
            Partner With Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Join the Venkatesh India network as a Sub-Broker or Authorised Person and build a rewarding business backed by 15+ years of market expertise.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24 space-y-20">

        {/* Why Partner */}
        <section>
          <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Why Partner with Venkatesh India?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Attractive Revenue Share", desc: "Earn competitive brokerage commissions across Equity, F&O, and Currency segments." },
              { title: "Strong Brand Support", desc: "Leverage 15+ years of established trust and credibility in eastern and central India." },
              { title: "Insight & Advisory", desc: "Provide your clients with daily market insights, technical reviews, and personalized advisory support." },
              { title: "Technology Platform", desc: "Access to our robust trading terminals, back-office systems, and dedicated client portals." },
              { title: "Training & Development", desc: "Regular training programs, product knowledge sessions, and compliance guidance for your team." },
              { title: "Full Back-Office Support", desc: "Dedicated relationship manager, settlement support, and compliance assistance." },
            ].map((item, i) => (
              <div key={i} className="bg-muted/40 border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Must be at least 18 years of age",
              "Minimum educational qualification: 12th pass (preferably Graduate)",
              "NISM Series-X-A & X-B certification (or willingness to obtain)",
              "Adequate infrastructure — office space, computer, internet connection",
              "No adverse regulatory history or criminal record",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">How to Get Started</h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Enquire", desc: "Contact our partnership desk via phone or email" },
              { step: "02", title: "Documentation", desc: "Submit identification, educational & infrastructure documents" },
              { step: "03", title: "Agreement", desc: "Sign the sub-broker / AP agreement and deposit registration fees" },
              { step: "04", title: "Go Live", desc: "Receive your login, terminal access, and start servicing clients" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-muted/30 border border-border/50 rounded-2xl">
                <p className="text-3xl font-display font-bold text-primary/30 mb-3">{item.step}</p>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Join the Network?</h2>
              <p className="text-white/80 text-sm">Reach out to our partnership team — we respond within 24 hours.</p>
              <div className="mt-4 space-y-1 text-sm text-white/90 font-medium">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {COMPANY_INFO.phones[0]}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {COMPANY_INFO.email}</p>
              </div>
            </div>
            <Link
              href="/open-account"
              className={cn(buttonVariants(), "bg-white text-primary hover:bg-white/90 rounded-full h-12 px-8 font-bold shrink-0 gap-2")}
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
