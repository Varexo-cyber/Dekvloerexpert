// Vaste pagina's: home, diensten, opties, projecten, werkwijze, kennisbank, offerte, contact.
import { readFileSync } from 'node:fs';
import { site } from './config.mjs';
import { PROJECT_LIST, MORE_PHOTOS } from './projects.mjs';
import { page, hero, cta, icon, waIcon, wa, tel, esc, googleWord, crumbLd, faqLd, faqHtml, SERVICES } from './layout.mjs';
import { OPTIONS, STEPS, stepsHtml, optionCards, reviewsSection, PROJECTS, projectCard, featureList, keywordBand, ruler, heroCard, buildUp, calculator, offerteTool, gallery, galleryBand, videoSection, EXTRAS, cityBand } from './blocks.mjs';


const HOME_CTA_TITLE = 'Klaar voor een <span class="accent">sterke basis?</span>';
const HOME_CTA_LEAD = 'Heeft u een zandcementdekvloer nodig voor uw woning, verbouwing of bouwproject? Bij Dekvloerexpert bent u aan het juiste adres. Vertel ons uw wensen en ontvang een vrijblijvende offerte op maat.';
const HOME_STEPS = [
  ['Persoonlijk advies', 'Wij bekijken uw wensen en de technische eisen van het project. Op basis daarvan adviseren wij over de juiste vloeropbouw, dikte en eventuele extra toevoegingen.'],
  ['Duidelijke offerte', 'U ontvangt een vrijblijvende offerte met een helder overzicht van de werkzaamheden en kosten. Zo weet u vooraf waar u aan toe bent.'],
  ['Vakkundige uitvoering', 'Onze ervaren vakmensen werken efficiënt, met professioneel materieel en volgens de gemaakte afspraken. Wij zorgen voor een nette uitvoering.'],
  ['Strak afgewerkte dekvloer', 'Wij leveren een nauwkeurig afgewerkte zandcementdekvloer op, klaar om na voldoende droging verder afgewerkt te worden met de gewenste vloerbedekking.'],
];

// ───────────────────────── Home
export function home(ctx) {
  const stats = `<div class="hero-stats">${site.stats.map(([b, s]) => `<div class="hstat"><b>${b}</b><span>${s}</span></div>`).join('')}</div>`;
  const body = `
${hero({
    sub: false, video: ctx.media.heroVideo, videoWebm: ctx.media.heroWebm, poster: ctx.media.heroVideoPoster, img: ctx.media.heroPoster,
    wide: ctx.media.heroWide, wideWebm: ctx.media.heroWideWebm, widePoster: ctx.media.heroWidePoster, after: stats,
    h1: 'Zandcement dekvloeren:<br><span class="accent">Een sterke basis<br class="br-d"> voor ieder project</span>',
    lead: 'Dekvloerexpert is gespecialiseerd in het vakkundig aanbrengen van zandcementdekvloeren. Van particuliere woningen tot grootschalige bouwprojecten. Wij staan voor kwaliteit, vakmanschap en betrouwbare afspraken.',
    checks: ['Specialist in zandcementdekvloeren', 'Voor nieuwbouw en renovatie', 'Landelijk inzetbaar', 'Voor particulieren en aannemers'],
    extra: site.googleReviewsUrl || process.env.DEMO ? `<a class="gbadge" href="${site.googleReviewsUrl || '#reviews'}"${site.googleReviewsUrl ? ' target="_blank" rel="noopener"' : ''}>${googleWord}<span class="stars">★★★★★</span>Reviews</a>` : '',
    buttons: `<div class="btn-row hero-btns"><a class="btn btn-teal" href="/offerte">Vraag vrijblijvend een offerte aan ${icon('arrow')}</a><a class="btn btn-wa" href="${wa()}" target="_blank" rel="noopener">${waIcon} WhatsApp</a><a class="btn btn-ghost" href="${tel}">${icon('phone')} Bel direct</a></div>`,
  })}

<section><div class="wrap split">
<div class="reveal">
<span class="eyebrow">Onze hoofddienst</span>
<h2>Zandcement dekvloeren <span class="accent">van topkwaliteit</span></h2>
<p class="lead">Een sterke, duurzame en strak afgewerkte vloer begint bij een goede basis.</p>
<p style="color:var(--muted)">Dekvloerexpert is gespecialiseerd in het vakkundig aanbrengen van zandcementdekvloeren. Of het nu gaat om nieuwbouw, renovatie, particuliere woningen of grote bouwprojecten: wij zorgen voor een stevige en nauwkeurig afgewerkte ondervloer.</p>
<p style="color:var(--muted)">Onze zandcementdekvloeren vormen een uitstekende basis voor verschillende vloerafwerkingen, zoals tegels, pvc, parket en gietvloeren. Ook zijn ze uitstekend te combineren met vloerverwarming.</p>
<p style="color:var(--muted)">Met jarenlange ervaring, vakmanschap en oog voor detail leveren wij kwaliteit waarop u kunt vertrouwen. Wij werken voor zowel particulieren als aannemers en bouwbedrijven, door heel Nederland.</p>
${featureList([
    ['flame', 'Perfect voor vloerverwarming', 'Zandcementdekvloeren zijn uitstekend te combineren met vloerverwarming en zorgen bij de juiste aanleg voor een gelijkmatige warmteverdeling.'],
    ['shield', 'Sterk en duurzaam', 'Een stevige en betrouwbare ondervloer, afgestemd op de belasting en het gebruik van de ruimte.'],
    ['ruler', 'Strak en nauwkeurig afgewerkt', 'Wij brengen iedere dekvloer op de juiste hoogte aan, waterpas of met afschot waar nodig.'],
    ['home', 'Geschikt voor diverse ruimtes', 'Van woonkamers en badkamers tot garages en bedrijfspanden. Voor iedere ruimte de juiste vloeropbouw.'],
  ])}
</div>
<!--photo--><div class="photo reveal"><img src="/assets/img/dekvloer-2.jpg" alt="Vers gelegde zandcement dekvloer" width="1200" height="1400" loading="lazy"></div><!--/photo-->
</div></section>

<!--media--><section class="dark ons-werk"><div class="wrap reveal">
<span class="eyebrow">Ons werk</span>
<h2>Van voorbereiding tot<br><span class="accent">perfect afgewerkte dekvloer.</span></h2>
<p class="lead" style="max-width:640px">Van particuliere woningen tot grootschalige nieuwbouw- en utiliteitsprojecten: Dekvloerexpert staat voor vakmanschap, kwaliteit en een strakke afwerking.</p>
<p style="max-width:640px;color:#b9c3c0">Met jarenlange ervaring, modern materieel en een vakkundig team realiseren wij zandcementdekvloeren voor ieder type project. Wij werken efficiënt, komen onze afspraken na en laten de werkplek netjes achter.</p>
<a class="text-link" href="/projecten">Bekijk onze projecten en ontdek ons vakmanschap ${icon('arrow')}</a>
</div>
<div class="gal-band-wrap full">${galleryBand(PROJECT_LIST.map(p => ({ src: p.img, caption: p.title, video: false })).concat(MORE_PHOTOS.slice(0, 4).map(([src, caption]) => ({ src, caption, video: false }))))}</div>
</section><!--/media-->
${videoSection(ctx.media.videos, { title: 'Zo werken wij <span class="accent">op de bouw</span>', lead: 'Van het mengen van de zandcementmortel tot het aanbrengen van de dekvloer. Bekijk onze video\'s en ontdek hoe wij met professionele machines en vakmanschap een strakke zandcement dekvloer realiseren.', note: 'Bekijk onze werkzaamheden in de praktijk.' })}

<section class="paper"><div class="wrap split rev">
<!--photo--><div class="photo reveal"><img src="/assets/img/dekvloer-1.jpg" alt="Dekvloer in een bedrijfspand" width="1200" height="900" loading="lazy">
<div class="photo-badge"><span class="ic">${icon('users')}</span><div><b>Van advies tot oplevering</b><span>Eén vast aanspreekpunt voor uw zandcementdekvloer.</span></div></div></div><!--/photo-->
<div class="reveal">
<span class="eyebrow">Aannemers en particulieren</span>
<h2>Betrouwbaar voor aannemers, <span class="accent">zorgeloos voor particulieren.</span></h2>
<div class="aud aud-ticks">
<div><div class="aud-h"><span class="f-ic">${icon('building')}</span><h3>Voor aannemers</h3></div>
<p>In de bouw is tijd geld. Wij kennen de planning op de bouwplaats.</p>
<ul class="ticks">
<li>${icon('check')}<div><b>Flexibele planning</b><span>Wij schakelen snel en komen afspraken na.</span></div></li>
<li>${icon('check')}<div><b>Kwaliteit conform normen</b><span>Vloeren die voldoen aan de gestelde sterkteklasse en vlakheid.</span></div></li>
<li>${icon('check')}<div><b>Schoon en efficiënt</b><span>Wij laten de werkplek netjes achter en werken met modern materieel.</span></div></li>
</ul></div>
<div><div class="aud-h"><span class="f-ic">${icon('home')}</span><h3>Voor particulieren</h3></div>
<p>Een verbouwing of nieuwbouwproject brengt al genoeg zorgen met zich mee. Bij Dekvloerexpert zorgen wij voor een vakkundig aangelegde zandcementdekvloer, zodat u met een gerust gevoel verder kunt met uw project.</p>
<ul class="ticks">
<li>${icon('check')}<div><b>Persoonlijk en deskundig advies</b><span>Wij bekijken uw situatie en adviseren over de juiste vloeropbouw, dikte en eventuele toevoegingen, zoals vezelversterking of een droogtijdversneller.</span></div></li>
<li>${icon('check')}<div><b>Duidelijke afspraken, geen verrassingen</b><span>Wij zorgen voor heldere communicatie, een transparante offerte en duidelijke afspraken over de uitvoering en kosten.</span></div></li>
<li>${icon('check')}<div><b>Een perfecte basis voor uw vloerafwerking</b><span>Of u nu kiest voor tegels, pvc, parket of een gietvloer: wij zorgen voor een stevige en nauwkeurig afgewerkte ondervloer, ook bij vloerverwarming.</span></div></li>
</ul></div>
</div></div>
</div></section>

<section class="dark"><div class="wrap">
<div class="center sec-head reveal"><span class="eyebrow">Maatwerk &amp; opties</span>
<h2>Extra mogelijkheden <span class="accent">voor uw dekvloer</span></h2>
<p class="lead">Iedere vloer is anders. Daarom bieden wij verschillende mogelijkheden om uw zandcementdekvloer af te stemmen op uw wensen en de eisen van het project.</p></div>
${optionCards(OPTIONS)}
</div></section>

<section class="dark" id="offerte-tool" style="padding-top:0"><div class="wrap">
<div class="center sec-head reveal"><span class="eyebrow">Offerte op maat</span>
<h2>Vraag eenvoudig uw <span class="accent">offerte op maat aan</span></h2>
<p class="lead">Vul de oppervlakte, vloerdikte en gewenste extra opties in. Verstuur uw aanvraag eenvoudig via WhatsApp en ontvang van ons een passende offerte.</p></div>
${offerteTool()}
</div></section>

<section><div class="wrap">
<div class="center sec-head reveal"><span class="eyebrow">Werkwijze</span>
<h2>Van eerste contact tot<br><span class="accent">vakkundig afgewerkte dekvloer</span></h2>
<p class="lead">Bij Dekvloerexpert staan kwaliteit, duidelijke communicatie en betrouwbare afspraken centraal. Van het eerste advies tot de oplevering zorgen wij voor een professionele uitvoering.</p></div>
${stepsHtml(HOME_STEPS)}
</div>
${cityBand(ctx)}
</section>

${reviewsSection()}

${cta()}`;
  return page({
    path: '/', active: '/',
    title: 'Zandcement dekvloer laten leggen | Dekvloerexpert',
    description: 'Zandcement dekvloeren voor nieuwbouw, renovatie en utiliteit in heel Nederland. Kaarsrecht en legklaar, met vloerverwarming en extra opties. Vraag een offerte aan, direct via WhatsApp.',
    body, footerPlaces: ctx.footerPlaces,
    ld: [{ '@type': 'WebSite', name: site.name, url: site.url + '/' }],
  });
}

