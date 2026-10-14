---
name: Academic Attendance Companion
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dadf'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#ebeef3'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#e0e3e8'
  on-surface: '#181c20'
  on-surface-variant: '#454652'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f6'
  outline: '#757684'
  outline-variant: '#c5c5d5'
  surface-tint: '#4355bb'
  primary: '#283ba1'
  on-primary: '#ffffff'
  primary-container: '#4254ba'
  on-primary-container: '#d0d5ff'
  inverse-primary: '#bbc3ff'
  secondary: '#585f66'
  on-secondary: '#ffffff'
  secondary-container: '#dce3eb'
  on-secondary-container: '#5e656c'
  tertiary: '#703600'
  on-tertiary: '#ffffff'
  tertiary-container: '#944900'
  on-tertiary-container: '#ffcdad'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee0ff'
  primary-fixed-dim: '#bbc3ff'
  on-primary-fixed: '#000f5c'
  on-primary-fixed-variant: '#283ba2'
  secondary-fixed: '#dce3eb'
  secondary-fixed-dim: '#c0c7cf'
  on-secondary-fixed: '#151c22'
  on-secondary-fixed-variant: '#41484e'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb785'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#723700'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e3e8'
typography:
  headline-lg:
    fontFamily: Roboto Flex
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Roboto Flex
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Roboto Flex
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-desktop: 1rem
  margin: 1rem
  margin-desktop: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system embodies a calm, utilitarian, and dependable aesthetic optimized for academic environments. Drawing functional inspiration from Bootstrap 5's systematic predictability, it eliminates visual noise to prioritize fast daily verification, roll calls, and schedule tracking.

Key attributes:
- **Calm & Utilitarian:** Structured, deliberate, and free of gratuitous ornamentation. The interface feels pragmatic, focused, and immediately intelligible.
- **Academic Reliability:** Institutional clarity without bureaucratic stiffness. Information hierarchy directly supports rapid scanning by educators and students.
- **Physical Economy:** Relies entirely on structural borders, precise spacing, and flat surface segregation. Strictly prohibits gradients, skeumorphic textures, and drop shadows.

## Colors

The palette is engineered for high legibility under varying classroom lighting conditions. It emphasizes clear informational signaling over decorative tinting.

- **Primary (`#4254BA`):** Used for focal action points, active tab indicators, selected states, and primary navigational paths.
- **Secondary / Muted (`#5C636A`):** Applied to metadata, secondary labels, helper text, and subtle inactive states.
- **Body Neutral (`#212529`):** High-contrast, near-black tone reserved for base typography, headings, and critical metrics.
- **Canvas (`#EEEEF1`):** A cool, low-strain neutral backdrop that separates cards and elevated modules without harsh contrasts.
- **Card Surface (`#FFFFFF`):** Crisp white base layer for interactive containers and list groupings, bounded by a 1px solid `#E3E5EC` structural border.

### Status Tokens (Background + Content Pairings)
Status indicators must strictly adhere to semantic pairings to ensure accessible contrast:
- **Success / Present:** Text `#0D6E45` on Surface `#E3F0EA`
- **Warning / Review:** Text `#855A00` on Surface `#FFF4D2`
- **Danger / Absent:** Text `#B42318` on Surface `#FDECEA`

## Typography

Typography is set exclusively in **Roboto Flex**, selected for its systematic neutrality, robust tabular figures, and exceptional legibility across mobile displays.

Implementation guidelines:
- **Minimum Font Floor:** In accordance with accessibility and fast readability mandates, no typography element may render below `14px` (`body-md`, `label-md`, `label-sm`).
- **Tabular Figures:** When presenting dates, lecture codes, room numbers, and attendance ratios (e.g., `28/30`), activate `font-variant-numeric: tabular-nums` to maintain aligned vertical scanning across list items.
- **Hierarchy Separation:** Use font weight (`700`, `600`, `500`, `400`) rather than drastic size differentials to establish rhythm on small screens.

## Layout & Spacing

The layout is built around a single-column fluid mobile canvas that standardizes margins to guarantee that tap targets remain thumb-accessible while maximizing vertical content density.

- **Grid Architecture:** 4-column fluid mobile structure adapting to a constrained single/dual column layout on tablet breakpoints (max container width 640px for mobile app viewports).
- **Base Canvas Margin:** 16px (`margin: 1rem`) provides standard edge clearance, protecting cards from touching viewport edges.
- **Touch Geometry:** All actionable controls (buttons, row selections, filters, toggles) must strictly maintain a minimum tap target dimension of `48px x 48px`, independent of their internal visual padding.
- **Vertical Spacing:** Internal card stacking uses `space-md` (12px), while distinct functional groups and section headers enforce `space-xl` (24px).

