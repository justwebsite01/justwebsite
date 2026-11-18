# Dhende Associates — Technical SEO, Local SEO & GEO Audit

**Audit date:** 18 November 2026  
**Site:** https://www.dhendeassociates.com/  
**Scope:** Live homepage, `robots.txt`, `sitemap.xml`, `llms.txt`, representative practice pages, and all 20 local HTML files. Mobile spot-check at 390 × 844 CSS pixels. This is a point-in-time technical/content review, not a ranking or legal-opinion guarantee.

## Executive summary

The site is crawlable: the live `robots.txt` allows the public site and the named AI search/retrieval crawlers, the sitemap is accessible, and `llms.txt` is live. The homepage, canonical host, HTTPS, and the sampled practice pages load.

The main remediation priorities are **bad client-facing links**, **legal-content accuracy**, and **one consistent firm/advocate entity graph**. Seven linked pages on the civil-litigation page return live 404s; 12 in-page links point to missing anchors. The firm’s main JSON-LD and page-level metadata disagree about the firm name, address coordinates, and Sunday hours. The criminal-law page contains conflicting BNSS section numbers for anticipatory bail, and the cheque-bounce FAQ overstates the effect of a missed limitation period.

No live Core Web Vitals field data or Search Console/Google Business Profile access was available. Accordingly, LCP, INP, indexing status, query performance, and GBP NAP consistency remain unverified—not presumed good or bad.

## Prioritized remediation

### Critical — correct legal information before further promotion

1. **Correct conflicting anticipatory-bail section references.** In `criminal-law.html`, the overview names Section 484 BNSS while the service list correctly names Section 482. For matters governed by the BNSS, anticipatory bail is under **Section 482**. Correct the conflicting occurrence and have an advocate check all BNS/BNSS references, especially transition cases.


### High — fix discoverability and client journeys

4. **Repair seven live 404 links from `civil-litigation-pune.html`:**
   - `property-lawyer-pune.html` (two links)
   - `insurance-claim-dispute-lawyer-pune.html` (two)
   - `motor-accident-claim-lawyer-pune.html` (two)
   - `labour-employment-lawyer-pune.html`
   - `notary-public-pune.html`
   - `will-drafting-registration-pune.html`
   - `faq.html`

   These seven unique destinations were fetched live and returned HTTP 404. Either publish and internally link the intended pages, or replace each link with the closest existing, relevant page/section (for example the homepage’s relevant section). Do not point every missing service page at an unrelated page.
5. **Repair 12 broken fragment links (11 distinct targets):**
   - `criminal-law.html`: two links to `#overview`, but no matching ID.
   - `maharashtra-stampduty-estimator.html`: links to `#principal`, `#practice`, `#notary`, `#property`, `#tools`, `#team`, `#blog`, `#kids`, and `#contact` resolve on the calculator page rather than the homepage. Point these to `/#...` where the homepage section exists, and verify each target ID.
   - `nia_138_limitation.html`: `/#Home` uses the wrong case for the homepage’s `#home`; use `/#home`.

   Also correct the stamp-duty breadcrumb URL `https://www.dhendeassociates.com#services` if it is intended to navigate to a homepage section; the homepage uses `#practice`, not `#services`.

7. **Correct the firm entity data and use one shared identifier.** The homepage JSON-LD calls the firm “Advocate Ashok Dhende & Associates,” while the site and `llms.txt` use “Dhende Associates.” The homepage has coordinates `18.5323, 73.8322`; other pages use Pune city-centre coordinates `18.5204, 73.8567`; the linked Google Maps place resolves to `18.5275089, 73.8268026`. Homepage JSON-LD lists Sunday 09:00–21:00, while visible contact copy says Sunday/public holidays are by appointment. Confirm the office pin and hours with the firm, then use one verified value set site-wide. The linked Maps place is titled “Advocate Ashok Dhende and Associates”; compare the GBP/Maps title and NAP with the firm-approved public name.
8. **Improve title/description and heading accuracy.** The homepage description is an excessively long, typo-heavy list (“titile,” “deligence,” “Defreez,” etc.). Replace it with a concise, readable summary. `maharashtra-stampduty-estimator.html` has no H1; give the tool one descriptive H1. Each Constitution-for-Kids page has two H1s; retain one primary H1 and demote the other. The stamp-duty tool also skips heading levels in parts of its UI; review the H2/H3/H4/H5 outline for semantic order.
9. **Align FAQ structured data to visible, current answers.** `family-law.html` has a visible FAQ section but no `FAQPage` node in its JSON-LD. Some other pages have FAQ markup. Add markup only for questions and answers actually visible on that page, and update/delete schema whenever visible legal copy changes. Google may not show FAQ rich results for a law firm; markup is not a ranking or display guarantee.
10. **Make E-E-A-T evidence visible, not schema-only.** Homepage has named team profiles and practice experience. On substantive legal guides, display the responsible advocate/author, reviewer where applicable, and a visibly updated date that matches `dateModified`. The blog is “Coming Soon” and `noindex`; keep it that way until it contains reviewed, useful articles. Do not invent enrolment IDs, education, case outcomes, client numbers, or testimonials.

