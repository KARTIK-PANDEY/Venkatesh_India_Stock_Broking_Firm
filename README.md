# Shri Venkatesh Stock Broker Services India Pvt. Ltd. — Official Website

> **Production-ready corporate website** for Shri Venkatesh Stock Broker Services India Pvt. Ltd., a SEBI-registered stock broker and CDSL Depository Participant headquartered in Raipur, Chhattisgarh. Built with Next.js 16, TypeScript, Tailwind CSS v4, and full WCAG 2.1 / GIGW accessibility & SEBI regulatory compliance.

---

## 🏢 About the Company

**Shri Venkatesh Stock Broker Services India Pvt. Ltd.**
- **SEBI Registration No.:** INZ000231135
- **BSE Cash Membership:** INB011441434
- **BSE F&O Membership:** INF011441434
- **CDSL DP ID:** IN-DP-41-2015
- **CIN:** U67120CT2010PTC021966
- **Established:** 2010
- **Headquarters:** C 21/22, Shyam Market, Jeevan Bima Marg, Pandri, P.O. Raipur - 492001 (Chhattisgarh)
- **Branch Office:** Commercial Complex-6, Near SBI Personal Banking Branch, Nehru Nagar (E), Bhilai - 490020 (C.G.)

### Group Companies
| Company | Activity |
|---|---|
| Shri Venkatesh Stock Broker Services India Pvt. Ltd. | Stock Broking (BSE · CDSL Depository) |
| Disa Financial Services | Wealth Management, Financial Planning & Advisory ([disafinancial.com](https://disafinancial.com)) |

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.2.4](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | React 19.2.4 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| **UI Primitives** | Base UI (`@base-ui/react`), shadcn/ui patterns (`components.json`) |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Theming** | `next-themes` (Light / Dark / System mode) |
| **Forms & Validation** | React Hook Form + Zod v4 |
| **Fonts** | Google Fonts (`Inter`, `Outfit` via `next/font/google`) |

---

## 📁 Project Structure

```
Venkatesh_India_Stock_Broking_Firm/
├── public/
│   ├── logo.jpg                        # Company logo
│   ├── sanjiv-rathi.jpg                # Managing Director photo
│   ├── escalation_matrix.jpg           # Grievance escalation matrix graphic
│   ├── download/                       # FATCA declaration PDFs
│   ├── policies/                       # SEBI / exchange policy PDFs
│   └── *.pdf / *.zip                   # Investor charters, KYC, SARAL & disclosure PDFs
│
├── src/
│   ├── app/                            # Next.js App Router pages (36 public routes)
│   │   ├── globals.css                 # Tailwind v4 tokens & WCAG-compliant color variables
│   │   ├── layout.tsx                  # Root layout (Skip link → Header stack → Footer → VoiceReader)
│   │   ├── page.tsx                    # Home page (includes StatutoryModalSequence & FATCAAlert)
│   │   │
│   │   ├── about/
│   │   │   ├── company-overview/       # Who we are, registration details, group companies
│   │   │   ├── group-companies/        # Venkatesh India + Disa Financial Services
│   │   │   ├── mission-vision/         # Mission, Vision, Values
│   │   │   ├── core-values/            # Core values in detail
│   │   │   ├── management/             # MD Sanjiv Rathi + leadership team
│   │   │   ├── bank-details/           # Official USCNB bank accounts
│   │   │   └── bank-and-demat-details/ # Official USCNB bank & CDSL demat pool/pledge accounts
│   │   │
│   │   ├── products/
│   │   │   ├── equity/                 # Equity trading on BSE
│   │   │   ├── derivatives/            # F&O trading on BSE
│   │   │   ├── commodity/              # Commodity trading
│   │   │   ├── mutual-funds/           # Mutual fund investments
│   │   │   ├── ipo/                    # IPO applications (ASBA)
│   │   │   └── depository/             # CDSL depository services
│   │   │
│   │   ├── investor-resources/
│   │   │   ├── investor-charter/       # SEBI Investor Charter
│   │   │   ├── risk-disclosure/        # Risk disclosure document
│   │   │   ├── escalation-matrix/      # 4-level grievance escalation path
│   │   │   ├── grievances/             # SCORES grievance filing
│   │   │   ├── smartodr/               # SmartODR dispute resolution
│   │   │   ├── complaint-data/         # Monthly complaint statistics (BSE & DP)
│   │   │   └── downloads/              # Forms, charters & regulatory downloads
│   │   │
│   │   ├── compliance/
│   │   │   ├── registration-documents/ # SEBI/BSE/CDSL certificates
│   │   │   ├── mandatory-disclosures/  # Mandatory regulatory disclosures
│   │   │   └── policies/               # Regulatory & internal policies
│   │   │
│   │   ├── market/
│   │   │   ├── live/                   # Live market watch
│   │   │   ├── news/                   # Financial news
│   │   │   └── currency/               # Currency report
│   │   │
│   │   ├── partner-with-us/            # Sub-broker / Authorised Person partnership
│   │   ├── open-account/               # Account opening (OpenAccountForm)
│   │   ├── contact/                    # Contact info + form with AccessibleCaptcha
│   │   ├── careers/                    # Careers page
│   │   ├── search/                     # Client-side site search
│   │   ├── sitemap/                    # Accessible HTML sitemap
│   │   ├── grievance-policy/           # Grievance redressal policy
│   │   ├── privacy-policy/             # Privacy policy
│   │   └── terms/                      # Terms & conditions
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx     # Top regulatory strip
│   │   │   ├── Header.tsx              # Navigation bar (logo + mega-menu + actions + theme toggle)
│   │   │   ├── CompanyIntro.tsx        # Company name + SEBI reg + exchange badges
│   │   │   ├── MarketTicker.tsx        # Live market prices ticker
│   │   │   ├── PageHero.tsx            # Reusable inner page hero banner
│   │   │   ├── AccessibilityWidget.tsx # Accessibility controls widget
│   │   │   └── Footer.tsx              # Full footer with links, branches & regulatory details
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx                # Home page hero section
│   │   │   ├── StatsBar.tsx            # Key company metrics bar
│   │   │   ├── WelcomeSection.tsx      # Welcome overview section
│   │   │   ├── ProductsGrid.tsx        # Products & services grid
│   │   │   ├── WhyChooseUs.tsx         # Key differentiators
│   │   │   ├── AccessibilityVideos.tsx # Investor awareness videos (accessible)
│   │   │   ├── SebiNotices.tsx         # SEBI / CDSL investor notices
│   │   │   ├── GrievanceQuickAccess.tsx# Quick grievance filing links
│   │   │   └── PartnerCTA.tsx          # "Become a Partner" CTA section
│   │   │
│   │   ├── ui/
│   │   │   ├── VoiceReader.tsx         # Floating Web Speech screen reader with section pauses
│   │   │   ├── AccessibleCaptcha.tsx   # Visual canvas + Web Speech audio CAPTCHA
│   │   │   ├── StatutoryModalSequence.tsx # Floating top-right 3-step statutory investor alerts
│   │   │   ├── FATCAAlert.tsx          # Floating FATCA self-certification alert card
│   │   │   ├── button.tsx              # Button & buttonVariants
│   │   │   ├── dropdown-menu.tsx       # Base UI dropdown menu
│   │   │   ├── navigation-menu.tsx     # Navigation menu
│   │   │   └── sheet.tsx               # Mobile navigation drawer
│   │   │
│   │   ├── mode-toggle.tsx             # Light / Dark theme toggle
│   │   └── theme-provider.tsx          # next-themes provider
│   │
│   └── lib/
│       ├── constants.ts                # Company info, nav links, banks, demat & branch details
│       ├── search-index.ts             # Site-wide search index entries
│       └── utils.ts                    # Utilities (cn, getFileUrl)
│
├── components.json                     # shadcn/ui configuration
├── eslint.config.mjs                   # ESLint configuration
├── next.config.ts                      # Next.js config & legacy PHP / back-office redirects
├── postcss.config.mjs                  # PostCSS / Tailwind CSS v4 plugin config
├── tsconfig.json                       # TypeScript configuration
└── package.json
```

---

## 🗂️ Pages Overview

### Public Pages (36 Statically Prerendered Routes)

| Route | Description |
|---|---|
| `/` | Home — Hero, Stats Bar, Welcome, Products Grid, Why Choose Us, Accessibility Videos, SEBI Notices, Grievance Access, Partner CTA, Statutory Notice Card, FATCA Alert |
| `/about/company-overview` | About the company, registration table, group companies |
| `/about/group-companies` | Venkatesh India + Disa Financial Services detail cards |
| `/about/mission-vision` | Mission, Vision, Core Values |
| `/about/core-values` | Values in expanded detail |
| `/about/management` | MD Sanjiv Rathi photo + bio + leadership team |
| `/about/bank-details` | Official USCNB bank accounts (ICICI Bank, Pandri Raipur) |
| `/about/bank-and-demat-details` | Official USCNB bank accounts + CDSL Pool/Margin Pledge demat accounts |
| `/products/equity` | Equity trading on BSE |
| `/products/derivatives` | F&O trading on BSE |
| `/products/commodity` | Commodity trading |
| `/products/mutual-funds` | Mutual fund investments |
| `/products/ipo` | IPO applications (ASBA) |
| `/products/depository` | CDSL depository services |
| `/investor-resources/investor-charter` | SEBI Investor Charter compliance |
| `/investor-resources/risk-disclosure` | Risk disclosure document |
| `/investor-resources/escalation-matrix` | 4-level grievance escalation (Company → BSE → SEBI SCORES → SmartODR) |
| `/investor-resources/complaint-data` | Monthly complaint statistics (BSE & CDSL DP) |
| `/investor-resources/grievances` | SCORES grievance filing |
| `/investor-resources/smartodr` | SmartODR dispute resolution |
| `/investor-resources/downloads` | Forms, charters, and regulatory downloads |
| `/compliance/registration-documents` | SEBI/BSE/CDSL registration certificates |
| `/compliance/mandatory-disclosures` | Mandatory regulatory disclosures |
| `/compliance/policies` | Company & exchange policies |
| `/market/live` | Live market watch |
| `/market/news` | Financial news |
| `/market/currency` | Currency report |
| `/partner-with-us` | Sub-broker / Authorised Person partnership |
| `/open-account` | Account opening form |
| `/contact` | Contact information, branch office & inquiry form with Accessible CAPTCHA |
| `/careers` | Career opportunities |
| `/search` | Site-wide client search |
| `/sitemap` | Full accessible HTML sitemap |
| `/grievance-policy` | Grievance redressal policy |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms & conditions |

---

## 🏗️ Architecture & Key Features

### Global Layout Stack
Every page renders through the root layout (`src/app/layout.tsx`):
```
Skip to Main Content Link (keyboard focusable)
  ↓
AnnouncementBar (SEBI regulatory strip)
  ↓
Header (Logo · Nav / Mega-Menu · Search · Theme Toggle · Login · Open Account)
  ↓
CompanyIntro (Full legal name · SEBI Reg · BSE · CDSL · Est. 2010)
  ↓
MarketTicker (Live market prices)
  ↓
<main id="main-content"> [Page Content] </main>
  ↓
Footer (Quick Links · Branch Info · Regulatory Numbers · Compliance Officer)
  ↓
VoiceReader (Floating Web Speech screen-reader widget)
```

### Accessibility & GIGW / WCAG Compliance
- **Color Contrast (WCAG 1.4.3 / GIGW 5.2.14):** Custom CSS variables in `src/app/globals.css` and all page/component text colors meet minimum **4.5:1** contrast for normal text and **3:1** for large text across both Light and Dark themes.
- **VoiceReader (`src/components/ui/VoiceReader.tsx`):** Built-in browser speech synthesis reader with Play/Pause/Stop controls, reading-selection support, and structured block-level pauses (`PAUSE_HEADING_MS = 300`, `PAUSE_BLOCK_MS = 200`).
- **Accessible CAPTCHA (`src/components/ui/AccessibleCaptcha.tsx`):** Distorted canvas verification paired with Web Speech API audio playback, screen-reader live regions, and one-click refresh.
- **Keyboard & Screen Reader Support:** Skip-to-main-content link, semantic landmarks, valid heading hierarchies, and dynamic `aria-controls` / `aria-live` regions.

### Statutory & Compliance Alerts
- **Sequential Investor Alert Card (`src/components/ui/StatutoryModalSequence.tsx`):** Floating top-right 3-step alert card shown on homepage load (`window.onload`) displaying mandatory investor notices (CDSL Demat mobile alerts, One-Time KYC, and IPO ASBA). Anchored below the header so navigation remains unblocked, with **Previous**, **Next**, and **Close & Enter Site** controls.
- **FATCA Alert (`src/components/ui/FATCAAlert.tsx`):** Floating bottom-right card linking directly to Corporate and Individual Self-Certification PDFs.

### Legacy URL Redirects & Back-Office Shortcuts
Configured in `next.config.ts`:
- Permanent redirects (`308`) mapping legacy `.php` routes (e.g., `/index.php`, `/Director.php`, `/bankdetails.php`, `/contact.php`) to modern Next.js routes.
- Shortcut routes `/login/backoffice-1` and `/login/backoffice-2` forwarding to client back-office portals.

### Component Compliance
- Built on **Base UI** (`@base-ui/react`) — no Radix `asChild` pattern is used, avoiding hydration mismatches.
- Navigation links styled via `buttonVariants` (`src/components/ui/button.tsx`).

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

### Production Build & Type Check

```bash
# Production build (includes Next.js TypeScript verification)
npm run build
npm run start

# Standalone TypeScript check
npx tsc --noEmit
```

### Lint

```bash
npm run lint
```

---

## 🔑 Key Constants (`src/lib/constants.ts`)

All company data is centralized in `src/lib/constants.ts`:

| Constant | Purpose |
|---|---|
| `COMPANY_INFO` | Name, address, phones, fax, emails, compliance officer, CEO & grievance contacts |
| `REGISTRATION_DETAILS` | SEBI Reg No., BSE memberships, CDSL DP ID, CIN |
| `BANK_DETAILS` | Official USCNB bank accounts |
| `DEMAT_DETAILS` | Pool Account, Margin Pledge, and Unpaid Securities Pledge demat accounts |
| `BRANCHES` | Branch office locations and contacts (Bhilai) |
| `NAV_LINKS` | Navigation menu and SEBI mega-menu structure |
| `LOGIN_LINKS` | Back office, webmail, and Mutual Funds login URLs |
| `GROUP_COMPANIES` | Group company details (Venkatesh India + Disa Financial Services) |
| `MISSION_VISION` | Mission, vision, and core values text |

---

## 🛡️ Regulatory Compliance

This website meets SEBI's mandatory disclosure requirements for registered stock brokers and Depository Participants:

- ✅ **Sequential Statutory Investor Notices** — CDSL mobile alerts, One-Time KYC, and IPO ASBA
- ✅ **Investor Charter & DP Charter** — displayed as per SEBI & CDSL circulars
- ✅ **Escalation Matrix** — 4-level grievance path (Broker → BSE → SEBI SCORES → SmartODR)
- ✅ **Complaint Data** — monthly statistics tables (BSE & CDSL DP)
- ✅ **Risk Disclosure** — standard risk disclosures on derivatives & equity
- ✅ **SEBI SCORES & SmartODR** — prominent links and dedicated information pages
- ✅ **Mandatory Disclosures & Policies** — downloadable PDFs in `/public/policies/` and `/public/`
- ✅ **Registration & Compliance Officer Details** — displayed in footer and dedicated pages

---

## 📸 Assets

| File | Description |
|---|---|
| `public/logo.jpg` | Company logo — rendered with `object-contain` for full visibility |
| `public/sanjiv-rathi.jpg` | MD Sanjiv Rathi photo — displayed on `/about/management` |
| `public/escalation_matrix.jpg` | Escalation matrix chart |

> **Note:** Original source files are archived in `src/assets/`. Static assets served by Next.js must reside in `/public/`.

---

## 🌐 Deployment

This project is configured for **Vercel** (and compatible Node.js hosts):

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node.js Version:** 20.x

### Environment Variables
No environment variables are required for the current build. If backend integrations (contact forms, login APIs) are added later, configure them in `.env.local`.

---

## 📞 Contact

**Shri Venkatesh Stock Broker Services India Pvt. Ltd.**
C 21/22, Shyam Market, Jeevan Bima Marg, Pandri, P.O. Raipur - 492001 (Chhattisgarh)

- 🌐 Website: [venkateshindia.com](https://venkateshindia.com)
- 📧 Email: `info@venkateshindia.com` / `shri_vsb@yahoo.in`
- ☎️ Phone: `0771-4059071` / `0771-4059072`
- 🏛️ SEBI Registration: `INZ000231135`

---

## Developed By **KARTIK PANDEY**

---

## 📄 License

This is a proprietary website owned by Shri Venkatesh Stock Broker Services India Pvt. Ltd. All rights reserved.

---

> *"Empowering investors with knowledge, trust, and technology since 2010."*
