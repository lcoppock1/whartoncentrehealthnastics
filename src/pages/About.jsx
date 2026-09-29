import { ShieldCheck, Scale, Sparkles, HandHeart, MapPin, GraduationCap, Building2, Megaphone } from 'lucide-react';
import { ORG, LOCATION } from '../site';
import { Button, PageHeader, Reveal, SectionHeading } from '../components/ui';
import { usePageTitle } from '../lib';
import FounderPortrait from '../components/FounderPortrait';
import GetInvolved from '../components/GetInvolved';

const VALUES = [
  { icon: ShieldCheck, title: 'Safety first', text: 'Structured, supervised sessions with clear rules, proper mats and spotting, and adults who know every cadet by name.' },
  { icon: Scale, title: 'Discipline & respect', text: 'Cadets hold themselves to a code of conduct: show up, work hard, respect others and finish what you start.' },
  { icon: Sparkles, title: 'Pride in heritage', text: 'We celebrate Black history and culture, and teach cadets that they come from builders and leaders.' },
  { icon: HandHeart, title: 'Service to community', text: 'Strength is for sharing. Cadets give back to the neighborhood that raises them.' },
];

const FOUNDER_FACTS = [
  { icon: GraduationCap, text: 'B.A. in Urban Studies, Virginia Union University' },
  { icon: Building2, text: 'Former Chairman of the Board, the historic Wharton Centre' },
  { icon: Megaphone, text: 'Decades of grassroots organizing and youth fitness advocacy in Philadelphia' },
];

export default function About() {
  usePageTitle('About');
  return (
    <main id="main">
      <PageHeader
        eyebrow="About us"
        title="Where fitness meets citizenship"
        intro={`${ORG.name} is a Philadelphia nonprofit that helps young people grow strong in body, mind and character, and helps families stay healthy together.`}
      />

      {/* Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <SectionHeading eyebrow="Our story" title="A third space for Philly kids" />
          <div className="space-y-6 text-lg md:text-xl text-ink/75 leading-relaxed">
            <p>
              {ORG.founder} started Healthnastics with a simple idea: the discipline it takes to master a handstand is the same
              discipline it takes to master a math test, a public speech, or a seat at the table where decisions get made.
            </p>
            <p>
              So Healthnastics mixes <strong className="text-ink">gymnastics and fitness</strong> with <strong className="text-ink">homework help</strong>,{' '}
              <strong className="text-ink">health education</strong> and <strong className="text-ink">civic leadership</strong>. Our GD-Cadets learn how their
              city works, study the history that shaped it, and practice leading it.
            </p>
            <p>
              It’s a “third space” between home and school: a place that expects excellence, rewards character, and gives
              every young person a team that believes in them.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 md:py-32 bg-cream" aria-labelledby="founder">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-start">
          <Reveal className="relative max-w-md w-full mx-auto lg:mx-0 lg:sticky lg:top-32">
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold" aria-hidden="true" />
            <div className="relative aspect-[4/5] shadow-2xl overflow-hidden">
              <FounderPortrait />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Founder" title={<span id="founder">{ORG.founder}</span>} />
            <div className="space-y-6 text-lg text-ink/75 leading-relaxed">
              <p>
                Lewis Harris Jr. is a Philadelphia community advocate, educator and businessman who has spent his life
                investing in the city’s neighborhoods and the people in them.
              </p>
              <p>
                He earned his degree in Urban Studies from Virginia Union University, the foundation for decades of work in
                community organizing and urban development. As Chairman of the Board of the historic Wharton Centre, he helped
                guide essential human services, youth arts and music education for North Philadelphia families.
              </p>
              <p>
                Healthnastics brings that experience together with his lifelong belief in youth fitness: healthy kids become
                confident students, and confident students become the citizens who lead their communities.
              </p>
            </div>
            <ul className="mt-10 grid gap-4">
              {FOUNDER_FACTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4 bg-white p-5 border border-ink/10">
                  <Icon size={24} className="text-red shrink-0" aria-hidden="true" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-12 border-l-4 border-gold pl-6 md:pl-10">
              <p className="text-2xl md:text-3xl leading-snug font-medium text-ink/85">
                “Let our time capsules be filled by each of you bearing thoughts of the future!”
              </p>
              <footer className="mt-4 text-ink/60">— {ORG.founder}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="values">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading eyebrow="What we stand for" title={<span id="values">Our values</span>} />
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 2) * 120} className="p-8 md:p-10 bg-cream border-l-4 border-red">
                <Icon size={32} className="text-red" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl uppercase tracking-tight">{title}</h3>
                <p className="mt-3 text-lg text-ink/70 leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Home base */}
      <section className="py-24 md:py-32 bg-green text-white" aria-labelledby="home-base">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <SectionHeading
            light
            eyebrow="Our home base"
            title={<span id="home-base">{LOCATION.name}</span>}
            intro={`Our cadets gather in ${LOCATION.neighborhood}, at a neighborhood park that residents fought to renovate and reopen for the community. It’s proof of what neighbors can do when they organize, and that’s exactly what we teach.`}
          />
          <div className="bg-white/10 p-8 md:p-10 border border-white/20">
            <MapPin size={36} className="text-gold" aria-hidden="true" />
            <p className="mt-6 font-display text-2xl uppercase tracking-tight">{LOCATION.name}</p>
            <p className="mt-2 text-lg text-white/85">{LOCATION.street}<br />{LOCATION.city}</p>
            <Button to={LOCATION.mapUrl} variant="gold" className="mt-8">Get directions</Button>
          </div>
        </div>
      </section>

      <GetInvolved />
    </main>
  );
}
