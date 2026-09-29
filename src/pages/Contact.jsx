import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Mail, Phone, Info, Send } from 'lucide-react';
import { CONTACT, FORM_ENDPOINT, LOCATION, ORG } from '../site';
import { PROGRAMS } from '../data/programs';
import { Button, PageHeader } from '../components/ui';
import { usePageTitle } from '../lib';

const TOPICS = {
  enroll: 'Enroll my child',
  volunteer: 'Volunteer',
  donate: 'Donate money or supplies',
  partner: 'Partnership / sponsorship',
  general: 'General question',
};

const field = 'mt-2 block w-full min-h-12 px-4 py-3 bg-white border-2 border-ink/20 focus:border-ink focus:outline-none text-lg';
const labelCls = 'block font-semibold';

// Online form works once FORM_ENDPOINT is set in src/site.js (or falls back to email if CONTACT.email is set).
const CAN_SEND = Boolean(FORM_ENDPOINT || CONTACT.email);

// Re-create the form whenever the link's ?topic= or ?program= changes.
export default function Contact() {
  const [params] = useSearchParams();
  return <ContactForm key={params.toString()} params={params} />;
}

function ContactForm({ params }) {
  usePageTitle('Contact & Enroll');
  const navigate = useNavigate();
  const initialTopic = TOPICS[params.get('topic')] ? params.get('topic') : 'enroll';
  const [topic, setTopic] = useState(initialTopic);
  const [status, setStatus] = useState('idle'); // idle | sending | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return; // spam bot filled the hidden field
    data.topic = TOPICS[data.topic];

    if (FORM_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(res.statusText);
        navigate('/thank-you?for=message');
      } catch {
        setStatus('error');
      }
      return;
    }

    // Email fallback: opens the visitor's email app with the message filled in.
    const body = Object.entries(data).filter(([k, v]) => v && k !== '_gotcha').map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${ORG.name}: ${data.topic}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main id="main">
      <PageHeader
        eyebrow="Contact & enroll"
        title="Let’s talk"
        intro="Enrolling a child, volunteering, donating or just curious? Send us a note and we’ll get back to you."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.4fr_1fr] gap-16">

          <form onSubmit={handleSubmit} className="grid gap-6">
            {!CAN_SEND && (
              <p className="flex items-start gap-3 p-5 bg-gold/15 border border-gold/40">
                <Info size={22} className="text-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
                <span>Our online form is almost ready. Until then, please stop by {LOCATION.name} to talk with us in person.</span>
              </p>
            )}

            <div>
              <label htmlFor="topic" className={labelCls}>I’m reaching out to…</label>
              <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
                {Object.entries(TOPICS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelCls}>{topic === 'enroll' ? 'Parent / guardian name' : 'Your name'}</label>
                <input id="name" name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={labelCls}>Phone <span className="font-normal text-ink/60">(optional)</span></label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
            </div>

            {topic === 'enroll' && (
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="child_age" className={labelCls}>Child’s age</label>
                  <input id="child_age" name="child_age" type="number" min="4" max="19" className={field} />
                </div>
                <div>
                  <label htmlFor="program" className={labelCls}>Program of interest</label>
                  <select id="program" name="program" defaultValue={params.get('program') || ''} className={field}>
                    <option value="">Not sure yet</option>
                    {PROGRAMS.map(({ slug, name }) => <option key={slug} value={slug}>{name}</option>)}
                  </select>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="message" className={labelCls}>Message</label>
              <textarea id="message" name="message" rows="5" className={`${field} min-h-36`} placeholder={topic === 'enroll' ? 'Anything we should know about your child?' : ''} />
            </div>

            {/* Hidden from people; bots fill it in and get ignored. */}
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

            {status === 'error' && (
              <p role="alert" className="p-4 bg-red/10 border border-red text-red font-semibold">
                Sorry, your message didn’t send. Please try again{CONTACT.email ? ` or email us at ${CONTACT.email}` : ''}.
              </p>
            )}

            <div>
              <button
                type="submit"
                disabled={!CAN_SEND || status === 'sending'}
                className="inline-flex items-center justify-center gap-3 min-h-12 px-10 py-4 bg-red text-white font-display uppercase tracking-wider text-sm hover:bg-ink transition-colors disabled:bg-ink/30 disabled:cursor-not-allowed"
              >
                <Send size={18} aria-hidden="true" /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p className="mt-4 text-sm text-ink/60">We use your information only to reply to you. See our <Link to="/privacy" className="underline">privacy policy</Link>.</p>
            </div>
          </form>

          <aside className="space-y-8">
            <div className="p-8 bg-cream">
              <h2 className="font-display text-2xl uppercase tracking-tight">Visit us</h2>
              <p className="mt-4 flex gap-3 text-lg">
                <MapPin size={22} className="text-red shrink-0 mt-1" aria-hidden="true" />
                <span>{LOCATION.name}<br />{LOCATION.street}<br />{LOCATION.city}</span>
              </p>
              <Button to={LOCATION.mapUrl} variant="outline" className="mt-6">Get directions</Button>
              {(CONTACT.email || CONTACT.phone) && (
                <ul className="mt-8 space-y-3 text-lg">
                  {CONTACT.email && <li><a href={`mailto:${CONTACT.email}`} className="flex gap-3 hover:text-red"><Mail size={22} aria-hidden="true" />{CONTACT.email}</a></li>}
                  {CONTACT.phone && <li><a href={`tel:${CONTACT.phone}`} className="flex gap-3 hover:text-red"><Phone size={22} aria-hidden="true" />{CONTACT.phone}</a></li>}
                </ul>
              )}
            </div>
            <div className="p-8 border-2 border-ink">
              <h2 className="font-display text-2xl uppercase tracking-tight">What happens next</h2>
              <ol className="mt-5 space-y-4 text-lg text-ink/80 list-decimal pl-5">
                <li>We read every message and reply personally.</li>
                <li>For enrollment, we’ll share the current schedule and sign-up forms.</li>
                <li>Come meet us and see a session in person.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
