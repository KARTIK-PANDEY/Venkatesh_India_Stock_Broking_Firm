"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/layout/PageHero";
import { Download, Info, Table as TableIcon, Award, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock Stock Broker complaints data
const MOCK_COMPLAINT_DATA = [
  { month: "March 2026", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
  { month: "February 2026", receivedClients: 1, receivedScores: 0, total: 1, resolved: 1, pending: 0, time: "2 days" },
  { month: "January 2026", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
  { month: "December 2025", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
  { month: "November 2025", receivedClients: 1, receivedScores: 1, total: 2, resolved: 2, pending: 0, time: "5 days" },
  { month: "October 2025", receivedClients: 0, receivedScores: 0, total: 0, resolved: 0, pending: 0, time: "N/A" },
];

// DP (Depository Participant) Monthly Complaints Data - Table 1
const DP_COMPLAINT_DATA = [
  { sn: 1, receivedFrom: "Directly from Investors", carriedForward: 0, received: 0, totalPending: 0, resolved: 0, pendingLess3M: 0, pendingMore3M: 0, avgTime: 0 },
  { sn: 2, receivedFrom: "SEBI (SCORES)", carriedForward: 0, received: 0, totalPending: 0, resolved: 0, pendingLess3M: 0, pendingMore3M: 0, avgTime: 0 },
  { sn: 3, receivedFrom: "Depositories", carriedForward: 0, received: 0, totalPending: 0, resolved: 0, pendingLess3M: 0, pendingMore3M: 0, avgTime: 0 },
  { sn: 4, receivedFrom: "Other Sources (if any)", carriedForward: 0, received: 0, totalPending: 0, resolved: 0, pendingLess3M: 0, pendingMore3M: 0, avgTime: 0 },
  { sn: 5, receivedFrom: "Grand Total", carriedForward: 0, received: 0, totalPending: 0, resolved: 0, pendingLess3M: 0, pendingMore3M: 0, avgTime: 0 },
];

// DP Trend of Monthly Disposal of Complaints - Table 2
const DP_MONTHLY_TREND = [
  { sn: 1, month: "April 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 2, month: "May 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 3, month: "June 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 4, month: "July 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 5, month: "August 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 6, month: "September 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 7, month: "October 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 8, month: "November 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 9, month: "December 2022", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 10, month: "January 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 11, month: "February 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 12, month: "March 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 13, month: "April 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 14, month: "May 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 15, month: "June 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 16, month: "July 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 17, month: "August 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 18, month: "September 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 19, month: "October 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 20, month: "November 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 21, month: "December 2023", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 22, month: "January 2024", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 23, month: "February 2024", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 24, month: "March 2024", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 25, month: "March 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 26, month: "April 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 27, month: "May 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 28, month: "June 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 29, month: "July 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 30, month: "August 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 31, month: "September 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 32, month: "October 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 33, month: "November 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 34, month: "December 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 35, month: "January 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 36, month: "February 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 37, month: "March 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 38, month: "April 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 39, month: "May 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 40, month: "June 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
];

// DP Trend of Annual Disposal of Complaints - Table 3
const DP_ANNUAL_TREND = [
  { sn: 1, year: "2017-18", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 2, year: "2018-19", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 3, year: "2019-20", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 4, year: "2020-21", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 5, year: "2021-22", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 6, year: "2022-23", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 7, year: "2023-24", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 8, year: "2024-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 9, year: "2025-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { sn: 10, year: "2026-27", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
];

export default function ComplaintDataPage() {
  const [activeTab, setActiveTab] = useState("broker");
  const lastUpdated = "July 3, 2026";

  useEffect(() => {
    // Read the query parameters on the client side
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam === "dp" || tabParam === "broker") {
        requestAnimationFrame(() => {
          setActiveTab(tabParam);
        });
      }
    }
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Investor Complaint Data"
        subtitle="Monthly & Annual disclosure of investor complaints in compliance with SEBI guidelines."
        breadcrumbs={[{ label: "Investor Resources" }, { label: "Complaint Data" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-12">

        {/* Compliance Notice */}
        <div className="bg-blue-50 border-l-4 border-primary rounded-r-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-bold text-sm uppercase tracking-wider">SEBI Disclosure Notice</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In compliance with SEBI circulars, we disclose monthly and annual trends of investor complaints for both our Stock Broking operations and Depository Participant (CDSL DP) division.
              </p>
            </div>
          </div>
          <div className="bg-background px-4 py-2 rounded-xl border border-border/50 text-xs font-bold text-muted-foreground shrink-0 uppercase tracking-widest">
            Last Updated: <span className="text-foreground">{lastUpdated}</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center border-b border-border/30 pb-1">
          <div className="flex gap-2 bg-muted p-1.5 rounded-full border border-border/50">
            <button
              onClick={() => setActiveTab("broker")}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider",
                activeTab === "broker"
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/40"
              )}
            >
              Stock Broker Division
            </button>
            <button
              onClick={() => setActiveTab("dp")}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider",
                activeTab === "dp"
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/40"
              )}
            >
              Depository Participant (Annexure C)
            </button>
          </div>
        </div>

        {activeTab === "broker" ? (
          /* TAB 1: STOCK BROKER COMPLAINT DATA */
          <div className="space-y-12">
            <div className="bg-background rounded-3xl border border-border/50 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-border/50 flex justify-between items-center bg-muted/20">
                <div className="flex items-center gap-2">
                  <TableIcon className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Monthly Complaint Statistics (Stock Broker)</h3>
                </div>
                <button
                  onClick={() => window.print()}
                  className="hidden sm:flex items-center rounded-full border border-border/60 bg-background px-4 py-2 text-xs font-bold text-muted-foreground hover:bg-muted transition-colors uppercase tracking-wider"
                >
                  <Download className="mr-2 w-3.5 h-3.5" /> Export Page
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] border-b border-border/40">
                      <th className="px-6 py-4">Month</th>
                      <th className="px-6 py-4">Received from Clients</th>
                      <th className="px-6 py-4">Received from SCORES</th>
                      <th className="px-6 py-4 text-foreground">Total Received</th>
                      <th className="px-6 py-4 text-green-600">Resolved*</th>
                      <th className="px-6 py-4 text-red-600">Pending**</th>
                      <th className="px-6 py-4">Avg. Resolution Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 text-sm font-semibold">
                    {MOCK_COMPLAINT_DATA.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/40 transition-colors">
                        <td className="px-6 py-5 font-bold text-foreground">{row.month}</td>
                        <td className="px-6 py-5">{row.receivedClients}</td>
                        <td className="px-6 py-5">{row.receivedScores}</td>
                        <td className="px-6 py-5 font-bold text-foreground">{row.total}</td>
                        <td className="px-6 py-5 font-bold text-green-600">{row.resolved}</td>
                        <td className="px-6 py-5 font-bold text-red-600">{row.pending}</td>
                        <td className="px-6 py-5 text-muted-foreground font-medium">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* TAB 2: DEPOSITORY PARTICIPANT COMPLAINTS (ANNEXURE C) */
          <div className="space-y-16">

            {/* Table 1: Monthly Complaint Data */}
            <div className="bg-background rounded-3xl border border-border/50 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-border/50 bg-muted/20 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <TableIcon className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Monthly Complaints Disclosures (Depository Participant)</h3>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] border-b border-border/40">
                      <th className="px-4 py-4 text-center">SN</th>
                      <th className="px-6 py-4">Received From</th>
                      <th className="px-4 py-4 text-center">Carried Forward</th>
                      <th className="px-4 py-4 text-center">Received during Month</th>
                      <th className="px-4 py-4 text-center">Total Pending</th>
                      <th className="px-4 py-4 text-center text-green-600">Resolved*</th>
                      <th className="px-4 py-4 text-center text-red-600" colSpan={2}>Pending end of Month**</th>
                      <th className="px-6 py-4 text-center">Avg Resolution Time^</th>
                    </tr>
                    <tr className="bg-muted/40 text-[9px] font-bold text-muted-foreground uppercase border-b border-border/40">
                      <th colSpan={6}></th>
                      <th className="px-2 py-2 text-center border-l border-border/30">Less than 3M</th>
                      <th className="px-2 py-2 text-center">More than 3M</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 text-xs font-semibold">
                    {DP_COMPLAINT_DATA.map((row, i) => (
                      <tr key={i} className={cn("hover:bg-muted/40 transition-colors", row.receivedFrom === "Grand Total" ? "bg-muted/30 font-bold" : "")}>
                        <td className="px-4 py-4 text-center text-muted-foreground">{row.sn}</td>
                        <td className="px-6 py-4 text-foreground">{row.receivedFrom}</td>
                        <td className="px-4 py-4 text-center">{row.carriedForward}</td>
                        <td className="px-4 py-4 text-center">{row.received}</td>
                        <td className="px-4 py-4 text-center">{row.totalPending}</td>
                        <td className="px-4 py-4 text-center text-green-600">{row.resolved}</td>
                        <td className="px-4 py-4 text-center border-l border-border/30">{row.pendingLess3M}</td>
                        <td className="px-4 py-4 text-center">{row.pendingMore3M}</td>
                        <td className="px-6 py-4 text-center text-muted-foreground font-medium">{row.avgTime} days</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Trend of Monthly Disposal */}
            <div className="bg-background rounded-3xl border border-border/50 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-border/50 bg-muted/20">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" /> Trend of Monthly Disposal of Complaints (DP)
                </h3>
              </div>

              <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] border-b border-border/40 sticky top-0">
                      <th className="px-6 py-4">SN</th>
                      <th className="px-6 py-4">Month</th>
                      <th className="px-6 py-4">Carried Forward</th>
                      <th className="px-6 py-4">Received</th>
                      <th className="px-6 py-4 text-green-600">Resolved*</th>
                      <th className="px-6 py-4 text-red-600">Pending**</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 text-xs font-semibold">
                    {DP_MONTHLY_TREND.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/40 transition-colors">
                        <td className="px-6 py-4 text-muted-foreground">{row.sn}</td>
                        <td className="px-6 py-4 text-foreground">{row.month}</td>
                        <td className="px-6 py-4">{row.carriedForward}</td>
                        <td className="px-6 py-4">{row.received}</td>
                        <td className="px-6 py-4 text-green-600">{row.resolved}</td>
                        <td className="px-6 py-4 text-red-600">{row.pending}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Trend of Annual Disposal */}
            <div className="bg-background rounded-3xl border border-border/50 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-border/50 bg-muted/20">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Trend of Annual Disposal of Complaints (DP)
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] border-b border-border/40">
                      <th className="px-6 py-4">SN</th>
                      <th className="px-6 py-4">Year</th>
                      <th className="px-6 py-4">Carried Forward</th>
                      <th className="px-6 py-4">Received during Year</th>
                      <th className="px-6 py-4 text-green-600">Resolved during Year</th>
                      <th className="px-6 py-4 text-red-600">Pending at end of Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 text-xs font-semibold">
                    {DP_ANNUAL_TREND.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/40 transition-colors">
                        <td className="px-6 py-4 text-muted-foreground">{row.sn}</td>
                        <td className="px-6 py-4 text-foreground">{row.year}</td>
                        <td className="px-6 py-4">{row.carriedForward}</td>
                        <td className="px-6 py-4">{row.received}</td>
                        <td className="px-6 py-4 text-green-600">{row.resolved}</td>
                        <td className="px-6 py-4 text-red-600">{row.pending}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Legend notes */}
        <div className="p-6 bg-muted/40 rounded-3xl border border-border/50 text-[11px] text-muted-foreground space-y-2 leading-relaxed">
          <p>* Should include complaints of previous months/years resolved in the current month/year, if any.</p>
          <p>** Should include total complaints pending as on the last day of the month/year, if any.</p>
          <p>^ Average resolution time is the sum total of time taken to resolve each complaint in the current month divided by the total number of complaints resolved in the current month.</p>
        </div>

        {/* Action Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 bg-background border border-border/50 rounded-3xl shadow-xs">
            <h3 className="text-xl font-bold text-foreground mb-4">SCORES 2.0 Portal</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              If your grievance is not resolved to your satisfaction, you may register your complaint on SEBI&apos;s SCORES portal.
            </p>
            <a
              href="https://scores.sebi.gov.in"
              target="_blank"
              className={cn(buttonVariants(), "rounded-full gap-2 text-white")}
            >
              Register Complaint on SCORES
            </a>
          </div>
          <div className="p-8 bg-background border border-border/50 rounded-3xl shadow-xs">
            <h3 className="text-xl font-bold text-foreground mb-4">SmartODR Portal</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Online Dispute Resolution mechanism for alternative dispute redressals in the Indian Securities Market.
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
  );
}
