import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../site';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-5 pb-0 px-8 md:px-5 border-t-[16px] border-gold">
      <div className="max-w-[1600px] mx-auto px-8 py-12">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">

          {/* COLUMN 1: THE BRAND */}
          <div className="space-y-10">
            <div className="flex flex-col">
              <span className="font-['Archivo_Black'] text-2xl md:text-2xl tracking-tighter uppercase leading-none text-white">
                Wharton Center Healthnastics
              </span>
            </div>
            <p className="text-white/50 text-sm md:text-lg font-medium leading-relaxed italic max-w-sm">
              "Architecting the physical and intellectual infrastructure for Philadelphia’s next generation."
            </p>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div>
            <h4 className="font-mono text-sm font-black uppercase tracking-[0.3em] text-white/30 mb-10">Directory_Index</h4>
            <ul className="space-y-5 font-mono text-sm md:text-base uppercase tracking-[0.2em]">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-gold transition-all hover:translate-x-4 duration-300 flex items-center gap-4 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold">/</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: LOCATION */}
          <div>
            <h4 className="font-mono text-sm font-black uppercase tracking-[0.3em] text-white/30 mb-12">Located In</h4>
            <div className="space-y-8 font-mono text-sm md:text-base uppercase tracking-[0.2em]">
              <div className="text-white/60 flex flex-col gap-2 border-l-2 border-white/10 pl-6">
                <span>District: Philadelphia_PA_07</span>
                <span>Coordinates: 39.9526° N, 75.1652° W</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: CALL TO ACTION */}
          <div className="flex flex-col justify-start">
            <h4 className="font-mono text-sm font-black uppercase tracking-[0.3em] text-white/30 mb-12">Resource_Allocation</h4>
            <Link
              to="/support"
              className="group relative overflow-hidden border-2 border-white/20 py-8 px-6 text-center font-['Archivo_Black'] text-lg uppercase tracking-[0.2em] transition-all hover:border-gold"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Invest in the Guard</span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>

        {/* BOTTOM LEGAL STRIP */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 font-mono text-xs md:text-sm text-white/20 uppercase tracking-[0.4em]">
            <span>&copy; {new Date().getFullYear()} Healthnastics Inc </span>
            <span className="hidden md:block text-white/5">|</span>
            <span>Created by La'Joir Coppock</span>
          </div>

          {/* Privacy + Terms pages come in Phase 7 */}
          <div className="flex gap-12 font-mono text-xs md:text-sm text-white/30 uppercase tracking-widest">
            <span>Privacy_Protocol</span>
            <span>Terms_Of_Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
