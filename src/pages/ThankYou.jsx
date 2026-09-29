import { useSearchParams } from 'react-router-dom';
import { Heart, MailCheck } from 'lucide-react';
import { Button } from '../components/ui';
import { usePageTitle } from '../lib';

// /thank-you?for=message after the contact form; plain /thank-you after a donation
// (set this as the "redirect after payment" page in your donation platform).
export default function ThankYou() {
  const [params] = useSearchParams();
  const isMessage = params.get('for') === 'message';
  usePageTitle('Thank you');
  const Icon = isMessage ? MailCheck : Heart;

  return (
    <main id="main" className="min-h-screen flex items-center bg-ink text-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="mx-auto w-24 h-24 flex items-center justify-center border-2 border-gold">
          <Icon size={44} className="text-gold" aria-hidden="true" />
        </span>
        <p className="eyebrow text-gold mt-10">{isMessage ? 'Message received' : 'Gift received'}</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95]">Thank you!</h1>
        <p className="mt-8 text-xl text-white/80 leading-relaxed">
          {isMessage
            ? 'We’ve got your message and will get back to you soon.'
            : 'Your generosity puts cadets on the mats, in the classroom and out in the world. A receipt is on its way to your email.'}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="gold">Back to home</Button>
          <Button to="/programs" variant="outline-light">Explore programs</Button>
        </div>
      </div>
    </main>
  );
}
