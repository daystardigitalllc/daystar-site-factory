# Daystar Site Factory - Lego Component System

This document catalogs the modular UI "Lego blocks" available in the starter template. When generating a website, the AI (or developer) can pick, choose, and assemble these components inside `src/pages/index.astro` to construct the perfect layout matching the client's industry and target UI/UX.

---

## 🧱 The Lego Catalog (`src/components/`)

### 🌅 Hero Blocks (Header & Entrances)
*   **[`HeroSplit.astro`](file:///templates/starter/src/components/Hero.astro)**: Best for standard professional services. Split layout with a detailed form card on the right and benefits/badges on the left.
*   **[`HeroGlass.astro`](file:///templates/starter/src/components/Hero.astro)**: Best for luxury brands (salons, spas, high-end remodelers). Centered layout surrounded by glowing ambient blobs and a blur-filter CTA card.
*   **[`HeroVideo.astro`](file:///templates/starter/src/components/Hero.astro)** (Oak City style): Best for contractor/home maintenance services (tree care, roofing, plumbing). Features centered emblem logo, loop-enabled HTML5 background video, and animated typewriter title hook.

### 🎀 Highlight ribbons
*   **[`Marquee.astro`](file:///templates/starter/src/components/Marquee.astro)**: Infinite looping marquee track. Fits right below the Hero to immediately build trust using FontAwesome icons.

### 🛠️ Services Grids
*   **[`Services.astro`](file:///templates/starter/src/components/Services.astro) (Standard)**: Renders service card details in a clean flat grid with numbered badge indicators.
*   **[`Services.astro`](file:///templates/starter/src/components/Services.astro) (Aspect Image)**: Renders cards featuring a top-aspect ratio image block and high-contrast link anchors. Perfect for visual service industries (landscaping, remodeling).

### 🖼️ Showcase & Work Portfolios
*   **[`Gallery.astro`](file:///templates/starter/src/components/Gallery.astro)**: Renders a 4-column portfolio overlay grid. Shows location badges, dynamic job labels, and hover details.
*   **[`GalleryScrollChoreography.astro`](file:///templates/starter/src/components/GalleryScrollChoreography.astro)**: Cinematic scroll-driven showcase. Four quadrant project photos assemble into a grid as the visitor scrolls, then a hero "signature work" photo expands to fill the screen with a caption and CTA. Pure Astro + vanilla JS (scroll listener + CSS transforms, no framer-motion/React), respects `prefers-reduced-motion`. Best for visually strong portfolios where you want one "wow" moment mid-page: contractors/remodelers, landscapers, tree care, luxury builders, photographers, salons/spas. Use sparingly (one per page, it needs 400vh of scroll room) and pair with a lighter `Gallery.astro` grid elsewhere if more project photos are needed.
    *   **Props**: all optional, falling back to `content.json`'s `home.scrollShowcase` block (and `business.json` for the CTA text): `badgeOverride`, `headingOverride`, `subtitleOverride`, `imagesOverride` (`{ topLeft, topRight, bottomLeft, bottomRight, hero }`, each `{ src, alt }`), `heroCaptionOverride`, `ctaTextOverride`, `ctaHrefOverride`.
*   **[`CardsCarousel.astro`](file:///templates/starter/src/components/CardsCarousel.astro)**: "Apple-style" horizontal cards carousel (concept inspired by Aceternity UI's Apple Cards Carousel). Tall image cards scroll-snap across the section with arrow controls; clicking a card opens a fade/scale modal with an expanded image and description. Pure Astro + vanilla JS (no React, no framer-motion, no `useOutsideClick` hook — a small self-contained modal with backdrop-click/Escape/close-button dismissal). Good as a secondary "get to know us" section below Services — services-based businesses, multi-offering brands, or anywhere you want a scannable, tappable summary of several offerings/guarantees in one row. Not a replacement for `Gallery.astro`/`GalleryScrollChoreography.astro` (those are photo-portfolio focused); this one is closer to a features/highlights carousel.
    *   **Props**: all optional, falling back to `content.json`'s `home.cardsCarousel` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, category, title, content }`, where `content` is an array of paragraph strings shown in the expanded modal).

### 💬 Social Proof & Reviews
*   **[`Reviews.astro`](file:///templates/starter/src/components/Reviews.astro) (Grid)**: Standard 3-column masonry grid layout. Displays client name, locations, and ratings.
*   **[`Reviews.astro`](file:///templates/starter/src/components/Reviews.astro) (Snap Slider)**: Touch-enabled horizontal scrolling swipe track. Perfect for mobile UI/UX.

### ❓ FAQ Layouts
*   **[`FAQ.astro`](file:///templates/starter/src/components/FAQ.astro) (Accordion)**: Standard single-column centered list of toggle-able questions.
*   **[`FAQ.astro`](file:///templates/starter/src/components/FAQ.astro) (Double Column)**: Left column features a sticky lead CTA, right column houses the accordions. Great for heavy FAQ list profiles.

---

## 🤖 Instructions for AI Agents (Antigravity & Claude)

When you receive a prompt to generate or modify a client website, **do not feel bound to a single static layout**. Follow this selection process:

1.  **Analyze Industry & Vibe**:
    *   *Contractors (Roofers, Tree Crews, Painters)*: Choose `HeroVideo` (or `HeroContractor`), `Marquee`, `Services` (Aspect Image), `Reviews` (Snap Slider), `Gallery` (or `GalleryScrollChoreography` for a more premium, visual-heavy brand), and `FAQ` (Double Column).
    *   *Professional/B2B Services (Accountants, Agencies)*: Choose `HeroSplit`, `Services` (Standard), `Reviews` (Grid), and `FAQ` (Accordion).
    *   *Luxury/Lifestyle (Spas, Salons, Boutique Stores)*: Choose `HeroGlass` (with custom background blurs), `Services` (Standard), and `Reviews` (Grid).
2.  **Assemble the Homepage**:
    *   Open `src/pages/index.astro` in the client directory.
    *   Import only the selected components.
    *   Inject them into the `<MainLayout>` in the logically optimal layout flow.
