import { Link } from 'react-router-dom';
import { Shield, Globe, ArrowRight, LayoutGrid } from 'lucide-react';
import FounderPortrait from '../components/FounderPortrait';

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cream">
    <div className="absolute inset-0">
      <img src="/none.jpg" className="w-full h-full object-cover grayscale opacity-25" alt="" />
    </div>
    <div className="relative z-10 max-w-[1600px] mx-auto px-12 w-full">
      <div className="max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-gold"></span>
        </div>
        <h1 className="font-['Archivo_Black'] text-black text-6xl md:text-[8rem] leading-[0.85] tracking-tighter uppercase mb-12">
          TECHNICIANS <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #1A1A1A" }}>& GD-CADETS.</span>
        </h1>
        <div className="border-l-[4px] border-red pl-10 py-2 mb-16">
          <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black/90 leading-none">Nonprofit Organization.</p>
          <p className="font-mono text-sm font-bold italic tracking-widest uppercase mt-4 opacity-60">Fostering Citizenship.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <Link to="/support" className="px-12 py-5 text-white font-['Archivo_Black'] uppercase tracking-widest text-[10px] bg-red hover:bg-black transition-colors">Invest In Our Future</Link>
          <Link to="/about" className="px-12 py-5 text-white font-['Archivo_Black'] uppercase tracking-widest text-[10px] bg-green hover:bg-black transition-colors">Learn More</Link>
        </div>
      </div>
    </div>
  </section>
);