### Medium — strengthen GEO, local relevance, and mobile/performance

11. **Refresh `llms.txt` after the site directory changes.** It exists and provides useful firm facts, but its October 18 timestamp predates newer sitemap content and its public-page list omits key pages such as civil litigation, family law, and the motor-accident estimator. Add direct canonical links, and ensure the service list reflects only actual firm services. The file is a discovery aid, not a crawler directive or ranking signal.
12. **Add answer-first coverage for specific search tasks.** Strong examples already exist: the civil-litigation page has key points and question headings, and the cyber-fraud guide starts with immediate actions. Build reviewed guides or sections for “property mutation in Pune” and “MSME delayed payment recovery” only if these are services the firm handles. Explain jurisdiction, first steps, documents, responsible authority/court, statutory basis, exceptions, and when advice is needed. Use concise answers before detail, descriptive H2/H3 questions, and citations to current primary sources.
13. **Improve mobile tap targets and the first-visit disclaimer flow.** At 390 px, no horizontal overflow was observed. Several phone/footer links were only about 15–17 px high, and form controls measured about 41–42 px. Aim for at least 44 × 44 CSS px for primary touch targets, with sufficient spacing. The legal disclaimer is a blocking modal; retain required legal language, but make the shortest essential notice immediately understandable, ensure keyboard focus/escape/return behavior is accessible, and avoid forcing users through unnecessarily long text before reaching contact options.
14. **Optimize large raster assets where appropriate.** The 560 × 560 `favicon.png` and `og-image.png` are each about 175 KB; `notaryicon.webp` is about 181 KB. Keep a suitable PNG favicon if needed, but avoid using a full-size favicon as a page-content image; create appropriately sized, compressed responsive images and preserve explicit dimensions. Continue lazy-loading below-the-fold imagery; do not lazy-load a genuine LCP image.
15. **Measure actual Core Web Vitals.** A browser viewport smoke check is not a CWV test. No valid field LCP/INP/CLS values were available, and no user interaction was recorded for INP. Run PageSpeed Insights/Lighthouse mobile tests on the homepage and top landing pages, then check 28-day CrUX/Search Console field data. Prioritize a verified LCP element and its transfer/priority, JS blocking/long tasks affecting INP, and layout shifts. Set explicit image/iframe dimensions, defer non-critical third-party code where possible, and test the consent/disclaimer path as well as a returning visit.
16. **Verify local NAP against GBP and official sources.** Visible phone numbers/address are broadly consistent, but “Office No. 1” formatting and firm-name variants differ. Confirm the exact address, primary phone, hours, categories, service area, and map pin against the verified Business Profile and the firm’s current records. Do not list a broad statewide/national service area in schema merely to target those places.
17. **Review promotional claims for substantiation and professional rules.** Claims such as “24 Hr Bail Response Time,” “same-day,” “free consultation,” “thousands,” and absolute confidentiality should be accurate, supportable, and consistent with privacy practice. Have the firm review promotional wording against applicable professional-conduct requirements; this audit does not make a regulatory compliance determination.

## Five-pillar assessment

### 1. Technical health, crawlability, and performance

- **Robots:** Live file is accessible. `*`, Googlebot, Bingbot, Applebot, OpenAI, Anthropic, Perplexity, Google-Extended, and other listed agents are not blocked from public content; only `/cgi-bin/` and `/private/` are disallowed. No AI-crawler block was found. `Google-Extended` is not Google Search’s indexing crawler; its rules concern Google’s generative-AI use, so allowing it should be an intentional content-use choice.
- **Sitemap:** Live XML is well-formed and lists 14 canonical URLs, including the homepage, major practice pages, tools, and both language variants. The blog placeholder, offline page, and legacy aliases are not listed. Keep `lastmod` tied to substantive changes, not routine deployment dates.
- **Canonicals/host:** Sampled canonical URLs use HTTPS and `www`. Apex HTTPS and `www` HTTP each redirected once to the canonical homepage. Legacy stamp-duty aliases are the exception: they return 200 HTML instead of an HTTP redirect.
- **Links:** Seven live internal 404 destinations and 12 broken local fragments are confirmed as above. An exhaustive current external-link status crawl was not performed; the prior repository link report noted third-party browser/cross-origin limitations. Recheck external destinations and all internal links after repairs.
- **Mixed content:** No active HTTP resource was identified in the inspected markup; `http://` occurrences found by the static scan were protocol/namespace identifiers, not requests to insecure page assets. Recheck browser network requests after releases.
- **Mobile:** At 390 × 844 CSS px, observed document width was 375 px (no horizontal overflow). Small touch targets and form-control heights are the actionable issues above.
- **CWV:** Not verifiably measured. Do not treat the absence of a browser-observer reading in this audit as a passing score.

