import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, REGISTRATION_DETAILS } from "@/lib/constants";

const REGULATORY_LINKS = [
  { label: "SEBI", href: "https://www.sebi.gov.in" },
  { label: "RBI", href: "https://www.rbi.org.in" },
  { label: "BSE", href: "https://www.bseindia.com" },
  { label: "NSE", href: "https://www.nseindia.com" },
  { label: "CDSL", href: "https://www.cdslindia.com" },
  { label: "MCX", href: "https://www.mcxindia.com" },
  { label: "NCDEX", href: "https://www.ncdex.com" },
  { label: "SCORES", href: "https://scores.sebi.gov.in" },
  { label: "SmartODR", href: "https://smartodr.in" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative overflow-hidden pt-20 pb-8 border-t border-border/50">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[30%] h-[40%] rounded-full bg-accent/5 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="h-16 w-52 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Shri Venkatesh Stock Broker Services India Pvt. Ltd."
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
              <ShieldCheck className="w-5 h-5 text-primary" />
              SEBI REGISTERED BROKER
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about/company-overview" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>About Us</Link></li>
              <li><Link href="/about/group-companies" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Group Companies</Link></li>
              <li><Link href="/about/management" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Top Management</Link></li>
              <li><Link href="/about/bank-and-demat-details" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Bank & Demat Details</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Careers</Link></li>
              <li><Link href="/partner-with-us" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Partner With Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Products</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/products/equity" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Equity Trading</Link></li>
              <li><Link href="/products/derivatives" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Derivatives (F&O)</Link></li>
              <li><Link href="/products/commodity" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Commodity</Link></li>
              <li><Link href="/products/mutual-funds" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Mutual Funds</Link></li>
              <li><Link href="/products/ipo" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>IPO Services</Link></li>
              <li><Link href="/products/depository" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Depository Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/investor-resources/investor-charter" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Investor Charter</Link></li>
              <li><Link href="/investor-resources/grievances" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>SCORES Grievances</Link></li>
              <li><Link href="/investor-resources/smartodr" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>SmartODR</Link></li>
              <li><Link href="/investor-resources/risk-disclosure" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Risk Disclosure</Link></li>
              <li><Link href="/investor-resources/escalation-matrix" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Escalation Matrix</Link></li>
              <li><Link href="/investor-resources/complaint-data" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>Complaint Data</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex gap-3 text-muted-foreground group">
                <MapPin className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex gap-3 text-muted-foreground group">
                <Phone className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-primary transition-colors">{COMPANY_INFO.phones[0]}</a>
              </li>
              <li className="flex gap-3 text-muted-foreground group">
                <Mail className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Links Bar */}
        <div className="py-6 border-y border-border/50 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-wider">
          {REGULATORY_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              {link.label} 
              <span className="sr-only">(opens in new tab)</span>
              <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

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
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/grievance-policy" className="hover:text-primary transition-colors">Grievance Policy</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
