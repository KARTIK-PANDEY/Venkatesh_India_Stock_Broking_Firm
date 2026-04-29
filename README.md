# Shri Venkatesh Stock Broker Services India Pvt. Ltd. — Official Website

> **Production-ready corporate website** for Shri Venkatesh Stock Broker Services India Pvt. Ltd., a SEBI-registered stock broker and CDSL Depository Participant headquartered in Raipur, Chhattisgarh.

---

## 🏢 About the Company

**Shri Venkatesh Stock Broker Services India Pvt. Ltd.**
- **SEBI Registration No.:** INZ000231135
- **BSE Cash Membership:** INB011441434
- **BSE F&O Membership:** INF011441434
- **CDSL DP ID:** IN-DP-41-2015
- **CIN:** U67120CT2010PTC021966
- **Established:** 2010
- **Headquarters:** Raipur, Chhattisgarh

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
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | Base UI (`@base-ui/react`), shadcn/ui patterns |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Theming** | `next-themes` (Light / Dark mode) |
| **Forms** | React Hook Form + Zod |
| **Fonts** | Google Fonts (via Next.js font optimization) |

---

## 📁 Project Structure

```
venkatesh-india/
├── public/
│   ├── logo.jpg                  # Company logo (full rectangular image)
│   └── sanjiv-rathi.jpg          # Managing Director photo
│
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout (AnnouncementBar → Header → CompanyIntro → MarketTicker → Footer)
│   │   ├── page.tsx              # Home page
│   │   │
│   │   ├── about/
│   │   │   ├── company-overview/ # Who we are, registration details, group companies
│   │   │   ├── group-companies/  # Venkatesh India + Disa Financial Services
│   │   │   ├── mission-vision/   # Mission, Vision, Values
│   │   │   ├── core-values/      # Core values in detail
│   │   │   ├── management/       # MD Sanjiv Rathi + leadership team
│   │   │   └── bank-details/     # Official bank accounts for fund transfers
│   │   │
│   │   ├── products/
│   │   │   ├── equity/           # Equity trading on BSE
│   │   │   ├── derivatives/      # F&O trading on BSE
│   │   │   ├── commodity/        # Commodity trading
│   │   │   ├── mutual-funds/     # Mutual fund investments
│   │   │   ├── ipo/              # IPO applications
│   │   │   └── depository/       # CDSL depository services
│   │   │
│   │   ├── investor-resources/
│   │   │   ├── investor-charter/ # SEBI Investor Charter
│   │   │   ├── risk-disclosure/  # Risk disclosure document
│   │   │   ├── escalation-matrix/# 4-level grievance escalation path
│   │   │   ├── grievances/       # SCORES grievance filing
│   │   │   ├── smartodr/         # SmartODR dispute resolution
│   │   │   ├── complaint-data/   # Monthly complaint statistics
│   │   │   └── downloads/        # Forms & downloads
│   │   │
│   │   ├── compliance/
│   │   │   ├── registration-documents/
│   │   │   ├── mandatory-disclosures/
│   │   │   └── policies/
│   │   │
│   │   ├── partner-with-us/      # Sub-broker / AP partnership page
│   │   ├── open-account/         # Account opening page
│   │   ├── contact/              # Contact us page
│   │   ├── careers/              # Careers page
│   │   └── market/               # Market news & insights
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx  # Top regulatory/promo strip
│   │   │   ├── Header.tsx           # Navigation bar (logo + nav + actions)
│   │   │   ├── CompanyIntro.tsx     # Company name + SEBI reg + exchange badges
│   │   │   ├── MarketTicker.tsx     # Live market prices ticker
│   │   │   └── Footer.tsx           # Full footer with links, regulatory info
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Home page hero with animations
│   │   │   ├── ProductsGrid.tsx     # Products & services grid
│   │   │   ├── StatsBar.tsx         # Key stats (15+ years, BSE, CDSL, Raipur)
│   │   │   ├── GrievanceQuickAccess.tsx  # Quick grievance filing links
│   │   │   └── PartnerCTA.tsx       # "Become a Partner" CTA section
│   │   │
│   │   └── ui/                   # Reusable UI primitives (button, sheet, dropdown, etc.)
│   │
│   └── lib/
│       ├── constants.ts          # All company data, nav links, registration details
│       └── utils.ts              # Tailwind merge utility (cn)
│
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS v4 configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

---

## 🗂️ Pages Overview

### Public Pages (Statically Generated)

| Route | Description |
|---|---|
| `/` | Home — Hero, Products Grid, Stats Bar, Partner CTA, Grievance Access |
| `/about/company-overview` | About the company, registration table, group companies |
| `/about/group-companies` | Venkatesh India + Disa Financial Services detail cards |
| `/about/mission-vision` | Mission, Vision, Core Values |
| `/about/core-values` | Values in expanded detail |
| `/about/management` | MD Sanjiv Rathi photo + bio + leadership team |
| `/about/bank-details` | Official USCNB bank accounts (ICICI Bank, Pandri Raipur) |
| `/products/equity` | Equity trading on BSE |
| `/products/derivatives` | F&O trading on BSE |
| `/products/commodity` | Commodity trading |
| `/products/mutual-funds` | Mutual fund investments |
| `/products/ipo` | IPO applications |
| `/products/depository` | CDSL depository services |
| `/investor-resources/investor-charter` | SEBI Investor Charter compliance |
| `/investor-resources/risk-disclosure` | Risk disclosure |
| `/investor-resources/escalation-matrix` | 4-level grievance escalation (Company → BSE → SEBI SCORES → SmartODR) |
| `/investor-resources/complaint-data` | Monthly complaint statistics |
| `/investor-resources/grievances` | SCORES grievance filing |
| `/investor-resources/smartodr` | SmartODR dispute resolution |
| `/investor-resources/downloads` | Forms and downloads |
| `/compliance/registration-documents` | SEBI registration certificates |
| `/compliance/mandatory-disclosures` | Mandatory regulatory disclosures |
| `/compliance/policies` | Company policies |
| `/partner-with-us` | Sub-broker / Authorised Person partnership |
| `/open-account` | Account opening |
| `/contact` | Contact information and form |

---

## 🏗️ Architecture & Key Design Decisions

### Layout Stack
Every page renders through this global layout chain:
```
AnnouncementBar (SEBI regulatory strip)
  ↓
