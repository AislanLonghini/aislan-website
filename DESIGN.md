---
name: Aislan Longhini - Executive Portfolio
description: High-impact executive portfolio combining corporate banking governance with modern fintech agility and AI delivery.
colors:
  primary: "#06b6d4"
  primary-bright: "#22d3ee"
  secondary: "#2563eb"
  accent-emerald: "#34d399"
  neutral-bg: "#080B11"
  neutral-card: "rgba(255, 255, 255, 0.02)"
  neutral-border: "rgba(255, 255, 255, 0.10)"
  text-primary: "#ffffff"
  text-secondary: "#cbd5e1"
  text-muted: "#94a3b8"
  text-subtle: "#64748b"
  text-inverse: "#020617"
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  tab-nav:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  card-container:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: Aislan Longhini - Executive Portfolio

## Overview

**Creative North Star: "The Kinetic Modernist"**

The visual language of the Aislan Longhini executive portfolio embodies contemporary executive sophistication. It projects the authoritative gravity of institutional banking governance while radiating the speed, clarity, and precision of modern fintech architecture. Deep obsidian voids serve as an uncompromising canvas, upon which layered frosted glass surfaces and coherent atmospheric light orbs establish a refined hierarchy.

Operating under the "Fintech Architect" voice, the interface is pragmatic, structured, and relentlessly clear. Data, metrics, and hierarchical endorsements lead without ornamental distraction. Visual interest stems from ambient light diffusion and tactile responsiveness rather than superfluous decorative artifacts.

**Key Characteristics:**
- **Obsidian Foundation**: Deep slate-navy substrate (`#080B11`) providing ultra-high contrast for crisp typography and vibrant accents.
- **Atmospheric Aurora Lighting**: Large-radius blurred light pools that grant spatial depth without breaking dark-mode restraint.
- **Layered Glassmorphism**: Translucent frosted containers (`backdrop-blur-xl` over `rgba(255, 255, 255, 0.02)`) bound by 1px hairline borders.
- **Tactile Confidence**: Immediate, luminous state changes on interactive elements (subtle cyan glows, border intensification, and brightness shifts).

## Colors

The palette balances the deep sobriety of enterprise financial institutions with luminous high-intent signals.

### Primary
- **Quantum Cyan** (`#06b6d4`, highlight `#22d3ee`): The primary energy and focus vector. Used exclusively for primary call-to-actions, active indicators, high-priority status badges, and subtle reactive glows.

### Secondary
- **Cobalt Horizon** (`#2563eb`): Anchors the primary cyan into a grounded corporate spectrum, appearing in primary button gradients and secondary ambient lighting.

### Tertiary
- **Signal Emerald** (`#34d399`): Reserved for real-time contact channels (WhatsApp Direct) and operational readiness states.

### Neutral
- **Obsidian Void** (`#080B11`): The global backdrop canvas. Absorbs excess glare and provides maximum contrast.
- **Frosted Glass Surface** (`rgba(255, 255, 255, 0.02)`): The structural card background, lifting content subtly above the void.
- **Hairline Boundary** (`rgba(255, 255, 255, 0.10)`): Delimits cards, headers, and separators without visual weight.
- **Pure White** (`#ffffff`): Reserved for primary headlines, active tab labels, and prominent quotes.
- **Slate Body** (`#cbd5e1`): Primary reading text, offering optimal legibility without harsh eye strain.
- **Muted Slate** (`#94a3b8`): Secondary descriptions, metadata, and passive navigation items.
- **Subtle Slate** (`#64748b`): Tertiary labels, timestamps, and copyright notes.
- **Inverse Ink** (`#020617`): High-contrast ink utilized exclusively inside bright cyan primary CTA buttons.

### Named Rules
**The Quantum Rarity Rule.** Quantum Cyan is an intentional signal, not wallpaper. It must occupy ≤10% of total surface area on any given screen to preserve its urgency and executive prestige.