## Elevation & Depth

This system avoids ambient shadows, blur materials, and pseudo-skeuomorphic depth. Hierarchy is established exclusively through surface segregation and low-contrast outlines:

- **Flat Layering:** Visual depth is produced by the interaction between the `#EEEEF1` page background and the `#FFFFFF` container surfaces.
- **Low-Contrast Outlines:** Every card, container, and input field is bounded by a crisp 1px solid border in `#E3E5EC`. 
- **States & Selection:** Hover, focus, and selected states never elevate along a z-axis; depth shifts are expressed through border color transitions (e.g., shifts to `#4254BA` or subtle background tinting `#F8F9FA`).
- **Zero-Shadow Rule:** Explicitly set `box-shadow: none` across modals, bottom sheets, sticky footers, and dropdown menus. Modals and drawers rely on a solid 1px top or bounding border with a flat 40% neutral scrim overlay.

## Shapes

The shape system enforces two distinct radii across the product ecosystem to balance containment with tactile touch expectations:

- **Cards & Containers (12px):** All primary content containers, attendance summary cards, and group panels use a fixed border radius of `12px`.
- **Buttons, Badges & Inputs (8px):** All interactive controls—such as action buttons, input fields, dropdown toggles, and status badges—feature a standardized `8px` corner radius.
- **Pills/Circles (Exceptions):** Circular avatars (e.g., student profile portraits) retain a 50% border radius. Segmented pill tabs are forbidden; controls conform strictly to the 8px geometric standard.

## Components

### Buttons
- **Primary:** Background `#4254BA`, text `#FFFFFF`, border none, radius `8px`. Minimum height `48px`. Active state shifts to `#354396`.
- **Secondary / Outline:** Background `#FFFFFF`, text `#212529`, border 1px solid `#E3E5EC`, radius `8px`. Minimum height `48px`. Active state transitions background to `#F8F9FA`.
- **Destructive:** Background `#FDECEA`, text `#B42318`, border 1px solid `#FECDCA`, radius `8px`. Minimum height `48px`.

### Cards
- **Structure:** Background `#FFFFFF`, border 1px solid `#E3E5EC`, border radius `12px`, padding 16px (`space-lg`).
- **Usage:** Used to group course sessions, student rosters, and aggregate attendance statistics. Cards never use shadows. When interactive, tap feedback is conveyed via a brief transition to background `#F8F9FA`.

### Status Badges
- **Dimensions:** Minimum height `24px`, horizontal padding `8px`, vertical padding `2px`, border radius `8px`.
- **Typography:** Set in `label-sm` (`14px`, weight `500`).
- **Variants:**
  - *Present / Success:* Background `#E3F0EA`, text `#0D6E45`, border 1px solid transparent.
  - *Review / Warning:* Background `#FFF4D2`, text `#855A00`, border 1px solid transparent.
  - *Absent / Danger:* Background `#FDECEA`, text `#B42318`, border 1px solid transparent.

### Inputs & Form Fields
- **Container:** Minimum height `48px`, background `#FFFFFF`, border 1px solid `#E3E5EC`, border radius `8px`, horizontal padding `12px`.
- **Typography:** Value text `#212529`, placeholder text `#5C636A`, size `14px` (`body-md`).
- **Focus State:** Border color shifts to `#4254BA` with a 1px outline of the same tone. No blurred glow effects.

### Checkboxes & Radio Controls
- **Hitbox:** Bound within a `48px x 48px` transparent touch wrapper.
- **Indicator:** Square with 4px radius (checkbox) or circle (radio), dimension `20px x 20px`.
- **Border:** 1.5px solid `#5C636A`. Checked state changes fill to `#4254BA` with border `#4254BA` and an internal white vector glyph.

### List Items & Roster Rows
- **Dimensions:** Minimum row height `56px` to ensure effortless touch discrimination.
- **Divider:** 1px solid `#E3E5EC` placed along the bottom edge, indented 16px or full bleed depending on grouped card boundaries.
- **Layout:** Student identifier / time left-aligned (`body-md`, `#212529`), secondary metadata beneath (`body-md`, `#5C636A`), and direct status badge or 3-way attendance switch right-aligned.