Header (Logo · Nav · Login · Open Account)
  ↓
CompanyIntro (Full legal name · SEBI Reg · BSE · CDSL · Est. 2010)
  ↓
MarketTicker (Live market prices)
  ↓
[Page Content]
  ↓
Footer (Links · Branches · Regulatory · Legal disclaimer)
```

### Navigation
- **Desktop:** Flexbox layout — logo pinned left, navigation centered (`flex-1 justify-center`), action buttons pinned right (`ml-auto`). This ensures "Open Account" is always fully visible regardless of logo size.
- **Mobile:** Sheet (slide-in drawer) with logo + company name + full nav links.

### Theming
- Full **Light / Dark mode** via `next-themes` and CSS custom properties.
- Theme toggle button in the navbar.

### Component Compliance
- All interactive components use **Base UI** (`@base-ui/react`) — no Radix `asChild` pattern is used anywhere to avoid hydration errors.
- All navigation links styled with `buttonVariants` utility — no `Button asChild` wrappers.

### Image Optimization
- Company logo served from `/public/logo.jpg` using `next/image` with `object-contain` for full logo visibility.
- Managing Director photo served from `/public/sanjiv-rathi.jpg` using `next/image` with `fill` + `object-cover object-top`.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 20+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Venkatesh_Stock_Broking_Website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
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
- ✅ **SEBI SCORES** link prominently displayed
- ✅ **SmartODR** link prominently displayed
- ✅ **Registration details** in footer (SEBI Reg, BSE memberships, CDSL DP ID, CIN)
- ✅ **Compliance Officer** details in footer

---

## 📸 Assets

| File | Description |
|---|---|
| `public/logo.jpg` | Company logo — use `object-contain` for full visibility |
| `public/sanjiv-rathi.jpg` | MD Sanjiv Rathi photo — displayed on `/about/management` |

> **Note:** Original source files are in `src/assets/`. For Next.js static serving, assets must be placed in `/public/`.

---

## 🌐 Deployment

This project is deployed on **Vercel**.

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node.js Version:** 20.x

### Environment Variables
No environment variables are required for the current static build. If backend integrations (contact forms, login APIs) are added, add the following to `.env.local`:

```env
# Example — add as needed
NEXT_PUBLIC_API_URL=https://api.venkateshindia.com
```

---

## 📞 Contact

**Shri Venkatesh Stock Broker Services India Pvt. Ltd.**
Raipur, Chhattisgarh, India

- 🌐 Website: [venkateshindia.com](https://venkateshindia.com)
- 📧 Email: shri_vsb@yahoo.in
- 🏛️ SEBI Registration: INZ000231135

---

##Developed By:- **KARTIK PANDEY**

## 📄 License

This is a proprietary website owned by Shri Venkatesh Stock Broker Services India Pvt. Ltd. All rights reserved.

---

> *"Empowering investors with knowledge, trust, and technology since 2010."*
