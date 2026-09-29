// Makes web-ready copies of approved gallery photos.
// Usage: npm run photos   (reads src/data/gallery.js, writes public/gallery/)
import sharp from 'sharp';
import { mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { PHOTOS } from '../src/data/gallery.js';

const OUT = 'public/gallery';
mkdirSync(OUT, { recursive: true });

const approved = PHOTOS.filter((p) => p.approved);
const keep = new Set(approved.flatMap((p) => [`${p.id}.webp`, `${p.id}-thumb.webp`]));

// Remove web copies of photos that are no longer approved.
for (const f of readdirSync(OUT)) {
  if (!keep.has(f)) { rmSync(`${OUT}/${f}`); console.log(`removed  ${f}`); }
}

for (const p of approved) {
  if (!existsSync(p.file)) { console.error(`missing  ${p.file}`); process.exitCode = 1; continue; }
  const img = sharp(p.file).rotate();
  await img.clone().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 70 }).toFile(`${OUT}/${p.id}.webp`);
  await img.clone().resize({ width: 640, height: 800, fit: 'cover' }).webp({ quality: 65 }).toFile(`${OUT}/${p.id}-thumb.webp`);
  console.log(`ready    ${p.id}`);
}
console.log(`\n${approved.length} of ${PHOTOS.length} photos approved for the website.`);