**The Glass Integrity Rule.** Surfaces never use opaque flat grays. All content containers exist as frosted glass (`backdrop-blur-xl`) with 1px translucent boundaries (`rgba(255, 255, 255, 0.10)`), allowing ambient backlights to bleed through smoothly.

## Typography

**Display Font:** System Sans-Serif (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)  
**Body Font:** System Sans-Serif (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)  
**Label/Mono Font:** Monospace (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`)  

**Character:** Architectural, disciplined, and razor-sharp. Sans-serif brings contemporary clarity and executive accessibility, while monospace provides technical credibility for credentials, dates, and status badges.

### Hierarchy
- **Display** (Black 900, `clamp(2.25rem, 5vw, 3.75rem)`, line-height: `1.15`, tracking: `-0.025em`): Hero headline statement connecting business to tech and data.
- **Headline** (Bold 700, `1.875rem` / `30px`, line-height: `1.25`, tracking: `-0.025em`): Section headings across tabs (Sobre, Competências, etc.).
- **Title** (Bold 700, `1.125rem` / `18px`, line-height: `1.5`, tracking: `-0.015em`): Card titles, role designations, and competency categories.
- **Body** (Regular 400, `1rem` / `16px` and `0.875rem` / `14px`, line-height: `1.625`): Narrative copy, executive summary paragraphs, and recommendation quotes.
- **Label** (SemiBold 600, `0.75rem` / `12px`, uppercase, tracking: `0.05em`): Eyebrow pills, timeline periods, and corporate institution tags.

### Named Rules
**The Dual-Paced Metric Rule.** Technical qualifications, chronological dates, and institutional badges are rendered in monospace; strategic narrative and executive outcomes are rendered in high-weight sans-serif.

## Layout

The spatial model relies on a central container architecture with generous negative space and a disciplined responsive grid:

- **Global Shell**: Full viewport with sticky translucent header (`h-20`, `bg-[#080B11]/80`, `backdrop-blur-md`).
- **Container Scales**:
  - `max-w-6xl` (`1152px`): Header, navigation bar, and multi-column recommendation grids.
  - `max-w-5xl` (`1024px`): Hero section, Executive Summary, Competencies grid, and Certifications.
  - `max-w-4xl` (`896px`): Career Timeline and Direct Contact cards.
- **Grid Systems**:
  - Competencies & Achievements: 1 column on mobile, 2 columns on desktop (`grid-cols-1 md:grid-cols-2`, gap: `24px` to `32px`).
  - Certifications: 1 column on mobile, 3 columns on desktop (`grid-cols-1 md:grid-cols-3`, gap: `32px`).
  - Recommendations: 1 column on mobile, 2 columns on tablet, 3 columns on wide desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, gap: `24px`).
- **Vertical Rhythm**: Generous section spacing (`space-y-12` to `space-y-16`, hero padding `pt-24 pb-16`), conveying calm executive confidence.

## Elevation & Depth

Depth is established through layered translucency and atmospheric lighting rather than heavy drop shadows:

- **Atmospheric Glow Orbs**: Fixed blur circles placed behind the interface (`blur-[140px]` with cyan and cobalt hues), simulating ambient backlighting.
- **Surface Elevation**: Structural cards float at `bg-white/[0.02]` with `backdrop-blur-xl`. Hover states trigger border shifts from `border-white/10` to `border-cyan-500/30`.

### Shadow Vocabulary
- **Ambient Cyan Glow** (`box-shadow: 0 20px 25px -5px rgba(6, 182, 212, 0.20)`): Lifts the primary action button.
- **Point Beacon Glow** (`box-shadow: 0 0 10px rgba(34, 211, 238, 0.80)`): Applied to timeline nodes and active status pills.
- **Frosted Depth** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)`): Grounded card separation.

### Named Rules
**The Luminous Boundary Rule.** Elevated surfaces communicate their z-index through luminous border transitions and diffused backlight bleed, never via dark or murky outer shadows.

## Shapes

- **Card Radius:** Generous curvature (`rounded-2xl` / `16px`), softening the technical dark mode.
- **Interactive Radius:** Controlled curvature (`rounded-xl` / `12px`) on buttons, nav tabs, and icon badges.
- **Pill Radius:** Full capsule curvature (`rounded-full` / `9999px`) on eyebrow chips, status tags, and timeline nodes.
- **Hairline Stroke:** Constant 1px border width across all containers.

## Components

### Buttons
- **Primary CTA Button**:
  - Shape: Rounded-xl (`12px`)
  - Background: Gradient from Quantum Cyan to Cobalt Horizon (`linear-gradient(to right, #06b6d4, #2563eb)`)
  - Text: Inverse Ink (`#020617`, bold, `14px`)
  - Padding: `16px 32px` (`px-8 py-4`)
  - Hover: `brightness-110` with expanded cyan glow (`box-shadow: 0 20px 25px -5px rgba(6, 182, 212, 0.20)`)
- **Secondary Glass Button**:
  - Shape: Rounded-xl (`12px`)
  - Background: Translucent white (`rgba(255, 255, 255, 0.05)` with `backdrop-blur-xl`)
  - Border: 1px `rgba(255, 255, 255, 0.10)`
  - Text: Pure White (`#ffffff`, semibold, `14px`)
  - Hover: `rgba(255, 255, 255, 0.10)` background, `rgba(255, 255, 255, 0.20)` border

### Navigation Tabs
- **Default State**: Text Muted Slate (`#94a3b8`), padding `8px 14px`, transition `200ms`.
- **Hover State**: Text Pure White, background `rgba(255, 255, 255, 0.05)`.
- **Active State**: Text Pure White, background `rgba(255, 255, 255, 0.10)`, border `rgba(255, 255, 255, 0.20)`, shadow `shadow-cyan-500/10`.

### Cards & Containers
- **Corner Style**: Rounded-2xl (`16px`)
- **Background**: Translucent frosted glass (`rgba(255, 255, 255, 0.02)`) with `backdrop-blur-xl`
- **Border**: 1px `rgba(255, 255, 255, 0.10)` transitioning to `rgba(6, 182, 212, 0.30)` on hover
- **Internal Padding**: `32px` (`p-8`, expanding to `48px` on desktop hero card)

### Status & Eyebrow Chips
- **Style**: Rounded-full pill, background `rgba(255, 255, 255, 0.04)`, border `rgba(255, 255, 255, 0.10)`
- **Typography**: Monospace, `12px`, uppercase, tracking `0.05em`, text Quantum Cyan (`#22d3ee`)

### Signature Component: Hierarchical Recommendation Card
- **Structure**: Frosted glass container holding a top quote icon, italicized testimonial body, and a structured lower metadata footer divided by a 1px boundary (`border-white/10`).
- **Interaction**: Subtle card hover highlighting the recommender's name to Quantum Cyan.

## Do's and Don'ts

### Do:
- **Do** preserve the deep `#080B11` void as the primary background for all views.
- **Do** maintain the 1px frosted border convention (`rgba(255, 255, 255, 0.10)`) across all cards and interactive components.
- **Do** use monospace exclusively for dates, credentials, metrics, and eyebrow chips.
- **Do** keep button text on primary gradient buttons dark (`#020617`) for maximum WCAG AA contrast.
- **Do** ensure all tab transitions and hover effects execute within 200–300ms ease transitions.

### Don't:
- **Don't** introduce solid, opaque grey backgrounds; all structural surfaces must retain frosted translucency (`backdrop-blur`).
- **Don't** flood body copy or large backgrounds with cyan; cyan is an active beacon.
- **Don't** use sharp rectangular corners (`0px` border-radius); adhere strictly to the `12px` / `16px` curve scale.
- **Don't** introduce competing accent colors outside the defined Quantum Cyan, Cobalt Horizon, and Signal Emerald roles.

