// Gedeelde inhoud: opties, werkwijze, reviews, projecten.
import { icon, esc, googleWord, waIcon } from './layout.mjs';
import { site } from './config.mjs';

export const OPTIONS = [
  { key: 'droogtijdversneller', title: 'Droogtijdversneller', icon: 'clock', short: 'Laat de vloer sneller drogen, bijvoorbeeld binnen 10 tot 15 dagen.',
    long: 'Normaal gesproken droogt een cementvloer ongeveer 1 centimeter per week. Heeft uw project haast? Met onze droogtijdversneller gaat dat veel sneller, en is de vloer bijvoorbeeld binnen 10 tot 15 dagen legklaar voor de eindafwerking.' },
  { key: 'verharder', title: 'Verharder', alt: 'Vloerverharder', icon: 'shield', short: 'Voor intensief belaste vloeren of garagevloeren.',
    long: 'Deze toevoeging maakt de vloer sterker en beter bestand tegen druk. Ideaal voor ruimtes die intensief belast worden, zoals garages, bedrijfshallen of drukbezochte winkelruimtes.' },
  { key: 'vezels', title: 'Krimpvezels', alt: 'Vezelversterking', tag: 'Vezelwapening', icon: 'layers', short: 'PP-vezels voorkomen krimpscheuren in de zandcementdekvloer.',
    long: 'Door speciale kunststof krimpvezels door de specie te mengen, ontstaat een fijn netwerk van wapening door de hele vloer. Dat verkleint de kans op krimpscheuren tijdens het drogen flink.' },
  { key: 'duremit', title: 'Duremit', icon: 'bolt', short: 'Hoogwaardig additief voor extra sterke en sneldrogende vloeren.',
    long: 'Duremit is een hoogwaardig additief dat de vloer dichter en sterker maakt en het drogen versnelt. Een goede keuze als u een vloer wilt die eerder belastbaar is en een hogere sterkteklasse haalt.' },
  { key: 'krimpnetten', title: 'Krimpnetten', icon: 'grid', short: 'Extra constructieve stevigheid, essentieel bij vloerverwarming.',
    long: 'Een krimpnet is een gaas dat in de dekvloer wordt meegelegd. Het houdt de vloer bij elkaar als hij werkt door warmte en krimp. Boven vloerverwarming raden we het bijna altijd aan.' },
  { key: 'randisolatie', title: 'Randisolatie', icon: 'ruler', short: 'Houdt de vloer vrij van muren en kolommen, zodat hij scheurvrij kan werken.',
    long: 'Langs alle wanden, kolommen en leidingdoorvoeren brengen we een strook randisolatie aan. Zo ligt de dekvloer los van de constructie, kan hij vrij uitzetten en krimpen, en loopt er minder contactgeluid door naar de muren.' },
  { key: 'vlevopol', title: 'Vlevopol', icon: 'drop', short: 'Primer en toeslagstof voor een superieure hechting.',
    long: 'Vlevopol is een hechtmiddel dat we gebruiken als de dekvloer direct op een bestaande betonvloer komt. Het zorgt voor een sterke hechting tussen oud en nieuw, zodat er geen holle plekken ontstaan.' },
];
export const optionByKey = k => OPTIONS.find(o => o.key === k);

