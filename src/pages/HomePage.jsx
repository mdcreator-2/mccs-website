import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ScrollReveal from '../components/ui/ScrollReveal';
import GlowButton from '../components/ui/GlowButton';
import CountdownSection from '../components/home/CountdownSection';
import CommitteeOverviewSection from '../components/home/CommitteeOverviewSection';
import HighlightsSection from '../components/home/HighlightsSection';
import useTypewriter from '../hooks/useTypewriter';
import { useLoading } from '../context/LoadingContext';

import { siteConfig } from '../data/siteConfig';

/* ═══════════════════════════════════════════════════════════════
   HomePage
   ═══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  const { isLoaded } = useLoading();

  /* ── Typewriter ── */
  const [heroReady, setHeroReady] = useState(false);
  const { displayText, cursorVisible } = useTypewriter(
    'Model Conferences and Committee Simulation',
    { speed: 45, startDelay: 200, enabled: heroReady },
  );

  /* Trigger typewriter only after loading screen clears and hero animates in */
  useEffect(() => {
    if (!isLoaded) return;
    const t = setTimeout(() => setHeroReady(true), 850);
    return () => clearTimeout(t);
  }, [isLoaded]);

  return (
    <main className="overflow-hidden">
      {/* ──────────────────── Hero Section ──────────────────── */}
      <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center justify-center bg-ink px-4 py-8 md:py-10 overflow-hidden">
        {/* Luminous Gold Global Network Map Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/images/backgrounds/Luminous%20Gold%20Global%20Network%20Map.png"
            alt=""
            aria-hidden="true"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={
              isLoaded
                ? {
                    scale: [1.01, 1.04, 1.01],
                    opacity: [0.55, 0.68, 0.55],
                  }
                : { scale: 1.08, opacity: 0 }
            }
            transition={{
              scale: { duration: 24, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="h-full w-full object-cover object-center select-none"
          />
        </div>

        {/* Atmospheric Depth & Vignette Overlays */}
        {/* Top fade for seamless header integration */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink via-ink/60 to-transparent z-[1]" />

        {/* Bottom fade for seamless transition to countdown section (bg-ink) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/80 to-transparent z-[1]" />

        {/* Radial focus vignette: preserves text and emblem contrast while network glows around */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 48%, rgba(15,25,35,0.4) 0%, rgba(15,25,35,0.75) 65%, #0F1923 100%)',
          }}
        />

        {/* Warm golden ambient core light radiating behind emblem */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(circle 380px at 50% 42%, rgba(184,151,106,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Diplomatic Framing: Refined corner ornaments */}
        <div className="pointer-events-none absolute top-6 left-6 md:top-8 md:left-8 z-[2] h-12 w-12 md:h-16 md:w-16 border-l border-t border-accent-gold/30">
          <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute top-6 right-6 md:top-8 md:right-8 z-[2] h-12 w-12 md:h-16 md:w-16 border-r border-t border-accent-gold/30">
          <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute bottom-6 left-6 md:bottom-8 md:left-8 z-[2] h-12 w-12 md:h-16 md:w-16 border-l border-b border-accent-gold/30">
          <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute bottom-6 right-6 md:bottom-8 md:right-8 z-[2] h-12 w-12 md:h-16 md:w-16 border-r border-b border-accent-gold/30">
          <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Gold accent rule above title */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-4 h-px w-20 origin-center bg-accent-gold/60"
          />

          {/* Golden MUN Logo — large and commanding hero emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={
              isLoaded
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.88, y: 15 }
            }
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative my-1 flex items-center justify-center"
          >
            {/* Ambient gold glow behind the emblem */}
            <div className="pointer-events-none absolute h-52 w-52 sm:h-60 sm:w-60 md:h-72 md:w-72 rounded-full bg-accent-gold/25 blur-3xl" />
            <h1 className="sr-only">MCCS 2026 — NIT Patna MUN</h1>
            <img
              src="/images/logos/Logo-mun-gold-hero.png"
              alt="NIT Patna MUN Golden Emblem"
              className="relative z-10 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 object-contain drop-shadow-[0_0_35px_rgba(184,151,106,0.45)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>

          {/* Hero Title — MUN 3.0 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
            className="mt-3 md:mt-4"
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.08em] text-[#EAD8B5] select-none [text-shadow:0_1px_2px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.8),0_8px_24px_rgba(0,0,0,0.7)]">
              MUN 3.0
            </h2>
          </motion.div>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-4 min-h-[1.75rem] flex items-center justify-center"
          >
            <span className="font-body text-base md:text-lg text-white/95 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {displayText}
            </span>
            <span
              className={`ml-1 inline-block w-[2px] h-5 bg-accent-gold align-middle transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
            />
          </motion.div>

          {/* Organized by with Expresso Club Logo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="mt-3 flex items-center justify-center gap-2.5 font-body text-sm text-white/75 tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          >
            <span>Organized by</span>
            <img
              src="/images/logos/expresso-logo.webp"
              alt="Expresso Club Logo"
              className="h-6 w-auto inline-block object-contain opacity-95 transition-opacity hover:opacity-100"
            />
            <span className="font-semibold text-white/95">Expresso Club</span>
            <span className="text-white/40">·</span>
            <span>NIT Patna</span>
          </motion.div>

          {/* Gold accent rule below text */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isLoaded ? 1 : 0 }}
            transition={{ delay: 1.15, duration: 0.5, ease: 'easeOut' }}
            className="mt-6 h-px w-16 origin-center bg-accent-gold/50"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 1.35, duration: 0.5 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-4"
          >
            {/* <GlowButton to="/committees" variant="gold">
              Explore Committees
            </GlowButton> */}
            <GlowButton href={siteConfig.registrationUrl} variant="gold">
              Register Now
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── Countdown Timer ──────────────────── */}
      <CountdownSection />

      {/* ──────────────────── Committee Overview ──────────────────── */}
      <CommitteeOverviewSection />

      {/* ──────────────────── Highlights Section ──────────────────── */}
      <HighlightsSection />

      {/* ──────────────────── Call to Action ──────────────────── */}
      <ScrollReveal>
        <section className="relative py-24 px-4 bg-ink overflow-hidden border-t border-accent-gold/15">
          {/* Subtle gold radial warmth */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(circle 420px at 50% 50%, rgba(184,151,106,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Corner Ornaments */}
          <div className="pointer-events-none absolute top-6 left-6 z-[2] h-10 w-10 border-l border-t border-accent-gold/25">
            <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
          </div>
          <div className="pointer-events-none absolute top-6 right-6 z-[2] h-10 w-10 border-r border-t border-accent-gold/25">
            <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
          </div>
          <div className="pointer-events-none absolute bottom-6 left-6 z-[2] h-10 w-10 border-l border-b border-accent-gold/25">
            <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 z-[2] h-10 w-10 border-r border-b border-accent-gold/25">
            <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
          </div>

          <div className="mx-auto max-w-3xl text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Represent Your Nation?
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-12 bg-accent-gold/40" />
            </div>
            <p className="mt-4 mb-10 font-body text-base md:text-lg text-white/70 max-w-xl mx-auto">
              Join the most prestigious diplomatic simulation at NIT Patna. Secure your committee allotment today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlowButton href={siteConfig.registrationUrl} variant="gold">
                Register Delegation
              </GlowButton>
              <GlowButton to="/rulebook" variant="outline">
                Consult Rulebook
              </GlowButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
