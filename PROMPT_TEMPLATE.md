# Daystar Site Factory - Master Prompt Template

Use this template prompt when requesting a new client website to ensure maximum SEO optimization, hardened security, premium styling, and automated social image scraping.

Copy the block below, fill in the placeholder brackets `[...]`, and send it to Antigravity:

```markdown
Build a premium, high-converting Astro website for the company specified in the Business Profile below. The website must stand out far above competitors in design sophistication, search visibility, and technical execution.

### 1. BUSINESS PROFILE
- Company Name: [COMPANY NAME]
- Industry / Niche: [e.g., Luxury Arborist / Premium Custom Remodeling]
- Target Market / Service Area: [e.g., West Nashville, Belle Meade, Brentwood TN]
- Main Phone: [e.g., +1 (615) 555-0199]
- Main Email: [e.g., contact@company.com]
- Street Address: [e.g., 100 Main St, Nashville, TN 37203]
- Google Business Map CID Link: [PASTE GOOGLE MAPS SHARE LINK HERE]
- Google Reviews Link: [PASTE GOOGLE REVIEWS TARGET LINK HERE]
- Social Media Links:
  * Facebook: [PASTE FACEBOOK URL]
  * Instagram: [PASTE INSTAGRAM URL]
  * LinkedIn: [PASTE LINKEDIN URL]
  * YouTube: [PASTE YOUTUBE URL]

---

### 2. ASSET SCRAPING & CRAWLING INSTRUCTION (CRITICAL)
- Before writing any code, you MUST use your web search/browser tools to visit the social media links (Instagram, Facebook) and Google Maps links listed above.
- Extract, crawl, and pull real image assets, past project photos, team pictures, and logos directly from these sources.
- Download these assets, rename them cleanly (e.g., `project-remodel-1.jpg`, `team-technician.jpg`), store them in the project asset directory, and use them as the actual image sources in the components. Do NOT use blank image placeholders.

---

### 3. ELITE VISUAL STYLING & DESIGN GUIDELINES
- Vibe: Luxury, premium, authoritative, and clean.
- Typography: Curated pairing of an elegant serif font (e.g., Outfit or Playfair Display) for headlines and a highly readable geometric sans-serif (e.g., Plus Jakarta Sans) for body text.
- Color System: A text-gradient color schema utilizing deep slate neutrals, layered radial gradients, ambient glow spheres, and warm highlight accents (e.g., gold or crimson).
- Depth: Implement glassmorphism containers (`backdrop-blur-md bg-white/5 border border-white/10`) and solid-color offset shadows.
- Micro-Animations: Staggered entry transitions, smooth hover scales (e.g., `hover:-translate-y-1 hover:shadow-lg`), and pulsing interactive triggers.

---

### 4. MAXIMUM SEO EFFICIENCY
- Schema Markup: Inject fully detailed JSON-LD structured data (Organization, LocalBusiness, or Service-specific schemas) into the `<head>` of the layout.
- Meta Configuration: Unique title tags (under 60 characters) and meta descriptions (under 155 characters) optimized with high-value local keywords for every service and location route.
- Header Hierarchy: Enforce strict semantic HTML5. Exactly one `<h1>` per page, followed by logical `<h2>` and `<h3>` nested tags.
- Indexing: Ensure clean canonical tags, sitemap index generation, and RSS feeds are configured.

---

### 5. SECURITY & PERFORMANCE HARDENING
- Secure Forms: Hardened lead generation form inputs with regex validation, sanitized text fields, and secure submission endpoints.
- Secure Assets: Reference all local assets using safe relative paths. Import external assets only over secure HTTPS protocols.
- Performance: Keep client-side JS to a minimum. All structural and layout styling must compile statically, maintaining a 100/100 Lighthouse performance index.

---

### 6. PAGE LAYOUT & LEGOS BLOCK CHECKLIST
Assemble the homepage using the following premium catalog components:
1. [Header]: Transparent, fixed navigation that sits over the hero and solidifies with a blurred background on scroll.
2. [HeroVideo]: Full-bleed video background hero showing the scraped team/project footage, overlayed with typewriter animations.
3. [Marquee]: Trust ribbon showing certification logos and brand badges.
4. [Services (Aspect Image)]: Aspect-ratio grid cards presenting core offerings.
5. [GalleryScrollChoreography]: Panoramic scroll-driven project gallery that builds dynamically.
6. [CompareSlider]: Before/after image swipe comparison displaying visual transformations.
7. [TestimonialsHealNet]: Rating score card flanked by detailed quote blocks and custom avatars.
8. [FAQ (Double Column)]: Sticky service lead form on the left, responsive question accordions on the right.
9. [FooterBigText]: Wordmark footer containing social redirect icons and legal notices.
```
