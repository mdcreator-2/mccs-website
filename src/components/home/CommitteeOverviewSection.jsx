import { motion } from 'framer-motion';
import { Shield, Landmark, ArrowRight, Calendar, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import { siteConfig } from '../../data/siteConfig';

const COMMITTEES = [
  {
    key: 'unsc',
    chamber: 'Chamber I',
    mandate: 'International Peace & Security',
    name: siteConfig.committees.unsc.name,
    abbr: siteConfig.committees.unsc.abbreviation,
    icon: Shield,
    accentColor: '#B8976A',
    delegation: siteConfig.committees.unsc.delegationType,
    date: siteConfig.committees.unsc.date,
    totalDelegations: siteConfig.committees.unsc.totalDelegations,
    agenda: siteConfig.committees.unsc.agenda,
    powers: 'P5 Veto & Chapter VII Resolutions',
    link: '/committees/unsc',
  },
  {
    key: 'aippm',
    chamber: 'Chamber II',
    mandate: 'Parliamentary Democracy & Policy',
    name: siteConfig.committees.aippm.name,
    abbr: siteConfig.committees.aippm.abbreviation,
    icon: Landmark,
    accentColor: '#C5A55A',
    delegation: siteConfig.committees.aippm.delegationType,
    date: siteConfig.committees.aippm.date,
    totalDelegations: siteConfig.committees.aippm.totalDelegations,
    agenda: siteConfig.committees.aippm.agenda,
    powers: 'Treasury, Alliance & Opposition Benches',
    link: '/committees/aippm',
  },
];

export default function CommitteeOverviewSection() {
  return (
    <section className="relative bg-ink py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="committees">
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,151,106,0.06) 0%, transparent 80%)',
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              Two Committees, One Experience
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-12 bg-accent-gold/40" />
            </div>
            <p className="font-body text-base md:text-lg text-white/70 mt-3 max-w-2xl">
              Choose your arena — multilateral global diplomacy or high-intensity national parliamentary debate.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Chamber Consoles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMMITTEES.map((committee, idx) => {
            const Icon = committee.icon;
            return (
              <ScrollReveal
                key={committee.key}
                direction={idx === 0 ? 'left' : 'right'}
                delay={idx * 0.15}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/60 hover:bg-[#152332] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                >
                  {/* Top Hairline Accent Line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to right, transparent, ${committee.accentColor}, transparent)`,
                    }}
                  />

                  {/* Corner pips */}
                  <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/70 transition-colors" />
                  <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/70 transition-colors" />

                  {/* Chamber Header & Title */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold group-hover:border-accent-gold group-hover:bg-accent-gold/20 transition-all">
                          <Icon size={22} strokeWidth={1.8} />
                        </div>
                        <div>
                          <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold">
                            {committee.chamber}
                          </span>
                          <span className="block font-sans text-[11px] text-white/50">
                            {committee.mandate}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-xs font-medium text-white/70">
                        {committee.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
                      {committee.abbr}
                    </h3>
                    <p className="font-body text-sm text-white/60 mt-1">
                      {committee.name}
                    </p>

                    {/* Agenda Teaser Box */}
                    <div className="my-6 rounded-lg border border-accent-gold/20 bg-ink/60 p-4">
                      <div className="flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold/80 mb-1.5">
                        <FileText size={13} />
                        <span>Agenda</span>
                      </div>
                      <p className="font-serif italic text-white/90 text-sm md:text-base leading-snug">
                        &ldquo;{committee.agenda}&rdquo;
                      </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2.5 rounded border border-white/5 bg-white/[0.03] px-3 py-2.5">
                        <Users size={16} className="text-accent-gold/80 shrink-0" />
                        <div>
                          <span className="block text-[10px] font-sans uppercase tracking-wider text-white/40">
                            Delegation
                          </span>
                          <span className="block text-xs font-body font-medium text-white/90">
                            {committee.delegation}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 rounded border border-white/5 bg-white/[0.03] px-3 py-2.5">
                        <Calendar size={16} className="text-accent-gold/80 shrink-0" />
                        <div>
                          <span className="block text-[10px] font-sans uppercase tracking-wider text-white/40">
                            Total Seats
                          </span>
                          <span className="block text-xs font-body font-medium text-white/90">
                            {committee.totalDelegations} Delegations
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chamber Action Link */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="font-sans text-xs text-white/50">
                      {committee.powers}
                    </span>
                    <Link
                      to={committee.link}
                      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-gold hover:text-white transition-colors group-hover:gap-3 duration-200"
                    >
                      <span>Explore Chamber</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
