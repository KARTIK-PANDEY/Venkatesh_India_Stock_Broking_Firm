import { Mail, Phone, ExternalLink, ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";
import Image from "next/image";

export const metadata = {
  title: "Grievance Escalation Matrix | Investor Resources | Shri Venkatesh Stock Broker Services",
};

const STEPS = [
  {
    level: 1,
    title: `${COMPANY_INFO.name} (Internal)`,
    contact: "Compliance Officer",
    details: [
      { label: "Name", value: COMPANY_INFO.compliance.name },
      { label: "Email", value: COMPANY_INFO.compliance.email },
      { label: "Phone", value: COMPANY_INFO.compliance.phone },
    ],
    turnaround: "5 working days",
    color: "border-primary bg-blue-50 text-foreground",
    btn: null
  },
  {
    level: 2,
    title: "Stock Exchange Grievance Cell",
    contact: "BSE Investor Services",
    details: [
      { label: "BSE", value: "bseindia.com/investors" },
    ],
    turnaround: "15 working days",
    color: "border-primary bg-muted text-foreground",
    btn: { text: "Go to BSE Portal", href: "https://www.bseindia.com/investors" }
  },
  {
    level: 3,
    title: "SEBI SCORES 2.0",
    contact: "Market Regulator",
    details: [
      { label: "URL", value: "scores.sebi.gov.in" },
      { label: "Toll Free", value: "1800 266 7575" },
    ],
    turnaround: "21 days",
    color: "border-orange-500 bg-orange-50 text-orange-900",
    btn: { text: "Register on SCORES", href: "https://scores.sebi.gov.in" }
  },
  {
    level: 4,
    title: "SmartODR",
    contact: "Online Dispute Resolution",
    details: [
      { label: "URL", value: "smartodr.in" },
      { label: "Circular", value: "SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131" },
    ],
    turnaround: "As per ODR timelines",
    color: "border-foreground bg-background text-white",
    btn: { text: "Go to SmartODR", href: "https://smartodr.in" }
  },
];

export default function EscalationMatrixPage() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-background py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Home &gt; Investor Resources &gt; Escalation Matrix
          </nav>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-display leading-tight mb-4">Escalation Matrix</h1>
              <p className="text-accent text-lg max-w-2xl">
                A structured approach to resolving your grievances in a timely and transparent manner.
              </p>
            </div>
            <a
              href="http://cp-in-10.whb.tempwebhost.net/~venkakgl/escmatrix.php"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-8 h-12 shadow-lg gap-2 font-bold border-white/20 hover:bg-white/10 text-white shrink-0")}
            >
              View Live Escalation Matrix
            </a>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              <div className={`p-8 md:p-10 rounded-[2rem] border-2 shadow-sm transition-all duration-300 hover:shadow-lg ${step.color}`}>
                <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center font-display text-2xl border border-border/10">
                        {step.level}
                      </span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-display uppercase tracking-wide">{step.title}</h2>
                        <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">{step.contact}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx}>
                          <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{detail.label}</p>
                          <p className="font-bold truncate">{detail.value}</p>
                        </div>
                      ))}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Response Time</p>
                        <p className="font-bold">{step.turnaround}</p>
                      </div>
                    </div>

                    {step.btn && (
                      <a
                        href={step.btn.href}
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "rounded-full gap-2")}
                      >
                        {step.btn.text} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {idx < STEPS.length - 1 && (
                <div className="flex justify-center py-6">
                  <ArrowDown className="text-foreground/20 w-12 h-12" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Visual Matrix Chart */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-muted/40 p-8 rounded-3xl border border-border/50 text-center space-y-6">
          <h3 className="text-xl font-bold text-foreground">Official Escalation Flow Chart</h3>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            Refer to our visual compliance layout detailing escalation contact nodes, levels, and estimated resolution turnarounds.
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-xs max-w-2xl mx-auto group">
            <Image
              src="/escalation_matrix.jpg"
              alt="Official Grievance Escalation Matrix Chart"
              width={672}
              height={400}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto bg-muted rounded-3xl p-8 md:p-12 border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-4">Mandatory Information</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In case of any queries or grievances, please first reach out to our internal compliance department at the details provided in Level 1. If the resolution is not satisfactory, you may escalate to the respective Stock Exchange or Depository.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-center p-6 bg-background rounded-2xl border border-border/50">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">Direct Helpline</p>
                <p className="font-bold">{COMPANY_INFO.phones[0]}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-6 bg-background rounded-2xl border border-border/50">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">Compliance Email</p>
                <p className="font-bold">{COMPANY_INFO.compliance.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 