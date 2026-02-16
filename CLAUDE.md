# Iron Health Awareness Site

## What This Is
Single-page bilingual (NL/EN) static website educating Dutch women about iron deficiency — specifically the gap between lab "normal" ferritin ranges and optimal health levels.

## Tech Stack
- Static HTML + CSS + minimal JS
- No build tools, no frameworks
- Deployable anywhere (Vercel, Netlify, GitHub Pages)

## Project Structure
```
iron-health-site/
├── CLAUDE.md              # This file
├── README.md              # GitHub project description
├── docs/
│   ├── requirements.md    # Goals, audience, content spec
│   └── research/
│       ├── sources.md     # Scientific sources with citations
│       ├── dutch-context.md # NL-specific data
│       └── statistics.md  # Key stats used on site (with source refs)
└── site/
    ├── index.html         # Single-page bilingual site
    ├── styles.css         # All styling + responsive design
    └── script.js          # Language toggle + scroll animations
```

## Key Design Decisions
- **Bilingual**: Single HTML file, Dutch default, JS toggle switches `lang="nl"` / `lang="en"` visibility
- **Content source**: All claims backed by research in `docs/research/` — every number on the site must trace to a source
- **Design**: Warm earth tones (terracotta/rust iron theme), mobile-first, clean and non-clinical

## Content Source
Site content based on the Iron Health project knowledge base at `../../iron-health/docs/knowledge.md`.

## Working On This Project
- Every claim needs a source — check `docs/research/sources.md`
- When updating statistics, update both the site content AND `docs/research/statistics.md`
- Test the language toggle after any content changes
- Check responsive design at 375px, 768px, 1200px
