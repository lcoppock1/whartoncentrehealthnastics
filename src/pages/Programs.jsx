import { useState } from 'react';
import { Check, Calendar, Users, DollarSign, ChevronDown } from 'lucide-react';
import { PROGRAMS, PROGRAM_COLORS } from '../data/programs';
import { LOCATION } from '../site';
import { Button, PageHeader, Reveal, SectionHeading } from '../components/ui';
import { usePageTitle } from '../lib';
import GetInvolved from '../components/GetInvolved';

const FAQS = [
  { q: 'How do I sign my child up?', a: 'Fill out the enrollment form on our Contact page and we’ll reach out with next steps, the current schedule and any forms you need.' },
  { q: 'Does my child need gymnastics experience?', a: 'No. Beginners are welcome. Coaches start every cadet at their own level and build up safely.' },
  { q: 'What should my child wear?', a: 'Comfortable athletic clothes they can stretch in (no zippers, buttons or jewelry) and a water bottle. We practice barefoot or in socks on the mats.' },
  { q: 'Where do programs meet?', a: `Our home base is ${LOCATION.name}, ${LOCATION.street}, ${LOCATION.city}. Trips and events are announced ahead of time.` },
  { q: 'How much does it cost?', a: 'Contact us for current costs. We work to keep programs affordable, and donations help cover cadets whose families need support.' },
  { q: 'How do you keep kids safe?', a: 'Sessions are supervised by trusted adults, follow a set routine and rules of conduct, and use proper mats and spotting for every skill.' },
];

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={20} className="text-ink/50 shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <dt className="text-sm font-semibold uppercase tracking-wider text-ink/60">{label}</dt>
        <dd className="font-medium">{value || 'Contact us for details'}</dd>
      </div>
    </div>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/15">
      <h3>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-center justify-between gap-6 py-6 text-left text-lg md:text-xl font-semibold hover:text-red">
          {q}
          <ChevronDown size={24} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      {open && <p className="pb-6 text-lg text-ink/70 leading-relaxed max-w-3xl">{a}</p>}
    </div>
  );
}

export default function Programs() {
  usePageTitle('Programs');
  return (
    <main id="main">
      <PageHeader
        eyebrow="Programs"
        title="Move. Learn. Lead."
        intro="Every Healthnastics program trains the body and the mind together. Pick one or join them all."
      >
        <nav aria-label="Programs on this page" className="mt-10 flex flex-wrap gap-3">
          {PROGRAMS.map(({ slug, name }) => (
            <a key={slug} href={`#${slug}`} className="px-5 py-3 bg-white border border-ink/15 font-semibold hover:border-ink transition-colors">{name}</a>
          ))}
        </nav>
      </PageHeader>

      <div className="bg-white">
        {PROGRAMS.map(({ slug, name, icon: Icon, color, description, learn, ages, schedule, cost }, i) => (
          <section key={slug} id={slug} className={`scroll-mt-28 py-20 md:py-28 ${i % 2 ? 'bg-cream' : 'bg-white'}`} aria-labelledby={`${slug}-title`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">
              <Reveal>
                <span className={`inline-flex w-16 h-16 items-center justify-center ${PROGRAM_COLORS[color].bg}`}>
                  <Icon size={32} className={color === 'gold' ? 'text-ink' : 'text-white'} aria-hidden="true" />
                </span>
                <h2 id={`${slug}-title`} className="mt-8 font-display text-4xl md:text-5xl uppercase tracking-tight leading-[0.95]">{name}</h2>
                <p className="mt-6 text-lg md:text-xl text-ink/75 leading-relaxed">{description}</p>
                <h3 className="mt-10 eyebrow text-ink/60">What cadets learn</h3>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {learn.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-lg">
                      <Check size={22} className={`${PROGRAM_COLORS[color].text} shrink-0 mt-0.5`} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150} className="lg:pt-24">
                <div className="bg-white border-2 border-ink p-8">
                  <dl className="grid gap-6">
                    <Detail icon={Users} label="Ages" value={ages} />
                    <Detail icon={Calendar} label="When" value={schedule} />
                    <Detail icon={DollarSign} label="Cost" value={cost} />
                  </dl>
                  <Button to={`/contact?topic=enroll&program=${slug}`} variant="dark" className="mt-8 w-full">Enroll in this program</Button>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 md:py-32 bg-white border-t border-ink/10" aria-labelledby="faq">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="Parents ask" title={<span id="faq">Frequently asked questions</span>} />
          <div className="border-t border-ink/15">
            {FAQS.map((f) => <Faq key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      <GetInvolved />
    </main>
  );
}
