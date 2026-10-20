import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLoading } from '../../context/LoadingContext';

const CRITICAL_IMAGES = [
  '/images/backgrounds/Luminous%20Gold%20Global%20Network%20Map.png',
  '/images/logos/Logo-mun-gold-hero.png',
  '/images/logos/Logo-mun-gold.png',
  '/images/logos/Logo-mun-white.png',
  '/images/logos/nitp-logo.png',
  '/images/logos/expresso-logo.webp',
];

const STATUS_MESSAGES = [
  { threshold: 0, text: 'Initializing diplomatic chambers...' },
  { threshold: 25, text: 'Loading council archives & global maps...' },
  { threshold: 60, text: 'Preparing Rules of Procedure & rosters...' },
  { threshold: 88, text: 'Convening the Assembly...' },
  { threshold: 100, text: 'Chambers ready. Welcome delegates.' },
];

export default function LoadingScreen() {
  const { setIsLoaded } = useLoading();
  const [progress, setProgress] = useState(0);
  const [showScreen, setShowScreen] = useState(true);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const totalAssets = CRITICAL_IMAGES.length + 1; // +1 for fonts

    // Track asset completions
    const updateProgress = () => {
      loadedCount++;
      const pct = Math.min(100, Math.round((loadedCount / totalAssets) * 100));
      targetProgressRef.current = pct;
    };

    // Preload critical images with decode
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        if ('decode' in img) {
          img.decode().then(updateProgress).catch(updateProgress);
        } else {
          updateProgress();
        }
      } else {
        img.onload = () => {
          if ('decode' in img) {
            img.decode().then(updateProgress).catch(updateProgress);
          } else {
            updateProgress();
          }
        };
        img.onerror = () => updateProgress();
      }
    });

    // Check fonts ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateProgress).catch(updateProgress);
    } else {
      updateProgress();
    }

    // Safety fallback: force 100% after 4.5 seconds under slow network
    const fallbackTimer = setTimeout(() => {
      targetProgressRef.current = 100;
    }, 4500);

    // Smooth progress interpolation ticker (min animation duration ~1.4s)
    const interval = setInterval(() => {
      if (!isMounted) return;

      setProgress((prev) => {
        // Natural step toward targetProgress
        const target = targetProgressRef.current;
        let step = (target - prev) * 0.18 + 0.8;
        if (target === 100 && prev > 85) {
          step = (target - prev) * 0.25 + 1.2;
        }
        const next = Math.min(100, prev + step);

        if (next >= 99.5 && target === 100) {
          clearInterval(interval);
          // Allow delegate to absorb 100% state briefly before fade-out
          setTimeout(() => {
            if (isMounted) setShowScreen(false);
          }, 320);
          return 100;
        }
        return next;
      });
    }, 25);

    return () => {
      isMounted = false;
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Determine current status message
  const currentStatus =
    [...STATUS_MESSAGES].reverse().find((m) => progress >= m.threshold)?.text ||
    STATUS_MESSAGES[0].text;

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsLoaded(true);
      }}
    >
      {showScreen && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(8px)',
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B131D] text-white px-6 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading NIT Patna MUN 2026"
        >
          {/* Deep Ambient Background Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(circle 420px at 50% 48%, rgba(184,151,106,0.14) 0%, rgba(15,25,35,0.7) 60%, #0B131D 100%)',
            }}
          />

          {/* Diplomatic Corner Framing Ornaments */}
          <div className="pointer-events-none absolute top-6 left-6 sm:top-8 sm:left-8 z-10 h-14 w-14 sm:h-16 sm:w-16 border-l border-t border-accent-gold/30">
            <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/60 shadow-[0_0_8px_rgba(184,151,106,0.8)]" />
          </div>
          <div className="pointer-events-none absolute top-6 right-6 sm:top-8 sm:right-8 z-10 h-14 w-14 sm:h-16 sm:w-16 border-r border-t border-accent-gold/30">
            <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/60 shadow-[0_0_8px_rgba(184,151,106,0.8)]" />
          </div>
          <div className="pointer-events-none absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 h-14 w-14 sm:h-16 sm:w-16 border-l border-b border-accent-gold/30">
            <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/60 shadow-[0_0_8px_rgba(184,151,106,0.8)]" />
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 h-14 w-14 sm:h-16 sm:w-16 border-r border-b border-accent-gold/30">
            <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/60 shadow-[0_0_8px_rgba(184,151,106,0.8)]" />
          </div>

          {/* Subtle Golden Hairline Frame */}
          <div className="pointer-events-none absolute inset-4 sm:inset-6 rounded-2xl border border-accent-gold/15" />

          {/* Central Emblem & Loading Elements */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            {/* Top Hairline Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent"
            />

            {/* Glowing Golden Emblem Container */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Radiating golden ambient aura */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-accent-gold/20 blur-2xl"
              />

              <motion.img
                src="/images/logos/Logo-mun-gold.png"
                alt="NIT Patna MUN 2026 Emblem"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative z-10 h-24 w-24 sm:h-28 sm:w-28 object-contain drop-shadow-[0_0_30px_rgba(184,151,106,0.45)]"
              />
            </div>

            {/* Conference Badge */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-accent-gold/25 bg-accent-gold/10 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold"
            >
              <Sparkles size={12} className="text-accent-gold" />
              <span>Expresso Club &bull; NIT Patna</span>
            </motion.div>

            {/* Conference Title */}
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6"
            >
              NIT PATNA MUN 2026
            </motion.h2>

            {/* Hairline Progress Bar Container */}
            <div className="w-60 sm:w-72 flex flex-col items-center">
              <div className="relative w-full h-[4px] rounded-full bg-white/10 overflow-hidden border border-accent-gold/20 backdrop-blur-sm shadow-inner mb-3">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-gold/70 via-accent-gold to-[#F2DEC0]"
                  style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 12px rgba(184,151,106,0.7)',
                  }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              {/* Progress Percentage & Status */}
              <div className="w-full flex items-center justify-between text-xs font-sans text-white/70">
                <span className="font-body italic text-white/60 truncate pr-2 text-left">
                  {currentStatus}
                </span>
                <span className="font-mono font-bold text-accent-gold shrink-0">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Bottom Hairline Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
