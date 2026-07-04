import { Award, Quote, UserCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Top Management | Venkatesh India",
  description: "Meet the leadership behind Venkatesh India, guiding the company with experience and integrity.",
};

export default function ManagementPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-accent py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">Top Management</h1>
          <p className="text-white/80 text-lg italic">Led by experience, driven by integrity.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16 md:py-24">
        <div className="space-y-20">

          {/* Managing Director */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="w-56 h-72 rounded-3xl border border-border/50 overflow-hidden relative shrink-0 shadow-xl shadow-primary/10 group">
              <Image
                src="/sanjiv-rathi.jpg"
                alt="Sanjiv Rathi – Founder & Managing Director, Shri Venkatesh Stock Broker Services India Pvt. Ltd."
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="224px"
                priority
              />
              {/* Name badge overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-8 pb-3 px-4 text-center">
                <p className="text-white text-xs font-extrabold uppercase tracking-widest drop-shadow">Founder &amp; MD</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Managing Director</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Sanjiv Rathi</h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Mr. Sanjiv Rathi is the visionary founder and Managing Director of the Shri Venkatesh Group.
                  With over 25 years of profound experience in the Indian capital markets, he has been instrumental
                  in shaping the group&apos;s growth trajectory from a local firm to a regional powerhouse in eastern India.
                </p>
                <p>
                  His deep understanding of financial instruments, commitment to transparency, and client-centric
                  approach have earned him immense respect in the industry. Under his leadership, the group has
                  successfully navigated through multiple market cycles, always prioritizing investor protection
                  and sustainable wealth creation.
                </p>
              </div>

              <div className="mt-10 p-8 bg-muted/40 border border-border/50 rounded-3xl italic relative">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary opacity-20" />
                <p className="text-foreground text-lg leading-relaxed pl-4">
                  &quot;Our goal is not just to facilitate trades, but to empower every individual with the right
                  knowledge and tools to build a secure financial future. Trust is our most valuable asset.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="pt-16 border-t border-border/50 text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-12">Board of Directors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { name: "Executive Director", role: "Strategy & Growth" },
                { name: "Director – Compliance", role: "Risk & Legal" },
                { name: "Director – Operations", role: "Backoffice & Tech" },
              ].map((member, i) => (
                <div key={i} className="p-8 bg-muted/40 border border-border/50 rounded-3xl hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCircle2 className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-xs text-primary font-semibold uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
