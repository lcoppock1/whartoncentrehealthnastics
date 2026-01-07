import React, { useState, useEffect } from 'react';
import { 
  Shield, Globe, Star, Heart, Users, PlayCircle, ArrowRight, LayoutGrid, Menu, X 
} from 'lucide-react';

// This is the link to the file we talked about creating in the previous step
import { supabase } from './supabaseClient';

/**
 * THEME CONSTANTS
 */
const COLORS = {
  black: '#1A1A1A',
  gold: '#D4AF37',
  red: '#CC0000',
  green: '#006633',
  tan: '#fdf8f1',
  white: '#ffffff',
};

// --- Sub-Components ---

const Header = ({ setView, currentView }) => (
  <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
      
      {/* THE LOGO SECTION */}
      <div 
        className="cursor-pointer group flex items-center gap-4" 
        onClick={() => setView('home')}
      >
        {/* ADD YOUR IMAGE TAG HERE */}
        <img 
          src="/logo.png"  /* Ensure this matches your filename in the public folder */
          alt="Healthnastics Logo"
          className="h-12 w-auto object-contain" /* Controls the height of the logo */
        />
        
        {/* You can keep or remove this text depending on if your logo has text in it */}
        <div className="flex flex-col border-l border-black/10 pl-4">
          <span className="font-['Archivo_Black'] text-xl tracking-tighter uppercase leading-none text-black">
            Healthnastics
          </span>
          <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.4em] font-black mt-1">
            Institutional
          </span>
        </div>
      </div>

      {/* NAV LINKS & DEPLOY BUTTON... (Keep the rest of the code as is) */}
      <nav className="hidden md:flex items-center gap-8">
        {['home', 'about', 'cadets', 'campaigns'].map((item) => (
          <button key={item} onClick={() => setView(item)} className="...">
            {item}
          </button>
        ))}
      </nav>

      <button onClick={() => setView('campaigns')} className="...">
        Deploy
      </button>

    </div>
  </header>
);

