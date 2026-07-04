"use client";

import PageHero from "@/components/layout/PageHero";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SmartOdrPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Online Dispute Resolution (SmartODR)"
        subtitle="SEBI ODR platform (SmartODR) for dispute resolution in the Indian Securities Market. Facilitating online conciliation and arbitration."
        breadcrumbs={[{ label: "Investor Resources" }, { label: "SmartODR" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          {/* Left / Middle: Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-4">
              <h2 className="text-3xl font-display font-bold text-foreground">What is SmartODR?</h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  SmartODR is a common Online Dispute Resolution (ODR) portal initiated under the aegis of SEBI. The platform allows investors to escalate complaints that are not resolved satisfactorily through direct broker resolution or SEBI SCORES.
                </p>
                <p>
                  SmartODR redirects complaints to qualified independent ODR institutions that execute online conciliation and arbitration, providing a legally binding, digital alternative to civil court cases.
                </p>
              </div>
            </section>

            {/* How it works steps */}
            <section className="bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Dispute Resolution Process</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Attempt Direct Redressal", desc: "First register the complaint with us directly. If unresolved or unsatisfactorily resolved, proceed to Level 2 (SCORES)." },
                  { step: "2", title: "Lodge ODR Dispute", desc: "If SCORES does not yield a satisfactory response, log on to SmartODR and file a dispute request naming our entity." },
                  { step: "3", title: "Conciliation", desc: "The designated ODR institution appoints a conciliator to mediate a mutual agreement between the investor and the broker." },
                  { step: "4", title: "Arbitration", desc: "If conciliation fails, the dispute is escalated to online arbitration where an arbitrator hears both sides and issues a binding award." },
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
            {/* Direct ODR Action */}
            <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-display mb-4">Launch SmartODR</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Connect directly to the ODR portal to register yourself as an investor and submit dispute documents.
              </p>
              <a
                href="https://smartodr.in"
                target="_blank"
                className={cn(buttonVariants(), "w-full h-13 rounded-full font-bold text-sm justify-center items-center flex gap-2 text-white")}
              >
                Investor Registration <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* SmartODR Intermediary Login */}
            <div className="p-8 bg-background border border-border/50 rounded-3xl shadow-xs">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Intermediary Login</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                For market participants and partners looking to log in to the ODR dashboard.
              </p>
              <a
                href="https://smartodr.in/intermediary/dashboard"
                target="_blank"
                className={cn(buttonVariants({ variant: "outline" }), "w-full h-12 rounded-full font-bold text-sm justify-center items-center flex gap-2")}
              >
                Go to Partner Dashboard <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
