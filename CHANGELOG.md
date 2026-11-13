# SEO implementation changelog

The pre-change crawl and baseline findings are recorded in [AUDIT.md](./AUDIT.md).

## Files changed

### Homepage, service pages and resources

- `index.html` — homepage service links, contact information and footer practice-area navigation.
- `blog.html` — converted the former placeholder into a legal-resources index with links to guides and tools.
- `faq.html` — added the question-and-answer hub.
- `notary-public-pune.html` — added the notary service guide.
- `property-lawyer-pune.html` — added the property-law guide.
- `motor-accident-claim-lawyer-pune.html` — added the motor-accident service guide.
- `insurance-claim-dispute-lawyer-pune.html` — added the insurance-dispute guide.
- `will-drafting-registration-pune.html` — added the will-drafting guide.
- `civil-litigation-pune.html` — added the civil-litigation guide.
- `labour-employment-lawyer-pune.html` — added the labour and employment guide.
- `leave-license-service.html` — updated service-page metadata, contact details, and links.
- `criminal-law.html` — updated metadata, contact details, and related practice-area links.
- `cheque-bounce-lawyer-pune.html` — updated metadata, contact details, related links, and enquiry wording.
- `cyber-fraud-recovery.html` — updated metadata, contact details, and practice-area links.
- `family-law.html` — updated metadata, contact details, and related links.
- `succession-heirship.html` — updated metadata, structured contact data, and related links.
- `hindu-succession-share-calculator.html` — added methodology and limitations content, calculator schema, and explanatory updates.
- `motor-accident-claim-estimator.html` — added methodology and FAQ content, calculator schema, and service links.
- `maharashtra-stampduty-estimator.html` — added methodology and FAQ content and calculator schema.
- `nia_138_limitation.html` — updated calculator metadata, explanatory content, and calculator schema.
- `constitutionforkids_eng.html` — updated page heading semantics, contact details, and navigation.
- `constitutionforkids_mar.html` — updated contact details and navigation.

### Discovery, styles and URL handling

- `sitemap.xml` — lists the canonical indexable pages.
- `robots.txt` — documents crawler access and sitemap and AI-readable file locations.
- `llms.txt` — adds the site overview, contact facts, and canonical page index.
- `llms-full.txt` — adds extended site and content-handling information.
- `style.css` — adds scoped styles for the new service-guide pages.
- `maharashtra-stamp-duty-calculator.html`, `maharshtra-stampduty-estimator.html`, and `msdr.html` — updated legacy calculator URL handling.
- `offline.html` — updated the offline page.
- `CHANGELOG.md` — this change summary and follow-up checklist.

## Verification

- Local crawl: 27 HTML files found; 22 canonical indexable pages matched the 22 sitemap URLs.
- Local internal-link and fragment check: no broken local targets; all 22 indexable pages were reachable from the homepage.
- Metadata and structure checks: indexable pages have one H1, titles within 60 characters, and matching title, Open Graph title, and Twitter title. One description remains over the requested limit: `civil-litigation-pune.html` (158 characters).
- JSON-LD: all embedded blocks parsed as JSON. This confirms syntax only, not full schema.org conformance or legal accuracy.
- Remaining legacy `meta name="keywords"` tags are present on `index.html`, `maharashtra-stampduty-estimator.html`, and `nia_138_limitation.html`.
- `html-validate` was run across the HTML files. Its default rules reported 931 diagnostics, dominated by existing inline-style, phone-spacing, button-type, and void-element style findings; it also reported structural and accessibility findings in legacy pages. The full validator run is not clean.
- External link availability, mobile Core Web Vitals, and calculator outputs have not been independently verified.

## Manual follow-ups

- [ ] Resubmit `sitemap.xml` in Google Search Console.
- [ ] Request indexing for the new service pages and FAQ hub.
- [ ] Update the Google Business Profile with the confirmed firm details and service links.
- [ ] Review Search Console **Pages > Indexing** for canonical-selection and 404 issues.
- [ ] Have a qualified Indian legal reviewer verify the NI Act, Hindu succession, MACT, and stamp-duty content and calculator assumptions before relying on them.
- [ ] Confirm legal-review attribution before replacing any “pending confirmation” notice.
- [ ] Check mobile PageSpeed/Core Web Vitals, including LCP under 2.5 seconds and CLS under 0.1.
