import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS, ORG, LOCATION, CONTACT, SOCIAL } from '../site';
import { Button } from './ui';
import { DONATE_LINK } from '../lib';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-2 kente-stripe" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="" width="48" height="48" className="h-12 w-12 object-contain bg-white rounded-full p-1" />
              <span className="font-display text-xl uppercase tracking-tight">{ORG.name}</span>
            </Link>
            <p className="mt-6 text-white/70 leading-relaxed max-w-sm">
              {ORG.tagline} A Philadelphia nonprofit founded by {ORG.founder}.
            </p>
            {ORG.ein && <p className="mt-4 text-sm text-white/50">501(c)(3) nonprofit · EIN {ORG.ein}</p>}
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-gold mb-6">Explore</h2>
            <ul className="space-y-3">
              {[{ to: '/', label: 'Home' }, ...NAV_LINKS].map(({ to, label }) => (
                <li key={to}><Link to={to} className="text-white/80 hover:text-gold transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold mb-6">Visit</h2>
            <a href={LOCATION.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-white/80 hover:text-gold transition-colors">
              <MapPin size={20} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>{LOCATION.name}<br />{LOCATION.street}<br />{LOCATION.city}</span>
            </a>
            <ul className="mt-6 space-y-3 text-white/80">
              {CONTACT.email && <li><a href={`mailto:${CONTACT.email}`} className="flex gap-3 hover:text-gold"><Mail size={20} aria-hidden="true" />{CONTACT.email}</a></li>}
              {CONTACT.phone && <li><a href={`tel:${CONTACT.phone}`} className="flex gap-3 hover:text-gold"><Phone size={20} aria-hidden="true" />{CONTACT.phone}</a></li>}
            </ul>
            <div className="mt-6 flex gap-3">
              {SOCIAL.instagram && <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold"><Instagram size={20} /></a>}
              {SOCIAL.facebook && <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold"><Facebook size={20} /></a>}
            </div>
          </div>

          <div>
            <h2 className="eyebrow text-gold mb-6">Get involved</h2>
            <p className="text-white/70 leading-relaxed mb-6">Enroll a child, volunteer your time, or help keep the mats down and the lights on.</p>
            <div className="flex flex-col gap-3">
              <Button to={DONATE_LINK} variant="gold">Donate</Button>
              <Button to="/contact?topic=enroll" variant="outline-light">Enroll your child</Button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} {ORG.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms of Use</Link>
            <span>Website by La'Joir Coppock</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
