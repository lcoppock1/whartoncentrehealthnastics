import { useState } from 'react';
import { Heart, Dumbbell, Bus, BookOpen, Package, HandHeart, Handshake, Info, Check } from 'lucide-react';
import { ORG, DONATE_URL } from '../site';
import { Button, PageHeader, Reveal, SectionHeading } from '../components/ui';
import { DONATE_LINK, usePageTitle } from '../lib';

const LEVELS = [
  {
    name: 'Cadet Sponsor',
    monthly: 25, once: 150,
    perks: ['Helps cover a cadet’s uniform and civic workbook', 'Thank-you in our annual report'],
    style: 'light',
  },
  {
    name: 'Program Patron',
    monthly: 100, once: 500,
    perks: ['Helps replace mats and safety equipment', 'Your name on our supporters wall', 'Invitation to the cadet graduation'],
    style: 'featured',
  },
  {
    name: 'Community Champion',
    monthly: 500, once: 2500,
    plus: true,
    perks: ['Sponsor a field trip or a season of programs', 'Recognition at events and on our website'],
    style: 'light',
  },
];

const USES = [
  { icon: Dumbbell, title: 'Equipment & safety', text: 'Gymnastics mats, spotting gear and the upkeep that keeps every session safe.' },
  { icon: BookOpen, title: 'Learning', text: 'Homework help, civic workbooks, school supplies and computer time.' },
  { icon: Bus, title: 'Trips & experiences', text: 'Field trips, summer outings, cultural events and graduation celebrations.' },
];

const OTHER_WAYS = [
  { icon: Package, title: 'Donate supplies', text: 'Mats, school supplies, laptops, healthy snacks and athletic clothes are always needed.', to: '/contact?topic=donate', cta: 'Offer supplies' },
  { icon: HandHeart, title: 'Volunteer', text: 'Tutor, coach, chaperone or share your career with cadets.', to: '/contact?topic=volunteer', cta: 'Volunteer' },
  { icon: Handshake, title: 'Corporate partnership', text: 'Sponsor a program, a trip or equipment and put your name behind Philly’s next leaders.', to: '/contact?topic=partner', cta: 'Become a partner' },
];

export default function Support() {
  usePageTitle('Get Involved');
  const [monthly, setMonthly] = useState(true);

  return (
    <main id="main">
      <PageHeader
        eyebrow="Get involved"
        title="Invest in Philly’s next leaders"
        intro="Your support keeps the mats down, the lights on and the doors open for young people who deserve a place to grow."
      />

      {!DONATE_URL && (
        <div className="bg-gold/15 border-y border-gold/40">
          <p className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-start gap-3 text-ink">
            <Info size={22} className="text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
            <span>Online giving is launching soon. To give today, send us a message and we’ll follow up personally.</span>
          </p>
        </div>
      )}

      {/* Giving levels */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="levels">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading align="center" eyebrow="Give" title={<span id="levels">Choose your impact</span>} />

          <div className="flex justify-center mb-14">
            <div role="group" aria-label="Gift frequency" className="inline-flex border-2 border-ink p-1">
              {[['Monthly', true], ['One-time', false]].map(([label, value]) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={monthly === value}
                  onClick={() => setMonthly(value)}
                  className={`px-6 sm:px-10 py-3 font-semibold transition-colors ${monthly === value ? 'bg-ink text-white' : 'text-ink/70 hover:text-ink'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {LEVELS.map((level, i) => {
              const featured = level.style === 'featured';
              const amount = monthly ? level.monthly : level.once;
              return (
                <Reveal key={level.name} delay={i * 120} className={`flex flex-col p-10 ${featured ? 'bg-ink text-white shadow-2xl lg:-my-4 lg:py-14' : 'bg-cream border border-ink/10'}`}>
                  {featured && <p className="eyebrow text-gold mb-4">Recommended</p>}
                  <h3 className="font-display text-3xl uppercase tracking-tight">{level.name}</h3>
                  <p className={`mt-6 font-display text-5xl ${featured ? 'text-gold' : 'text-ink'}`}>
                    ${amount.toLocaleString()}{level.plus && '+'}
                    <span className={`ml-2 font-sans text-base font-semibold ${featured ? 'text-white/60' : 'text-ink/60'}`}>{monthly ? '/ month' : 'one time'}</span>
                  </p>
                  <ul className="mt-8 space-y-4 flex-1">
                    {level.perks.map((perk) => (
                      <li key={perk} className={`flex items-start gap-3 ${featured ? 'text-white/85' : 'text-ink/80'}`}>
                        <Check size={20} className={`shrink-0 mt-0.5 ${featured ? 'text-gold' : 'text-green'}`} aria-hidden="true" /> {perk}
                      </li>
                    ))}
                  </ul>
                  <Button to={DONATE_LINK} variant={featured ? 'red' : 'dark'} className="mt-10 w-full">
                    <Heart size={18} aria-hidden="true" /> Give ${amount.toLocaleString()}{monthly ? ' monthly' : ''}
                  </Button>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-14 text-center text-lg text-ink/70">
            Any amount helps. <a href={DONATE_URL || '/contact?topic=donate'} className="font-semibold text-red underline underline-offset-4">Give a different amount</a>
            {ORG.ein && <span className="block mt-2 text-base">{ORG.legalName} is a 501(c)(3) nonprofit (EIN {ORG.ein}). Gifts are tax-deductible as allowed by law.</span>}
          </p>
        </div>
      </section>

      {/* Where it goes */}
      <section className="py-24 md:py-32 bg-cream" aria-labelledby="uses">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="Where your gift goes" title={<span id="uses">Straight to the cadets</span>} intro="Healthnastics is run lean. Donations go to the things cadets use and experience every week." />
          <div className="grid gap-6 md:grid-cols-3">
            {USES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120} className="bg-white p-8 md:p-10 border-t-4 border-green">
                <Icon size={32} className="text-green" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl uppercase tracking-tight">{title}</h3>
                <p className="mt-3 text-lg text-ink/70 leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="other-ways">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="More ways to help" title={<span id="other-ways">Give your time or talent</span>} />
          <div className="grid gap-6 md:grid-cols-3">
            {OTHER_WAYS.map(({ icon: Icon, title, text, to, cta }, i) => (
              <Reveal key={title} delay={i * 120} className="flex flex-col p-8 md:p-10 border border-ink/15">
                <Icon size={32} className="text-red" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl uppercase tracking-tight">{title}</h3>
                <p className="mt-3 text-lg text-ink/70 leading-relaxed flex-1">{text}</p>
                <Button to={to} variant="outline" className="mt-8 self-start">{cta}</Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
