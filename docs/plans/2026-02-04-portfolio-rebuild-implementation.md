# Portfolio Site Rebuild - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild dooremolen.com as a dark-mode Bento Grid portfolio positioning Falco as Technical Product Owner & AI Implementation Partner.

**Architecture:** Single-page static HTML with Tailwind CSS (CDN), vanilla JavaScript for language/theme toggles. No build step. Browser language detection with localStorage persistence.

**Tech Stack:** HTML5, Tailwind CSS (CDN), Vanilla JS, Google Fonts (Inter)

**Design Document:** `docs/plans/2026-02-04-portfolio-rebuild-design.md`

---

## Task 1: Create HTML Skeleton with Dark Mode Base

**Files:**
- Modify: `index.html` (complete rewrite)

**Step 1: Create the base HTML structure**

Replace entire `index.html` with:

```html
<!DOCTYPE html>
<html lang="nl" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Falco van Dooremolen - Technical Product Owner & AI Implementation Partner</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        dark: {
                            bg: '#0a0a0a',
                            card: '#1a1a1a',
                            border: '#2a2a2a'
                        }
                    }
                }
            }
        }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-dark-bg text-gray-100 min-h-screen">

    <!-- Header -->
    <header id="header" class="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="#" class="text-xl font-bold text-white">Falco van Dooremolen</a>
                <div class="flex items-center gap-4">
                    <button id="lang-toggle" class="text-sm text-gray-400 hover:text-white transition">NL | EN</button>
                    <button id="theme-toggle" class="text-gray-400 hover:text-white transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </button>
                    <a href="mailto:falco@dooremolen.com" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                        <span data-i18n="header.cta">Contact</span>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Hero Section Placeholder -->
        <section id="hero" class="min-h-[80vh] flex items-center">
            <p class="text-gray-500">Hero section placeholder</p>
        </section>

        <!-- Bento Grid Placeholder -->
        <section id="bento" class="py-16">
            <p class="text-gray-500">Bento grid placeholder</p>
        </section>

        <!-- Timeline Placeholder -->
        <section id="timeline" class="py-16">
            <p class="text-gray-500">Timeline placeholder</p>
        </section>

        <!-- Contact Placeholder -->
        <section id="contact" class="py-16">
            <p class="text-gray-500">Contact placeholder</p>
        </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-dark-border py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Falco van Dooremolen</p>
        </div>
    </footer>

    <!-- Scripts loaded at end -->
    <script src="js/main.js"></script>
</body>
</html>
```

**Step 2: Verify in browser**

Open `index.html` in browser.

