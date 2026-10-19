import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Landmark, Award, Mail, Instagram, Linkedin, Sparkles, UserCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import GlowButton from '../components/ui/GlowButton';
import { siteConfig } from '../data/siteConfig';
import { teamMembers, teamTiers } from '../data/team';

export default function TeamPage() {
  const [activeTier, setActiveTier] = useState('All');

  const filteredMembers =
    activeTier === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.tier === activeTier);

  return (
    <div className="min-h-screen bg-ink text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
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
            title="The Executive Secretariat"
            subtitle="The custodians of diplomatic decorum, procedural rigor, and operational excellence for MCCS 2026."
          />
        </ScrollReveal>

        {/* ───── Executive Preamble Card ───── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mb-12 max-w-3xl rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 text-center backdrop-blur-sm shadow-xl relative">
            <span className="pointer-events-none absolute top-2.5 left-2.5 h-1 w-1 rounded-full bg-accent-gold/30" />
            <span className="pointer-events-none absolute top-2.5 right-2.5 h-1 w-1 rounded-full bg-accent-gold/30" />
            <div className="inline-flex items-center gap-2 font-sans font-semibold text-accent-gold text-xs uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
              <Sparkles size={13} />
              <span>Conference Dais &amp; Directorate</span>
            </div>
            <p className="font-body text-sm text-white/75 leading-relaxed max-w-2xl mx-auto">
              Operating under the institutional aegis of <strong>Expresso Club</strong> and <strong>NIT Patna</strong>, the Secretariat supervises council logistics, dais adjudication, rulebook compliance, and delegate welfare throughout the conference.
            </p>
          </div>
        </ScrollReveal>

        {/* ───── Tier Filter Tabs ───── */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {teamTiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-4 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTier === tier
                    ? 'border border-accent-gold bg-accent-gold text-ink shadow-[0_0_15px_rgba(184,151,106,0.35)]'
                    : 'border border-white/10 bg-[#121E2A]/60 text-white/70 hover:border-accent-gold/40 hover:text-white'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ───── Team Grid ───── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group relative flex flex-col justify-between rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-7 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/60 hover:bg-[#152332] hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
              >
                {/* Top Hairline Accent Line */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(to right, transparent, #B8976A, transparent)',
                  }}
                />
                <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/70 transition-colors" />
                <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/70 transition-colors" />

                <div>
                  {/* Top Header: Avatar Crest & Tier Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Diplomatic Monogram Avatar */}
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/30 bg-gradient-to-br from-ink to-[#182838] shadow-inner group-hover:border-accent-gold/60 transition-colors">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-accent-gold/5 blur-sm" />
                      <span className="font-serif text-lg font-bold tracking-wider text-accent-gold">
                        {member.initials}
                      </span>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-accent-gold/90">
                      {member.tier}
                    </span>
                  </div>

                  {/* Role Title */}
                  <div className="mb-2">
                    <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold mb-1">
                      {member.committee}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                      {member.role}
                    </h3>
                  </div>

                  {/* Appointee Name / Status */}
                  <div className="mt-2 mb-4 flex items-center gap-2">
                    <UserCheck size={14} className="text-accent-gold/70 shrink-0" />
                    <span className="font-sans text-sm font-medium text-white/90">
                      {member.name}
                    </span>
                    {member.name === 'To Be Announced' && (
                      <span className="rounded border border-accent-gold/30 bg-accent-gold/10 px-1.5 py-0.2 text-[10px] font-sans text-accent-gold">
                        Appointment Pending
                      </span>
                    )}
                  </div>

                  {/* Bio */}
                  <p className="font-body text-xs text-white/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Strip */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-sans text-[11px] text-white/40">MCCS 2026 Dais</span>
                  <span className="font-sans text-[11px] font-semibold text-accent-gold/80">
                    NIT Patna
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ───── Secretariat Liaison & Contact Desk ───── */}
        <ScrollReveal direction="up">
          <div className="mb-20 rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 md:p-10 backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                  Direct Delegate Liaison
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Need Assistance or Have Inquiries?
                </h3>
                <p className="font-body text-sm text-white/75 mt-3 leading-relaxed max-w-xl">
                  For questions regarding institutional delegation allotments, portfolio availability, rulebook clarifications, or conference hospitality at NIT Patna, reach out to our Secretariat.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-white/80 hover:text-accent-gold transition-colors font-sans text-xs"
                  >
                    <Mail size={16} className="text-accent-gold" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-accent-gold transition-colors font-sans text-xs"
                  >
                    <Instagram size={16} className="text-accent-gold" />
                    <span>@expresso_nitp</span>
                  </a>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-accent-gold transition-colors font-sans text-xs"
                  >
                    <Linkedin size={16} className="text-accent-gold" />
                    <span>Expresso Club NIT Patna</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end justify-center">
                <GlowButton href={siteConfig.registrationUrl} variant="gold">
                  Register Delegation
                </GlowButton>
                <span className="font-sans text-[11px] text-white/50 mt-2">
                  Rolling allotments across both committees
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