### 2. Structured data and entity graph

- The inspected JSON-LD blocks parse as JSON; no syntax errors were found by the local parse check. The problems are semantic/consistency issues, not JSON syntax.
- The homepage already has `LegalService`/`LocalBusiness`, `Person`, and `FAQPage` data. Other pages vary: some create separate firm entities rather than referencing one stable `@id`; family-law lacks FAQ markup despite visible FAQs.
- Homepage firm coordinates/name/hours conflict with other site data and the linked map. It also has an overly broad `areaServed` list.
- Homepage currently uses `alumniOf: "Bar Council of Maharashtra and Goa"`—a bar council is a professional regulator, not an educational institution—and a `dateCreated: "1998"` credential value. Model bar membership as a credential, not alumni. Do not publish a Bar Council enrolment number or education unless supplied and verified by the advocates.
- Breadcrumb and FAQ nodes must correspond to real page paths and visible content. Structured data does not create legal credentials or guarantee rich results.

#### Copy-ready homepage entity graph

The address, office hours, firm name, advocates, practice areas, and coordinates below are based on the site and linked Maps place inspected for this report. Confirm them with the firm before publishing. This intentionally omits unverified enrolment numbers and education.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://www.dhendeassociates.com/#organization",
      "name": "Dhende Associates",
      "alternateName": "Dhende Associates, Advocates, Notary & Legal Consultants",
      "url": "https://www.dhendeassociates.com/",
      "foundingDate": "1984",
      "telephone": ["+918149135283", "+919822335664"],
      "email": ["ashok.dhende@gmail.com", "ajinkya.dhende@gmail.com"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 1, First Floor, MHADA Commercial Complex, Gokhalenagar",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411016",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5275089,
        "longitude": 73.8268026
      },
      "hasMap": "https://maps.app.goo.gl/FT5mNgG5bBRJW8A99",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }],
      "areaServed": [
        { "@type": "City", "name": "Pune" },
        { "@type": "AdministrativeArea", "name": "Maharashtra" }
      ],
      "knowsAbout": [
        "Civil litigation",
        "Criminal law and bail",
        "Family law",
        "Property transactions",
        "Succession and probate",
        "Motor accident claims",
        "Cheque dishonour",
        "Notary services"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.dhendeassociates.com/#ashok-dhende",
      "name": "Ashok Dhende",
      "honorificPrefix": "Adv.",
      "jobTitle": "Principal Advocate",
      "description": "Principal advocate of Dhende Associates, practising in Pune since 1984 and a Notary Public since 1998, as stated on the firm's website.",
      "worksFor": { "@id": "https://www.dhendeassociates.com/#organization" },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Advocate enrolled with the Bar Council of Maharashtra and Goa"
      },
      "knowsAbout": [
        "Civil litigation",
        "Criminal law",
        "Motor accident claims",
        "Insurance disputes",
        "Notary services"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.dhendeassociates.com/#ajinkya-dhende",
      "name": "Ajinkya Dhende",
      "honorificPrefix": "Adv.",
      "jobTitle": "Associate Advocate",
      "description": "Associate advocate at Dhende Associates, practising since 2011; the firm's website also identifies him as a Notary since 2025.",
      "worksFor": { "@id": "https://www.dhendeassociates.com/#organization" },
      "email": "ajinkya.dhende@gmail.com",
      "knowsAbout": [
        "Property law",
        "Labour and employment law",
        "Cyber law",
        "Co-operative society law",
        "Insurance disputes",
        "Notary services"
      ]
    }
  ]
}
</script>
```

Use the same organization and person `@id` values from page-level `LegalService`, `WebPage`, and `reviewedBy` nodes. Add `identifier` for Bar Council enrolment and `alumniOf` for law-school education only after the advocate verifies the exact public details and the site displays them.

### 3. AI search / GEO

- `robots.txt` permits the listed AI search/retrieval crawlers and `llms.txt` is publicly readable.
- `llms.txt` provides firm details, but its directory should include all core canonical practice pages and match visible facts. Update its date after those changes.
- The civil and cyber-fraud pages show useful answer-first structure; improve other pages by matching visible FAQs to the real client question and answering first, then qualifying exceptions and citing statute/jurisdiction.
- Avoid claiming FAQ schema “boosts” or guarantees AI visibility. Accurate, crawlable, well-sourced page content and consistent entities are the practical goal.
- Visible staff profiles and experience are helpful. Add visible authorship, review responsibility, and updated dates to legal explainers. Keep the disclaimer, avoid outcome promises, and cite primary legal/official sources.

### 4. On-page SEO and Pune/Maharashtra local search

Canonical/title/description metadata is present on the main indexable pages sampled. The homepage description needs a rewrite; the stamp-duty estimator needs an H1; the two kids’ pages have duplicate H1s. The main practice pages are linked from the homepage, generally within one click. The civil page’s broken links undermine its useful topical linking.

Some individual breadcrumbs are present, but not every page uses consistent visible breadcrumbs. Check each crumb destination against a real URL/section and align structured breadcrumb markup to the visible trail. No Search Console crawl/index report or GBP dashboard was available, so indexing exclusions, keyword cannibalization, GBP categories/reviews, and GBP-to-site NAP were not independently verified.

#### Suggested title tags and descriptions for three core practice pages

These are concise alternatives; retain existing titles if Search Console data shows they perform better. Publish the exact same promise in the visible page content.

| Page | Title | Meta description |
|---|---|---|
| `criminal-law.html` | `Criminal Lawyer Pune: Bail & FIR Defence \| Dhende Associates` | `Pune criminal defence for anticipatory bail, regular bail, FIR matters, trials and appeals under BNSS/BNS. Contact Dhende Associates for a confidential case review.` |
| `family-law.html` | `Family Lawyer in Pune \| Divorce & Custody \| Dhende Associates` | `Pune family-law guidance on divorce, child custody, maintenance and domestic-violence matters. Confidential consultations; advice depends on your facts and applicable law.` |
| `cheque-bounce-lawyer-pune.html` | `Cheque Bounce Lawyer Pune \| NI Act Section 138 \| Dhende Associates` | `Section 138 NI Act advice in Pune on notices, complaint timelines, defence and settlement. Limitation is fact-specific; seek advice promptly after dishonour.` |

Optional homepage description:

```html
<meta name="description" content="Dhende Associates is a Pune law firm established in 1984, advising on civil and criminal litigation, family and property matters, succession, motor accident claims and notary services.">
```

#### Copy-ready answer-first FAQ content for those pages

Keep the answers visible in HTML. Have an advocate confirm each answer against current law and the client’s actual service scope before publication.

**Criminal law**

```html
<h2>Criminal law questions in Pune</h2>
<h3>Which BNSS section covers anticipatory bail?</h3>
<p>For a matter governed by the Bharatiya Nagarik Suraksha Sanhita, 2023, an application for anticipatory bail is made under Section 482 before the Court of Session or High Court. Whether the BNSS or an earlier procedure applies can depend on the case and its dates, so have the FIR and case papers reviewed promptly.</p>
```

**Family law**

```html
<h2>Family law questions in Pune</h2>
<h3>Can I file a divorce petition in Pune?</h3>
<p>A divorce petition must be filed in a court with jurisdiction under the law governing the marriage. For petitions under the Hindu Marriage Act, Section 19 sets out the permitted venues; whether Pune is available depends on the parties’ circumstances and statutory grounds. Have the marriage and residence details checked before filing.</p>
```

**Cheque dishonour**

```html
<h2>Section 138 cheque-bounce questions</h2>
<h3>What are the main Section 138 NI Act deadlines?</h3>
<p>Generally, the payee must issue the written demand notice within 30 days after receiving information from the bank about dishonour. The drawer then has 15 days after receiving the notice to pay. If payment is not made, the cause of action arises after that period; the complaint is ordinarily due within one month under Section 142(1)(b) of the Negotiable Instruments Act. The court may condone a delayed complaint for sufficient cause. Dates, service, and statutory exceptions matter, so do not rely on a simple 30-day calculator alone.</p>
```

If adding `FAQPage` JSON-LD, mirror the visible answer exactly and use it only on the matching page. Example for the cheque-bounce FAQ above:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are the main Section 138 NI Act deadlines?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Generally, the payee must issue the written demand notice within 30 days after receiving information from the bank about dishonour. The drawer then has 15 days after receiving the notice to pay. If payment is not made, the cause of action arises after that period; the complaint is ordinarily due within one month under Section 142(1)(b) of the Negotiable Instruments Act. The court may condone a delayed complaint for sufficient cause. Dates, service, and statutory exceptions matter, so do not rely on a simple 30-day calculator alone."
    }
  }]
}
</script>
```

