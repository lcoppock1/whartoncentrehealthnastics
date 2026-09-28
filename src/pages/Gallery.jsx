import { useState, useEffect } from 'react';
import { PlayCircle, ArrowRight, X } from 'lucide-react';
import { supabase } from '../supabaseClient';

// Photo/video archive loaded from Supabase. Rebuilt in ROADMAP Phase 4.
export default function Gallery() {
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

        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <h1 className="font-['Archivo_Black'] text-7xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-8">
              The <br /><span className="text-red">Archives.</span>
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-black/40 border-l-2 border-black/10 pl-8">
              Verified Operational Records //
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-24 border-b border-black/5 pb-8">
          {['gymnastics', 'civics', 'cadets', 'events'].map(id => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveFolder(id)}
              className={`px-8 py-3 font-mono text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full ${
                activeFolder === id
                ? 'bg-gold text-black scale-105 shadow-lg'
                : 'bg-transparent text-black/30 hover:text-black'
              }`}
            >
              {id}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="h-96 flex flex-col items-center justify-center gap-6">
            <div className="w-12 h-12 border-4 border-black/10 border-t-red rounded-full animate-spin"></div>
            <span className="font-mono text-[10px] uppercase tracking-[1em] text-black/40">Syncing_Nodes...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {content.map((item, index) => {
              const isVideo = item.media_url?.toLowerCase().endsWith('.mov') || item.media_url?.toLowerCase().endsWith('.mp4');
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col bg-white border border-black/[0.03] hover:border-black/10 transition-all duration-700 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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

                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white font-mono text-[8px] uppercase tracking-[0.3em] z-10">
                      {isVideo ? 'REC // MOTION' : 'DOC // STILL'}
                    </div>

                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                        <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-10 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gold font-mono text-[10px] font-black italic">MOD_{index + 1}</span>
                      <div className="h-[1px] flex-grow bg-black/5"></div>
                    </div>

                    <h2 className="font-['Archivo_Black'] text-3xl uppercase tracking-tighter leading-none mb-4 group-hover:text-red transition-colors duration-500">
                      {item.title}
                    </h2>

                    <p className="text-black/40 text-sm font-medium leading-relaxed italic pr-4">
                      {item.description}
                    </p>

                    {item.status === 'Active' && (
                      <button type="button" className="mt-10 flex items-center gap-4 font-mono text-[10px] font-black uppercase tracking-[0.4em] group/btn">
                        <span className="text-red">Get Access</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-3 transition-transform text-red" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center p-6 md:p-20 backdrop-blur-xl" onClick={() => setSelectedVideo(null)}>
          <button type="button" aria-label="Close video" className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
            <X size={40}/>
          </button>
          <video autoPlay controls className="max-w-6xl w-full aspect-video shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-white/10">
            <source src={selectedVideo} type="video/mp4"/>
          </video>
        </div>
      )}
    </main>
  );
}