export const STEPS = [
  ['Advies vooraf', 'We kijken naar uw situatie en adviseren de juiste opties, zoals vezels of versnellers.'],
  ['Heldere prijsopgave', 'U ontvangt een scherpe, vrijblijvende prijsopgave. Geen verrassingen achteraf.'],
  ['Uitvoering volgens planning', 'Wij schakelen snel, komen afspraken na en werken met modern materieel.'],
  ['Kaarsrecht en legklaar', 'Vlak en waterpas afgewerkt, zodat de vloerenlegger direct aan de slag kan.'],
];
export const stepsHtml = (steps = STEPS) => `<div class="steps">${steps.map(([t, d], i) => `<div class="step reveal"><div class="num">${String(i + 1).padStart(2, '0')}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`;

export const optionCards = (opts = OPTIONS, withLink = true) => `<div class="cards">${opts.map(o => `<div class="card reveal"><span class="ck">${icon('check')}</span><div><h3>${o.alt || o.title}</h3><p>${o.short}</p></div></div>`).join('')}${withLink ? `<a class="card link reveal" href="/opties"><div><h3>Alles over de opties</h3><p>Uitleg per optie en wanneer u hem kiest.</p></div><span class="arrow">${icon('arrow')}</span></a>` : ''}</div>`;

// Voorbeeldreviews, net als in de demo duidelijk gemarkeerd als voorbeeld.
// Vervang ze door echte Google-reviews zodra het bedrijfsprofiel gekoppeld is.
const REVIEWS = [
  ['Werkplek netjes achtergelaten en met modern materieel gewerkt.', 'Utiliteitsbouw'],
  ['Heldere communicatie en een transparante, eerlijke prijs.', 'Renovatie'],
  ['Kaarsrecht en legklaar opgeleverd, de tegelzetter kon direct aan de slag.', 'Zandcement dekvloer'],
  ['Duidelijk advies vooraf over vezels en de droogtijdversneller. Geen verrassingen achteraf.', 'Zandcement met versneller'],
  ['Vloerverwarming en dekvloer in één keer geregeld, met één aanspreekpunt.', 'Vloerverwarming en dekvloer'],
  ['Snel geschakeld en de afspraken nagekomen, precies volgens planning.', 'Nieuwbouw'],
];
const reviewCard = ([q, t]) => !site.reviews?.length ? `<article class="review"><div class="r-top"><span class="r-av">G</span><div><b>Klant via Google</b><span class="stars" aria-label="5 sterren">★★★★★</span></div><span class="r-tag">Voorbeeld</span></div><q>${esc(q)}</q><small>${esc(t)}</small></article>` : `<article class="review"><div class="r-top"><span class="r-av">G</span><div><b>Klant via Google</b><span class="stars" aria-label="5 sterren">★★★★★</span></div></div><q>${esc(q)}</q><small>${esc(t)}</small></article>`;
export const reviewsSection = () => `<section class="dark" id="reviews"><div class="wrap center">
<a class="gbadge" href="${site.googleReviewsUrl || '#reviews'}"${site.googleReviewsUrl ? ' target="_blank" rel="noopener"' : ''}>${googleWord}<span class="stars">★★★★★</span>Reviews</a>
<h2>Wat onze klanten <span class="accent">zeggen</span></h2>
${site.reviews?.length ? '' : '<p class="lead">Voorbeeldweergave: zodra uw Google Bedrijfsprofiel is gekoppeld, verschijnen hier de echte beoordelingen van uw klanten.</p>'}
</div>
${(() => { const r = site.reviews?.length ? site.reviews : REVIEWS; const half = Math.ceil(r.length / 2); const rows = [r, [...r.slice(half), ...r.slice(0, half)]];
  return rows.map((row, i) => `<div class="marquee"${i ? ' style="margin-top:0"' : ''}><div class="track${i ? ' rev' : ''}">${row.map(reviewCard).join('')}<div class="dup" aria-hidden="true">${row.map(reviewCard).join('')}</div></div></div>`).join(''); })()}
