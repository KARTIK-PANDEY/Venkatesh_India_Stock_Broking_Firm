import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PartnerCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl overflow-hidden p-10 md:p-16 shadow-2xl shadow-primary/20">
          {/* Decorative Blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8 text-white">
                Grow Your Business as a{" "}
                <span className="text-white/70 italic">Venkatesh India</span>{" "}
                Partner
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  "Earn attractive commissions across all product segments",
                  "Full back-office and compliance support for your clients",
                  "Proven brand with 15+ years of trust in eastern India",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span className="text-lg md:text-xl font-medium text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Link
                href="/partner-with-us"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-primary hover:bg-white/90 h-14 px-10 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
                )}
              >
                Become a Partner →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