Expected:
- Dark background (#0a0a0a)
- Sticky header with name, toggles, contact button
- Placeholder sections visible
- Footer at bottom

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: create HTML skeleton with dark mode base"
```

---

## Task 2: Create JavaScript Foundation

**Files:**
- Create: `js/main.js`

**Step 1: Create js directory and main.js**

```javascript
/**
 * Portfolio Site - Main JavaScript
 * Handles: Language toggle, theme toggle, preferences persistence
 */

(function() {
    'use strict';

    // ===================
    // Translations
    // ===================
    const translations = {
        nl: {
            'header.cta': 'Contact',
            'hero.tagline': 'TECHNICAL PRODUCT OWNER & AI IMPLEMENTATION PARTNER',
            'hero.positioning': 'Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde.',
            'hero.cta': 'Neem contact op',
            'hero.badge.experience': '10+ jaar tech ervaring',
            'hero.badge.certified': 'PSM I Certified',
            'hero.badge.company': 'Visma Verzuim',
            'block.po.title': 'Technical Product Owner',
            'block.po.subtitle': 'Van strategie naar werkende software',
            'block.po.item1': 'Value-driven prioritering',
            'block.po.item2': 'Data-gedreven besluitvorming',
            'block.po.item3': 'Strategische roadmap planning',
            'block.po.item4': 'Stakeholder management',
            'block.ai.title': 'AI Implementation Partner',
            'block.ai.subtitle': 'Meetbare resultaten door slimme automatisering',
            'block.ai.item1': 'Reactietijd van uren naar minuten',
            'block.ai.item2': '+30% lead-generatie door geautomatiseerde offertes',
            'block.ai.item3': 'Research-uren gehalveerd met slimme documentanalyse',
            'block.ai.item4': 'Teams getraind om AI zelfstandig toe te passen',
            'block.eng.title': 'Engineering Roots',
            'block.eng.subtitle': 'Ik spreek de taal van developers',
            'block.eng.experience': '10+ jaar hands-on development ervaring',
            'block.coach.title': 'Agile Coaching',
            'block.coach.subtitle': 'Van teamdynamiek tot persoonlijke groei',
            'block.coach.item1': 'Scrum Master (4+ jaar)',
            'block.coach.item2': 'Team coaching & facilitatie',
            'block.coach.item3': 'Agile transformaties begeleid',
            'block.certs.title': 'Certificaten',
            'block.stats.experience': '10+ jaar',
            'block.stats.experienceLabel': 'tech ervaring',
            'block.stats.roles': '4 rollen',
            'block.stats.rolesLabel': 'bij Visma Verzuim',
            'block.stats.location': 'Raalte, NL',
            'timeline.title': 'Carrière',
            'timeline.current': 'Nu',
            'timeline.more': 'Eerdere ervaring',
            'contact.title': 'Laten we praten',
            'contact.subtitle': 'Op zoek naar een Technical Product Owner of hulp bij AI-adoptie? Neem contact op.',
            'contact.cta': 'Mail mij',
            'contact.future': 'Of plan direct een gesprek',
            'footer.built': 'Gebouwd met Claude Code'
        },
        en: {
            'header.cta': 'Contact',
            'hero.tagline': 'TECHNICAL PRODUCT OWNER & AI IMPLEMENTATION PARTNER',
            'hero.positioning': 'I help organizations adopt AI tools and translate complex technology into concrete product value.',
            'hero.cta': 'Get in touch',
            'hero.badge.experience': '10+ years tech experience',
            'hero.badge.certified': 'PSM I Certified',
            'hero.badge.company': 'Visma Verzuim',
            'block.po.title': 'Technical Product Owner',
            'block.po.subtitle': 'From strategy to working software',
            'block.po.item1': 'Value-driven prioritization',
            'block.po.item2': 'Data-driven decision making',
            'block.po.item3': 'Strategic roadmap planning',
            'block.po.item4': 'Stakeholder management',
            'block.ai.title': 'AI Implementation Partner',
            'block.ai.subtitle': 'Measurable results through smart automation',
            'block.ai.item1': 'Response time from hours to minutes',
            'block.ai.item2': '+30% lead generation through automated quotes',
            'block.ai.item3': 'Research hours halved with smart document analysis',
            'block.ai.item4': 'Teams trained to apply AI independently',
            'block.eng.title': 'Engineering Roots',
            'block.eng.subtitle': 'I speak the language of developers',
            'block.eng.experience': '10+ years hands-on development experience',
            'block.coach.title': 'Agile Coaching',
            'block.coach.subtitle': 'From team dynamics to personal growth',
            'block.coach.item1': 'Scrum Master (4+ years)',
            'block.coach.item2': 'Team coaching & facilitation',
            'block.coach.item3': 'Guided Agile transformations',
            'block.certs.title': 'Certifications',
            'block.stats.experience': '10+ years',
            'block.stats.experienceLabel': 'tech experience',
            'block.stats.roles': '4 roles',
            'block.stats.rolesLabel': 'at Visma Verzuim',
            'block.stats.location': 'Raalte, NL',
            'timeline.title': 'Career',
            'timeline.current': 'Now',
            'timeline.more': 'Earlier experience',
            'contact.title': "Let's talk",
            'contact.subtitle': 'Looking for a Technical Product Owner or help with AI adoption? Get in touch.',
            'contact.cta': 'Email me',
            'contact.future': 'Or schedule a call directly',
            'footer.built': 'Built with Claude Code'
        }
    };

    // ===================
    // State
    // ===================
    let currentLang = 'nl';
    let currentTheme = 'dark';

    // ===================
    // Language Functions
    // ===================
    function detectLanguage() {
        // Priority 1: localStorage
        const stored = localStorage.getItem('lang');
        if (stored && (stored === 'nl' || stored === 'en')) {
            return stored;
        }

        // Priority 2: Browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.toLowerCase().startsWith('nl')) {
            return 'nl';
        }

        return 'en';
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update toggle button appearance
        updateLangToggle();
    }

    function updateLangToggle() {
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            toggle.innerHTML = currentLang === 'nl'
                ? '<span class="text-white font-medium">NL</span> | <span>EN</span>'
                : '<span>NL</span> | <span class="text-white font-medium">EN</span>';
        }
    }

    function toggleLanguage() {
        setLanguage(currentLang === 'nl' ? 'en' : 'nl');
    }

    // ===================
    // Theme Functions
    // ===================
    function detectTheme() {
        const stored = localStorage.getItem('theme');
        if (stored && (stored === 'dark' || stored === 'light')) {
            return stored;
        }
        return 'dark'; // Default to dark
    }

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        updateThemeToggle();
    }

    function updateThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            // Sun icon for dark mode (click to go light), moon for light mode
            toggle.innerHTML = currentTheme === 'dark'
                ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
                : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
        }
    }

    function toggleTheme() {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    // ===================
    // Initialize
    // ===================
    function init() {
        // Set initial language
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);

        // Set initial theme
        const detectedTheme = detectTheme();
        setTheme(detectedTheme);

        // Event listeners
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', toggleLanguage);
        }

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
```

**Step 2: Verify in browser**

Open `index.html` in browser.

Expected:
- Language toggle shows "NL | EN" with current language highlighted
- Click language toggle → switches language (header button text changes)
- Click theme toggle → switches between dark/light mode
- Refresh page → preferences persist

**Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add JavaScript for language and theme toggles"
```