</section>`;

// Voorbeeldprojecten uit de demo. Vervang foto's in public/assets/img/ en pas teksten hier aan.
export const PROJECTS = [
  { tag: 'Zandcement', title: 'Kantoorpand', place: 'Utrecht', m2: '800', img: 'project-1' },
  { tag: 'Zandcement + Vloerverwarming', title: 'Renovatie woonhuis', place: 'Rotterdam', m2: '180', img: 'project-2' },
  { tag: 'Zandcement', title: 'Bedrijfshal', place: 'Eindhoven', m2: '3.500', img: 'project-3' },
  { tag: 'Vloerverwarming', title: 'Nieuwbouwwoning', place: 'Den Haag', m2: '160', img: 'project-4' },
  { tag: 'Zandcement', title: 'Kantoorruimte', place: 'Amsterdam', m2: '450', img: 'project-5' },
  { tag: 'Zandcement', title: 'Utiliteitsgebouw', place: 'Tilburg', m2: '2.100', img: 'project-6' },
  { tag: 'Zandcement', title: 'Appartementencomplex', place: 'Almere', m2: '1.250', img: 'project-7' },
  { tag: 'Zandcement + Vezels', title: 'Herenhuis', place: 'Haarlem', m2: '210', img: 'project-8' },
  { tag: 'Zandcement', title: 'Showroom', place: 'Zwolle', m2: '600', img: 'project-1' },
];
export const projectCard = p => `<figure class="proj reveal"><img src="/assets/img/${p.img}.jpg" alt="${esc(p.title)} in ${esc(p.place)}, ${p.m2} m² zandcement dekvloer" loading="lazy" width="900" height="700"><span class="ptag">${esc(p.tag)}</span><figcaption><b>${esc(p.title)}</b><span>${esc(p.place)} · ${p.m2} m²</span></figcaption></figure>`;

export const featureList = items => `<div class="features">${items.map(([ic, t, d]) => `<div class="feature reveal"><span class="f-ic">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>`;

// ───────────────────────── Nieuwe blokken

// Zoekwoorden-band onder de hero (uit de klantlijst).
const KEYWORDS = ['Zandcement dekvloer', 'Cementdekvloer', 'Zand-cementvloer', 'Vloerverwarming', 'Anhydriet', 'Egaliseren', 'Krimpnetten', 'Droogtijdversneller', 'Duremit', 'Randisolatie', 'Nieuwbouw', 'Renovatie', 'Utiliteit'];
export const ruler = () => `<div class="ruler" aria-hidden="true">${Array.from({ length: 40 }, (_, i) => `<span style="left:${(i + 1) * 100}px">${(i + 1) * 10}</span>`).join('')}</div>`;
export const keywordBand = () => `<div class="kband" aria-hidden="true"><div class="kband-track">${[...KEYWORDS, ...KEYWORDS].map(k => `<span>${k}</span>`).join('')}</div></div>`;

// Specificatiekaart naast de hero: echte vaktermen en maten.
export const heroCard = () => `<aside class="spec-card" aria-label="Kenmerken van onze dekvloeren">
<div class="spec-head">Standaard opbouw</div>
<dl>
<div><dt>Sterkteklasse</dt><dd>CT-C20-F4</dd></div>
<div><dt>Laagdikte</dt><dd>5 – 8 cm</dd></div>
<div><dt>Mengverhouding</dt><dd>1 : 4,5</dd></div>
<div><dt>Legklaar met versneller</dt><dd>10 – 15 dagen</dd></div>
</dl>
<p class="spec-foot">Vlak en waterpas afgereid · eigen mixer en pomp</p>
</aside>`;

// Interactieve doorsnede van een vloeropbouw.
const LAYERS = [
  { id: 'afwerking', name: 'Afwerkvloer', mm: '± 10 mm', h: 22, fill: 'var(--l-finish)', text: 'Tegels, pvc, laminaat, parket of een gietvloer. Hoe vlakker de dekvloer, hoe strakker dit resultaat.' },
  { id: 'dekvloer', name: 'Zandcement dekvloer', mm: '50 – 80 mm', h: 96, fill: 'var(--l-screed)', text: 'De laag die wij leggen: zand, cement en water, gepompt, verdicht en kaarsrecht afgereid. Minimaal 3 à 4 cm boven de leidingen.', pipes: true, net: true },
  { id: 'isolatie', name: 'Isolatie', mm: '60 – 120 mm', h: 64, fill: 'var(--l-insu)', text: 'PIR- of EPS-platen houden de warmte in de vloer en de kou van de kruipruimte weg. De dekvloer ligt hier zwevend op.' },
  { id: 'beton', name: 'Constructievloer', mm: '± 200 mm', h: 78, fill: 'var(--l-concrete)', text: 'De dragende betonvloer of kanaalplaatvloer. Ligt de dekvloer direct hierop, dan zorgt Vlevopol voor de hechting.' },
];
export function buildUp() {
  const W = 560; let y = 20;
  const rects = LAYERS.map(l => {
    const r = { ...l, y }; y += l.h + 6; return r;
  });
  const svg = `<svg class="bu-svg" viewBox="0 0 ${W} ${y + 14}" role="img" aria-label="Doorsnede van een vloer: afwerking, dekvloer met vloerverwarming, isolatie en constructievloer">
<defs>
<pattern id="pIns" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 14 14 0" stroke="rgba(0,0,0,.12)" stroke-width="2"/></pattern>
<pattern id="pCon" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="4" cy="5" r="1.6" fill="rgba(0,0,0,.18)"/><circle cx="13" cy="12" r="2.2" fill="rgba(0,0,0,.12)"/></pattern>
<pattern id="pScr" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".7" fill="rgba(0,0,0,.16)"/><circle cx="5" cy="4.5" r=".5" fill="rgba(255,255,255,.25)"/></pattern>
</defs>
<path d="M20 ${y + 6} H${W - 20}" stroke="var(--l-line)" stroke-dasharray="4 6"/>
${rects.map(l => `<g class="bu-layer" data-layer="${l.id}" tabindex="0">
<rect x="20" y="${l.y}" width="${W - 40}" height="${l.h}" rx="6" fill="${l.fill}"/>
${l.id === 'isolatie' ? `<rect x="20" y="${l.y}" width="${W - 40}" height="${l.h}" rx="6" fill="url(#pIns)"/>` : ''}
${l.id === 'beton' ? `<rect x="20" y="${l.y}" width="${W - 40}" height="${l.h}" rx="6" fill="url(#pCon)"/>` : ''}
${l.id === 'dekvloer' ? `<rect x="20" y="${l.y}" width="${W - 40}" height="${l.h}" rx="6" fill="url(#pScr)"/>` : ''}
${l.net ? `<path d="M28 ${l.y + l.h - 34} H${W - 28}" stroke="var(--l-net)" stroke-width="2" stroke-dasharray="2 5"/>` : ''}
${l.pipes ? Array.from({ length: 16 }, (_, i) => `<circle cx="${44 + i * 32}" cy="${l.y + l.h - 20}" r="8" fill="${i % 2 ? 'var(--l-pipe2)' : 'var(--l-pipe)'}" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>`).join('') : ''}
</g>`).join('')}
</svg>`;
  return `<div class="buildup">
<div class="bu-list" role="tablist" aria-label="Lagen van de vloer">${LAYERS.map((l, i) => `<button type="button" role="tab" class="bu-item${i === 1 ? ' on' : ''}" data-layer="${l.id}" aria-selected="${i === 1}"><span class="bu-sw" style="background:${l.fill}"></span><span class="bu-txt"><b>${l.name}</b><small>${l.mm}</small><span class="bu-desc">${l.text}</span></span></button>`).join('')}</div>
<div class="bu-fig">${svg}<div class="bu-tags"><span>Krimpnet</span><span>Vloerverwarming</span><span>Randisolatie langs de wand</span></div></div>
</div>`;
}

// Offerte samenstellen: geen prijs, de aanvraag gaat als kant-en-klaar bericht naar WhatsApp.
export const EXTRAS = ['Versneller', 'Verharder', 'Vezels', 'Duremit', 'Krimpnetten', 'Randisolatie'];
export const ETAGES = ['Kelder', 'Begane grond', '1e verdieping', '2e verdieping', '3e verdieping'];
export function offerteTool(place = '') {
  return `<form class="calc otool" data-wa="${site.whatsapp}" data-place="${esc(place)}" onsubmit="return false">
<div class="calc-in">
<div class="calc-row"><label for="otM2">Oppervlakte</label><span class="ot-num"><input id="otM2" type="number" min="1" max="20000" value="60" inputmode="numeric"> m²</span></div>
<input id="otM2r" type="range" min="5" max="1000" step="1" value="60" aria-label="Oppervlakte in m²">
<div class="calc-row" style="margin-top:26px"><label for="otCm">Dikte</label><span class="ot-num"><input id="otCm" type="number" min="2" max="30" step="0.5" value="6" inputmode="decimal"> cm</span></div>
<div class="seg-btns ot-cm" role="group" aria-label="Snelkeuze dikte">${[5, 6, 7, 8, 9, 10, 11, 12].map(c => `<button type="button" data-cm="${c}"${c === 6 ? ' class="on"' : ''}>${c}</button>`).join('')}</div>
<p class="ot-hint">Vloeren kunnen tot wel 30 cm dik zijn. Vul gerust zelf in.</p>
<div class="ot-cols">
<div><div class="calc-row" style="margin-top:22px"><span class="flabel">Extra's</span></div>
<div class="calc-opts ot-extras">${EXTRAS.map(x => `<label><input type="checkbox" value="${x}"> ${x}</label>`).join('')}</div></div>
<div><div class="calc-row" style="margin-top:22px"><span class="flabel">Etage</span></div>
<div class="calc-opts ot-etage">${ETAGES.map(x => `<label><input type="radio" name="ot_etage" value="${x}"${x === 'Begane grond' ? ' checked' : ''}> ${x}</label>`).join('')}</div></div>
</div>
${place ? '' : '<div class="calc-row" style="margin-top:22px"><label for="otPlace">Plaatsnaam</label></div><input id="otPlace" class="ot-text" type="text" autocomplete="address-level2" placeholder="Bijvoorbeeld Alkmaar">'}
</div>
<div class="calc-out">
<span class="calc-lbl">Uw aanvraag${place ? ' in ' + esc(place) : ''}</span>
<ul class="ot-sum" aria-live="polite"><li><span>Oppervlakte</span><b data-k="m2">60 m²</b></li><li><span>Dikte</span><b data-k="cm">6 cm</b></li><li><span>Etage</span><b data-k="e">Begane grond</b></li><li><span>Extra's</span><b data-k="x">Geen</b></li></ul>
<a class="btn btn-wa ot-send" href="#" target="_blank" rel="noopener">${waIcon} Offerte aanvragen via WhatsApp</a>
<p class="calc-note">Wij sturen u een passende offerte, direct op uw WhatsApp. Liever een formulier? <a class="ot-form" href="/offerte">Vul het offerteformulier in</a>.</p>
</div>
</form>`;
}
export const calculator = offerteTool;

// Galerij met lightbox (foto's en video's).
export function gallery(items, limit = 0) {
  const list = limit ? items.slice(0, limit) : items;
  return `<div class="gal">${list.map((m, i) => `<button type="button" class="gal-item${i % 9 === 0 ? ' big' : ''}" data-src="${m.src}" data-video="${m.video ? 1 : 0}" data-caption="${esc(m.caption)}${m.credit ? ' · Foto: ' + esc(m.credit.creator) + ' (' + m.credit.license + ')' : ''}" aria-label="Bekijk ${esc(m.caption)}">
${m.video ? `<video src="${m.src}#t=0.5" muted playsinline preload="metadata"${m.poster ? ` poster="${m.poster}"` : ''}></video><span class="gal-play" aria-hidden="true">▶</span>` : `<img src="${m.src}" alt="${esc(m.caption)}" loading="lazy">`}
<span class="gal-cap">${esc(m.caption)}${m.credit ? `<small>Foto: ${esc(m.credit.creator)} · ${m.credit.license}</small>` : ''}</span></button>`).join('')}</div>
${list.some(m => m.credit) ? '<p class="gal-note">Licentievrije beelden met naamsvermelding. <a href="/fotoverantwoording">Fotoverantwoording</a></p>' : ''}
<dialog class="lightbox" id="lightbox" aria-label="Foto of video vergroot"><button type="button" class="lb-close" aria-label="Sluiten">×</button><button type="button" class="lb-prev" aria-label="Vorige">‹</button><div class="lb-stage"></div><button type="button" class="lb-next" aria-label="Volgende">›</button><p class="lb-cap"></p></dialog>`;
}

// Recent werk als bewegende band: twee rijen die naar links en rechts schuiven, zoals in de demo.
export function galleryBand(items) {
  const pics = items.filter(m => !m.video);
  if (!pics.length) return '';
  const tile = (m, i, dup) => `<button type="button" class="gal-item band-tile${i % 3 === 0 ? ' wide' : ''}"${dup ? ' tabindex="-1" data-dup="1"' : ''} data-src="${m.src}" data-video="0" data-caption="${esc(m.caption)}" aria-label="Bekijk ${esc(m.caption)}"><img src="${m.src}" alt="${dup ? '' : esc(m.caption)}" loading="lazy"><span class="gal-cap">${esc(m.caption)}</span></button>`;
  // Genoeg tegels per rij zodat de band altijd het scherm vult
  const fill = arr => { let out = []; while (out.length < 8) out = out.concat(arr); return out; };
  const rowA = fill(pics), rowB = fill(pics.slice().reverse());
  const row = (arr, rev) => `<div class="marquee gal-band"><div class="track${rev ? ' rev' : ''}">${arr.map((m, i) => tile(m, i, i >= pics.length)).join('')}<div class="dup" aria-hidden="true">${arr.map((m, i) => tile(m, i, true)).join('')}</div></div></div>`;
  return `${row(rowA, false)}${row(rowB, true)}
<dialog class="lightbox" id="lightbox" aria-label="Foto vergroot"><button type="button" class="lb-close" aria-label="Sluiten">×</button><button type="button" class="lb-prev" aria-label="Vorige">‹</button><div class="lb-stage"></div><button type="button" class="lb-next" aria-label="Volgende">›</button><p class="lb-cap"></p></dialog>`;
}

// Staande filmpjes van de klant, naast elkaar als telefoonbeeld. Klik opent ze groot, met geluid.
export const videoSection = (videos, { title = 'Van zandaanvoer tot legklare vloer', lead = 'Zo gaat het op de bouw: het zand komt binnen, de mixer maakt de mortel en de pomp brengt hem naar binnen.' } = {}) => !videos.length ? '' : `<section class="dark vids"><div class="wrap vids-grid">
<div class="vids-text reveal"><h2>${title}</h2><p class="lead">${lead}</p><p class="vids-note">Klik op een filmpje om het met geluid te bekijken.</p></div>
<div class="vids-row">${videos.map(v => `<button type="button" class="gal-item vid-tile" data-src="${v.src}" data-webm="${v.webm || ''}" data-video="1" data-caption="${esc(v.caption)}" aria-label="Bekijk filmpje: ${esc(v.caption)}"><video ${v.poster ? `poster="${v.poster}" ` : ''}autoplay muted loop playsinline preload="metadata"><source src="${v.src}" type="video/mp4">${v.webm ? `<source src="${v.webm}" type="video/webm">` : ''}</video><span class="gal-cap">${esc(v.caption)}</span></button>`).join('')}</div>
</div></section>`;

// Schuivende band met plaatsnamen (links naar de plaatspagina's), bij de werkwijze.
const PIN = '<svg class="pin" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.6 7-12.2A7 7 0 0 0 5 9.8C5 15.4 12 22 12 22z"/><circle cx="12" cy="9.8" r="2.6" fill="#fff"/></svg>';
const GEO = {'Amsterdam':[52.37,4.90],'Haarlem':[52.38,4.64],'Alkmaar':[52.63,4.75],'Den Helder':[52.94,4.76],'Purmerend':[52.50,4.95],'Hilversum':[52.22,5.17],'Hoorn':[52.64,5.06],'Heerhugowaard':[52.67,4.84],'Schagen':[52.79,4.80],'Medemblik':[52.77,5.11],'Enkhuizen':[52.70,5.29],'Rotterdam':[51.92,4.48],'Den Haag':[52.08,4.30],'Zoetermeer':[52.06,4.49],'Dordrecht':[51.81,4.67],'Leiden':[52.16,4.49],'Delft':[52.01,4.36],'Alphen aan den Rijn':[52.13,4.66],'Gouda':[52.01,4.71],'Schiedam':[51.92,4.40],'Vlaardingen':[51.91,4.34],'Utrecht':[52.09,5.12],'Amersfoort':[52.16,5.39],'Veenendaal':[52.03,5.56],'Zeist':[52.09,5.23],'Nieuwegein':[52.03,5.09],'Woerden':[52.09,4.88],'Houten':[52.03,5.17],'De Bilt':[52.11,5.18],'Eindhoven':[51.44,5.48],'Tilburg':[51.56,5.09],'Breda':[51.59,4.78],"'s-Hertogenbosch":[51.69,5.30],'Helmond':[51.48,5.66],'Roosendaal':[51.53,4.46],'Bergen op Zoom':[51.49,4.29],'Oss':[51.77,5.52],'Nijmegen':[51.84,5.86],'Arnhem':[51.98,5.91],'Apeldoorn':[52.21,5.97],'Ede':[52.04,5.67],'Doetinchem':[51.97,6.29],'Barneveld':[52.14,5.59],'Zwolle':[52.52,6.08],'Enschede':[52.22,6.89],'Hengelo':[52.27,6.79],'Deventer':[52.25,6.16],'Almelo':[52.36,6.66],'Groningen':[53.22,6.57],'Leeuwarden':[53.20,5.80],'Assen':[52.99,6.56],'Emmen':[52.78,6.90],'Hoogeveen':[52.72,6.48],'Almere':[52.37,5.21],'Lelystad':[52.52,5.47],'Dronten':[52.53,5.72],'Middelburg':[51.50,3.63],'Vlissingen':[51.45,3.59],'Goes':[51.50,3.89],'Maastricht':[50.85,5.69],'Venlo':[51.37,6.17],'Heerlen':[50.89,5.98]};
const mapX = lon => (lon - 3.3) * 61.6, mapY = lat => (53.6 - lat) * 100;
export function cityBand(ctx) {
  const mains = ctx.places.filter(p => p.isMain);
  const rows = [mains.filter((_, i) => i % 2 === 0), mains.filter((_, i) => i % 2 === 1)];
  const chip = p => `<a class="city-chip" href="/${p.slug}">${PIN}${esc(p.name)}</a>`;
  return `<div class="city-band" aria-label="Plaatsen waar wij werken">
<div class="nl-map"><svg viewBox="-6 6 256 290" role="img" aria-label="Kaart van Nederland met plaatsen waar wij werken"><path class="nl-land" d="M4 223 L34 239 L58 223 L70 213 L91 210 L111 217 L136 231 L157 245 L152 264 L148 284 L168 285 L171 268 L160 255 L177 244 L171 236 L180 224 L180 208 L172 195 L163 179 L177 176 L191 177 L211 170 L217 158 L209 157 L232 136 L230 120 L209 112 L227 96 L231 95 L241 36 L240 30 L222 15 L185 18 L160 20 L129 35 L129 50 L108 65 L89 64 L80 100 L75 125 L62 148 L49 162 L34 178 L25 190 L9 205 L15 216Z"/>${mains.filter(p => GEO[p.name]).map((p, i) => `<a href="/${p.slug}" class="nl-pin" style="--d:${(i % 9) * .35}s"><title>${esc(p.name)}</title><g transform="translate(${mapX(GEO[p.name][1]).toFixed(1)} ${mapY(GEO[p.name][0]).toFixed(1)})"><path d="M0 0c-4.5-5.5-7-8.5-7-12a7 7 0 0 1 14 0c0 3.5-2.5 6.5-7 12z"/><circle cy="-12" r="2.5" fill="#fff"/></g></a>`).join('')}</svg></div>
<p class="city-band-lbl">Actief in heel Nederland, onder meer in</p>
${rows.map((row, i) => `<div class="marquee"><div class="track city-track${i ? ' rev' : ''}">${row.map(chip).join('')}<div class="dup" aria-hidden="true">${row.map(p => chip(p).replace('<a ', '<a tabindex="-1" ')).join('')}</div></div></div>`).join('')}
</div>`;
}
