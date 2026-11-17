# Website Link Failure Report

**Site:** [www.dhendeassociates.com](https://www.dhendeassociates.com/)  
**Scanned:** November 14, 2026  
**Scope:** Public pages discovered from the homepage and `sitemap.xml`, plus their linked destinations.

## Summary

- Crawled 24 internal destinations and examined 541 HTTP(S) link occurrences, representing 135 distinct URLs.
- **7 distinct internal link destinations return HTTP 404.** All originate on [civil-litigation-pune.html](https://www.dhendeassociates.com/civil-litigation-pune.html); together they account for 10 link occurrences.
- **11 distinct in-page fragment targets are missing** (12 link occurrences). These pages load, but the links do not reach the intended section.
- Browser checks could not read some third-party destinations because of cross-origin restrictions. Direct HTTP checks confirmed those destinations were reachable, so they are not reported as failures.

## Confirmed broken page links

| Linked page | Status | Link text on civil litigation page |
|---|---:|---|
| [property-lawyer-pune.html](https://www.dhendeassociates.com/property-lawyer-pune.html) | 404 | “property lawyer in Pune”; “Property law” |
| [insurance-claim-dispute-lawyer-pune.html](https://www.dhendeassociates.com/insurance-claim-dispute-lawyer-pune.html) | 404 | “insurance claim disputes”; “Insurance disputes” |
| [motor-accident-claim-lawyer-pune.html](https://www.dhendeassociates.com/motor-accident-claim-lawyer-pune.html) | 404 | “Motor Accident Claim”; “Motor accident claims” |
| [labour-employment-lawyer-pune.html](https://www.dhendeassociates.com/labour-employment-lawyer-pune.html) | 404 | “Labour and employment” |
| [notary-public-pune.html](https://www.dhendeassociates.com/notary-public-pune.html) | 404 | “Notary public” |
| [will-drafting-registration-pune.html](https://www.dhendeassociates.com/will-drafting-registration-pune.html) | 404 | “Will drafting” |
| [faq.html](https://www.dhendeassociates.com/faq.html) | 404 | “FAQs” |

**Source for every row:** [civil-litigation-pune.html](https://www.dhendeassociates.com/civil-litigation-pune.html)

## Broken in-page navigation

These are not HTTP page-load failures; each destination page loads, but the referenced fragment does not exist.

| Source page | Missing fragment(s) | Occurrences |
|---|---|---:|
| [criminal-law.html](https://www.dhendeassociates.com/criminal-law.html) | `#overview` | 2 |
| [maharashtra-stampduty-estimator.html](https://www.dhendeassociates.com/maharashtra-stampduty-estimator.html) | `#principal`, `#practice`, `#notary`, `#property`, `#tools`, `#team`, `#blog`, `#kids`, `#contact` | 9 |
| [nia_138_limitation.html](https://www.dhendeassociates.com/nia_138_limitation.html) | `/#Home` — homepage has `id="home"` (lowercase) | 1 |

## Suggested follow-up

For each 404, either publish the intended page or change/remove the link so it points to an existing destination. For the fragment links, align the fragment with an existing section ID or point the link to the correct page and section. Recheck after deployment.

## Method and limitations

The scan began at the live homepage and seeded the crawl with sitemap URLs, then followed HTTP(S) links on discovered pages. Internal link destinations were checked for HTTP status, and fragment targets were checked against destination page IDs. Third-party links affected by browser cross-origin restrictions were checked separately with direct HTTP requests. Results are a point-in-time check and can change after deployment or on later requests.
