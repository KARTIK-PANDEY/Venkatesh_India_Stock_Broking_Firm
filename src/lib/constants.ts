export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about/company-overview",
    children: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Group Companies", href: "/about/group-companies" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "Top Management", href: "/about/management" },
      { label: "Bank & Demat Details", href: "/about/bank-and-demat-details" },
    ],
  },
  {
    label: "Products & Services",
    href: "/products/equity",
    children: [
      { label: "Equity Trading", href: "/products/equity" },
      { label: "Derivatives (F&O)", href: "/products/derivatives" },
      { label: "Commodity", href: "/products/commodity" },
      { label: "Mutual Funds", href: "/products/mutual-funds" },
      { label: "IPO", href: "/products/ipo" },
      { label: "Depository Services", href: "/products/depository" },
    ],
  },
  {
    label: "SEBI Documents",
    href: "#",
    children: [
      { label: "Investor Charter (SEBI)", href: "/Investor_Charter_SHRI_VSB.pdf", target: "_blank" },
      { label: "Investor Charter (SVSBS)", href: "/investor-resources/investor-charter" },
      { label: "Investor Charter (Annexure C)", href: "/investor-resources/complaint-data?tab=dp" },
      { label: "Escalation Matrix (Live)", href: "/investor-resources/escalation-matrix" },
      { label: "Risk Disclosure (Live)", href: "/investor-resources/risk-disclosure" },
      { label: "eVoting (CDSL)", href: "https://www.evotingindia.com/", target: "_blank" },
      { label: "KRA KYC Validation", href: "/kycvalidation.pdf", target: "_blank" },
      { label: "Policy on Freezing & Blocking", href: "/Policy-on-FreezingBlocking-Client.pdf", target: "_blank" },
      { label: "Mandatory Display Board", href: "/Mandatory-Display.pdf", target: "_blank" },
      { label: "SARAL Account Opening Form", href: "/SARAL-ac-opening-Form-for-resident-individuals.pdf", target: "_blank" },
      { label: "Rights and Obligations", href: "/DP-Operating-Instructions-Annexures-as-on-June-30-2025%20(1).pdf", target: "_blank" },
      { label: "Complaints on SCORES", href: "/Filing_of_complaints_on_SCORES.pdf", target: "_blank" },
    ],
  },
  {
    label: "Investor Resources",
    href: "/investor-resources/investor-charter",
    children: [
      { label: "Investor Charter", href: "/investor-resources/investor-charter" },
      { label: "Risk Disclosure", href: "/investor-resources/risk-disclosure" },
      { label: "Escalation Matrix", href: "/investor-resources/escalation-matrix" },
      { label: "Grievances (SCORES)", href: "/investor-resources/grievances" },
      { label: "SmartODR", href: "/investor-resources/smartodr" },
      { label: "Complaint Data", href: "/investor-resources/complaint-data" },
      { label: "Downloads & Forms", href: "/investor-resources/downloads" },
    ],
  },
  {
    label: "Compliance",
    href: "/compliance/registration-documents",
    children: [
      { label: "Registration Documents", href: "/compliance/registration-documents" },
      { label: "Mandatory Disclosures", href: "/compliance/mandatory-disclosures" },
      { label: "Policies", href: "/compliance/policies" },
    ],
  },
  {
    label: "Market & News",
    href: "/market/live",
    children: [
      { label: "Live Market Watch", href: "/market/live" },
      { label: "Financial News", href: "/market/news" },
      { label: "Currency Report", href: "/market/currency" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const LOGIN_LINKS = [
  { label: "Back Office 1", href: "http://backoffice.venkateshindia.com:8085/capexweb/capexweb/", target: "_blank" },
  { label: "Back Office 2", href: "http://backoffice2.venkateshindia.com:8085/capexweb/capexweb/", target: "_blank" },
  { label: "Webmail Login", href: "http://webmail.venkateshindia.com:2095/", target: "_blank" },
  { label: "Mutual Funds Login", href: "https://disafinancial.com", target: "_blank" },
];

export const COMPANY_INFO = {
  name: "Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
  address: "C 21/22, Shyam Market, Jeevan Bima Marg, Pandri, P.O. Raipur - 492001 (Chhattisgarh)",
  phones: ["0771-4059071", "0771-4059072"],
  fax: "0771-4059072",
  email: "info@venkateshindia.com",
  compliance: {
    name: "Ms. Prashita Sheolikar",
    phone: "9522240016",
    email: "prashitasheolikar83@gmail.com",
  },
  ceo: {
    name: "Mr. Sanjiv Kumar Rathi",
    phone: "9522240013",
    email: "sanjivrathica@yahoo.com",
  },
  grievance: {
    email1: "irfan_regent@yahoo.com",
    email2: "shri_vsb@yahoo.in",
  }
};

export const REGISTRATION_DETAILS = {
  sebi_reg: "INZ000231135",
  bse_cash: "INB011441434",
  bse_fo: "INF011441434",
  cdsl_dp: "IN-DP-41-2015",
  cin: "U67120CT2010PTC021966",
};

export const BRANCHES = [
  {
    city: "Bhilai",
    address: "Commercial Complex-6, Near SBI Personal Banking Branch, Nehru Nagar (E), Bhilai - 490020 (C.G.)",
    phone: "0788-4015665",
    email: "bhilai@venkateshindia.com"
  },
  {
    city: "Raigarh",
    address: "G-16, City Plaza, 1st Floor, Kotra Road, Raigarh - 496001 (C.G.)",
    phone: "09893590000",
  },
  {
    city: "Bilaspur",
    address: "Shop No. 213, 1st Floor, V.R. Plaza, Link Road, Bilaspur - 495001 (C.G.)",
    phone: "07752-228666",
  },
  {
    city: "Odisha",
    address: "C/o R.C. Mishra, Jamai Colony, Mahima Nagar, Navrangpur - 764063 (Orissa)",
    phone: "7205391669",
  }
];

export const MISSION_VISION = {
  mission: "To be a leading provider of innovative and reliable financial services, empowering clients to achieve their financial goals through excellence in service, integrity, and advanced technology.",
  vision: "To become the most trusted and preferred financial services partner in India, recognized for commitment to excellence, client-centric approach, and pioneering solutions.",
  values: [
    { title: "Commitment", desc: "Dedicated to the success of our clients and partners." },
    { title: "Integrity & Respect", desc: "Building trust through honest and ethical relationships." },
    { title: "Quality", desc: "Striving for excellence in every interaction and service." },
    { title: "Diversity & Inclusion", desc: "Fostering an environment of mutual respect and belonging." }
  ]
};

export const BANK_DETAILS = [
  {
    bankName: "ICICI BANK",
    accountName: "SHRI VENKATESH STOCK BROKER SERVICES INDIA PRIVATE LIMITED USCNB ACCOUNT",
    accountNumber: "134705000211",
    ifscCode: "ICIC0001347",
    branch: "Pandri, Raipur",
    type: "USCNB Account (For Client Funds)"
  }
];

export const DEMAT_DETAILS = [
  { accountNo: "1208060000000407", purpose: "Pool Account" },
  { accountNo: "1208060000013393", purpose: "Client Securities Margin Pledge Account" },
  { accountNo: "1208060000017647", purpose: "Client Unpaid Securities Pledge Account" }
];

export const GROUP_COMPANIES = [
  {
    name: "Shri Venkatesh Stock Broker Services India Pvt. Ltd.",
    activity: "Stock Broking (BSE · CDSL Depository)",
    registration: "SEBI Regn. No. INZ000231135",
    website: null,
    description: "Our flagship stock broking entity, registered with SEBI as a Stock Broker and Depository Participant with CDSL. We offer equity trading, depository services, and investment advisory to retail and HNI clients."
  },
  {
    name: "Disa Financial Services",
    activity: "Wealth Management, Financial Planning & Advisory",
    registration: "Group Company",
    website: "https://disafinancial.com",
    description: "A comprehensive financial services firm offering wealth management, insurance, and financial planning solutions. Visit us at disafinancial.com for more details."
  },
];