const HOME_FAQ = [
  ['Wat kost een zandcementdekvloer per m²?', 'De kosten zijn afhankelijk van de oppervlakte, vloerdikte, bereikbaarheid en eventuele extra toevoegingen, zoals vezelversterking of een droogtijdversneller. Bij Dekvloerexpert ontvangt u een duidelijke, vrijblijvende offerte op maat. Vul eenvoudig uw gegevens in via onze offertecalculator of neem contact met ons op voor persoonlijk advies.'],
  ['Hoe lang is de droogtijd van een cementdekvloer?', 'De droogtijd hangt af van de vloerdikte, temperatuur, luchtvochtigheid en ventilatie. Als algemene richtlijn geldt ongeveer één week per centimeter tot 4 cm dikte. Bij dikkere vloeren duurt het drogen langer. Met een geschikte droogtijdversneller kan de droogtijd aanzienlijk worden verkort. Voordat de vloerafwerking wordt aangebracht, moet het restvocht aan de daarvoor geldende eisen voldoen.'],
  ['Werken jullie in heel Nederland?', 'Ja, Dekvloerexpert is landelijk actief. Wij verzorgen zandcementdekvloeren in alle twaalf provincies van Nederland. Van particuliere woningen tot grootschalige bouwprojecten: wij staan klaar voor particulieren, aannemers en bouwbedrijven.'],
  ['Kunnen jullie ook vloerverwarming aanleggen?', 'Ja, als extra service kunnen wij zowel de aanleg van vloerverwarming als de zandcementdekvloer verzorgen. Zo profiteert u van één aanspreekpunt, een duidelijke planning en een vloeropbouw waarbij beide werkzaamheden goed op elkaar worden afgestemd.'],
  ['Wat is het verschil tussen zandcement en anhydriet?', 'Een zandcementdekvloer bestaat uit cement en zand en is sterk, veelzijdig en relatief goed bestand tegen vocht. Hierdoor is deze geschikt voor uiteenlopende toepassingen, waaronder woningen, badkamers en garages. Een anhydrietvloer heeft een calciumsulfaatgebonden samenstelling en wordt doorgaans vloeibaar aangebracht. Deze vloeren zijn zeer vlak af te werken, maar zijn gevoeliger voor vocht. Beide vloertypen hebben hun eigen voordelen. Welke dekvloer het meest geschikt is, hangt af van de vloerconstructie en de eisen van uw project. Wij adviseren u graag over de juiste keuze.'],
];

// ───────────────────────── Dienstpagina-sjabloon
function servicePage(ctx, s) {
  const crumbs = [['/', 'Home'], ...(s.slug === 'zandcement' ? [] : [['/diensten', 'Diensten']]), [`/${s.slug}`, s.crumb]];
  const body = `
${hero({ crumbs, ...(s.pill ? { pill: s.pill } : {}), h1: s.h1, lead: s.lead, img: s.img || '/assets/img/hero.jpg', ...(s.buttons ? { buttons: `<div class="btn-row"><a class="btn btn-teal" href="/offerte">Vraag vrijblijvend een offerte aan ${icon('arrow')}</a><a class="btn btn-wa" href="${wa()}" target="_blank" rel="noopener">${waIcon} WhatsApp</a></div>` } : {}) })}
<section><div class="wrap split">
<div class="reveal prose">

<h2>${s.h2}</h2>
${s.intro.map(t => `<p>${t}</p>`).join('')}
${s.link ? `<p style="margin-top:30px"><a class="text-link" href="${s.link[0]}">${s.link[1]} ${icon('arrow')}</a></p>` : ''}
</div>
${s.photoMedia ? `<div class="photo reveal"><img src="/assets/media/werk/${s.photo}.jpg" alt="${esc(s.crumb)} door ${site.name}" loading="lazy" width="1200" height="1400"></div>` : `<!--photo--><div class="photo reveal"><img src="/assets/img/${s.photo || 'dekvloer-2'}.jpg" alt="${esc(s.crumb)} door ${site.name}" loading="lazy" width="1200" height="1400"></div><!--/photo-->`}
</div></section>
${s.steps ? `<section class="paper"><div class="wrap"><div class="sec-head reveal"><h2>${s.stepsTitle}</h2></div>${stepsHtml(s.steps)}</div></section>` : ''}
${s.gallery ? `<section class="paper"><div class="wrap"><div class="sec-head reveal"><h2>Uit ons <span class="accent">werk</span></h2></div><div class="more-grid">${s.gallery.map(([f, c]) => `<button type="button" class="gal-item more-item" data-src="/assets/media/werk/${f}.jpg" data-video="0" data-caption="${esc(c)}" aria-label="Bekijk ${esc(c)}"><img src="/assets/media/werk/${f}.jpg" alt="${esc(c)}" loading="lazy"><span class="more-plus" aria-hidden="true">+</span></button>`).join('')}</div></div></section><dialog class="lightbox" id="lightbox" aria-label="Foto vergroot"><button type="button" class="lb-close" aria-label="Sluiten">×</button><button type="button" class="lb-prev" aria-label="Vorige">‹</button><div class="lb-stage"></div><button type="button" class="lb-next" aria-label="Volgende">›</button><p class="lb-cap"></p></dialog>` : ''}
${s.features ? `<section class="paper"><div class="wrap"><div class="sec-head reveal"><h2>${s.featuresTitle}</h2></div>${featureList(s.features)}</div></section>` : ''}
${(s.sections || []).map((sec, i) => `<section class="${i % 2 ? 'paper' : ''}"${sec.eyebrow ? ` id="${sec.eyebrow.toLowerCase()}"` : ''}><div class="wrap prose reveal" style="max-width:900px">${sec.eyebrow ? `` : ''}<h2>${sec.h2}</h2>${sec.html}</div></section>`).join('')}

${s.kb && s.slug === 'cementdekvloer-kosten-per-m2' ? `<section class="dark"><div class="wrap"><div class="sec-head reveal"><h2>Stel uw vloer <span class="accent">samen</span></h2></div>${offerteTool()}</div></section>` : ''}
${s.showOptions ? `<section class="dark"><div class="wrap"><div class="sec-head reveal"><span class="eyebrow">Maatwerk &amp; opties</span><h2>Extra mogelijkheden <span class="accent">voor uw dekvloer</span></h2><p class="lead">Iedere vloer is anders. Daarom bieden wij verschillende mogelijkheden om uw zandcementdekvloer af te stemmen op uw wensen en de eisen van het project.</p></div>${optionCards(OPTIONS)}</div></section>` : ''}
${s.faq ? `<section><div class="wrap"><div class="sec-head reveal"><h2>${s.faqTitle || 'Vragen over ' + s.crumb.toLowerCase()}</h2></div>${faqHtml(s.faq)}</div></section>` : ''}
${s.related ? `<section class="paper"><div class="wrap"><div class="sec-head reveal"><h2>Meer over dekvloeren</h2></div><div class="cards light-cards">${s.related.map(([h, t, d]) => `<a class="card reveal" href="${h}"><span class="ck">${icon('arrow')}</span><div><h3>${t}</h3><p>${d}</p></div></a>`).join('')}</div></div></section>` : ''}
${s.cta ? cta(...s.cta) : cta()}`;
  return page({
    path: `/${s.slug}`, active: s.slug === 'zandcement' ? '/zandcement' : (s.kb ? undefined : 'dienst'),
    title: s.title, description: s.description, body, footerPlaces: ctx.footerPlaces,
    ld: [crumbLd(crumbs), s.faq && faqLd(s.faq), {
      '@type': s.kb ? 'Article' : 'Service', name: s.crumb, ...(s.kb ? { headline: s.title, author: { '@id': site.url + '/#bedrijf' } } : { provider: { '@id': site.url + '/#bedrijf' }, areaServed: { '@type': 'Country', name: 'Nederland' }, serviceType: s.crumb }),
    }].filter(Boolean),
  });
}

const KB_LINKS = [
  ['/cementdekvloer-kosten-per-m2', 'Kosten per m²', 'Wat kost een zandcementdekvloer per m² en welke factoren bepalen de prijs?'],
  ['/cementdekvloer-droogtijd', 'Droogtijd', 'Hoelang moet een zandcementdekvloer drogen en wanneer kunt u de vloer afwerken?'],
  ['/zandcement#opbouw', 'Vloerdikte', 'Hoe dik moet een zandcementdekvloer zijn en waar moet u rekening mee houden?'],
  ['/vloerverwarming', 'Vloerverwarming', 'Waar moet u op letten bij een zandcementdekvloer in combinatie met vloerverwarming?'],
  ['/opties', 'Extra opties', 'Alles over droogtijdversnellers, vezelversterking en andere mogelijkheden voor uw dekvloer.'],
  ['/cement-dekvloer', 'Wat is een cementdekvloer?', 'Wat is het verschil tussen zandcement, een cementdekvloer en een zandcementvloer?'],
  ['/vloeibaar-zandcement', 'Vloeibare cementdekvloer', 'Wat is het verschil tussen traditioneel zandcement, vloeibare cementdekvloeren en gietvloeren?'],
  ['/zandcement-dekvloer-zelf-maken', 'Zelf een zandcementdekvloer maken?', 'Welke materialen en gereedschappen heeft u nodig en waar gaat het vaak mis?'],
];