const AffiliationsRow = () => (
  <section className="py-24 bg-white border-b border-black/5">
    <div className="max-w-[1600px] mx-auto px-12 text-center">
      <p className="font-mono text-[11px] font-black uppercase tracking-[0.5em] text-black/20 mb-12">Institutional Partners // Global Standards</p>
      <div className="flex flex-wrap justify-center items-center gap-24 opacity-30 grayscale hover:opacity-100 transition-all duration-1000">
        {['Gymnastics', 'Civic Leadership', 'Youth Authority', 'Youth Educators'].map(partner => (
          <span key={partner} className="font-['Archivo_Black'] text-2xl tracking-tighter text-black uppercase">{partner}</span>
        ))}
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="py-32 md:py-48 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-12 text-left">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-gold">Strategic Mandate</span>
          </div>
          <h2 className="font-['Archivo_Black'] text-5xl md:text-7xl leading-[0.9] uppercase tracking-tighter">
            The Architecture of <br />
            <span className="text-red">Human Potential.</span>
          </h2>
        </div>

        <div className="max-w-[380px] border-l-2 border-black/10 pl-8">
          <p className="text-base text-black/60 italic leading-relaxed font-medium">
            Establishing international standards in physical discipline, kinetic mastery, and civic responsibility for the next generation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10">
        {[
          { num: '01', title: 'Kinetic Mastery', desc: 'Advanced gymnastics and physiological conditioning designed to push boundaries.' },
          { num: '02', title: 'Civic Literacy', desc: 'Developing the infrastructure required to navigate local governance and leadership.' },
          { num: '03', title: 'Institutional Honor', desc: 'A strict code of conduct that transforms individual performance into strength.' }
        ].map((item, idx) => (
          <div key={item.num} className={`p-12 md:p-16 border-black/10 ${idx === 1 ? 'md:border-x' : ''} ${idx > 0 ? 'border-t md:border-t-0' : ''}`}>
            <span className="font-mono text-sm text-gold mb-6 block font-bold">{item.num} //</span>
            <h3 className="font-['Archivo_Black'] text-2xl uppercase mb-6 tracking-tight">{item.title}</h3>
            <p className="text-sm text-black/50 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

const DashboardSection = () => (
  <section className="py-32 md:py-48 bg-white border-y border-black/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gold"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-gold">Institutional Dashboard // 2026</span>
          </div>
          <h2 className="font-['Archivo_Black'] text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85]">
            Operational <br /><span className="text-red">Infrastructure.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">

        {/* PRIMARY HUB CARD */}
        <div className="md:col-span-2 md:row-span-2 bg-cream p-12 md:p-20 flex flex-col justify-between border border-black/5 relative overflow-hidden group hover:border-gold/30 transition-colors">
          <div className="relative z-10">
            <h3 className="font-['Archivo_Black'] text-4xl md:text-6xl uppercase mb-8 leading-none tracking-tighter">Wharton Centre <br/> & Affiliations</h3>
            <p className="max-w-md text-black/60 text-lg font-medium leading-relaxed italic">
              The central hub for all GD-Cadet operations, technical gymnastics training, and student engagement.
            </p>
          </div>

          <div className="flex gap-4 relative z-10 pt-8 border-t border-black/5">
            <span className="px-6 py-2 bg-black text-white font-mono text-[10px] uppercase tracking-widest font-black">Philadelphia, PA</span>
            <span className="px-6 py-2 border border-black/10 bg-white font-mono text-[10px] uppercase tracking-widest font-black text-black/40">Active Site</span>
          </div>

          <div className="absolute -bottom-16 -right-16 opacity-[0.03] scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-700">
            <Shield size={450} />
          </div>
        </div>

        {/* STATUS CARD */}
        <div className="bg-black text-white p-12 flex flex-col justify-between hover:bg-zinc-900 transition-colors">
          <span className="font-mono text-[10px] uppercase tracking-widest font-black text-gold">Educational Health</span>
          <div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-pulse"></div>
              <span className="font-['Archivo_Black'] text-3xl uppercase italic leading-none">Fully <br/>Operational</span>
            </div>
            <p className="font-mono text-[11px] leading-relaxed tracking-wider opacity-40 uppercase">Homework assistance, summer camp, and regional trips.</p>
          </div>
        </div>

        {/* READINESS CARD */}
        <div className="bg-green text-white p-12 flex flex-col justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest font-black opacity-60">Technical Readiness</span>
          <div className="space-y-8">
            <div className="h-2 w-full bg-white/10 overflow-hidden">
              <div className="h-full bg-white w-[85%] transition-all duration-1000"></div>
            </div>
            <div className="flex justify-between font-mono text-xs font-black uppercase tracking-widest">
              <span>Discipline Index</span>
              <span className="text-gold">85%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const FUNDING_PORTALS = [
  { name: 'TECHNICAL APPARATUS', tag: 'HARDWARE', icon: <Shield size={28} />, desc: 'Procurement of Olympic-standard equipment, safety spotting systems, and specialized floor mats for elite training.' },
  { name: 'CIVIC LEADERSHIP CURRICULUM', tag: 'INTELLECT', icon: <Globe size={28} />, desc: 'Funding for GD-Cadet workshops, guest lectures on democracy, and community engagement field operations.' },
  { name: 'YOUTH HEADQUARTERS', tag: 'INFRASTRUCTURE', icon: <LayoutGrid size={28} />, desc: 'Expansion of our Philadelphia home-base to accommodate more students and newer technology for homework help.' }
];

const FundingSection = () => (
  <section className="py-32 md:py-48 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-red"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-red">Resource Acquisition // 2026</span>
          </div>
          <h2 className="font-['Archivo_Black'] text-5xl md:text-[6rem] leading-[0.85] uppercase tracking-tighter text-black">
            Strategic <br /><span className="text-gold">Investment.</span>
          </h2>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/40 max-w-[300px] border-l-2 border-black/10 pl-10 pb-2 leading-relaxed italic">
          Direct your capital toward verified institutional infrastructure milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {FUNDING_PORTALS.map((portal) => (
          <Link key={portal.name} to="/support" className="group relative block p-12 md:p-16 bg-cream border border-black/5 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700">

            <div className="mb-12 flex justify-between items-center">
              <div className="p-4 bg-white border border-black/5 text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
                <div className="scale-110">{portal.icon}</div>
              </div>
              <span className="text-[9px] font-black px-4 py-1.5 bg-black text-white font-mono uppercase tracking-widest leading-none">
                {portal.tag}
              </span>
            </div>

            <h3 className="font-['Archivo_Black'] text-3xl uppercase mb-8 tracking-tighter leading-[0.95] group-hover:text-red transition-colors">
              {portal.name}
            </h3>

            <p className="text-black/50 text-base font-medium leading-relaxed mb-12">
              {portal.desc}
            </p>

            <div className="pt-8 border-t border-black/10 flex items-center justify-between">
              <span className="font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] text-black/20 group-hover:text-black transition-colors">
                Open Portal //
              </span>
              <ArrowRight size={20} className="text-black/20 group-hover:text-black group-hover:translate-x-3 transition-all" />
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-red group-hover:w-full transition-all duration-700"></div>
          </Link>
        ))}
      </div>

    </div>
  </section>
);

const FounderSection = () => (
  <section className="py-32 md:py-48 bg-cream relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-center">

        <div className="w-full lg:w-5/12 relative group">
          <div className="absolute -top-6 -left-6 w-full h-full border-[2px] border-gold opacity-40 group-hover:top-0 group-hover:left-0 transition-all duration-700"></div>
          <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale bg-black shadow-2xl">
            <FounderPortrait className="opacity-80 group-hover:scale-105 transition-transform duration-[2s]" />
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-red"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-red">The Founder's Mandate</span>
          </div>

          <h2 className="font-['Archivo_Black'] text-5xl md:text-7xl lg:text-[6rem] leading-[0.85] uppercase tracking-tighter mb-16 text-black">
            Training
            <br />
            <span className="text-black/40 italic">the New</span>
            <br />
            <span className="text-black/20 italic tracking-widest leading-none">
              Technician <span className="text-red/40">Diplomats</span>
            </span>
          </h2>

          <p className="text-2xl md:text-4xl font-medium leading-relaxed text-black/70 mb-20 italic max-w-2xl border-l-4 border-gold/20 pl-10">
            "Let our time capsules be filled by each of you bearing thoughts of the future!"
          </p>

          <div className="flex items-center gap-8 pt-12 border-t border-black/5">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white font-['Archivo_Black'] text-2xl shadow-xl">
              LH
            </div>
            <div>
              <h3 className="font-['Archivo_Black'] text-2xl uppercase tracking-tight">Lewis Harris</h3>
              <p className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] font-bold mt-2">
                Chairman // Healthnastics Institutional
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <Hero />
      <AffiliationsRow />
      <MissionSection />
      <DashboardSection />
      <FundingSection />
      <FounderSection />
    </main>
  );
}
