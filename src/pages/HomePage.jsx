import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Landmark } from 'lucide-react';

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
    borderColor: 'border-accent-gold',
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
    borderColor: 'border-success',
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
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlipping(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlipping(false);
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
    <div className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl p-6 min-w-[100px]">
      <span className="text-5xl md:text-6xl font-bold font-mono text-white tracking-tight">
        {value.split('').map((digit, i) => (
          <FlipDigit key={`${label}-${i}`} value={digit} />
        ))}
      </span>
      <span className="mt-2 text-sm uppercase tracking-widest text-white/70">
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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-surface rounded-2xl border border-border border-l-4 ${committee.borderColor} p-8 hover:shadow-xl transition-shadow`}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-primary mb-1">
        {committee.abbr}
      </h3>
      <p className="text-text-secondary text-sm mb-4">{committee.name}</p>
      <ul className="space-y-2 text-sm text-text-secondary mb-6">
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          {committee.delegation}
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          {committee.date}
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          {committee.totalDelegations} Delegations
        </li>
      </ul>
      <GlowButton
        to={committee.link}
        variant="outline"
        className="!px-5 !py-2 !text-accent-gold !border-accent-gold hover:!bg-accent-gold/5 text-sm"
      >
        View Details →
      </GlowButton>
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
      <section
        className="relative flex min-h-screen items-center justify-center px-4"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(250,250,248,1) 0%, rgba(245,245,240,1) 100%),
            linear-gradient(rgba(27,58,92,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27,58,92,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      >
        {/* Subtle radial overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, transparent 30%, rgba(27,58,92,0.02) 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* MCCS Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-primary tracking-[0.15em]"
          >
            MCCS
          </motion.h1>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 h-8"
          >
            <span className="font-sans text-lg md:text-xl text-text-secondary">
              {displayText}
            </span>
            <span
              className={`ml-0.5 inline-block w-[2px] h-5 bg-text-secondary align-middle transition-opacity duration-100 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>

          {/* Organized by */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-3 text-sm text-text-secondary/70 tracking-wide"
          >
            Organized by <span className="font-semibold">Expresso Club</span>,
            NIT Patna
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <GlowButton to="/committees/unsc" variant="primary">
              Explore Committees
            </GlowButton>
            <GlowButton href={siteConfig.registrationUrl} variant="gold">
              Register Now
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── Countdown Timer ──────────────────── */}
      <ScrollReveal>
        <section className="bg-primary py-20 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-10 font-serif text-3xl md:text-4xl font-bold text-white">
              The Simulation Begins In
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <CountdownBox value={days} label="Days" />
              <CountdownBox value={hours} label="Hours" />
              <CountdownBox value={minutes} label="Minutes" />
              <CountdownBox value={seconds} label="Seconds" />
            </div>

            {/* Event dates & Venue */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
              <span>31 Oct — UNSC</span>
              <span className="h-4 w-px bg-accent-gold" />
              <span>1 Nov — AIPPM</span>
              <span className="h-4 w-px bg-accent-gold" />
              <span>{siteConfig.venue}</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────── Event Overview Cards ──────────────────── */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-background">
          <div className="mx-auto max-w-5xl">
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
      <section className="bg-primary/5 py-20 px-4">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} direction="up" delay={i * 0.1}>
              <div>
                <span className="font-serif text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <p className="mt-1 text-sm text-text-secondary">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ──────────────────── Call to Action ──────────────────── */}
      <ScrollReveal>
        <section
          className="py-24 px-4"
          style={{
            background: 'linear-gradient(135deg, #1B3A5C 0%, #2E5D8C 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl md:text-5xl font-bold text-white">
              Ready to Represent Your Nation?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Join the most prestigious diplomatic simulation at NIT Patna
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlowButton href={siteConfig.registrationUrl} variant="gold">
                Register Now
              </GlowButton>
              <GlowButton
                to="/rulebook"
                variant="outline"
                className="!border-white !text-white hover:!bg-white/10"
              >
                View Rulebook
              </GlowButton>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
