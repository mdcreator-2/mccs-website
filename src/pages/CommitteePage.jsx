import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Shield, Landmark, ArrowRight, Award, FileText } from 'lucide-react';

import { siteConfig } from '../data/siteConfig';
import { unscCountries } from '../data/countries';
import { aippmParties } from '../data/parties';

import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import AgendaBanner from '../components/committees/AgendaBanner';
import CountryCard from '../components/committees/CountryCard';
import PartyCard from '../components/committees/PartyCard';
import GlowButton from '../components/ui/GlowButton';

const COMMITTEE_DESCRIPTIONS = {
  unsc: 'The United Nations Security Council is the principal organ of the UN responsible for the maintenance of international peace and security. With the power to authorize sanctions, peacekeeping operations, and military action, the UNSC holds unparalleled authority in global governance. In this simulation, delegates will navigate the complexities of multilateral diplomacy, coalition-building, and the exercise of veto power.',
  aippm:
    "The All India Political Parties Meet simulates a high-stakes dialogue among India's major political forces. Delegates will represent party positions on pressing national issues, engaging in negotiation, rhetoric, and consensus-building that mirrors the vibrant — and often contentious — landscape of Indian democracy.",
};

function CommitteePage({ committee }) {
  const config = siteConfig.committees[committee] || siteConfig.committees.unsc;
  const isUNSC = committee === 'unsc';

  const p5 = useMemo(
    () => unscCountries.filter((c) => c.type === 'P5'),
    [],
  );
  const e10 = useMemo(
    () => unscCountries.filter((c) => c.type === 'E10'),
    [],
  );
  const invited = useMemo(
    () => unscCountries.filter((c) => c.type === 'Invited'),
    [],
  );

  const ruling = useMemo(
    () => aippmParties.filter((p) => p.type === 'ruling'),
    [],
  );
  const rulingAllies = useMemo(
    () => aippmParties.filter((p) => p.type === 'ruling-ally'),
    [],
  );
  const opposition = useMemo(
    () => aippmParties.filter((p) => p.type === 'opposition'),
    [],
  );

  const CommitteeIcon = isUNSC ? Shield : Landmark;

  return (
    <div className="min-h-screen bg-ink text-white relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 15%, rgba(184,151,106,0.08) 0%, transparent 75%)',
        }}
      />

      {/* ───── Agenda Banner ───── */}
      <AgendaBanner agenda={config.agenda} />

      {/* ───── Committee Dossier Section ───── */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20 z-10">
        {/* Corner Ornaments */}
        <div className="pointer-events-none absolute top-4 left-4 z-[2] h-10 w-10 border-l border-t border-accent-gold/20">
          <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute top-4 right-4 z-[2] h-10 w-10 border-r border-t border-accent-gold/20">
          <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Left — Committee Title & Agenda (3 cols) */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded border border-accent-gold/30 bg-accent-gold/10 text-accent-gold">
                <CommitteeIcon size={15} />
              </span>
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-accent-gold">
                {isUNSC ? 'Committee I · United Nations Security Council' : 'Committee II · All India Political Parties Meet'}
              </span>
            </div>

            <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl tracking-tight">
              {config.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-12 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-12 bg-accent-gold/40" />
            </div>

            <p className="mt-6 max-w-2xl font-body text-base md:text-lg leading-relaxed text-white/80">
              {COMMITTEE_DESCRIPTIONS[committee]}
            </p>

            {/* Official Committee Agenda Box */}
            <div className="mt-8 rounded-xl border border-accent-gold/25 bg-[#121E2A]/70 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">
                <FileText size={14} />
                <span>Official Committee Agenda</span>
              </div>
              <p className="font-serif italic text-white/95 text-base md:text-lg leading-relaxed">
                &ldquo;{config.agenda}&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Committee Specifications Dossier (2 cols) */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2">
            <div className="relative rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 md:p-7 backdrop-blur-sm shadow-xl">
              {/* Corner pips */}
              <span className="pointer-events-none absolute top-2.5 left-2.5 h-1 w-1 rounded-full bg-accent-gold/40" />
              <span className="pointer-events-none absolute top-2.5 right-2.5 h-1 w-1 rounded-full bg-accent-gold/40" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Committee Dossier
                </h3>
                <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-2.5 py-0.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-accent-gold">
                  {config.totalDelegations} Seats
                </span>
              </div>

              <ul className="space-y-4 text-sm">
                <DetailRow
                  icon={<Users size={17} />}
                  label="Delegation Format"
                  value={config.delegationType}
                  sub={isUNSC ? 'Dual delegate partnership' : 'Individual party representative'}
                />
                <DetailRow
                  icon={<Calendar size={17} />}
                  label="Session Date"
                  value={config.date}
                  sub="MCCS 2026 Official Simulation"
                />
                <DetailRow
                  icon={<MapPin size={17} />}
                  label="Venue & Quorum"
                  value={siteConfig.venue}
                />
                <DetailRow
                  icon={<Award size={17} />}
                  label="Procedural Focus"
                  value={isUNSC ? 'UN Charter & Veto Governance' : 'Parliamentary Rules of Procedure'}
                  sub={isUNSC ? 'Chapter VII Powers' : 'Substantive & Procedural Motions'}
                />
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── Delegation / Party Matrix ───── */}
      <div className="relative z-10">
        {isUNSC ? (
          <DelegationMatrix p5={p5} e10={e10} invited={invited} />
        ) : (
          <PartyMatrix
            ruling={ruling}
            rulingAllies={rulingAllies}
            opposition={opposition}
          />
        )}
      </div>

      {/* ───── Bottom CTA ───── */}
      <section className="relative bg-ink py-20 text-center border-t border-accent-gold/20 overflow-hidden">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(circle 400px at 50% 50%, rgba(184,151,106,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Corner Ornaments */}
        <div className="pointer-events-none absolute top-6 left-6 z-[2] h-10 w-10 border-l border-t border-accent-gold/20">
          <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>
        <div className="pointer-events-none absolute top-6 right-6 z-[2] h-10 w-10 border-r border-t border-accent-gold/20">
          <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
        </div>

        <ScrollReveal direction="scale" className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Take the Floor?
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
            <span className="h-px w-10 bg-accent-gold/40" />
          </div>
          <p className="mx-auto mt-4 max-w-lg font-body text-base text-white/70">
            Secure your country or party allotment and step into the world of rigorous diplomacy at NIT Patna.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GlowButton href={siteConfig.registrationUrl} variant="gold">
              Register Delegation
            </GlowButton>
            <GlowButton to="/rulebook" variant="outline">
              Consult Rulebook
            </GlowButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

/* ─────────────────────────────────
   Sub-sections
   ───────────────────────────────── */

function DelegationMatrix({ p5, e10, invited }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      {/* P5 */}
      <ScrollReveal direction="up">
        <SectionHeading
          light
          title="Permanent Members (P5)"
          subtitle="The five permanent members of the Security Council."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {p5.map((country, i) => (
          <CountryCard key={country.code} country={country} index={i} />
        ))}
      </div>

      {/* E10 */}
      <div className="mt-20">
        <ScrollReveal direction="up">
          <SectionHeading
            light
            title="Non-Permanent Members (E10)"
            subtitle="Ten elected members serving two-year terms on the Security Council."
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {e10.map((country, i) => (
            <CountryCard key={country.code} country={country} index={i} />
          ))}
        </div>
      </div>

      {/* Invited Members */}
      <div className="mt-20">
        <ScrollReveal direction="up">
          <SectionHeading
            light
            title="Invited Members"
            subtitle="Non-member states invited to participate in Security Council deliberations on this agenda."
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {invited.map((country, i) => (
            <CountryCard key={country.code} country={country} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartyMatrix({ ruling, rulingAllies, opposition }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      {/* Ruling Party */}
      <ScrollReveal direction="up">
        <SectionHeading
          light
          title="Ruling Party"
          subtitle="The governing national party leading the treasury benches in Parliament."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ruling.map((party, i) => (
          <PartyCard key={party.abbreviation} party={party} index={i} />
        ))}
      </div>

      {/* Ruling Allies */}
      <div className="mt-20">
        <ScrollReveal direction="up">
          <SectionHeading
            light
            title="Ruling Allies"
            subtitle="Coalition partners forming the governing National Democratic Alliance (NDA)."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rulingAllies.map((party, i) => (
            <PartyCard key={party.abbreviation} party={party} index={i} />
          ))}
        </div>
      </div>

      {/* Opposition */}
      <div className="mt-20">
        <ScrollReveal direction="up">
          <SectionHeading
            light
            title="Opposition"
            subtitle="Major national, regional, and alliance parties challenging the government on national issues."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {opposition.map((party, i) => (
            <PartyCard key={party.abbreviation} party={party} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────
   Utility Components
   ───────────────────────────────── */

function DetailRow({ icon, label, value, sub }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 text-accent-gold">{icon}</span>
      <div>
        <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-accent-gold/80">
          {label}
        </span>
        <span className="mt-0.5 block font-body font-medium text-white/95">
          {value}
        </span>
        {sub && (
          <span className="mt-0.5 block font-sans text-xs text-white/50">
            {sub}
          </span>
        )}
      </div>
    </li>
  );
}

export default CommitteePage;
