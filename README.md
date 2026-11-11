# Shri Venkatesh Stock Broker Services India Pvt. Ltd. — Official Website

> **Production-ready corporate website** for Shri Venkatesh Stock Broker Services India Pvt. Ltd., a SEBI-registered stock broker and CDSL Depository Participant headquartered in Raipur, Chhattisgarh. Built with Next.js 16 (App Router), WCAG 2.1 AA / GIGW accessibility compliance, and full regulatory disclosures.

---

## 🏢 About the Company

**Shri Venkatesh Stock Broker Services India Pvt. Ltd.**
- **SEBI Registration No.:** INZ000231135
- **BSE Cash Membership:** INB011441434
- **BSE F&O Membership:** INF011441434
- **CDSL DP ID:** IN-DP-41-2015
- **CIN:** U67120CT2010PTC021966
- **Established:** 2010
- **Headquarters:** C-21/22, Shyam Market, 1st Floor, Pandri, Raipur (C.G.)

### Group Companies
| Company | Activity |
|---|---|
| Shri Venkatesh Stock Broker Services India Pvt. Ltd. | Stock Broking (BSE · CDSL Depository) |
| Disa Financial Services | Wealth Management & Financial Planning ([disafinancial.com](https://disafinancial.com)) |

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.2.4](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | React 19.2.4 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`, `tw-animate-css`) |
| **UI Components** | Base UI (`@base-ui/react`), shadcn/ui patterns |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Theming** | `next-themes` (Light / Dark / System mode) |
| **Forms & Validation** | React Hook Form + Zod (`@hookform/resolvers`) |
| **Fonts** | Google Fonts (`Inter` & `Outfit` via `next/font/google`) |

---

## 📁 Project Structure

```text
Venkatesh_India_Stock_Broking_Firm/
├── public/
│   ├── logo.jpg                        # Company logo (rectangular image)
│   ├── sanjiv-rathi.jpg                # Managing Director photo
│   ├── escalation_matrix.jpg           # Grievance escalation matrix graphic
│   └── *.pdf / *.zip                   # Statutory charters, KYC, SARAL & compliance PDFs
│
├── src/
│   ├── app/                            # Next.js App Router pages (37 static routes)
│   │   ├── globals.css                 # Tailwind v4 tokens, light/dark contrast palette, a11y utilities
│   │   ├── layout.tsx                  # Root layout (Skip link → AnnouncementBar → Header → CompanyIntro → MarketTicker → Main → Footer → VoiceReader)
│   │   ├── page.tsx                    # Home page (with StatutoryModalSequence & FATCAAlert)
│   │   │
│   │   ├── about/
│   │   │   ├── company-overview/       # Who we are, registration details, group companies
│   │   │   ├── group-companies/        # Venkatesh India + Disa Financial Services
│   │   │   ├── mission-vision/         # Mission, Vision, Core Values
│   │   │   ├── core-values/            # Core values in detail
│   │   │   ├── management/             # MD Sanjiv Rathi + leadership team
│   │   │   ├── bank-details/           # Official USCNB bank accounts
│   │   │   └── bank-and-demat-details/ # Combined Bank & Demat account details
│   │   │
│   │   ├── products/
│   │   │   ├── equity/                 # Equity trading on BSE
│   │   │   ├── derivatives/            # F&O trading on BSE
│   │   │   ├── commodity/              # Commodity trading
│   │   │   ├── mutual-funds/           # Mutual fund investments
│   │   │   ├── ipo/                    # IPO & ASBA applications
│   │   │   └── depository/             # CDSL depository services
│   │   │
│   │   ├── market/
│   │   │   ├── live/                   # Live market overview
│   │   │   ├── currency/               # Currency market updates
│   │   │   └── news/                   # Market news & insights
│   │   │
│   │   ├── investor-resources/
│   │   │   ├── investor-charter/       # SEBI Investor Charter
│   │   │   ├── risk-disclosure/        # Risk disclosure document
│   │   │   ├── escalation-matrix/      # 4-level grievance escalation path
│   │   │   ├── grievances/             # SCORES grievance filing
│   │   │   ├── smartodr/               # SmartODR dispute resolution
│   │   │   ├── complaint-data/         # Monthly complaint statistics
│   │   │   └── downloads/              # Forms, circulars & PDF downloads
│   │   │
│   │   ├── compliance/
│   │   │   ├── registration-documents/ # SEBI / Exchange registration documents
│   │   │   ├── mandatory-disclosures/  # Mandatory regulatory disclosures
│   │   │   └── policies/               # Regulatory & internal policies
│   │   │
│   │   ├── partner-with-us/            # Sub-broker / Authorised Person partnership
│   │   ├── open-account/               # Account opening page & OpenAccountForm
│   │   ├── contact/                    # Contact info, branch locator & AccessibleCaptcha form
│   │   ├── careers/                    # Careers page
│   │   ├── grievance-policy/           # Grievance Redressal Policy
│   │   ├── privacy-policy/             # Privacy Policy
│   │   ├── terms/                      # Terms & Conditions
│   │   ├── search/                     # Site-wide instant search
│   │   └── sitemap/                    # Visual HTML sitemap
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx     # Top regulatory/promo strip
│   │   │   ├── Header.tsx              # Navigation bar (logo + nav + search + theme + actions)
│   │   │   ├── CompanyIntro.tsx        # Company name + SEBI reg + exchange badges
│   │   │   ├── MarketTicker.tsx        # Live market prices ticker
│   │   │   ├── PageHero.tsx            # Reusable inner-page hero banner
│   │   │   ├── AccessibilityWidget.tsx # GIGW/WCAG visual & reading customization panel
│   │   │   └── Footer.tsx              # Full footer with links, branches & regulatory details
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx                # Home page hero section
│   │   │   ├── StatsBar.tsx            # Key stats (15+ years, BSE, CDSL, Raipur)
│   │   │   ├── WelcomeSection.tsx      # Welcome introduction section
│   │   │   ├── ProductsGrid.tsx        # Products & services grid
│   │   │   ├── WhyChooseUs.tsx         # Value proposition highlights
│   │   │   ├── AccessibilityVideos.tsx # Sign-language / accessibility video resources
│   │   │   ├── SebiNotices.tsx         # SEBI regulatory notice highlights
│   │   │   ├── GrievanceQuickAccess.tsx# Quick grievance filing links (SCORES / SmartODR)
│   │   │   └── PartnerCTA.tsx          # "Become a Partner" CTA section
│   │   │
│   │   ├── ui/
│   │   │   ├── StatutoryModalSequence.tsx # Top-right sequential investor alert card
│   │   │   ├── FATCAAlert.tsx          # Dismissible FATCA self-certification alert card
│   │   │   ├── VoiceReader.tsx         # Web Speech API page & selection screen reader
│   │   │   ├── AccessibleCaptcha.tsx   # Visual canvas + Audio Web Speech CAPTCHA
│   │   │   └── ...                     # Reusable Base UI / shadcn primitives (button, sheet, dropdown-menu, navigation-menu)
│   │   │
│   │   ├── mode-toggle.tsx             # Light / Dark theme toggle
│   │   └── theme-provider.tsx          # next-themes provider wrapper
│   │
│   └── lib/
│       ├── constants.ts                # Company data, nav links, registration & branch details
│       ├── search-index.ts             # Client-side searchable index for /search
│       └── utils.ts                    # Tailwind merge utility (cn) & file URL helper
│
├── components.json                     # shadcn/ui configuration
├── eslint.config.mjs                   # ESLint configuration
├── next.config.ts                      # Next.js configuration & legacy PHP/back-office redirects
├── postcss.config.mjs                  # PostCSS / Tailwind CSS v4 plugin config
├── tsconfig.json                       # TypeScript configuration
└── package.json
```

---

## 🗂️ Pages Overview

### Public Pages (Statically Generated)

| Route | Description |
|---|---|
| `/` | Home — Hero, Stats Bar, Welcome, Products Grid, Why Choose Us, SEBI Notices, Grievance Access, Partner CTA, Investor Alerts |
| `/about/company-overview` | About the company, registration table, group companies |
| `/about/group-companies` | Venkatesh India + Disa Financial Services detail cards |
| `/about/mission-vision` | Mission, Vision, Core Values |
| `/about/core-values` | Values in expanded detail |
| `/about/management` | MD Sanjiv Rathi photo + bio + leadership team |
| `/about/bank-details` | Official USCNB bank accounts |
| `/about/bank-and-demat-details` | Combined Bank & Demat transfer details |
| `/products/equity` | Equity trading on BSE |
| `/products/derivatives` | F&O trading on BSE |
| `/products/commodity` | Commodity trading |
| `/products/mutual-funds` | Mutual fund investments |
| `/products/ipo` | IPO & ASBA applications |
| `/products/depository` | CDSL depository services |
| `/market/live` | Live market overview & indices |
| `/market/currency` | Currency derivatives & forex updates |
| `/market/news` | Market news & investor updates |
| `/investor-resources/investor-charter` | SEBI Investor Charter compliance |
| `/investor-resources/risk-disclosure` | Standard risk disclosure document |
| `/investor-resources/escalation-matrix` | 4-level grievance escalation (Company → BSE → SEBI SCORES → SmartODR) |
| `/investor-resources/complaint-data` | Monthly complaint statistics |
| `/investor-resources/grievances` | SCORES grievance filing |
| `/investor-resources/smartodr` | SmartODR dispute resolution |
| `/investor-resources/downloads` | Forms, circulars & compliance PDFs |
| `/compliance/registration-documents` | SEBI & Exchange registration certificates |
| `/compliance/mandatory-disclosures` | Mandatory regulatory disclosures |
| `/compliance/policies` | Company & KYC policies |
| `/partner-with-us` | Sub-broker / Authorised Person partnership |
| `/open-account` | Account opening guide & interactive form |
| `/contact` | Contact details, branch offices & inquiry form with Audio/Visual CAPTCHA |
| `/careers` | Career opportunities |
| `/grievance-policy` | Grievance Redressal Policy |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/search` | Site-wide search across pages and documents |
| `/sitemap` | Structured site map |

---

## ✨ Key Features & Compliance

### 1. Accessibility & GIGW / WCAG 2.1 AA Compliance
- **Contrast Compliance (WCAG 1.4.3 / GIGW 5.2.14):** Design tokens in `src/app/globals.css` and component colors meet minimum contrast ratios (`>= 4.5:1` for normal text, `>= 3:1` for large text) across both **Light** and **Dark** themes.
- **Voice Screen Reader (`VoiceReader.tsx`):** Built-in floating TTS reader using the Web Speech API with Play, Pause, Resume, and Stop controls, intelligent block-by-block pausing between headings and paragraphs, and highlighted text playback.
- **Accessibility Customization Panel (`AccessibilityWidget.tsx`):** Persistent `localStorage`-backed controls for Font Size, Letter Spacing, Line Height, Text Spacing, High Contrast mode, Monochrome mode, Dyslexia-friendly font, Reading Mask, and Link Highlighting.
- **Accessible CAPTCHA (`AccessibleCaptcha.tsx`):** Canvas-based visual CAPTCHA paired with a one-click Web Speech **Audio CAPTCHA** generator, refresh button, and ARIA live announcements on the Contact page.
- **Keyboard & Landmark Navigation:** Includes a `"Skip to Main Content"` link targeting `#main-content` and semantic HTML landmarks throughout.

### 2. Regulatory Investor Alerts
- **Sequential Investor Alert Card (`StatutoryModalSequence.tsx`):** Automatically appears as a non-blocking, top-right floating card on the homepage (keeping header actions unblocked and background scrollable) presenting 3 mandatory CDSL/SEBI notices:
  1. *Prevent Unauthorized Transactions* (Mobile number update for same-day CDSL SMS alerts)
  2. *One-Time KYC Process*
  3. *ASBA Facility for IPO Subscription*
  Includes **Previous** / **Next** / **Close & Enter Site** navigation, step progress indicators, and official broker branding footer.
- **FATCA Alert (`FATCAAlert.tsx`):** Dismissible bottom-right alert card linking directly to Corporate and Individual FATCA Self-Declaration forms.

### 3. Legacy URL Redirects & Back-Office Routing
Configured in `next.config.ts`:
- Automatic `308` permanent redirects from legacy `.php` routes (e.g., `/index.php`, `/Director.php`, `/contact.php`) to modern Next.js routes.
- Direct portal routes for `/login/backoffice-1` and `/login/backoffice-2`.

---

## 🏗️ Architecture & Key Design Decisions

### Layout Stack
Every page renders through this global layout chain (`src/app/layout.tsx`):
```text
Skip to Main Content
  ↓
AnnouncementBar (SEBI regulatory strip)
  ↓
Header (Logo · Nav · Search · Theme Toggle · Login · Open Account)
  ↓
CompanyIntro (Full legal name · SEBI Reg · BSE · CDSL · Est. 2010)
  ↓
MarketTicker (Live market prices)
  ↓
[Page Content (#main-content)]
  ↓
Footer (Links · Branches · Regulatory · Legal disclaimer)
  ↓
VoiceReader (Floating accessibility TTS controls)
```

### Component & UI Conventions
- Interactive primitives use **Base UI** (`@base-ui/react`) — avoiding Radix `asChild` patterns to prevent React hydration mismatches.
- Navigation links styled with `buttonVariants` utility instead of `Button asChild` wrappers.
- Images served from `/public/` via `next/image` (`object-contain` for `/public/logo.jpg`, `fill` + `object-cover object-top` for `/public/sanjiv-rathi.jpg`).

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 20+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Venkatesh_India_Stock_Broking_Firm

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification

```bash
# TypeScript check
npx tsc --noEmit

# ESLint check
npm run lint

# Build & start production server
npm run build
npm run start
```

---

## 🔑 Key Constants (`src/lib/constants.ts`)

All company data is centralized in `src/lib/constants.ts`. To update any company information:

| Constant | Purpose |
|---|---|
| `COMPANY_INFO` | Name, address, phones, email, compliance officer, CEO details |
| `REGISTRATION_DETAILS` | SEBI Reg No., BSE memberships, CDSL DP ID, CIN |
| `BANK_DETAILS` | Official USCNB bank accounts |
| `BRANCHES` | Branch office locations and contacts |
| `NAV_LINKS` | Navigation menu structure |
| `LOGIN_LINKS` | Back office and MF login URLs |
| `GROUP_COMPANIES` | Group company details (Venkatesh India + Disa Financial Services) |
| `MISSION_VISION` | Mission, vision, and core values text |

---

## 🛡️ Regulatory Compliance

This website is built to meet SEBI's mandatory disclosure requirements for registered stock brokers:

- ✅ **Investor Charter** — displayed as per SEBI circular
- ✅ **Escalation Matrix** — 4-level grievance path (Broker → BSE → SEBI SCORES → SmartODR)
- ✅ **Complaint Data** — monthly statistics table
- ✅ **Risk Disclosure** — standard risk disclosure for equity/derivatives
- ✅ **SEBI SCORES & SmartODR** links prominently displayed
- ✅ **Sequential Investor Notices** — CDSL SMS alert, One-Time KYC, and ASBA IPO advisories on homepage load
- ✅ **FATCA Self-Certification** — quick access to corporate & individual forms
- ✅ **Registration details & Compliance Officer** in footer (SEBI Reg, BSE memberships, CDSL DP ID, CIN)

---

## 📸 Assets

| File | Description |
|---|---|
| `public/logo.jpg` | Company logo — uses `object-contain` for full visibility |
| `public/sanjiv-rathi.jpg` | MD Sanjiv Rathi photo — displayed on `/about/management` |
| `public/escalation_matrix.jpg` | Grievance escalation matrix image |
| `public/*.pdf` | Mandatory investor charters, circulars, and account opening PDFs |

> **Note:** Original source photos are in `src/assets/`. For Next.js static serving, public assets are placed in `/public/`.

---

## 🌐 Deployment

This project is deployed on **Vercel**.

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node.js Version:** 20.x

### Environment Variables
No environment variables are required for the current static build. If backend integrations (contact forms, login APIs) are added, add them to `.env.local`:

```env
# Example — add as needed
NEXT_PUBLIC_API_URL=https://api.venkateshindia.com
```

---

## 📞 Contact

**Shri Venkatesh Stock Broker Services India Pvt. Ltd.**
C-21/22, Shyam Market, 1st Floor, Pandri, Raipur, Chhattisgarh, India

- 🌐 Website: [venkateshindia.com](https://venkateshindia.com)
- 📧 Email: shri_vsb@yahoo.in
- 🏛️ SEBI Registration: INZ000231135

---

## Developed By **KARTIK PANDEY**

---

## 📄 License

This is a proprietary website owned by Shri Venkatesh Stock Broker Services India Pvt. Ltd. All rights reserved.

---

> *"Empowering investors with knowledge, trust, and technology since 2010."*