---

## Task 3: Build Hero Section

**Files:**
- Modify: `index.html` (hero section)

**Step 1: Replace hero placeholder**

Replace the hero section placeholder in `index.html` with:

```html
<!-- Hero Section -->
<section id="hero" class="min-h-[80vh] flex items-center py-16">
    <div class="grid md:grid-cols-2 gap-12 items-center w-full">
        <!-- Left: Text Content -->
        <div class="order-2 md:order-1">
            <p class="text-indigo-500 font-semibold tracking-wider text-sm mb-4" data-i18n="hero.tagline">
                TECHNICAL PRODUCT OWNER & AI IMPLEMENTATION PARTNER
            </p>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Falco van Dooremolen
            </h1>
            <p class="text-xl text-gray-400 mb-8 max-w-lg" data-i18n="hero.positioning">
                Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde.
            </p>

            <!-- Proof Badges -->
            <div class="flex flex-wrap gap-3 mb-8">
                <span class="bg-dark-card border border-dark-border px-4 py-2 rounded-full text-sm text-gray-300" data-i18n="hero.badge.experience">
                    10+ jaar tech ervaring
                </span>
                <span class="bg-dark-card border border-dark-border px-4 py-2 rounded-full text-sm text-gray-300" data-i18n="hero.badge.certified">
                    PSM I Certified
                </span>
                <span class="bg-dark-card border border-dark-border px-4 py-2 rounded-full text-sm text-gray-300" data-i18n="hero.badge.company">
                    Visma Verzuim
                </span>
            </div>

            <!-- CTA -->
            <a href="mailto:falco@dooremolen.com"
               class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg shadow-indigo-600/25">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span data-i18n="hero.cta">Neem contact op</span>
            </a>
        </div>

        <!-- Right: Photo -->
        <div class="order-1 md:order-2 flex justify-center">
            <div class="relative">
                <!-- Glow effect behind photo -->
                <div class="absolute inset-0 bg-indigo-600/20 rounded-3xl blur-3xl transform scale-110"></div>
                <img src="assets/img/profile.jpg"
                     alt="Falco van Dooremolen - Technical Product Owner"
                     class="relative rounded-3xl w-72 h-72 md:w-80 md:h-80 object-cover border-2 border-dark-border shadow-2xl">
            </div>
        </div>
    </div>
</section>

<!-- Scroll Indicator -->
<div class="flex justify-center pb-8">
    <a href="#bento" class="animate-bounce text-gray-500 hover:text-indigo-500 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </a>
</div>
```

