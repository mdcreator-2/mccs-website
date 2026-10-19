import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Tag, Maximize2, X } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

const CATEGORIES = ['All', 'Deliberation', 'Executive Board', 'Ceremonies'];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'General Speakers List in Session',
    edition: 'MUN 2025',
    category: 'Deliberation',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Delegates delivering formal policy statements during the opening council session.',
  },
  {
    id: 2,
    title: 'The Executive Board in Deliberation',
    edition: 'MUN 2025',
    category: 'Executive Board',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Committee dais and executive board moderating moderated caucus debate and point of orders.',
  },
  {
    id: 3,
    title: 'Unmoderated Caucus & Lobbying',
    edition: 'MUN 2025',
    category: 'Deliberation',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bloc formulation, bilateral consultations, and draft resolution negotiations among delegates.',
  },
  {
    id: 4,
    title: 'Closing Plenary & Awards Felicitation',
    edition: 'MUN 2025',
    category: 'Ceremonies',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    caption: 'Felicitation of best delegates, high commendations, and honorable mentions at NIT Patna.',
  },
  {
    id: 5,
    title: 'Diplomatic Working Papers Review',
    edition: 'MUN 2025',
    category: 'Deliberation',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    caption: 'Scrutinizing draft resolutions, clauses, and amendments with the conference secretariat.',
  },
  {
    id: 6,
    title: 'Opening Plenary Gathering',
    edition: 'MUN 2025',
    category: 'Ceremonies',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Keynote address welcoming dignitaries and delegates to the National Institute of Technology Patna.',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 15%, rgba(184,151,106,0.08) 0%, transparent 80%)',
        }}
      />

      {/* Diplomatic Corner Ornaments */}
      <div className="pointer-events-none absolute top-6 left-6 z-[2] h-10 w-10 border-l border-t border-accent-gold/20">
        <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>
      <div className="pointer-events-none absolute top-6 right-6 z-[2] h-10 w-10 border-r border-t border-accent-gold/20">
        <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <SectionHeading
            light
            title="Diplomatic Archives &amp; Gallery"
            subtitle="Visual chronicles of debate, multilateral negotiations, and statesmanship from previous editions at NIT Patna."
          />
        </ScrollReveal>

        {/* Archival Status Notice */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mb-12 max-w-3xl rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-5 text-center backdrop-blur-sm shadow-lg relative">
            <span className="pointer-events-none absolute top-2 left-2 h-1 w-1 rounded-full bg-accent-gold/30" />
            <span className="pointer-events-none absolute top-2 right-2 h-1 w-1 rounded-full bg-accent-gold/30" />
            <div className="inline-flex items-center gap-2 font-sans font-semibold text-accent-gold text-xs uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
              <Sparkles size={13} />
              <span>Historical Archive &amp; Live Bulletin</span>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
              Featuring curated photography from our previous conference. High-resolution photos and video highlights for <strong>MCCS 2026</strong> will be updated live here during the event on 31 October &amp; 1 November 2026.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-sans uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-accent-gold text-ink font-bold border-accent-gold shadow-[0_2px_12px_rgba(184,151,106,0.35)]'
                  : 'bg-[#121E2A] text-white/70 border-accent-gold/20 hover:border-accent-gold/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Exhibition Photos */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent-gold/20 bg-[#121E2A]/90 transition-all duration-300 hover:border-accent-gold/60 hover:bg-[#152332] hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                {/* Corner pips */}
                <span className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-1 w-1 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold/70 transition-colors" />
                <span className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-1 w-1 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold/70 transition-colors" />

                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 flex gap-2 z-10">
                    <span className="flex items-center gap-1 rounded bg-[#0F1923]/80 px-2.5 py-1 text-[11px] font-sans font-semibold text-white/90 border border-white/10 backdrop-blur-sm">
                      <Calendar size={11} className="text-accent-gold" />
                      {item.edition}
                    </span>
                    <span className="flex items-center gap-1 rounded bg-accent-gold/90 px-2.5 py-1 text-[11px] font-sans font-bold text-ink backdrop-blur-sm">
                      <Tag size={11} />
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 border border-white/20">
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-accent-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-xs leading-relaxed text-white/70">
                      {item.caption}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-accent-gold/80">
                    <span>Archival Record</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">Inspect Photo &rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ───── Interactive Lightbox Modal ───── */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full overflow-hidden rounded-2xl border border-accent-gold/30 bg-[#121E2A] p-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent-gold/30 bg-ink/80 text-accent-gold hover:bg-accent-gold hover:text-ink transition-all"
              >
                <X size={18} />
              </button>

              {/* Photo */}
              <div className="overflow-hidden rounded-lg aspect-[16/10] bg-black/60 relative">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Photo Details */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded bg-accent-gold/15 px-2.5 py-0.5 text-xs font-sans font-semibold text-accent-gold border border-accent-gold/25">
                    {selectedPhoto.edition}
                  </span>
                  <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs font-sans font-medium text-white/80 border border-white/10">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 font-body text-sm text-white/70 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
