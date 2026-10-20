import { motion } from 'framer-motion';
import { Shield, Landmark, Award, BookOpen, MapPin, Calendar, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
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
          <SectionHeading
            light
            title="About MCCS 2026"
            subtitle="Model Conferences and Committee Simulation — Fostering multilateral diplomacy, constitutional inquiry, and parliamentary statecraft at NIT Patna."
          />
        </ScrollReveal>

        {/* ───── Executive Overview Banner ───── */}
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
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/30 bg-accent-gold/10 p-2 shadow-inner">
                <img
                  src="/images/logos/Logo-mun-gold.png"
                  alt="MCCS Crest"
                  className="h-16 w-16 object-contain drop-shadow-[0_0_12px_rgba(184,151,106,0.4)]"
                />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 font-sans font-semibold text-accent-gold text-xs uppercase tracking-[0.2em] mb-2 px-3 py-0.5 rounded-full bg-accent-gold/10 border border-accent-gold/25">
                  <Sparkles size={13} />
                  <span>The Summit of Discourse</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Two Arenas of Statecraft. One Exceptional Standard.
                </h3>
                <p className="mt-3 font-body text-sm md:text-base leading-relaxed text-white/80">
                  Organized by <strong>Expresso Club</strong> at the <strong>National Institute of Technology Patna</strong>, MCCS is a premier academic summit convening ambitious student leaders, orators, and prospective policymakers. Designed to break away from superficial conference tropes, MCCS delivers unyielding procedural integrity across two distinct dimensions of governance.
                </p>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <span className="block font-serif text-2xl font-bold text-white">02</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">Committees</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">46</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">Total Delegations</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">2 Days</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">31 Oct &amp; 1 Nov</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">NIT Patna</span>
                <span className="block font-sans text-xs uppercase tracking-wider text-accent-gold/80 mt-1">Bihta Campus</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ───── Institutional Heritage: NIT Patna & Expresso Club ───── */}
        <div className="mb-20">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">
                Institutional Lineage &amp; Organizers
              </h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-accent-gold/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
                <span className="h-px w-12 bg-accent-gold/40" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Expresso Club Card */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="group relative h-full rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 hover:bg-[#152332] shadow-xl">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, #B8976A, transparent)',
                  }}
                />
                <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent-gold/30 bg-ink p-2">
                    <img
                      src="/images/logos/expresso-logo.webp"
                      alt="Expresso Club Logo"
                      className="h-12 w-auto object-contain opacity-95 transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                      Organizing Body
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                      Expresso Club
                    </h3>
                    <span className="block font-sans text-xs text-white/50">
                      The Literary &amp; Art Club · NIT Patna
                    </span>
                  </div>
                </div>

                <p className="font-body text-sm md:text-base leading-relaxed text-white/75">
                  Expresso Club is the premier literary, art, and debating society of NIT Patna. Serving as the intellectual vanguard of the institute, Expresso curates flagship national events that nurture public speaking, creative composition, theatrical drama, and parliamentary discourse. MCCS represents the club’s pinnacle simulation, crafted to give delegates an unparalleled arena for strategic negotiation.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="font-sans text-xs text-white/50">Leadership &amp; Delegate Affairs</span>
                  <a
                    href="https://www.instagram.com/expresso_nitp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-accent-gold hover:text-white transition-colors"
                  >
                    <span>@expresso_nitp</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* NIT Patna Card */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="group relative h-full rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 hover:bg-[#152332] shadow-xl">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C5A55A, transparent)',
                  }}
                />
                <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent-gold/30 bg-ink p-2">
                    <img
                      src="/images/logos/nitp-logo.png"
                      alt="NIT Patna Logo"
                      className="h-12 w-12 object-contain drop-shadow-[0_0_10px_rgba(184,151,106,0.35)] transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                      Host Institution &amp; Patron
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                      NIT Patna
                    </h3>
                    <span className="block font-sans text-xs text-white/50">
                      Institute of National Importance · Est. 1886
                    </span>
                  </div>
                </div>

                <p className="font-body text-sm md:text-base leading-relaxed text-white/75">
                  The National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of Education, Government of India. Tracing its lineage back to 1886 as Bihar School of Engineering, NIT Patna combines historic gravitas with state-of-the-art infrastructure at its sprawling Bihta Campus, offering an inspiring backdrop for national-level conferences.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="font-sans text-xs text-white/50">Venue: Bihta Campus</span>
                  <a
                    href="https://www.nitp.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-accent-gold hover:text-white transition-colors"
                  >
                    <span>nitp.ac.in</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ───── The Two Simulated Pillars ───── */}
        <div className="mb-20">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">
                The Dual-Committee Experience
              </h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-accent-gold/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
                <span className="h-px w-12 bg-accent-gold/40" />
              </div>
              <p className="font-body text-sm md:text-base text-white/70 mt-3 max-w-xl">
                MCCS is engineered around two distinct legislative and diplomatic architectures.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UNSC Overview */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="group relative flex flex-col justify-between rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 shadow-xl">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, #B8976A, transparent)',
                  }}
                />
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold">
                        <Shield size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                          Committee I · 31 October 2026
                        </span>
                        <span className="block font-sans text-xs text-white/50">
                          UNA-USA Protocol · Dual Delegation
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                    United Nations Security Council
                  </h3>
                  <p className="font-body text-sm text-white/70 mt-2 leading-relaxed">
                    The principal global body vested with primary responsibility for maintaining international peace and security under the UN Charter. Delegates grapple with sovereign violations, P5 veto considerations, Chapter VII mandates, and binding international resolutions.
                  </p>

                  <div className="my-5 rounded-lg border border-accent-gold/20 bg-ink/60 p-4">
                    <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold/80 mb-1">
                      Official Committee Agenda
                    </span>
                    <p className="font-serif italic text-white/90 text-sm leading-snug">
                      &ldquo;{siteConfig.committees.unsc.agenda}&rdquo;
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                      <span>20 Delegations (5 Permanent Members, 10 Non-Permanent, 4 Invited Observers)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                      <span>Dual-delegate partnership requirement for strategic negotiation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                      <span>Chapter VII resolution drafting with binding diplomatic sanctions</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/committees/unsc"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-gold hover:text-white transition-colors"
                  >
                    <span>View UNSC Delegation Matrix</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* AIPPM Overview */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="group relative flex flex-col justify-between rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 shadow-xl">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, #C5A55A, transparent)',
                  }}
                />
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold">
                        <Landmark size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                          Committee II · 1 November 2026
                        </span>
                        <span className="block font-sans text-xs text-white/50">
                          Indian Parliamentary Protocol · Single Delegation
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                    All India Political Parties Meet
                  </h3>
                  <p className="font-body text-sm text-white/70 mt-2 leading-relaxed">
                    A high-stakes consensus assembly simulating the vibrant, contentious, and oratorically intense landscape of Indian parliamentary democracy. Delegates represent party leaders across ruling benches, alliance partners, and opposition blocs.
                  </p>

                  <div className="my-5 rounded-lg border border-accent-gold/20 bg-ink/60 p-4">
                    <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold/80 mb-1">
                      Official Committee Agenda
                    </span>
                    <p className="font-serif italic text-white/90 text-sm leading-snug">
                      &ldquo;{siteConfig.committees.aippm.agenda}&rdquo;
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                      <span>26 National and regional political party representatives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                      <span>Single delegation format mirroring individual parliamentary leadership</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                      <span>Formal Joint Communiqué deliverable with recorded policy consensus</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/committees/aippm"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-gold hover:text-white transition-colors"
                  >
                    <span>View AIPPM Party Matrix</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ───── Conference Pillars ───── */}
        <div className="mb-20">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">
                Core Conference Principles
              </h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-accent-gold/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
                <span className="h-px w-12 bg-accent-gold/40" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                  <BookOpen size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Procedural Rigor</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed">
                  Strict adherence to codified Rules of Procedure guarantees fair floor time, dignified discourse, and structured debate.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                  <Shield size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Academic Integrity</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed">
                  Zero tolerance for plagiarism and AI-generated speeches. Authentic research and spontaneous oratory are paramount.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                  <Award size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Merit Adjudication</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed">
                  Objective, criteria-based evaluation by accomplished Executive Boards recognizing depth, diplomacy, and leadership.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="rounded-xl border border-accent-gold/20 bg-[#121E2A]/70 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold mb-4">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">National Quorum</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed">
                  An intellectual confluence of delegates from premier universities, schools, and debating societies across India.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ───── Schedule & Dress Code Dossier ───── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-20 rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 md:p-10 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                  Conference Logistics
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Dates, Timings &amp; Dress Code
                </h3>
              </div>
              <div className="flex items-center gap-2 text-white/70 font-sans text-xs">
                <MapPin size={16} className="text-accent-gold" />
                <span>{siteConfig.venue}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Day 1 */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent-gold">
                    Day 1 · 31 October 2026
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/60">
                    UNSC Assembly
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Western Formal</h4>
                <p className="font-body text-xs text-white/70 mt-2 leading-relaxed">
                  Business suits, blazers with formal trousers, button-down collared shirts, ties, formal dresses, or pencil skirts. Polished formal footwear.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[11px] text-white/50">
                  <Clock size={13} className="text-accent-gold/80" />
                  <span>Session Hours: 08:30 AM – 04:00 PM IST</span>
                </div>
              </div>

              {/* Day 2 */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent-gold">
                    Day 2 · 1 November 2026
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/60">
                    AIPPM Assembly
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Traditional / Ethnic Formal</h4>
                <p className="font-body text-xs text-white/70 mt-2 leading-relaxed">
                  Kurta-Pyjama with Nehru / Modi jacket, formal Sarees, Anarkalis, or formal traditional Indian national attire with appropriate formal footwear.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[11px] text-white/50">
                  <Clock size={13} className="text-accent-gold/80" />
                  <span>Session Hours: 08:30 AM – 04:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ───── Call to Action ───── */}
        <ScrollReveal direction="scale">
          <div className="relative text-center py-16 px-6 rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background:
                  'radial-gradient(circle 400px at 50% 50%, rgba(184,151,106,0.12) 0%, transparent 70%)',
              }}
            />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight relative z-10">
              Take Your Place in the Assembly
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2 relative z-10">
              <span className="h-px w-10 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-10 bg-accent-gold/40" />
            </div>
            <p className="mx-auto mt-4 max-w-xl font-body text-sm md:text-base text-white/70 relative z-10">
              Registrations are open for national delegations and individual party portfolios. Prepare your speeches, review the official rulebook, and represent your state.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <GlowButton href={siteConfig.registrationUrl} variant="gold">
                Register Delegation
              </GlowButton>
              <GlowButton to="/rulebook" variant="outline">
                Read Official Rulebook
              </GlowButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
