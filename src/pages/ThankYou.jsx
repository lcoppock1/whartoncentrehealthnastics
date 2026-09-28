import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

// Where the donation platform should send people after they give (ROADMAP Phase 5).
export default function ThankYou() {
  return (
    <main className="pt-48 pb-40 text-center min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-24 h-24 border-2 border-gold flex items-center justify-center mb-12">
        <Shield size={48} className="text-gold" />
      </div>
      <span className="font-mono text-xs font-black uppercase tracking-[0.6em] text-gold mb-6 block">Deployment Successful</span>
      <h1 className="font-['Archivo_Black'] text-6xl md:text-8xl uppercase tracking-tighter mb-12">Mission <br/>Funded.</h1>
      <p className="max-w-xl text-white/60 font-medium text-lg mb-16 px-6 italic">
        "Your capital has been allocated to Base-01 operations. A formal receipt has been dispatched to your secure terminal (email)."
      </p>
      <Link
        to="/"
        className="font-['Archivo_Black'] uppercase tracking-widest bg-red text-white px-20 py-6 hover:bg-white hover:text-black transition-all text-xl shadow-2xl"
      >
        Return Home
      </Link>
    </main>
  );
}
