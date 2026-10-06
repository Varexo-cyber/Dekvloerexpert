// Versleutelt alle pagina's in dist/ met StatiCrypt (AES-256), voor de wachtwoord-demo.
// Gebruik: DEMO_PASSWORD=... node tools/encrypt.mjs   (standaard: 123)
// Eén keer het wachtwoord invoeren opent alle pagina's: het wordt (gehasht) onthouden in de browser.
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const password = process.env.DEMO_PASSWORD || '123';
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (f !== 'assets') walk(p); } else if (f.endsWith('.html') && f !== 'formulieren.html') files.push(p); } })(dist);

const bin = join(root, 'node_modules/.bin/staticrypt');
if (!existsSync(bin)) throw new Error('StatiCrypt ontbreekt: draai eerst npm install');
// In batches, zodat de commandoregel niet te lang wordt. Uitvoer overschrijft dist/ zelf.
for (let i = 0; i < files.length; i += 150) {
  const batch = files.slice(i, i + 150).map(f => relative(root, f));
  execFileSync(bin, [...batch, '-d', 'dist', '--password', password, '--short', '--remember', '0',
    '--template', 'tools/demo-login.html',
    '--template-title', 'Dekvloerexpert · preview',
    '--template-instructions', 'Deze preview is alleen voor de opdrachtgever. Vul het wachtwoord in om de website te bekijken.',
    '--template-button', 'Bekijk de preview',
    '--template-placeholder', 'Wachtwoord',
    '--template-error', 'Dat wachtwoord klopt niet.',
    '--template-toggle-show', 'Toon wachtwoord', '--template-toggle-hide', 'Verberg wachtwoord',
  ], { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] });
}
console.log(`✓ ${files.length} pagina's versleuteld`);