export const SERVICE_DEFS = [
  {
    slug: 'zandcement', crumb: 'Zandcementdekvloeren', h1: 'Zandcementdekvloeren: <span class="accent">een sterke basis voor iedere vloer</span>',
    title: 'Zandcement dekvloer | Opbouw, kosten en droogtijd | Dekvloerexpert',
    description: `Zandcementdekvloeren voor nieuwbouw en renovatie, zwevend of hechtend, ook met vloerverwarming. Lees over opbouw, kosten en droogtijd en vraag een offerte aan.`,
    lead: 'Van particuliere woningen tot grootschalige bouwprojecten. Dekvloerexpert is gespecialiseerd in het vakkundig aanbrengen van zandcementdekvloeren voor nieuwbouw en renovatie. Wij staan voor kwaliteit, vakmanschap en betrouwbare afspraken.',
    buttons: 'offerte',
    eyebrow: 'Onze hoofddienst', h2: 'Zandcementdekvloeren <span class="accent">van topkwaliteit</span>',
    intro: [
      'Een zandcementdekvloer vormt de basis voor een sterke, stabiele en strak afgewerkte vloer.',
      'Bij Dekvloerexpert brengen wij zandcementdekvloeren vakkundig aan, afgestemd op de wensen en technische eisen van ieder project. Of het nu gaat om een woning, badkamer, garage of groot bouwproject, wij zorgen voor een nauwkeurige afwerking.',
      'Onze dekvloeren zijn geschikt als ondergrond voor verschillende vloerafwerkingen, waaronder tegels, pvc, laminaat, parket en gietvloeren, mits de ondergrond aan de vereiste voorwaarden voldoet.',
      'Ook bij vloerverwarming zorgen wij voor een passende vloeropbouw en een professionele uitvoering.',
    ],
    featuresTitle: 'Waarom kiezen voor <span class="accent">zandcement?</span>',
    features: [
      ['flame', 'Ideaal voor vloerverwarming', 'Zandcementdekvloeren zijn uitstekend te combineren met vloerverwarming en zorgen bij een juiste vloeropbouw voor een goede warmteoverdracht.'],
      ['shield', 'Sterk en duurzaam', 'Een stevige en betrouwbare ondervloer, afgestemd op de belasting en het gebruik van de ruimte.'],
      ['home', 'Geschikt voor verschillende ruimtes', 'Van woonkamers en badkamers tot garages en bedrijfspanden.'],
      ['ruler', 'Strak en nauwkeurig afgewerkt', 'Wij brengen uw dekvloer op de juiste hoogte aan, waterpas of met afschot waar nodig.'],
      ['layers', 'Verschillende vloerconstructies', 'Wij realiseren zowel hechtende als zwevende zandcementdekvloeren, afgestemd op uw project.'],
      ['clock', 'Sneller drogen met een versneller', 'Met een geschikte droogtijdversneller kan de wachttijd voor verdere vloerafwerking aanzienlijk worden verkort.'],
    ],
    sections: [
      { eyebrow: 'Opbouw', h2: 'Zwevende of hechtende zandcementdekvloer', html: '<p>Niet iedere vloer heeft dezelfde opbouw. Afhankelijk van de ondergrond, isolatie en eventuele vloerverwarming bepalen wij welke uitvoering het meest geschikt is.</p><h3>Zwevende dekvloer</h3><p>Een zwevende dekvloer wordt aangebracht op een isolatielaag, zonder direct contact met de onderliggende constructievloer en omliggende wanden. Deze vloeropbouw kan bijdragen aan warmte- en geluidsisolatie.</p><h3>Hechtende dekvloer</h3><p>Een hechtende dekvloer wordt rechtstreeks verbonden met een geschikte, goed voorbereide ondergrond, bijvoorbeeld beton. Deze uitvoering kan een oplossing zijn wanneer de beschikbare opbouwhoogte beperkt is.</p><p>Wij adviseren u graag over de juiste dikte, vloeropbouw en eventuele wapening.</p>' },
      { eyebrow: 'Kosten', h2: 'Wat kost een zandcementdekvloer?', html: `<p>De kosten van een zandcementdekvloer zijn afhankelijk van de oppervlakte, vloerdikte, bereikbaarheid en eventuele extra toevoegingen.</p><p>Bij Dekvloerexpert ontvangt u een duidelijke, vrijblijvende offerte op maat. Zo weet u vooraf waar u aan toe bent.</p><p><a class="text-link" href="/#offerte-tool">Stel uw vloer samen en vraag een offerte aan ${icon('arrow')}</a></p>` },
      { eyebrow: 'Droogtijd', h2: 'Hoe lang moet een zandcementdekvloer drogen?', html: `<p>De droogtijd hangt af van de vloerdikte, temperatuur, luchtvochtigheid en ventilatie.</p><p>Als algemene richtlijn geldt ongeveer één week per centimeter tot een dikte van 4 cm. Bij dikkere vloeren duurt het drogen langer.</p><p>Met een geschikte droogtijdversneller kan deze periode aanzienlijk worden verkort.</p><p>Voordat een vloerafwerking wordt aangebracht, moet altijd worden gecontroleerd of het restvocht aan de eisen van de gekozen vloerafwerking voldoet.</p><p><a class="text-link" href="/cementdekvloer-droogtijd">Alles over de droogtijd ${icon('arrow')}</a></p>` },
    ],
    showOptions: true,
    faq: [
      ['Hoe dik moet een zandcement dekvloer zijn?', 'Dat is afhankelijk van de vloerconstructie. Een zwevende dekvloer op isolatie is doorgaans minimaal 5 cm; bij vloerverwarming houden we voldoende dekking boven de leidingen aan; een hechtende vloer op beton kan dunner. Wij bepalen de juiste dikte vooraf.'],
      ['Welke mengverhouding gebruiken jullie?', 'Meestal ongeveer 1 deel cement op 4 à 5 delen zand, afgestemd op de gewenste sterkteklasse en het gebruik van de ruimte.'],
      ['Kan er direct parket of pvc op?', 'Pas als het restvocht aan de eisen van de gekozen vloerafwerking voldoet. Laat dit vóór het leggen altijd controleren.'],
      ['Leggen jullie ook kleine oppervlaktes of dikke vloeren?', 'Ja, ook een badkamer of uitbouw. Dikkere vloeren zijn eveneens mogelijk, tot circa 30 cm, mits de vloerconstructie daarvoor geschikt is.'],
    ],
    related: KB_LINKS.slice(0, 3), link: ['/offerte', 'Vraag een vrijblijvende offerte aan'],
  },
  {
    slug: 'anhydrietvloeren', crumb: 'Anhydrietvloeren', pill: 'Anhydrietvloeren · Landelijk actief', buttons: 'offerte',
    h1: 'Anhydrietvloeren: <span class="accent">strak, vlak en efficiënt</span>',
    title: 'Anhydriet gietvloer laten leggen | Dekvloerexpert',
    description: 'Anhydriet gietdekvloer voor woningen, kantoren en bouwprojecten. Vlak, gelijkmatig en zeer geschikt voor vloerverwarming. Vraag een vrijblijvende offerte aan.',
    lead: 'Een anhydriet gietdekvloer is een uitstekende oplossing voor woningen, kantoren en grotere bouwprojecten. Dankzij de vloeibare verwerking ontstaat een vlakke en gelijkmatige ondervloer, die bijzonder geschikt is voor toepassingen met vloerverwarming. Bij Dekvloerexpert staan kwaliteit, vakmanschap en een zorgvuldige uitvoering centraal.',
    eyebrow: 'Dienst', h2: 'Wat is een <span class="accent">anhydrietvloer?</span>',
    intro: [
      'Een anhydrietvloer is een dekvloer op basis van calciumsulfaat. De vloeibare mortel wordt aangebracht en zorgvuldig verdeeld, waardoor een vlakke en gelijkmatige ondergrond ontstaat.',
      'Anhydrietvloeren zijn uitstekend te combineren met vloerverwarming. De mortel sluit goed aan rondom de verwarmingsleidingen, wat bijdraagt aan een efficiënte warmteoverdracht.',
      'De benodigde vloerdikte is afhankelijk van de vloerconstructie en de technische eisen van het project.',
      'Omdat anhydriet gevoeliger is voor vocht, is deze vloer vooral geschikt voor droge binnenruimtes.',
    ],
    sections: [{ h2: 'Anhydriet of zandcement?', html: '<p>Beide dekvloeren vormen een sterke basis voor verschillende vloerafwerkingen, maar hebben ieder hun eigen eigenschappen.</p><div class="compare"><div><h3>Anhydrietvloeren</h3><ul><li>Vloeibaar aangebracht en nauwkeurig afgewerkt.</li><li>Zeer geschikt voor vloerverwarming.</li><li>Een gelijkmatige en vlakke ondergrond.</li><li>Minder geschikt voor langdurig vochtige omstandigheden.</li><li>Afhankelijk van het systeem kan een voorbereidende behandeling nodig zijn voor de vloerafwerking.</li></ul></div><div><h3>Zandcementdekvloeren</h3><ul><li>Sterk, veelzijdig en duurzaam.</li><li>Geschikt voor uiteenlopende vloerconstructies.</li><li>Goed te combineren met vloerverwarming.</li><li>Ook toepasbaar in vochtige ruimtes met de juiste vloeropbouw en waterdichting.</li><li>Zowel waterpas als op afschot aan te brengen.</li></ul></div></div><h3>Welke vloer past bij uw project?</h3><p>De beste keuze hangt af van de ondergrond, beschikbare opbouwhoogte, belasting en gewenste vloerafwerking. Wij denken graag met u mee over de juiste oplossing.</p>' }],
    faqTitle: 'Veelgestelde vragen over anhydrietvloeren',
    faq: [['Hoe lang droogt een anhydrietvloer?', 'De droogtijd is afhankelijk van de vloerdikte, temperatuur, luchtvochtigheid en ventilatie. Als algemene richtlijn wordt vaak ongeveer één week per centimeter aangehouden, maar de werkelijke droogtijd kan hiervan afwijken. Bij vloerverwarming kan een correct uitgevoerd opstookprotocol bijdragen aan het droogproces. Voordat de vloer wordt afgewerkt, moet het restvocht worden gecontroleerd.'], ['Moet een anhydrietvloer geschuurd worden?', 'Dat hangt af van het toegepaste product en de kwaliteit van de toplaag. Wanneer er een onvoldoende hechtende oppervlaktelaag aanwezig is, moet deze worden verwijderd voordat de vloerafwerking wordt aangebracht. Wij adviseren om de ondergrond vooraf te laten beoordelen en de voorschriften van de leverancier van de vloerafwerking te volgen.']],
    link: ['/zandcement', 'Vergelijk met zandcement'],
  },
  {
    slug: 'vloerverwarming', crumb: 'Vloerverwarming', pill: 'Vloerverwarming &amp; zandcementdekvloeren', buttons: 'offerte',
    h1: 'Vloerverwarming en dekvloer <span class="accent">in één pakket</span>',
    title: 'Vloerverwarming en dekvloer in één pakket | Dekvloerexpert',
    description: 'Vloerverwarming laten aanleggen samen met uw zandcementdekvloer: één aanspreekpunt, één planning en een goed afgestemde vloeropbouw. Vraag een offerte aan.',
    lead: 'Wilt u vloerverwarming laten aanleggen en direct combineren met een zandcementdekvloer? Bij Dekvloerexpert maken wij het u gemakkelijk. Wij verzorgen beide werkzaamheden in één pakket, met één aanspreekpunt en een duidelijke planning. Zo worden de vloerverwarming en de dekvloer goed op elkaar afgestemd en weet u precies waar u aan toe bent.',
    eyebrow: 'Extra service', h2: 'Vloerverwarming en dekvloer <span class="accent">in één pakket</span>', photo: 'project-4',
    intro: [
      'Vloerverwarming zorgt voor een aangename en gelijkmatige warmteverdeling in uw woning. In combinatie met een vakkundig aangebrachte zandcementdekvloer ontstaat een stevige en betrouwbare vloeropbouw.',
      'Als extra service regelen wij de aanleg van uw vloerverwarming samen met de zandcementdekvloer. Zo hoeft u niet zelf verschillende partijen in te schakelen en heeft u één aanspreekpunt voor de werkzaamheden.',
      'Wij denken met u mee over de juiste vloeropbouw, isolatie en benodigde dikte van de dekvloer.',
    ],
    link: ['/zandcement', 'Combineer vloerverwarming met een zandcementdekvloer'],
    steps: [
      ['Advies en voorbereiding', 'Wij bekijken uw situatie en adviseren over de geschikte vloeropbouw, isolatie en combinatie van vloerverwarming met een zandcementdekvloer.'],
      ['Aanleg vloerverwarming', 'De verwarmingsleidingen worden volgens de gekozen vloerconstructie aangebracht en gecontroleerd op lekkages.'],
      ['Aanbrengen zandcementdekvloer', 'Na de controle brengen wij de zandcementdekvloer vakkundig aan, met de juiste dekking boven de verwarmingsleidingen en eventuele aanvullende wapening waar nodig.'],
      ['Uitharden en ingebruikname', 'Na voldoende uitharding kan de vloerverwarming volgens het voorgeschreven ingebruikname- of opstook- en afkoelprotocol geleidelijk in gebruik worden genomen. Zo wordt de kans op schade en scheurvorming beperkt.'],
    ], stepsTitle: 'Hoe werkt het?',
    faqTitle: 'Veelgestelde vragen over vloerverwarming',
    faq: [['Wanneer mag de vloerverwarming aan?', 'Bij een traditionele zandcementdekvloer wordt doorgaans minimaal 28 dagen gewacht voordat het opstoken begint. De exacte termijn is afhankelijk van het toegepaste vloersysteem en de voorschriften van de leverancier. Daarna wordt de vloerverwarming geleidelijk op temperatuur gebracht volgens het juiste protocol, om de kans op schade aan de dekvloer te beperken.'], ['Is zandcement geschikt voor vloerverwarming?', 'Ja, zandcementdekvloeren zijn uitstekend geschikt voor vloerverwarming. Bij een juiste vloeropbouw en voldoende dekking van de verwarmingsleidingen draagt de dekvloer bij aan een gelijkmatige warmteverdeling. Wij adviseren over de geschikte vloerdikte en eventuele aanvullende wapening, afgestemd op uw project.']],
  },
  {
    slug: 'egaliseren', crumb: 'Egaliseren', pill: 'Vloer egaliseren · Landelijk actief', buttons: 'offerte',
    h1: 'Vloer egaliseren: <span class="accent">strak en egaal</span>',
    title: 'Vloer laten egaliseren | Dekvloerexpert',
    description: 'Vloer laten egaliseren voor pvc, linoleum, parket of een gietvloer. Een egale, vlakke ondergrond voor een mooie vloerafwerking. Vraag een offerte aan.',
    lead: 'Een goede vloerafwerking begint bij een vlakke en stevige ondergrond. Met professioneel egaliseerwerk zorgen wij voor een egale basis voor vloerafwerkingen zoals pvc, linoleum, parket en gietvloeren. Bij Dekvloerexpert staan kwaliteit, vakmanschap en een nauwkeurige afwerking centraal.',
    eyebrow: 'Dienst', h2: 'Wanneer is <span class="accent">egaliseren nodig?</span>',
    intro: ['Een vlakke ondergrond is belangrijk voor een mooie en duurzame vloerafwerking. Vooral bij dunne vloerbedekkingen, zoals pvc en linoleum, kunnen kleine oneffenheden zichtbaar worden.', 'Met een geschikte egalisatielaag werken wij kleine hoogteverschillen en oneffenheden weg.', 'Wij egaliseren onder andere zandcementdekvloeren, betonvloeren en geschikte bestaande tegelvloeren. Waar nodig bereiden wij de ondergrond voor door deze te reinigen, schuren en voor te strijken voor een goede hechting.'],
    faqTitle: 'Veelgestelde vragen over egaliseren',
    faq: [['Hoe dik is een egalisatielaag?', 'De dikte van een egalisatielaag hangt af van de ondergrond, de aanwezige hoogteverschillen en het gekozen egalisatieproduct. Voor kleine oneffenheden is vaak een dunne laag van enkele millimeters voldoende. Bij grotere hoogteverschillen beoordelen wij welke oplossing het meest geschikt is.'], ['Hoe snel kan ik verder na het egaliseren?', 'De droogtijd hangt af van het gebruikte egalisatieproduct, de laagdikte en de omstandigheden in de ruimte. Sommige egalisatielagen zijn al na enkele uren beloopbaar. Wanneer de definitieve vloerafwerking kan worden aangebracht, hangt af van de voorschriften van het gekozen product. Wij adviseren u graag over de benodigde droogtijd en de verdere afwerking.']],
  },
  {
    slug: 'beton-en-fundering', crumb: 'Beton & Fundering', pill: 'Beton &amp; fundering · Landelijk actief', buttons: 'offerte',
    h1: 'Beton &amp; fundering: <span class="accent">een sterke basis</span>', photo: 'fundering-1', photoMedia: true,
    title: 'Beton en fundering storten | Dekvloerexpert',
    description: 'Funderingsstroken, poeren en betonvloeren voor aanbouwen, garages, woningen en bedrijfspanden. Met wapening en bekisting volgens tekening. Vraag een offerte aan.',
    lead: 'Een stevige en betrouwbare constructie begint bij een vakkundig aangelegde fundering. Dekvloerexpert verzorgt beton- en funderingswerkzaamheden voor aanbouwen, garages, woningen en bedrijfspanden. Van funderingsstroken tot betonvloeren: wij staan voor kwaliteit, nauwkeurigheid en een professionele uitvoering.',
    eyebrow: 'Dienst', h2: 'Van fundering <span class="accent">tot dekvloer</span>',
    intro: ['Een goede vloer begint bij een sterke en stabiele ondergrond. Daarom verzorgen wij verschillende beton- en funderingswerkzaamheden, waaronder het storten van funderingsstroken, poeren en betonvloeren.', 'Wij werken volgens de aangeleverde constructietekeningen en berekeningen, met aandacht voor de juiste wapening, bekisting en uitvoering.', 'Doordat wij ook gespecialiseerd zijn in zandcementdekvloeren, kunnen wij verschillende werkzaamheden op elkaar afstemmen.', 'Zo profiteert u van duidelijke communicatie, een efficiënte planning en één aanspreekpunt voor uw project.'],
    gallery: [['fundering-1', 'Wapening en bekisting voor funderingsstroken'], ['fundering-2', 'Fundering voor een aanbouw'], ['fundering-3', 'Bekisting voor een betonvloer'], ['fundering-4', 'Gestorte en afgewerkte betonvloer']],
  },
  {
    slug: 'schuimbeton', crumb: 'Schuimbeton', pill: 'Schuimbeton · Landelijk actief', buttons: 'offerte',
    h1: 'Schuimbeton: <span class="accent">licht en isolerend</span>',
    title: 'Schuimbeton storten | Dekvloerexpert',
    description: 'Schuimbeton als lichte, isolerende ondervloer: ideaal om hoogteverschillen op te vullen en leidingen weg te werken, gecombineerd met een zandcementdekvloer.',
    lead: 'Schuimbeton is een lichtgewicht materiaal dat uitstekend geschikt is voor het opvullen van hoogteverschillen en het wegwerken van leidingen. Dankzij de luchtige samenstelling biedt schuimbeton een praktische oplossing voor verschillende vloerconstructies, zonder de onderliggende constructie onnodig zwaar te belasten. Bij Dekvloerexpert combineren wij schuimbeton met een vakkundig aangebrachte zandcementdekvloer voor een complete vloeropbouw.',
    eyebrow: 'Dienst', h2: 'Waarom kiezen voor <span class="accent">schuimbeton?</span>',
    intro: ['Schuimbeton bestaat uit een cementgebonden mengsel met kleine luchtbelletjes. Hierdoor is het aanzienlijk lichter dan traditioneel beton en heeft het warmte-isolerende eigenschappen.', 'Het materiaal is bijzonder geschikt voor het opvullen van grotere hoogteverschillen, het omsluiten van leidingen en het creëren van een geschikte ondergrond voor verdere vloeropbouw.'],
    featuresTitle: 'De voordelen van <span class="accent">schuimbeton</span>',
    features: [
      ['layers', 'Lichtgewicht', 'Door het lage gewicht is schuimbeton geschikt voor situaties waarin de belasting van de onderliggende constructie beperkt moet blijven.'],
      ['flame', 'Isolerende eigenschappen', 'De luchtige samenstelling draagt bij aan de warmte-isolatie. De daadwerkelijke isolatiewaarde is afhankelijk van de samenstelling en laagdikte.'],
      ['ruler', 'Efficiënte vloeropbouw', 'Schuimbeton kan worden gecombineerd met een zandcementdekvloer. Zo ontstaat een passende vloeropbouw, afgestemd op de technische eisen van uw project.'],
    ],
    link: ['/offerte', 'Vraag vrijblijvend advies aan'],
  },
  {
    slug: 'heipalen', crumb: 'Heipalen', pill: 'Heipalen &amp; funderingswerk · Landelijk actief', buttons: 'offerte',
    h1: 'Heipalen: <span class="accent">een sterke fundering voor ieder bouwproject</span>',
    title: 'Heipalen voor aanbouw en nieuwbouw | Dekvloerexpert',
    description: 'Heipalen of trillingsarme schroefpalen voor aanbouw, uitbouw en nieuwbouw, in samenwerking met gespecialiseerde funderingsbedrijven. Eén aanspreekpunt.',
    lead: 'Een goede fundering vormt de basis van een veilig en duurzaam gebouw. Voor aanbouw, uitbouw en nieuwbouw verzorgen wij in samenwerking met gespecialiseerde partners het benodigde heiwerk. Zo heeft u één aanspreekpunt voor de afstemming van de werkzaamheden.',
    eyebrow: 'Dienst', h2: 'Een betrouwbare basis <span class="accent">voor uw bouwproject</span>',
    intro: ['Niet iedere ondergrond is geschikt om rechtstreeks op te bouwen. Wanneer de draagkracht van de bodem onvoldoende is, kan een fundering op palen noodzakelijk zijn.', 'Heipalen brengen de belasting van het gebouw over naar dieper gelegen, draagkrachtige grondlagen. Afhankelijk van de bodemgesteldheid, de omgeving en de constructieberekeningen kan gekozen worden voor traditionele heipalen of trillingsarme funderingssystemen, zoals bepaalde typen schroefpalen.', 'Dekvloerexpert werkt hiervoor samen met gespecialiseerde funderingsbedrijven. Wij stemmen de werkzaamheden af en zorgen voor een duidelijke communicatie gedurende het project.'],
    sections: [{ h2: 'Waarom funderingswerk via Dekvloerexpert?', html: '<ul class="ticklist"><li>Samenwerking met gespecialiseerde funderingsbedrijven.</li><li>Geschikte funderingsoplossing op basis van het bouwproject.</li><li>Eén aanspreekpunt voor de afgesproken werkzaamheden.</li><li>Afstemming tussen funderingswerk en vloerwerkzaamheden.</li><li>Duidelijke afspraken en een overzichtelijke planning.</li></ul>' }],
    cta: ['Heeft u heipalen nodig voor een aanbouw, uitbouw of nieuwbouwproject? Neem contact met ons op om de mogelijkheden te bespreken.', 'Een stevige basis begint <span class="accent">met een goed advies</span>'],
  },
  // Kennisbank (zoekwoorden uit de klantlijst)
  {
    kb: true, slug: 'cementdekvloer-kosten-per-m2', crumb: 'Cementdekvloer kosten per m²', h1: 'Cementdekvloer <span class="accent">kosten per m²</span>',
    title: 'Cementdekvloer kosten per m²: waar hangt de prijs van af? | Dekvloerexpert',
    description: 'Wat kost een cementdekvloer per m²? De prijs hangt af van oppervlakte, dikte (tot wel 30 cm), bereikbaarheid en extra\'s. Stel uw vloer samen en ontvang een offerte via WhatsApp.',
    lead: 'Wat kost een zandcement dekvloer, en waar hangt de prijs van af? Hier leest u het, en u stelt direct uw eigen vloer samen.',
    eyebrow: 'Kennisbank', h2: 'Waar hangt <span class="accent">de prijs</span> van af?',
    intro: ['Er bestaat geen vaste prijs per m² die voor elke vloer klopt. Een dunne vloer in een badkamer is een heel ander werk dan een bedrijfsvloer van twintig centimeter dik met vloerverwarming en verharder.', 'Daarom maken wij voor elke vloer een offerte op maat. Geef de oppervlakte, de dikte en de extra\'s door, en u ontvangt hem direct op uw WhatsApp.'],
    sections: [
      { h2: 'Wat bepaalt de prijs?', html: '<ul><li><strong>Oppervlakte</strong>: grotere vloeren zijn per m² voordeliger, omdat mixer en pomp maar één keer opgebouwd worden.</li><li><strong>Dikte</strong>: meer centimeters is meer materiaal en een langere droogtijd. Vloeren kunnen tot wel 30 cm dik worden.</li><li><strong>Bereikbaarheid</strong>: hoe ver en hoe hoog we moeten pompen.</li><li><strong>Extra\'s</strong>: versneller, verharder, vezels, Duremit, krimpnetten en randisolatie.</li><li><strong>Ondergrond</strong>: moet er eerst geprimed, geïsoleerd of opgevuld worden?</li></ul>' },
    ],
    related: KB_LINKS.filter(l => l[0] !== '/cementdekvloer-kosten-per-m2').slice(0, 3),
  },
  {
    kb: true, slug: 'cementdekvloer-droogtijd', crumb: 'Droogtijd cementdekvloer', h1: 'Droogtijd cementdekvloer',
    title: 'Droogtijd cementdekvloer: hoe lang moet hij drogen? | Dekvloerexpert',
    description: 'De droogtijd van een cementdekvloer: een week per cm tot 4 cm, daarna twee weken per cm. Met een droogtijdversneller in 10 tot 15 dagen legklaar.',
    lead: 'Hoe lang moet een cementdekvloer drogen voordat u kunt tegelen, pvc kunt leggen of parket kunt plaatsen?',
    eyebrow: 'Kennisbank', h2: 'De vuistregel',
    intro: ['Een zandcement dekvloer droogt ongeveer één week per centimeter, tot een dikte van 4 cm. Daarboven gaat het drogen langzamer: reken op twee weken voor elke extra centimeter.', 'Een veelvoorkomende vloer van 6 cm heeft dus zo\'n acht weken nodig voordat hij droog genoeg is voor een vochtgevoelige afwerking.'],
    sections: [
      { h2: 'Droogtijd per dikte', html: dryTable() },
      { h2: 'Sneller drogen', html: '<ul><li><strong>Droogtijdversneller of Duremit</strong>: vaak binnen 10 tot 15 dagen legklaar.</li><li><strong>Ventileren</strong>: laat vocht weg, maar voorkom tocht en directe zon in de eerste dagen.</li><li><strong>Vloerverwarming</strong>: pas na zo\'n 3 weken en altijd volgens opstookprotocol.</li></ul><p>Meet voor de afwerking altijd het restvocht. Voor parket en pvc gelden strengere eisen dan voor tegels.</p>' },
    ],
    faq: [['Wanneer kan ik over de dekvloer lopen?', 'Voorzichtig lopen kan na een à twee dagen. Zwaar belasten en materiaal opslaan pas na ongeveer een week.'], ['Wat is droogtijd cementdekvloer bij 5 cm?', 'Ongeveer zes weken zonder versneller: vier weken voor de eerste 4 cm, plus twee weken voor de vijfde centimeter.']],
    related: KB_LINKS.filter(l => l[0] !== '/cementdekvloer-droogtijd').slice(0, 3),
  },
  {
    kb: true, slug: 'zandcement-dekvloer-zelf-maken', crumb: 'Zandcement dekvloer zelf maken', h1: 'Zandcement dekvloer zelf maken?',
    title: 'Zandcement dekvloer zelf maken: mengverhouding en tips | Dekvloerexpert',
    description: 'Zelf een zandcement dekvloer maken? Mengverhouding 1:4 à 1:5, benodigdheden, stappenplan en de valkuilen. Plus: wanneer uitbesteden goedkoper is.',
    lead: 'Een kleine vloer zelf leggen kan. Hier leest u hoe, en waar het in de praktijk vaak misgaat.',
    eyebrow: 'Kennisbank', h2: 'Zo pakt u het aan',
    intro: ['Voor een zandcement dekvloer heeft u scherp zand, cement (meestal CEM III of CEM I) en water nodig, in een mengverhouding van ongeveer 1 deel cement op 4 à 5 delen zand. De specie moet "aardvochtig" zijn: als u er een bal van knijpt, blijft hij heel zonder dat er water uitloopt.', 'Het lastigste is niet het mengen, maar het vlak krijgen. U werkt met afreilatten op hoogte, verdicht de specie goed en strijkt het oppervlak glad, en dat allemaal voordat de specie begint uit te harden.'],
    sections: [
      { h2: 'Stappenplan', html: '<ol><li>Ondergrond schoonmaken; bij een hechtende vloer primen.</li><li>Randisolatie langs de wanden aanbrengen.</li><li>Hoogtepunten uitzetten met een laser of waterpas.</li><li>Specie mengen in de juiste verhouding.</li><li>In vakken storten, verdichten en afreien over de latten.</li><li>Oppervlak glad schuren en de eerste dagen beschermen tegen uitdrogen.</li></ol>' },
      { h2: 'Waar het vaak misgaat', html: '<ul><li>Te natte specie: een zachte toplaag en meer krimp.</li><li>Slecht verdicht: holle plekken en een vloer die later afbrokkelt.</li><li>Naden tussen dagdelen: zichtbare overgangen en scheuren.</li><li>Te snel uitgedroogd: krimpscheuren.</li></ul><p>Voor alles groter dan een paar vierkante meter is uitbesteden vaak niet veel duurder. Wij leggen een woonkamer in een paar uur, met materiaal en een vlakheid waar de vloerenlegger blij mee is.</p>' },
    ],
    related: KB_LINKS.filter(l => l[0] !== '/zandcement-dekvloer-zelf-maken').slice(0, 3),
  },
  {
    kb: true, slug: 'vloeibaar-zandcement', crumb: 'Vloeibaar zandcement', h1: 'Vloeibaar zandcement?',
    title: 'Vloeibaar zandcement: bestaat het? | Gietdekvloer vs zandcement',
    description: 'Vloeibaar zandcement bestaat als cementgebonden gietdekvloer. Wat is het verschil met traditioneel zandcement en anhydriet, en wanneer kiest u wat?',
    lead: 'Traditioneel zandcement is aardvochtig, maar er bestaan ook vloeibare, cementgebonden gietdekvloeren. Wat is het verschil?',
    eyebrow: 'Kennisbank', h2: 'Aardvochtig of vloeibaar',
    intro: ['Een klassieke zandcement dekvloer is aardvochtig: hij wordt gepompt, uitgespreid en met de hand afgereid. Een vloeibare cementgebonden dekvloer (ook wel cementgebonden gietvloer genoemd) vloeit zelf uit, net als anhydriet, maar is op basis van cement en dus beter bestand tegen vocht.', 'Vloeibare varianten zijn sneller aan te brengen op grote vlakken en omsluiten vloerverwarming volledig. Ze zijn wel duurder per m². Voor de meeste woningen is traditioneel zandcement nog altijd de voordeligste en meest robuuste keuze.'],
    related: [['/anhydrietvloeren', 'Anhydrietvloeren', 'De bekendste vloeibare dekvloer.'], ['/zandcement', 'Zandcement', 'De klassieke, robuuste dekvloer.'], ['/cementdekvloer-droogtijd', 'Droogtijd', 'Hoe lang drogen de verschillende vloeren?']],
  },
  {
    kb: true, slug: 'cement-dekvloer', crumb: 'Cementdekvloer', h1: 'Cementdekvloer: wat is het precies?',
    title: 'Cementdekvloer, zandcement of zand-cementvloer: wat is wat?',
    description: 'Cementdekvloer, zandcement dekvloer, cement dekvloer of zand cement vloer: allemaal hetzelfde. Lees wat het is, waar het voor dient en wat het kost.',
    lead: 'Cementdekvloer, zandcement dekvloer, zand-cementvloer of cement dekvloer: verschillende woorden voor dezelfde vloer.',
    eyebrow: 'Kennisbank', h2: 'Eén vloer, veel namen',
    intro: ['Een cementdekvloer is een laag zand en cement die over de constructievloer wordt aangebracht. Hij maakt de ondergrond vlak en op de juiste hoogte, zodat de eindafwerking er strak op ligt. In de bouw heet hij ook wel zandcement dekvloer, zand-cementvloer of afwerkvloer.', 'De vloer is sterk, vochtbestendig en past goed bij vloerverwarming. Daardoor is hij in Nederland veruit de meest gebruikte dekvloer in woningen en bedrijfspanden.'],
    related: KB_LINKS.filter(l => l[0] !== '/cement-dekvloer').slice(0, 3),
  },
];

