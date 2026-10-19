import { motion } from 'framer-motion';
import { Landmark, Users, Calendar, Award } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const HIGHLIGHT_ITEMS = [
  {
    value: '02',
    label: 'Chambers',
    badge: 'Bicameral Simulation',
    description: 'UN Security Council & All India Political Parties Meet',
    icon: Landmark,
  },
  {
    value: '46',
    label: 'Delegations',
    badge: 'Sovereign & Party Seats',
    description: '20 UN Member States and 26 National Political Parties',
    icon: Users,
  },
  {
    value: '02',
    label: 'Days of Debate',
    badge: 'Intense Deliberation',
    description: '31 October & 1 November 2026 at NIT Patna',
    icon: Calendar,
  },
  {
    value: '100+',
    label: 'Aspiring Leaders',
    badge: 'National Delegate Quorum',
    description: 'Future policymakers, diplomats, and student orators',
    icon: Award,
  },
];

export default function HighlightsSection() {
  return (
    <section className="relative bg-ink py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(184,151,106,0.07) 0%, transparent 75%)',
        }}
      />

      {/* Diplomatic Corner Ornaments */}
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white">
              Conference Scope &amp; Architecture
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-10 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-10 bg-accent-gold/40" />
            </div>
            <p className="font-body text-base md:text-lg text-white/70 mt-3 max-w-2xl">
              Two days of high-stakes multilateral diplomacy and parliamentary debate at NIT Patna.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Cell Diplomatic Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.label} direction="up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="group relative flex h-full flex-col justify-between rounded-lg border border-accent-gold/20 bg-[#121E2A]/90 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 hover:bg-[#152332] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  {/* Subtle corner pips */}
                  <span className="pointer-events-none absolute top-2 left-2 h-1 w-1 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/60 transition-colors" />
                  <span className="pointer-events-none absolute top-2 right-2 h-1 w-1 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/60 transition-colors" />

                  {/* Header Row: Icon & Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded border border-accent-gold/20 bg-accent-gold/10 text-accent-gold">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold/80 bg-accent-gold/[0.08] px-2.5 py-0.5 rounded border border-accent-gold/15">
                        {item.badge}
                      </span>
                    </div>

                    {/* Metric Value */}
                    <div className="font-serif text-4xl lg:text-5xl font-bold text-white tracking-tight tabular-nums group-hover:text-accent-gold transition-colors duration-300">
                      {item.value}
                    </div>

                    {/* Metric Label */}
                    <h3 className="font-serif text-lg font-semibold text-white/95 mt-2">
                      {item.label}
                    </h3>
                  </div>

                  {/* Contextual description */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="font-sans text-xs text-white/60 leading-relaxed">
                      {item.description}
                    </p>
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
