import { useState } from 'react';
import { Star, Globe } from 'lucide-react';

// Donation buttons are not connected yet — see ROADMAP Phase 5.
export default function Support() {
  const [frequency, setFrequency] = useState('monthly'); // 'monthly' or 'one-time'
  const monthly = frequency === 'monthly';

  return (
    <main className="pt-32 pb-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 block underline underline-offset-8">
            Strategic Resource Deployment
          </span>
          <h1 className="font-['Archivo_Black'] text-5xl md:text-7xl uppercase tracking-tighter text-black mb-8 leading-none">
            Invest in the <br/><span className="text-red">New Guard.</span>
          </h1>
          <p className="text-xl text-black/50 font-medium max-w-2xl mx-auto leading-relaxed italic">
            "We are not just training gymnasts; we are building the intellectual and physical infrastructure for the next generation of Philadelphia’s custodians."
          </p>
        </div>

        {/* FREQUENCY TOGGLE */}
        <div className="flex justify-center mb-20">
          <div className="bg-cream p-1.5 rounded-none border border-black/10 flex">
            <button
              type="button"
              aria-pressed={monthly}
              onClick={() => setFrequency('monthly')}
              className={`px-10 py-3 font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all ${monthly ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
            >
              Subscription (Sustainer)
            </button>
            <button
              type="button"
              aria-pressed={!monthly}
              onClick={() => setFrequency('one-time')}
              className={`px-10 py-3 font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all ${!monthly ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
            >
              One-Time (Deployment)
            </button>
          </div>
        </div>

        {/* TIER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* TIER 1 */}
          <div className="group border-[1px] border-black/10 p-12 hover:border-gold hover:bg-cream transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Star size={80} />
            </div>
            <div>
              <span className="font-mono text-[10px] font-black text-red uppercase tracking-widest mb-4 block">Tier 01 // Individual</span>
              <h2 className="font-['Archivo_Black'] text-3xl uppercase mb-6 leading-none">Cadet <br/>Sustainer</h2>
              <div className="text-4xl font-['Archivo_Black'] mb-8 text-black">
                ${monthly ? '25' : '150'}
                <span className="text-xs font-mono text-black/30 font-black tracking-widest uppercase"> {monthly ? '/ mo' : 'once'}</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-gold">/</span> Fund 1 Cadet's uniform and civic workbook.
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-gold">/</span> Recognition in our Annual Operations Report.
                </li>
              </ul>
            </div>
            <button type="button" className="w-full py-5 bg-black text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-red transition-colors">
              Deploy Capital
            </button>
          </div>

          {/* TIER 2 */}
          <div className="group border-[1px] border-black/10 p-12 bg-black text-white transition-all duration-500 flex flex-col justify-between relative shadow-2xl md:scale-105 z-10">
            <div className="absolute top-4 right-4 text-gold font-mono text-[8px] font-black uppercase tracking-widest">Priority Target</div>
            <div>
              <span className="font-mono text-[10px] font-black text-gold uppercase tracking-widest mb-4 block underline">Tier 02 // Strategic</span>
              <h2 className="font-['Archivo_Black'] text-3xl uppercase mb-6 leading-none text-white italic">Technical <br/>Patron</h2>
              <div className="text-4xl font-['Archivo_Black'] mb-8 text-gold">
                ${monthly ? '100' : '500'}
                <span className="text-xs font-mono text-white/30 font-black tracking-widest uppercase"> {monthly ? '/ mo' : 'once'}</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm font-medium text-white/60 italic leading-tight">
                  <span className="text-gold">/</span> Modernize safety equipment (Mats/Chalk).
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-white/60 italic leading-tight">
                  <span className="text-gold">/</span> Name plaque on the Wharton Centre "Honor Wall."
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-white/60 italic leading-tight">
                  <span className="text-gold">/</span> VIP Access to Cadet Graduation Forums.
                </li>
              </ul>
            </div>
            <button type="button" className="w-full py-5 bg-red text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors">
              Fund Operation
            </button>
          </div>

          {/* TIER 3 */}
          <div className="group border-[1px] border-black/10 p-12 hover:border-green hover:bg-cream transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Globe size={80} />
            </div>
            <div>
              <span className="font-mono text-[10px] font-black text-green uppercase tracking-widest mb-4 block">Tier 03 // Institutional</span>
              <h2 className="font-['Archivo_Black'] text-3xl uppercase mb-6 leading-none">Global <br/>Chairman</h2>
              <div className="text-4xl font-['Archivo_Black'] mb-8 text-black">
                ${monthly ? '500' : '2500'}+
                <span className="text-xs font-mono text-black/30 font-black tracking-widest uppercase"> {monthly ? '/ mo' : 'once'}</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-green">/</span> Corporate Brand placement on all uniforms.
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-green">/</span> Title sponsorship of the "GD-Cadet Field Trips."
                </li>
              </ul>
            </div>
            <button type="button" className="w-full py-5 border-2 border-black text-black font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors">
              Request Partnership
            </button>
          </div>

        </div>

        {/* CUSTOM AMOUNT */}
        <div className="mt-12 group border-[1px] border-black/10 p-12 hover:bg-cream transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <span className="font-mono text-[10px] font-black text-black/40 uppercase tracking-widest mb-2 block">Mission Code: CUSTOM_OP</span>
              <h2 className="font-['Archivo_Black'] text-3xl uppercase leading-none mb-4">Manual <br/>Allocation.</h2>
              <p className="text-sm font-medium text-black/50 italic leading-relaxed">
                Have a specific budget for community impact? Define your own deployment amount. Every dollar is tracked and reported.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-['Archivo_Black'] text-xl text-gold">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="0.00"
                  aria-label="Donation amount in dollars"
                  className="w-full pl-12 pr-6 py-5 bg-white border border-black/10 font-['Archivo_Black'] text-2xl focus:border-red focus:outline-none transition-all placeholder:text-black/20"
                />
              </div>
              <button type="button" className="w-full md:w-auto px-12 py-6 bg-black text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-red transition-colors shadow-xl">
                Initiate Deployment
              </button>
            </div>
          </div>
        </div>

        {/* TRANSPARENCY & BENEFIT ROADMAP */}
        <section className="mt-40 border-t-2 border-black pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            <div>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-red mb-6 block">
                Resource Allocation // Accountability
              </span>
              <h2 className="font-['Archivo_Black'] text-4xl md:text-5xl uppercase tracking-tighter mb-10 leading-tight">
                Where Your <br/><span className="text-black/30">Capital Deploys.</span>
              </h2>

              <div className="space-y-8">
                {[
                  { label: "Direct Instruction", percent: "60%", desc: "Funding certified technicians and civic mentors for daily cadet sessions." },
                  { label: "Hardware & Safety", percent: "25%", desc: "Olympic-grade mats, spotting equipment, and facility maintenance at Wharton." },
                  { label: "Civic Operations", percent: "15%", desc: "Field trips, community mapping materials, and graduation ceremonies." }
                ].map((item) => (
                  <div key={item.label} className="flex gap-8 items-start">
                    <div className="font-['Archivo_Black'] text-2xl text-gold w-16">{item.percent}</div>
                    <div>
                      <h3 className="font-['Archivo_Black'] text-lg uppercase mb-1">{item.label}</h3>
                      <p className="text-sm text-black/50 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white p-12 md:p-16 relative">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 block">
                The Cadet Outcome
              </span>
              <h2 className="font-['Archivo_Black'] text-4xl uppercase tracking-tighter mb-8 italic">
                The "Return" on <br/>Human Potential.
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-10 leading-relaxed">
                Beyond the gymnasium, your support builds three core pillars in every child:
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs italic">01</div>
                  <p className="text-sm font-medium leading-snug"><span className="text-gold uppercase font-bold">Physical Resilience:</span> Mastery of the body leads to a mind that does not quit when tasks become difficult.</p>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs italic">02</div>
                  <p className="text-sm font-medium leading-snug"><span className="text-gold uppercase font-bold">Civic Literacy:</span> Cadets learn to navigate local government, becoming the people who solve community problems.</p>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs italic">03</div>
                  <p className="text-sm font-medium leading-snug"><span className="text-gold uppercase font-bold">Social Architecture:</span> Working in "Group Governance" creates leaders who can build consensus, not just take orders.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM SECTION */}
        <div className="mt-32 p-16 border-t border-black/5 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="font-['Archivo_Black'] text-2xl uppercase mb-4 italic">The Mission Clarity</h2>
            <p className="text-lg text-black/60 font-medium leading-relaxed">
              Healthnastics is a registered non-profit. Every dollar is "Deployed" toward two things: <strong>Technical Excellence</strong> (Gymnastics Equipment) and <strong>Civic Excellence</strong> (Democracy Workshops). We do not spend on vanity. We spend on the kids.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-cream p-8 border border-black/5 text-center">
              <p className="font-['Archivo_Black'] text-3xl text-black">100%</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/40">Direct Impact</p>
            </div>
            <div className="bg-cream p-8 border border-black/5 text-center">
              <p className="font-['Archivo_Black'] text-3xl text-black">SECURE</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/40">Encrypted Portal</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
