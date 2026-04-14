# Design System Document: Precision Sourcing & Global Logic

## 1. Overview & Creative North Star
**Creative North Star: The Architectural Nexus**

This design system is built for an international trade and product sourcing powerhouse. We are moving away from the "cluttered logistics" aesthetic and toward a "high-tech architectural" experience. Inspired by the clean, functional beauty of Australian tech leaders like Stripe and Notion, the system prioritizes **Linear Precision** and **Tonal Depth**. 

The brand identity functions as a digital curator: authoritative, clean, and impossibly efficient. By using intentional asymmetry, ultra-fine typography scales, and a departure from traditional borders, we create a UI that feels like a premium, custom-tooled dashboard rather than a generic template.

---

## 2. Colors
Our palette is anchored by the signature "International Trade Blue" found in the brand's business card, supported by a sophisticated range of neutral surfaces that mimic high-end hardware and frosted glass.

### Palette Highlights
*   **Primary (`#004377`):** The core of the brand. Use for critical actions and brand markers.
*   **Surface Hierarchy:** Instead of white space, use tonal shifts.
    *   `surface` (#f8f9ff): The base canvas.
    *   `surface-container-low` (#f3f3f9): For secondary sections.
    *   `surface-container-highest` (#e1e2e8): For active states or emphasized cards.

### The "No-Line" Rule
To maintain a high-end startup aesthetic, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. A `surface-container-low` card sitting on a `surface` background provides all the definition a professional eye needs.

### Glass & Gradient Implementation
Use **Glassmorphism** for floating navigational elements or modal overlays. Apply `surface` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** For Hero CTAs, use a linear gradient from `primary` (#004377) to `primary_container` (#1d5b96) at a 135-degree angle to provide a subtle "metallic" sheen.

---

## 3. Typography
The typography system uses a dual-font approach to balance "Tech Innovation" with "Global Authority."

*   **Display & Headlines (Manrope):** A modern, geometric sans-serif that conveys precision. 
    *   *Role:* Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em).
*   **Title & Body (Inter):** The gold standard for legibility in dense data environments.
    *   *Role:* Use `body-md` (0.875rem) for the majority of the interface. 
*   **Hierarchy Note:** Lean heavily on the `label-md` and `label-sm` styles for metadata and sourcing specs. These should often be in all-caps with a `0.05em` letter-spacing to mimic technical blueprints.

---

## 4. Elevation & Depth
We eschew the "drop shadow" of the 2010s in favor of **Tonal Layering** and **Ambient Light.**

*   **The Layering Principle:** Stack containers to create depth. A `surface-container-lowest` card placed atop a `surface-container-low` section creates a natural "lift" without visual noise.
*   **Ambient Shadows:** When an element must float (e.g., a dropdown), use a "shadow-tint." The shadow color must be a 6% opacity version of `on-surface` (#191c20) with a `32px` blur and `12px` Y-offset.
*   **The "Ghost Border" Fallback:** If a container lacks contrast against its parent, use a **Ghost Border**: `outline-variant` (#c2c7d1) at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background, `on-primary` text. Radius: `md` (0.375rem). Use a subtle inner-glow (top-down white 10% opacity) to give a tactile feel.
*   **Secondary:** `surface-container-highest` background. No border.
*   **Tertiary:** Text-only in `primary` with a `0.25rem` bottom-aligned "Stripe-style" bar that appears on hover.

### Inputs & Search
*   **Field Style:** Use `surface-container-lowest` as the background. On focus, transition the background to `surface` and apply a 1px "Ghost Border" in `primary`.
*   **Sourcing Cards:** Forbid dividers. Use a `1.5rem` vertical spacing gap and background shifts (`surface-variant`) to distinguish between different product listings.

### Sourcing Status Chips
*   Small, `xl` (0.75rem) rounded pills. 
*   **In-Transit:** `secondary_container` background with `on_secondary_container` text.
*   **Verified:** `primary_container` background with `on_primary` text.

### Data Grids
*   In place of horizontal lines, use alternating row fills of `surface` and `surface-container-low`. This creates a "Linear" aesthetic reminiscent of code editors.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts for Hero sections (e.g., text left-aligned, image overlapping the container edge).
*   **Do** lean into the "Stripe" aesthetic—ultra-clean, high-density information, and subtle tech flourishes like small circuit-style iconography (referencing the 'N' logo).
*   **Do** use the `DEFAULT` (0.25rem) or `md` (0.375rem) radius for most elements; it feels more "engineered" than fully rounded corners.

### Don't
*   **Don't** use black (#000000). Use `on-surface` (#191c20) for all high-contrast text.
*   **Don't** use standard "Material Design" cards with heavy shadows. Our depth is achieved through color, not light blockage.
*   **Don't** use dividers to separate list items. Use white space and the `surface-container` tiers to group content.
*   **Don't** clutter the UI. If a piece of information isn't vital to the sourcing process, hide it behind a progressive disclosure (tooltip or "View Details" link).

---

## 7. Spacing Scale
Maintain a rigid 4px/8px grid. To achieve the "Australian Tech Startup" feel, prioritize vertical density (minimal top/bottom padding) while maintaining wide horizontal margins to let the content breathe. 

*   **Standard Component Gap:** `1rem`
*   **Section Vertical Padding:** `4rem` to `6rem`
*   **Card Internal Padding:** `1.25rem` (tight, professional, efficient).