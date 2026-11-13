# Ash Heroic Journey — Interactive Pixel Journey Website

**Live site:** https://nx9161.github.io/ash-heroic-journey/

An interactive, glass/techy tribute website following an original creature-catcher's heroic journey across 14 pixel-art scenes. Built with vanilla HTML5/CSS3/JS — zero build, zero network, zero third-party assets.

## 🎮 Features

- **14 original pixel-art scenes** (480×288, 16×16 tile base) drawn entirely in HTML5 Canvas 2D
- **8 heroic moments** flagged with "why it's heroic" lines — trust, empathy, selfless rescue, leadership, understanding, courage, love over legend
- **Glass/techy aesthetic** — dark theme, neon cyan accents, glassmorphism panels (`backdrop-filter: blur`), techy monospace typography, glow shadows
- **Rich interactivity** — scroll-reveal animations, clickable scene cards, hover states, next/prev navigation, keyboard support (Arrow/WASD/Space/Enter/Esc/B), localStorage bookmarks
- **Accessibility first** — WCAG AA contrast, visible focus styles, `prefers-reduced-motion` support, semantic HTML, keyboard-accessible focus order
- **Zero network / zero build** — single static site, deploys to GitHub Pages with zero config
- **100% IP-clean** — original trainer "Kai", original partner creature "Lumina", original region names; zero Nintendo/Game Freak/Creatures Inc. trademarks, zero canon names, zero likeness

## 🚀 Quick Start

### Run locally
```bash
cd ash-heroic-journey
python3 -m http.server 8000
# Open http://localhost:8000
```

### Deploy to GitHub Pages
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)`
3. Your site lives at `https://<username>.github.io/ash-heroic-journey/`

## 🎨 Scene Roster

| # | Scene | Region | Heroic Beat |
|---|-------|--------|-------------|
| 1 | Willow Hollow — The Start | Willow Hollow | ✅ First bond |
| 2 | First Trail — The Crossing | Willow Hollow | — |
| 3 | Oakwood Gym — The First Badge | Oakwood | ✅ Empathy over power |
| 4 | Silver Ridge — The Mountain Pass | Silver Ridge | — |
| 5 | Ember Cavern — The Rescue | Silver Ridge | ✅ Selfless rescue |
| 6 | Tidewater City — The Harbor | Tidewater | — |
| 7 | Tidewater Gym — The Wave Badge | Tidewater | ✅ Growth through trust |
| 8 | Verdant Woods — The Ancient Tree | Verdant Woods | — |
| 9 | Storm Peak — The Tempest | Storm Peak | ✅ Leadership |
| 10 | Crystal Cavern — The Reflection | Crystal Peaks | — |
| 11 | Crystal Championship — The Summit | Crystal Peaks | ✅ Understanding |
| 12 | Eternal Horizon — New Beginnings | Eternal Horizon | ✅ Courage |
| 13 | Lumina's Choice — The Return | Willow Hollow (Return) | ✅ Love over legend |
| 14 | Endless Road — The Journey Continues | Beyond | — |

**8 Heroic Beats** flagged with "why it's heroic" lines.

## ⌨️ Controls

| Key | Action |
|-----|--------|
| `←` / `→` / `A` / `D` | Previous / Next scene |
| `Space` / `Enter` | Open scene detail |
| `Esc` | Close detail panel |
| `B` | Toggle bookmark (★) |
| Scroll | Auto-reveal scenes |

Bookmarks persist in `localStorage` across sessions.

## 🛡️ IP-Clean Statement

This is an **original tribute work** — 100% original code, original pixel art (drawn in Canvas 2D), original character names ("Kai", "Lumina"), original region names ("Willow Hollow", "Oakwood", "Silver Ridge", "Tidewater", "Verdant Woods", "Storm Peak", "Crystal Peaks", "Eternal Horizon"), original story beats.

**Zero occurrences** of any Nintendo/Game Freak/Creatures Inc. trademarks:
- No "Ash", "Ash Ketchum", "Pokémon", "Pikachu", "Kanto", "Team Rocket", "Poké Ball", "Gym Leader", "Elite Four", "Pokédex", "Pokémon Center", "Pokémon League", "Master Ball", "Johto", "Hoenn", "Sinnoh", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"
- No official artwork, sprite rips, or traced character likeness
- All pixel art drawn programmatically in Canvas 2D at runtime
- Build-time grep sweep returns **zero hits** for trademarked terms

## 📁 File Structure

```
ash-heroic-journey/
├── index.html      # Entry point
├── styles.css      # Glass/techy design system
├── script.js       # Interactivity (scroll-reveal, nav, bookmarks)
├── scenes.js       # 14 pixel-art scene drawing functions
├── README.md       # This file
```

## 📋 War Room Protocol

Built under the Sloane War Room protocol (Phases 0–4):
- Phase 0: Perfected prompt + Knowledge Wizard dossier
- Phase 1: PRD, wireframes, business case, journey spec, HUD direction
- Phase 2: Topology, site architecture, GitHub Pages platform constraints
- Phase 3: AppSec review, General Counsel IP review (blocking, zero-trademark gate), Tech Law compliance
- Phase 4: Production gate → GitHub Pages deploy

---

**Built with:** HTML5 Canvas 2D, CSS3 (glassmorphism, CSS custom properties), vanilla ES6+ JS, Intersection Observer API, localStorage.

**License:** MIT — original expression owned by the author.