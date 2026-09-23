import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, REGISTRATION_DETAILS } from "@/lib/constants";
import AccessibilityWidget from "./AccessibilityWidget";

const REGULATORY_LINKS = [
  { label: "SEBI", href: "https://www.sebi.gov.in" },
  { label: "RBI", href: "https://www.rbi.org.in" },
  { label: "BSE", href: "https://www.bseindia.com" },
  { label: "NSE", href: "https://www.nseindia.com" },
  { label: "CDSL", href: "https://www.cdslindia.com" },
  { label: "SCORES", href: "https://scores.sebi.gov.in" },
  { label: "SmartODR", href: "https://smartodr.in" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative overflow-hidden pt-20 pb-8 border-t border-border/50">
      <h2 id="footer-heading" className="sr-only">Footer Navigation and Corporate Details</h2>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[30%] h-[40%] rounded-full bg-accent/5 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <nav aria-label="Footer Navigation">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Col 1: Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-6 group">
                <div className="h-16 w-52 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Shri Venkatesh Stock Broker Services India Pvt. Ltd. company logo"
                    width={208}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                Shri Venkatesh Stock Broker Services India Pvt. Ltd. is a premier financial services firm based in Raipur, Chhattisgarh, providing comprehensive Trading solutions since 2010.
              </p>
              <div className="flex items-center gap-2 text-foreground font-bold text-xs uppercase tracking-wider bg-muted/50 p-3 rounded-xl border border-border/50 w-fit">
                <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                SEBI REGISTERED BROKER
              </div>
            </div>

            {/* Col 2: Company */}
            <section aria-labelledby="footer-company-heading">
              <h3 id="footer-company-heading" className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Company</h3>
              <ul className="space-y-4 text-sm font-medium list-none p-0 m-0">
                <li><Link href="/about/company-overview" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>About Us</Link></li>
                <li><Link href="/about/group-companies" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Group Companies</Link></li>
                <li><Link href="/about/management" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Top Management</Link></li>
                <li><Link href="/about/bank-and-demat-details" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Bank & Demat Details</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Careers</Link></li>
                <li><Link href="/partner-with-us" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Partner With Us</Link></li>
              </ul>
            </section>

            {/* Col 3: Products */}
            <section aria-labelledby="footer-products-heading">
              <h3 id="footer-products-heading" className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Products</h3>
              <ul className="space-y-4 text-sm font-medium list-none p-0 m-0">
                <li><Link href="/products/equity" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Equity Trading</Link></li>
                <li><Link href="/products/derivatives" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Derivatives (F&O)</Link></li>
                <li><Link href="/products/mutual-funds" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Mutual Funds</Link></li>
                <li><Link href="/products/ipo" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>IPO Services</Link></li>
                <li><Link href="/products/depository" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Depository Services</Link></li>
              </ul>
            </section>

            {/* Col 4: Resources */}
            <section aria-labelledby="footer-resources-heading">
              <h3 id="footer-resources-heading" className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Resources</h3>
              <ul className="space-y-4 text-sm font-medium list-none p-0 m-0">
                <li><Link href="/investor-resources/investor-charter" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Investor Charter</Link></li>
                <li><Link href="/investor-resources/grievances" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>SCORES Grievances</Link></li>
                <li><Link href="/investor-resources/smartodr" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>SmartODR</Link></li>
                <li><Link href="/investor-resources/risk-disclosure" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Risk Disclosure</Link></li>
                <li><Link href="/investor-resources/escalation-matrix" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Escalation Matrix</Link></li>
                <li><Link href="/investor-resources/complaint-data" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" aria-hidden="true"></span>Complaint Data</Link></li>
              </ul>
            </section>

            {/* Col 5: Contact */}
            <section aria-labelledby="footer-contact-heading">
              <h3 id="footer-contact-heading" className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Contact Us</h3>
              <ul className="space-y-4 text-sm font-medium list-none p-0 m-0">
                <li className="flex gap-3 text-muted-foreground group">
                  <MapPin className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex gap-3 text-muted-foreground group">
                  <Phone className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-primary transition-colors">{COMPANY_INFO.phones[0]}</a>
                </li>
                <li className="flex gap-3 text-muted-foreground group">
  <Mail
    className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform"
    aria-hidden="true"
  />

  <div className="flex flex-col">
    <a
      href={`mailto:${COMPANY_INFO.email}`}
      aria-label={`Send email to ${COMPANY_INFO.email}`}
      className="hover:text-primary transition-colors"
    >
      {COMPANY_INFO.email}
    </a>

    <a
      href={`mailto:${COMPANY_INFO.email2}`}
      aria-label={`Send email to ${COMPANY_INFO.email2}`}
      className="hover:text-primary transition-colors"
    >
      {COMPANY_INFO.email2}
    </a>
  </div>
</li>
              </ul>
            </section>
          </div>

          {/* Regulatory Links Bar */}
          <section aria-labelledby="regulatory-links-heading" className="py-6 border-y border-border/50">
            <h3 id="regulatory-links-heading" className="sr-only">Regulatory and Market Links</h3>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-wider list-none p-0 m-0">
              {REGULATORY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
  href={link.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`${link.label} official website (opens in new tab)`}
  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
>
  {link.label}
  <span className="sr-only">(opens in new tab)</span>
  <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
</a>
                </li>
              ))}
            </ul>
          </section>
        </nav>

        {/* Registration Details */}
        <div className="py-10 text-xs leading-relaxed text-center space-y-4 text-muted-foreground max-w-5xl mx-auto">
          <p className="font-bold text-foreground">
            SEBI Reg: {REGISTRATION_DETAILS.sebi_reg} | BSE Cash: {REGISTRATION_DETAILS.bse_cash} | BSE F&amp;O: {REGISTRATION_DETAILS.bse_fo} | CDSL DP ID: {REGISTRATION_DETAILS.cdsl_dp} | CIN: {REGISTRATION_DETAILS.cin}
          </p>
          <p>
            Registered Office: {COMPANY_INFO.address} | SEBI Regional Office: SEBI Bhavan, Plot No. C4-A, &apos;G&apos; Block, Bandra Kurla Complex, Bandra (East), Mumbai - 400051
          </p>
          <p>
            Compliance Officer: {COMPANY_INFO.compliance.name} | Tel: {COMPANY_INFO.compliance.phone} | Email: {COMPANY_INFO.compliance.email}
          </p>
        </div>

        {/* Mandatory Disclaimer */}
        <div className="bg-muted/50 border border-border/50 p-6 rounded-2xl text-[10px] md:text-xs leading-relaxed text-muted-foreground text-center mb-10 max-w-5xl mx-auto">
          &quot;Investment in securities market are subject to market risks. Read all the related documents carefully before investing. | Mutual fund investments are subject to market risks. Read all scheme related documents carefully. | Derivatives trading involves substantial risk and is not suitable for all investors. | Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.&quot;
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-muted-foreground">
          <p>© {currentYear} Venkatesh India. All Rights Reserved.</p>
          <nav aria-label="Policy & Accessibility Links">
            <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0 items-center">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/grievance-policy" className="hover:text-primary transition-colors">Grievance Policy</Link></li>
              <li><Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li>
              <li><AccessibilityWidget /></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
