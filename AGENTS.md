# AGENTS.md
# Instructions for AI Agents & Developers — Amaran Integral Service LLC

---

## ⚠️ Read This First — Project Scope

This is a **public marketing website** for a custom blinds and screen installation business.

It is **NOT**:
- A SaaS platform, CRM, dashboard, or admin panel
- A scheduling, inventory, or e-commerce system
- A generic handyman or construction website

The only goal is:
> **Generate qualified leads through phone calls, WhatsApp messages, and contact form submissions.**

---

## Business Identity

| Field | Details |
|---|---|
| **Company** | Amaran Integral Service LLC |
| **Tagline** | "Your Satisfaction is My Pleasure" |
| **Phone** | (813) 279-3943 |
| **WhatsApp** | +1 (813) 279-3943 |
| **Location** | Tampa Bay, Florida |
| **Service Area** | Tampa Bay (primary) · All of Florida (secondary) |
| **Positioning** | Custom Interior & Exterior Blinds, Screens and Motorized Shade Solutions |

---

## What This Business Does

Amaran Integral Service LLC sells and installs **custom blinds and screen systems** for both **interior and exterior** spaces in Florida. Everything is custom-made to exact measurements — no off-the-shelf sizes.

### Interior Products
- **Zebra Blinds** — alternating sheer and solid bands for light and privacy control
- **Blackout Blinds** — 100% light-blocking custom blinds
- **Shade Screens** — solar fabric to reduce glare and heat on windows
- **Motorized Blinds** — any interior blind with electric motor

### Exterior Products
- **Zipper Screens** — retractable screens with zipper-track edge that seals completely (insects, wind, rain)
- **Motorized Screens** — electric screens with remote, app, or smart home control
- **Patio & Lanai Screens** — full perimeter screen enclosures
- **Outdoor Privacy Screens** — opaque/semi-opaque screens for sightline control

**Critical:** Do NOT position this company as only an "outdoor" or "zipper screens" business. Always communicate Interior + Exterior coverage.

---

## Site Architecture — EXACTLY 9 SECTIONS

```tsx
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <WhyUs />
        <Process />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
    </>
  )
}
```

Do NOT add sections beyond these 9 without explicit client approval.
Do NOT create separate sections for: Benefits, Applications, MaterialsOptions, ServiceAreas, FAQ, FinalCTA, ZipperScreens.
These are either merged into existing sections or moved to Footer.

---

## Visual Direction

**Clean + Modern + Premium** — not dark, heavy, or contractor-looking.

### Color Palette

| Role | Hex | Usage |
|---|---|---|
| Black | `#0a0a0a` | Hero, Navbar, Footer, dark sections |
| Dark soft | `#111111` / `#121212` | Dark section cards, subtle backgrounds |
| Light gray | `#f0efed` / `#f7f7f5` | Light sections (Solutions, Process, Gallery, Contact) |
| White | `#ffffff` | Cards on light sections |
| AIS Red | `#d42b2b` | CTAs, buttons, icons, hover states, accent lines |
| Red dark | `#b01f1f` | Red hover states |
| Warm gray | `#9e9b95` / `#5a5752` | Secondary text, borders, muted elements |

**Color proportion rule: 60% light / 25% dark / 10% red / 5% warm gray**

Do NOT:
- Use red as a full section background (accent strip only)
- Use blue as a UI color
- Make the entire site dark/black
- Hardcode hex values — use Tailwind tokens

### Section Color Rhythm
```
Navbar      → Dark
Hero        → Dark + full photo overlay
TrustBar    → Dark subtle
Solutions   → LIGHT — dark cards on light bg
WhyUs       → Dark
Process     → LIGHT
Gallery     → LIGHT
Testimonials → Dark subtle
ContactForm → LIGHT
Footer      → Dark
```

### Typography
| Role | Font | Weight |
|---|---|---|
| Display / Headlines | Bebas Neue | 400 |
| Serif accent | DM Serif Display | 400, italic |
| Body / UI | DM Sans | 300, 400, 500, 600 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| UI Components | Ant Design (antd) |
| Font Loading | next/font |
| Images | next/image |
| Forms | Ant Design Form |
| API Routes | Next.js App Router (`/app/api/`) |
| Email | Nodemailer via SMTP |
| Deployment | Vercel |

---

## Tech Stack Rules

### Framework
- App Router only (`/app` directory). Never `/pages`.
- Server Components by default. `'use client'` only when strictly needed.

### TypeScript
- Strict mode. Zero `any` types.
- All props typed with explicit interfaces.
- All data shapes in `/types/index.ts`.

### Styling
- Tailwind CSS for layout, spacing, responsive design.
- Ant Design for interactive UI: Form, Input, Select, Button, Notification.
- Never hardcode hex values — use Tailwind brand tokens.
- Avoid inline styles — use Tailwind classes. Exception: dynamic JS values only.

