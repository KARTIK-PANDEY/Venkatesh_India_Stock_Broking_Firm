import { CheckCircle2, FileText, Smartphone, UserPlus, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import OpenAccountForm from "./OpenAccountForm";

export const metadata = {
  title: "Open Trading & Demat Account | Shri Venkatesh Stock Broker Services",
};

const STEPS = [
  { title: "Fill the Form", desc: "Enter your basic contact details to start the process.", icon: FileText },
  { title: "Complete eKYC", desc: "Submit PAN, Aadhaar, and Bank proof digitally.", icon: Smartphone },
  { title: "Start Trading", desc: "Once verified, your account will be activated within days.", icon: UserPlus },
];

const REQUIREMENTS = [
  "PAN Card", "Aadhaar Card (linked with Mobile)", "Cancelled Cheque / Bank Statement", "Digital Signature / Photo"
];

export default function OpenAccountPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-background py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display leading-tight mb-4 text-center">Open Your Trading & Demat Account</h1>
          <p className="text-accent text-lg max-w-2xl mx-auto text-center italic">
            Join thousands of satisfied investors in eastern India. Secure, fast, and fully digital.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Content & Steps */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-display text-foreground mb-8">3 Easy Steps to Get Started</h2>
              <div className="space-y-8">
                {STEPS.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-muted/40 border border-border/50 flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-muted rounded-3xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Documents Required</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {REQUIREMENTS.map((req, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-orange-50 border-2 border-orange-100 rounded-3xl p-8 flex gap-4">
              <ShieldAlert className="w-12 h-12 text-orange-600 shrink-0" />
              <div className="text-sm text-orange-800 leading-relaxed italic">
                <p className="font-bold mb-2 uppercase">SEBI Mandated Risk Disclosure:</p>
                "Investment in securities market are subject to market risks. Read all related documents carefully before investing. Please go through our Risk Disclosure document before proceeding."
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="bg-background p-8 md:p-12 rounded-[2.5rem] border-2 border-border/50 shadow-2xl relative">
            <div className="absolute top-0 right-12 transform -translate-y-1/2">
              <div className="bg-brand-gold text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                Fast Processing
              </div>
            </div>
            
            <h2 className="text-3xl font-display text-foreground mb-2 text-center">Request a Callback</h2>
            <p className="text-muted-foreground mb-10 text-center">Fill in your details to start the onboarding process.</p>
            
            <OpenAccountForm />
          </div>

        </div>
      </div>
    </div>
  );
}
