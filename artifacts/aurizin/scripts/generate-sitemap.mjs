import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTIFACT_DIR = path.resolve(__dirname, "..");

const SITE_URL = "https://www.aurizin.com";

// Per-route SEO hints. Static routes are matched exactly; detail pages
// (dynamic) fall back to the matching prefix entry below.
const ROUTE_META = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/about": { changefreq: "monthly", priority: "0.8" },
  "/services": { changefreq: "monthly", priority: "0.9" },
  "/industries": { changefreq: "monthly", priority: "0.8" },
  "/portfolio": { changefreq: "monthly", priority: "0.8" },
  "/blog": { changefreq: "weekly", priority: "0.8" },
  "/contact": { changefreq: "monthly", priority: "0.7" },
  "/careers": { changefreq: "monthly", priority: "0.6" },
  "/privacy": { changefreq: "yearly", priority: "0.3" },
  "/terms": { changefreq: "yearly", priority: "0.3" },
};

const DETAIL_META = [
  { prefix: "/industries/", changefreq: "monthly", priority: "0.7" },
  { prefix: "/portfolio/", changefreq: "monthly", priority: "0.7" },
  { prefix: "/blog/", changefreq: "monthly", priority: "0.7" },
];

const DEFAULT_META = { changefreq: "monthly", priority: "0.5" };

// Dynamic route pattern -> data file (relative to src/) used to enumerate slugs.
const DYNAMIC_SOURCES = {
  "/industries/:slug": "data/industries.ts",
  "/portfolio/:slug": "data/projects.ts",
  "/blog/:slug": "data/blog.ts",
  "/products/:slug": "data/products.ts",
};

// Routes that must never be indexed (404, admin, auth, dashboards, api, etc.).
const EXCLUDE = [
  /^\/admin/,
  /^\/login/,
  /^\/signin/,
  /^\/signup/,
  /^\/dashboard/,
  /^\/api(\/|$)/,
  /^\/thank/i,
  /test/i,
  /^\/dev(\/|$)/i,
];

function isExcluded(routePath) {
  return EXCLUDE.some((re) => re.test(routePath));
}

function metaFor(routePath) {
  if (ROUTE_META[routePath]) return ROUTE_META[routePath];
  const detail = DETAIL_META.find((d) => routePath.startsWith(d.prefix));
  if (detail) return { changefreq: detail.changefreq, priority: detail.priority };
  return DEFAULT_META;
}

function isoDate(d) {
  return new Date(d).toISOString().slice(0, 10);
}

function mtimeOf(absPath, fallback) {
  try {
    return isoDate(fs.statSync(absPath).mtime);
  } catch {
    return fallback;
  }
}

function readSlugs(dataFileRel) {
  const abs = path.join(ARTIFACT_DIR, "src", dataFileRel);
  const src = fs.readFileSync(abs, "utf8");
  const slugs = [];
  const re = /slug:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = re.exec(src)) !== null) slugs.push(m[1]);
  return { slugs: [...new Set(slugs)], lastmod: mtimeOf(abs, isoDate(Date.now())) };
}

// Map a component name (from App.tsx) to its source file path for lastmod.
function buildComponentFileMap(appSrc) {
  const map = {};
  const re = /import\s+(\w+)\s+from\s+["'](@\/pages\/[^"']+)["']/g;
  let m;
  while ((m = re.exec(appSrc)) !== null) {
    const rel = m[2].replace(/^@\//, "");
    map[m[1]] = path.join(ARTIFACT_DIR, "src", `${rel}.tsx`);
  }
  return map;
}

export function generateSitemap({ write = true } = {}) {
  const today = isoDate(Date.now());
  const appSrc = fs.readFileSync(path.join(ARTIFACT_DIR, "src", "App.tsx"), "utf8");
  const componentFiles = buildComponentFileMap(appSrc);

  // Discover every declared <Route path="..."> (the catch-all 404 has no
  // `path` and is therefore skipped automatically).
  const routeRe = /<Route\s+path="([^"]*)"(?:\s+component=\{(\w+)\})?/g;
  const entries = [];
  const skippedDynamic = [];
  let m;
  while ((m = routeRe.exec(appSrc)) !== null) {
    const routePath = m[1];
    const componentName = m[2];
    if (!routePath || isExcluded(routePath)) continue;

    if (routePath.includes(":")) {
      const dataFile = DYNAMIC_SOURCES[routePath];
      if (!dataFile) {
        // Unknown dynamic route — cannot enumerate slugs. Record it so the
        // build can fail loudly rather than silently dropping the pages.
        skippedDynamic.push(routePath);
        continue;
      }
      const base = routePath.replace(/:[^/]+$/, "");
      const { slugs, lastmod } = readSlugs(dataFile);
      for (const slug of slugs) {
        const loc = `${base}${slug}`;
        entries.push({ loc, lastmod, ...metaFor(loc) });
      }
    } else {
      const file = componentFiles[componentName];
      const lastmod = file ? mtimeOf(file, today) : today;
      entries.push({ loc: routePath, lastmod, ...metaFor(routePath) });
    }
  }

  const body = entries
    .map(
      (e) =>
        `  <url>\n` +
        `    <loc>${SITE_URL}${e.loc}</loc>\n` +
        `    <lastmod>${e.lastmod}</lastmod>\n` +
        `    <changefreq>${e.changefreq}</changefreq>\n` +
        `    <priority>${e.priority}</priority>\n` +
        `  </url>`,
    )
    .join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${body}\n` +
    `</urlset>\n`;

  if (write) {
    const outPath = path.join(ARTIFACT_DIR, "public", "sitemap.xml");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, xml, "utf8");
  }

  return {
    xml,
    count: entries.length,
    urls: entries.map((e) => e.loc),
    skippedDynamic,
  };
}

// Vite plugin: regenerate the sitemap on dev server start and before each build.
// In production builds it fails fast so a broken or incomplete sitemap can never
// ship silently; in dev it only warns so the server stays usable.
export function sitemapPlugin() {
  let isBuild = false;
  const run = () => {
    const { count, skippedDynamic } = generateSitemap();
    if (skippedDynamic.length > 0) {
      throw new Error(
        `unmapped dynamic route(s) ${skippedDynamic.join(", ")} — add them to ` +
          `DYNAMIC_SOURCES in scripts/generate-sitemap.mjs so their pages are indexed`,
      );
    }
    // eslint-disable-next-line no-console
    console.log(`[sitemap] generated public/sitemap.xml with ${count} urls`);
  };
  return {
    name: "aurizin-sitemap",
    configResolved(config) {
      isBuild = config.command === "build";
    },
    buildStart() {
      try {
        run();
      } catch (err) {
        if (isBuild) throw err; // fail the build — SEO output must be correct
        // eslint-disable-next-line no-console
        console.warn(`[sitemap] generation failed: ${err?.message ?? err}`);
      }
    },
    configureServer() {
      try {
        run();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(`[sitemap] generation failed: ${err?.message ?? err}`);
      }
    },
  };
}

// Allow running directly: `node scripts/generate-sitemap.mjs`
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const { count, urls } = generateSitemap();
  // eslint-disable-next-line no-console
  console.log(`Generated public/sitemap.xml with ${count} urls:`);
  // eslint-disable-next-line no-console
  console.log(urls.join("\n"));
}
