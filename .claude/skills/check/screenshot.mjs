// Usage: node .claude/skills/check/screenshot.mjs <out-dir> [path ...]
// Screenshots each path at desktop + mobile width from the dev server and
// reports console errors, failed requests, broken images and page overflow.
import { mkdirSync, existsSync } from 'node:fs';

const { chromium } = await import('playwright').catch(() => {
  console.error('Playwright not installed. Run: npm i --no-save playwright');
  process.exit(1);
});

const outDir = process.argv[2] || 'screenshots';
const paths = process.argv.slice(3).length ? process.argv.slice(3) : ['/'];
const base = process.env.BASE_URL || 'http://localhost:5173';
mkdirSync(outDir, { recursive: true });

const launch = {};
if (existsSync('/opt/pw-browsers/chromium')) launch.executablePath = '/opt/pw-browsers/chromium';
if (process.env.HTTPS_PROXY) launch.proxy = { server: process.env.HTTPS_PROXY, bypass: 'localhost,127.0.0.1' };
const browser = await chromium.launch(launch);

for (const path of paths) {
  for (const [label, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width, height } });
    const problems = [];
    page.on('console', (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`));
    page.on('requestfailed', (r) => problems.push(`request failed: ${r.url()}`));
    page.on('response', (r) => r.status() >= 400 && problems.push(`HTTP ${r.status()}: ${r.url()}`));

    await page.goto(base + path, { waitUntil: 'networkidle', timeout: 30000 }).catch((e) => problems.push(String(e)));
    await page.waitForTimeout(1000);

    const broken = await page.$$eval('img', (imgs) =>
      imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src')));
    broken.forEach((src) => problems.push(`broken image: ${src}`));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (overflow) problems.push('page scrolls horizontally (something is too wide)');

    const file = `${outDir}/${path.replace(/\W+/g, '_') || 'home'}-${label}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`\n${path} @ ${label} → ${file}`);
    console.log(problems.length ? problems.map((p) => '  - ' + p).join('\n') : '  no problems found');
    await page.close();
  }
}
await browser.close();
