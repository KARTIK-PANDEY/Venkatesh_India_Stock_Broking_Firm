"use client";

import { useState } from "react";
import { Landmark, Copy, ShieldAlert, BadgeCheck, ExternalLink } from "lucide-react";
import { BANK_DETAILS, DEMAT_DETAILS } from "@/lib/constants";
import PageHero from "@/components/layout/PageHero";

export default function BankAndDematDetailsPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Bank & Demat Details"
        subtitle="Official bank and depository accounts of Shri Venkatesh Stock Broker Services India Pvt. Ltd."
        breadcrumbs={[{ label: "About Us" }, { label: "Bank & Demat Details" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">
        
        {/* Important security notice */}
        <div className="bg-amber-500/10 border border-amber-500/30 p-6 md:p-8 rounded-3xl flex gap-4 items-start shadow-xs max-w-4xl mx-auto">
          <ShieldAlert className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-display font-bold text-foreground text-base uppercase tracking-wider">Upstreaming Client Nodal Bank Accounts (USCNBA)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Investors are requested to note that Stock broker – Shri Venkatesh Stock Broker Services India Pvt Ltd is permitted to receive money from investors through designated bank accounts only, named as <strong>Up streaming Client Nodal Bank Account (USCNBA)</strong>. Stock broker - Shri Venkatesh Stock Broker Services India Pvt Ltd is also required to disclose these USCNB accounts to the Stock Exchange.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hence, you are requested to use the following USCNB accounts only for the purpose of dealings in your trading account with us. The details of these USCNB accounts are also displayed by the Stock Exchange on their website under &quot;Member Directory&quot;.
            </p>
          </div>
        </div>

        {/* Two Columns: Left = Bank Accounts, Right = Demat Accounts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Bank Accounts Column */}
          <div className="space-y-8">
            <div className="border-b border-border/40 pb-4 flex items-center gap-3">
              <Landmark className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-bold text-foreground">Designated Bank Accounts</h2>
            </div>

            <div className="space-y-6">
              {BANK_DETAILS.map((bank, idx) => (
                <div key={idx} className="bg-muted/40 border border-border/50 rounded-3xl p-6 md:p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-full">
                        {bank.bankName}
                      </span>
                      <h3 className="font-bold text-foreground mt-2 text-sm max-w-[85%]">{bank.accountName}</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Account Number</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-mono font-bold text-lg text-foreground">{bank.accountNumber}</span>
                          <button
                            onClick={() => handleCopy(bank.accountNumber)}
                            className="p-1 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-primary"
                            title="Copy Account Number"
                          >
                            {copiedText === bank.accountNumber ? (
                              <BadgeCheck className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">IFSC Code</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-mono font-bold text-lg text-foreground">{bank.ifscCode}</span>
                          <button
                            onClick={() => handleCopy(bank.ifscCode)}
                            className="p-1 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-primary"
                            title="Copy IFSC Code"
                          >
                            {copiedText === bank.ifscCode ? (
                              <BadgeCheck className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/30">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Branch</p>
                        <p className="text-xs font-semibold text-foreground mt-1">{bank.branch}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Account Type</p>
                        <p className="text-xs font-semibold text-foreground mt-1">{bank.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demat Accounts Column */}
          <div className="space-y-8">
            <div className="border-b border-border/40 pb-4 flex items-center gap-3">
              <BadgeCheck className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-bold text-foreground">Demat Account Details</h2>
            </div>

            <div className="bg-muted/40 border border-border/50 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] border-b border-border/40">
                      <th className="px-6 py-4">Demat Account Number</th>
                      <th className="px-6 py-4">Account Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 text-sm font-medium">
                    {DEMAT_DETAILS.map((demat, idx) => (
                      <tr key={idx} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-foreground text-xs">{demat.accountNo}</span>
                            <button
                              onClick={() => handleCopy(demat.accountNo)}
                              className="p-1 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-primary"
                              title="Copy Demat Account Number"
                            >
                              {copiedText === demat.accountNo ? (
                                <BadgeCheck className="w-3.5 h-3.5 text-green-500" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-muted-foreground font-semibold">
                          {demat.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info card */}
        <div className="bg-muted/40 rounded-3xl p-8 md:p-12 border border-border/50 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-foreground">Need Assistance with Fund Transfers?</h3>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              If you have queries regarding deposit tracking, ledger entries, or margin pledge instructions, contact Ms. Prashita Sheolikar at our compliance desk.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-hover text-white font-bold text-xs py-3 px-6 rounded-full inline-flex items-center gap-2 tracking-wide uppercase transition-colors shrink-0"
          >
            Locate Our Office <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
