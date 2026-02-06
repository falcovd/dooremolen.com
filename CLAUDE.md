# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Personal portfolio website for **Falco van Dooremolen**, positioning as Technical Product Owner & AI Implementation Partner. Single-page static site with dark-mode Bento Grid layout, bilingual support (NL/EN), and SEO optimization.

**Live URL**: https://dooremolen.com/

## Tech Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 |
| Styling | Tailwind CSS (local: `js/tailwind.js`) |
| JavaScript | Vanilla JS (ES6+, IIFE pattern) |
| Icons | Font Awesome (local: `assets/fontawesome/`) |
| Fonts | Inter (Google Fonts CDN) |

Tailwind is loaded locally instead of CDN due to corporate network restrictions.

## Project Structure

```
dooremolen.com/
├── index.html              # Main page (single-page site)
├── js/
│   ├── main.js             # Language/theme toggle, localStorage
│   └── tailwind.js         # Tailwind CSS (local copy)
├── assets/
│   ├── img/
│   │   ├── profile.jpg     # Profile photo
│   │   ├── favicon.ico     # Favicon
│   │   └── og_image.png    # Open Graph image
│   └── fontawesome/        # Font Awesome (local copy)
├── icon/                   # Icon sets (browser, os, flags, etc.)
└── docs/plans/             # Design and implementation documents
```

## Key Features

### Language Toggle
- Auto-detects browser language (NL/EN)
- Falls back to English for non-Dutch browsers
- Persists preference to `localStorage`
- Uses `data-i18n` attributes for translatable content
- Translations defined in `js/main.js` → `translations` object

### Theme Toggle
- Dark mode default
- Light mode available
- Persists to `localStorage`
- Uses Tailwind's `darkMode: 'class'` strategy

### Bento Grid Layout
- Responsive: 4-col (lg) → 2-col (md) → 1-col (sm)
- Cards with hover effects (border glow, shadow)
- Custom Tailwind colors: `dark-bg`, `dark-card`, `dark-border`

### SEO
- Meta tags (description, keywords, author)
- Open Graph / Twitter Cards
- JSON-LD structured data (Person schema)
- Canonical URL

## Development

**Local server required** - `file://` protocol won't work.

```bash
# Start local server
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### Making Changes

**Translations**: Edit `translations` object in `js/main.js`

**Tailwind Config**: Inline in `index.html` `<head>`:
```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: { bg: '#0a0a0a', card: '#1a1a1a', border: '#2a2a2a' }
            }
        }
    }
}
```

## Git Workflow

| Branch | Purpose |
|--------|---------|
| `main` | Production (auto-deploys) |
| `new-site` | Development |

## External Services

### Google Analytics
- ID: `G-NBSM91VC55`
- Active in current HTML

### Cookiebot (GDPR)
- ID: `651fb423-8c2a-40c5-8aed-11c7d2d1e6fb`
- **Currently removed** from HTML (doesn't work on localhost)
- Add back before production deploy:

```html
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
        data-cbid="651fb423-8c2a-40c5-8aed-11c7d2d1e6fb"
        data-blockingmode="auto" type="text/javascript"></script>
```

## Future Integration Points

- **N8N Automation**: Contact section has `id="contact-form-area"` reserved for form/webhook integration
- **Calendly**: Placeholder text "Or schedule a call directly" in contact section

## Deployment

Push to GitHub → auto-deployment (no build step).

**Pre-production checklist**:
1. Re-add Cookiebot script to `<head>`
2. Verify all images have proper `alt` attributes
3. Test language toggle
4. Verify Open Graph preview (use social media debuggers)