**Step 2: Verify in browser**

Expected:
- Two-column layout: text left, photo right (stacks on mobile)
- Indigo tagline, large white name, gray positioning text
- Three proof badges below positioning
- Large indigo CTA button with email icon
- Photo with indigo glow effect behind it
- Animated scroll indicator at bottom
- Language toggle changes all `data-i18n` text

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add hero section with photo and CTA"
```

---

## Task 4: Build Bento Grid Layout

**Files:**
- Modify: `index.html` (bento section)

**Step 1: Replace bento placeholder**

Replace the bento section placeholder with:

```html
<!-- Bento Grid Section -->
<section id="bento" class="py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">

        <!-- Technical Product Owner (2x2) -->
        <div class="lg:col-span-2 lg:row-span-2 bg-dark-card border border-dark-border rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
            <div class="h-full flex flex-col">
                <div class="mb-6">
                    <div class="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600/20 transition">
                        <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-2" data-i18n="block.po.title">Technical Product Owner</h2>
                    <p class="text-gray-400" data-i18n="block.po.subtitle">Van strategie naar werkende software</p>
                </div>
                <ul class="space-y-3 mt-auto">
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.po.item1">Value-driven prioritering</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.po.item2">Data-gedreven besluitvorming</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.po.item3">Strategische roadmap planning</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.po.item4">Stakeholder management</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- AI Implementation Partner (2x2) -->
        <div class="lg:col-span-2 lg:row-span-2 bg-dark-card border border-dark-border rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group relative overflow-hidden">
            <!-- Subtle gradient background -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-600/5 to-transparent rounded-full blur-3xl"></div>
            <div class="h-full flex flex-col relative">
                <div class="mb-6">
                    <div class="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600/20 transition">
                        <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-2" data-i18n="block.ai.title">AI Implementation Partner</h2>
                    <p class="text-gray-400" data-i18n="block.ai.subtitle">Meetbare resultaten door slimme automatisering</p>
                </div>
                <ul class="space-y-3 mt-auto">
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.ai.item1">Reactietijd van uren naar minuten</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.ai.item2">+30% lead-generatie door geautomatiseerde offertes</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.ai.item3">Research-uren gehalveerd met slimme documentanalyse</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        <span data-i18n="block.ai.item4">Teams getraind om AI zelfstandig toe te passen</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Engineering Roots (2x1) -->
        <div class="lg:col-span-2 bg-dark-card border border-dark-border rounded-3xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
            <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600/20 transition">
                    <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-bold text-white mb-1" data-i18n="block.eng.title">Engineering Roots</h3>
                    <p class="text-gray-400 text-sm mb-4" data-i18n="block.eng.subtitle">Ik spreek de taal van developers</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="bg-dark-bg px-3 py-1 rounded-full text-xs text-gray-400">PHP</span>
                        <span class="bg-dark-bg px-3 py-1 rounded-full text-xs text-gray-400">Java</span>
                        <span class="bg-dark-bg px-3 py-1 rounded-full text-xs text-gray-400">MySQL</span>
                        <span class="bg-dark-bg px-3 py-1 rounded-full text-xs text-gray-400">OOP</span>
                        <span class="bg-dark-bg px-3 py-1 rounded-full text-xs text-gray-400">API's</span>
                    </div>
                    <p class="text-gray-500 text-sm" data-i18n="block.eng.experience">10+ jaar hands-on development ervaring</p>
                </div>
            </div>
        </div>

        <!-- Agile Coaching (2x1) -->
        <div class="lg:col-span-2 bg-dark-card border border-dark-border rounded-3xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
            <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600/20 transition">
                    <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-1">
                        <h3 class="text-lg font-bold text-white" data-i18n="block.coach.title">Agile Coaching</h3>
                        <span class="bg-indigo-600/20 text-indigo-400 px-2 py-0.5 rounded text-xs font-medium">PSM I</span>
                    </div>
                    <p class="text-gray-400 text-sm mb-3" data-i18n="block.coach.subtitle">Van teamdynamiek tot persoonlijke groei</p>
                    <ul class="space-y-1 text-sm text-gray-300">
                        <li data-i18n="block.coach.item1">Scrum Master (4+ jaar)</li>
                        <li data-i18n="block.coach.item2">Team coaching & facilitatie</li>
                        <li data-i18n="block.coach.item3">Agile transformaties begeleid</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Certifications (1x1) -->
        <div class="bg-dark-card border border-dark-border rounded-3xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4" data-i18n="block.certs.title">Certificaten</h3>
            <div class="space-y-3">
                <div>
                    <a href="https://www.scrum.org/user/239641" target="_blank" rel="noopener noreferrer" class="text-white font-semibold hover:text-indigo-400 transition">PSM I</a>
                    <p class="text-gray-500 text-sm">Scrum.org · 2017</p>
                </div>
                <div>
                    <p class="text-white font-semibold">Java 7</p>
                    <p class="text-gray-500 text-sm">Vijfhart · 2015</p>
                </div>
            </div>
        </div>

        <!-- Quick Stats (1x1) -->
        <div class="bg-dark-card border border-dark-border rounded-3xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
            <div class="space-y-4">
                <div>
                    <p class="text-3xl font-bold text-white" data-i18n="block.stats.experience">10+ jaar</p>
                    <p class="text-gray-500 text-sm" data-i18n="block.stats.experienceLabel">tech ervaring</p>
                </div>
                <div>
                    <p class="text-3xl font-bold text-white" data-i18n="block.stats.roles">4 rollen</p>
                    <p class="text-gray-500 text-sm" data-i18n="block.stats.rolesLabel">bij Visma Verzuim</p>
                </div>
                <div class="pt-2 border-t border-dark-border">
                    <p class="text-gray-400" data-i18n="block.stats.location">Raalte, NL</p>
                </div>
            </div>
        </div>

    </div>
