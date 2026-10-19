import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Landmark, ArrowRight } from 'lucide-react';

import ScrollReveal from '../components/ui/ScrollReveal';
import GlowButton from '../components/ui/GlowButton';
import SectionHeading from '../components/ui/SectionHeading';
import useTypewriter from '../hooks/useTypewriter';
import useCountdown from '../hooks/useCountdown';

import { siteConfig } from '../data/siteConfig';

/* ───────────────────────── Constants ───────────────────────── */

const COUNTDOWN_TARGET = siteConfig.dates.unsc;

const COMMITTEES = [
  {
    key: 'unsc',
    name: siteConfig.committees.unsc.name,
    abbr: siteConfig.committees.unsc.abbreviation,
    icon: Shield,
    accentColor: '#B8976A',
    delegation: siteConfig.committees.unsc.delegationType,
    date: siteConfig.committees.unsc.date,
    totalDelegations: siteConfig.committees.unsc.totalDelegations,
    link: '/committees/unsc',
  },
  {
    key: 'aippm',
    name: siteConfig.committees.aippm.name,
    abbr: siteConfig.committees.aippm.abbreviation,
    icon: Landmark,
    accentColor: '#2D6A4F',
    delegation: siteConfig.committees.aippm.delegationType,
    date: siteConfig.committees.aippm.date,
    totalDelegations: siteConfig.committees.aippm.totalDelegations,
    link: '/committees/aippm',
  },
];

const STATS = [
  { value: '2', label: 'Committees' },
  { value: '31', label: 'Delegations' },
  { value: '2', label: 'Days' },
  { value: '100+', label: 'Delegates Expected' },
];

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
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center rounded bg-white/[0.06] px-5 py-4 min-w-[90px] md:min-w-[110px] border border-white/[0.08]">
        <span className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
          {value.split('').map((digit, i) => (
            <FlipDigit key={`${label}-${i}`} value={digit} />
          ))}
        </span>
      </div>
      <span className="mt-3 text-[11px] font-sans uppercase tracking-[0.2em] text-accent-gold/80">
        {label}
      </span>
    </div>
  );
}

/* ──────────────────── Committee Card ──────────────────── */