function dryTable() {
  const rows = [3, 4, 5, 6, 7, 8].map(cm => [cm, cm <= 4 ? cm : 4 + (cm - 4) * 2]);
  return `<div class="table-scroll"><table class="ptable"><thead><tr><th>Dikte</th><th>Zonder versneller</th><th>Met versneller</th></tr></thead><tbody>${rows.map(([cm, w]) => `<tr><td>${cm} cm</td><td>± ${w} weken</td><td>± 10–15 dagen</td></tr>`).join('')}</tbody></table></div><p class="note">Richtwaarden bij normale omstandigheden (circa 20 °C, goede ventilatie). Koude en vochtige lucht vertragen het drogen.</p>`;
}

export const services = ctx => SERVICE_DEFS.map(s => [s.slug, servicePage(ctx, s)]);

// ───────────────────────── Diensten-overzicht
export function dienstenOverview(ctx) {
  const crumbs = [['/', 'Home'], ['/diensten', 'Diensten']];
  const desc = Object.fromEntries(SERVICE_DEFS.map(s => [s.slug, s.lead]));
  const body = `${hero({ crumbs, h1: 'Alle diensten', lead: 'Van fundering tot legklare vloer: alles onder één dak, met één aanspreekpunt.' })}
<section class="paper"><div class="wrap"><div class="cards light-cards">${SERVICES.map(s => `<a class="card reveal" href="/${s.slug}"><span class="ck">${icon(s.icon)}</span><div><h3>${s.nav}</h3><p>${esc(desc[s.slug])}</p></div></a>`).join('')}</div></div></section>
<section><div class="wrap"><div class="sec-head reveal"><h2>Veelgezocht</h2></div><div class="cards light-cards">${KB_LINKS.map(([h, t, d]) => `<a class="card reveal" href="${h}"><span class="ck">${icon('info')}</span><div><h3>${t}</h3><p>${d}</p></div></a>`).join('')}</div></div></section>
${cta()}`;
  return page({ path: '/diensten', active: 'dienst', title: 'Diensten: dekvloeren, vloerverwarming en meer | Dekvloerexpert', description: 'Zandcement- en anhydrietvloeren, vloerverwarming, egaliseren, beton en fundering, schuimbeton en heipalen. Alles onder één dak.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

export function kennisbank(ctx) {
  const crumbs = [['/', 'Home'], ['/kennisbank', 'Kennisbank']];
  const body = `${hero({ crumbs, pill: 'Kennisbank', h1: 'Alles over <span class="accent">zandcementdekvloeren</span>', lead: 'Heeft u vragen over een zandcementdekvloer? In onze kennisbank vindt u duidelijke informatie over kosten, droogtijd, vloerdikte, vloerverwarming en de verschillende mogelijkheden.' })}
<section class="paper"><div class="wrap"><div class="cards light-cards">${KB_LINKS.map(([h, t, d]) => `<a class="card reveal" href="${h}"><span class="ck">${icon('info')}</span><div><h3>${t}</h3><p>${d}</p></div></a>`).join('')}</div></div></section>
${cta('Iedere situatie is anders. Wij adviseren u graag over de juiste opbouw, dikte en uitvoering van uw zandcementdekvloer.', 'Advies nodig over <span class="accent">uw dekvloer?</span>')}`;
  return page({ path: '/kennisbank', title: 'Kennisbank zandcementdekvloeren: kosten, droogtijd en dikte | Dekvloerexpert', description: 'Alles over zandcementdekvloeren: kosten per m², droogtijd, vloerdikte, vloerverwarming, extra opties en zelf maken.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// ───────────────────────── Opties
const OPT_PAGE = {
  droogtijdversneller: ['Droogtijdversneller', 'Wilt u sneller verder met uw bouwproject? Met een geschikte droogtijdversneller kan de droogtijd van uw zandcementdekvloer aanzienlijk worden verkort. Wij adviseren u over de mogelijkheden en de verwachte droogtijd.'],
  verharder: ['Vloerverharder', 'Voor vloeren die extra zwaar worden belast, zoals garages, werkplaatsen en bedrijfshallen. Een geschikte verhardende toevoeging kan de sterkte en slijtvastheid van de dekvloer verbeteren.'],
  vezels: ['Vezelversterking', 'Door speciale kunststofvezels aan de zandcementmortel toe te voegen, verkleinen we de kans op krimpscheuren. Dit draagt bij aan een sterkere en duurzamere dekvloer.'],
  duremit: ['Duremit', 'Duremit is een speciale toevoeging die, afhankelijk van het toegepaste product, de eigenschappen van de zandcementdekvloer kan verbeteren. Wij adviseren wanneer deze toevoeging een geschikte keuze is voor uw project.'],
  krimpnetten: ['Krimpnetten', 'Wapeningsnetten helpen scheurvorming te beperken en zorgen voor extra samenhang in de dekvloer. Vooral bij vloerverwarming en specifieke vloerconstructies kan aanvullende wapening verstandig zijn.'],
  randisolatie: ['Randisolatie', 'Randisolatie zorgt ervoor dat de dekvloer gescheiden blijft van muren en andere bouwdelen. Hierdoor krijgt de vloer ruimte om te werken en wordt ongewenste geluidsoverdracht beperkt.'],
  vlevopol: ['Flevopol', 'Flevopol is een hechtmiddel dat de hechting tussen een geschikte ondergrond en de zandcementdekvloer kan verbeteren. Dit is vooral belangrijk bij hechtende dekvloeren op bestaande betonvloeren.'],
};
export function opties(ctx) {
  const crumbs = [['/', 'Home'], ['/opties', 'Extra mogelijkheden']];
  const body = `${hero({ crumbs, pill: 'Maatwerk &amp; extra mogelijkheden', h1: 'Extra mogelijkheden <span class="accent">voor uw dekvloer</span>', lead: 'Iedere vloer en ieder bouwproject is anders. Daarom biedt Dekvloerexpert verschillende aanvullende mogelijkheden om uw zandcementdekvloer af te stemmen op uw wensen en de technische eisen van het project.', img: '/assets/img/project-3.jpg' })}
<section class="dark"><div class="wrap">
<div class="sec-head reveal" style="max-width:900px"><p class="lead">Of het nu gaat om een kortere droogtijd, extra stevigheid of een betere hechting: wij adviseren u graag over de juiste oplossing.</p></div>
<div class="opt-cards">${OPTIONS.map(o => `<article class="opt reveal" id="${o.key}"><span class="f-ic">${icon(o.icon)}</span><h3>${OPT_PAGE[o.key][0]}</h3><p>${OPT_PAGE[o.key][1]}</p></article>`).join('')}
</div></div></section>
<section><div class="wrap"><div class="sec-head reveal"><h2>Welke extra mogelijkheden <span class="accent">passen bij uw vloer?</span></h2></div>
<div class="table-scroll reveal"><table class="ptable"><thead><tr><th>Uw situatie</th><th>Mogelijke oplossing</th></tr></thead><tbody>
<tr><td>Vloerverwarming</td><td>Randisolatie en waar nodig aanvullende wapening</td></tr>
<tr><td>Sneller verder met de vloerafwerking</td><td>Droogtijdversneller</td></tr>
<tr><td>Zwaar belaste vloer</td><td>Vloerverharder of geschikte Duremit-toevoeging</td></tr>
<tr><td>Beperken van krimpscheuren</td><td>Vezelversterking of krimpnetten</td></tr>
<tr><td>Hechtende dekvloer op beton</td><td>Flevopol</td></tr>
<tr><td>Zwevende dekvloer</td><td>Randisolatie en een passende vloeropbouw</td></tr>
</tbody></table></div>
<div class="advice-box reveal"><h3>Niet zeker welke opties u nodig heeft?</h3><p>Geen zorgen. Wij denken met u mee en adviseren welke toevoegingen voor uw project zinvol zijn. Zo betaalt u niet onnodig voor extra's en krijgt uw dekvloer de juiste opbouw.</p><p><a class="btn btn-teal" href="/offerte">Vraag vrijblijvend advies aan ${icon('arrow')}</a></p></div>
</div></section>
${cta()}`;
  return page({ path: '/opties', active: '/opties', title: 'Extra mogelijkheden voor uw dekvloer | Dekvloerexpert', description: 'Droogtijdversneller, vloerverharder, vezelversterking, Duremit, krimpnetten, randisolatie en Flevopol. Lees welke mogelijkheid bij uw dekvloer past.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// ───────────────────────── Projecten
export function projecten(ctx) {
  const crumbs = [['/', 'Home'], ['/projecten', 'Projecten']];
  const card = p => `<button type="button" class="proj gal-item reveal" data-src="${p.img}" data-video="0" data-caption="${esc(p.title + ' · ' + p.desc)}" aria-label="Bekijk ${esc(p.title)}"><img src="${p.img}" alt="${esc(p.title)}: ${esc(p.desc)}" loading="lazy"><span class="ptag">${esc(p.tag)}</span><span class="pcap"><b>${esc(p.title)}</b><span>${p.place ? esc(p.place) + (p.m2 ? ' · ' + p.m2 + ' m²' : '') : esc(p.desc)}</span></span></button>`;
  const more = MORE_PHOTOS.map(([src, cap], i) => `<button type="button" class="gal-item more-item${i % 5 === 0 ? ' tall' : ''}" data-src="${src}" data-video="0" data-caption="${esc(cap)}" aria-label="Bekijk ${esc(cap)}"><img src="${src}" alt="${esc(cap)}" loading="lazy"><span class="more-plus" aria-hidden="true">+</span></button>`).join('');
  const body = `${hero({ crumbs, pill: 'Projecten', h1: 'Onze <span class="accent">projecten</span>', lead: 'Van particuliere woningen tot grootschalige nieuwbouw- en utiliteitsprojecten. Dekvloerexpert realiseert zandcementdekvloeren met oog voor kwaliteit, precisie en een strakke afwerking. Bekijk een selectie van onze uitgevoerde projecten en ontdek ons vakmanschap in de praktijk.', img: '/assets/media/projecten/02-kantoorvloer-in-een-keer-gelegd.jpg' })}
<section><div class="wrap"><div class="proj-grid">${PROJECT_LIST.map(card).join('')}</div></div></section>
<section class="paper" style="padding-top:0"><div class="wrap"><div class="sec-head reveal"><h2>Meer foto's <span class="accent">van ons werk</span></h2></div><div class="more-grid">${more}</div></div></section>
${videoSection(ctx.media.videos, { title: 'Zo werken wij op de bouw', lead: 'Van het mengen van de zandcementmortel tot het aanbrengen van de dekvloer.' })}
<dialog class="lightbox" id="lightbox" aria-label="Foto vergroot"><button type="button" class="lb-close" aria-label="Sluiten">×</button><button type="button" class="lb-prev" aria-label="Vorige">‹</button><div class="lb-stage"></div><button type="button" class="lb-next" aria-label="Volgende">›</button><p class="lb-cap"></p></dialog>
${cta()}`;
  return page({ path: '/projecten', active: '/projecten', title: 'Projecten: zandcement dekvloeren in heel Nederland | Dekvloerexpert', description: 'Bekijk onze projecten: kantoren, woningen met vloerverwarming, bedrijfspanden en nieuwbouw. Zandcement dekvloeren, kaarsrecht gelegd.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// ───────────────────────── Werkwijze
export function werkwijze(ctx) {
  const crumbs = [['/', 'Home'], ['/werkwijze', 'Werkwijze']];
  const detail = [
    ['Advies vooraf', 'U stuurt ons de gegevens van uw project, zoals de oppervlakte, gewenste vloerdikte en ondergrond. Indien nodig komen wij langs om de situatie te beoordelen en in te meten. Wij adviseren u over de juiste opbouw en dikte van de zandcementdekvloer en eventuele extra opties, zoals vezels, een droogtijdversneller of krimpnetten.'],
    ['Heldere prijsopgave', 'U ontvangt een duidelijke en vrijblijvende offerte waarin de werkzaamheden, materialen en eventuele extra opties overzichtelijk staan vermeld. Zo weet u vooraf precies waar u aan toe bent.'],
    ['Uitvoering volgens planning', 'Op de afgesproken dag komen wij met onze mixer, pomp en ervaren vakmensen. Wij bepalen de juiste vloerhoogte, brengen indien nodig randisolatie aan en pompen de zandcementmortel naar binnen. Vervolgens wordt de dekvloer zorgvuldig op de juiste hoogte en vlak afgewerkt.'],
    ['Vakkundig afgewerkt en netjes opgeleverd', 'Wij werken de zandcementdekvloer zorgvuldig vlak af en laten de werkplek netjes achter. U ontvangt advies over de droogtijd, eventuele opstookprocedure en wanneer de vloer geschikt is voor verdere afwerking.'],
  ];
  const body = `${hero({ crumbs, h1: 'Van eerste contact tot legklare vloer', lead: 'Heldere communicatie en transparante, eerlijke prijzen. Zo werken wij.' })}
<section class="ww-steps"><div class="wrap">${stepsHtml(detail)}</div></section>
<section class="paper ww-need"><div class="wrap split"><div class="reveal prose"><h2>Wat wij van u nodig hebben</h2>
<ul><li>Een lege, bezemschone ruimte.</li><li>Water en stroom in de buurt.</li><li>Leidingen en eventuele vloerverwarming vooraf aangelegd en goed bevestigd.</li><li>Een geschikte plek voor de mixer, zo dicht mogelijk bij de woning.</li></ul>
<p>Wij zorgen voor de benodigde materialen, machines en gereedschappen, zoals afgesproken in de offerte.</p></div>
<!--photo--><div class="photo wide reveal"><img src="/assets/img/project-2.jpg" alt="Voorbereiding van een dekvloer met vloerverwarming" loading="lazy"></div><!--/photo--></div></section>
${cta()}`;
  return page({ path: '/werkwijze', active: '/werkwijze', title: 'Werkwijze: van advies tot legklare vloer | Dekvloerexpert', description: 'Zo werken wij: advies vooraf, een heldere prijsopgave, uitvoering volgens planning en een vakkundig afgewerkte zandcementdekvloer.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// ───────────────────────── Over ons
export function overOns(ctx) {
  const crumbs = [['/', 'Home'], ['/over-ons', 'Over ons']];
  const body = `${hero({ crumbs, pill: 'Zandcementdekvloeren · Landelijk actief', h1: 'Over Dekvloerexpert', lead: 'Specialist in zandcementdekvloeren voor aannemers en particulieren door heel Nederland.' })}
<section><div class="wrap split"><div class="reveal prose"><h2>Strakke vloeren, <span class="accent">sterke basis</span></h2>
<p>Bij Dekvloerexpert zijn we gespecialiseerd in het vakkundig aanbrengen van zandcementdekvloeren voor nieuwbouw, renovatie en utiliteitsbouw. Met onze eigen meng- en pompapparatuur en een ervaren, vast team zorgen we voor een efficiënte uitvoering en een strak afgewerkte dekvloer.</p>
<p>Voor aannemers zijn wij een betrouwbare partner binnen het bouwproces. Wij begrijpen hoe belangrijk een goede planning, duidelijke communicatie en het nakomen van afspraken zijn. Daarom denken we mee en zorgen we voor een professionele uitvoering van ieder project.</p>
<p>Ook particulieren kunnen bij ons terecht voor deskundig advies en een passende oplossing. Van de juiste vloerdikte en dekvloeren over vloerverwarming tot de uiteindelijke afwerking: wij begeleiden het proces en zorgen voor een stevige, egale basis voor de toekomstige vloer.</p></div>
<!--photo--><div class="photo reveal"><img src="/assets/img/dekvloer-2.jpg" alt="Team van Dekvloerexpert aan het werk" loading="lazy"></div><!--/photo--></div></section>
<section class="paper"><div class="wrap"><div class="center sec-head reveal"><h2>Waarom kiezen voor <span class="accent">Dekvloerexpert?</span></h2></div>
<div class="why-grid">${[['ruler', 'Vakkundige uitvoering'], ['cube', 'Eigen meng- en pompapparatuur'], ['clock', 'Duidelijke afspraken en planning'], ['pin', 'Actief door heel Nederland']].map(([ic, t]) => `<div class="why-card reveal"><span class="f-ic">${icon(ic)}</span><span class="why-check">${icon('check')}</span><b>${t}</b></div>`).join('')}</div></div></section>
${reviewsSection()}${cta()}`;
  return page({ path: '/over-ons', title: 'Over ons | Dekvloerexpert', description: 'Dekvloerexpert: specialist in zandcementdekvloeren voor aannemers en particulieren, landelijk actief met eigen meng- en pompapparatuur.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// ───────────────────────── Offerte
export function offerte(ctx) {
  const crumbs = [['/', 'Home'], ['/offerte', 'Offerte aanvragen']];
  const chips = (name, items, { req = true, multi = false, outline = true } = {}) =>
    `<div class="chipset${outline ? ' outline' : ''}" role="${multi ? 'group' : 'radiogroup'}">${items.map(v => `<label><input type="${multi ? 'checkbox' : 'radio'}" name="${name}" value="${esc(v)}"${req && !multi ? ' required' : ''}>${esc(v)}</label>`).join('')}</div>`;
  const grp = (label, inner, req = true, name = '') => `<div class="fgroup" data-group="${name}"><span class="flabel">${label}${req ? ' <span class="req">*</span>' : ''}</span>${inner}<p class="err">Maak een keuze.</p></div>`;
  const body = `<section class="hero sub" style="padding-bottom:80px;background:radial-gradient(60% 120% at 20% 100%,rgba(20,168,138,.25),transparent 60%),#0b0e0d;min-height:0"><div class="wrap"><div class="hero-inner">
<ol class="crumbs"><li><a href="/">Home</a></li><li aria-current="page">Offerte aanvragen</li></ol>
<h1>Offerte aanvragen</h1>
<p class="lead">Vraag een scherpe, vrijblijvende prijsopgave aan. Vul in wat u weet; wat nog niet bekend is, bespreken we samen.</p></div></div></section>
<section class="paper" style="padding-top:70px"><div class="wrap offer-layout">
<form class="form-card" id="offerForm" novalidate data-endpoint="${esc(site.formEndpoint)}" data-netlify-form="${site.netlifyForms ? 'offerte' : ''}" data-wa="${site.whatsapp}">
<div class="svc-box"><div class="svc-head"><span class="ic">${icon('layers')}</span><div><small>Geselecteerde dienst</small><b id="svcName">Zandcement dekvloeren</b></div></div>
<div class="chipset" role="radiogroup" aria-label="Dienst">${SERVICES.map((s, i) => `<label><input type="radio" name="dienst" value="${s.nav}"${i === 0 ? ' checked' : ''}>${s.nav}</label>`).join('')}</div></div>
<div class="fstep"><span>01</span><h3>Uw project</h3></div>
${grp('Ruimte', chips('ruimte', ['Hele verdieping', 'Badkamer', 'Bedrijfshal of kantoor', 'Anders']), true, 'ruimte')}
${grp('Verdieping', chips('verdieping', ['Kelder', 'Begane grond', '1e verdieping', '2e verdieping', '3e verdieping', 'Zelf invullen']) + '<input id="verdiepingZelf" name="verdieping_zelf" type="text" placeholder="Bijvoorbeeld 4e verdieping of zolder" aria-label="Verdieping zelf invullen" style="margin-top:12px;max-width:340px" hidden>', true, 'verdieping')}
<div class="fgroup"><label for="m2">Oppervlakte in m² <span class="req">*</span></label><div class="unit" data-unit="m²"><input id="m2" name="oppervlakte" type="number" min="1" inputmode="numeric" placeholder="Bijvoorbeeld 85" required></div><p class="err">Vul de oppervlakte in.</p></div>
${grp('Gewenste laagdikte', chips('laagdikte', ['5 cm', '6 cm', '7 cm', '8 cm', '10 cm', 'Dikker / zelf invullen', 'Weet ik nog niet']) + '<div class="unit" data-unit="cm" style="margin-top:12px;max-width:220px"><input id="cmZelf" name="dikte_zelf" type="number" min="2" max="30" step="0.5" placeholder="Tot 30 cm" aria-label="Dikte zelf invullen in cm"></div>', true, 'laagdikte')}
${grp('Vloerverwarming', chips('vloerverwarming', ['Ja, ligt er al', 'Ja, moet nog worden aangelegd', 'Nee', 'Weet ik nog niet']), true, 'vloerverwarming')}
${grp('Type project', chips('type', ['Nieuwbouw', 'Renovatie', 'Utiliteitsbouw', 'Aanbouw of uitbouw']), true, 'type')}
<div class="fgroup"><label for="periode">Gewenste uitvoerperiode</label><input id="periode" name="periode" placeholder="Bijvoorbeeld oktober 2026"></div>
<hr class="fsep">
<div class="fstep"><span>02</span><h3>Extra opties</h3></div>
<p style="color:var(--muted)">Twijfelt u? Kies "Graag advies", dan adviseren wij vooraf welke opties zinvol zijn.</p>
${chips('opties', [...EXTRAS, 'Graag advies'], { multi: true })}
<hr class="fsep">
<div class="fstep"><span>03</span><h3>Uw gegevens</h3></div>
<div class="form-grid">
<div class="fgroup"><label for="naam">Naam <span class="req">*</span></label><input id="naam" name="naam" autocomplete="name" required><p class="err">Vul uw naam in.</p></div>
<div class="fgroup"><label for="tel">Telefoon <span class="req">*</span></label><input id="tel" name="telefoon" type="tel" autocomplete="tel" required><p class="err">Vul een telefoonnummer in.</p></div>
<div class="fgroup"><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email"></div>
<div class="fgroup"><label for="plaats">Plaatsnaam <span class="req">*</span></label><input id="plaats" name="plaats" autocomplete="address-level2" required list="plaatsen"><p class="err">Vul de plaats in.</p></div>
<div class="fgroup full"><label for="toelichting">Toelichting</label><textarea id="toelichting" name="toelichting" placeholder="Bijvoorbeeld: ondergrond, bereikbaarheid, gewenste afwerking"></textarea></div>
</div>
<datalist id="plaatsen">${ctx.places.filter(p => p.kind !== 'deel').map(p => `<option value="${esc(p.name)}">`).join('')}</datalist>
<button class="btn btn-teal" type="submit" style="margin-top:10px">Offerte aanvragen ${icon('arrow')}</button>
<p class="form-note">${site.formEndpoint || site.netlifyForms ? 'Na verzenden nemen we zo snel mogelijk contact met u op.' : 'Na verzenden opent WhatsApp met uw aanvraag als bericht. U tikt op verzenden en ontvangt de offerte daarna ook op WhatsApp.'}</p>
<div class="sent" role="status" id="sentMsg"><b>Bedankt voor uw aanvraag!</b><br>WhatsApp is geopend met uw aanvraag: tik daar op verzenden. U ontvangt de offerte op uw WhatsApp. <a class="sent-wa" href="#" target="_blank" rel="noopener" hidden>Opende WhatsApp niet? Tik hier.</a></div>
</form>
<aside class="offer-side">
<div class="dc"><h3>Direct contact</h3>
<a href="${tel}"><span class="ic">${icon('phone')}</span><span><small>Telefoon</small><b>${site.phoneDisplay}</b></span></a>
<a href="${wa()}" target="_blank" rel="noopener"><span class="ic">${waIcon}</span><span><small>WhatsApp</small><b>Stuur een bericht</b></span></a>
<a href="/werkgebied"><span class="ic">${icon('pin')}</span><span><small>Werkgebied</small><b>Heel Nederland</b></span></a></div>
<div class="why"><h3>Waarom Dekvloerexpert?</h3><ul>${['Vrijblijvende prijsopgave', 'Duidelijk advies vooraf', 'Transparante, eerlijke prijzen', 'Alles onder één dak', 'Landelijk actief', 'Jarenlange ervaring'].map(t => `<li><span class="tick">${icon('check')}</span>${t}</li>`).join('')}</ul></div>
</aside>
</div></section>`;
  return page({ path: '/offerte', title: 'Offerte aanvragen | Dekvloerexpert', description: 'Vraag een scherpe, vrijblijvende prijsopgave aan voor uw zandcement dekvloer, vloerverwarming of andere vloerklus. Snel antwoord.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// ───────────────────────── Contact
export function contact(ctx) {
  const crumbs = [['/', 'Home'], ['/contact', 'Contact']];
  const body = `${hero({ crumbs, h1: 'Neem contact op', lead: 'Heeft u vragen over zandcementdekvloeren, wilt u deskundig advies of een vrijblijvende offerte aanvragen? Bij Dekvloerexpert helpen wij u graag verder. Of het nu gaat om een particuliere woning, renovatie of een grootschalig bouwproject: wij denken met u mee en adviseren u over de juiste oplossing. Neem eenvoudig contact met ons op via telefoon, WhatsApp of e-mail.', buttons: `<div class="btn-row"><a class="btn btn-teal" href="/offerte">Offerte aanvragen ${icon('arrow')}</a><a class="btn btn-wa" href="${wa()}" target="_blank" rel="noopener">${waIcon} WhatsApp</a></div>` })}
<section class="paper"><div class="wrap split"><div class="reveal">
<h2>Wij denken graag met u mee</h2>
<ul class="contact-list">
<li><span class="f-ic">${icon('phone')}</span><span><a href="${tel}">${site.phoneDisplay}</a><small>Bellen of sms'en</small></span></li>
<li><span class="f-ic">${waIcon}</span><span><a href="${wa()}" target="_blank" rel="noopener">WhatsApp</a><small>Stuur foto's of een plattegrond mee</small></span></li>
<li><span class="f-ic">${icon('mail')}</span><span><a href="mailto:${site.email}">${site.email}</a><small>Voor tekeningen en bestekken</small></span></li>
<li><span class="f-ic">${icon('pin')}</span><span><a href="/werkgebied">Heel Nederland</a><small>Bekijk ons werkgebied</small></span></li>
<li><span class="f-ic">${icon('building')}</span><span>${site.address.street}, ${site.address.zip} ${site.address.city}<small>Geen bezoekadres · KvK ${site.kvk} · Btw ${site.btw}</small></span></li>
</ul></div>
<div class="dc reveal"><h3>Snel een prijs?</h3><p style="color:var(--muted-d)">Stuur via WhatsApp de oppervlakte, de gewenste dikte, uw postcode en een foto van de ruimte. Dan sturen we u zo snel mogelijk een eerste indicatie.</p><a class="btn btn-wa" href="${wa('Hallo, ik wil graag een prijsindicatie voor een dekvloer. Oppervlakte: … m², dikte: … cm, postcode: …')}" target="_blank" rel="noopener">${waIcon} Start WhatsApp</a></div>
</div></section>${cta()}`;
  return page({ path: '/contact', active: '/contact', title: 'Contact | Dekvloerexpert', description: `Contact met Dekvloerexpert: bel ${site.phoneDisplay}, stuur een WhatsApp of vraag online een vrijblijvende offerte aan voor uw dekvloer.`, body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

// Juridische teksten staan in content/*.md (eenvoudige markdown: ##, genummerde lijsten, - opsommingen).
function legalHtml(file) {
  const company = `<div class="company"><b>${site.legalName}</b><br>${site.address.street}<br>${site.address.zip} ${site.address.city}<br><br>KvK-nummer: ${site.kvk}<br>Btw-nummer: ${site.btw}<br>Telefoon: <a href="${tel}">${site.phoneDisplay}</a><br>E-mail: <a href="mailto:${site.email}">${site.email}</a><br>Website: <a href="/">www.dekvloerexpert.nl</a></div>`;
  const md = readFileSync(new URL('../content/' + file, import.meta.url), 'utf8')
    .replaceAll('{{SITE}}', '<a href="/">www.dekvloerexpert.nl</a>').replaceAll('{{EMAIL}}', `<a href="mailto:${site.email}">${site.email}</a>`);
  const out = []; let list = null, sub = false;
  const close = () => { if (sub) { out.push('</ul></li>'); sub = false; } else if (list) out.push('</li>'); if (list) out.push(`</${list}>`); list = null; };
  for (const raw of md.split('\n')) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    if (line === '{{BEDRIJF}}') { close(); out.push(company); continue; }
    let m;
    if ((m = line.match(/^## (.+)/))) { close(); out.push(`<h2>${m[1]}</h2>`); continue; }
    if ((m = line.match(/^\d+\. (.+)/))) { if (list !== 'ol') { close(); out.push('<ol>'); list = 'ol'; } else { if (sub) { out.push('</ul>'); sub = false; } out.push('</li>'); } out.push(`<li>${m[1]}`); continue; }
    if ((m = line.match(/^ +- (.+)/)) && list === 'ol') { if (!sub) { out.push('<ul>'); sub = true; } out.push(`<li>${m[1]}</li>`); continue; }
    if ((m = line.match(/^- (.+)/))) { if (list !== 'ul') { close(); out.push('<ul>'); list = 'ul'; } else out.push('</li>'); out.push(`<li>${m[1]}`); continue; }
    close(); out.push(`<p>${line}</p>`);
  }
  close();
  return out.join('\n').replace(/<\/ul><\/li><\/ol>/g, '</ul></li></ol>');
}

export function privacy(ctx) {
  const crumbs = [['/', 'Home'], ['/privacy', 'Privacyverklaring']];
  const body = `${hero({ crumbs, h1: 'Privacyverklaring', lead: 'Hoe Dekvloerexpert omgaat met uw persoonsgegevens.', buttons: '' })}
<section><div class="wrap prose legal" style="max-width:860px">${legalHtml('privacyverklaring.md')}</div></section>`;
  return page({ path: '/privacy', title: 'Privacyverklaring | Dekvloerexpert', description: 'Privacyverklaring van Dekvloerexpert: welke gegevens wij gebruiken als u een offerte aanvraagt, hoe lang wij ze bewaren en welke rechten u heeft.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

export function voorwaarden(ctx) {
  const crumbs = [['/', 'Home'], ['/algemene-voorwaarden', 'Algemene voorwaarden']];
  const body = `${hero({ crumbs, h1: 'Algemene voorwaarden', lead: 'De voorwaarden die gelden voor offertes, overeenkomsten en werkzaamheden van Dekvloerexpert.', buttons: '' })}
<section><div class="wrap prose legal" style="max-width:860px">${legalHtml('algemene-voorwaarden.md')}</div></section>`;
  return page({ path: '/algemene-voorwaarden', title: 'Algemene voorwaarden | Dekvloerexpert', description: 'Algemene voorwaarden van Dekvloerexpert voor offertes, meerwerk, uitvoering, oplevering, garantie en aansprakelijkheid bij zandcement dekvloeren.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}

export function faq(ctx) {
  const crumbs = [['/', 'Home'], ['/veelgestelde-vragen', 'Veelgestelde vragen']];
  const kb = SERVICES_KB.map(([slug, label]) => `<li><a href="/${slug}">${label}</a></li>`).join('');
  const body = `${hero({ crumbs, pill: 'Veelgestelde vragen', h1: 'Goed om te <span class="accent">weten</span>', lead: 'Hier vindt u antwoorden op veelgestelde vragen over onze zandcementdekvloeren, droogtijd, kosten en werkwijze.' })}
<section><div class="wrap" style="max-width:900px">
${faqHtml(HOME_FAQ)}
<div class="center" style="margin-top:44px"><h3>Meer weten?</h3><ul class="chips" style="justify-content:center">${kb}</ul></div>
</div></section>
${cta()}`;
  return page({ path: '/veelgestelde-vragen', title: 'Veelgestelde vragen over zandcement dekvloeren | Dekvloerexpert', description: 'Antwoorden op veelgestelde vragen over zandcement dekvloeren: dikte, droogtijd, vloerverwarming, opties en de offerte.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs), faqLd(HOME_FAQ)] });
}
const SERVICES_KB = [['cementdekvloer-kosten-per-m2', 'Cementdekvloer kosten per m²'], ['cementdekvloer-droogtijd', 'Droogtijd cementdekvloer'], ['zandcement-dekvloer-zelf-maken', 'Zandcement dekvloer zelf maken'], ['vloeibaar-zandcement', 'Vloeibaar zandcement'], ['cement-dekvloer', 'Cementdekvloer'], ['kennisbank', 'Alle artikelen']];

export function notFound(ctx) {
  const body = `${hero({ h1: 'Pagina niet gevonden', lead: 'Deze pagina bestaat niet (meer). Zoekt u een plaats? Bekijk dan ons werkgebied.', buttons: `<div class="btn-row"><a class="btn btn-teal" href="/werkgebied">Naar werkgebied ${icon('arrow')}</a><a class="btn btn-ghost" href="/">Naar home</a></div>` })}`;
  return page({ path: '/404', title: 'Pagina niet gevonden | Dekvloerexpert', description: 'Deze pagina bestaat niet (meer). Bekijk ons werkgebied of vraag direct een offerte aan voor uw zandcement dekvloer.', body, noindex: true, footerPlaces: ctx.footerPlaces });
}

export function fotoverantwoording(ctx) {
  const crumbs = [['/', 'Home'], ['/fotoverantwoording', 'Fotoverantwoording']];
  const rows = ctx.media.credits.map(c => `<tr><td><img src="/assets/media/${c.file}" alt="" loading="lazy" style="width:120px;height:80px;object-fit:cover;border-radius:6px"></td><td>${esc(c.title)}</td><td>${esc(c.creator)}</td><td><a href="${c.licenseUrl}" target="_blank" rel="noopener">${c.license}</a></td><td><a href="${c.source}" target="_blank" rel="noopener">Bron</a></td></tr>`).join('');
  const body = `${hero({ crumbs, h1: 'Fotoverantwoording', lead: 'Een deel van de foto\'s op deze site is gemaakt door anderen en gedeeld onder een Creative Commons-licentie. Hieronder staat per foto wie hem maakte en onder welke licentie.', buttons: '' })}
<section><div class="wrap"><div class="table-scroll"><table class="ptable"><thead><tr><th>Foto</th><th>Titel</th><th>Maker</th><th>Licentie</th><th></th></tr></thead><tbody>${rows || '<tr><td colspan="5">Alle foto\'s op deze site zijn eigen werk.</td></tr>'}</tbody></table></div>
<p class="note">De foto's zijn niet bewerkt, alleen verkleind voor het web.</p></div></section>`;
  return page({ path: '/fotoverantwoording', title: 'Fotoverantwoording | Dekvloerexpert', description: 'Makers en licenties van de foto\'s op deze website.', body, footerPlaces: ctx.footerPlaces, ld: [crumbLd(crumbs)] });
}
