import { motion } from 'framer-motion';
import {
  Shield,
  Landmark,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
  Calendar,
  Layers,
  HeartHandshake,
  Shirt,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import GlowButton from '../components/ui/GlowButton';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
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

      {/* Diplomatic Framing: Corner Ornaments */}
      <div className="pointer-events-none absolute top-6 left-6 z-[2] h-12 w-12 border-l border-t border-accent-gold/25">
        <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>
      <div className="pointer-events-none absolute top-6 right-6 z-[2] h-12 w-12 border-r border-t border-accent-gold/25">
        <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-6 z-[2] h-12 w-12 border-l border-b border-accent-gold/25">
        <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>
      <div className="pointer-events-none absolute bottom-6 right-6 z-[2] h-12 w-12 border-r border-b border-accent-gold/25">
        <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ───── Page Header ───── */}
        <ScrollReveal direction="up">
          <div className="text-center mb-3">
            <span className="font-sans text-xs uppercase tracking-widest text-accent-gold font-bold px-3 py-1 rounded-full border border-accent-gold/30 bg-accent-gold/10 inline-block">
              Expresso Club &bull; NIT Patna
            </span>
          </div>
          <SectionHeading
            light
            title="NIT PATNA MUN 2026"
            subtitle="31 October and 1 November 2026 · Two Committees · Harvard Rules of Procedure"
          />
        </ScrollReveal>

        {/* ───── Introduction Banner ───── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="relative mx-auto mt-6 mb-16 max-w-4xl rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 md:p-10 backdrop-blur-sm shadow-2xl">
            {/* Top Hairline Gradient Accent */}
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: 'linear-gradient(to right, transparent, #B8976A, transparent)',
              }}
            />
            <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
            <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />

            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/30 bg-accent-gold/10 p-2 shadow-inner">
                <img
                  src="/images/logos/Logo-mun-gold.png"
                  alt="NIT Patna MUN Crest"
                  className="h-20 w-20 object-contain drop-shadow-[0_0_12px_rgba(184,151,106,0.4)]"
                />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 font-sans font-semibold text-accent-gold text-xs uppercase tracking-[0.2em] mb-2 px-3 py-0.5 rounded-full bg-accent-gold/10 border border-accent-gold/25">
                  <Sparkles size={13} />
                  <span>The Return of NIT Patna MUN</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Debate. Negotiate. Lead.
                </h3>
                <p className="mt-4 font-body text-base md:text-lg leading-relaxed text-white/90">
                  On <strong>31 October and 1 November 2026</strong>, Expresso brings back the{' '}
                  <strong>NIT Patna Model United Nations</strong>, one of our most anticipated events.
                  The conference gives students a place to debate, negotiate and lead on some of the
                  most pressing questions of our time. Debate follows the{' '}
                  <span className="text-accent-gold font-semibold">Harvard Rules of Procedure</span>, with
                  adaptations of our own.
                </p>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <span className="block font-serif text-2xl font-bold text-white">02</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">
                  Committees
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">2 Days</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">
                  31 Oct &amp; 1 Nov
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">Harvard RoP</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">
                  Adapted Base
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">No Veto</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">
                  Equal Voting Power
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ───── Two Committees (One for Each Day) ───── */}
        <div className="mb-20">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                Conference Structure
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">
                Two Committees, One for Each Day
              </h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-accent-gold/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
                <span className="h-px w-12 bg-accent-gold/40" />
              </div>
              <p className="font-body text-sm md:text-base text-white/75 mt-3 max-w-xl">
                This year’s conference features two distinct committees addressing critical international and national affairs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UNSC Overview */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 shadow-xl">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, #B8976A, transparent)',
                  }}
                />
                <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-gold/30 bg-accent-gold/10 text-accent-gold">
                      <Shield size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                        Day 1 · 31 October 2026
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                        United Nations Security Council
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="rounded-full border border-blue-500/30 bg-blue-900/30 px-3 py-0.5 text-xs font-sans text-blue-300 font-semibold">
                      20 Countries
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-sans text-white/80">
                      Two Delegates Each
                    </span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-900/30 px-3 py-0.5 text-xs font-sans text-amber-300 font-semibold">
                      No Veto
                    </span>
                  </div>

                  <div className="rounded-xl border border-accent-gold/20 bg-ink/60 p-4 mb-4">
                    <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold/80 mb-1">
                      Agenda
                    </span>
                    <p className="font-serif italic text-white/95 text-sm md:text-base leading-snug">
                      The situation in the Middle East, focusing on Palestine and Lebanon.
                    </p>
                  </div>

                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    Twenty countries, with two delegates each, address the situation in the Middle East,
                    focusing on Palestine and Lebanon. They work toward a lasting ceasefire, humanitarian
                    access and implementation of the two-state solution. The Council sits without a veto,
                    so every voting member has an equal say in shaping the outcome.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/committees/unsc"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-gold hover:text-white transition-colors"
                  >
                    <span>Explore UNSC Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* AIPPM Overview */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 shadow-xl">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C5A55A, transparent)',
                  }}
                />
                <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-gold/30 bg-accent-gold/10 text-accent-gold">
                      <Landmark size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                        Day 2 · 1 November 2026
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                        All India Political Parties Meet
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="rounded-full border border-amber-500/30 bg-amber-900/30 px-3 py-0.5 text-xs font-sans text-amber-300 font-semibold">
                      26 Political Parties
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-sans text-white/80">
                      Represented by Party Leaders
                    </span>
                    <span className="rounded-full border border-blue-500/30 bg-blue-900/30 px-3 py-0.5 text-xs font-sans text-blue-300 font-semibold">
                      Parliamentary Style
                    </span>
                  </div>

                  <div className="rounded-xl border border-accent-gold/20 bg-ink/60 p-4 mb-4">
                    <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold/80 mb-1">
                      Agenda
                    </span>
                    <p className="font-serif italic text-white/95 text-sm md:text-base leading-snug">
                      Delimitation of Parliamentary and Assembly constituencies after the upcoming Census.
                    </p>
                  </div>

                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    Twenty-six political parties, each represented by its leader, debate the delimitation
                    of Parliamentary and Assembly constituencies after the upcoming Census. Ruling and
                    opposition benches scrutinise, defend and negotiate, as in India’s own political arena.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/committees/aippm"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-gold hover:text-white transition-colors"
                  >
                    <span>Explore AIPPM Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ───── Committee Proceedings, Scoring & Awards ───── */}
        <div className="mb-20">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                Delegate Experience
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">
                Debate, Drafting, Evaluation &amp; Awards
              </h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-accent-gold/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
                <span className="h-px w-12 bg-accent-gold/40" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Drafting in Committee */}
            <ScrollReveal direction="up" delay={0.05}>
              <div className="h-full rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                    <Layers size={20} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    In-Committee Drafting
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                    Delegates research their positions, deliver speeches, join caucuses, build blocs and write draft resolutions in the committee itself.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Optional Position Paper */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="h-full rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                    <FileText size={20} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    Position Papers
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                    Delegates are encouraged to submit an optional position paper outlining their policy stance and research before taking the floor.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Merit & Evaluation */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="h-full rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                    <Award size={20} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    Quality-Driven Evaluation
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                    Marks reward quality of thought, diplomacy and collaboration, not just the number of speeches delivered.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Icebreaker */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="h-full rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                    <Users size={20} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    Pre-Session Icebreaker
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                    An icebreaker before the UNSC opens lets delegates and co-delegates meet and connect before the first session begins.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Awards Banner */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="mt-8 rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/15 text-accent-gold">
                  <Award size={22} />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block">
                    Recognition &amp; Accolades
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Official Conference Awards
                  </h3>
                </div>
              </div>

              <p className="font-body text-sm md:text-base text-white/80 leading-relaxed mb-6">
                Awards include <strong>Best Delegate</strong>, <strong>High Commendation</strong> and{' '}
                <strong>Special Mention</strong> in both committees, <strong>Best Delegation</strong> in the
                UNSC, and the <strong>Delegate’s Choice awards for Best Dressed</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-ink/50">
                  <span className="font-serif text-base font-bold text-accent-gold block mb-1">
                    Best Delegate
                  </span>
                  <span className="font-body text-xs text-white/70 block">
                    Awarded to the highest total score in both UNSC and AIPPM.
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-ink/50">
                  <span className="font-serif text-base font-bold text-accent-gold block mb-1">
                    High Commendation &amp; Special Mention
                  </span>
                  <span className="font-body text-xs text-white/70 block">
                    Conferred in both committees for standout diplomatic and oratorical performance.
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-ink/50">
                  <span className="font-serif text-base font-bold text-accent-gold block mb-1">
                    Best Delegation (UNSC)
                  </span>
                  <span className="font-body text-xs text-white/70 block">
                    Awarded to the country with the highest average score across its co-delegates.
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-ink/50">
                  <span className="font-serif text-base font-bold text-accent-gold block mb-1">
                    Delegate&apos;s Choice: Best Dressed
                  </span>
                  <span className="font-body text-xs text-white/70 block">
                    Peer-voted awards for Male and Female delegates honoring formal diplomatic attire.
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ───── Bureau Guidance & Call to Action ───── */}
        <ScrollReveal direction="scale">
          <div className="relative text-center py-16 px-6 rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background:
                  'radial-gradient(circle 400px at 50% 50%, rgba(184,151,106,0.12) 0%, transparent 70%)',
              }}
            />
            <span className="font-sans text-xs uppercase tracking-widest text-accent-gold font-bold px-3 py-1 rounded-full border border-accent-gold/30 bg-accent-gold/10 inline-block mb-3 relative z-10">
              Welcome to the Floor
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight relative z-10 max-w-3xl mx-auto">
              Whether this is your tenth MUN or your first, the Bureau will guide you through procedure.
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2 relative z-10">
              <span className="h-px w-10 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-10 bg-accent-gold/40" />
            </div>
            <p className="mx-auto mt-4 max-w-xl font-serif italic text-lg md:text-xl text-accent-gold relative z-10">
              &ldquo;Come ready to speak, listen and negotiate.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <GlowButton href={siteConfig.registrationUrl} variant="gold">
                Register Delegation
              </GlowButton>
              <GlowButton to="/rulebook" variant="outline">
                Read Official Rulebook
              </GlowButton>
              <GlowButton to="/committees/unsc" variant="outline">
                UNSC Committee
              </GlowButton>
              <GlowButton to="/committees/aippm" variant="outline">
                AIPPM Committee
              </GlowButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