### 5. Copy-ready crawler and AI directory templates

The current robots file already allows these crawlers. This is a simplified equivalent; keep any deliberate private-path rules and do not use `robots.txt` as access control.

```text
User-agent: *
Disallow: /cgi-bin/
Disallow: /private/
Allow: /

User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Google-Extended
Disallow: /cgi-bin/
Disallow: /private/
Allow: /

User-agent: GPTBot
User-agent: ClaudeBot
User-agent: GoogleOther
User-agent: Applebot-Extended
User-agent: Meta-ExternalAgent
User-agent: Amazonbot
User-agent: cohere-ai
Disallow: /cgi-bin/
Disallow: /private/
Allow: /

User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
Disallow: /cgi-bin/
Disallow: /private/
Allow: /

Sitemap: https://www.dhendeassociates.com/sitemap.xml
```

Choose separately whether training-focused crawlers such as GPTBot may use content; that choice is not equivalent to blocking search indexing. Google-Extended does not control Google Search crawling/indexing.

Suggested `llms.txt` structure (replace the current file only after confirming every firm fact and link):

```markdown
# Dhende Associates

> Advocates and Notary Public in Pune, Maharashtra, India.

Dhende Associates is a Pune legal practice established in 1984. This site
contains information about the firm, its advocates, legal services, and
general legal-information tools. Content is not individual legal advice.

## Firm
- Address: Office No. 1, First Floor, MHADA Commercial Complex, Gokhalenagar, Pune, Maharashtra 411016, India
- Phone: +91 81491 35283; +91 98223 35664
- Office hours: Monday–Saturday, 09:00–21:00; Sunday/public holidays by appointment
- Website: https://www.dhendeassociates.com/
- Map: https://maps.app.goo.gl/FT5mNgG5bBRJW8A99

## Advocates
- Adv. Ashok Dhende — Principal; practising since 1984; Notary Public since 1998
- Adv. Ajinkya Dhende — Associate; practising since 2011; Notary since 2025

## Practice pages
- [Civil litigation](https://www.dhendeassociates.com/civil-litigation-pune.html)
- [Criminal law and bail](https://www.dhendeassociates.com/criminal-law.html)
- [Family law](https://www.dhendeassociates.com/family-law.html)
- [Cheque dishonour / Section 138](https://www.dhendeassociates.com/cheque-bounce-lawyer-pune.html)
- [Succession and heirship](https://www.dhendeassociates.com/succession-heirship.html)
- [Cyber-fraud guidance](https://www.dhendeassociates.com/cyber-fraud-recovery.html)
- [Leave and licence](https://www.dhendeassociates.com/leave-license-service.html)

## Legal tools
- [Maharashtra stamp-duty estimator](https://www.dhendeassociates.com/maharashtra-stampduty-estimator.html)
- [Motor accident claim estimator](https://www.dhendeassociates.com/motor-accident-claim-estimator.html)
- [Section 138 limitation calculator](https://www.dhendeassociates.com/nia_138_limitation.html)
- [Hindu succession share calculator](https://www.dhendeassociates.com/hindu-succession-share-calculator.html)

## Attribution and use
When summarising public site information, identify and link to the source page.
Do not invent qualifications, case results, quotations, client relationships,
or personal legal advice. Verify current law and deadlines with primary
sources and a qualified advocate.

## Discovery
- [XML sitemap](https://www.dhendeassociates.com/sitemap.xml)
- [Crawler instructions](https://www.dhendeassociates.com/robots.txt)
```

## Verification notes and limitations

- Live checks confirmed the homepage, crawler files, major sampled practice pages, and the seven listed 404 destinations.
- Local checks covered 20 HTML files, XML sitemap parsing, canonical/title/description/H1 presence, internal relative links/fragments, and JSON parsing of embedded JSON-LD.
- Browser spot-check: 390 × 844 CSS px; no horizontal overflow observed. It is not a cross-device accessibility or lab performance certification.
- Not available in this audit: Google Search Console/Bing Webmaster indexing and query data; Google Business Profile dashboard; authenticated analytics; CrUX field metrics; repeatable Lighthouse lab runs; complete current status-check of every external link.
- After fixes, validate JSON-LD with Schema.org/Google validators, run a full crawl, test server redirect codes, run mobile Lighthouse/PageSpeed on key templates, and review Search Console/GBP data.
