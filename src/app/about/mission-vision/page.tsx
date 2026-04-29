import { Target, Eye, Gem, CheckCircle2 } from "lucide-react";
import { MISSION_VISION } from "@/lib/constants";

export default function MissionVisionPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-background py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Home &gt; About Us &gt; Mission &amp; Vision
          </nav>
          <h1 className="text-4xl md:text-6xl font-display leading-tight">Mission & Vision</h1>
          <p className="text-accent text-lg mt-4 max-w-2xl italic">
            Defining our purpose and our future in the financial landscape.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Mission */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex p-4 rounded-3xl bg-muted text-primary mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed italic">
                "{MISSION_VISION.mission}"
              </p>
            </div>
            <div className="lg:w-1/2 aspect-video bg-muted rounded-3xl border border-border/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0B2545 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <Target className="w-32 h-32 text-foreground opacity-5" strokeWidth={1} />
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex p-4 rounded-3xl bg-blue-50 text-primary mb-6">
                <Eye className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Our Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed italic">
                "{MISSION_VISION.vision}"
              </p>
            </div>
            <div className="lg:w-1/2 aspect-video bg-muted rounded-3xl border border-border/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2E6DA4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <Eye className="w-32 h-32 text-primary opacity-5" strokeWidth={1} />
            </div>
          </div>

          {/* Core Values */}
          <section className="pt-16 border-t border-border/50">
            <div className="text-center mb-16">
              <div className="inline-flex p-4 rounded-3xl bg-purple-50 text-purple-600 mb-6">
                <Gem className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">Core Values</h2>
              <p className="text-muted-foreground">The principles that guide our behavior and decision-making.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MISSION_VISION.values.map((val, i) => (
                <div key={i} className="p-8 bg-muted/40 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{val.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
