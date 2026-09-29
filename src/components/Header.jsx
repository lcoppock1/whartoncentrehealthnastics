import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS, ORG } from '../site';
import { Button } from './ui';
import { DONATE_LINK } from '../lib';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the phone menu after navigating.
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the phone menu is open: stop the page behind it scrolling, and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
    <header className={`fixed top-0 w-full z-[100] transition-all ${scrolled || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)]' : 'bg-white/80 backdrop-blur-sm'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-ink focus:text-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between gap-6">

        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label={`${ORG.name} home`}>
          <img src="/logo.png" alt="" width="48" height="48" className="h-11 w-11 md:h-12 md:w-12 object-contain" />
          <span className="flex flex-col">
            <span className="font-display text-lg md:text-xl tracking-tight uppercase leading-none text-ink">Healthnastics</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-dark mt-1">Center · Philadelphia</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative py-2 text-[15px] font-semibold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-red after:transition-all ${
                  isActive ? 'text-ink after:w-full' : 'text-ink/70 hover:text-ink after:w-0 hover:after:w-full'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button to={DONATE_LINK} variant="red" className="!px-6 !py-3">
              <Heart size={16} aria-hidden="true" /> Donate
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-ink"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div className="h-1 kente-stripe" aria-hidden="true" />
    </header>

      {/* Rendered outside <header>: its blurred background would otherwise squash this full-screen menu. */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="lg:hidden fixed inset-x-0 top-[84px] md:top-[100px] bottom-0 z-[99] bg-white px-6 py-8 flex flex-col overflow-y-auto">
          <NavLink to="/" end className={({ isActive }) => `py-4 border-b border-ink/10 font-display text-3xl uppercase tracking-tight ${isActive ? 'text-red' : 'text-ink'}`}>
            Home
          </NavLink>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `py-4 border-b border-ink/10 font-display text-3xl uppercase tracking-tight ${isActive ? 'text-red' : 'text-ink'}`}
            >
              {label}
            </NavLink>
          ))}
          <div className="mt-8 grid gap-3">
            <Button to="/contact?topic=enroll" variant="dark">Enroll your child</Button>
            <Button to={DONATE_LINK} variant="red"><Heart size={16} aria-hidden="true" /> Donate</Button>
          </div>
        </nav>
      )}
    </>
  );
}
