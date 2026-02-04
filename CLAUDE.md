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
