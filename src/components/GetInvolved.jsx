import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, HandHeart, Heart, Handshake } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';
import { DONATE_LINK } from '../lib';

const WAYS = [
  { icon: GraduationCap, title: 'Enroll a child', text: 'Sign up for gymnastics, GD-Cadets, homework help or summer camp.', to: '/contact?topic=enroll', cta: 'Start enrollment' },
  { icon: HandHeart, title: 'Volunteer', text: 'Tutor, coach, chaperone a trip or share your career with our cadets.', to: '/contact?topic=volunteer', cta: 'Offer your time' },
  { icon: Heart, title: 'Donate', text: 'Every gift buys mats, school supplies, trip tickets and healthy snacks.', to: DONATE_LINK, cta: 'Give today' },
  { icon: Handshake, title: 'Partner with us', text: 'Businesses and organizations can sponsor programs, trips or equipment.', to: '/contact?topic=partner', cta: 'Let’s talk' },
];

export default function GetInvolved() {
  return (
    <section className="py-24 md:py-32 bg-ink text-white" aria-labelledby="get-involved">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading light eyebrow="Get involved" title={<span id="get-involved">There’s a place for everyone</span>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WAYS.map(({ icon: Icon, title, text, to, cta }, i) => {
            const external = to.startsWith('http');
            const Tag = external ? 'a' : Link;
            const linkProps = external ? { href: to, target: '_blank', rel: 'noopener noreferrer' } : { to };
            return (
              <Reveal key={title} delay={i * 100}>
                <Tag {...linkProps} className="group h-full flex flex-col p-8 border border-white/15 hover:border-gold hover:bg-white/5 transition-colors">
                  <Icon size={32} className="text-gold" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-2xl uppercase tracking-tight">{title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed flex-1">{text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-gold">
                    {cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
