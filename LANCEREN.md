# Lanceren: dekvloerexperts.nl

De site bouwt automatisch op Netlify bij elke push naar `main` (`npm run build`, map `dist`).
De wachtwoord-demo staat uit; alle pagina's zijn openbaar en mogen door Google geïndexeerd worden.

## 1. Domein koppelen (Netlify)

1. Netlify → site **dekvloerexpert** → *Domain management* → *Add a domain* → `dekvloerexperts.nl`.
2. Kies `www.dekvloerexperts.nl` als **primary domain** (de canonical-URL's en de sitemap gebruiken www).
   Netlify stuurt `dekvloerexperts.nl` en `dekvloerexpert.netlify.app` dan automatisch door.
3. DNS bij de registrar (als je de DNS daar houdt):

   | Type  | Naam | Waarde                         |
   |-------|------|--------------------------------|
   | A     | @    | 75.2.60.5                      |
   | CNAME | www  | dekvloerexpert.netlify.app     |

   Of zet de nameservers van het domein op Netlify DNS (dan regelt Netlify dit zelf).
4. Netlify → *HTTPS* → het certificaat (Let's Encrypt) wordt automatisch aangemaakt.

## 2. E-mail: info@dekvloerexpert.nl via Zoho Mail (EU)

Voeg in de DNS toe (waarden staan ook in het Zoho-beheerpaneel; die zijn leidend):

| Type | Naam | Waarde | Prioriteit |
|------|------|--------|-----------|
| TXT  | @ | `zoho-verification=…` (uit Zoho) | |
| MX   | @ | mx.zoho.eu | 10 |
| MX   | @ | mx2.zoho.eu | 20 |
| MX   | @ | mx3.zoho.eu | 50 |
| TXT  | @ | `v=spf1 include:zohomail.eu ~all` | |
| TXT  | `zmail._domainkey` | DKIM-sleutel uit Zoho | |
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@dekvloerexpert.nl` | |

## 3. Offerte per e-mail (Netlify Forms)

Netlify → *Forms* → *Enable form detection* → één keer opnieuw deployen →
*Form notifications* → *Add notification* → *Email notification* → `info@dekvloerexpert.nl`.
Aanvragen gaan daarnaast altijd via WhatsApp.

## 4. Google

1. [Google Search Console](https://search.google.com/search-console) → *Domein-property* `dekvloerexperts.nl`
   (verifiëren met een TXT-record in de DNS) — met het Google-account van de klant.
2. *Sitemaps* → `https://www.dekvloerexperts.nl/sitemap.xml` indienen.
   Dit is een sitemap-index met een aparte sitemap per provincie (alle gemeente- en plaatspagina's),
   zodat je per regio ziet hoeveel pagina's geïndexeerd zijn.
3. *URL-inspectie* → home, `/werkgebied` en een paar grote steden → *Indexering aanvragen*.
4. Google Bedrijfsprofiel: link invullen in `src/config.mjs` → `googleReviewsUrl`; echte reviews in `reviews`.
   Zolang die leeg zijn, toont de site geen reviewbadge en geen reviewsectie.

## 5. Nog in te vullen (src/config.mjs)

- `socials`: Instagram, TikTok, YouTube, Facebook (lege links worden niet getoond)
- `kvk`: KvK-nummer (verschijnt in de footer)
- `stats`: cijfers in de hero laten bevestigen door de klant