function CommitteeCard({ committee }) {
  const Icon = committee.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-surface p-8 transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Subtle accent line at top */}
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ backgroundColor: committee.accentColor }}
      />

      <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded bg-primary/[0.06]">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-primary mb-1 tracking-tight">
        {committee.abbr}
      </h3>
      <p className="font-body text-text-secondary text-sm mb-5">{committee.name}</p>
      <ul className="space-y-2.5 text-sm font-body text-text-secondary mb-7">
        <li className="flex items-center gap-2.5">
          <span className="w-1 h-1 rounded-full bg-accent-gold" />
          {committee.delegation}
        </li>
        <li className="flex items-center gap-2.5">
          <span className="w-1 h-1 rounded-full bg-accent-gold" />
          {committee.date}
        </li>
        <li className="flex items-center gap-2.5">
          <span className="w-1 h-1 rounded-full bg-accent-gold" />
          {committee.totalDelegations} Delegations
        </li>
      </ul>
      <a
        href={committee.link}
        className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-accent-gold transition-all group-hover:gap-3"
      >
        View Details
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HomePage
   ═══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  /* ── Typewriter ── */
  const [heroReady, setHeroReady] = useState(false);
  const { displayText, cursorVisible } = useTypewriter(
    'Model Conferences and Committee Simulation',
    { speed: 45, startDelay: 200, enabled: heroReady },
  );

  /* ── Countdown ── */
  const { days, hours, minutes, seconds } = useCountdown(COUNTDOWN_TARGET);

  /* Trigger typewriter after hero title animates in */
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* ──────────────────── Hero Section ──────────────────── */}
      <section className="linen-texture relative flex min-h-screen items-center justify-center bg-ink px-4">
        {/* Radial warm glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(184,151,106,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Subtle corner ornaments */}
        <div className="pointer-events-none absolute top-8 left-8 z-[2] h-16 w-16 border-l border-t border-accent-gold/20" />
        <div className="pointer-events-none absolute top-8 right-8 z-[2] h-16 w-16 border-r border-t border-accent-gold/20" />
        <div className="pointer-events-none absolute bottom-8 left-8 z-[2] h-16 w-16 border-l border-b border-accent-gold/20" />
        <div className="pointer-events-none absolute bottom-8 right-8 z-[2] h-16 w-16 border-r border-b border-accent-gold/20" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Gold accent rule above title */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6 h-px w-24 origin-center bg-accent-gold/60"
          />

          {/* MCCS Title — large and commanding */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="font-serif text-8xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-[0.12em] leading-none"
          >
            MCCS
          </motion.h1>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-5 h-8"
          >
            <span className="font-body text-base md:text-lg text-white/60 tracking-wide">
              {displayText}
            </span>
            <span
              className={`ml-0.5 inline-block w-[2px] h-5 bg-accent-gold align-middle transition-opacity duration-100 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>

          {/* Organized by */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-3 font-body text-sm text-white/40 tracking-wide"
          >
            Organized by <span className="font-semibold text-white/60">Expresso Club</span>,
            NIT Patna
          </motion.p>

          {/* Gold accent rule below text */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.6, ease: 'easeOut' }}
            className="mt-8 h-px w-16 origin-center bg-accent-gold/40"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <GlowButton to="/committees/unsc" variant="gold">
              Explore Committees
            </GlowButton>
            <GlowButton href={siteConfig.registrationUrl} variant="outline">
              Register Now
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── Countdown Timer ──────────────────── */}
      <ScrollReveal>
        <section className="bg-primary py-20 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-3 font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
              The Simulation Begins In
            </h2>
            <div className="mx-auto mb-10 h-px w-12 bg-accent-gold/40" />

            <div className="flex flex-wrap items-start justify-center gap-4 md:gap-8">
              <CountdownBox value={days} label="Days" />
              <CountdownBox value={hours} label="Hours" />
              <CountdownBox value={minutes} label="Minutes" />
              <CountdownBox value={seconds} label="Seconds" />
            </div>

            {/* Event dates & Venue */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 font-body text-sm text-white/50">
              <span>31 Oct — UNSC</span>
              <span className="h-3 w-px bg-accent-gold/40" />
              <span>1 Nov — AIPPM</span>
              <span className="h-3 w-px bg-accent-gold/40" />
              <span>{siteConfig.venue}</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────── Event Overview Cards ──────────────────── */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-background paper-texture">
          <div className="mx-auto max-w-5xl relative z-10">
            <SectionHeading
              title="Two Committees, One Experience"
              subtitle="Choose your arena — global diplomacy or national politics."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COMMITTEES.map((c, i) => (
                <ScrollReveal
                  key={c.key}
                  direction={i === 0 ? 'left' : 'right'}
                  delay={i * 0.15}
                >
                  <CommitteeCard committee={c} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────── Highlights Bar ──────────────────── */}
      <section className="bg-ink py-20 px-4">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} direction="up" delay={i * 0.1}>
              <div>
                <span className="font-serif text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-accent-gold/70">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ──────────────────── Call to Action ──────────────────── */}
      <ScrollReveal>
        <section className="relative py-24 px-4 bg-background paper-texture overflow-hidden">
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <h2 className="mb-4 font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
              Ready to Represent Your Nation?
            </h2>
            <div className="mx-auto mt-4 mb-6 h-px w-16 bg-accent-gold/50" />
            <p className="mb-10 font-body text-lg text-text-secondary">
              Join the most prestigious diplomatic simulation at NIT Patna
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlowButton href={siteConfig.registrationUrl} variant="gold">
                Register Now
              </GlowButton>
              <GlowButton to="/rulebook" variant="primary">
                View Rulebook
              </GlowButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
