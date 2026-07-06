import PageHero from "@/components/layout/PageHero";
import { ShieldCheck, Eye, Lock, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
  description: "Read our privacy policy regarding how we collect, handle, and secure client information in compliance with SEBI and CDSL directives.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Privacy Policy"
        subtitle="Learn how we safeguard your personal data, trading credentials, and investment records."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-12">
        
        {/* Core commitment */}
        <section className="bg-muted/40 p-8 rounded-3xl border border-border/50 flex gap-4 items-start">
          <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Our Data Protection Commitment</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              At Shri Venkatesh Stock Broker Services, we are committed to maintaining the confidentiality, integrity, and security of our clients&apos; personal and financial information. This policy describes how we collect, use, and safeguard the data you provide while using our trading platforms and Depository services.
            </p>
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-10 divide-y divide-border/40">
          
          <section className="space-y-4 pt-10 first:pt-0">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" /> 1. Information We Collect
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To open and maintain your trading and depository accounts, and to comply with statutory mandates, we collect:
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 leading-relaxed">
              <li><strong>Registration Details:</strong> Name, Address, PAN Card number, Aadhaar number, Mobile number, Email ID, Passport-sized photographs, and signature samples.</li>
              <li><strong>Financial Details:</strong> Bank account statements, cancelled cheques, income disclosures, and net worth certificates (for derivative segment registration).</li>
              <li><strong>Transactional Details:</strong> Records of stock trades, order details, ledger balances, DP pledge requests, and payment transactions.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" /> 2. Data Security & Encryption
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All client data is encrypted during transit and at rest. We utilize firewall protections, access control directories, and security audits to prevent unauthorized entry. Credit card details or net banking passwords are never stored on our local servers.
            </p>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" /> 3. Data Disclosure Policy
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We do not sell or lease client database records to third-party marketing companies. Personal data is disclosed only to regulatory authorities (SEBI, BSE, CDSL, Income Tax Department) as mandated under statutory provisions or by court orders.
            </p>
          </section>

          <section className="space-y-4 pt-10">
            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-primary" /> 4. Policy Updates
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This policy is updated periodically to reflect changes in regulatory directives from SEBI or CDSL. Investors are advised to review this page regularly. For privacy queries, please write to our compliance officer at <strong>prashitasheolikar83@gmail.com</strong>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
