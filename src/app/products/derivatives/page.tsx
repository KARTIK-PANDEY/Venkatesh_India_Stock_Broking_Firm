import { ArrowRight, Zap, Target, LineChart, ShieldAlert, MonitorSmartphone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Futures & Options (F&O) Trading | Products | Shri Venkatesh Stock Broker Services",
};

export default function DerivativesTradingPage() {
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
              Home &gt; Products &amp; Services &gt; Derivatives (F&amp;O)
            </nav>
            <h1 className="text-4xl md:text-6xl font-display leading-tight mb-6">Derivatives Trading</h1>
            <p className="text-accent text-xl max-w-2xl">
              Hedge your risks and leverage your positions. Trade Stock Futures &amp; Options on BSE with expert guidance.
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
              <h2 className="text-3xl font-display text-foreground mb-6">Master the Art of Hedging</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Derivatives are financial contracts whose value is derived from an underlying asset, such as a stock or an index. In the Indian markets, Futures and Options (F&O) are the most popular derivative instruments, offering traders the ability to speculate on price movements and hedge their portfolios against market volatility.
                </p>
                <p>
                  At Shri Venkatesh Stock Broker Services, we provide sophisticated tools and research to help you navigate the complexities of F&O trading with precision and discipline.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display text-foreground mb-8">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:border-primary">
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Futures Trading</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Trade in standard contracts to buy or sell an asset at a predetermined price on a future date. Ideal for directional speculation and hedging.
                  </p>
                </div>
                <div className="p-8 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:border-primary">
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Options Trading</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Buy or sell the right (but not the obligation) to trade an asset. Use various strategies like calls, puts, and spreads to profit from different market scenarios.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-muted rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-display text-foreground mb-8">Platform & Technology</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="flex-1 space-y-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                        <MonitorSmartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">NEST Desktop Terminal</h4>
                        <p className="text-sm text-muted-foreground">A robust, high-performance trading platform for professional traders requiring advanced charting and rapid execution.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                        <LineChart className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Advanced Options Chain</h4>
                        <p className="text-sm text-muted-foreground">Analyze Greeks, implied volatility, and open interest in real-time to make informed options trading decisions.</p>
                      </div>
                    </div>
                 </div>
                 <div className="w-full md:w-64 aspect-square bg-background rounded-2xl flex items-center justify-center p-8 text-center text-white">
                    <div>
                      <p className="text-3xl font-display mb-2">High Leverage</p>
                      <p className="text-xs opacity-70 uppercase tracking-widest font-bold">As per SEBI norms</p>
                    </div>
                 </div>
              </div>
            </section>
          </div>

          {/* Right: Sidebar & Risk Warning */}
          <div className="space-y-8">
            <div className="bg-background rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-display mb-6">Ready to Hedge?</h3>
              <p className="text-accent text-sm mb-8 leading-relaxed">
                Derivatives require knowledge and discipline. Open your account today and get access to our expert derivatives desk.
              </p>
              <Link
                href="/open-account"
                className={cn(buttonVariants(), "w-full h-14 rounded-full font-bold text-lg justify-center gap-2")}
              >
                Open An Account <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                <h3 className="text-red-800 font-bold uppercase tracking-wider text-xs">MANDATORY DISCLOSURE</h3>
              </div>
              <p className="text-sm text-red-700 leading-relaxed italic mb-4">
                &quot;9 out of 10 individual traders in equity Cash and F&O segment incurred net losses. On an average, loss makers registered net loss close to ₹ 50,000. Over and above the net losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.&quot;
              </p>
              <p className="text-[10px] text-red-600 font-bold uppercase">Source: SEBI Study dated Jan 2023</p>
            </div>
            
            <div className="p-8 bg-muted/40 rounded-3xl border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/products/equity" className="text-primary hover:underline">Equity Trading</Link></li>
                <li><Link href="/products/commodity" className="text-primary hover:underline">Commodity Trading</Link></li>
                <li><Link href="/investor-resources/risk-disclosure" className="text-primary hover:underline">Risk Disclosure</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
