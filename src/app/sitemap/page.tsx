import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Shri Venkatesh Stock Broker Services",
  description: "Complete list of pages on the Shri Venkatesh Stock Broker Services website.",
};

const SITEMAP_LINKS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Group Companies", href: "/about/group-companies" },
      { label: "Top Management", href: "/about/management" },
      { label: "Bank & Demat Details", href: "/about/bank-and-demat-details" },
      { label: "Careers", href: "/careers" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Contact Us", href: "/contact" },
    ]
  },
  {
    title: "Products & Services",
    links: [
      { label: "Equity Trading", href: "/products/equity" },
      { label: "Derivatives (F&O)", href: "/products/derivatives" },
      { label: "Mutual Funds", href: "/products/mutual-funds" },
      { label: "IPO Services", href: "/products/ipo" },
    ]
  },
  {
    title: "Investor Resources",
    links: [
      { label: "Investor Charter", href: "/investor-resources/investor-charter" },
      { label: "Escalation Matrix", href: "/investor-resources/escalation-matrix" },
      { label: "Complaint Data", href: "/investor-resources/complaint-data" },
      { label: "SCORES Grievances", href: "/investor-resources/grievances" },
      { label: "SmartODR", href: "/investor-resources/smartodr" },
      { label: "Downloads", href: "/investor-resources/downloads" },
    ]
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-background min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Sitemap</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {SITEMAP_LINKS.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold mb-4 border-b border-border/50 pb-2 text-primary">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium text-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" aria-hidden="true"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
