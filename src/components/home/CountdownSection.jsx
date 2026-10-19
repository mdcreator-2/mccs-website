import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

import ScrollReveal from '../ui/ScrollReveal';
import useCountdown from '../../hooks/useCountdown';
import { siteConfig } from '../../data/siteConfig';

const COUNTDOWN_TARGET = siteConfig.dates.unsc;

/* ──────────────────── Flip Digit Component ──────────────────── */

function FlipDigit({ value }) {
  const [prev, setPrev] = useState(value);

  useEffect(() => {
    if (value !== prev) {
      const t = setTimeout(() => {
        setPrev(value);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-block"
          style={{ perspective: 600 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ──────────────────── Countdown Box ──────────────────── */

function CountdownBox({ value, label }) {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Outer chronometer frame */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-accent-gold/30 bg-primary-dark/85 px-4 py-5 sm:px-6 sm:py-6 min-w-[85px] sm:min-w-[110px] md:min-w-[130px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 group-hover:border-accent-gold/60 group-hover:shadow-[0_12px_35px_rgba(184,151,106,0.18)]">
        {/* Subtle top accent hairline */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-80" />

        {/* Faint split line across center for split-flap / chronograph feel */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/[0.07] -translate-y-1/2" />

        {/* Subtle inner corner pips */}
        <span className="pointer-events-none absolute top-1.5 left-1.5 h-1 w-1 rounded-full bg-accent-gold/30" />
        <span className="pointer-events-none absolute top-1.5 right-1.5 h-1 w-1 rounded-full bg-accent-gold/30" />
        <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-1 w-1 rounded-full bg-accent-gold/30" />
        <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-1 w-1 rounded-full bg-accent-gold/30" />

        {/* Digit display */}
        <span className="relative z-10 font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(184,151,106,0.35)]">
          {value.split('').map((digit, i) => (
            <FlipDigit key={`${label}-${i}`} value={digit} />
          ))}
        </span>
      </div>

      {/* Label */}
      <span className="mt-3.5 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-accent-gold/90 transition-colors group-hover:text-accent-gold">
        {label}
      </span>
    </div>
  );
}

/* ──────────────────── Countdown Section ──────────────────── */

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(COUNTDOWN_TARGET);

  return (
    <ScrollReveal>
      <section
        id="countdown"
        className="relative bg-ink py-24 px-4 overflow-hidden border-t border-b border-accent-gold/20"
      >
        {/* Ambient warm radial glow centered on the clock */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,151,106,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Corner diplomatic brackets */}
        <div className="pointer-events-none absolute top-6 left-6 md:top-8 md:left-8 z-[2] h-12 w-12 border-l border-t border-accent-gold/30">
          <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute top-6 right-6 md:top-8 md:right-8 z-[2] h-12 w-12 border-r border-t border-accent-gold/30">
          <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute bottom-6 left-6 md:bottom-8 md:left-8 z-[2] h-12 w-12 border-l border-b border-accent-gold/30">
          <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute bottom-6 right-6 md:bottom-8 md:right-8 z-[2] h-12 w-12 border-r border-b border-accent-gold/30">
          <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Gold accent rule above title */}
          <div className="mx-auto mb-4 h-px w-20 bg-accent-gold/60" />

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            The Simulation Begins In
          </h2>

          <p className="mt-3 font-body text-base md:text-lg text-white/75 max-w-xl mx-auto">
            Two days of high-stakes multilateral diplomacy and parliamentary debate at NIT Patna.
          </p>

          <div className="mx-auto mt-6 mb-12 h-px w-16 bg-accent-gold/50" />

          {/* Countdown Chronometer */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <CountdownBox value={days} label="Days" />
            <span className="hidden sm:inline-block text-2xl md:text-3xl font-serif text-accent-gold/50 -mt-7 select-none">
              :
            </span>
            <CountdownBox value={hours} label="Hours" />
            <span className="hidden sm:inline-block text-2xl md:text-3xl font-serif text-accent-gold/50 -mt-7 select-none">
              :
            </span>
            <CountdownBox value={minutes} label="Minutes" />
            <span className="hidden sm:inline-block text-2xl md:text-3xl font-serif text-accent-gold/50 -mt-7 select-none">
              :
            </span>
            <CountdownBox value={seconds} label="Seconds" />
          </div>

          {/* Event Schedule & Venue Badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-sans text-xs sm:text-sm">
            <div className="flex items-center gap-2 rounded-full border border-accent-gold/30 bg-primary-dark/70 px-4 py-2 text-white/90 backdrop-blur-sm shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold animate-pulse" />
              <span className="font-semibold text-accent-gold">UNSC:</span>
              <span>31 Oct 2026</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-accent-gold/30 bg-primary-dark/70 px-4 py-2 text-white/90 backdrop-blur-sm shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-accent-gold">AIPPM:</span>
              <span>1 Nov 2026</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-primary-dark/70 px-4 py-2 text-white/80 backdrop-blur-sm shadow-sm">
              <MapPin size={14} className="text-accent-gold" />
              <span>{siteConfig.venue}</span>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
