export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "Company" | "Products" | "SEBI & Compliance" | "Investor Resources" | "Market & News" | "Forms & Downloads" | "Legal & Policies";
  tags: string[];
  isExternal?: boolean;
}

export const SEARCH_INDEX: SearchableItem[] = [
  // ── Company & About ──
  {
    id: "home",
    title: "Home",
    description: "Shri Venkatesh Stock Broker Services India Pvt. Ltd. Official Portal. SEBI registered stock broker in Raipur, Chhattisgarh offering equity trading, depository services, and wealth management.",
    href: "/",
    category: "Company",
    tags: ["home", "main", "overview", "broker", "raipur", "chhattisgarh", "trading", "investing"],
  },
  {
    id: "about-company-overview",
    title: "Company Overview",
    description: "Learn about Shri Venkatesh Stock Broker Services India Pvt. Ltd., our corporate journey since 2010, BSE membership, SEBI registrations, and customer-first brokerage philosophy.",
    href: "/about/company-overview",
    category: "Company",
    tags: ["about", "company", "overview", "history", "profile", "raipur", "sebi registration", "bse membership", "cdsl"],
  },
  {
    id: "about-group-companies",
    title: "Group Companies",
    description: "Explore our group companies including Disa Financial Services, offering comprehensive wealth management, financial planning, insurance, and investment solutions.",
    href: "/about/group-companies",
    category: "Company",
    tags: ["group companies", "disa financial", "affiliates", "wealth management", "financial planning", "advisory"],
  },
  {
    id: "about-mission-vision",
    title: "Mission & Vision",
    description: "Our corporate mission, vision for Indian capital markets, and commitment to client financial empowerment, ethical transparency, and long-term wealth compounding.",
    href: "/about/mission-vision",
    category: "Company",
    tags: ["mission", "vision", "values", "goals", "principles", "integrity", "purpose"],
  },
  {
    id: "about-core-values",
    title: "Core Values",
    description: "Core values driving our advisory and execution: Commitment, Integrity & Respect, Quality Service, and Diversity & Inclusion.",
    href: "/about/core-values",
    category: "Company",
    tags: ["values", "integrity", "ethics", "transparency", "respect", "diversity", "quality"],
  },
  {
    id: "about-management",
    title: "Top Management & Leadership",
    description: "Meet the leadership team and board of directors guiding Shri Venkatesh Stock Broker Services, including our CEO Mr. Sanjiv Kumar Rathi.",
    href: "/about/management",
    category: "Company",
    tags: ["management", "leadership", "board of directors", "ceo", "sanjiv rathi", "executives", "team"],
  },
  {
    id: "about-bank-and-demat",
    title: "Bank & Demat Account Details",
    description: "Official designated Upstreaming Client Nodal Bank Accounts (USCNBA) and CDSL Demat accounts for secure client fund transfers and securities margin pledges.",
    href: "/about/bank-and-demat-details",
    category: "Company",
    tags: ["bank details", "demat account", "uscnba", "icici bank", "ifsc code", "account number", "margin pledge", "client funds"],
  },
  {
    id: "about-bank-details",
    title: "Designated Client Bank Accounts",
    description: "Designated client bank accounts for depositing funds, USCNB accounts list, IFSC codes, and ICICI bank branch details.",
    href: "/about/bank-details",
    category: "Company",
    tags: ["bank", "nodal account", "uscnb", "icici", "ifsc", "fund transfer", "deposit"],
  },
  {
    id: "careers",
    title: "Careers & Job Openings",
    description: "Explore career opportunities at Shri Venkatesh Stock Broker Services in trading desks, equity research, compliance, client support, and business development.",
    href: "/careers",
    category: "Company",
    tags: ["careers", "jobs", "openings", "hiring", "work with us", "equity analyst", "relationship manager", "compliance"],
  },
  {
    id: "partner-with-us",
    title: "Partner With Us / Sub-broker / AP",
    description: "Become an Authorized Person (AP) or business partner with Venkatesh India. Earn attractive commissions with full back-office and compliance infrastructure.",
    href: "/partner-with-us",
    category: "Company",
    tags: ["partner", "authorized person", "sub broker", "franchise", "business partner", "commissions", "bse ap"],
  },
  {
    id: "contact",
    title: "Contact Us & Office Branches",
    description: "Contact details for our Head Office in Raipur (Pandri) and Bhilai branch office. Phone numbers, email addresses, and key compliance desk contacts.",
    href: "/contact",
    category: "Company",
    tags: ["contact", "address", "phone", "email", "office", "location", "raipur", "bhilai", "support", "helpdesk"],
  },

  // ── Products & Services ──
  {
    id: "prod-equity",
    title: "Equity Trading",
    description: "Trade shares and equities across BSE Cash and Intraday segments with low latency execution, expert dealer assistance, and transparent brokerage rates.",
    href: "/products/equity",
    category: "Products",
    tags: ["equity", "stocks", "shares", "bse", "cash market", "intraday", "delivery", "trading account"],
  },
  {
    id: "prod-derivatives",
    title: "Derivatives Trading (Futures & Options)",
    description: "Trade Index and Stock Futures & Options on BSE with advanced margin management, hedging strategies, and derivatives risk analytics.",
    href: "/products/derivatives",
    category: "Products",
    tags: ["derivatives", "fno", "futures", "options", "call put", "hedging", "bse fo", "index trading"],
  },
  {
    id: "prod-mutual-funds",
    title: "Mutual Funds & SIP",
    description: "Invest in top-performing Mutual Funds across Equity, Debt, Hybrid, and ELSS Tax Saving schemes via Systematic Investment Plans (SIP) or lump sum.",
    href: "/products/mutual-funds",
    category: "Products",
    tags: ["mutual funds", "sip", "elss", "tax saver", "lumpsum", "nav", "portfolio", "wealth creation"],
  },
  {
    id: "prod-ipo",
    title: "IPO Application Services",
    description: "Apply for upcoming Mainboard and SME Initial Public Offerings (IPOs) seamlessly via ASBA and UPI mandate with complete subscription tracking.",
    href: "/products/ipo",
    category: "Products",
    tags: ["ipo", "initial public offering", "asba", "upi mandate", "sme ipo", "allotment", "bidding"],
  },
  {
    id: "prod-depository",
    title: "Depository Services (CDSL DP)",
    description: "Safe and secure CDSL Demat account services, electronic holding of shares, e-DIS facilities, margin pledging, and dematerialization of physical certificates.",
    href: "/products/depository",
    category: "Products",
    tags: ["depository", "demat", "cdsl", "dp", "e-dis", "pledge", "dematerialisation", "securities holding"],
  },
  {
    id: "prod-commodity",
    title: "Commodity Segment Info",
    description: "Information regarding commodity market segments, risk disclosures, and trading guidelines.",
    href: "/products/commodity",
    category: "Products",
    tags: ["commodity", "mcx", "bullion", "metals", "agri", "crude oil", "gold silver"],
  },
  {
    id: "open-account",
    title: "Open a Demat & Trading Account",
    description: "Open a Trading and Demat account with Shri Venkatesh Stock Broker Services. Complete your KYC documentation and start trading in Indian capital markets.",
    href: "/open-account",
    category: "Products",
    tags: ["open account", "demat account opening", "kyc", "trading account", "registration", "onboarding", "documents required"],
  },

  // ── SEBI & Compliance ──
  {
    id: "comp-mandatory-disclosures",
    title: "Mandatory Disclosures (SEBI)",
    description: "Official SEBI mandatory disclosures, registration certificates, Board of Directors details, compliance officer contact, and member directory details.",
    href: "/compliance/mandatory-disclosures",
    category: "SEBI & Compliance",
    tags: ["mandatory disclosures", "sebi regn", "cin", "bse member", "cdsl dp id", "compliance officer", "statutory details"],
  },
  {
    id: "comp-policies",
    title: "Compliance Policies & Code of Conduct",
    description: "Statutory compliance policies: Surveillance Policy, PMLA Policy, Internal Code of Conduct, RMS Policy, and client freezing/blocking guidelines.",
    href: "/compliance/policies",
    category: "SEBI & Compliance",
    tags: ["policies", "pmla", "anti money laundering", "rms policy", "code of conduct", "surveillance", "freezing client"],
  },
  {
    id: "comp-registration-documents",
    title: "Registration Documents & Agreements",
    description: "SEBI registration documents, Rights & Obligations of stock brokers, Risk Disclosure Document (RDD), Guidance note, and client agreement templates.",
    href: "/compliance/registration-documents",
    category: "SEBI & Compliance",
    tags: ["registration documents", "rights and obligations", "rdd", "member client agreement", "guidance note", "tariff sheet"],
  },

  // ── Investor Resources & Grievance ──
  {
    id: "res-investor-charter",
    title: "Investor Charter (Stock Broker & DP)",
    description: "Investor Charter in respect of Stock Brokers and Depository Participants as prescribed by SEBI. Vision, mission, investor rights, dos & don'ts, and timelines.",
    href: "/investor-resources/investor-charter",
    category: "Investor Resources",
    tags: ["investor charter", "sebi charter", "rights of investors", "dos and donts", "investor protection", "service standards"],
  },
  {
    id: "res-escalation-matrix",
    title: "Grievance Escalation Matrix",
    description: "Multi-tier grievance redressal and escalation matrix with names, contact numbers, and emails of Customer Support, Head of Support, Compliance Officer, and CEO.",
    href: "/investor-resources/escalation-matrix",
    category: "Investor Resources",
    tags: ["escalation matrix", "grievance contact", "prashita sheolikar", "sanjiv rathi", "customer care", "dispute escalation"],
  },
  {
    id: "res-complaint-data",
    title: "Monthly Complaint Data (BSE & CDSL DP)",
    description: "Monthly grievance disposal status and trend of monthly/annual complaints received from investors and SEBI SCORES for Stock Broking and DP operations.",
    href: "/investor-resources/complaint-data",
    category: "Investor Resources",
    tags: ["complaint data", "monthly complaints", "investor grievances data", "disposal status", "scores complaints", "cdsl dp complaint"],
  },
  {
    id: "res-grievances",
    title: "Investor Grievance Redressal & SCORES",
    description: "How to lodge grievances with our internal desk, SEBI SCORES 2.0 portal, and the SmartODR online dispute resolution platform.",
    href: "/investor-resources/grievances",
    category: "Investor Resources",
    tags: ["grievances", "scores", "lodge complaint", "investor helpdesk", "sebi redressal", "dispute"],
  },
  {
    id: "res-smartodr",
    title: "SmartODR Portal (Online Dispute Resolution)",
    description: "Access the Securities Market Online Dispute Resolution (SMART ODR) portal for online conciliation and arbitration of disputes.",
    href: "/investor-resources/smartodr",
    category: "Investor Resources",
    tags: ["smartodr", "online dispute resolution", "arbitration", "conciliation", "sebi odr", "dispute filing"],
  },
  {
    id: "res-risk-disclosure",
    title: "Risk Disclosures on Derivatives (Live)",
    description: "SEBI mandated 9 out of 10 individual traders in equity Futures and Options segment incur net losses. Study on derivative trading risk disclosures.",
    href: "/investor-resources/risk-disclosure",
    category: "Investor Resources",
    tags: ["risk disclosure", "derivatives risk", "fno losses", "sebi risk warning", "trading risk", "f&o risk disclosure"],
  },
  {
    id: "res-downloads",
    title: "Downloads & Account Forms",
    description: "Download client registration forms, SARAL account form, nomination form, KYC modification form, vernacular language packs, and bank change formats.",
    href: "/investor-resources/downloads",
    category: "Forms & Downloads",
    tags: ["downloads", "forms", "saral form", "kyc form", "nomination form", "bank modification", "vernacular packs", "pdf downloads"],
  },

  // ── Market & News ──
  {
    id: "mkt-live",
    title: "Live Market Watch",
    description: "Track live BSE, Nifty 50, Sensex, Bank Nifty indices, market breadth, top gainers and losers in real-time.",
    href: "/market/live",
    category: "Market & News",
    tags: ["live market", "market watch", "nifty 50", "sensex", "bank nifty", "bse indices", "stock prices", "gainers losers"],
  },
  {
    id: "mkt-news",
    title: "Financial Market News",
    description: "Latest news, corporate earnings, market insights, macroeconomic updates, and regulatory announcements affecting Indian equity markets.",
    href: "/market/news",
    category: "Market & News",
    tags: ["news", "market news", "financial news", "stock news", "quarterly results", "economy", "corporate actions"],
  },
  {
    id: "mkt-currency",
    title: "Currency & Forex Report",
    description: "Live forex exchange rates for USD/INR, EUR/INR, GBP/INR, JPY/INR and global currency market updates.",
    href: "/market/currency",
    category: "Market & News",
    tags: ["currency", "forex", "usd inr", "eur inr", "gbp inr", "jpy inr", "exchange rates", "rupee dollar"],
  },

  // ── Legal, Policies & Utilities ──
  {
    id: "legal-grievance-policy",
    title: "Investor Grievance Policy",
    description: "Detailed policy for grievance reception, logging, turnaround times (TAT), investigation, escalation, and resolution.",
    href: "/grievance-policy",
    category: "Legal & Policies",
    tags: ["grievance policy", "complaint policy", "tat", "redressal timeline", "client protection"],
  },
  {
    id: "legal-privacy-policy",
    title: "Privacy Policy",
    description: "Our policy on data protection, client personal information confidentiality, cookies usage, and information security.",
    href: "/privacy-policy",
    category: "Legal & Policies",
    tags: ["privacy policy", "data protection", "confidentiality", "security", "personal information", "cookies"],
  },
  {
    id: "legal-terms",
    title: "Terms & Conditions",
    description: "Website terms of use, trading disclaimers, intellectual property notices, and legal jurisdiction.",
    href: "/terms",
    category: "Legal & Policies",
    tags: ["terms", "conditions", "disclaimer", "terms of use", "legal", "jurisdiction"],
  },
  {
    id: "util-sitemap",
    title: "Website Sitemap & Page Directory",
    description: "Complete list of all pages, documents, tools, and regulatory resources available on the Shri Venkatesh Stock Broker Services portal.",
    href: "/sitemap",
    category: "Company",
    tags: ["sitemap", "site map", "page list", "all pages", "directory", "navigation", "links"],
  },
];

export function searchWebsite(query: string): SearchableItem[] {
  if (!query || typeof query !== "string") return [];
  const cleanQuery = query.trim().toLowerCase();
  if (cleanQuery.length === 0) return [];

  const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

  return SEARCH_INDEX.map((item) => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const categoryLower = item.category.toLowerCase();
    const tagsJoined = item.tags.join(" ").toLowerCase();

    // Exact title match
    if (titleLower === cleanQuery) score += 100;
    // Title includes full query
    else if (titleLower.includes(cleanQuery)) score += 50;

    // Token matches
    queryTokens.forEach((token) => {
      if (titleLower.includes(token)) score += 20;
      if (tagsJoined.includes(token)) score += 15;
      if (descLower.includes(token)) score += 8;
      if (categoryLower.includes(token)) score += 5;
    });

    return { item, score };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}
