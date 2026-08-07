# Daystar Site Factory - Lego Component System

This document catalogs the modular UI "Lego blocks" available in the starter template. When generating a website, the AI (or developer) can pick, choose, and assemble these components inside `src/pages/index.astro` to construct the perfect layout matching the client's industry and target UI/UX.

---

## 🧱 The Lego Catalog (`src/components/`)

### 🧭 Navigation Bars
*   **[`Header.astro`](file:///templates/starter/src/components/Header.astro)**: Standard full-width sticky header with Services/Locations dropdowns. The safe default — use for most sites.
*   **[`NavbarPill.astro`](file:///templates/starter/src/components/NavbarPill.astro)**: Floating, centered pill-shaped navbar (concept inspired by the "Navbar Pill" style in Aceternity UI's navbar collection), rebuilt from scratch in Astro + Tailwind. `position: fixed` at the top with a small logo, simple anchor links, a CTA pill, and a collapsible mobile menu — condenses its shadow on scroll via a tiny vanilla-JS listener. Best for modern, minimal brands (salons/spas, boutique agencies, startups-y contractors) where a full-width bar feels too heavy. **Important**: it floats over content, so the page's first section needs top padding (e.g. `pt-28`) to clear it, and it doesn't include the Services/Locations dropdowns `Header.astro` has — use it in place of `Header.astro`, not alongside it.
    *   **Props**: all optional, falling back to `content.json`'s `navbarPill.links` and `business.json` for the CTA: `navLinksOverride` (array of `{ label, href }`), `ctaTextOverride`, `ctaHrefOverride`.

### 🌅 Hero Blocks (Header & Entrances)
*   **[`HeroSplit.astro`](file:///templates/starter/src/components/Hero.astro)**: Best for standard professional services. Split layout with a detailed form card on the right and benefits/badges on the left.
*   **[`HeroGlass.astro`](file:///templates/starter/src/components/Hero.astro)**: Best for luxury brands (salons, spas, high-end remodelers). Centered layout surrounded by glowing ambient blobs and a blur-filter CTA card.
*   **[`HeroVideo.astro`](file:///templates/starter/src/components/Hero.astro)** (Oak City style): Best for contractor/home maintenance services (tree care, roofing, plumbing). Features centered emblem logo, loop-enabled HTML5 background video, and animated typewriter title hook.
*   **[`HeroAnimatedEntry.astro`](file:///templates/starter/src/components/HeroAnimatedEntry.astro)**: Centered, minimal hero with a staggered word-by-word entrance animation on the headline (concept inspired by the "Simple with entry animation" hero in Aceternity UI's hero collection). Pure CSS animation (per-word `animation-delay`, no JS), respects `prefers-reduced-motion`. Badge + headline + subtitle + a primary CTA and a secondary "Call Us" CTA. Best for brands that want a punchy, fast-loading, animation-forward first impression without a form or video — startups-y service brands, agencies, or as a lighter opener above `Services.astro`.
    *   **Props**: all optional, falling back to `content.json`'s `home.heroAnimated` block (and `business.json` for phone/CTA): `badgeOverride`, `headingOverride`, `subtitleOverride`, `primaryCtaTextOverride`, `primaryCtaHrefOverride`, `secondaryCtaTextOverride`, `secondaryCtaHrefOverride`.
*   **[`HeroCozy.astro`](file:///templates/starter/src/components/HeroCozy.astro)**: Warm, elegant, centered product-focused hero section. Features a serif font heading, soft cream lighting, and a large elevated product/device showcase mockup card in the center. Best for premium consumer hardware, digital products, apps, or lifestyle service brands wanting a cozy, high-end feel.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `primaryCtaTextOverride`, `primaryCtaHrefOverride`, `imageSrcOverride`, `imageAltOverride`.
*   **[`ScrollGradientHero.astro`](file:///templates/starter/src/components/ScrollGradientHero.astro)**: Premium tech/industrial landing page opener with parallax scrolling background image, ambient glowing live status indicators, and an address/lead qualification search bar. Best for green-energy, climate-tech, smart-home systems, or industrial contractor services.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `buttonTextOverride`, `placeholderOverride`, `bgImageOverride`.
*   **[`HeroRecruit.astro`](file:///templates/starter/src/components/HeroRecruit.astro)**: High-impact corporate/agency hero section featuring a dark semi-transparent image background overlay, bold left-aligned typography with capitalized orange highlights, and a clean outline button link.
    *   **Props**: `badgeOverride`, `headingOverride`, `buttonTextOverride`, `buttonHrefOverride`, `bgImageOverride`.
*   **[`HeroContractor.astro`](file:///templates/starter/src/components/HeroContractor.astro)**: High-fidelity contractor landing page hero. Renders a split layout with bold headings and benefit bullets on the left, and a floating white estimate request form card on the right.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `bgImageOverride`, `formTitle`.
*   **[`HeroChalet.astro`](file:///templates/starter/src/components/HeroChalet.astro)**: Cozy, warm alpine-editorial hero section featuring a full-width background photo, bold serif typography, custom bulleted highlights, and a signature **mountain-ridge SVG divider** that clips the bottom edge of the banner.
    *   **Props**: `eyebrowOverride`, `headingOverride`, `subtitleOverride`, `primaryCtaText`, `primaryCtaHref`, `secondaryCtaText`, `secondaryCtaHref`, `bgImageOverride`, `dividerColorClass`.
*   **[`HeroHealNet.astro`](file:///templates/starter/src/components/HeroHealNet.astro)**: Premium digital healthcare hero in the HealNet theme. Features gradient-colored titles, a primary action chevron link, and three floating badges (avatars/rating grid, appointment badge, quote block) overlaying the specialist photo.
    *   **Props**: `headingOverride`, `subTitleHighlight`, `subtitleOverride`, `primaryCtaText`, `primaryCtaHref`, `imageSrcOverride`, `brandLogosOverride`.
*   **[`HeroKepler.astro`](file:///templates/starter/src/components/HeroKepler.astro)**: Neo-brutalist Saturn-themed opener with background radial glows, floating stickers, a custom hand-drawn SVG title underline, and an active revolving CSS planet orbit system on the right.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `primaryCtaText`, `primaryCtaHref`, `secondaryCtaText`, `secondaryCtaHref`.
*   **[`HeroChip.astro`](file:///templates/starter/src/components/HeroChip.astro)**: A pill-shaped micro-action alert badge. Designed to sit inside heroes or headers to highlight news, versions, or special discount promos.
    *   **Props**: `text`, `link`, `icon`, `class`.
*   **[`PromoBanner.astro`](file:///templates/starter/src/components/PromoBanner.astro)**: High-visibility announcement bar that sits at the very top of the webpage. Features a CTA link and a persistent dismiss close button that saves visitor preferences in LocalStorage.
    *   **Props**: `text`, `ctaText`, `ctaHref`, `id`, `class`.

### 🎀 Highlight ribbons
*   **[`Marquee.astro`](file:///templates/starter/src/components/Marquee.astro)**: Infinite looping marquee track. Fits right below the Hero to immediately build trust using FontAwesome icons.

### 🛠️ Services Grids
*   **[`Services.astro`](file:///templates/starter/src/components/Services.astro) (Standard)**: Renders service card details in a clean flat grid with numbered badge indicators.
*   **[`Services.astro`](file:///templates/starter/src/components/Services.astro) (Aspect Image)**: Renders cards featuring a top-aspect ratio image block and high-contrast link anchors. Perfect for visual service industries (landscaping, remodeling).
*   **[`ServicesRecruit.astro`](file:///templates/starter/src/components/ServicesRecruit.astro)**: Clean, high-shadow cards grid where hover states lift and remove the shadow (`hover:shadow-none`) to create a reverse hover-depth effect. Excellent for corporate agencies or professional consultants.
    *   **Props**: `badgeOverride`, `headingOverride`, `servicesOverride` (array of `ServiceItem` objects).
*   **[`ServicesChalet.astro`](file:///templates/starter/src/components/ServicesChalet.astro)**: Cozy, warm alpine-style service list. Cards are detailed with large faded background indexes (`01`, `02`), clean outline SVG icon shapes, and border highlights.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `servicesOverride` (array of `ServiceItem` objects).
*   **[`AppointmentFormHealNet.astro`](file:///templates/starter/src/components/AppointmentFormHealNet.astro)**: Inline 4-column scheduling booking bar housed in a rounded, border-accented soft gradient box. Renders labeled fields with lucide icon symbols (Email, Phone, Date) followed by a gradient submit button.
    *   **Props**: `headingOverride`, `submitButtonText`.
*   **[`ServicesHealNet.astro`](file:///templates/starter/src/components/ServicesHealNet.astro)**: Integrated digital services grid in the HealNet theme. Features a 3-column layout where the primary featured service card spans two columns, detailed with clean outline SVGs, thin blue borders, and soft background gradients.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `servicesOverride` (array of `ServiceItem` values).
*   **[`PestRibbon.astro`](file:///templates/starter/src/components/PestRibbon.astro)**: Accent red banner showing service categories. Renders a grid of rounded white pill boxes containing custom icons and labels, completed with an accent bottom callout.
    *   **Props**: `badgeOverride`, `headingOverride`, `pestsOverride` (array of `PestItem` objects), `ctaText`, `ctaHref`.
*   **[`PlansThreeTier.astro`](file:///templates/starter/src/components/PlansThreeTier.astro)**: Three-tier service plan comparison cards matching the WordPress mockup colors: Gold, Red, and Dark Grey accent banners, detailed checklists, and request CTAs.
    *   **Props**: `badgeOverride`, `headingOverride`, `plansOverride` (array of `Plan` values).
*   **[`FeaturesKepler.astro`](file:///templates/starter/src/components/FeaturesKepler.astro)**: Neo-brutalist features card board. Renders 6 staggered rotating cards (`rotate-1` / `-rotate-1`) that flatten and pop with deep offset borders and shadow layers on hover. Features retro geometric symbols (triangles, squares, rings).
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `featuresOverride` (array of `FeatureItem` structures).
*   **[`PricingKepler.astro`](file:///templates/starter/src/components/PricingKepler.astro)**: Staggered neo-brutalist plan tier table. Standard cards flank a highlighted center card scaled up with an elevated "MOST POPULAR" banner. Features a custom billing period switcher (Monthly/Yearly) to toggle rates.
    *   **Props**: `badgeOverride`, `headingOverride`, `plansOverride` (array of `Plan` values).
*   **[`PricingTable.astro`](file:///templates/starter/src/components/PricingTable.astro)**: High-performance plan comparison table. Features responsive cards, highlight badges, custom feature checklists, and a billing cycle toggle (Monthly vs. Annually) that dynamically swaps pricing and notes.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `plansOverride` (array of `Plan` items), `currencySymbol`.
*   **[`ProductShowcaseChoreography.astro`](file:///templates/starter/src/components/ProductShowcaseChoreography.astro)**: Interactive product card detail showcase. Features thumbnail image swapper controls, color/volume variant selectors, and a mock "Add to Cart" success toast popup.
    *   **Props**: `badgeOverride`, `titleOverride`, `priceOverride`, `descriptionOverride`, `imagesOverride` (array of `ProductImage` details), `sizes`, `colors`.
*   **[`PricingMatrix.astro`](file:///templates/starter/src/components/PricingMatrix.astro)**: Granular feature comparison matrix. Compares 3 plans side-by-side across detailed row items (e.g. checkmarks, custom labels).
    *   **Props**: `badgeOverride`, `headingOverride`, `matrixGroupsOverride` (array of comparison specs).

### 🖼️ Showcase & Work Portfolios
*   **[`Gallery.astro`](file:///templates/starter/src/components/Gallery.astro)**: Renders a 4-column portfolio overlay grid. Shows location badges, dynamic job labels, and hover details.
*   **[`GalleryScrollChoreography.astro`](file:///templates/starter/src/components/GalleryScrollChoreography.astro)**: Cinematic scroll-driven showcase. Four quadrant project photos assemble into a grid as the visitor scrolls, then a hero "signature work" photo expands to fill the screen with a caption and CTA. Pure Astro + vanilla JS (scroll listener + CSS transforms, no framer-motion/React), respects `prefers-reduced-motion`. Best for visually strong portfolios where you want one "wow" moment mid-page: contractors/remodelers, landscapers, tree care, luxury builders, photographers, salons/spas. Use sparingly (one per page, it needs 400vh of scroll room) and pair with a lighter `Gallery.astro` grid elsewhere if more project photos are needed.
    *   **Props**: all optional, falling back to `content.json`'s `home.scrollShowcase` block (and `business.json` for the CTA text): `badgeOverride`, `headingOverride`, `subtitleOverride`, `imagesOverride` (`{ topLeft, topRight, bottomLeft, bottomRight, hero }`, each `{ src, alt }`), `heroCaptionOverride`, `ctaTextOverride`, `ctaHrefOverride`.
*   **[`CardsCarousel.astro`](file:///templates/starter/src/components/CardsCarousel.astro)**: "Apple-style" horizontal cards carousel (concept inspired by Aceternity UI's Apple Cards Carousel). Tall image cards scroll-snap across the section with arrow controls; clicking a card opens a fade/scale modal with an expanded image and description. Pure Astro + vanilla JS (no React, no framer-motion, no `useOutsideClick` hook — a small self-contained modal with backdrop-click/Escape/close-button dismissal). Good as a secondary "get to know us" section below Services — services-based businesses, multi-offering brands, or anywhere you want a scannable, tappable summary of several offerings/guarantees in one row. Not a replacement for `Gallery.astro`/`GalleryScrollChoreography.astro` (those are photo-portfolio focused); this one is closer to a features/highlights carousel.
    *   **Props**: all optional, falling back to `content.json`'s `home.cardsCarousel` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, category, title, content }`, where `content` is an array of paragraph strings shown in the expanded modal).
*   **[`CompareSlider.astro`](file:///templates/starter/src/components/CompareSlider.astro)**: Before/after image comparison slider (concept inspired by Aceternity UI's Compare component) — drag or hover to reveal the "before" photo over the "after" photo via a `clip-path` reveal, with an optional autoplay ping-pong mode. Pure Astro + vanilla JS (pointer events, no React/framer-motion). Renders a responsive grid of comparisons, so it works with one job or several. Best for any visually-transformative service: roofing, remodeling, landscaping/lawn care, painting, tree removal, storm cleanup, deck/fence building. Skip it for businesses without a clear visual before/after (accountants, consultants, etc.).
    *   **Props**: all optional, falling back to `content.json`'s `home.compareShowcase` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ before: { src, alt }, after: { src, alt }, label }`), `modeOverride` (`'drag' | 'hover'`, default `'drag'`), `initialPercentageOverride` (0-100, default `50`), `showHandleOverride` (boolean, default `true`), `autoplayOverride` (boolean, default `false`), `autoplayDurationOverride` (ms, default `4000`).
*   **[`StoryGrid.astro`](file:///templates/starter/src/components/StoryGrid.astro)**: Clean, portrait-style horizontal media rail (shows 4 portrait card slots) with media play indicator buttons and smooth zoom hover effects. Best for showcasing customer testimonial videos, real-use stories, or social media showcases.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, label, title }`), `ctaTextOverride`, `ctaHrefOverride`.
*   **[`UspScrollCards.astro`](file:///templates/starter/src/components/UspScrollCards.astro)**: Split screen scroll layout where desktop scrolling locks text descriptions on the left, while corresponding photography slide-stacks on the right in responsive coordination. Best for high-impact brand benefits, values lists, or core business guarantees.
    *   **Props**: `badgeOverride`, `headingOverride`, `itemsOverride` (array of `{ surtitle, title, description, src, alt }`).
*   **[`StepScroller.astro`](file:///templates/starter/src/components/StepScroller.astro)**: Stacking card timeline scroller. Features cards that sticky-stack on top of each other as the user scrolls, combined with custom live-drawing SVG line charts and interface simulations. Perfect for multi-step onboarding explanations, "how it works" pages, or complex services walkthroughs.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `stepsOverride` (array of `{ label, title, subTitle, description, ctaText, ctaHref, graphicType: 'phone' | 'install' | 'graph' }`).
*   **[`InteractiveVideoPopup.astro`](file:///templates/starter/src/components/InteractiveVideoPopup.astro)**: Video thumbnail card that spawns a full-screen iframe video lightbox modal on click. Features a pulsing play button ripple and escape key capture to close.
    *   **Props**: `badgeOverride`, `headingOverride`, `thumbnailSrc`, `videoEmbedUrl`.
*   **[`MasonryMediaFilter.astro`](file:///templates/starter/src/components/MasonryMediaFilter.astro)**: Filterable project gallery grid using vanilla JS + CSS transforms. Features active tag filters that dynamically show/hide image items with smooth transitions.
    *   **Props**: `badgeOverride`, `headingOverride`, `filters` (array of filter tags), `itemsOverride` (array of `GalleryItem` details).

### ✨ Feature / Highlight Grids
*   **[`FeatureOverlayCards.astro`](file:///templates/starter/src/components/FeatureOverlayCards.astro)**: Grid of image cards where hovering (or tapping on touch) reveals an extended description over a gradient overlay (concept inspired by the "Background Overlay Card" style in Aceternity UI's card collection). Pure CSS `group-hover` — no JS. Best for a compact "why choose us" / guarantees grid with photo backing rather than plain icon cards; pairs well below `HeroAnimatedEntry.astro` or `Services.astro`.
    *   **Props**: all optional, falling back to `content.json`'s `home.featureCards` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, icon, title, description }`, `icon` being a Font Awesome class string).
*   **[`FeatureBento.astro`](file:///templates/starter/src/components/FeatureBento.astro)**: Bento-style 2x2 feature grid. Features customizable floating interface elements (mock notifications or dialogue bubbles) overlaying high-quality aspect-ratio photos. Perfect for detailing tech features, consumer app highlights, or complex service guarantees in a premium, engaging grid.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, title, description, overlayType: 'none' | 'notification' | 'dialogue', overlayTitle, overlayText }`).
*   **[`TeamSpotlight.astro`](file:///templates/starter/src/components/TeamSpotlight.astro)**: Editorial about/profile section featuring a large landscape team/workshop photo, structured mission statement paragraphs, and a primary CTA link.
    *   **Props**: `badgeOverride`, `headingOverride`, `descriptionOverride1`, `descriptionOverride2`, `imageSrcOverride`, `imageAltOverride`, `ctaTextOverride`, `ctaHrefOverride`.
*   **[`MissionRecruit.astro`](file:///templates/starter/src/components/MissionRecruit.astro)**: Split-screen mission callout showing standard title/copy sections and a square next-arrow link alongside a large landscape image. Supports responsive layout swapping on desktop.
    *   **Props**: `badgeOverride`, `headingOverride`, `descriptionOverride`, `buttonHrefOverride`, `imageSrcOverride`, `imageAltOverride`.
*   **[`FeatureCardsDoa.astro`](file:///templates/starter/src/components/FeatureCardsDoa.astro)**: "The DOA Difference" 3-column feature grid. Each card details a value proposition and features a red circular number badge overlapping the bottom border.
    *   **Props**: `badgeOverride`, `headingOverride`, `featuresOverride` (array of `FeatureCard` elements).
*   **[`ProcessHealNet.astro`](file:///templates/starter/src/components/ProcessHealNet.astro)**: Numbered vertical process timeline in the HealNet theme style. Renders step numbers (1, 2, 3) connected by a dashed line on the left, and a mockup image overlayed with a floating label widget on the right.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `stepsOverride` (array of `Step` structures), `imageSrcOverride`, `floatingText`.
*   **[`StoryChalet.astro`](file:///templates/starter/src/components/StoryChalet.astro)**: Cozy, split-screen about storytelling section in the Chalet alpine-editorial style. Pairs a clean floured workspace photo on one side with structured paragraph copy on the other.
    *   **Props**: `badgeOverride`, `headingOverride`, `paragraph1Override`, `paragraph2Override`, `imageSrcOverride`, `imageAltOverride`.
*   **[`InfoChalet.astro`](file:///templates/starter/src/components/InfoChalet.astro)**: Practical notice board split panel. Renders a structured day-by-day weekly opening hours table on one side, and map location pointers/action dials on the other.
    *   **Props**: `badgeOverride`, `headingOverride`, `hoursOverride` (array of `OpeningHour` objects), `addressOverride`, `phoneOverride`, `directionsUrl`.
    *   **Props**: `badgeOverride`, `headingOverride`, `descriptionOverride`, `buttonHrefOverride`, `imageSrcOverride`, `imageAltOverride`.
*   **[`JobGrid.astro`](file:///templates/starter/src/components/JobGrid.astro)**: Dynamic careers opening board. Renders a grid of position listings where the first card is highlighted in the brand's primary color and the others are styled in a dark slate, each with salary metrics and quick-apply tags.
    *   **Props**: `badgeOverride`, `headingOverride`, `jobsOverride` (array of `JobItem` items), `allJobsHref`.
*   **[`FormRecruit.astro`](file:///templates/starter/src/components/FormRecruit.astro)**: Split-layout application/contact lead capture section. The left column houses direct phone numbers and descriptions, while the right column renders full-name, email, and phone input validation forms.
    *   **Props**: `badgeOverride`, `headingOverride`, `descriptionOverride`, `apiEndpoint`.

### 🦶 Footers
*   **[`Footer.astro`](file:///templates/starter/src/components/Footer.astro)**: Standard 4-column footer (brand/socials, services, locations, contact) with a legal bottom bar. The safe default.
*   **[`FooterBigText.astro`](file:///templates/starter/src/components/FooterBigText.astro)**: Alternative footer — a 3-column link footer (services, locations, contact) with an oversized, faded wordmark of the business name spanning the bottom edge (concept inspired by the "Footer With Big Text" style in Aceternity UI's footer collection). Best for brands leaning into bold typographic identity; skip it for very long business names, which crowd the wordmark at small viewport widths.
    *   **Props**: `taglineOverride` (optional, falls back to `content.json`'s `footerBigText.tagline`); services/locations/contact pull directly from `content.json`/`business.json` like `Footer.astro`.

### 💬 Social Proof & Reviews
*   **[`Reviews.astro`](file:///templates/starter/src/components/Reviews.astro) (Grid)**: Standard 3-column masonry grid layout. Displays client name, locations, and ratings.
*   **[`Reviews.astro`](file:///templates/starter/src/components/Reviews.astro) (Snap Slider)**: Touch-enabled horizontal scrolling swipe track. Perfect for mobile UI/UX.
*   **[`ReviewsKepler.astro`](file:///templates/starter/src/components/ReviewsKepler.astro)**: Staggered neo-brutalist customer quote cards. Features offset solid colored shadows and cards that rotate slightly, straightening smoothly on hover.
    *   **Props**: `badgeOverride`, `headingOverride`, `reviewsOverride` (array of `ReviewItem` elements).
*   **[`ReviewsChalet.astro`](file:///templates/starter/src/components/ReviewsChalet.astro)**: Cozy customer review board. Features a header displaying overall rating scores and stars next to a 3-column review card grid featuring giant quotation mark tags ("“") and initial avatars.
    *   **Props**: `badgeOverride`, `headingOverride`, `ratingScore`, `ratingLabel`, `reviewsOverride` (array of `ReviewItem` entries), `googleReviewUrl`.
*   **[`TestimonialsHealNet.astro`](file:///templates/starter/src/components/TestimonialsHealNet.astro)**: Premium testimonial grid layout in the HealNet theme. Features two rows of quote cards detailed with avatar photo slots, flanking a central highlighted 4-column statistic milestones board.
    *   **Props**: `badgeOverride`, `headingOverride`, `subtitleOverride`, `topTestimonials` (array of `Testimonial` items), `bottomTestimonials` (array of `Testimonial` items), `statsOverride` (array of `StatItem` indicators).

### 📢 Call to Action Blocks
*   **[`CtaAccentCard.astro`](file:///templates/starter/src/components/CtaAccentCard.astro)**: High-impact CTA banner housed within a rounded capsule, featuring bold gradient backgrounds, custom mascot illustrations, and contrasting pill action buttons. Best for email signups, beta program announcements, or newsletter signups.
    *   **Props**: `titleOverride`, `descriptionOverride`, `bgGradientClass`, `ctaTextOverride`, `ctaHrefOverride`, `mascotSrcOverride`.

### ⚙️ Interactive & Utility Elements
*   **[`Reveal.astro`](file:///templates/starter/src/components/Reveal.astro)**: Scroll animation wrapper. Intercepts viewport entries and fades/slides any nested content into view. Driven by a single shared `IntersectionObserver` on the client, and respects `prefers-reduced-motion`.
    *   **Props**: `delay` (in ms), `class`, `from` (`'up' | 'left' | 'right' | 'none'`), `as` (HTML wrapping tag).
*   **[`AddToCalendarButton.astro`](file:///templates/starter/src/components/AddToCalendarButton.astro)**: Clean dropdown menu helper that generates event invite links for Google Calendar, Yahoo, Outlook, and a download link for iCal / Apple calendar. Fully self-contained.
    *   **Props**: `name`, `description`, `location`, `startDate` (ISO string), `duration` (in minutes), `class`.
*   **[`FileTree.astro`](file:///templates/starter/src/components/FileTree.astro)**: Monospace directory structure viewer in the Exquisitus editorial style. Renders folder paths, file icons, connecting lines, and highlighted files.
    *   **Props**: `title`, `structure` (array of `FileNode` elements), `class`.
*   **[`AsideExquisitus.astro`](file:///templates/starter/src/components/AsideExquisitus.astro)**: Notice callout bubbles. Features 4 notice types (`note`, `tip`, `caution`, `danger`) with outline accent rings, background colors, and title headers.
    *   **Props**: `type`, `title`, `class`.
*   **[`TabsExquisitus.astro`](file:///templates/starter/src/components/TabsExquisitus.astro)**: Structured tab group swapper with border-transition navigation controls and panel hiding logic.
    *   **Props**: `tabs` (array of tab labels), `id`, `class`.
*   **[`StepsExquisitus.astro`](file:///templates/starter/src/components/StepsExquisitus.astro)**: Step-by-step instruction vertical timeline with tabular circular counters and fading vertical guide lines.
    *   **Props**: `steps` (array of `StepItem` structures), `class`.
*   **[`BadgeExquisitus.astro`](file:///templates/starter/src/components/BadgeExquisitus.astro)**: Small pill-shaped status tags (`note`, `success`, `warning`, `danger`, `info`).
    *   **Props**: `text`, `type`, `class`.

### ❓ FAQ Layouts
*   **[`FAQ.astro`](file:///templates/starter/src/components/FAQ.astro) (Accordion)**: Standard single-column centered list of toggle-able questions.
*   **[`FAQ.astro`](file:///templates/starter/src/components/FAQ.astro) (Double Column)**: Left column features a sticky lead CTA, right column houses the accordions. Great for heavy FAQ list profiles.
*   **[`FaqKepler.astro`](file:///templates/starter/src/components/FaqKepler.astro)**: Neo-brutalist FAQ accordions. Features solid borders, heavy shadows, and interactive expand/collapse states where the plus (+) indicator rotates 45 degrees into an exit symbol.
    *   **Props**: `badgeOverride`, `headingOverride`, `faqsOverride` (array of `FaqItem` objects).
*   **[`FaqAccordionDoa.astro`](file:///templates/starter/src/components/FaqAccordionDoa.astro)**: WordPress-styled accordion query list for contractors. Features border notice tabs, toggle chevron animations, and a red bottom CTA link.
    *   **Props**: `badgeOverride`, `headingOverride`, `faqsOverride` (array of `FaqItem` objects), `ctaText`, `ctaHref`.

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