</section>
```

**Step 2: Verify in browser**

Expected:
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Two large blocks (PO, AI) span 2x2
- Two medium blocks (Engineering, Coaching) span 2x1
- Two small blocks (Certs, Stats) are 1x1
- Hover effects: border glow, subtle shadow
- All text switches with language toggle

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Bento Grid with all skill blocks"
```

---

## Task 5: Build Timeline Section

**Files:**
- Modify: `index.html` (timeline section)

**Step 1: Replace timeline placeholder**

```html
<!-- Timeline Section -->
<section id="timeline" class="py-16">
    <h2 class="text-3xl font-bold text-white mb-12 text-center" data-i18n="timeline.title">Carrière</h2>

    <div class="bg-dark-card border border-dark-border rounded-3xl p-8">
        <!-- Visma Verzuim -->
        <div class="mb-8">
            <div class="flex items-center gap-4 mb-6">
                <h3 class="text-xl font-bold text-white">Visma Verzuim</h3>
                <span class="text-gray-500">2015 - heden</span>
            </div>

            <div class="relative border-l-2 border-indigo-600/30 ml-2 space-y-6">
                <!-- Product Owner - Current -->
                <div class="relative pl-8">
                    <div class="absolute -left-2 top-1 w-4 h-4 bg-indigo-600 rounded-full border-4 border-dark-card"></div>
                    <div class="flex items-center gap-3">
                        <h4 class="text-lg font-semibold text-white">Product Owner</h4>
                        <span class="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded" data-i18n="timeline.current">Nu</span>
                    </div>
                    <p class="text-gray-500 text-sm">2023 - heden</p>
                </div>

                <!-- Agile Coach -->
                <div class="relative pl-8">
                    <div class="absolute -left-2 top-1 w-4 h-4 bg-dark-border rounded-full border-4 border-dark-card"></div>
                    <h4 class="text-lg font-semibold text-gray-300">Agile Coach</h4>
                    <p class="text-gray-500 text-sm">2021 - 2022</p>
                </div>

                <!-- Scrum Master -->
                <div class="relative pl-8">
                    <div class="absolute -left-2 top-1 w-4 h-4 bg-dark-border rounded-full border-4 border-dark-card"></div>
                    <h4 class="text-lg font-semibold text-gray-300">Scrum Master</h4>
                    <p class="text-gray-500 text-sm">2017 - 2021</p>
                </div>

                <!-- Software Engineer -->
                <div class="relative pl-8">
                    <div class="absolute -left-2 top-1 w-4 h-4 bg-dark-border rounded-full border-4 border-dark-card"></div>
                    <h4 class="text-lg font-semibold text-gray-300">Software Engineer</h4>
                    <p class="text-gray-500 text-sm">2015 - 2017</p>
                </div>
            </div>
        </div>

        <!-- Earlier Experience (Collapsed) -->
        <details class="group">
            <summary class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition">
                <svg class="w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span data-i18n="timeline.more">Eerdere ervaring</span>
            </summary>
            <div class="mt-6 pl-6 space-y-4 text-gray-400">
                <div>
                    <p class="font-medium text-gray-300">vDia Internet Applications · Eigenaar</p>
                    <p class="text-sm">2012 - heden</p>
                </div>
                <div>
                    <p class="font-medium text-gray-300">MailStreet B.V. · PHP Developer</p>
                    <p class="text-sm">2010 - 2015</p>
                </div>
                <div>
                    <p class="font-medium text-gray-300">DoWebs Webcreations · Freelancer</p>
                    <p class="text-sm">2009 - 2010</p>
                </div>
                <div>
                    <p class="font-medium text-gray-300">WebProdie · Trainee Developer</p>
                    <p class="text-sm">2008 - 2009</p>
                </div>
                <div>
                    <p class="font-medium text-gray-300">Salland Automatisering · Technical Support</p>
                    <p class="text-sm">2006 - 2009</p>
                </div>
            </div>
        </details>
    </div>
</section>
```

