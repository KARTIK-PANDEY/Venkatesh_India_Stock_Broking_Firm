import { Landmark, Copy, CheckCircle2, ShieldAlert } from "lucide-react";
import { BANK_DETAILS } from "@/lib/constants";

export default function BankDetailsPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-background py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Home &gt; About Us &gt; Bank Details
          </nav>
          <h1 className="text-4xl md:text-6xl font-display leading-tight mb-4">Bank Details</h1>
          <p className="text-accent text-lg max-w-2xl italic">
            Official bank accounts of Shri Venkatesh Stock Broker Services India Pvt. Ltd. for fund transfers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-2xl flex gap-4 items-start shadow-sm">
            <ShieldAlert className="w-8 h-8 text-orange-600 shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2 uppercase text-sm tracking-wider">Important Security Notice</h3>
              <p className="text-sm text-orange-800 leading-relaxed">
                "Investors are requested to note that Shri Venkatesh Stock Broker Services India Pvt. Ltd. does not accept cash. Please transfer funds only to the official bank accounts mentioned below. Always ensure that the payment is made from your registered bank account only."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {BANK_DETAILS.map((bank, idx) => (
              <div key={idx} className="bg-background rounded-3xl border border-border/50 shadow-sm overflow-hidden transition-all hover:shadow-lg">
                <div className="bg-muted p-6 border-b border-border/50 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-primary" />
                    <span className="font-bold text-foreground uppercase tracking-widest text-sm">{bank.bankName}</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-muted text-primary px-3 py-1 rounded-full uppercase tracking-tighter">
                    {bank.type}
                  </span>
                </div>
                
                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Account Name</p>
                    <p className="text-lg font-bold text-foreground leading-tight">{bank.accountName}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Account Number</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-display text-primary tracking-tight">{bank.accountNumber}</p>
                      <button className="p-1 hover:bg-muted/40 rounded transition-colors text-muted-foreground hover:text-primary">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">IFSC Code</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-bold text-foreground">{bank.ifscCode}</p>
                      <button className="p-1 hover:bg-muted/40 rounded transition-colors text-muted-foreground hover:text-primary">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Branch</p>
                    <p className="text-lg font-bold text-foreground">{bank.branch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/40 rounded-3xl p-8 md:p-12 border border-border/50">
            <h3 className="text-2xl font-display text-foreground mb-6">Payment Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "NEFT / RTGS", desc: "Standard bank transfers." },
                { title: "IMPS", desc: "Instant fund transfers." },
                { title: "UPI", desc: "Available via linked accounts." }
              ].map((method, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-border/50 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-bold text-foreground mb-2">{method.title}</h4>
                  <p className="text-xs text-muted-foreground">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
