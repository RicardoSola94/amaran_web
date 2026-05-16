# PROJECT_CONTEXT.md
# Amaran Integral Service LLC — Website Project

---

## Business Overview

| Field | Details |
|---|---|
| **Company Name** | Amaran Integral Service LLC |
| **Tagline** | "Your Satisfaction is My Pleasure" |
| **Phone** | (813) 279-3943 |
| **WhatsApp** | +1 (813) 279-3943 |
| **Email** | *(to be confirmed by client)* |
| **Location** | Tampa Bay, Florida |
| **Service Area** | Tampa Bay (primary) · All of Florida (secondary) |
| **Business Type** | Custom interior & exterior blinds, screens and motorized shade solutions |
| **Facebook** | Amaran Integral Service (active page) |

---

## Positioning Statement

**EN:** Custom Interior & Exterior Blinds, Screens and Motorized Shade Solutions in Tampa Bay
**ES:** Persianas, zipper screens y soluciones motorizadas para espacios interiores y exteriores en Tampa Bay

The business covers BOTH interior and exterior products.
Do NOT position this company as only an "outdoor screens" or "zipper screens" business.
Do NOT present this as a generic handyman, construction, or home services website.

---

## Products & Services

### Interior Products
| Product | Description |
|---|---|
| Zebra Blinds | Alternating sheer/solid bands for light & privacy control |
| Blackout Blinds | 100% light-blocking custom blinds |
| Shade Screens (interior) | Solar fabric to reduce glare and heat on large windows |
| Motorized Blinds | Any interior blind with quiet electric motor |

### Exterior Products
| Product | Description |
|---|---|
| Zipper Screens | Retractable screens with zipper-track edge seal |
| Motorized Screens | Electric screens with remote, app, or smart home control |
| Patio & Lanai Screens | Full perimeter screen enclosures for outdoor spaces |
| Outdoor Privacy Screens | Opaque/semi-opaque screens for sightline control |

All products are **custom-made to exact measurements** — no off-the-shelf sizes.
All products are available in **manual and motorized** versions.
Product names are **not translated** — same in EN and ES.

---

## Target Customers

### Residential
- Homeowners with patios, lanais, porches, balconies
- Condo owners in Tampa Bay area
- Homeowners wanting light control, privacy, insect protection, solar shading
- Spanish-speaking homeowners (large market in Tampa Bay)

### Commercial
- Restaurants with outdoor patios
- Hotels and resorts
- Offices with large windows
- Condominiums (bulk orders for units)

---

## Primary Website Goal

**Generate leads.** Every page decision should serve this goal.

Lead conversion actions, in order of priority:
1. Call (813) 279-3943
2. WhatsApp message
3. Contact form submission

The site must make it **extremely easy** to do any of these three actions at any point on the page.

---

## Competitive Differentiation

Most competitors in Tampa Bay:
- Have basic, outdated websites
- Respond slowly to leads (24–48h)
- Do not offer bilingual experience
- Have no clear portfolio or proof of work
- Only cover exterior OR interior — not both

**How AIS differentiates:**
- Interior + Exterior solutions — full coverage
- Bilingual (EN/ES) — key differentiator for Tampa's Hispanic market
- Fast response promise ("We respond within 2 hours")
- Custom made — nothing off the shelf
- Free in-home estimate
- Local Tampa Bay team

---

## Brand Identity

### Visual Direction
**Clean + Modern + Premium**

The site must feel:
- Modern and architectural
- Premium but approachable
- Local and trustworthy
- Residential and commercial ready
- Visually strong, not heavy

The site must avoid:
- Looking like a generic contractor or handyman site
- Full dark / all-black aesthetic throughout
- Excessive red (accent only, not background everywhere)
- Too much text — photos sell more than copy
- Long, repetitive sections

### Color Palette

| Role | Hex | Usage |
|---|---|---|
| Charcoal/Black | `#0a0a0a` / `#121212` / `#1a1a1a` | Hero, Navbar, Footer, dark sections, high-impact CTAs |
| White/Light Gray | `#ffffff` / `#f7f7f5` / `#f0efed` | Service sections, Gallery, Testimonials, Forms |
| AIS Red | `#d42b2b` / `#b01f1f` | Buttons, icons, emphasis lines, hover states, CTAs |
| Warm Gray | `#9e9b95` / `#5a5752` / `#d9d9d9` | Borders, dividers, secondary text, card details |

**Color proportion:**
- 60% white / light gray
- 25% charcoal / black
- 10% AIS Red
- 5% warm gray accents

Do NOT use red as a full section background unless it's a very specific accent strip.
Do NOT use blue as a UI color — blue stays inside the logo only.

