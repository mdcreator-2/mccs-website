import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Grid3X3,
  Film,
  Download,
  Layers,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { galleryPhotos } from '../data/gallery';

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'theater'
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [theaterIndex, setTheaterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  const theaterTimerRef = useRef(null);
  const filmstripRef = useRef(null);
  const lightboxFilmstripRef = useRef(null);

  const allPhotos = galleryPhotos;

  // Slideshow timer for Theater mode
  useEffect(() => {
    if (isPlaying && viewMode === 'theater') {
      theaterTimerRef.current = setInterval(() => {
        setTheaterIndex((prev) => (prev + 1) % allPhotos.length);
      }, 4000);
    } else {
      clearInterval(theaterTimerRef.current);
    }
    return () => clearInterval(theaterTimerRef.current);
  }, [isPlaying, viewMode, allPhotos.length]);

  // Keyboard navigation for Lightbox and Theater
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
        }
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) =>
            prev === 0 ? allPhotos.length - 1 : prev - 1
          );
        }
      } else if (viewMode === 'theater') {
        if (e.key === 'ArrowRight') {
          setTheaterIndex((prev) => (prev + 1) % allPhotos.length);
        }
        if (e.key === 'ArrowLeft') {
          setTheaterIndex((prev) =>
            prev === 0 ? allPhotos.length - 1 : prev - 1
          );
        }
      }
    },
    [lightboxIndex, viewMode, allPhotos.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Scroll active thumbnail into view in Theater filmstrip
  useEffect(() => {
    if (filmstripRef.current && viewMode === 'theater') {
      const activeThumb = filmstripRef.current.children[theaterIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [theaterIndex, viewMode]);

  // Scroll active thumbnail into view in Lightbox filmstrip
  useEffect(() => {
    if (lightboxFilmstripRef.current && lightboxIndex !== null) {
      const activeThumb = lightboxFilmstripRef.current.children[lightboxIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [lightboxIndex]);

  const currentTheaterPhoto = allPhotos[theaterIndex] || allPhotos[0];
  const currentLightboxPhoto =
    lightboxIndex !== null ? allPhotos[lightboxIndex] : null;

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
          <div className="mx-auto mb-10 max-w-3xl rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-5 text-center backdrop-blur-sm shadow-lg relative">
            <span className="pointer-events-none absolute top-2 left-2 h-1 w-1 rounded-full bg-accent-gold/30" />
            <span className="pointer-events-none absolute top-2 right-2 h-1 w-1 rounded-full bg-accent-gold/30" />
            <div className="inline-flex items-center gap-2 font-sans font-semibold text-accent-gold text-xs uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
              <Sparkles size={13} />
              <span>Historical Archive · NIT Patna MUN 2025</span>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
              Presenting 50 authentic archival plates from the previous MUN edition at NIT Patna. Experience the diplomacy, floor caucuses, dais decorum, and plenary awards.
            </p>
          </div>
        </ScrollReveal>

        {/* ───── Controls Bar: View Mode Switcher & Counter ───── */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-accent-gold/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-wider text-accent-gold/90 bg-accent-gold/10 px-3 py-1.5 rounded-lg border border-accent-gold/20">
              50 Archival Plates · 35mm DSLR Collection
            </span>
          </div>

          {/* View Mode Segmented Controls */}
          <div className="flex items-center gap-2 bg-[#0F1923] p-1.5 rounded-xl border border-accent-gold/20 shadow-inner">
            <button
              onClick={() => setViewMode('gallery')}
              title="Exhibition Gallery Wall"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans transition-all ${
                viewMode === 'gallery'
                  ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/40 font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Grid3X3 size={14} />
              <span>Exhibition Wall</span>
            </button>

            <button
              onClick={() => setViewMode('theater')}
              title="Cinema Theater View"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans transition-all ${
                viewMode === 'theater'
                  ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/40 font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Film size={14} />
              <span>Cinema Theater</span>
            </button>
          </div>
        </div>

        {/* ───── VIEW 1: CINEMA THEATER MODE ───── */}
        {viewMode === 'theater' && currentTheaterPhoto && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl border border-accent-gold/30 bg-[#0B1520] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              {/* Corner Registration Ornaments */}
              <span className="pointer-events-none absolute top-3 left-3 z-20 h-2 w-2 border-l border-t border-accent-gold/50" />
              <span className="pointer-events-none absolute top-3 right-3 z-20 h-2 w-2 border-r border-t border-accent-gold/50" />
              <span className="pointer-events-none absolute bottom-3 left-3 z-20 h-2 w-2 border-l border-b border-accent-gold/50" />
              <span className="pointer-events-none absolute bottom-3 right-3 z-20 h-2 w-2 border-r border-b border-accent-gold/50" />

              {/* Main Theater Projection Screen */}
              <div
                className="relative aspect-[16/9] md:aspect-[21/10] w-full bg-black/80 cursor-pointer overflow-hidden group"
                onClick={() => setLightboxIndex(theaterIndex)}
              >
                <img
                  src={currentTheaterPhoto.image}
                  alt={currentTheaterPhoto.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F18] via-transparent to-transparent opacity-80" />

                {/* Top Corner Archival Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="rounded bg-black/60 px-3 py-1 text-xs font-mono font-medium text-accent-gold border border-accent-gold/30 backdrop-blur-md">
                    PLATE {currentTheaterPhoto.number} / {allPhotos.length}
                  </span>
                </div>

                {/* Bottom Bar Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-widest text-accent-gold block">
                      NIT Patna MUN 2025 Archive · 35mm Digital Plate {currentTheaterPhoto.number} of {allPhotos.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(theaterIndex);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-accent-gold text-ink px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#D4B37F] transition-colors shadow-lg"
                    >
                      <Maximize2 size={13} />
                      <span>Inspect Fullscreen</span>
                    </button>
                  </div>
                </div>

                {/* Theater Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTheaterIndex((prev) =>
                      prev === 0 ? allPhotos.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white/90 hover:bg-accent-gold hover:text-ink hover:border-accent-gold transition-all backdrop-blur-md"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTheaterIndex((prev) => (prev + 1) % allPhotos.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white/90 hover:bg-accent-gold hover:text-ink hover:border-accent-gold transition-all backdrop-blur-md"
                  aria-label="Next photograph"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Theater Lower Scrubber & Filmstrip Controls */}
              <div className="border-t border-accent-gold/20 bg-[#0F1923] p-4">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-sans font-semibold border transition-all ${
                        isPlaying
                          ? 'border-accent-gold bg-accent-gold text-ink'
                          : 'border-white/20 bg-white/5 text-white/80 hover:border-accent-gold/40'
                      }`}
                    >
                      {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                      <span>{isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}</span>
                    </button>
                    <span className="font-sans text-xs text-white/50 hidden sm:inline">
                      Use Arrow Keys ← → to navigate
                    </span>
                  </div>

                  <span className="font-mono text-xs text-accent-gold">
                    {theaterIndex + 1} / {allPhotos.length}
                  </span>
                </div>

                {/* Horizontal Filmstrip Scrubber */}
                <div
                  ref={filmstripRef}
                  className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-accent-gold/20 scrollbar-track-transparent"
                >
                  {allPhotos.map((photo, idx) => {
                    const isCurrent = idx === theaterIndex;
                    return (
                      <button
                        key={photo.id}
                        onClick={() => setTheaterIndex(idx)}
                        className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md transition-all duration-200 border ${
                          isCurrent
                            ? 'border-accent-gold ring-2 ring-accent-gold/40 scale-105 z-10'
                            : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={photo.thumb}
                          alt={photo.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-0.5 right-1 font-mono text-[9px] text-white/90 bg-black/70 px-1 rounded">
                          {photo.number}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ───── VIEW 2: SEAMLESS EXHIBITION GALLERY WALL (GAP-FREE) ───── */}
        {viewMode === 'gallery' && (
          <div className="mb-16">
            {/* Perfectly uniform 3:2 landscape grid with zero awkward row-height gaps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {allPhotos.slice(0, visibleCount).map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (idx % 8) * 0.02 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-accent-gold/25 bg-[#0F1923] shadow-md cursor-pointer transition-all duration-300 hover:border-accent-gold/70 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
                >
                  {/* Corner Registration Marks */}
                  <span className="pointer-events-none absolute top-2 left-2 z-20 h-1.5 w-1.5 border-l border-t border-accent-gold/40 group-hover:border-accent-gold transition-colors" />
                  <span className="pointer-events-none absolute top-2 right-2 z-20 h-1.5 w-1.5 border-r border-t border-accent-gold/40 group-hover:border-accent-gold transition-colors" />
                  <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-1.5 w-1.5 border-l border-b border-accent-gold/40 group-hover:border-accent-gold transition-colors" />
                  <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-1.5 w-1.5 border-r border-b border-accent-gold/40 group-hover:border-accent-gold transition-colors" />

                  {/* Image */}
                  <img
                    src={photo.thumb}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Subtle Permanent Accession Tag (bottom right) */}
                  <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
                    <span className="font-mono text-[10px] tracking-wider text-accent-gold/90 bg-ink/75 backdrop-blur-sm px-2 py-0.5 rounded border border-accent-gold/20 shadow">
                      № {photo.number}
                    </span>
                  </div>

                  {/* Hover Reveal: Clean Vignette & Inspect Button (No text title) */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                    <span className="flex items-center gap-2 rounded-full border border-accent-gold/40 bg-ink/85 px-4 py-2 text-xs font-sans font-medium text-accent-gold shadow-xl transition-transform duration-300 group-hover:scale-105">
                      <Maximize2 size={13} />
                      <span>View Plate</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ───── Progressive Load More / Expand Full Archive ───── */}
        {viewMode !== 'theater' && visibleCount < allPhotos.length && (
          <div className="text-center mb-16">
            <button
              onClick={() => setVisibleCount(allPhotos.length)}
              className="inline-flex items-center gap-2 rounded-full border border-accent-gold/40 bg-[#121E2A] px-7 py-3 text-xs font-sans font-bold uppercase tracking-wider text-accent-gold hover:border-accent-gold hover:bg-accent-gold hover:text-ink transition-all duration-300 shadow-lg"
            >
              <Layers size={14} />
              <span>
                Reveal All {allPhotos.length} Archival Plates ({allPhotos.length - visibleCount} Remaining)
              </span>
            </button>
            <p className="mt-2 text-xs font-sans text-white/50">
              Showing {visibleCount} of {allPhotos.length} archival plates
            </p>
          </div>
        )}
      </div>

      {/* ───── WORLD-CLASS IMMERSIVE LIGHTBOX MODAL ───── */}
      <AnimatePresence>
        {currentLightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070F18]/95 p-3 sm:p-6 backdrop-blur-xl"
          >
            {/* Top Bar: Archival Index & Actions (Clean, no irrelevant tags) */}
            <div
              className="flex items-center justify-between border-b border-accent-gold/20 pb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-accent-gold tracking-widest bg-accent-gold/10 px-2.5 py-1 rounded border border-accent-gold/20">
                  PLATE {currentLightboxPhoto.number} / {allPhotos.length}
                </span>
                <span className="hidden sm:inline-block font-sans text-xs text-white/50">
                  NIT Patna MUN 2025 Edition
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentLightboxPhoto.image}
                  download={currentLightboxPhoto.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open original high-resolution photo"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 hover:bg-accent-gold hover:text-ink hover:border-accent-gold transition-colors"
                >
                  <Download size={15} />
                </a>

                <button
                  onClick={() => setLightboxIndex(null)}
                  title="Close (Esc)"
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-gold/40 bg-accent-gold/10 text-accent-gold hover:bg-accent-gold hover:text-ink transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Center Stage: Full Photograph & Navigation */}
            <div
              className="relative my-auto flex items-center justify-center overflow-hidden py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === 0 ? allPhotos.length - 1 : prev - 1
                  )
                }
                className="absolute left-2 sm:left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-white/90 hover:bg-accent-gold hover:text-ink hover:border-accent-gold transition-all backdrop-blur-md shadow-xl"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={24} />
              </button>

              {/* High-Resolution Photo */}
              <div className="max-h-[70vh] sm:max-h-[75vh] max-w-5xl overflow-hidden rounded-xl border border-accent-gold/30 bg-black/60 shadow-2xl relative">
                <img
                  key={currentLightboxPhoto.id}
                  src={currentLightboxPhoto.image}
                  alt={currentLightboxPhoto.title}
                  className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev + 1) % allPhotos.length)
                }
                className="absolute right-2 sm:right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink/80 text-white/90 hover:bg-accent-gold hover:text-ink hover:border-accent-gold transition-all backdrop-blur-md shadow-xl"
                aria-label="Next photograph"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Bar: Metadata & Scrollable Filmstrip Scrubber */}
            <div
              className="border-t border-accent-gold/20 pt-3 flex flex-col gap-2.5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-mono text-xs text-accent-gold tracking-wider">
                  NIT Patna MUN 2025 · Archival Plate {currentLightboxPhoto.number} / {allPhotos.length}
                </span>
                <span className="font-sans text-xs text-white/50">
                  Use ← and → arrow keys to navigate
                </span>
              </div>

              {/* Filmstrip Scrubber */}
              <div
                ref={lightboxFilmstripRef}
                className="flex gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-accent-gold/30 scrollbar-track-transparent"
              >
                {allPhotos.map((photo, idx) => {
                  const isActive = idx === lightboxIndex;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded transition-all duration-200 border ${
                        isActive
                          ? 'border-accent-gold ring-2 ring-accent-gold/50 scale-105 z-10'
                          : 'border-white/10 opacity-40 hover:opacity-100 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={photo.thumb}
                        alt={photo.title}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-0.5 right-0.5 font-mono text-[8px] text-white/90 bg-black/80 px-1 rounded">
                        {photo.number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
