# Daystar Premium Web Design System

## Purpose

This document defines the visual language, UX standards, component usage, layout philosophy, and implementation rules for premium Daystar websites built with Astro.

This system works alongside UI/UX Pro Max and any existing component library, including components inspired by 21st.dev.

UI/UX Pro Max provides general design intelligence, UX principles, accessibility guidance, typography recommendations, and design best practices.
This document provides the specific Daystar visual identity.

When there is a conflict between generic design recommendations and the Daystar visual identity, preserve good UX/accessibility while following the Daystar aesthetic.

## 1. Core Design Philosophy

Daystar websites should feel:

- Premium
- Modern
- Cinematic
- Sophisticated
- High-end
- Image-driven
- Mobile-first
- Fast
- Confident
- Intentional
- Visually memorable

The goal is to create websites that look like they were designed by a high-end digital agency rather than generated from a generic website template.

The design should feel appropriate for premium local businesses and service companies.

Examples:

- Auto detailing
- Auto glass
- Landscaping
- Roofing
- HVAC
- Plumbing
- Construction
- Remodeling
- Pressure washing
- Window tinting
- Barbers
- Salons
- Restaurants
- Bakeries
- Professional services
- Other local service businesses

The design should adapt to the client's industry and branding while preserving the underlying Daystar visual language.

## 2. The Most Important Rule

DO NOT create generic websites.

Avoid designs that look like:

- Generic Bootstrap templates
- Generic WordPress templates
- Generic SaaS landing pages
- AI-generated websites
- Basic Tailwind starter templates
- Plain white corporate websites
- Repetitive rectangular card grids
- Default component-library compositions
- Overly simplistic hero sections
- Generic hamburger-only mobile navigation

The finished site should have a strong visual point of view.

When viewing the homepage for the first time, the user should immediately recognize that this is a premium, professionally designed website.

## 3. Visual Signature

The default Daystar aesthetic should incorporate the following when appropriate:

- Full-bleed photography
- Full-screen hero sections
- Dark image overlays
- Cinematic gradients
- Glassmorphism
- Frosted glass navigation
- Transparent/glass buttons
- Floating UI
- Large typography
- Strong visual hierarchy
- Generous spacing
- Rounded corners
- Subtle borders
- Soft shadows
- Smooth micro-interactions
- Scroll-based reveals
- Image-driven sections
- Layered compositions
- Mobile bottom navigation

These are not mandatory for every single element, but they should form the site's visual vocabulary.

## 4. Use Existing Components Before Creating New Ones

Before creating a new component:

1. Inspect the existing component library.
2. Identify whether an existing component can fulfill the requirement.
3. Reuse and customize the existing component when possible.
4. Only create a new component when the existing system genuinely cannot satisfy the requirement.

Do NOT create slightly different versions of existing components.

For example, if the project already contains:

- GlassButton
- GlassCard
- GlassNav
- MobileTabBar

do not create:

- FancyButton
- ModernButton
- PremiumButton
- NewGlassButton

unless there is a legitimate architectural reason.

The design system should become more cohesive over time, not more fragmented.

## 5. 21st.dev Components

21st.dev may be used as inspiration and as a source of component ideas.

However: 21st.dev is NOT the Daystar design system.

Any component inspired by or adapted from 21st.dev must be customized to conform to the Daystar design language.

Before adding a component to the library, normalize:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Borders
- Glass treatment
- Animation timing
- Hover states
- Focus states
- Responsive behavior

Do not blindly combine unrelated 21st.dev components.

The result must feel like one cohesive design system.

Think: 21st.dev = component inspiration. Daystar = visual identity.

## 6. Design Tokens

Use centralized design tokens rather than hardcoding values throughout components.

The exact values may be adjusted based on the client's branding, but the system should generally support:

```css
:root {
  --ds-background: #090909;
  --ds-surface: rgba(255, 255, 255, 0.06);
  --ds-surface-hover: rgba(255, 255, 255, 0.10);

  --ds-border: rgba(255, 255, 255, 0.14);
  --ds-border-strong: rgba(255, 255, 255, 0.22);

  --ds-text: #ffffff;
  --ds-text-muted: rgba(255, 255, 255, 0.68);

  --ds-radius-sm: 12px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 20px;
  --ds-radius-xl: 28px;
  --ds-radius-pill: 999px;

  --ds-glass-blur: 20px;

  --ds-shadow-glass:
    0 10px 40px rgba(0, 0, 0, 0.25);

  --ds-container: 1200px;
}
```

