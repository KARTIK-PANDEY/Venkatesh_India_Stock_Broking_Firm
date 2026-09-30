import { ExternalLink, Headphones, Scale, ShieldAlert } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GRIEVANCES = [
  {
    title: "SCORES Portal",
    subtitle: "File your complaint with SEBI",
    description: "Submit complaints directly to the SEBI Complaints Redress System.",
    icon: ShieldAlert,
    btnText: "Register Complaint",
    href: "https://scores.sebi.gov.in",
    color: "border-amber-500/40 bg-amber-500/5",
    isExternal: true,
  },
  {
    title: "SmartODR",
    subtitle: "Online Dispute Resolution",
    description: "Access the common ODR portal for Indian Securities Market.",
    icon: Scale,
    btnText: "Go to SmartODR",
    href: "https://smartodr.in",
    color: "border-primary/40 bg-primary/5",
    isExternal: true,
  },
  {
    title: "Toll-Free Helpline",
    subtitle: "1800 266 7575",
    description: "SEBI Helpline (Toll Free) for any assistance or information.",
    icon: Headphones,
    btnText: "Call SEBI Helpline",
    href: "tel:18002667575",
    color: "border-border/60 bg-muted/30",
    isExternal: false,
  },
];

export default function GrievanceQuickAccess() {
  return (
    <section aria-labelledby="grievance-quick-heading" className="py-24 bg-muted/40 border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="grievance-quick-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Investor Grievances
          </h2>
          <p className="text-muted-foreground text-base">
            Prominent and easy access to grievance redressal mechanisms as mandated by SEBI.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
          {GRIEVANCES.map((item, idx) => (
            <li 
              key={idx} 
              className={`p-8 rounded-3xl border shadow-xs flex flex-col items-center text-center transition-transform hover:-translate-y-1 ${item.color}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-background border border-border/50 shadow-xs text-primary" aria-hidden="true">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">{item.title}</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-4">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {item.description}
              </p>
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-full bg-background text-foreground hover:bg-muted justify-center gap-2 font-bold text-xs uppercase tracking-wider h-11 border-border/60 shadow-xs")}
              >
                <span>{item.btnText}</span>
                {item.isExternal && (
                  <>
                    <span className="sr-only">(opens in new tab)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
