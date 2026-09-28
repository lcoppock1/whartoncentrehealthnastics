import { FOUNDER_PHOTO } from '../site';

// Shows Mr. Harris's photo, or an "LH" placeholder until one is added in src/site.js.
export default function FounderPortrait({ className = '' }) {
  if (FOUNDER_PHOTO) {
    return <img src={FOUNDER_PHOTO} className={`w-full h-full object-cover ${className}`} alt="Lewis Harris Jr., founder of Healthnastics Center" />;
  }
  return (
    <div role="img" aria-label="Photo of Lewis Harris Jr. coming soon" className="w-full h-full flex flex-col items-center justify-center bg-ink">
      <span className="font-['Archivo_Black'] text-8xl text-gold tracking-tighter">LH</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 mt-4">Photo coming soon</span>
    </div>
  );
}