### Section Color Rhythm (alternating for visual breath)
```
Navbar        → Dark (#0a0a0a)
Hero          → Dark + full-bleed photo
TrustBar      → Dark subtle (#0e0e0e)
Solutions     → Light (#f0efed) — cards dark on light
WhyUs         → Dark (#0a0a0a)
Process       → Light (#f0efed)
Gallery       → Light (#f0efed)
Testimonials  → Dark subtle (#111111)
ContactForm   → Light (#f0efed)
Footer        → Dark (#0a0a0a)
```

### Typography
| Role | Font | Weight |
|---|---|---|
| Display / Headlines | Bebas Neue | 400 |
| Serif accent | DM Serif Display | 400, 400 italic |
| Body / UI | DM Sans | 300, 400, 500, 600 |

### Logo
- File: `/public/images/logo/ais-logo.png` *(to be provided by client)*
- Colors: Red, black, gray
- Text: "AMARAN INTEGRAL SERVICE LLC"
- Tagline: "Your Satisfaction is My Pleasure"

---

## Site Architecture — 9 Sections

```
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

### Why 9 sections (not 17)
The goal is a compact, visual, conversion-focused site — not a content dump.
Every section must earn its place by moving the visitor toward a lead action.
Sections that repeat the same message or audience have been merged or removed.

---

## Section-by-Section Content

### 1. Navbar
- Left: Logo (AIS icon + name) + tagline "Tampa Bay · Custom Blinds & Screens"
- Center: Solutions · Process · Gallery · Contact
- Right: EN | ES toggle · Phone (813) 279-3943 · "Free Estimate" button
- Mobile: EN/ES toggle + hamburger → full screen menu with phone + CTA

### 2. Hero
**Goal:** Visitor understands what we do in under 5 seconds.

**DO NOT use the van as the hero image.** Use a real installation photo (patio, lanai, or interior with zebra blinds). The van can appear in WhyUs or Process as a local proof element.

**DO NOT include unconfirmed stats** (500+ projects, 10+ years, 5★ rating). Only add stats the client explicitly confirms.

**EN:**
- Eyebrow: "Serving Tampa Bay Since [year]"
- H1: "Transform Your Interior & Exterior Spaces"
- Subtitle: "Custom zebra blinds, blackout blinds, zipper screens and motorized shades — made to measure and installed in Tampa Bay."
- CTA 1: "Get Free Estimate" → #contact
- CTA 2: (813) 279-3943 → tel:
- Trust badges: ✓ Licensed & Insured · ✓ Free In-Home Estimate · ✓ 2-Hour Response

**ES:**
- Eyebrow: "Sirviendo Tampa Bay Desde [año]"
- H1: "Transforma Tus Espacios Interiores y Exteriores"
- Subtitle: "Zebra blinds, blackout blinds, zipper screens y persianas motorizadas — a medida e instaladas en Tampa Bay."

### 3. TrustBar
4 trust signals — dark background, SVG icons in red circles:

| EN | ES |
|---|---|
| Licensed & Insured | Licenciados y Asegurados |
| Free In-Home Estimate | Estimado Gratis en Casa |
| Interior & Exterior Solutions | Soluciones Interior y Exterior |
| Local Tampa Bay Team | Equipo Local en Tampa Bay |

### 4. Solutions
**Replaces:** Services + Benefits + Applications + ZipperScreens

Title EN: "Solutions for Every Space"
Subtitle EN: "Custom products for light control, privacy, shade and comfort — inside and outside your property."

Tab filter: All | Interior | Exterior

6 cards with photo + badge + title + description + 3 benefits + CTA:

| Card | Type | Product |
|---|---|---|
| 1 | Interior | Zebra Blinds |
| 2 | Interior | Blackout Blinds |
| 3 | Interior | Shade Screens |
| 4 | Exterior | Zipper Screens |
| 5 | Exterior | Motorized Screens |
| 6 | Exterior | Patio & Outdoor Screens |

Each card CTA: "Get a Quote" / "Solicitar Cotización" → #contact

Photos go to: `/public/images/solutions/` — client to provide.
Cards must look good with AND without real photos (dark placeholder background).

### 5. WhyUs
Title EN: "We Don't Just Install — We Deliver Confidence"
Title ES: "No Solo Instalamos — Entregamos Confianza"

4 points, max 2 lines each:
1. Precise In-Home Measurement / Medición Precisa en Casa
2. Custom Made to Your Specs / Fabricado a tus Especificaciones
3. Bilingual Team, Local Service / Equipo Bilingüe, Servicio Local
4. Satisfaction Guaranteed / Satisfacción Garantizada

Van photo can appear here as local proof element.

### 6. Process (5 steps)
Title EN: "From First Contact to Final Installation in 5 Steps"
Title ES: "Del Primer Contacto a la Instalación Final en 5 Pasos"

Steps:
1. Contact Us / Contáctanos
2. Free Measurement / Medición Gratis
3. We Give You Options / Te Damos Opciones
4. We Install / Instalamos
5. Enjoy Your Space / Disfruta tu Espacio

Each step: 1 line max. No long descriptions.

At the bottom: Manual vs Motorized mini-block (2 cards side by side).

### 7. Gallery
Title EN: "Real Projects in Tampa Bay"
Title ES: "Proyectos Reales en Tampa Bay"

6 photos — 3 interior + 3 exterior:
- Interior: zebra blinds, blackout blinds, shade screens
- Exterior: zipper screens, patio screens, motorized installation

Photos go to: `/public/images/gallery/`
**DO NOT use placeholder emojis or gray blocks in production.**
CTA below grid: "Request Your Free Estimate" / "Solicita tu Estimado Gratis"

### 8. Testimonials
Title EN: "What Our Clients Say"
Title ES: "Lo que Dicen Nuestros Clientes"

3 cards with: name, city, stars (★★★★★), review text.

**DO NOT invent testimonials.** Use real reviews from client (Google, WhatsApp, Facebook).
If not yet available, mark clearly as placeholder in code — not visible in production.

### 9. ContactForm
Title EN: "Get Your Free Estimate"
Title ES: "Solicita tu Estimado Gratis"

Subtitle EN: "Tell us about your space and we'll contact you to schedule a free in-home measurement."

Quick action buttons above form:
- 📞 Call Now → tel:(813)279-3943
- 💬 WhatsApp → https://wa.me/18132793943

Form fields (simplified):
- Full Name (required)
- Phone (required)
- Email (optional)
- Service Type: Zebra Blinds · Blackout Blinds · Shade Screens · Zipper Screens · Motorized · Not sure (required)
- Property Type: Residential · Commercial (required)
- City (required)
- Message (optional)
- Submit: "Send Request" / "Enviar Solicitud"

FAQ — 3 questions only (accordion):
1. Is the estimate free? / ¿El estimado es gratis?
2. Do you do both interior and exterior? / ¿Trabajan interiores y exteriores?
3. Do you offer motorized options? / ¿Tienen opciones motorizadas?

Contact info alongside:
- Phone: (813) 279-3943
- WhatsApp: +1 (813) 279-3943
- Hours: Mon–Sat 8am–6pm
- Service Area: Tampa Bay & All of Florida

### 10. Footer
- Logo + tagline
- Services list (Interior + Exterior)
- Service areas: Tampa · St. Pete · Brandon · Riverview · Sarasota · All Florida
- Phone + WhatsApp
- Copyright: © 2025 Amaran Integral Service LLC
- Privacy Policy · Terms of Service links

---

## Floating Elements (always visible)
- WhatsAppFloat button (bottom right, green)
- MobileStickyBar (mobile only, bottom): "📞 Call Now" + "💬 WhatsApp"

---

## Localization
- Default language: **English**
- Toggle: EN / ES in navbar
- State: React Context, persisted in `localStorage`
- All strings in `/locales/en.ts` and `/locales/es.ts`
- Never auto-detect browser language
- Product names NOT translated — identical in EN and ES

---

## Lead Form API
1. Validate required fields client-side (Ant Design rules)
2. POST to `/api/contact`
3. Server sends email to business owner
4. Show success/error via Ant Design notification
5. On success: reset form + show confirmation

---

## Performance Targets
- Lighthouse 90+ (Performance, Accessibility, SEO)
- All images via `next/image`
- Fonts via `next/font`
- No unused CSS

---

## Pending from Client
- [ ] Real project photos (interior + exterior) for Gallery and Solutions
- [ ] Logo file PNG/SVG high resolution
- [ ] Confirmed email address for leads
- [ ] Real client testimonials (name, city, stars, text)
- [ ] Year founded (for "Serving Tampa Bay Since [year]")
- [ ] Confirmed stats if any (projects completed, years, rating)
- [ ] Confirmation on DBA name: "Zebra Blinds Tampa" or keep "Amaran Integral Service LLC"

---

## Development Phases

### Phase 1 — MVP (current)
- 9-section single-page site
- Bilingual EN/ES
- Working contact form with email notification
- WhatsApp float + mobile sticky CTA bar
- Fully responsive (mobile-first)
- Placeholder photos until client delivers

### Phase 2 — Content
- Replace placeholders with real photos
- Add real testimonials
- Confirm and add stats
- SEO optimization

### Phase 3 — Optional
- Google Reviews live widget
- Before/After image slider
- Google Analytics + Meta Pixel
- WhatsApp Business API
- Quote calculator