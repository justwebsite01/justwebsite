# Website SEO, AI Discoverability, and Consistency Audit

**Reviewed:** October 14, 2026
**Scope:** Public HTML pages, robots.txt, sitemap.xml, llms.txt, and shared styles.

## Changes made

- Kept the blog and offline fallback out of search results: the blog is a coming-soon placeholder with `noindex`, and the offline page is a utility page with `noindex`. Neither is included in the sitemap.
- Corrected the Marathi Constitution page's duplicate English description and added reciprocal `x-default` hreflang references for its English/Marathi versions.
- Added OpenAI and Anthropic search/retrieval crawler declarations to robots.txt while retaining the existing crawler rules.
- Completed the AI-readable public-page directory in llms.txt and replaced unsupported court/jurisdiction labels with a qualified Maharashtra service-area description.
- Removed structured review and rating claims from four service pages where those reviews were schema-only and not displayed as page content.
- Added a shared brand-consistency stylesheet across public HTML pages to give site navigation and footers a consistent gold accent and keyboard focus treatment. Page-specific layouts, including the child-focused Constitution lessons, remain intact.
- Added a visible semantic H1 to the Section 138 limitation calculator, which previously had no H1.

## Existing strengths retained

- Indexable pages have canonical URLs, descriptions, Open Graph metadata, and Twitter cards.
- The sitemap contains public, indexable pages and paired hreflang references for the two Constitution lessons; it excludes the blog placeholder and offline utility page.
- The offline page correctly uses `noindex`.
- Service and calculator pages already use structured data where appropriate; existing JSON-LD remains in place apart from the unsupported review/rating claims.
- Purple and gold are already the shared firm identity. The Constitution learning pages intentionally use a more playful palette while retaining the firm's branding.

## Follow-up checks for the site owner

- Verify business facts, service areas, opening hours, staff biographies, and legal guidance against current firm-approved information before publishing changes to those claims.
- Add substantive, reviewed articles before making the blog indexable or adding it to the sitemap.
- Keep `lastmod` values in sitemap.xml tied to actual page updates; do not refresh dates just to signal activity.
- Validate rich results and crawl/index status in Google Search Console and Bing Webmaster Tools after deployment. Robots rules and metadata request crawling/indexing but cannot guarantee it.
- Review Core Web Vitals on deployed pages after CSS changes, particularly tool pages with large inline styles and scripts.

## Important

This audit describes site configuration, not a guarantee of rankings, indexing, or AI citations. Legal calculators and informational pages should continue to clearly state their assumptions and that results are not individual legal advice.