**Step 2: Verify in browser**

Expected:
- "Carrière" heading centered
- Visma Verzuim timeline with vertical line
- Current role (Product Owner) highlighted with indigo dot and "Nu" badge
- Past roles with gray dots
- "Eerdere ervaring" collapsed by default
- Clicking expands to show earlier jobs

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add career timeline with collapsible history"
```

---

## Task 6: Build Contact Section and Footer

**Files:**
- Modify: `index.html` (contact and footer sections)

**Step 1: Replace contact placeholder and update footer**

Replace contact section:

```html
<!-- Contact Section -->
<section id="contact" class="py-16">
    <div id="contact-form-area" class="bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border rounded-3xl p-12 text-center">
        <h2 class="text-4xl font-bold text-white mb-4" data-i18n="contact.title">Laten we praten</h2>
        <p class="text-xl text-gray-400 mb-8 max-w-xl mx-auto" data-i18n="contact.subtitle">
            Op zoek naar een Technical Product Owner of hulp bij AI-adoptie? Neem contact op.
        </p>

        <a href="mailto:falco@dooremolen.com"
           class="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition shadow-lg shadow-indigo-600/25 mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span data-i18n="contact.cta">Mail mij</span>
        </a>

        <p class="text-gray-500">falco@dooremolen.com</p>

        <!-- Future hook for N8N/Calendly -->
        <p class="text-gray-600 text-sm mt-6" data-i18n="contact.future">Of plan direct een gesprek</p>
    </div>
</section>
```

Replace footer:

```html
<!-- Footer -->
<footer class="border-t border-dark-border py-8 mt-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-500 text-sm">&copy; 2026 Falco van Dooremolen</p>

            <div class="flex items-center gap-6">
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/falco-van-dooremolen/" target="_blank" rel="noopener noreferrer"
                   class="text-gray-500 hover:text-white transition" aria-label="LinkedIn">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>

                <!-- Built with badge -->
                <span class="text-gray-600 text-sm" data-i18n="footer.built">Gebouwd met Claude Code</span>
            </div>
        </div>
    </div>
