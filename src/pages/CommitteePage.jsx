import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Shield, ArrowRight } from 'lucide-react';

import { siteConfig } from '../data/siteConfig';
import { unscCountries } from '../data/countries';
import { aippmParties } from '../data/parties';

import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import AgendaBanner from '../components/committees/AgendaBanner';
import CountryCard from '../components/committees/CountryCard';
import PartyCard from '../components/committees/PartyCard';

const COMMITTEE_DESCRIPTIONS = {
  unsc: 'The United Nations Security Council is the principal organ of the UN responsible for the maintenance of international peace and security. With the power to authorize sanctions, peacekeeping operations, and military action, the UNSC holds unparalleled authority in global governance. In this simulation, delegates will navigate the complexities of multilateral diplomacy, coalition-building, and the exercise of veto power.',
  aippm:
    "The All India Political Parties Meet simulates a high-stakes dialogue among India's major political forces. Delegates will represent party positions on pressing national issues, engaging in negotiation, rhetoric, and consensus-building that mirrors the vibrant — and often contentious — landscape of Indian democracy.",
};

function CommitteePage({ committee }) {
  const config = siteConfig.committees[committee] || siteConfig.committees.unsc;

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

  const isUNSC = committee === 'unsc';

  return (
    <div className="min-h-screen bg-background">
      {/* ───── Agenda Banner ───── */}
      <AgendaBanner agenda={config.agenda} />

      {/* ───── Committee Info Section ───── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left — Name & Description (3 cols) */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-accent-gold">
              {config.abbreviation}
            </span>
            <h1 className="font-serif text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
              {config.name}
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-text-secondary">
              {COMMITTEE_DESCRIPTIONS[committee]}
            </p>
          </ScrollReveal>

          {/* Right — Key Details Card (2 cols) */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="mb-5 font-serif text-lg font-semibold text-text-primary">
                Key Details
              </h3>
              <ul className="space-y-4 text-sm">
                <DetailRow
                  icon={<Users size={18} />}
                  label="Delegation Format"
                  value={config.delegationType}
                />
                <DetailRow
                  icon={<Calendar size={18} />}
                  label="Date"
                  value={config.date}
                />
                <DetailRow
                  icon={<Shield size={18} />}
                  label="Total Delegations"
                  value={config.totalDelegations}
                />
                <DetailRow
                  icon={<MapPin size={18} />}
                  label="Venue"
                  value={siteConfig.venue}
                  sub={`Specific Venue: ${siteConfig.venueSpecific}`}
                />
                <DetailRow
                  icon={<Users size={18} />}
                  label="Quorum"
                  value={`${Math.ceil(config.totalDelegations / 2)} delegations (simple majority)`}
                />
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── Delegation / Party Matrix ───── */}
      {isUNSC ? (
        <DelegationMatrix p5={p5} e10={e10} invited={invited} />
      ) : (
        <PartyMatrix parties={aippmParties} />
      )}

      {/* ───── Bottom CTA ───── */}
      <section className="border-t border-border bg-surface py-16 text-center">
        <ScrollReveal direction="scale">
          <h2 className="font-serif text-2xl font-bold text-text-primary md:text-3xl">
            Ready to Represent?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-text-secondary">
            Secure your delegation and step into the world of diplomacy and debate.
          </p>
          <motion.a
            href={siteConfig.registrationUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-gold px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-accent-gold/90"
          >
            Register Now
            <ArrowRight size={18} />
          </motion.a>
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
    <section className="mx-auto max-w-7xl px-6 pb-16">
      {/* P5 */}
      <ScrollReveal direction="up">
        <SectionHeading
          title="Permanent Members (P5)"
          subtitle="The five permanent members of the Security Council, each holding veto power."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {p5.map((country, i) => (
          <CountryCard key={country.code} country={country} index={i} />
        ))}
      </div>

      {/* E10 */}
      <div className="mt-16">
        <ScrollReveal direction="up">
          <SectionHeading
            title="Non-Permanent Members (E10)"
            subtitle="Ten elected members serving two-year terms on the Council."
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {e10.map((country, i) => (
            <CountryCard key={country.code} country={country} index={i} />
          ))}
        </div>
      </div>

      {/* Invited */}
      <div className="mt-16">
        <ScrollReveal direction="up">
          <SectionHeading
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

function PartyMatrix({ parties }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Participating Parties"
          subtitle="Major national and regional parties represented in this simulation."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {parties.map((party, i) => (
          <PartyCard key={party.abbreviation} party={party} index={i} />
        ))}
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
        <span className="block text-xs font-medium uppercase tracking-wider text-text-secondary">
          {label}
        </span>
        <span className="mt-0.5 block font-medium text-text-primary">
          {value}
        </span>
        {sub && (
          <span className="mt-0.5 block text-xs text-text-secondary">
            {sub}
          </span>
        )}
      </div>
    </li>
  );
}

export default CommitteePage;