const Hero = ({ setView }) => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ backgroundColor: COLORS.tan }}>
    <div className="absolute inset-0">
      <img src="/none.jpg" className="w-full h-full object-cover grayscale opacity-25" alt="Gymnastics" />
    </div>
    <div className="relative z-10 max-w-[1600px] mx-auto px-12 w-full">
      <div className="max-w-6xl">
        <h2 className="flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          <span className="font-mono text-xs font-black uppercase tracking-[0.5em] text-[#D4AF37]"> </span>
        </h2>
        <h1 className="font-['Archivo_Black'] text-black text-6xl md:text-[8rem] leading-[0.85] tracking-tighter uppercase mb-12">
          TECHNICIANS <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #1A1A1A" }}>& GD-CADETS.</span>
        </h1>
        <div className="border-l-[4px] border-[#CC0000] pl-10 py-2 mb-16">
            <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black/90 leading-none">Nonprofit Organization.</p>
            <p className="font-mono text-sm font-bold italic tracking-widest uppercase mt-4 opacity-60">Fostering Citizenship.</p>
        </div>
        <div className="flex gap-6">
          <button onClick={() => setView('sponsor')} className="px-12 py-5 text-white font-['Archivo_Black'] uppercase tracking-widest text-[10px] bg-[#CC0000] hover:bg-black transition-colors">Invest In Our Future</button>
          <button onClick={() => setView('about')} className="px-12 py-5 text-white font-['Archivo_Black'] uppercase tracking-widest text-[10px] bg-[#006633] hover:bg-black transition-colors">Learn More</button>
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
  /* py-32 adds the big white space at the top and bottom */
  <section className="py-32 md:py-48 bg-white overflow-hidden">
    
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      
      {/* TOP CONTENT: Spaced out with mb-24 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-12 text-left">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
             <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-[#D4AF37]">Strategic Mandate</span>
          </div>
          <h3 className="font-['Archivo_Black'] text-5xl md:text-7xl leading-[0.9] uppercase tracking-tighter">
            The Architecture of <br /> 
            <span className="text-[#CC0000]">Human Potential.</span>
          </h3>
        </div>
        
        <div className="max-w-[380px] border-l-2 border-black/10 pl-8">
          <p className="font-['Inter'] text-base text-black/60 italic leading-relaxed font-medium">
            Establishing international standards in physical discipline, kinetic mastery, and civic responsibility for the next generation.
          </p>
        </div>
      </div>

      {/* THE BOXES: Spaced with gap-0 but internal p-16 */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10">
        {[
          { num: '01', title: 'Kinetic Mastery', desc: 'Advanced gymnastics and physiological conditioning designed to push boundaries.' },
          { num: '02', title: 'Civic Literacy', desc: 'Developing the infrastructure required to navigate local governance and leadership.' },
          { num: '03', title: 'Institutional Honor', desc: 'A strict code of conduct that transforms individual performance into strength.' }
        ].map((item, idx) => (
          <div key={idx} className={`p-12 md:p-16 border-black/10 ${idx === 1 ? 'md:border-x' : ''} ${idx > 0 ? 'border-t md:border-t-0' : ''}`}>
            <span className="font-mono text-sm text-[#D4AF37] mb-6 block font-bold">{item.num} //</span>
            <h4 className="font-['Archivo_Black'] text-2xl uppercase mb-6 tracking-tight">{item.title}</h4>
            <p className="text-sm text-black/50 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

const DashboardSection = () => (
  /* Consistent py-32 to 48 for vertical white space */
  <section className="py-32 md:py-48 bg-white border-y border-black/5">
    
    {/* max-w-7xl creates the wide white gutters on the sides */}
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Header spacing: mb-24 matches the Mission Section exactly */}
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
             <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-[#D4AF37]">Institutional Dashboard // 2026</span>
          </div>
          <h2 className="font-['Archivo_Black'] text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85]">
            Operational <br /><span className="text-[#CC0000]">Infrastructure.</span>
          </h2>
        </div>
        
        {/* Added a small status indicator for more "White Space" detail */}
      </div>

      {/* Grid Layout: Adjusted to feel less cramped */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">
        
        {/* PRIMARY HUB CARD */}
        <div className="md:col-span-2 md:row-span-2 bg-[#fdf8f1] p-12 md:p-20 flex flex-col justify-between border border-black/5 relative overflow-hidden group hover:border-[#D4AF37]/30 transition-colors">
          <div className="relative z-10">
            <h4 className="font-['Archivo_Black'] text-4xl md:text-6xl uppercase mb-8 leading-none tracking-tighter">Warton Centre <br/> & Affiliations</h4>
            <p className="max-w-md text-black/60 text-lg font-medium leading-relaxed italic">
              The central hub for all GD-Cadet operations, technical gymnastics training, and student engagement. 
            </p>
          </div>
          
          <div className="flex gap-4 relative z-10 pt-8 border-t border-black/5">
            <span className="px-6 py-2 bg-black text-white font-mono text-[10px] uppercase tracking-widest font-black">Philadelphia, PA</span>
            <span className="px-6 py-2 border border-black/10 bg-white font-mono text-[10px] uppercase tracking-widest font-black text-black/40">Active Site</span>
          </div>
          
          {/* Subtle background branding */}
          <div className="absolute -bottom-16 -right-16 opacity-[0.03] scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-700">
             <Shield size={450} />
          </div>
        </div>

        {/* STATUS CARD (Black) */}
        <div className="bg-black text-white p-12 flex flex-col justify-between hover:bg-zinc-900 transition-colors">
          <span className="font-mono text-[10px] uppercase tracking-widest font-black text-[#D4AF37]">Educational Health</span>
          <div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-pulse"></div>
              <span className="font-['Archivo_Black'] text-3xl uppercase italic leading-none">Fully <br/>Operational</span>
            </div>
            <p className="font-mono text-[11px] leading-relaxed tracking-wider opacity-40 uppercase">Homework assistance, summer camp, and regional trips.</p>
          </div>
        </div>

        {/* READINESS CARD (Green) */}
        <div className="bg-[#006633] text-white p-12 flex flex-col justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest font-black opacity-60">Technical Readiness</span>
          <div className="space-y-8">
            <div className="h-2 w-full bg-white/10 overflow-hidden">
              <div className="h-full bg-white w-[85%] transition-all duration-1000"></div>
            </div>
            <div className="flex justify-between font-mono text-xs font-black uppercase tracking-widest">
              <span>Discipline Index</span>
              <span className="text-[#D4AF37]">85%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const FundingSection = () => (
  /* py-32 to py-48 maintains that vertical 'white space' rhythm */
  <section className="py-32 md:py-48 bg-white relative overflow-hidden">
    
    {/* Changing max-w-[1600px] to max-w-7xl creates the clean side gutters */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      {/* HEADER: mb-24 creates the necessary gap above the cards */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-[2px] bg-[#CC0000]"></div>
             <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-[#CC0000]">Resource Acquisition // 2026</span>
          </div>
          <h2 className="font-['Archivo_Black'] text-5xl md:text-[6rem] leading-[0.85] uppercase tracking-tighter text-black">
            Strategic <br /><span className="text-[#D4AF37]">Investment.</span>
          </h2>
        </div>
        
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/40 max-w-[300px] border-l-2 border-black/10 pl-10 pb-2 leading-relaxed italic">
          Direct your capital toward verified institutional infrastructure milestones.
        </p>
      </div>

      {/* CARDS GRID: Using gap-10 for more breathing room between items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { name: 'TECHNICAL APPARATUS', tag: 'HARDWARE', icon: <Shield size={28} />, desc: 'Procurement of Olympic-standard equipment, safety spotting systems, and specialized floor mats for elite training.' },
          { name: 'CIVIC LEADERSHIP CURRICULUM', tag: 'INTELLECT', icon: <Globe size={28} />, desc: 'Funding for GD-Cadet workshops, guest lectures on democracy, and community engagement field operations.' },
          { name: 'YOUTH HEADQUARTERS', tag: 'INFRASTRUCTURE', icon: <LayoutGrid size={28} />, desc: 'Expansion of our Philadelphia home-base to accommodate more students and newer technology for homework help.' }
        ].map((portal, i) => (
          /* p-12 md:p-16 ensures the content doesn't touch the card edges */
          <div key={i} className="group relative p-12 md:p-16 bg-[#fdf8f1] border border-black/5 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700">
            
            <div className="mb-12 flex justify-between items-center">
              <div className="p-4 bg-white border border-black/5 text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
                <div className="scale-110">{portal.icon}</div>
              </div>
              <span className="text-[9px] font-black px-4 py-1.5 bg-black text-white font-mono uppercase tracking-widest leading-none">
                {portal.tag}
              </span>
            </div>

            <h3 className="font-['Archivo_Black'] text-3xl uppercase mb-8 tracking-tighter leading-[0.95] group-hover:text-[#CC0000] transition-colors">
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

            {/* Accent line at bottom */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#CC0000] group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

const FounderSection = () => (
  /* Consistent py-32 to py-48 for vertical breathing room */
  <section className="py-32 md:py-48 bg-[#fdf8f1] relative overflow-hidden">
    
    {/* Contained max-width creates the white space 'gutters' on the sides */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-center">
        
        {/* IMAGE SIDE: Balanced with the text */}
        <div className="w-full lg:w-5/12 relative group">
          {/* Decorative frame shifted slightly for more 'air' */}
          <div className="absolute -top-6 -left-6 w-full h-full border-[2px] border-[#D4AF37] opacity-40 group-hover:top-0 group-hover:left-0 transition-all duration-700"></div>
          
          <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale bg-black shadow-2xl">
            {/* Replace with your actual hosted image URL */}
            <img 
              src="/coach-harris.jpg" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]" 
              alt="Coach Harris" 
            />
          </div>
          
          {/* Small technical detail in the white space */}
          <div className="absolute -bottom-10 right-0 font-mono text-[10px] uppercase tracking-[0.4em] text-black/20 vertical-text hidden md:block">
            ARCHIVE_REF: LH_001
          </div>
        </div>

        {/* TEXT SIDE: Spaced for readability */}
        <div className="w-full lg:w-7/12">
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-[2px] bg-[#CC0000]"></div>
             <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-[#CC0000]">The Founder's Mandate</span>
          </div>

          <h2 className="font-['Archivo_Black'] text-5xl md:text-7xl lg:text-[6rem] leading-[0.85] uppercase tracking-tighter mb-16 text-black">
            Training 
            <br />
            <span className="text-black/40 italic">the New</span>
            <br />
            <span className="text-black/20 italic tracking-widest leading-none">
              Technician <span className="text-[#CC0000]/40">Diplomats</span>
            </span>
          </h2>

          {/* Quote: Larger font but with more space above/below */}
          <p className="font-['Inter'] text-2xl md:text-4xl font-medium leading-relaxed text-black/70 mb-20 italic max-w-2xl border-l-4 border-[#D4AF37]/20 pl-10">
            "Let our time capsules be filled by each of you bearing thoughts of the future!"
          </p>

          {/* SIGNATURE AREA: Clean and minimal */}
          <div className="flex items-center gap-8 pt-12 border-t border-black/5">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white font-['Archivo_Black'] text-2xl shadow-xl">
              LH
            </div>
            <div>
              <h4 className="font-['Archivo_Black'] text-2xl uppercase tracking-tight">Lewis Harris</h4>
              <p className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.4em] font-bold mt-2">
                Chairman // Healthnastics Institutional
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
);

const Footer = ({ setView }) => (
  <footer className="bg-black text-white pt-5 pb-0 px-8 md:px-5 border-t-[16px] border-[#D4AF37]">
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

        {/* COLUMN 2: LARGE NAVIGATION */}
        <div>
          <h4 className="font-mono text-sm font-black uppercase tracking-[0.3em] text-white/30 mb-10">Directory_Index</h4>
          <ul className="space-y-5 font-mono text-sm md:text-base uppercase tracking-[0.2em]">
            {['home', 'about', 'cadets', 'campaigns'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => setView(item)} 
                  className="hover:text-[#D4AF37] transition-all hover:translate-x-4 duration-300 flex items-center gap-4 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">/</span>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: OPERATIONAL STATUS */}
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
          <button 
            onClick={() => setView('campaigns')}
            className="group relative overflow-hidden border-2 border-white/20 py-8 px-6 font-['Archivo_Black'] text-lg uppercase tracking-[0.2em] transition-all hover:border-[#D4AF37]"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Invest in the Guard</span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      {/* BOTTOM LEGAL STRIP */}
      <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 font-mono text-xs md:text-sm text-white/20 uppercase tracking-[0.4em]">
          <span>&copy; 2026 Healthnastics Inc </span>
          <span className="hidden md:block text-white/5">|</span>
          <span>Created by La'Joir Coppock</span>
        </div>
        
        <div className="flex gap-12 font-mono text-xs md:text-sm text-white/30 uppercase tracking-widest">
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Privacy_Protocol</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Terms_Of_Service</span>
        </div>
      </div>

    </div>
  </footer>
);

// --- NEW ABOUT VIEW (BASE INTELLIGENCE) ---
const AboutView = () => (
  /* min-h-screen ensures the white space is intentional and doesn't leave a gap above the footer */
  <main className="pt-32 pb-48 bg-white animate-in fade-in slide-in-from-bottom-4 duration-1000 min-h-screen">
    
    {/* Contained max-width for the signature wide-margin look */}
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      
      {/* HEADER BRIEFING: Clean lines and large typography */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-32 border-b border-black/5 pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
             <span className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Institutional Profile //CadetsView</span>
          </div>
          
          <h1 className="font-['Archivo_Black'] text-6xl md:text-[7rem] leading-[0.85] uppercase tracking-tighter text-black mb-16">
            Base <br /><span className="text-[#CC0000]">Intelligence.</span>
          </h1>
          
          <p className="font-['Inter'] text-2xl md:text-4xl font-medium text-black/70 leading-tight italic max-w-3xl">
            "We operate at the intersection of physical mastery and civic duty."
          </p>
        </div>

        {/* Floating Detail Box */}
        <div className="mt-16 md:mt-0 bg-black text-white p-10 border-l-[10px] border-[#D4AF37] shadow-2xl self-start">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-3 font-bold text-[#D4AF37]">Establishment Date</p>
          <p className="font-['Archivo_Black'] text-3xl uppercase italic leading-none">Circa 2024</p>
        </div>
      </div>

      {/* DATA GRID: Three balanced columns with wide gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">
        
        {/* Column 01: Metrics */}
        <div className="space-y-16">
          <h3 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/20 border-b border-black/5 pb-6">01 // Current Metrics</h3>
          <div className="space-y-8">
            {[
              {l:'Active Cadets', v:'15-20', s:'Phase 01 Enrollment'}, 
              {l:'Primary Base', v:'Warton', s:'Philly, PA'}, 
              {l:'Focus Age', v:'08-14', s:'Youth Development'}
            ].map((s,i)=>(
              <div key={i} className="bg-[#fdf8f1] p-10 border border-black/5 group hover:border-[#D4AF37]/40 transition-colors">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">{s.l}</p>
                <p className="font-['Archivo_Black'] text-5xl uppercase tracking-tighter mb-4">{s.v}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/30 font-medium italic">{s.s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 02: Personnel Profile */}
        <div className="space-y-16">
          <h3 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/20 border-b border-black/5 pb-6">02 // Lead Personnel</h3>
          <div className="relative aspect-[4/6] bg-black overflow-hidden grayscale group shadow-xl">
             <img src="/coach-harris.jpg" className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-[3s]" alt="Lewis Harris" />
             <div className="absolute bottom-0 w-full p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="font-['Archivo_Black'] text-3xl text-white uppercase tracking-tighter leading-none mb-3">Lewis Harris</p>
                <p className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.4em] font-bold">Executive Technician</p>
             </div>
          </div>
          <p className="text-black/60 text-lg leading-relaxed font-medium italic border-l-2 border-black/5 pl-8">
            Lewis Harris established Healthnastics to provide a "third space" for youth that demands excellence and rewards character.
          </p>
        </div>

        {/* Column 03: Ethos & Safety */}
        <div className="space-y-16">
          <h3 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/20 border-b border-black/5 pb-6">03 // Operational Ethos</h3>
          <div className="space-y-16 pt-4">
            <div>
              <h4 className="font-['Archivo_Black'] text-2xl uppercase mb-6 text-[#CC0000] tracking-tighter">The Safety Protocol</h4>
              <p className="text-black/60 text-lg leading-relaxed font-medium">
                Supervised by certified technicians. We maintain a strict student-to-mentor ratio to ensure individual progress and total physical safety.
              </p>
            </div>
            <div>
              <h4 className="font-['Archivo_Black'] text-2xl uppercase mb-6 text-[#006633] tracking-tighter">Civic Integration</h4>
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

// --- CADETS VIEW (TRAINING SYLLABUS) ---
const CadetsView = () => {
  const [activeFolder, setActiveFolder] = useState('gymnastics');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchTrainingData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('cadet_modules')
        .select('*')
        .eq('category', activeFolder)
        .order('priority', { ascending: true });
      if (!error) setContent(data);
      setLoading(false);
    };
    fetchTrainingData();
  }, [activeFolder]);

  return (
    <main className="pt-32 pb-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER: More "Editorial" Spacing */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <h1 className="font-['Archivo_Black'] text-7xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-8">
              The <br /><span className="text-[#CC0000]">Archives.</span>
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-black/40 border-l-2 border-black/10 pl-8">
              Verified Operational Records // 
            </p>
          </div>
          
          {/* High-Tech Metadata Box */}
        </div>

        {/* FOLDER TABS: Minimalist & Clean */}
        <div className="flex flex-wrap gap-3 mb-24 border-b border-black/5 pb-8">
          {['gymnastics', 'civics', 'cadets', 'events'].map(id => (
            <button 
              key={id} 
              onClick={() => setActiveFolder(id)} 
              className={`px-8 py-3 font-mono text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full ${
                activeFolder === id 
                ? 'bg-[#D4AF37] text-black scale-105 shadow-lg' 
                : 'bg-transparent text-black/30 hover:text-black'
              }`}
            >
              {id}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="h-96 flex flex-col items-center justify-center gap-6">
            <div className="w-12 h-12 border-4 border-black/10 border-t-[#CC0000] rounded-full animate-spin"></div>
            <span className="font-mono text-[10px] uppercase tracking-[1em] text-black/40">Syncing_Nodes...</span>
          </div>
        ) : (
          /* THE PRETTIER GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {content.map((item, index) => {
              const isVideo = item.media_url?.toLowerCase().endsWith('.mov') || item.media_url?.toLowerCase().endsWith('.mp4');
              return (
                <div 
                  key={item.id} 
                  className="group relative flex flex-col bg-white border border-black/[0.03] hover:border-black/10 transition-all duration-700 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* MEDIA BOX: Cinematic Reveal */}
                  <div 
                    className="relative aspect-[4/5] bg-zinc-100 overflow-hidden cursor-none"
                    onClick={() => isVideo && setSelectedVideo(item.media_url)}
                  >
                    {isVideo ? (
                      <video autoPlay muted loop className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out">
                        <source src={item.media_url}/>
                      </video>
                    ) : (
                      <img src={item.media_url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out" alt={item.title}/>
                    )}
                    
                    {/* Media Type Tag (Glassmorphism) */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white font-mono text-[8px] uppercase tracking-[0.3em] z-10">
                      {isVideo ? 'REC // MOTION' : 'DOC // STILL'}
                    </div>

                    {/* Play Button Overlay */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                        <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CONTENT INFO: Clean & Vertical */}
                  <div className="pt-10 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#D4AF37] font-mono text-[10px] font-black italic">MOD_{index + 1}</span>
                      <div className="h-[1px] flex-grow bg-black/5"></div>
                    </div>
                    
                    <h4 className="font-['Archivo_Black'] text-3xl uppercase tracking-tighter leading-none mb-4 group-hover:text-[#CC0000] transition-colors duration-500">
                      {item.title}
                    </h4>
                    
                    <p className="text-black/40 text-sm font-medium leading-relaxed italic pr-4">
                      {item.description}
                    </p>

                    {item.status === 'Active' && (
                      <button className="mt-10 flex items-center gap-4 font-mono text-[10px] font-black uppercase tracking-[0.4em] group/btn">
                        <span className="text-[#CC0000]">Get Access</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-3 transition-transform text-[#CC0000]" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* VIDEO MODAL (Stayed the same for high-quality playback) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center p-6 md:p-20 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setSelectedVideo(null)}>
          <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
            <X size={40}/>
          </button>
          <video autoPlay controls className="max-w-6xl w-full aspect-video shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-white/10">
            <source src={selectedVideo} type="video/mp4"/>
          </video>
        </div>
      )}
    </main>
  );
};


// --- CAMPAIGNS/SPONSOR VIEW (RE-DESIGNED) ---

const CampaignsView = () => {
  const [frequency, setFrequency] = React.useState('monthly'); // 'monthly' or 'one-time'

  return (
    <main className="pt-32 pb-40 bg-white animate-in fade-in duration-700">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        
        {/* HEADER: Institutional & Clean */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37] mb-6 block underline underline-offset-8">
            Strategic Resource Deployment
          </span>
          <h1 className="font-['Archivo_Black'] text-5xl md:text-7xl uppercase tracking-tighter text-black mb-8 leading-none">
            Invest in the <br/><span className="text-[#CC0000]">New Guard.</span>
          </h1>
          <p className="font-['Inter'] text-xl text-black/50 font-medium max-w-2xl mx-auto leading-relaxed italic">
            "We are not just training gymnasts; we are building the intellectual and physical infrastructure for the next generation of Philadelphia’s custodians."
          </p>
        </div>

        {/* FREQUENCY TOGGLE */}
        <div className="flex justify-center mb-20">
          <div className="bg-[#fdf8f1] p-1.5 rounded-none border border-black/10 flex">
            <button 
              onClick={() => setFrequency('monthly')}
              className={`px-10 py-3 font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all ${frequency === 'monthly' ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
            >
              Subscription (Sustainer)
            </button>
            <button 
              onClick={() => setFrequency('one-time')}
              className={`px-10 py-3 font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all ${frequency === 'one-time' ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
            >
              One-Time (Deployment)
            </button>
          </div>
        </div>

        {/* TIER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* TIER 1: PARENTS / INDIVIDUALS */}
          <div className="group border-[1px] border-black/10 p-12 hover:border-[#D4AF37] hover:bg-[#fdf8f1] transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Star size={80} />
            </div>
            <div>
              <span className="font-mono text-[10px] font-black text-[#CC0000] uppercase tracking-widest mb-4 block">Tier 01 // Individual</span>
              <h3 className="font-['Archivo_Black'] text-3xl uppercase mb-6 leading-none">Cadet <br/>Sustainer</h3>
              <div className="text-4xl font-['Archivo_Black'] mb-8 text-black">
                ${frequency === 'monthly' ? '25' : '150'}
                <span className="text-xs font-mono text-black/30 font-black tracking-widest uppercase"> {frequency === 'monthly' ? '/ mo' : 'once'}</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-[#D4AF37]">/</span> Fund 1 Cadet's uniform and civic workbook.
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-[#D4AF37]">/</span> Recognition in our Annual Operations Report.
                </li>
              </ul>
            </div>
            <button className="w-full py-5 bg-black text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-[#CC0000] transition-colors">
              Deploy Capital
            </button>
          </div>

          {/* TIER 2: ADVANCED / LOCAL BIZ */}
          <div className="group border-[1px] border-black/10 p-12 bg-black text-white transition-all duration-500 flex flex-col justify-between relative shadow-2xl scale-105 z-10">
            <div className="absolute top-4 right-4 text-[#D4AF37] font-mono text-[8px] font-black uppercase tracking-widest">Priority Target</div>
            <div>
              <span className="font-mono text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-4 block underline">Tier 02 // Strategic</span>
              <h3 className="font-['Archivo_Black'] text-3xl uppercase mb-6 leading-none text-white italic">Technical <br/>Patron</h3>
              <div className="text-4xl font-['Archivo_Black'] mb-8 text-[#D4AF37]">
                ${frequency === 'monthly' ? '100' : '500'}
                <span className="text-xs font-mono text-white/30 font-black tracking-widest uppercase"> {frequency === 'monthly' ? '/ mo' : 'once'}</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm font-medium text-white/60 italic leading-tight">
                  <span className="text-[#D4AF37]">/</span> Modernize safety equipment (Mats/Chalk).
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-white/60 italic leading-tight">
                  <span className="text-[#D4AF37]">/</span> Name plaque on the Warton Centre "Honor Wall."
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-white/60 italic leading-tight">
                  <span className="text-[#D4AF37]">/</span> VIP Access to Cadet Graduation Forums.
                </li>
              </ul>
            </div>
            <button className="w-full py-5 bg-[#CC0000] text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors">
              Fund Operation
            </button>
          </div>

          {/* TIER 3: CORPORATE / FOUNDATIONS */}
          <div className="group border-[1px] border-black/10 p-12 hover:border-[#006633] hover:bg-[#fdf8f1] transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Globe size={80} />
            </div>
            <div>
              <span className="font-mono text-[10px] font-black text-[#006633] uppercase tracking-widest mb-4 block">Tier 03 // Institutional</span>
              <h3 className="font-['Archivo_Black'] text-3xl uppercase mb-6 leading-none">Global <br/>Chairman</h3>
              <div className="text-4xl font-['Archivo_Black'] mb-8 text-black">
                ${frequency === 'monthly' ? '500' : '2500'}+
                <span className="text-xs font-mono text-black/30 font-black tracking-widest uppercase"> {frequency === 'monthly' ? '/ mo' : 'once'}</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-[#006633]">/</span> Corporate Brand placement on all uniforms.
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-black/60 italic leading-tight">
                  <span className="text-[#006633]">/</span> Title sponsorship of the "GD-Cadet Field Trips."
                </li>
              </ul>
            </div>
            <button className="w-full py-5 border-2 border-black text-black font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors">
              Request Partnership
            </button>
          </div>

        </div>

        {/* CUSTOM DEPLOYMENT STATION */}
        <div className="mt-12 group border-[1px] border-black/10 p-12 hover:bg-[#fdf8f1] transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
            <span className="font-mono text-[10px] font-black text-black/40 uppercase tracking-widest mb-2 block">Mission Code: CUSTOM_OP</span>
            <h3 className="font-['Archivo_Black'] text-3xl uppercase leading-none mb-4">Manual <br/>Allocation.</h3>
            <p className="text-sm font-medium text-black/50 italic leading-relaxed">
                Have a specific budget for community impact? Define your own deployment amount. Every dollar is tracked and reported.
            </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <div className="relative w-full md:w-64">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-['Archivo_Black'] text-xl text-[#D4AF37]">$</span>
                <input 
                type="number" 
                placeholder="0.00" 
                className="w-full pl-12 pr-6 py-5 bg-white border border-black/10 font-['Archivo_Black'] text-2xl focus:border-[#CC0000] focus:outline-none transition-all placeholder:text-black/5"
                />
            </div>
            <button className="w-full md:w-auto px-12 py-6 bg-black text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-[#CC0000] transition-colors shadow-xl">
                Initiate Deployment
            </button>
            </div>
        </div>
        </div>

        {/* TRANSPARENCY & BENEFIT ROADMAP */}
        <section className="mt-40 border-t-2 border-black pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* LEFT: Financial Transparency */}
            <div>
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-[#CC0000] mb-6 block">
                Resource Allocation // Accountability
            </span>
            <h3 className="font-['Archivo_Black'] text-4xl md:text-5xl uppercase tracking-tighter mb-10 leading-tight">
                Where Your <br/><span className="text-black/30">Capital Deploys.</span>
            </h3>
            
            <div className="space-y-8">
                {[
                { label: "Direct Instruction", percent: "60%", desc: "Funding certified technicians and civic mentors for daily cadet sessions." },
                { label: "Hardware & Safety", percent: "25%", desc: "Olympic-grade mats, spotting equipment, and facility maintenance at Warton." },
                { label: "Civic Operations", percent: "15%", desc: "Field trips, community mapping materials, and graduation ceremonies." }
                ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                    <div className="font-['Archivo_Black'] text-2xl text-[#D4AF37] w-16">{item.percent}</div>
                    <div>
                    <h4 className="font-['Archivo_Black'] text-lg uppercase mb-1">{item.label}</h4>
                    <p className="text-sm text-black/50 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* RIGHT: The Benefit to the Child */}
            <div className="bg-black text-white p-12 md:p-16 relative">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37] mb-6 block">
                The Cadet Outcome
            </span>
            <h3 className="font-['Archivo_Black'] text-4xl uppercase tracking-tighter mb-8 italic">
                The "Return" on <br/>Human Potential.
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-10 leading-relaxed">
                Beyond the gymnasium, your support builds three core pillars in every child:
            </p>
            
            <div className="space-y-8">
                <div className="flex gap-6">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs italic">01</div>
                <p className="text-sm font-medium leading-snug"><span className="text-[#D4AF37] uppercase font-bold">Physical Resilience:</span> Mastery of the body leads to a mind that does not quit when tasks become difficult.</p>
                </div>
                <div className="flex gap-6">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs italic">02</div>
                <p className="text-sm font-medium leading-snug"><span className="text-[#D4AF37] uppercase font-bold">Civic Literacy:</span> Cadets learn to navigate local government, becoming the people who solve community problems.</p>
                </div>
                <div className="flex gap-6">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs italic">03</div>
                <p className="text-sm font-medium leading-snug"><span className="text-[#D4AF37] uppercase font-bold">Social Architecture:</span> Working in "Group Governance" creates leaders who can build consensus, not just take orders.</p>
                </div>
            </div>
            </div>

        </div>
        </section>

        {/* BOTTOM SECTION: The "Why" */}
        <div className="mt-32 p-16 border-t border-black/5 flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2">
              <h4 className="font-['Archivo_Black'] text-2xl uppercase mb-4 italic">The Mission Clarity</h4>
              <p className="font-['Inter'] text-lg text-black/60 font-medium leading-relaxed">
                Healthnastics is a registered non-profit. Every dollar is "Deployed" toward two things: **Technical Excellence** (Gymnastics Equipment) and **Civic Excellence** (Democracy Workshops). We do not spend on vanity. We spend on the kids.
              </p>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-[#fdf8f1] p-8 border border-black/5 text-center">
                 <p className="font-['Archivo_Black'] text-3xl text-black">100%</p>
                 <p className="font-mono text-[10px] uppercase tracking-widest text-black/40">Direct Impact</p>
              </div>
              <div className="bg-[#fdf8f1] p-8 border border-black/5 text-center">
                 <p className="font-['Archivo_Black'] text-3xl text-black">SECURE</p>
                 <p className="font-mono text-[10px] uppercase tracking-widest text-black/40">Encrypted Portal</p>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}

// 1. Define your secure URLs at the top of your component
const PAYMENT_URLS = {
  tier_01_monthly: "https://buy.stripe.com/your_link_here",
  tier_02_strategic: "https://buy.stripe.com/your_link_here",
  tier_03_institutional: "mailto:info@healthnastics.org?subject=Institutional Partnership",
  custom: "https://donate.stripe.com/your_custom_link"
};

// 2. Update your button code to use these links
<button 
  onClick={() => window.open(PAYMENT_URLS.tier_01_monthly, '_blank')}
  className="w-full py-5 bg-black text-white font-['Archivo_Black'] text-[10px] uppercase tracking-[0.3em] hover:bg-[#CC0000] transition-colors"
>
  Deploy Capital
</button>

const SuccessView = ({ setView }) => (
  <main className="pt-48 pb-40 text-center min-h-screen flex flex-col items-center justify-center bg-black text-white">
    <div className="w-24 h-24 border-2 border-[#D4AF37] flex items-center justify-center mb-12 animate-bounce">
       <Shield size={48} className="text-[#D4AF37]" />
    </div>
    <span className="font-mono text-xs font-black uppercase tracking-[0.6em] text-[#D4AF37] mb-6 block">Deployment Successful</span>
    <h2 className="font-['Archivo_Black'] text-6xl md:text-8xl uppercase tracking-tighter mb-12">Mission <br/>Funded.</h2>
    <p className="max-w-xl text-white/40 font-medium text-lg mb-16 px-6 italic">
      "Your capital has been allocated to Base-01 operations. A formal receipt has been dispatched to your secure terminal (email)."
    </p>
    <button 
      onClick={() => setView('home')} 
      className="font-['Archivo_Black'] uppercase tracking-widest bg-[#CC0000] text-white px-20 py-6 hover:bg-white hover:text-black transition-all text-xl shadow-2xl"
    >
      Return to Dashboard
    </button>
  </main>
);

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [view]);

  return (
    <div className="min-h-screen bg-white selection:bg-[#D4AF37] selection:text-black">
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      <style>{`
        html { font-size: 14px; }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; } 
        .font-mono { font-family: 'Space Mono', monospace; }
        @media (min-width: 1600px) { html { font-size: 15px; } }
      `}</style>
      
      <Header setView={setView} activeView={view} />

      {/* 1. HOME VIEW */}
      {view === 'home' && (
        <main className="animate-in fade-in duration-1000">
          <Hero setView={setView} />
          <AffiliationsRow />
          <MissionSection />
          <DashboardSection />
          <FundingSection />
          <FounderSection />
        </main>
      )}

      {/* 2. ABOUT VIEW (Base Intelligence) */}
      {view === 'about' && <AboutView />}

      {/* 3. CADETS VIEW (New!) */}
      {view === 'cadets' && <CadetsView />}

      {/* 4. FALLBACK */}
      {view === 'campaigns' && <CampaignsView />} 

      {/* 5. SPONSOR/DEPLOY REDIRECT */}
      {view === 'sponsor' && (
        <CampaignsView />
      )}

      {/* FALLBACK FOR MISSING CONTENT */}
      {!(['home', 'about', 'cadets', 'campaigns', 'sponsor'].includes(view)) && (
        <div className="pt-48 pb-40 text-center min-h-screen flex flex-col items-center justify-center bg-[#fdf8f1]">
          <h2 className="font-['Archivo_Black'] text-[12rem] uppercase tracking-widest opacity-5">{view}</h2>
          <button 
            onClick={() => setView('home')} 
            className="mt-12 font-['Archivo_Black'] uppercase tracking-widest bg-black text-white px-20 py-6 hover:bg-[#D4AF37] transition-all text-xl shadow-2xl"
          >
            Return to Base
          </button>
        </div>
      )}
      
     


      <Footer setView={setView} />
    </div>
  );
}