import { ArrowRight, Package, TrendingUp, LineChart, ShieldAlert } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Commodity Trading | MCX NCDEX | Shri Venkatesh Stock Broker Services",
};

export default function CommodityTradingPage() {
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
              Home &gt; Products &amp; Services &gt; Commodity
            </nav>
            <h1 className="text-4xl md:text-6xl font-display leading-tight mb-6">Commodity Trading</h1>
            <p className="text-accent text-xl max-w-2xl">
              Diversify your portfolio beyond equities. Trade in Bullion, Base Metals, Energy, and Agri-commodities on MCX and NCDEX.
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
              <h2 className="text-3xl font-display text-foreground mb-6">Why Trade in Commodities?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Commodity trading offers an excellent way to diversify your investment portfolio and hedge against inflation. With low correlation to the equity markets, commodities often provide a buffer during stock market volatility.
                </p>
                <p>
                  At Shri Venkatesh Group, through our associate **Regent Comtrade Pvt. Ltd.**, we provide expert guidance and a robust trading infrastructure for members of Multi Commodity Exchange (MCX) and National Commodity & Derivatives Exchange (NCDEX).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display text-foreground mb-8">Traded Segments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Bullion", items: "Gold, Silver, Gold Mini", color: "text-primary bg-muted" },
                  { title: "Base Metals", items: "Copper, Zinc, Aluminum, Lead, Nickel", color: "text-blue-600 bg-blue-50" },
                  { title: "Energy", items: "Crude Oil, Natural Gas", color: "text-foreground bg-muted" },
                  { title: "Agri Commodities", items: "Castor, Cotton, Chana, Jeera, Soybean", color: "text-green-600 bg-green-50" },
                ].map((segment, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-border/50 transition-all hover:shadow-sm">
                    <h3 className={`text-xl font-bold mb-3 ${segment.color.split(' ')[0]}`}>{segment.title}</h3>
                    <p className="text-muted-foreground text-sm font-medium">{segment.items}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-muted rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-display text-foreground mb-8">Service Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Daily Commodity Reports</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive analysis of global trends, inventory levels, and technical levels for major commodities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Low Latency Execution</h4>
                    <p className="text-sm text-muted-foreground">Trade seamlessly on the MCX and NCDEX platforms with rapid order placement and confirmation.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Sidebar & Risk Warning */}
          <div className="space-y-8">
            <div className="bg-background rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-display mb-6">Diversify Today</h3>
              <p className="text-accent text-sm mb-8 leading-relaxed">
                Add the power of commodities to your portfolio. Contact our commodity desk in Raipur to get started.
              </p>
              <Link
                href="/open-account"
                className={cn(buttonVariants(), "w-full h-14 rounded-full font-bold text-lg justify-center gap-2")}
              >
                Open An Account <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-orange-50 border-2 border-orange-100 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-orange-600" />
                <h3 className="text-orange-800 font-bold uppercase tracking-wider text-xs">COMMODITY RISK DISCLOSURE</h3>
              </div>
              <p className="text-sm text-orange-700 leading-relaxed italic">
                "Commodity trading involves significant risk of loss and is not suitable for all investors. The high degree of leverage that is often obtainable in commodity trading can work against you as well as for you."
              </p>
            </div>

            <div className="p-8 bg-muted/40 rounded-3xl border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Market Exchanges</h4>
              <div className="flex gap-4">
                <div className="bg-background p-3 rounded-lg border border-border/50 text-center flex-1">
                  <p className="text-xs font-extrabold text-foreground">MCX</p>
                </div>
                <div className="bg-background p-3 rounded-lg border border-border/50 text-center flex-1">
                  <p className="text-xs font-extrabold text-foreground">NCDEX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
