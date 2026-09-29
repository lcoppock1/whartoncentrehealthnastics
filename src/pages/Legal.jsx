import { Link } from 'react-router-dom';
import { ORG, CONTACT, LOCATION } from '../site';
import { PageHeader } from '../components/ui';
import { usePageTitle } from '../lib';

const UPDATED = 'September 2026';

const contactLine = CONTACT.email
  ? <>email us at <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a></>
  : <>use our <Link to="/contact?topic=general" className="underline">contact form</Link> or visit us at {LOCATION.name}</>;

function LegalPage({ title, intro, children }) {
  usePageTitle(title);
  return (
    <main id="main">
      <PageHeader eyebrow="Legal" title={title} intro={intro} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-lg text-ink/80 leading-relaxed space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:pt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
          <p className="text-base text-ink/60">Last updated: {UPDATED}</p>
          {children}
        </div>
      </section>
    </main>
  );
}

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" intro={`How ${ORG.name} handles your information, in plain language.`}>
      <h2>What we collect</h2>
      <p>We only collect what you choose to send us, such as your name, email, phone number and message when you use our contact or enrollment form. Donations are handled by our payment provider; we never see or store your card details.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to you and help with enrollment, volunteering, donations or partnerships.</li>
        <li>To send receipts and, if you ask, occasional updates about our programs.</li>
      </ul>
      <p>We do not sell, rent or trade your information.</p>

      <h2>Children’s privacy</h2>
      <p>Our forms are meant for parents, guardians and adults. We don’t knowingly collect personal information online from children under 13. If you believe a child has sent us information, contact us and we’ll delete it.</p>

      <h2>Photos of cadets</h2>
      <p>We only publish photos of children with written permission from a parent or guardian. To have a photo removed at any time, contact us and we’ll take it down promptly.</p>

      <h2>Cookies and tracking</h2>
      <p>This website does not use advertising cookies or sell data to advertisers.</p>

      <h2>Questions</h2>
      <p>To ask about or delete your information, {contactLine}.</p>
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms of Use" intro="The simple rules for using this website.">
      <h2>Using this site</h2>
      <p>This website shares information about {ORG.legalName} and its programs. Please use it lawfully and respectfully.</p>

      <h2>Content</h2>
      <p>Text, logos and photos on this site belong to {ORG.legalName} or are used with permission. Please ask before reusing them, especially any photo of a child.</p>

      <h2>Program information</h2>
      <p>We work to keep schedules, costs and program details up to date, but they can change. Contact us to confirm before making plans.</p>

      <h2>Donations</h2>
      <p>Donations are voluntary and generally non-refundable. If you believe a donation was made in error, contact us and we’ll work with you.</p>

      <h2>Outside links</h2>
      <p>Links to other websites (like maps or payment providers) are for convenience; we aren’t responsible for their content or privacy practices.</p>

      <h2>Contact</h2>
      <p>Questions about these terms? Please {contactLine}.</p>
    </LegalPage>
  );
}
