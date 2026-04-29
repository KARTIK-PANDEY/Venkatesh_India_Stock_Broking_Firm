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
    color: "border-orange-500 bg-orange-50",
  },
  {
    title: "SmartODR",
    subtitle: "Online Dispute Resolution",
    description: "Access the common ODR portal for Indian Securities Market.",
    icon: Scale,
    btnText: "Go to SmartODR",
    href: "https://smartodr.in",
    color: "border-primary bg-blue-50",
  },
  {
    title: "Toll-Free Helpline",
    subtitle: "1800 266 7575",
    description: "SEBI Helpline (Toll Free) for any assistance or information.",
    icon: Headphones,
    btnText: "Call SEBI Helpline",
    href: "tel:18002667575",
    color: "border-primary bg-muted",
  },
];

export default function GrievanceQuickAccess() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display text-foreground mb-4">
            Investor Grievances
          </h2>
          <p className="text-muted-foreground">
            Prominent and easy access to grievance redressal mechanisms as mandated by SEBI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GRIEVANCES.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border-2 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 ${item.color}`}
            >
              <div className="mb-6 p-4 rounded-full bg-background shadow-sm text-foreground">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-primary font-bold text-sm mb-4">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                className={cn(buttonVariants(), "w-full rounded-full bg-background text-foreground hover:bg-muted justify-center gap-2")}
              >
                {item.btnText} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