These values are a starting point, not an absolute requirement.

Client branding should influence:

- Primary accent
- Secondary accent
- Background tones
- Typography
- Image treatment

But the underlying design language should remain recognizable.

## 7. Glassmorphism

Glassmorphism is one of the core Daystar visual characteristics.

Use it intentionally.

A typical glass surface should have:

- Semi-transparent background
- Backdrop blur
- Thin translucent border
- Soft shadow
- Rounded corners

Example:

```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.14);
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
```

Do not put glassmorphism on everything.

Glass should create hierarchy.

Good uses:

- Navigation
- Buttons
- Cards
- CTA panels
- Floating badges
- Mobile tab bars
- Forms
- Overlay content

Bad use: every section being a glass rectangle.

Glass should appear to float above the underlying environment.

## 8. Photography

Photography is a major part of the Daystar visual system.

Whenever appropriate, use large, high-quality, edge-to-edge photography.

Prefer:

- Full-width imagery
- Full-height imagery
- Cinematic crops
- Realistic business photography
- Strong subject placement
- Dark overlays when text is present
- Image sections that bleed to the edges of the viewport

Avoid:

- Tiny generic stock photos
- Images trapped inside small rectangular cards everywhere
- Excessive image borders
- Random unrelated stock photography
- Low-quality imagery

The image should contribute to the visual composition.

## 9. Hero Sections

The hero is one of the most important parts of the website.

The default hero should be cinematic.

Preferred structure:

```text
Full viewport background image
        v
Dark gradient / image overlay
        v
Floating navigation
        v
Eyebrow / trust indicator
        v
Large headline
        v
Supporting copy
        v
Primary CTA
        v
Secondary CTA
        v
Optional trust/review element
```

The hero should generally use:

```css
min-height: 100svh;
```

when appropriate.

Use `svh`/`dvh` carefully to avoid mobile viewport issues.

Hero imagery should remain visually strong on mobile.

Do not simply shrink the desktop hero. Recompose it for smaller screens when necessary.

## 10. Hero Typography

Hero headlines should be large, confident, and easy to understand.

Use a clear hierarchy:

```text
EYEBROW

Large H1

Short supporting statement

[ Primary CTA ] [ Secondary CTA ]
```

Avoid giant paragraphs.

The H1 should communicate the primary value proposition quickly.

For local businesses, prioritize:

- Service
- Location
- Differentiator
- Trust

when appropriate.

Example: "Premium Auto Detailing in Murfreesboro" is generally more useful than "We Make Your Vehicle Shine Like Never Before."

Use natural language while maintaining strong SEO.

## 11. Buttons

Buttons should feel custom and premium.

Default Daystar button characteristics:

- Rounded/pill or softly rounded shape
- Generous horizontal padding
- Strong typography
- Subtle border
- Glass/translucent treatment when appropriate
- Smooth hover animation
- Clear focus state

Primary buttons can use:

- Brand accent
- Glass highlight
- Solid accent
- White glass

Secondary buttons can use:

- Transparent glass
- Border-only treatment
- Frosted glass

Avoid default-looking `[ Submit ]` buttons with no visual personality.

Buttons should communicate hierarchy. There should normally be one obvious primary action.

## 12. Floating Desktop Navigation

Desktop navigation should generally feel like a floating UI element rather than a full-width traditional website header.

Preferred characteristics:

- Floating positioning
- Rounded container
- Glass background
- Backdrop blur
- Thin border
- Subtle shadow
- Logo on the left
- Navigation in the center/right
- Primary CTA

Example:

```text
        +-----------------------------------------------+
        | LOGO   Services  Gallery  About   [Quote]      |
        +-----------------------------------------------+
```

Avoid unnecessarily tall navigation bars.

The navigation should feel lightweight and premium.

## 13. Mobile Bottom Tab Bar

