"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Download, FileText, Globe, Search } from "lucide-react";
import { motion } from "framer-motion";
import { getFileUrl } from "@/lib/utils";

const DOWNLOADS = [
  { name: "KRA Validation Instructions", category: "Verification", type: "PDF", size: "450 KB", href: "/kycvalidation.pdf" },
  { name: "SARAL Account Opening Form (Resident Individuals)", category: "Account Opening", type: "PDF", size: "1.2 MB", href: "/SARAL-ac-opening-Form-for-resident-individuals.pdf" },
  { name: "Policy on Freezing & Blocking Client Accounts", category: "Policy", type: "PDF", size: "320 KB", href: "/Policy-on-FreezingBlocking-Client.pdf" },
  { name: "Mandatory Display Board", category: "Compliance", type: "PDF", size: "280 KB", href: "/Mandatory-Display.pdf" },
  { name: "Mandatory Display Board (BSE)", category: "Compliance", type: "PDF", size: "411 KB", href: "/Mandatory-Display -m.pdf" },
  { name: "Investor Charter (Stock Broker - BSE)", category: "Compliance", type: "PDF", size: "443 KB", href: "/Investor_Charter_STOCK_BROKER-BSe-m.pdf" },
  { name: "Advisory for Investors", category: "Compliance", type: "PDF", size: "205 KB", href: "/Advisory-for-Investors-.pdf" },
  { name: "Regulatory Changes on Account of Pledge", category: "Policy", type: "PDF", size: "52 KB", href: "/RegulatoryChangesOnAccountOfPledge-.pdf" },
  { name: "Rights and Obligations Annexures", category: "Depository", type: "PDF", size: "2.1 MB", href: "/DP-Operating-Instructions-Annexures-as-on-June-30-2025%20(1).pdf" },
  { name: "Filing of Complaints on SCORES Portal Guide", category: "Grievance", type: "PDF", size: "380 KB", href: "/Filing_of_complaints_on_SCORES.pdf" },
  { name: "Corporate Self Certification Form (FATCA)", category: "Compliance", type: "PDF", size: "180 KB", href: "/download/Corporate Self Certification.pdf" },
  { name: "Individual Self Declaration Form (FATCA)", category: "Compliance", type: "PDF", size: "140 KB", href: "/download/Individual Self declaration.pdf" },
];

const VERNACULAR_LANGUAGES = [
  "Assamese", "Bengali", "Gujarati", "Hindi", "Kannada", "Kashmiri",
  "Konkani", "Malayalam", "Marathi", "Oriya", "Punjabi", "Sindhi",
  "Tamil", "Telugu", "Urdu"
];

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Verification", "Account Opening", "Compliance", "Depository", "Policy"];

  const filteredDownloads = DOWNLOADS.filter(doc => {
    const matchesTab = activeTab === "All" || doc.category === activeTab;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Downloads & Forms"
        subtitle="Access client registration kits, mandatory regulatory disclosures, verification documents, policies, and operating instructions."
        breadcrumbs={[{ label: "Investor Resources" }, { label: "Downloads & Forms" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">

        {/* Section 1: Downloads and Forms Directory */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground">Compliance & Account Forms</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Filter documents by category or search by document name.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted/30 border border-border/50 rounded-lg h-10 pl-10 pr-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-sm text-foreground"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-border/40 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeTab === cat
                  ? "bg-primary text-white shadow-xs"
                  : "bg-muted/40 border border-border/50 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Documents */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDownloads.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 bg-muted/40 border border-border/50 rounded-2xl flex flex-col justify-between hover:border-primary/30 hover:shadow-xs transition-all group cursor-pointer"
                onClick={() => {
                  if (doc.href) {
                    window.open(getFileUrl(doc.href), "_blank");
                  } else {
                    alert("This document will be available for download shortly.");
                  }
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm mb-1 line-clamp-2">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      {doc.category} · {doc.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
                  <span className="text-[10px] text-muted-foreground font-semibold">Size: {doc.size}</span>
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:underline">
                    Download <Download className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}

            {filteredDownloads.length === 0 && (
              <div className="col-span-full py-16 text-center text-muted-foreground">
                No documents found matching your filter criteria.
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Vernacular Language Packs */}
        <div className="p-8 bg-muted/30 border border-border/50 rounded-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" /> Vernacular Client Registration Documents
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl leading-relaxed">
              SEBI mandates client registration kits to be accessible in regional languages. Download the simplified registration and disclosure pack in your preferred language below:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {VERNACULAR_LANGUAGES.map((lang, idx) => (
              <a
                key={idx}
                href={getFileUrl("/Vernacular_Language.zip")}
                download="Vernacular_Language.zip"
                className="p-5 bg-background border border-border/50 rounded-2xl hover:border-primary/30 transition-all hover:shadow-xs group text-center block cursor-pointer"
              >
                <Download className="mx-auto w-5 h-5 text-primary group-hover:scale-110 transition-transform mb-3" />
                <h4 className="font-bold text-sm text-foreground">{lang}</h4>
                <p className="text-[10px] text-muted-foreground mt-1">Download Kit</p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
