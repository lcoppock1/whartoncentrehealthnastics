import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../site';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the phone menu after navigating.
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

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
    <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">

        <Link to="/" className="group flex items-center gap-4">
          <img src="/logo.png" alt="" className="h-12 w-12 object-contain" />
          <div className="flex flex-col border-l border-black/10 pl-4">
            <span className="font-['Archivo_Black'] text-xl tracking-tighter uppercase leading-none text-black">
              Healthnastics
            </span>
            <span className="font-mono text-[9px] text-gold uppercase tracking-[0.4em] font-black mt-1">
              Institutional
            </span>
          </div>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative py-2 font-mono text-xs font-bold uppercase tracking-[0.3em] transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-red after:transition-all ${
                  isActive ? 'text-black after:w-full' : 'text-black/60 hover:text-black after:w-0 hover:after:w-full'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/support"
            className="hidden sm:inline-block px-8 py-4 bg-red text-white font-['Archivo_Black'] uppercase tracking-widest text-[11px] hover:bg-black transition-colors"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden w-12 h-12 flex items-center justify-center text-black"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="md:hidden fixed inset-x-0 top-24 bottom-0 bg-white px-6 py-10 flex flex-col overflow-y-auto">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `py-5 border-b border-black/10 font-['Archivo_Black'] text-3xl uppercase tracking-tighter ${isActive ? 'text-red' : 'text-black'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/support"
            className="mt-10 py-5 text-center bg-red text-white font-['Archivo_Black'] uppercase tracking-widest text-sm"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