The mobile bottom navigation is a signature Daystar feature.

For service businesses, mobile users should have critical actions available within thumb reach.

Use a fixed bottom glass navigation when appropriate.

Typical structure:

```text
Home
Services
Gallery
Quote
Call
```

or:

```text
Home
Services
Reviews
Quote
Call
```

Adapt the actions to the business.

Rules:

- Fixed to bottom
- Glass/frosted background
- Backdrop blur
- Rounded top or floating container
- Safe-area padding
- Clear icons
- Short labels
- Active state
- Touch-friendly targets
- Maximum approximately 5 primary items
- High contrast
- Smooth interaction

Always account for:

```css
env(safe-area-inset-bottom)
```

on supported devices.

Do not allow the tab bar to obscure page content or important buttons.

Add appropriate bottom padding to the page when necessary.

## 14. Mobile Navigation Philosophy

Mobile navigation should be designed for thumb reach.

Do not simply shrink desktop navigation.

The mobile experience should feel intentionally designed.

Important business actions should be immediately accessible:

- Call
- Text
- Quote
- Book
- Order
- Directions

depending on the business.

The mobile bottom navigation should not exist merely because it looks cool. It should improve conversion and usability.

## 15. Content Sections

Avoid repetitive section structures.

Do not create the same "Heading / Paragraph / Three identical cards" block over and over.

Instead, alternate visual compositions.

Examples:

**Cinematic image section**

```text
Full-width image
        +
Glass content overlay
```

**Split section**

```text
Image        Glass content
```

**Reversed split**

```text
Glass content        Image
```

**Bento composition**

```text
Large image       Small card
Large image       Small card
```

**Full-width CTA**

```text
Background image
Dark overlay
Glass CTA
```

**Gallery** — use varied image sizes rather than a monotonous grid when appropriate.

## 16. Glass Cards

Cards should have purpose.

Use glass cards for:

- Services
- Reviews
- Features
- Pricing
- Trust indicators
- Contact information
- Business highlights

Avoid card overload. Not every piece of content needs a card.

Use visual hierarchy to distinguish important information.

## 17. Border Radius

Use rounded geometry consistently.

Typical values:

```text
Small: 12px
Medium: 16-20px
Large: 24-28px
Hero/feature panels: 28-32px
Pills: 999px
```

Do not mix dozens of arbitrary radius values.

## 18. Typography

Typography should feel modern and premium.

Preferred fonts may include:

- Inter
- Manrope
- Plus Jakarta Sans
- Space Grotesk
- Satoshi

Choose based on the brand and UI/UX Pro Max recommendations.

Do not use too many fonts. Normally use one primary typeface and an optional complementary display typeface.

Typography hierarchy should be obvious:

```text
Eyebrow
H1
H2
H3
Body
Small / metadata
```

Large headings should have appropriate line-height and letter spacing.

Avoid excessively tight text that becomes difficult to read.

## 19. Color

Client branding takes priority.

The Daystar visual language does NOT mean every site must be black and gold.

Instead:

- Preserve the client's brand
- Use darker treatments when appropriate
- Use glass surfaces
- Use translucent versions of brand colors
- Maintain strong contrast
- Use accent colors intentionally

Examples:

**Auto detailing**: Black, Charcoal, Gold, Silver

**Landscaping**: Deep green, Charcoal, Natural tones

**Roofing**: Charcoal, Slate, Blue

The visual system stays consistent while the color identity changes.

## 20. Animation

Animation should communicate polish, not distract users.

Preferred animations:

- Fade
- Slide
- Scale
- Blur-to-sharp
- Image reveal
- Hover lift
- Subtle parallax
- Navigation transitions
- Button micro-interactions

Keep animations subtle.

Avoid:

- Excessive bouncing
- Long loading animations
- Constant movement
- Distracting backgrounds
- Excessive 3D effects
- Animation on every element

Respect `prefers-reduced-motion`.

## 21. Scroll Reveals

Sections may reveal as they enter the viewport.

Preferred behavior:

```text
opacity: 0 -> 1
transform: translateY(20px) -> translateY(0)
```

Keep durations relatively short.

Do not make the user wait to see content.

Important content should remain usable if animations fail.

