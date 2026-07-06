import { CheckCircle2, FlaskConical, Gavel, UserCheck, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const POINTS = [
  {
    title: "Research-Backed Guidance",
    description: "Our in-house research team provides timely market reports and currency updates to help you make informed decisions in a volatile market.",
    icon: FlaskConical,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Compliance-First Approach",
    description: "As a SEBI-registered intermediary, we maintain the highest standards of investor protection, transparency and regulatory compliance at every step.",
    icon: Gavel,
    color: "text-foreground",
    bg: "bg-muted"
  },
  {
    title: "Personalised Service",
    description: "Dedicated relationship managers for HNI clients. Walk-in support at our Raipur office. We believe in human support, not just an automated app experience.",
    icon: UserCheck,
    color: "text-primary",
    bg: "bg-muted"
  },
  {
    title: "Eastern India's Trusted Broker",
    description: "Deeply rooted in Raipur and Chhattisgarh since 2010. Understanding local investor needs and building long-term relationships is our competitive advantage.",
    icon: Heart,
    color: "text-red-600",
    bg: "bg-red-50"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-muted/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            The <span className="text-primary italic">Venkatesh India</span> Advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            Since 2010, we have built a reputation for trust, reliability, and excellence in the financial services sector.
          </p>
        </div>

        <div className="space-y-24">
          {POINTS.map((point, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col gap-12 items-center",
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Text Content */}
              <div className="flex-1 max-w-xl">
                <div className={cn("inline-flex p-3 rounded-2xl mb-6", point.bg, point.color)}>
                  <point.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                  {point.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {point.description}
                </p>
                <ul className="space-y-3">
                  {["Expert analysis", "Transparent pricing", "Unmatched reliability"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative / Visual */}
              <div className="flex-1 w-full max-w-lg">
                <div className="aspect-square bg-background rounded-3xl shadow-sm border border-border/50 relative overflow-hidden flex items-center justify-center p-12">
                  <div className={cn("absolute inset-0 opacity-5", point.bg)} 
                       style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <point.icon className={cn("w-32 h-32 opacity-20", point.color)} strokeWidth={1} />
                  <div className="absolute bottom-8 right-8 bg-background text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Trust Since 2010
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
