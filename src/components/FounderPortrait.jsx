import { FOUNDER_PHOTO, ORG } from '../site';

// Shows Mr. Harris's photo, or an "LH" placeholder until one is added in src/site.js.
export default function FounderPortrait({ className = '' }) {
  if (FOUNDER_PHOTO) {
    return <img src={FOUNDER_PHOTO} loading="lazy" className={`w-full h-full object-cover ${className}`} alt={`${ORG.founder}, founder of ${ORG.name}`} />;
  }
  return (
    <div role="img" aria-label={`Photo of ${ORG.founder} coming soon`} className={`w-full h-full flex flex-col items-center justify-center bg-ink bg-[url('/images/kente-pattern.webp')] bg-[length:160px] bg-blend-multiply ${className}`}>
      <span className="w-40 h-40 rounded-full bg-ink flex items-center justify-center font-display text-7xl text-gold tracking-tight">LH</span>
    </div>
  );
}