## 22. Micro-Interactions

Interactions should feel polished.

**Buttons**: subtle upward movement + background transition + slight glow

**Cards**: slight lift + image scale

**Navigation**: active indicator + subtle background change

**Gallery**: image zoom + overlay controls

Do not over-animate.

## 23. Responsive Design

Mobile is NOT a reduced desktop version.

Design responsively from the beginning.

Check: 320px, 375px, 390px, 430px, tablet, laptop, desktop, large desktop.

Pay particular attention to:

- Hero height
- Navigation
- Mobile tab bar
- Typography
- CTA placement
- Image crops
- Glass components
- Safe areas
- Touch targets

Avoid horizontal scrolling.

## 24. Mobile Hero

On mobile:

- Preserve the visual impact of the hero
- Reposition background imagery if necessary
- Keep text readable
- Avoid excessive text
- Keep CTA actions accessible
- Account for the bottom tab bar

The hero should not simply become a tiny version of desktop.

## 25. Forms

Forms should feel integrated into the visual system.

Use:

- Glass inputs
- Clear labels
- Strong focus states
- Appropriate contrast
- Rounded controls
- Large touch targets
- Minimal required fields

For quote/contact forms, prioritize conversion. Do not ask for unnecessary information.

## 26. Trust and Social Proof

Local businesses depend heavily on trust.

Use visually prominent trust elements when available:

- Google rating
- Review count
- Years in business
- Certifications
- Service guarantees
- Before/after imagery
- Customer testimonials
- Logos
- Service-area information

Trust elements can appear inside glass badges or floating UI.

**Do not fabricate ratings, reviews, certifications, or statistics.**

## 27. Local Business UX

For local businesses, important actions should be obvious.

Consider: Call, Text, Get Quote, Book, Directions, Reviews, Service Areas.

The design should help users complete the primary conversion quickly.

Do not sacrifice conversion for visual effects.

## 28. SEO Must Not Be Sacrificed

Visual design does not override SEO.

Astro sites should maintain:

- Semantic HTML
- Proper H1/H2/H3 hierarchy
- Descriptive page titles
- Meta descriptions
- Open Graph metadata
- Canonical URLs
- Structured data where appropriate
- LocalBusiness schema where appropriate
- Service schema where appropriate
- Accessible navigation
- Crawlable links
- Descriptive image alt text
- Fast loading performance

Never use visual effects that require critical content to be inaccessible to search engines.

## 29. Performance

Premium design must remain performant.

Prefer:

- Astro static rendering
- Optimized images
- Modern image formats
- Responsive image sizes
- Lazy loading below the fold
- Minimal JavaScript
- CSS-first effects
- Native browser APIs when possible
- Component-level hydration only when necessary

Do not add JavaScript just because an animation could technically be implemented with JavaScript. Prefer CSS when appropriate.

Glassmorphism must not create unnecessary performance problems.

## 30. Accessibility

Maintain strong accessibility.

Ensure:

- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Semantic HTML
- Proper labels
- Accessible buttons
- Accessible navigation
- Reduced-motion support
- Appropriate ARIA only when necessary
- Touch targets large enough for mobile

Do not sacrifice accessibility for aesthetics.

If glass reduces contrast, increase the background opacity or add an overlay.

## 31. Component Naming

Use descriptive component names.

Preferred: `GlassButton`, `GlassCard`, `GlassNavbar`, `MobileTabBar`, `CinematicHero`, `GlassCTA`, `ImageTextSection`, `ServicesGrid`, `TestimonialCard`, `Gallery`

Avoid vague names: `Thing`, `Box`, `CoolCard`, `ModernSection`, `FancyButton`, `Section2`

## 32. Component Architecture

Prefer composable components.

Example:

```text
CinematicHero
+-- BackgroundImage
+-- GradientOverlay
+-- HeroContent
+-- GlassButton
+-- TrustBadge
```

Rather than one massive component containing everything.

Keep components reusable and configurable.

## 33. Do Not Over-Abstract

Do not turn every `<div>` into a component.

Components should represent meaningful reusable UI.

Good: `GlassCard`, `Hero`, `Navbar`, `Gallery`, `MobileTabBar`

