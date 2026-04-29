import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import CompanyIntro from "@/components/layout/CompanyIntro";
import MarketTicker from "@/components/layout/MarketTicker";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Shri Venkatesh Stock Broker Services India Pvt. Ltd. | SEBI Registered Broker Raipur",
  description: "Experience premium financial services with cutting-edge technology. SEBI-registered stock broker in Raipur, Chhattisgarh since 2010.",
  openGraph: {
    title: "Shri Venkatesh Stock Broker Services India Pvt. Ltd. | SEBI Registered Broker Raipur",
    description: "Experience premium financial services with cutting-edge technology.",
    url: "https://venkateshindia.com",
    siteName: "Venkatesh India",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary`}
      >
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only absolute -top-[100px] left-4 bg-[#0B2545] text-white px-5 py-3 rounded-b-lg text-base font-semibold z-[9999] transition-[top] duration-200 focus:top-0">Skip to main content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <AnnouncementBar />
            <Header />
            <CompanyIntro />
            <MarketTicker />
            <main id="main-content" tabIndex={-1} className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
