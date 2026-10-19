import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Tag } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

const CATEGORIES = ['All', 'Deliberation', 'Executive Board', 'Ceremonies'];

// Curated high-resolution placeholder photos representing previous edition's MUN conference
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'General Speakers List in Session',
    edition: 'MUN 2025',
    category: 'Deliberation',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Delegates delivering speeches during the opening council session.',
  },
  {
    id: 2,
    title: 'The Executive Board in Deliberation',
    edition: 'MUN 2025',
    category: 'Executive Board',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Committee dais moderating the moderated caucus discussion.',
  },
  {
    id: 3,
    title: 'Unmoderated Caucus & Lobbying',
    edition: 'MUN 2025',
    category: 'Deliberation',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bloc formulation and draft resolution negotiations among delegates.',
  },
  {
    id: 4,
    title: 'Closing Ceremony & Awards',
    edition: 'MUN 2025',
    category: 'Ceremonies',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    caption: 'Felicitation of best delegates and honorable mentions at NIT Patna.',
  },
  {
    id: 5,
    title: 'Diplomatic Working Papers Review',
    edition: 'MUN 2025',
    category: 'Deliberation',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    caption: 'Reviewing amendments and council documentation with the secretariat.',
  },
  {
    id: 6,
    title: 'Opening Plenary Gathering',
    edition: 'MUN 2025',
    category: 'Ceremonies',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Address by the Secretary General welcoming delegates to NIT Patna.',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 paper-texture">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <SectionHeading
            title="Conference Gallery"
            subtitle="Relive memorable moments of debate, diplomacy, and camaraderie from previous editions at NIT Patna."
          />
        </ScrollReveal>

        {/* Live notice banner */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mb-12 max-w-3xl rounded-lg border border-accent-gold/30 bg-accent-gold/[0.06] p-5 text-center">
            <div className="flex items-center justify-center gap-2 font-sans font-semibold text-accent-gold text-xs uppercase tracking-[0.2em]">
              <Sparkles size={14} />
              <span>Previous Edition Highlights</span>
            </div>
            <p className="mt-2 font-body text-sm text-text-secondary">
              Featuring highlights from last year&apos;s MUN. Photographs and video highlights for <strong>MCCS 2026</strong> will be updated live here during the event (31 Oct &amp; 1 Nov 2026).
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded px-5 py-2 text-sm font-sans font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text-secondary border border-border hover:border-accent-gold/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Photos */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="flex items-center gap-1 rounded bg-ink/70 px-3 py-1 text-[11px] font-sans font-semibold text-white backdrop-blur-sm">
                      <Calendar size={11} />
                      {item.edition}
                    </span>
                    <span className="flex items-center gap-1 rounded bg-accent-gold/90 px-3 py-1 text-[11px] font-sans font-semibold text-primary-dark backdrop-blur-sm">
                      <Tag size={11} />
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