Bad: `RoundedContainer`, `SmallText`, `LeftBox`, `SpacingWrapper` — unless there is a genuine design-system reason.

## 34. Design Before Coding

Before implementing a new page, determine:

1. Primary business goal
2. Primary conversion action
3. Target audience
4. Brand personality
5. Appropriate imagery
6. Color direction
7. Typography
8. Page hierarchy
9. Mobile navigation
10. Section compositions

Do not immediately begin writing arbitrary markup. Think through the visual composition first.

## 35. Use UI/UX Pro Max

When UI/UX Pro Max is available, use it for: UX strategy, typography, color reasoning, accessibility, responsive UX, interaction patterns, design heuristics, component recommendations, general design quality.

Then apply the Daystar design language on top.

Workflow:

```text
UI/UX Pro Max
        v
UX + design reasoning
        v
Daystar Design System
        v
Existing component library
        v
Client branding/content
        v
Astro implementation
```

Do not allow generic recommendations to erase the Daystar visual identity.

## 36. Existing Component Library Is the Source of Truth

Before implementing a site, inspect the existing component library.

Identify: Navigation, Buttons, Cards, Forms, Hero components, Galleries, Testimonials, CTAs, Mobile navigation, Animation utilities, Glass components.

Reuse these wherever appropriate.

If a component is close but not perfect, extend it rather than creating an unrelated duplicate.

## 37. Create a Design System Showcase

When working on the core component library, maintain a showcase page such as `/design-system`.

The page should demonstrate: Typography, Colors, Buttons, Glass effects, Cards, Navigation, Mobile tab bar, Forms, Badges, Animations, Hero sections, Image sections, Galleries, Testimonials, CTAs.

This page acts as the visual reference for future projects.

## 38. Quality Control

Before declaring a site complete, perform a visual design review.

**First Impression**: Does it look premium? Does it look intentionally designed? Does it avoid looking AI-generated? Does the visual identity feel cohesive?

**Hero**: Is the hero visually powerful? Is the photography high quality? Is the headline immediately understandable? Are CTAs obvious? Is the overlay sufficient for readability?

**Navigation**: Does desktop navigation feel premium? Is it appropriately glass/floating? Does mobile have intentional navigation? Is the mobile bottom tab bar useful?

**Components**: Are buttons consistent? Are glass effects consistent? Are radius values consistent? Are shadows consistent? Are typography styles consistent?

**Composition**: Are sections visually varied? Is the page too repetitive? Are there too many cards? Are images being used effectively? Is there enough whitespace?

**Mobile**: Does the site feel designed specifically for mobile? Is the bottom navigation comfortable? Are CTAs reachable? Is content hidden behind fixed UI? Are images cropped correctly?

**Performance**: Are images optimized? Is unnecessary JavaScript being used? Are animations performant? Is the page still fast despite visual effects?

**Accessibility**: Is text readable? Are focus states visible? Are buttons accessible? Does reduced motion work?

If any major answer is "no", revise the implementation.

## 39. Self-Critique Requirement

Do not stop simply because the page technically works.

After implementing a major page, visually critique the result.

Specifically look for: generic layouts, excessive cards, weak hero, weak typography, poor image selection, inconsistent glass effects, random spacing, excessive rounded containers, weak CTA hierarchy, poor mobile navigation, overuse of animations, sections that look copied from unrelated templates.

If the result looks like a generic AI-generated website, revise it.

## 40. Avoid Design-by-Component

Do not build a page by randomly stacking components.

Instead, compose a visual narrative:

```text
Cinematic Hero
        v
Trust / Review Badge
        v
Services Introduction
        v
Image + Glass Content
        v
Service Cards
        v
Full-Width Gallery
        v
Testimonials
        v
Service Area / Local Trust
        v
Glass CTA
        v
Footer
```

The page should have rhythm.

## 41. Visual Rhythm

Alternate between:

- Large and small sections
- Image-heavy and content-heavy sections
- Dark and slightly lighter surfaces
- Full-width and contained layouts
- Dense and spacious areas

Do not make every section visually identical. The site should guide the user's eye down the page.

## 42. Image + Glass Composition

One of the primary Daystar patterns:

