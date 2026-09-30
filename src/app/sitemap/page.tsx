import Link from "next/link";
import { Metadata } from "next";
import { Search, ExternalLink, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Sitemap | Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
  description: "Comprehensive structured sitemap and directory of all pages, products, services, compliance charters, and regulatory disclosures.",
};

interface SitemapCategory {
  title: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
    description?: string;
    isExternal?: boolean;
  }>;
}

const SITEMAP_SECTIONS: SitemapCategory[] = [
  {
    title: "About the Company",
    description: "Corporate background, management leadership, bank and Demat details, and careers.",
    links: [
      { label: "Home", href: "/", description: "Portal landing page & company overview" },
      { label: "Company Overview", href: "/about/company-overview", description: "Our history, registrations, and BSE membership" },
      { label: "Group Companies", href: "/about/group-companies", description: "Disa Financial Services & affiliated entities" },
      { label: "Mission & Vision", href: "/about/mission-vision", description: "Our corporate ethos and investor goals" },
      { label: "Core Values", href: "/about/core-values", description: "Commitment, integrity, and quality service" },
      { label: "Top Management", href: "/about/management", description: "Leadership profile of CEO and Directors" },
      { label: "Bank & Demat Details", href: "/about/bank-and-demat-details", description: "USCNBA bank accounts & CDSL demat accounts" },
      { label: "Bank Details (Nodal)", href: "/about/bank-details", description: "Designated client deposit accounts" },
      { label: "Careers", href: "/careers", description: "Work with us & current job openings" },
      { label: "Partner With Us", href: "/partner-with-us", description: "Authorized Person (AP) & business franchise" },
      { label: "Contact Us", href: "/contact", description: "Raipur & Bhilai branch locations and contact desks" },
    ],
  },
  {
    title: "Products & Services",
    description: "Financial trading, investment avenues, depository operations, and primary market services.",
    links: [
      { label: "Equity Trading", href: "/products/equity", description: "BSE Cash and Intraday share broking" },
      { label: "Derivatives (F&O)", href: "/products/derivatives", description: "Futures & Options index and stock trading" },
      { label: "Mutual Funds", href: "/products/mutual-funds", description: "SIP, ELSS, and Lump sum mutual fund investments" },
      { label: "IPO Services", href: "/products/ipo", description: "ASBA and UPI bidding for public offerings" },
      { label: "Depository Services", href: "/products/depository", description: "CDSL Demat, pledge, and e-DIS operations" },
      { label: "Commodity Segment Info", href: "/products/commodity", description: "Information on commodity markets" },
      { label: "Open Account", href: "/open-account", description: "Open a Demat and Trading account" },
    ],
  },
  {
    title: "Investor Resources & Grievances",
    description: "Grievance redressal mechanisms, complaint logs, escalation contacts, and charters.",
    links: [
      { label: "Investor Charter (Stock Broker)", href: "/investor-resources/investor-charter", description: "SEBI mandated charter for stock brokers & DP" },
      { label: "Grievance Escalation Matrix", href: "/investor-resources/escalation-matrix", description: "Direct contact matrix for support and CEO" },
      { label: "Monthly Complaint Data", href: "/investor-resources/complaint-data", description: "Monthly and annual grievance disposal data" },
      { label: "Grievances Desk & SCORES", href: "/investor-resources/grievances", description: "How to register complaints with internal desk & SEBI" },
      { label: "SmartODR Portal", href: "/investor-resources/smartodr", description: "Securities market Online Dispute Resolution portal" },
      { label: "Risk Disclosure on Derivatives", href: "/investor-resources/risk-disclosure", description: "Live 9 out of 10 individual traders loss statistics" },
      { label: "Downloads & Forms", href: "/investor-resources/downloads", description: "Client registration, KYC, and modification forms" },
    ],
  },
  {
    title: "SEBI Compliance & Disclosures",
    description: "Statutory disclosures, corporate registration numbers, and compliance documentation.",
    links: [
      { label: "Mandatory Disclosures", href: "/compliance/mandatory-disclosures", description: "SEBI registrations, CIN, and key personnel" },
      { label: "Compliance Policies", href: "/compliance/policies", description: "Surveillance, PMLA, and client blocking policies" },
      { label: "Registration Documents", href: "/compliance/registration-documents", description: "Rights & obligations, tariff, and agreements" },
      { label: "SEBI Investor Charter (PDF)", href: "/Investor_Charter_SHRI_VSB.pdf", description: "Official PDF document", isExternal: true },
      { label: "Advisory for Investors (PDF)", href: "/Advisory-for-Investors-.pdf", description: "SEBI advisory circular", isExternal: true },
      { label: "Filing Complaints on SCORES (PDF)", href: "/Filing_of_complaints_on_SCORES.pdf", description: "SCORES guide", isExternal: true },
    ],
  },
  {
    title: "Live Market & Research",
    description: "Real-time index movements, market breadth, currency cross-rates, and financial news.",
    links: [
      { label: "Live Market Watch", href: "/market/live", description: "Real-time BSE, Nifty, Sensex, and heat watch" },
      { label: "Financial News", href: "/market/news", description: "Market bulletins, quarterly earnings, and updates" },
      { label: "Currency & Forex Report", href: "/market/currency", description: "Forex cross rates (USD/INR, EUR/INR, GBP/INR)" },
    ],
  },
  {
    title: "Legal, Policies & Tools",
    description: "Statutory terms, privacy regulations, search portal, and accessibility tools.",
    links: [
      { label: "Site Search", href: "/search", description: "Interactive site search portal" },
      { label: "Investor Grievance Policy", href: "/grievance-policy", description: "Standard turnaround times and resolution steps" },
      { label: "Privacy Policy", href: "/privacy-policy", description: "Client data confidentiality & security notice" },
      { label: "Terms & Conditions", href: "/terms", description: "Website usage terms and trading disclaimers" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Website Sitemap"
        subtitle="Explore all pages, regulatory resources, and investment services across the Shri Venkatesh Stock Broker portal."
        breadcrumbs={[{ label: "Sitemap" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-20 space-y-16">
        
        {/* Search Callout */}
        <section aria-labelledby="sitemap-search-callout" className="bg-muted/40 border border-border/60 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h2 id="sitemap-search-callout" className="text-xl font-display font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
              <Search className="w-5 h-5 text-primary" aria-hidden="true" />
              Looking for a specific topic or document?
            </h2>
            <p className="text-sm text-muted-foreground">
              Use our full-text site search to find forms, account details, circulars, and policies quickly.
            </p>
          </div>
          <Link
            href="/search"
            className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs md:text-sm px-6 py-3 rounded-full shadow-md shadow-primary/20 inline-flex items-center gap-2 transition-all"
          >
            <span>Open Site Search</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Structured Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITEMAP_SECTIONS.map((section) => (
            <section
              key={section.title}
              aria-labelledby={`sitemap-heading-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-muted/30 border border-border/60 rounded-3xl p-6 md:p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h2
                  id={`sitemap-heading-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xl font-display font-bold text-foreground border-b border-border/40 pb-3"
                >
                  {section.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>

              <ul className="space-y-2.5 list-none p-0 m-0 flex-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="group flex flex-col p-2.5 rounded-xl hover:bg-muted/60 transition-colors border border-transparent hover:border-border/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" aria-hidden="true" />
                          {link.label}
                        </span>
                        {link.isExternal && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground font-semibold">
                            <span className="sr-only">(opens in new tab)</span>
                            <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                      {link.description && (
                        <span className="text-[11px] text-muted-foreground pl-3 pt-0.5 line-clamp-1">
                          {link.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Regulatory Seal */}
        <div className="text-center pt-8 border-t border-border/40">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-muted/40 border border-border/50 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Shri Venkatesh Stock Broker Services India Pvt. Ltd. • SEBI Regn: INZ000231135</span>
          </div>
        </div>

      </div>
    </div>
  );
}
