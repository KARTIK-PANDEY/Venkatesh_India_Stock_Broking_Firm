import { Building2, ShieldCheck, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GROUP_COMPANIES } from "@/lib/constants";

export const metadata = {
  title: "Group Companies | Venkatesh India",
  description: "The group companies of Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
};

export default function GroupCompaniesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">Group Companies</h1>
          <p className="text-white/80 text-lg italic">
            A focused financial group delivering trusted services to investors across India.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GROUP_COMPANIES.map((company, i) => (
            <div
              key={i}
              className="group flex flex-col p-8 md:p-10 rounded-3xl bg-muted/40 border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + Name */}
              <div className="flex gap-5 items-start mb-6">
                <div className="shrink-0 p-4 rounded-2xl bg-background text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-1">
                    {company.name}
                  </h2>
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      {company.website.replace("https://", "")}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {company.description}
              </p>

              {/* Meta badges */}
              <div className="space-y-3 pt-5 border-t border-border/50">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{company.activity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {company.registration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Unified Strength</h2>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl mx-auto">
              Together, the Venkatesh India group and Disa Financial Services deliver a comprehensive suite of financial services — from equity trading and depository services to wealth management and financial planning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