### Images
- Always `next/image`. Never `<img>`.
- All images in `/public/images/` organized by section.
- Descriptive `alt` text always (SEO + accessibility).
- Cards must work visually with AND without real photos.

### Internationalization
- Bilingual: English (EN) default, Spanish (ES).
- All strings in `/locales/en.ts` and `/locales/es.ts`.
- Never hardcode user-facing strings in components.
- Language via `LanguageContext` in `/context/LanguageContext.tsx`.
- Product names NOT translated (Zebra Blinds, Zipper Screens, etc.).

### Forms
- Ant Design Form only.
- POST to `/app/api/contact/route.ts`.
- Email notification to business owner on submit.
- Client + server validation.
- Success/error via Ant Design notification.

### SEO
- `generateMetadata()` in every `page.tsx`.
- Keyword-rich titles, descriptions, alt text.
- og:image, og:title, og:description configured.

---

## Folder Structure

```
/amaran-web
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/contact/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Solutions.tsx       ← Interior + Exterior products (replaces Services, Benefits, Applications, ZipperScreens)
│   │   ├── WhyUs.tsx
│   │   ├── Process.tsx         ← includes Manual vs Motorized block
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactForm.tsx     ← includes FAQ accordion (3 questions)
│   ├── sections/_archived/     ← old sections kept for reference
│   └── ui/
│       ├── WhatsAppFloat.tsx
│       ├── MobileStickyBar.tsx
│       └── LangToggle.tsx
├── context/LanguageContext.tsx
├── locales/
│   ├── en.ts
│   └── es.ts
├── types/index.ts
├── public/images/
│   ├── hero/
│   ├── solutions/              ← 6 product photos (client to provide)
│   ├── gallery/                ← 6 project photos (client to provide)
│   ├── logo/
│   └── og/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Content Rules

### Stats — NEVER invent
Do not use "500+ projects", "10+ years", "5★ rating" unless the client explicitly confirms these numbers. Remove all placeholder stats from Hero until confirmed.

### Testimonials — NEVER invent
Use real reviews from the client (Google, WhatsApp, Facebook). If not available, mark as placeholder in code — NOT visible in production.

### Hero Image — NOT the van
Do not use the company van as the main hero image. Use a real installation photo (patio with zipper screen, interior with zebra blinds, etc.). The van can appear in WhyUs or Process as local proof.

### Copy — specific, not generic
Never write "quality services" or "we are the best." Always name the specific product or benefit.

---

## SEO Keywords

### Primary
- custom blinds Tampa Bay
- zipper screens Tampa
- motorized screens Tampa Bay
- zebra blinds Tampa
- blackout blinds Tampa
- interior exterior blinds Tampa

### Secondary
- retractable screens Tampa Bay
- patio screens Tampa
- lanai screens Tampa
- shade screens Florida
- motorized patio screen Tampa
- screen installation Tampa Bay

### Long-tail
- custom zebra blinds installation Tampa
- zipper screen patio installation Tampa Bay
- motorized blinds interior Tampa Florida
- best patio screens for Florida weather

---

## ❌ Do Not Do

### Scope
- Do not add more than 9 sections without explicit approval
- Do not create login, admin panel, dashboard, CRM, or e-commerce
- Do not position as only outdoor/exterior — always Interior + Exterior

### Content
- Do not invent stats, testimonials, or years of experience
- Do not use vague copy ("quality", "best", "professional")
- Do not translate product names (Zebra Blinds, Zipper Screens, etc.)
- Do not use the van as the hero image

### Code
- Do not use `/pages` directory — App Router only
- Do not use `<img>` — always `next/image`
- Do not hardcode strings — always use locales
- Do not use `any` in TypeScript
- Do not use excessive inline styles — Tailwind classes preferred
- Do not add API routes outside `/app/api/`
- Do not commit `.env.local`
- Do not use emojis as icons — use SVG icons

---

## Environment Variables

```env
# Required
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
LEAD_EMAIL_TO=

# Optional — Phase 3 only
# WHATSAPP_API_TOKEN=
# WHATSAPP_PHONE_ID=
# NEXT_PUBLIC_GA_ID=
```

---

## Git Rules
- Branch: `feature/section-name` · `fix/description` · `content/update`
- Commits: English, present tense — `Add Solutions section` · `Fix mobile padding`
- Never commit to `main` directly
- PR required to merge

---

## Development Phases

### Phase 1 — MVP (current)
- 9-section single-page marketing site
- Bilingual EN/ES
- Working contact form with email
- WhatsApp float + mobile sticky CTA bar
- Fully responsive (mobile-first)
- Placeholder photos until client delivers

### Phase 2 — Content
- Real photos in Solutions + Gallery
- Real testimonials
- Confirmed stats in Hero (if client provides)
- SEO optimization + Lighthouse 90+

### Phase 3 — Optional
- Google Analytics + Meta Pixel
- Google Reviews widget
- Before/After slider in Gallery
- Quote calculator
- WhatsApp Business API