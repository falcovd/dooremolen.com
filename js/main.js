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
                ? '<span class="text-gray-900 dark:text-white font-medium">NL</span> | <span>EN</span>'
                : '<span>NL</span> | <span class="text-gray-900 dark:text-white font-medium">EN</span>';
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
