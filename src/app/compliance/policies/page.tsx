"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { FileText, Download, Shield, Search, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getFileUrl } from "@/lib/utils";

const POLICIES = [
  {
    title: "PMLA POLICY SHRI VSB NEW",
    desc: "Comprehensive framework detailing client due diligence, suspicious transaction monitoring, and risk management guidelines under FIU-IND and SEBI mandates.",
    href: "/policies/PMLA POLICY SHRI VSB NEW.pdf",
    size: "522 KB",
    category: "Surveillance & AML",
  },
  {
    title: "Policy-on-FreezingBlocking-Client",
    desc: "Operational guidelines explaining CDSL and exchange-directed scenarios under which client trading and demat accounts are frozen or blocked.",
    href: "/policies/Policy-on-FreezingBlocking-Client.pdf",
    size: "314 KB",
    category: "Trading Controls",
  },
  {
    title: "Surveillance Policy",
    desc: "Internal procedures outlining automated alert controls, trade pattern scanning, and audit trails for detecting suspicious transactions.",
    href: "/policies/Surveillance Policy.pdf",
    size: "150 KB",
    category: "Surveillance & AML",
  },
  {
    title: "BCP_DR POLICY SHRI VSB",
    desc: "Crisis response and emergency preparedness guidelines ensuring seamless replication of broking services and tech systems during natural or technical outages.",
    href: "/policies/BCP_DR POLICY SHRI VSB.pdf",
    size: "256 KB",
    category: "IT & Security",
  },
  {
    title: "INTERNAL CONTROL POLICY",
    desc: "Operational frameworks detailing front-office controls, back-office reconciliation, separation of functions, and dual audit checkpoints.",
    href: "/policies/INTERNAL CONTROL POLICY.pdf",
    size: "255 KB",
    category: "Governance",
  },
  {
    title: "PRE FUNDED INSTRUMENT POLICY SHRI VSB",
    desc: "Strict protocols and limits for accepting pre-funded banking instruments (Demand Drafts, pay orders) to verify the legitimate source of client funds.",
    href: "/policies/PRE FUNDED INSTRUMENT POLICY SHRI VSB.pdf",
    size: "145 KB",
    category: "Trading Controls",
  },
  {
    title: "CLIENT CODE MODIFICATION ERROR CODE POLICY SHRI VSB",
    desc: "Regulatory procedures outlining conditions and reporting timelines under which client trade modification keys can be executed due to genuine errors.",
    href: "/policies/CLIENT CODE MODIFICATION ERROR CODE POLICY SHRI VSB.pdf",
    size: "115 KB",
    category: "Trading Controls",
  },
  {
    title: "Password and Security Policy",
    desc: "Security guidelines defining complexity rules, age limits, storage practices, and authorization profiles for corporate internal database access.",
    href: "/policies/Password and Security Policy.pdf",
    size: "110 KB",
    category: "IT & Security",
  },
  {
    title: "BACKUP POLICY SHRI VSB",
    desc: "Framework detailing daily, weekly, and monthly system back-up schedules, secure offsite servers, and routine test-restoration procedures.",
    href: "/policies/BACKUP POLICY SHRI VSB.pdf",
    size: "107 KB",
    category: "IT & Security",
  },
  {
    title: "INACTIVE CLIENT POLICY SHRI VSB",
    desc: "Clear parameters for categorizing client trading accounts as dormant due to prolonged inactivity, alongside simple client reactivation procedures.",
    href: "/policies/INACTIVE CLIENT POLICY SHRI VSB.pdf",
    size: "104 KB",
    category: "Trading Controls",
  },
  {
    title: "UNAUTHANTICATE NEWS CIRCULATION POLICY",
    desc: "Staff code of conduct strictly prohibiting transmission or distribution of unverified market news, rumors, or speculation on digital and social networks.",
    href: "/policies/UNAUTHANTICATE NEWS CIRCULATION POLICY.pdf",
    size: "352 KB",
    category: "Governance",
  },
  {
    title: "INVESTOR_GRIEVANCES_POLICY SHRI VSB",
    desc: "Dedicated resolution timelines, client complaint tracking procedures, and escalation matrix levels for addressing retail complaints.",
    href: "/policies/INVESTOR_GRIEVANCES_POLICY SHRI VSB.pdf",
    size: "6 KB",
    category: "Governance",
  },
  {
    title: "OutSourcing Policy",
    desc: "Outsourcing control framework outlining risk assessments, data protection rules, and vendor due diligence guidelines.",
    href: "/policies/OutSourcing Policy.pdf",
    size: "6 KB",
    category: "Governance",
  },
];

const CATEGORIES = ["All", "Trading Controls", "IT & Security", "Surveillance & AML", "Governance"];

export default function PoliciesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPolicies = POLICIES.filter((policy) => {
    const matchesSearch =
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || policy.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Company Policies"
        subtitle="Access and review our statutory internal policies, compliance frameworks, and risk management protocols."
        breadcrumbs={[{ label: "Compliance" }, { label: "Policies" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 space-y-16">

        {/* Top Controls: Search and Filters */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">Statutory Policy Documents</h2>
              <p className="text-sm text-muted-foreground">
                In compliance with SEBI and exchange mandates, we maintain active internal policies for corporate transparency.
              </p>
            </div>
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search policies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted/40 border border-border/50 rounded-full h-11 pl-11 pr-4 focus:ring-2 focus:ring-primary outline-hidden text-sm font-medium"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-border/40 pb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${activeCategory === cat
                  ? "bg-primary text-white shadow-xs"
                  : "bg-muted/40 border border-border/50 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPolicies.map((policy) => (
              <motion.div
                key={policy.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-6 bg-muted/40 border border-border/50 rounded-3xl hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-2.5 py-1">
                      {policy.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase bg-muted px-2 py-0.5 rounded-md">
                      {policy.size}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors pt-1.5">
                      {policy.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-medium">
                    {policy.desc}
                  </p>
                </div>

                <a
                  href={getFileUrl(policy.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between text-xs font-bold text-primary hover:underline group/btn"
                >
                  <span className="flex items-center gap-1.5">
                    Download Policy <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPolicies.length === 0 && (
            <div className="col-span-full py-20 text-center text-muted-foreground font-medium">
              No statutory policy documents match your criteria.
            </div>
          )}
        </div>

        {/* Commitment Banner */}
        <div className="p-8 bg-brand-navy rounded-[2rem] text-white relative overflow-hidden shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="p-4 bg-white/10 rounded-2xl shrink-0">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold mb-2">Statutory Market Commitments</h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
              Shri Venkatesh Stock Broker Services India Pvt. Ltd. maintains absolute compliance with anti-money laundering (AML) protocols, conflict resolution guides, and SEBI directives. We continuously review account listings and transaction logs to report suspicious movements immediately to Financial Intelligence Unit India (FIU-IND).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
