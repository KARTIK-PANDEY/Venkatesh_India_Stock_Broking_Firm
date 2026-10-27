import { Star, Lightbulb, HandshakeIcon, Globe2 } from "lucide-react";
import { MISSION_VISION } from "@/lib/constants";

export const metadata = {
  title: "Core Values | Venkatesh India",
  description: "The core values that guide Venkatesh India – commitment, integrity, quality, and diversity.",
};

export default function CoreValuesPage() {
  const icons = [Star, Lightbulb, HandshakeIcon, Globe2];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-accent py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">Core Values</h1>
          <p className="text-white text-lg max-w-2xl">
            The principles that drive every decision we make and every relationship we build.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24 space-y-16">
        {/* Values Grid */}
        <section aria-labelledby="core-values-grid-heading">
          <h2 id="core-values-grid-heading" className="sr-only">Our Core Values</h2>
          <ul className="grid sm:grid-cols-2 gap-8 list-none p-0 m-0">
            {MISSION_VISION.values.map((value, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={i} className="bg-muted/40 border border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Mission & Vision Summary */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">{MISSION_VISION.mission}</p>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">{MISSION_VISION.vision}</p>
          </div>
        </section>
      </div>
    </div>
  );
}