```text
+-------------------------------------------+
|                                           |
|          FULL BACKGROUND IMAGE            |
|                                           |
|       +-----------------------+           |
|       |                       |           |
|       |     GLASS CONTENT     |           |
|       |                       |           |
|       +-----------------------+           |
|                                           |
+-------------------------------------------+
```

Use this pattern for: Services, About sections, CTAs, Trust sections, Featured content.

## 43. Glass Does Not Mean Everything Is Transparent

Use contrast intentionally.

A premium interface can combine: solid dark backgrounds, transparent glass, full-bleed photography, accent-colored elements, white typography, dark content sections.

The goal is depth, not transparency everywhere.

## 44. Brand Adaptation

The Daystar system is a framework, not a cage.

If the client has an established brand, preserve: Logo, brand colors, brand personality, photography style, appropriate typography.

Adapt the Daystar system around those assets.

Do not force gold, black, or dark colors onto every client.

## 45. Content Adaptation

The design should adapt to the amount of content. Do not force every client into identical copy lengths.

If content is short, use larger typography, more visual breathing room, strong imagery.

If content is long, use better hierarchy, progressive disclosure, shorter paragraphs, accordions where appropriate.

Never make a section visually awkward just to preserve a template.

## 46. Mobile Bottom Navigation Business Rules

The mobile tab bar should prioritize conversion.

Possible configurations:

**Service Business**: Home, Services, Gallery, Quote, Call

**Restaurant**: Home, Menu, Order, Directions, Call

**Appointment Business**: Home, Services, Reviews, Book, Call

**Contractor**: Home, Services, Projects, Quote, Call

Choose based on the business.

## 47. Sticky/Floating UI

Floating UI should never obstruct important content.

Test: Hero, Forms, Gallery, Footer, CTA buttons, Cookie notices, Chat widgets.

Make sure fixed navigation does not cover interactive elements.

## 48. Technical Astro Rules

Use Astro's strengths.

Prefer: Static HTML, Islands architecture, Minimal client-side JavaScript, Componentized `.astro` files, CSS scoped to components when appropriate, Shared global tokens, Semantic HTML, Optimized assets.

Use client directives only when interactive behavior actually requires them.

Do not turn the entire website into a client-rendered application.

## 49. Do Not Reinvent Existing Functionality

Before adding a library:

1. Check whether Astro provides the functionality.
2. Check whether the existing project already has it.
3. Check whether CSS/native browser APIs are sufficient.
4. Only then add a dependency.

Keep the site lightweight.

## 50. Final Design Standard

A finished Daystar site should feel like: "A premium custom website built specifically for this business."

It should NOT feel like: "An AI generated website assembled from random components."

The client-specific photography, copy, branding, services, testimonials, location, and calls to action should make every site unique.

The Daystar system should provide the consistent visual quality, interaction quality, component quality, mobile UX, typography hierarchy, spacing, glass treatment, navigation, animation language, and performance standards.

## 51. Default Implementation Priority

When making design decisions, prioritize in this order:

1. Usability
2. Conversion
3. Accessibility
4. Visual hierarchy
5. Brand identity
6. Daystar visual language
7. Animation
8. Decorative effects

Never sacrifice usability or accessibility simply to create a visual effect.

## 52. Final Instruction

When building a Daystar Astro website:

1. Inspect the existing project.
2. Inspect the existing component library.
3. Inspect the existing design tokens.
4. Use UI/UX Pro Max for general UX/design reasoning.
5. Apply this Daystar Design System.
6. Reuse existing components wherever possible.
7. Adapt components to the client's branding.
8. Design mobile intentionally, including the mobile bottom tab bar when appropriate.
9. Use cinematic imagery and glass UI where appropriate.
10. Avoid generic/template layouts.
11. Keep the site performant and accessible.
12. Review the finished implementation against this document.
13. Self-critique the visual design.
14. Fix anything that looks generic, inconsistent, unfinished, or overly AI-generated.
15. Only consider the implementation complete when the design system is being followed consistently.

The objective is not simply to produce a functional website. The objective is to produce a premium, conversion-focused, visually distinctive Astro website that feels intentionally designed by Daystar Digital.
