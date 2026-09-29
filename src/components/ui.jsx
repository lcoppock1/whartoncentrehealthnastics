import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Fades its children up into view the first time they scroll on screen.
// `delay` (ms) lets a row of cards cascade in one after another.
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  // Old browsers without IntersectionObserver just show everything.
  const [visible, setVisible] = useState(() => !('IntersectionObserver' in window));

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: '0px 0px -10% 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

const BUTTON_STYLES = {
  red: 'bg-red text-white hover:bg-ink',
  green: 'bg-green text-white hover:bg-ink',
  dark: 'bg-ink text-white hover:bg-red',
  gold: 'bg-gold text-ink hover:bg-white',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-white',
  'outline-light': 'border-2 border-white/60 text-white hover:bg-white hover:text-ink',
};

// A link styled as a button. Works for page links ("/about") and outside links ("https://…").
export function Button({ to, variant = 'red', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-3 min-h-12 px-8 py-4 font-display uppercase tracking-wider text-sm transition-colors ${BUTTON_STYLES[variant]} ${className}`;
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return <a href={to} className={cls} target={to.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <Link to={to} className={cls} {...rest}>{children}</Link>;
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', light = false, eyebrowColor }) {
  const center = align === 'center';
  return (
    <div className={`mb-14 md:mb-20 ${center ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 flex items-center gap-4 ${center ? 'justify-center' : ''} ${eyebrowColor || (light ? 'text-gold' : 'text-gold-dark')}`}>
          <span className="w-10 h-[2px] bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display uppercase tracking-tight leading-[0.95] text-4xl md:text-6xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {intro && <p className={`mt-6 text-lg md:text-xl leading-relaxed ${light ? 'text-white/80' : 'text-ink/70'}`}>{intro}</p>}
    </div>
  );
}

// Big title block at the top of inner pages.
export function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <header className="relative bg-cream pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/3 hidden lg:block bg-[url('/images/kente-pattern.webp')] bg-[length:220px] opacity-[0.12]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {eyebrow && <p className="eyebrow text-gold-dark mb-6 flex items-center gap-4"><span className="w-10 h-[2px] bg-current" aria-hidden="true" />{eyebrow}</p>}
        <h1 className="font-display uppercase tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-8xl text-ink max-w-5xl">{title}</h1>
        {intro && <p className="mt-8 text-lg md:text-2xl leading-relaxed text-ink/75 max-w-3xl">{intro}</p>}
        {children}
      </div>
      <div className="absolute bottom-0 inset-x-0 h-2 kente-stripe" aria-hidden="true" />
    </header>
  );
}

// Friendly note shown where real info hasn't been added yet.
export function ComingSoon({ children }) {
  return <span className="italic text-ink/60">{children}</span>;
}
