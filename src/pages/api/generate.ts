import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Helper to recursively copy directories
function copyDir(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Skip heavy or configuration directories
    if (
      entry.name === 'node_modules' || 
      entry.name === '.git' || 
      entry.name === '.astro' ||
      entry.name === 'dist'
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Load a named industry preset from templates/presets/<name>.json, if it exists
function loadPreset(name: string | undefined | null) {
  if (!name) return null;
  try {
    const presetPath = path.join(process.cwd(), 'templates', 'presets', `${name}.json`);
    if (!fs.existsSync(presetPath)) return null;
    return JSON.parse(fs.readFileSync(presetPath, 'utf8'));
  } catch (err) {
    console.error(`Failed to load preset "${name}":`, err);
    return null;
  }
}

// Word-boundary-safe Tailwind color-family swap across every .astro file in a
// directory (e.g. "slate" -> "stone"). Only matches "<family>-" tokens, so it
// never touches substrings like "translate-" the way a naive text replace would.
function replaceColorFamily(dir: string, fromFamily: string, toFamily: string) {
  const pattern = new RegExp(`\\b${fromFamily}-`, 'g');
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git') continue;

    if (entry.isDirectory()) {
      replaceColorFamily(entryPath, fromFamily, toFamily);
    } else if (entry.name.endsWith('.astro')) {
      const content = fs.readFileSync(entryPath, 'utf8');
      const updated = content.replace(pattern, `${toFamily}-`);
      if (updated !== content) {
        fs.writeFileSync(entryPath, updated);
      }
    }
  }
}

// Get authenticated GitHub username
function getGithubUser() {
  try {
    return execSync('gh api user -q .login', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
  } catch (err) {
    try {
      return execSync('git config --global user.name', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    } catch {
      return null;
    }
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const {
      slug,
      businessName,
      industry,
      phone,
      email,
      bookingUrl,
      mainCta,
      yearsInBusiness,
      certifications,
      locations,
      services,
      theme,
      copy,
      reviews,
      faqs,
      logoUrl,
      industryPreset
    } = data;

    if (!slug) {
      return new Response(JSON.stringify({ success: false, error: 'Slug is required' }), { status: 400 });
    }

    const preset = loadPreset(industryPreset);
    const presetTheme = preset?.theme || {};

    const homeDir = process.env.USERPROFILE || 'C:\\Users\\AustinHayes';
    const clientSlug = slug.toLowerCase().replace(/[^a-z0-9-_]/g, '');
    const clientDir = path.join(homeDir, 'Documents', 'Websites', clientSlug);

    if (fs.existsSync(clientDir)) {
      return new Response(JSON.stringify({ success: false, error: 'A directory for this client already exists' }), { status: 400 });
    }

    // 1. Copy Starter Template
    const starterPath = path.join(process.cwd(), 'templates', 'starter');
    copyDir(starterPath, clientDir);

    // Apply preset's color-family swap (e.g. cool "slate" -> warm "stone") to the fresh copy
    if (preset?.colorFamily && preset.colorFamily !== 'slate') {
      replaceColorFamily(clientDir, 'slate', preset.colorFamily);
    }

    // Download custom logo image if provided
    let hasCustomLogo = false;
    if (logoUrl) {
      try {
        const response = await fetch(logoUrl);
        if (response.ok) {
          const buffer = Buffer.from(await response.arrayBuffer());
          fs.writeFileSync(path.join(clientDir, 'public', 'logo.jpg'), buffer);
          hasCustomLogo = true;
        }
      } catch (err) {
        console.error('Failed to download custom client logo:', err);
      }
    }

    // 2. Write business.json
    const businessJsonPath = path.join(clientDir, 'src', 'data', 'business.json');
    const businessJson = {
      name: businessName,
      industry,
      logo: hasCustomLogo ? '/logo.jpg' : '/logo.svg',
      phone,
      email,
      bookingUrl,
      mainCta,
      yearsInBusiness,
      certifications: certifications.split(',').map((c: string) => c.trim()).filter(Boolean),
      socials: {
        facebook: `https://facebook.com/${clientSlug}`,
        instagram: `https://instagram.com/${clientSlug}`,
        google: `https://g.page/${clientSlug}`
      },
      address: {
        street: "123 Main St",
        city: locations.split(',')[0]?.trim() || "Nashville",
        state: "TN",
        zip: "37203"
      },
      locations: locations.split(',').map((l: string) => l.trim()).filter(Boolean),
      services: services.map((s: any) => s.title)
    };
    fs.writeFileSync(businessJsonPath, JSON.stringify(businessJson, null, 2));

    // 3. Write theme.config.json
    const themeConfigPath = path.join(clientDir, 'src', 'data', 'theme.config.json');
    const themeJson = {
      primaryColor: theme.primaryColor || presetTheme.primaryColor || '#2563eb',
      primaryColorHover: theme.primaryColorHover || presetTheme.primaryColorHover || '#1d4ed8',
      secondaryColor: theme.secondaryColor || presetTheme.secondaryColor || '#0f172a',
      accentColor: theme.accentColor || presetTheme.accentColor || '#f59e0b',
      borderRadius: theme.borderRadius || presetTheme.borderRadius || '0.75rem',
      fontFamily: theme.fontFamily || presetTheme.fontFamily || 'Outfit',
      style: theme.style || presetTheme.style || 'modern-glass',
      darkMode: theme.darkMode !== undefined ? (theme.darkMode === 'true' || theme.darkMode === true) : (presetTheme.darkMode ?? true),
      heroVideo: theme.heroVideo || '',
      typewriterWords: theme.typewriterWords ? theme.typewriterWords.split(',').map((w: string) => w.trim()).filter(Boolean) : [],
      marqueePhrases: theme.marqueePhrases ? theme.marqueePhrases.split(',').map((p: string) => p.trim()).filter(Boolean) : []
    };
    fs.writeFileSync(themeConfigPath, JSON.stringify(themeJson, null, 2));

    // 4. Write content.json
    const contentJsonPath = path.join(clientDir, 'src', 'data', 'content.json');
    
    // Parse service listings
    const parsedServices = services.map((srv: any) => ({
      slug: srv.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: srv.title,
      shortDescription: srv.shortDescription || `Professional ${srv.title} services.`,
      longDescription: srv.longDescription || `We deliver top-quality ${srv.title} solutions built to last.`,
      features: srv.features ? srv.features.split(',').map((f: string) => f.trim()).filter(Boolean) : [`Premium ${srv.title}`],
      faq: [
        {
          q: `Why choose us for ${srv.title}?`,
          a: `We provide guaranteed workmanship, premium materials, and experienced professional technicians.`
        }
      ]
    }));

    // Parse location listings
    const parsedLocations = locations.split(',').map((loc: string) => {
      const locName = loc.trim();
      const locSlug = locName.toLowerCase().replace(/ /g, '-');
      return {
        slug: locSlug,
        name: locName,
        seoTitle: `Premium ${industry} Services in ${locName} TN | ${businessName}`,
        seoDescription: `Need ${industry} in ${locName}, TN? Contact ${businessName} for premium services with warranties. Free estimates available.`,
        intro: `${businessName} proudly serves the ${locName}, TN community with expert ${industry} services, reliable quality, and transparent pricing.`,
        ctaText: `Book in ${locName}`
      };
    });

    // Parse reviews
    const parsedReviews = reviews.split('\n').filter(Boolean).map((line: string) => {
      const parts = line.split('|');
      return {
        author: parts[0]?.trim() || 'Verified Customer',
        location: parts[1]?.trim() || locations.split(',')[0]?.trim() || 'Tennessee',
        rating: 5,
        text: parts[2]?.trim() || line.trim()
      };
    });

    // Parse FAQs
    const parsedFaqs = faqs.split('\n').filter(Boolean).map((line: string) => {
      const parts = line.split('|');
      return {
        q: parts[0]?.trim() || 'Are you licensed and insured?',
        a: parts[1]?.trim() || 'Yes, we are fully licensed, bonded, and carry extensive liability insurance.'
      };
    });

    let layoutArray = data.layout;
    if (!layoutArray || !Array.isArray(layoutArray)) {
      if (preset?.layout && Array.isArray(preset.layout)) {
        layoutArray = preset.layout;
      } else if (theme?.style === 'oak-city') {
        layoutArray = [
          'Hero',
          'Marquee',
          'TrustBar',
          'Services',
          'CTA',
          'Reviews',
          'GalleryScrollChoreography',
          'FAQ',
          'QuoteFunnel'
        ];
      } else if (theme?.style === 'split') {
        layoutArray = [
          'Hero',
          'TrustBar',
          'Services',
          'FeatureOverlayCards',
          'Reviews',
          'FAQ',
          'QuoteFunnel'
        ];
      } else {
        layoutArray = [
          'Hero',
          'TrustBar',
          'Services',
          'CTA',
          'Reviews',
          'Gallery',
          'FAQ',
          'QuoteFunnel'
        ];
      }
    }

    const contentJson = {
      layout: layoutArray,
      navbarPill: {
        links: [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Locations', href: '/locations' },
          { label: 'Reviews', href: '/#reviews' },
          { label: 'FAQ', href: '/#faq' }
        ]
      },
      home: {
        hero: {
          h1: copy.heroH1 || `Premium ${industry} Services`,
          supporting: copy.heroSupporting || `Get professional, high-performance ${industry} services for your property. Fully licensed and certified local experts.`,
          ctaText: mainCta,
          badge: `⭐⭐⭐⭐⭐ Top Rated Local ${industry}`
        },
        about: {
          title: copy.aboutTitle || `About ${businessName}`,
          text: copy.aboutText || `${businessName} is dedicated to delivering the finest ${industry} services. With years of experience, we focus on durability, safety, and customer satisfaction.`
        },
        whyChooseUs: {
          title: copy.whyTitle || "Why Choose Us",
          subtitle: `Setting the standard for ${industry} solutions.`,
          items: [
            {
              title: "Guaranteed Workmanship",
              description: "Every installation and repair is backed by our lifetime warranty package."
            },
            {
              title: "Upfront Estimates",
              description: "Clear, itemized pricing so you know what to expect. No hidden surprises."
            },
            {
              title: "Certified Experts",
              description: "Our technicians undergo constant training and safety certifications."
            }
          ]
        }
      },
      services: parsedServices,
      locations: parsedLocations,
      reviews: parsedReviews.length > 0 ? parsedReviews : [
        {
          author: "Satisfied Homeowner",
          location: "Local Area",
          rating: 5,
          text: "Excellent service from start to finish. The team arrived on time and did great work."
        }
      ],
      faqs: parsedFaqs.length > 0 ? parsedFaqs : [
        {
          q: "Do you offer free quotes?",
          a: "Yes! Contact us today to schedule your free, no-obligation estimate."
        }
      ]
    };
    fs.writeFileSync(contentJsonPath, JSON.stringify(contentJson, null, 2));

    // 5. Automate Git + GitHub Deployment (RULE[user_global])
    const githubUser = getGithubUser();
    let githubUrl = null;
    let deploymentStatus = 'Skipped Git Setup (Credentials not found)';

    if (githubUser) {
      try {
        const repoName = clientSlug;
        
        // Git Init & Commit
        execSync('git init', { cwd: clientDir, stdio: 'ignore' });
        execSync('git checkout -b main', { cwd: clientDir, stdio: 'ignore' });
        execSync('git add .', { cwd: clientDir, stdio: 'ignore' });
        execSync('git commit -m "Initialize Daystar Site Factory starter"', { cwd: clientDir, stdio: 'ignore' });

        // GitHub Repo Create & Push main
        execSync(`gh repo create ${repoName} --public --source=. --remote=origin --push`, { cwd: clientDir, stdio: 'ignore' });

        // Create Cloudflare Pages Project
        try {
          execSync(`npx wrangler pages project create ${repoName} --production-branch main`, { cwd: clientDir, stdio: 'ignore' });
        } catch (err) {
          // Ignore if already exists
        }

        // Compile client site locally for deployment
        execSync('npm install', { cwd: clientDir, stdio: 'ignore' });
        execSync('npm run build', { cwd: clientDir, stdio: 'ignore' });

        // Deploy built static files (dist/) to Cloudflare Pages
        execSync(`npx wrangler pages deploy dist --project-name ${repoName}`, { cwd: clientDir, stdio: 'ignore' });

        // Pin Cloudflare Pages URL to GitHub Repository About details
        const homepage = `https://${repoName}.pages.dev/`;
        execSync(`gh repo edit ${githubUser}/${repoName} --homepage "${homepage}"`, { cwd: clientDir, stdio: 'ignore' });

        githubUrl = homepage;
        deploymentStatus = 'Deployed to Cloudflare Pages successfully';
      } catch (err: any) {
        console.error('Git/Cloudflare deployment failed:', err);
        deploymentStatus = `Git init completed, but Cloudflare deployment failed: ${err.message}`;
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      clientSlug, 
      clientPath: clientDir,
      githubUrl,
      deploymentStatus
    }), { status: 200 });

  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
