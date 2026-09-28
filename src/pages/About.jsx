import FounderPortrait from '../components/FounderPortrait';

const METRICS = [
  { l: 'Active Cadets', v: '15-20', s: 'Phase 01 Enrollment' },
  { l: 'Primary Base', v: 'Wharton', s: 'Philly, PA' },
  { l: 'Focus Age', v: '08-14', s: 'Youth Development' }
];

export default function About() {
  return (
    <main className="pt-32 pb-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 border-b border-black/5 pb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-gold"></div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-gold">Institutional Profile</span>
            </div>

            <h1 className="font-['Archivo_Black'] text-6xl md:text-[7rem] leading-[0.85] uppercase tracking-tighter text-black mb-16">
              Base <br /><span className="text-red">Intelligence.</span>
            </h1>

            <p className="text-2xl md:text-4xl font-medium text-black/70 leading-tight italic max-w-3xl">
              "We operate at the intersection of physical mastery and civic duty."
            </p>
          </div>

          <div className="mt-16 md:mt-0 bg-black text-white p-10 border-l-[10px] border-gold shadow-2xl self-start">
            <p className="font-mono text-[10px] uppercase tracking-widest mb-3 font-bold text-gold">Establishment Date</p>
            <p className="font-['Archivo_Black'] text-3xl uppercase italic leading-none">Circa 2024</p>
          </div>
        </div>

        {/* DATA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">

          {/* Column 01: Metrics */}
          <div className="space-y-16">
            <h2 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/20 border-b border-black/5 pb-6">01 // Current Metrics</h2>
            <div className="space-y-8">
              {METRICS.map((s) => (
                <div key={s.l} className="bg-cream p-10 border border-black/5 group hover:border-gold/40 transition-colors">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-2 font-bold">{s.l}</p>
                  <p className="font-['Archivo_Black'] text-5xl uppercase tracking-tighter mb-4">{s.v}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/30 font-medium italic">{s.s}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 02: Lead Personnel */}
          <div className="space-y-16">
            <h2 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/20 border-b border-black/5 pb-6">02 // Lead Personnel</h2>
            <div className="relative aspect-[4/6] bg-black overflow-hidden grayscale group shadow-xl">
              <FounderPortrait className="opacity-70 group-hover:scale-110 transition-transform duration-[3s]" />
              <div className="absolute bottom-0 w-full p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="font-['Archivo_Black'] text-3xl text-white uppercase tracking-tighter leading-none mb-3">Lewis Harris</p>
                <p className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] font-bold">Executive Technician</p>
              </div>
            </div>
            <p className="text-black/60 text-lg leading-relaxed font-medium italic border-l-2 border-black/5 pl-8">
              Lewis Harris established Healthnastics to provide a "third space" for youth that demands excellence and rewards character.
            </p>
          </div>

          {/* Column 03: Ethos & Safety */}
          <div className="space-y-16">
            <h2 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/20 border-b border-black/5 pb-6">03 // Operational Ethos</h2>
            <div className="space-y-16 pt-4">
              <div>
                <h3 className="font-['Archivo_Black'] text-2xl uppercase mb-6 text-red tracking-tighter">The Safety Protocol</h3>
                <p className="text-black/60 text-lg leading-relaxed font-medium">
                  Supervised by certified technicians. We maintain a strict student-to-mentor ratio to ensure individual progress and total physical safety.
                </p>
              </div>
              <div>
                <h3 className="font-['Archivo_Black'] text-2xl uppercase mb-6 text-green tracking-tighter">Civic Integration</h3>
                <p className="text-black/60 text-lg leading-relaxed font-medium">
                  We translate physical balance into civic stability through our cadet workshops and community forums held throughout Philadelphia.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
