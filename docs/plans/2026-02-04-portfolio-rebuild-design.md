# Portfolio Site Rebuild - Design Document

## Project Overview

Complete rebuild of dooremolen.com as a modern portfolio site positioning Falco van Dooremolen as a **Technical Product Owner & AI Implementation Partner**.

**Goal**: Convert visitors (recruiters/CTOs) into leads
**Vibe**: High-tech, minimalist, strategic, authority
**CTA**: Direct email (falco@dooremolen.com)

---

## Positioning

### Primary Identity

- **Technical Product Owner**: Translates complex technology into concrete product value
- **AI Implementation Partner**: Helps organizations adopt AI tools with measurable business outcomes

### Proof Points

- 10+ years tech experience (PHP, Java, MySQL, OOP)
- Developer → Scrum Master → Agile Coach → Product Owner progression at Visma Verzuim
- PSM I Certified (Scrum.org)
- Real AI implementation experience + personal daily usage
- Site itself built with Claude Code and N8N-ready architecture

---

## Visual Design

### Theme

- **Dark mode by default** (near-black background #0a0a0a)
- Cards: Dark gray (#1a1a1a) with subtle borders
- Text: White headlines, gray-400 body
- Accent: Indigo-500/600 (#4f46e5)
- Optional light mode toggle (high contrast)

### Typography

- Inter font family (current)
- Large, bold headlines
- Clean, readable body text

### Layout: Bento Grid

4-column grid on desktop, 2-column tablet, 1-column mobile.

Block sizes create visual hierarchy:
- Large (2x2): Primary positioning blocks
- Medium (2x1 or 1x2): Supporting skills
- Small (1x1): Certifications, stats, badges

---

## Page Structure

### 1. Header (Sticky)

- Logo/Name: "Falco van Dooremolen" (left)
- Language toggle: "NL | EN" (right)
- CTA button: "Contact" (right, indigo)

### 2. Hero Zone (Full viewport)

**Layout**: Two columns - text left, photo right (stacks on mobile)

**Left side**:
- Tagline (small, uppercase, indigo): "TECHNICAL PRODUCT OWNER & AI IMPLEMENTATION PARTNER"
- Name (large, bold): "Falco van Dooremolen"
- Positioning statement: "Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde."
- Proof badges: "10+ jaar tech ervaring" · "PSM I Certified" · "Visma Verzuim"
- CTA button: "Neem contact op" → mailto link

**Right side**:
- Professional photo (rounded rectangle)
- Subtle gradient/glow behind for depth
- Optional indigo border accent

**Bottom**: Subtle scroll indicator (animated chevron)

### 3. Bento Grid Zone

#### Block: Technical Product Owner (2x2, prominent)

- Header: "Technical Product Owner"
- Subtext: "Van strategie naar werkende software"
- Key points:
  - Value-driven prioritering
  - Data-gedreven besluitvorming
  - Strategische roadmap planning
  - Stakeholder management
- Visual: Abstract grid pattern or data visualization background
- Hover: Scale + indigo border glow

#### Block: AI Implementation Partner (2x2, prominent)

- Header: "AI Implementation Partner"
- Subtext: "Meetbare resultaten door slimme automatisering"
- Key outcomes:
  - Reactietijd van uren naar minuten
  - +30% lead-generatie door geautomatiseerde offertes
  - Research-uren gehalveerd met slimme documentanalyse
  - Teams getraind om AI zelfstandig toe te passen
- Visual: Upward-trending metric graphic
- Proof element: "Bekijk resultaten →"

#### Block: Engineering Roots (2x1, medium)

- Header: "Engineering Roots"
- Subtext: "Ik spreek de taal van developers"
- Tech tags (pills): PHP · Java · MySQL · OOP · API's
- Bottom line: "10+ jaar hands-on development ervaring"

#### Block: Agile Coaching (2x1, medium)

- Header: "Agile Coaching"
- Subtext: "Van teamdynamiek tot persoonlijke groei"
- Key points:
  - Scrum Master (4+ jaar)
  - Team coaching & facilitatie
  - Agile transformaties begeleid
- Badge: PSM I / Scrum.org Certified

#### Block: Certifications (1x1, small)

- PSM I badge/logo (prominent)
- Java 7 Certified
- Years subtle (2017, 2015)

#### Block: Quick Stats (1x1, small)

- "10+ jaar" tech ervaring
- "4 rollen" bij Visma Verzuim
- "Raalte, NL" location

### 4. Timeline Zone

**Layout**: Horizontal on desktop, vertical on mobile

**Visma Verzuim (2015 - heden)** - expanded:
- Product Owner (2023 - heden) ← highlighted as current
- Agile Coach (2021 - 2022)
- Scrum Master (2017 - 2021)
- Software Engineer (2015 - 2017)

**Earlier experience** - collapsed/expandable:
- vDia Internet Applications (2012 - heden) - Eigenaar
- MailStreet B.V. (2010 - 2015) - PHP Developer
- Earlier roles (2006 - 2010)

**Visual**: Dark card, indigo timeline accent, current role has glow/"Nu" badge

### 5. Contact Zone

- Header: "Laten we praten"
- Subtext: "Op zoek naar een Technical Product Owner of hulp bij AI-adoptie? Neem contact op."
- CTA button (large, indigo): "Mail mij" → mailto:falco@dooremolen.com
- Email visible as text (for copying)
- Future hook (greyed): "Of plan direct een gesprek" (for later Calendly/N8N)

### 6. Footer

- © 2026 Falco van Dooremolen
- LinkedIn icon (link to profile)
- "Gebouwd met Claude Code" badge

---

## Technical Implementation

### Stack

- HTML5 (single page, semantic)
- Tailwind CSS via CDN (dark mode utilities)
- Vanilla JavaScript (language toggle, preferences, interactions)
- No build step - deploy directly

### Language Toggle (NL/EN)

**Detection priority**:
1. localStorage preference (if exists)
2. Browser language (`navigator.language`)
   - Starts with "nl" → Dutch
   - Anything else → English

**Implementation**:
- Toggle button in header: "NL | EN"
- All text uses `data-i18n="key"` attributes
- JavaScript object holds translations for both languages
- On toggle: swap content, save to localStorage
- No URL changes needed

### Dark/Light Mode

- Default: Dark mode (`<html class="dark">`)
- Toggle available in header
- Preference stored in localStorage
- Uses Tailwind `dark:` utilities

### N8N-Ready Architecture

Prepared for future automation:
- Contact section: `id="contact-form-area"` container for form/chatbot swap
- Clean HTML structure, no inline text in JS (except translations)
- Footer area reserved for chatbot trigger button

### Analytics & Privacy

- Google Analytics: G-NBSM91VC55 (keep)
- Cookiebot: GDPR consent (keep)

---

## Content Translations

### Dutch (Default for NL browsers)

**Hero**:
- Tagline: "TECHNICAL PRODUCT OWNER & AI IMPLEMENTATION PARTNER"
- Positioning: "Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde."
- CTA: "Neem contact op"

**Blocks**:
- "Technical Product Owner" / "Van strategie naar werkende software"
- "AI Implementation Partner" / "Meetbare resultaten door slimme automatisering"
- "Engineering Roots" / "Ik spreek de taal van developers"
- "Agile Coaching" / "Van teamdynamiek tot persoonlijke groei"

**Contact**:
- "Laten we praten"
- "Op zoek naar een Technical Product Owner of hulp bij AI-adoptie? Neem contact op."
- "Mail mij"

### English

**Hero**:
- Tagline: "TECHNICAL PRODUCT OWNER & AI IMPLEMENTATION PARTNER"
- Positioning: "I help organizations adopt AI tools and translate complex technology into concrete product value."
- CTA: "Get in touch"

**Blocks**:
- "Technical Product Owner" / "From strategy to working software"
- "AI Implementation Partner" / "Measurable results through smart automation"
- "Engineering Roots" / "I speak the language of developers"
- "Agile Coaching" / "From team dynamics to personal growth"

**Contact**:
- "Let's talk"
- "Looking for a Technical Product Owner or help with AI adoption? Get in touch."
- "Email me"

---

## File Structure

```
dooremolen.com/
├── index.html          # Main page (rebuild)
├── assets/
│   ├── img/
│   │   └── profile.jpg # Professional photo
│   └── fontawesome/    # Icons (existing)
├── js/
│   └── main.js         # Language toggle, preferences, interactions
├── docs/
│   └── plans/
│       └── 2026-02-04-portfolio-rebuild-design.md
└── CLAUDE.md           # Updated after implementation
```

---

## Implementation Phases

### Phase 1: Core Structure
- HTML skeleton with semantic structure
- Tailwind dark mode setup
- Bento grid layout (responsive)

### Phase 2: Content & Styling
- Hero section with photo
- All Bento blocks styled
- Timeline section
- Contact zone and footer

### Phase 3: Interactivity
- Language toggle with browser detection
- Dark/light mode toggle
- localStorage persistence
- Hover animations and transitions

### Phase 4: Polish
- SEO meta tags (update for new positioning)
- Open Graph / Twitter cards
- JSON-LD schema (update)
- Performance optimization
- Cross-browser testing

### Future: N8N Integration
- Contact form automation
- Chatbot integration
- Booking system

---

## Success Criteria

- [ ] Dark mode Bento Grid layout renders correctly on desktop/tablet/mobile
- [ ] Language auto-detects from browser, toggles work, persists in localStorage
- [ ] Dark/light mode toggle works and persists
- [ ] All content translatable between NL/EN
- [ ] Email CTA works (mailto link)
- [ ] Professional, high-tech aesthetic achieved
- [ ] Page loads fast (no build step, CDN assets)
- [ ] SEO meta tags updated for new positioning
- [ ] Analytics and cookie consent functioning
