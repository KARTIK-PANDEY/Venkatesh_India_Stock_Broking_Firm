import { ArrowRight, BarChart3, Clock, LineChart, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Equity Trading Services | Products | Shri Venkatesh Stock Broker Services",
};

export default function EquityTradingPage() {
  return (
    <div className="bg-background">
      {/* Product Hero */}
      <div className="bg-background py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
              Home &gt; Products &amp; Services &gt; Equity Trading
            </nav>
            <h1 className="text-4xl md:text-6xl font-display leading-tight mb-6">Equity Trading</h1>
            <p className="text-accent text-xl max-w-2xl">
              Empowering you to own a share in India&apos;s growth story. Trade on BSE with confidence and expert guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: Product Details */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-display text-foreground mb-6">What is Equity Trading?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Equity trading involves buying and selling shares of publicly traded companies on the Bombay Stock Exchange (BSE). By trading in equities, you become a shareholder in the company, participating in its growth and success.
                </p>
                <p>
                  At Shri Venkatesh Stock Broker Services, we provide you with the tools, technology, and research to navigate the equity markets effectively, whether you are a long-term investor or a short-term trader.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display text-foreground mb-8">Segments We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-muted/40 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Cash / Delivery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Buy shares and hold them in your demat account for long-term wealth creation. You own the assets and can benefit from dividends and capital appreciation.
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <li>• 100% Fund based trading</li>
                    <li>• Asset ownership</li>
                    <li>• Long-term vision</li>
                  </ul>
                </div>
                <div className="p-8 bg-muted rounded-2xl border border-primary/20">
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Intraday Trading</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Buy and sell shares within the same trading day. Benefit from small price movements using leverage to amplify your trading potential.
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <li>• Margin based trading</li>
                    <li>• Square off by EOD</li>
                    <li>• High frequency potential</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-muted rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-display text-foreground mb-8">Why Trade Equity with Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Expert Research", desc: "Timely market updates and technical reports from our experienced analysts.", icon: LineChart },
                  { title: "Personalised Support", desc: "Dedicated relationship managers to guide you through your investment journey.", icon: Clock },
                  { title: "Low Latency Trading", desc: "Robust technology platforms for seamless order execution on BSE.", icon: Zap },
                  { title: "SEBI Compliant", desc: "Safe and transparent trading environment following all regulatory guidelines.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar & Risk Warning */}
          <div className="space-y-8">
            <div className="bg-background rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-display mb-6">Ready to Start?</h3>
              <p className="text-accent text-sm mb-8 leading-relaxed">
                Open your trading and demat account today and start your journey towards financial independence.
              </p>
              <Link
                href="/open-account"
                className={cn(buttonVariants(), "w-full h-14 rounded-full font-bold text-lg justify-center")}
              >
                Open An Account <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8">
              <h3 className="text-red-800 font-bold mb-4 uppercase tracking-wider text-xs">MANDATORY RISK WARNING</h3>
              <p className="text-sm text-red-700 leading-relaxed italic">
                &quot;Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Derivatives trading involves substantial risk and is not suitable for all investors. Ensure you understand the risks involved before trading.&quot;
              </p>
            </div>

            <div className="p-8 bg-muted/40 rounded-3xl border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/products/derivatives" className="text-primary hover:underline">Derivatives Trading</Link></li>
                <li><Link href="/investor-resources/downloads" className="text-primary hover:underline">Download Forms</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
