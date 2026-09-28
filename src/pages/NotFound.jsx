import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="pt-48 pb-40 px-6 text-center min-h-screen flex flex-col items-center justify-center bg-cream">
      <p className="font-['Archivo_Black'] text-8xl md:text-[12rem] leading-none text-black/10">404</p>
      <h1 className="font-['Archivo_Black'] text-3xl md:text-5xl uppercase tracking-tighter mt-6">Page not found</h1>
      <p className="text-lg text-black/60 mt-4 max-w-md">The page you're looking for doesn't exist or has moved.</p>
      <Link
        to="/"
        className="mt-12 font-['Archivo_Black'] uppercase tracking-widest bg-black text-white px-16 py-6 hover:bg-gold hover:text-black transition-all text-lg shadow-2xl"
      >
        Return Home
      </Link>
    </main>
  );
}
