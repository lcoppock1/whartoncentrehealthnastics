import { Button } from '../components/ui';
import { usePageTitle } from '../lib';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <main id="main" className="pt-48 pb-40 px-6 text-center min-h-screen flex flex-col items-center justify-center bg-cream">
      <p className="font-display text-8xl md:text-[12rem] leading-none text-ink/10" aria-hidden="true">404</p>
      <h1 className="font-display text-3xl md:text-5xl uppercase tracking-tight mt-6">Page not found</h1>
      <p className="text-lg text-ink/70 mt-4 max-w-md">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Button to="/" variant="dark">Return home</Button>
        <Button to="/contact?topic=general" variant="outline">Contact us</Button>
      </div>
    </main>
  );
}
