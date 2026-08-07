---
name: build-website
description: Instructions for building premium, luxury SEO websites with asset scraping.
---

# Build Website Skill

When this skill is loaded, execute the following workflow to construct a premium, SEO-optimized, highly secured website for the target local service or SaaS company.

## 1. Crawl & Scrape Client Assets
- Before writing code, use the search_web or browser tools to inspect the target social media links (Instagram, Facebook, LinkedIn, YouTube) and Google Business profiles.
- Identify and extract client logos, team portraits, work portfolio photos, and reviews.
- Download these files, rename them cleanly, and save them inside the project asset directory.
- Replace any placeholders in the templates with these active paths.

## 2. Page Assembly & Structure
Assemble the index page using the premium components from the Lego catalog:
1. `NavbarPill.astro` (floating Glass navigation)
2. `HeroVideo.astro` (looping video background with typewriter titles)
3. `Marquee.astro` (trust logos ribbon)
4. `Services.astro` (aspect image grids)
5. `GalleryScrollChoreography.astro` (quadrant scroll scroll-reveal)
6. `CompareSlider.astro` (before/after sweep slider)
7. `TestimonialsHealNet.astro` (statistics & quote card combinations)
8. `FAQ.astro` (double column with sticky form)
9. `FooterBigText.astro` (faded big text footer)

## 3. SEO & Structured Schema
- Inject a complete JSON-LD `LocalBusiness` or `Organization` schema in `<head>`.
- Configure custom meta tags (title, description) tailored to the local target keywords.
- Enforce strict `<h1>` -> `<h2>` hierarchy.

## 4. Hardening & Verification
- Clean and sanitize input forms.
- Validate compilation using `npm run build`.
