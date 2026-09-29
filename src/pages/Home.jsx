import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Users, Sparkles, Compass, Dumbbell, Brain, Landmark } from 'lucide-react';
import { PROGRAMS, PROGRAM_COLORS } from '../data/programs';
import { ORG, LOCATION } from '../site';
import { Button, Reveal, SectionHeading } from '../components/ui';
import { DONATE_LINK, usePageTitle } from '../lib';
import FounderPortrait from '../components/FounderPortrait';
import GetInvolved from '../components/GetInvolved';

const PILLARS = [
  { icon: Dumbbell, title: 'Strong bodies', text: 'Gymnastics, fitness and healthy habits that build confidence from the ground up.', color: 'text-red' },
  { icon: Brain, title: 'Sharp minds', text: 'Homework help, reading and health education so cadets thrive in school.', color: 'text-gold-dark' },
  { icon: Landmark, title: 'Good citizens', text: 'Civic leadership, history and service that turn kids into community leaders.', color: 'text-green' },
];

const REASONS = [
  { icon: ShieldCheck, title: 'Safe and supervised', text: 'Caring adults, clear rules and a structured routine every session.' },
  { icon: Users, title: 'Mentors who show up', text: 'Led by a lifelong Philadelphia community advocate and the neighbors who help him.' },
  { icon: Sparkles, title: 'Pride in heritage', text: 'Cadets learn their history and celebrate their culture through projects, drumming and events.' },
  { icon: Compass, title: 'A bigger world', text: 'Field trips and summer outings take cadets beyond the neighborhood.' },
];

