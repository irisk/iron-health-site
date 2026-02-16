# Requirements — Iron Health Awareness Site

## Target Audience

**Primary**: Dutch women aged 20-45 who:
- Experience unexplained fatigue, brain fog, or hair loss
- Have been told their blood results are "normal" despite symptoms
- Are menstruating, vegetarian/vegan, or physically active (higher risk groups)

**Secondary**: Anyone interested in understanding iron deficiency beyond basic hemoglobin testing.

## Goals

1. **Educate** about the gap between lab "normal" ferritin (6-15 µg/L) and optimal (30-70 µg/L)
2. **Help recognize** symptoms of low ferritin even without anemia
3. **Empower action** — specifically: request a ferritin test, know what levels to push for, understand absorption basics
4. **Address the Dutch context** — the GP culture of "paracetamol en afwachten" and how to advocate for adequate testing/treatment

## Success Criteria

- Visitor understands that "normal" ferritin ≠ optimal ferritin
- Visitor can identify risk factors that apply to them
- Visitor knows the specific action steps (get ferritin tested, target 30+ µg/L)
- Visitor understands what blocks iron absorption (coffee, tea, dairy) and the 2-hour rule

## Content Requirements Per Section

### Hero
- Attention-grabbing headline (fatigue as hook)
- Subheadline with scope of the problem
- CTA to action section

### The Problem
- Lab reference ranges vs. optimal ranges with specific numbers
- Visual representation of the gap
- The key insight: symptomatic at "normal" levels

### Symptoms Checklist
- 8 symptoms from knowledge base (fatigue, brain fog, hair loss, cold intolerance, restless legs, brittle nails, weak immune, poor exercise recovery)
- Interactive CSS-only checkboxes
- Framing that normalizes recognition

### Who's at Risk
- 4 risk groups with specific data:
  - Menstruating women (15-30mg loss/cycle)
  - Vegetarians/vegans (2-20% vs 15-35% absorption)
  - Athletes/runners (foot strike hemolysis, sweat losses)
  - Heavy coffee/tea drinkers (50-90% absorption reduction)

### Absorption Blockers
- Table with substance, % reduction
- The 2-hour separation rule
- Surprise element: decaf still blocks 40-60%

### Action Steps
- 4 concrete steps with Dutch healthcare context
- Specific ferritin target numbers
- Supplementation basics (vitamin C, empty stomach)

### Footer
- Medical disclaimer
- Source references
- Credit

## Design Direction

- **Feeling**: Warm, approachable, empowering — not clinical or scary
- **Color palette**: Earth tones — terracotta/rust (#C4553A), cream (#FFF8F0), warm dark (#2D2926)
- **Typography**: System fonts or Inter (Google Font)
- **Layout**: Mobile-first, single column, generous whitespace
- **Animations**: Subtle fade-in on scroll (IntersectionObserver)

## Bilingual Approach

- Single HTML file with all content in both NL and EN
- `lang="nl"` and `lang="en"` attributes on text elements
- Dutch visible by default, English hidden via CSS
- JS toggle button switches visibility
- Button always visible in top-right corner

## Tone of Voice

- **Dutch**: Direct, slightly informal ("je" not "u"), empathetic but not dramatic
- **English**: Clear, conversational, empowering
- Both: evidence-based, cite specific numbers, avoid fear-mongering

## Out of Scope

- Analytics / tracking
- Contact form or email capture
- CMS or dynamic content
- Domain / hosting setup
- SEO optimization beyond basic meta tags
- E-commerce / supplement recommendations
- Individual medical advice