</footer>
```

**Step 2: Verify in browser**

Expected:
- Large centered contact section with gradient background
- "Laten we praten" headline
- Large indigo CTA button with email icon
- Email address visible below button
- "Of plan direct een gesprek" greyed out (future N8N hook)
- Footer: copyright left, LinkedIn icon + "Gebouwd met Claude Code" right

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add contact section and footer with LinkedIn"
```

---

## Task 7: Add Light Mode Styles

**Files:**
- Modify: `index.html` (add light mode Tailwind classes)

**Step 1: Update Tailwind config for light mode colors**

Update the Tailwind config in `<head>`:

```html
<script>
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    dark: {
                        bg: '#0a0a0a',
                        card: '#1a1a1a',
                        border: '#2a2a2a'
                    },
                    light: {
                        bg: '#ffffff',
                        card: '#f8f9fa',
                        border: '#e5e7eb'
                    }
                }
            }
        }
    }
</script>
```

**Step 2: Add light mode classes throughout**

Update body class:
```html
<body class="bg-dark-bg dark:bg-dark-bg bg-light-bg text-gray-100 dark:text-gray-100 text-gray-800 min-h-screen">
```

This requires updating multiple elements. Key pattern for all dark-colored elements:

- `bg-dark-bg` → `dark:bg-dark-bg bg-white`
- `bg-dark-card` → `dark:bg-dark-card bg-light-card`
- `border-dark-border` → `dark:border-dark-border border-light-border`
- `text-white` → `dark:text-white text-gray-900`
- `text-gray-400` → `dark:text-gray-400 text-gray-600`
- `text-gray-500` → `dark:text-gray-500 text-gray-500`

**Note:** This is a larger refactor. For each element with dark-mode styling, add the corresponding light-mode class.

**Step 3: Verify in browser**

Toggle theme button:
- Dark mode: Near-black background, white text, dark cards
- Light mode: White background, dark text, light gray cards
- Both should look professional and readable

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add light mode support with Tailwind classes"
```

---

## Task 8: Add SEO Meta Tags

**Files:**
- Modify: `index.html` (head section)

**Step 1: Add comprehensive meta tags**

Add after `<title>` in `<head>`:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Falco van Dooremolen - Technical Product Owner & AI Implementation Partner. Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde.">
<meta name="keywords" content="Technical Product Owner, AI Implementation, Product Owner, Agile Coach, Scrum Master, AI Adoption, Automation, Visma Verzuim, Falco van Dooremolen">
<meta name="author" content="Falco van Dooremolen">
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="profile">
<meta property="og:title" content="Falco van Dooremolen - Technical Product Owner & AI Implementation Partner">
<meta property="og:description" content="Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde.">
<meta property="og:image" content="https://dooremolen.com/assets/img/profile.jpg">
<meta property="og:url" content="https://dooremolen.com/">
<meta property="og:site_name" content="Falco van Dooremolen">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Falco van Dooremolen - Technical Product Owner & AI Implementation Partner">
<meta name="twitter:description" content="Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde.">
<meta name="twitter:image" content="https://dooremolen.com/assets/img/profile.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://dooremolen.com/">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
```

**Step 2: Add JSON-LD Schema**

Add before closing `</head>`:

```html
<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Falco van Dooremolen",
    "jobTitle": "Technical Product Owner & AI Implementation Partner",
    "description": "Ik help organisaties AI-tools te adopteren en vertaal complexe technologie naar concrete productwaarde.",
    "url": "https://dooremolen.com/",
    "image": "https://dooremolen.com/assets/img/profile.jpg",
    "sameAs": [
        "https://www.linkedin.com/in/falco-van-dooremolen/"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": "Visma Verzuim"
    },
    "knowsAbout": [
        "Product Management",
        "AI Implementation",
        "Agile Coaching",
        "Scrum",
        "Software Development"
    ],
    "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Professional Scrum Master I",
        "credentialCategory": "certification",
        "recognizedBy": {
            "@type": "Organization",
            "name": "Scrum.org"
        }
    }
}
</script>
```

