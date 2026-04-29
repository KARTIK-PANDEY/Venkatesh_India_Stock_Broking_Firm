import { Download, Info, Table as TableIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Monthly Complaint Data Disclosure | Shri Venkatesh Stock Broker Services",
};

const MOCK_COMPLAINT_DATA = [
  { month: "March 2026", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
  { month: "February 2026", receivedClients: 1, receivedScores: 0, total: 1, resolved: 1, pending: 0, time: "2 days" },
  { month: "January 2026", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
  { month: "December 2025", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
  { month: "November 2025", receivedClients: 1, receivedScores: 1, total: 2, resolved: 2, pending: 0, time: "5 days" },
  { month: "October 2025", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
];

export default function ComplaintDataPage() {
  const lastUpdated = "April 7, 2026";

  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-background py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Home &gt; Investor Resources &gt; Complaint Data
          </nav>
          <h1 className="text-4xl md:text-6xl font-display leading-tight mb-4">Investor Complaint Data</h1>
          <p className="text-accent text-lg max-w-2xl italic">
            Monthly disclosure of investor complaints in compliance with SEBI regulations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className="bg-[#EBF5FF] border-l-4 border-primary rounded-r-xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="text-foreground font-bold">Data Compliance Notice</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In compliance with SEBI regulations, we disclose our investor complaint data on a monthly basis. 
                  Data for each month is updated by the 7th of the following month.
                </p>
              </div>
            </div>
            <div className="bg-background px-4 py-2 rounded-lg border border-border/50 text-xs font-bold text-muted-foreground shrink-0">
              DATA UPDATED AS OF: <span className="text-foreground">{lastUpdated}</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-background rounded-3xl border border-border/50 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">Monthly Complaint Statistics</h2>
              </div>
              <button className="hidden sm:flex items-center rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
                <Download className="mr-2 w-4 h-4" /> Export as PDF
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-muted text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.1em]">
                    <th className="px-6 py-4">Month</th>
                    <th className="px-6 py-4">Received from Clients</th>
                    <th className="px-6 py-4">Received from SCORES</th>
                    <th className="px-6 py-4 text-foreground">Total Received</th>
                    <th className="px-6 py-4 text-green-600">Resolved</th>
                    <th className="px-6 py-4 text-red-600">Pending</th>
                    <th className="px-6 py-4">Avg. Resolution Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-sm md:text-base font-medium">
                  {MOCK_COMPLAINT_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/40/50 transition-colors">
                      <td className="px-6 py-5 font-bold text-foreground">{row.month}</td>
                      <td className="px-6 py-5">{row.receivedClients}</td>
                      <td className="px-6 py-5">{row.receivedScores}</td>
                      <td className="px-6 py-5 font-bold text-foreground">{row.total}</td>
                      <td className="px-6 py-5 font-bold text-green-600">{row.resolved}</td>
                      <td className="px-6 py-5 font-bold text-red-600">{row.pending}</td>
                      <td className="px-6 py-5 text-muted-foreground">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-muted border-t border-border/50">
              <p className="text-xs text-muted-foreground leading-relaxed">
                * Pending complaints include those for which resolution is awaited from the Stock Exchange or where further information is awaited from the investor.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 bg-background border border-border/50 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">SCORES 2.0</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                If your grievance is not resolved to your satisfaction, you may register your complaint on SEBI's SCORES portal.
              </p>
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                className={cn(buttonVariants(), "rounded-full gap-2")}
              >
                Register Complaint on SCORES
              </a>
            </div>
            <div className="p-8 bg-background border border-border/50 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">SmartODR Portal</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Online Dispute Resolution mechanism for the Indian Securities Market.
              </p>
              <a
                href="https://smartodr.in"
                target="_blank"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full gap-2")}
              >
                Go to SmartODR Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
