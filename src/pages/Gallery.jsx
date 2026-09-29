import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { PHOTOS, CATEGORIES } from '../data/gallery';
import { Button, PageHeader, Reveal } from '../components/ui';
import { usePageTitle } from '../lib';

const APPROVED = PHOTOS.filter((p) => p.approved);

function Lightbox({ photos, index, onClose, onMove }) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onMove]);

  return (
    <div role="dialog" aria-modal="true" aria-label={photo.alt} className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center p-4 md:p-16" onClick={onClose}>
      <button type="button" autoFocus onClick={onClose} aria-label="Close photo" className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white">
        <X size={32} />
      </button>
      {photos.length > 1 && (
        <>
          <button type="button" onClick={(e) => { e.stopPropagation(); onMove(-1); }} aria-label="Previous photo" className="absolute left-2 md:left-6 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white">
            <ChevronLeft size={40} />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); onMove(1); }} aria-label="Next photo" className="absolute right-2 md:right-6 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white">
            <ChevronRight size={40} />
          </button>
        </>
      )}
      <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={`/gallery/${photo.id}.webp`} alt={photo.alt} className="mx-auto max-h-[78vh] w-auto object-contain" />
        <figcaption className="mt-4 text-center text-white/80">{photo.alt} <span className="text-white/60">· {index + 1} of {photos.length}</span></figcaption>
      </figure>
    </div>
  );
}

export default function Gallery() {
  usePageTitle('Gallery');
  const [category, setCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const photos = category === 'all' ? APPROVED : APPROVED.filter((p) => p.category === category);
  const close = useCallback(() => setOpenIndex(null), []);
  const move = useCallback((step) => setOpenIndex((i) => (i + step + photos.length) % photos.length), [photos.length]);

  return (
    <main id="main">
      <PageHeader eyebrow="Gallery" title="Life at Healthnastics" intro="Moments from the mats, the classroom, the community and the road." />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-3 mb-14">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={category === id}
                onClick={() => setCategory(id)}
                className={`px-5 py-3 font-semibold border transition-colors ${category === id ? 'bg-ink text-white border-ink' : 'bg-white text-ink/80 border-ink/20 hover:border-ink'}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* key={category} replays the cascade each time the filter changes */}
          <div key={category} className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, i) => (
              <Reveal key={photo.id} delay={(i % 6) * 90}>
                <button type="button" onClick={() => setOpenIndex(i)} className="group block w-full text-left">
                  <span className="block aspect-[4/5] overflow-hidden bg-cream">
                    <img
                      src={`/gallery/${photo.id}-thumb.webp`}
                      alt={photo.alt}
                      loading="lazy"
                      width="640"
                      height="800"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </span>
                  <span className="block mt-3 text-ink/70 group-hover:text-ink">{photo.alt}</span>
                </button>
              </Reveal>
            ))}

            <Reveal delay={(photos.length % 6) * 90}>
              <div className="aspect-[4/5] flex flex-col justify-center p-8 md:p-10 bg-cream border-2 border-dashed border-ink/20">
                <Camera size={40} className="text-gold-dark" aria-hidden="true" />
                <h2 className="mt-6 font-display text-2xl uppercase tracking-tight">More photos coming soon</h2>
                <p className="mt-3 text-ink/70 leading-relaxed">
                  We only share photos of cadets with their family’s permission. Parents: ask us for a photo consent form.
                </p>
                <Button to="/contact?topic=general" variant="outline" className="mt-8 self-start">Contact us</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {openIndex !== null && photos[openIndex] && <Lightbox photos={photos} index={openIndex} onClose={close} onMove={move} />}
    </main>
  );
}