**Step 3: Add Analytics and Cookiebot**

Add at the start of `<head>` (before other scripts):

```html
<!-- Cookiebot -->
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="651fb423-8c2a-40c5-8aed-11c7d2d1e6fb" data-blockingmode="auto" type="text/javascript"></script>
```

Add before closing `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NBSM91VC55"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NBSM91VC55');
</script>
```

**Step 4: Verify**

- Check page source for meta tags
- Test Open Graph with https://www.opengraph.xyz/
- Check JSON-LD with https://search.google.com/test/rich-results

**Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add SEO meta tags, Open Graph, and JSON-LD schema"
```

---

## Task 9: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Update with new architecture**

```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Falco van Dooremolen, positioning as **Technical Product Owner & AI Implementation Partner**. Static HTML site with dark-mode Bento Grid layout.

## Technology Stack

- **Frontend**: HTML5, Tailwind CSS (CDN), vanilla JavaScript
- **Icons**: Inline SVGs, Font Awesome in `/assets/fontawesome/`
- **Fonts**: Inter (Google Fonts)

## Key Files

- `index.html` - Main page (single-page site)
- `js/main.js` - Language toggle, theme toggle, localStorage persistence
- `assets/img/profile.jpg` - Profile photo

## Features

- **Language Toggle**: Auto-detects browser language (NL/EN), persists to localStorage
- **Theme Toggle**: Dark mode default, light mode available, persists to localStorage
- **Bento Grid**: Responsive 4-col/2-col/1-col layout showcasing skills
- **N8N-Ready**: Contact section has `id="contact-form-area"` for future automation

## Development

Open `index.html` directly in browser, or use any static file server.

To add/modify translations, edit the `translations` object in `js/main.js`.

## Git Workflow

- `main` branch: Production
- `new-site` branch: Development

## External Services

- Google Analytics: G-NBSM91VC55
- Cookiebot: GDPR consent (ID: 651fb423-8c2a-40c5-8aed-11c7d2d1e6fb)

## Deployment

Push to GitHub for auto-deployment. No build step required.
```

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with new architecture"
```

---

## Task 10: Final Verification and Cleanup

**Files:**
- Review all files

**Step 1: Test all functionality**

Checklist:
- [ ] Page loads with dark mode by default
- [ ] Language auto-detects (test with browser DevTools → Sensors → Language)
- [ ] NL/EN toggle works and persists after refresh
- [ ] Dark/Light toggle works and persists after refresh
- [ ] Hero section displays correctly on desktop and mobile
- [ ] Bento Grid is responsive (4-col → 2-col → 1-col)
- [ ] All blocks have hover effects
- [ ] Timeline shows Visma progression with current role highlighted
- [ ] Earlier experience expands/collapses
- [ ] Contact email link works (opens mail client)
- [ ] LinkedIn link opens in new tab
- [ ] Profile image loads correctly

**Step 2: Test responsive breakpoints**

Use browser DevTools to test:
- Desktop: 1280px+ (4-column grid)
- Tablet: 768px-1279px (2-column grid)
- Mobile: <768px (1-column grid, stacked hero)

**Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete portfolio rebuild with Bento Grid layout"
```

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | HTML skeleton with dark mode | `index.html` |
| 2 | JavaScript foundation (lang/theme) | `js/main.js` |
| 3 | Hero section | `index.html` |
| 4 | Bento Grid blocks | `index.html` |
| 5 | Timeline section | `index.html` |
| 6 | Contact & Footer | `index.html` |
| 7 | Light mode styles | `index.html` |
| 8 | SEO meta tags | `index.html` |
| 9 | Update CLAUDE.md | `CLAUDE.md` |
| 10 | Final verification | All |

**Total: 10 tasks, ~15-20 commits**