function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-20 items-center">
        <div>
          <p className="eyebrow text-gold-dark mb-6 flex items-center gap-4">
            <span className="w-10 h-[2px] bg-current" aria-hidden="true" />
            Philadelphia nonprofit
          </p>
          <h1 className="font-display uppercase tracking-tight leading-[0.9] text-[2.9rem] sm:text-6xl md:text-7xl xl:text-8xl text-ink">
            Strong bodies.<br />
            <span className="text-red">Sharp minds.</span><br />
            <span className="text-green">Good citizens.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-ink/75 max-w-xl">
            {ORG.name} brings gymnastics, fitness, homework help and civic leadership together for Philadelphia youth,
            so every cadet grows healthy, confident and ready to lead.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button to="/contact?topic=enroll" variant="dark">Enroll your child <ArrowRight size={18} aria-hidden="true" /></Button>
            <Button to={DONATE_LINK} variant="red">Support our cadets</Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-ink/70">
            <MapPin size={18} className="text-red shrink-0" aria-hidden="true" />
            <a href={LOCATION.mapUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-ink/30 underline-offset-4 hover:decoration-red">
              {LOCATION.name}, {LOCATION.neighborhood}
            </a>
          </p>
        </div>

        {/* Brand panel: Kente pattern with the three pillars */}
        <div className="relative">
          <div className="aspect-[4/5] max-h-[560px] w-full bg-[url('/images/kente-pattern.webp')] bg-[length:260px] shadow-2xl" aria-hidden="true" />
          <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10 bg-white p-6 sm:p-8 shadow-xl">
            <p className="eyebrow text-gold-dark mb-4">Every cadet builds</p>
            <ul className="space-y-3">
              {PILLARS.map(({ icon: Icon, title, color }) => (
                <li key={title} className="flex items-center gap-4 font-display uppercase text-xl sm:text-2xl tracking-tight">
                  <Icon className={color} size={26} aria-hidden="true" /> {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-2 kente-stripe" aria-hidden="true" />
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="mission">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Our mission"
          title={<span id="mission">Building the whole child: body, mind and citizen</span>}
          intro="Healthnastics is a “third space” between home and school. It’s a place that expects excellence, rewards character, and treats health, learning and citizenship as one practice."
        />
        <div className="grid md:grid-cols-3 border-t-2 border-ink">
          {PILLARS.map(({ icon: Icon, title, text, color }, i) => (
            <Reveal key={title} delay={i * 120} className={`py-10 md:px-10 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-ink/10' : 'md:pl-0'}`}>
              <Icon size={40} className={color} aria-hidden="true" />
              <h3 className="mt-6 font-display text-3xl uppercase tracking-tight">{title}</h3>
              <p className="mt-4 text-lg text-ink/70 leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsPreview() {
  return (
    <section className="py-24 md:py-32 bg-cream" aria-labelledby="programs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading eyebrow="What we do" title={<span id="programs">Programs</span>} intro="Five ways to move, learn and lead, for cadets ages 8–14 and their families." />
          <Button to="/programs" variant="outline" className="mb-14 md:mb-20 self-start md:self-auto">All program details</Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ slug, name, icon: Icon, color, summary, ages }, i) => (
            <Reveal key={slug} delay={(i % 3) * 100}>
              <Link to={`/programs#${slug}`} className="group h-full flex flex-col bg-white p-8 md:p-10 border border-ink/10 hover:border-ink hover:-translate-y-1 hover:shadow-xl transition-all">
                <span className={`w-14 h-14 flex items-center justify-center ${PROGRAM_COLORS[color].soft}`}>
                  <Icon size={28} className={PROGRAM_COLORS[color].text} aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-2xl uppercase tracking-tight leading-tight">{name}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed flex-1">{summary}</p>
                <div className="mt-8 pt-6 border-t border-ink/10 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink/60">Ages {ages}</span>
                  <ArrowRight size={20} className="text-ink/40 group-hover:text-red group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <div className="h-full flex flex-col justify-between bg-red text-white p-8 md:p-10">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-tight leading-tight">Not sure where to start?</h3>
                <p className="mt-4 text-white/85 leading-relaxed">Tell us about your child and we’ll help you find the right fit.</p>
              </div>
              <Button to="/contact?topic=enroll" variant="outline-light" className="mt-8">Ask us</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyFamilies() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" aria-labelledby="why">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold" aria-hidden="true" />
          <img
            src="/images/field-trip-farm.webp"
            alt="Cows resting in straw at an agricultural show visited on a Healthnastics field trip"
            loading="lazy"
            width="1100"
            height="1467"
            className="relative w-full aspect-[4/5] object-cover shadow-2xl"
          />
          <p className="relative mt-4 text-sm text-ink/60">On the road: a Healthnastics field trip.</p>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Why families choose us" title={<span id="why">More than a gym</span>} />
          <ul className="grid sm:grid-cols-2 gap-10">
            {REASONS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 100}>
                <Icon size={30} className="text-red" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl uppercase tracking-tight">{title}</h3>
                <p className="mt-2 text-ink/70 leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-24 md:py-32 bg-cream" aria-labelledby="founder">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center">
        <Reveal className="relative max-w-md w-full mx-auto lg:mx-0">
          <div className="absolute -top-5 -left-5 w-full h-full border-2 border-red" aria-hidden="true" />
          <div className="relative aspect-[4/5] shadow-2xl overflow-hidden">
            <FounderPortrait />
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Meet the founder" title={<span id="founder">{ORG.founder}</span>} />
          <blockquote className="border-l-4 border-gold pl-6 md:pl-10">
            <p className="text-2xl md:text-3xl leading-snug font-medium text-ink/85">
              “Let our time capsules be filled by each of you bearing thoughts of the future!”
            </p>
          </blockquote>
          <p className="mt-10 text-lg text-ink/75 leading-relaxed max-w-2xl">
            A Virginia Union University graduate in Urban Studies, Mr. Harris has spent decades organizing for
            Philadelphia’s neighborhoods, including serving as Chairman of the Board of the historic Wharton Centre.
            He founded Healthnastics to give young people a place that builds their health, their minds and their
            sense of responsibility to their community.
          </p>
          <Button to="/about" variant="outline" className="mt-10">Read our story</Button>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="bg-white py-20 border-t border-ink/10" aria-labelledby="visit">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex gap-5">
          <MapPin size={36} className="text-red shrink-0" aria-hidden="true" />
          <div>
            <h2 id="visit" className="font-display text-2xl md:text-3xl uppercase tracking-tight">Find us in {LOCATION.neighborhood}</h2>
            <p className="mt-2 text-lg text-ink/70">{LOCATION.name} · {LOCATION.street}, {LOCATION.city}</p>
          </div>
        </div>
        <Button to={LOCATION.mapUrl} variant="outline">Get directions</Button>
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle(null);
  return (
    <main id="main">
      <Hero />
      <Pillars />
      <ProgramsPreview />
      <WhyFamilies />
      <Founder />
      <GetInvolved />
      <Visit />
    </main>
  );
}
