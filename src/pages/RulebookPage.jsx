import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Shield,
  Landmark,
  FileText,
  Search,
  Scale,
  Award,
  AlertTriangle,
  Clock,
  Sparkles,
  ChevronDown,
  Download,
  ExternalLink,
  Laptop,
  CheckCircle2,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import GlowButton from '../components/ui/GlowButton';
import { siteConfig } from '../data/siteConfig';
import {
  unscRules,
  aippmRules,
  conferencePolicies,
  motionPrecedenceMatrix,
} from '../data/rules';

const TABS = [
  { id: 'unsc', label: 'UNSC Rules', icon: Shield, subtitle: 'UNA-USA Protocol' },
  { id: 'aippm', label: 'AIPPM Rules', icon: Landmark, subtitle: 'Parliamentary Protocol' },
  { id: 'motions', label: 'Motion Matrix', icon: Scale, subtitle: 'Annexure A' },
  { id: 'policies', label: 'Code & Policies', icon: BookOpen, subtitle: 'Ethics & Decorum' },
];

export default function RulebookPage() {
  const [activeTab, setActiveTab] = useState('unsc');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    'unsc-3.1': true,
    'unsc-3.5': true,
    'aippm-4.1': true,
  });

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Search filtering logic
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();

    const unscMatches = unscRules.sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.number.toLowerCase().includes(q) ||
        s.content.some((c) => c.toLowerCase().includes(q)),
    );

    const aippmMatches = aippmRules.sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.number.toLowerCase().includes(q) ||
        s.content.some((c) => c.toLowerCase().includes(q)),
    );

    const motionMatches = motionPrecedenceMatrix.filter(
      (m) =>
        m.motion.toLowerCase().includes(q) ||
        m.committee.toLowerCase().includes(q) ||
        m.purpose.toLowerCase().includes(q) ||
        m.vote.toLowerCase().includes(q),
    );

    const policyMatches = conferencePolicies.codeOfConduct.filter(
      (p) => p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q),
    );

    return {
      unsc: unscMatches,
      aippm: aippmMatches,
      motions: motionMatches,
      policies: policyMatches,
      totalCount:
        unscMatches.length + aippmMatches.length + motionMatches.length + policyMatches.length,
    };
  }, [searchQuery]);

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

      {/* Diplomatic Corner Ornaments */}
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
            title="Official Rulebook &amp; Delegate Handbook"
            subtitle="Codified Rules of Procedure, parliamentary protocols, code of conduct, and motion precedence governing MCCS 2026."
          />
        </ScrollReveal>

        {/* ───── Search & Quick Action Bar ───── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mt-6 mb-12 max-w-4xl">
            <div className="relative flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-3 sm:p-4 backdrop-blur-sm shadow-xl">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent-gold/80" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search rules, motions, points, veto, caucus, or policies..."
                  className="w-full rounded-lg border border-white/10 bg-ink/70 pl-10 pr-4 py-2.5 font-body text-sm text-white placeholder-white/40 focus:border-accent-gold focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 font-sans text-xs text-white/50 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Protocol Badge */}
              <div className="flex items-center gap-2 text-xs font-sans text-accent-gold/90 shrink-0 px-3 py-1.5 rounded-lg border border-accent-gold/20 bg-accent-gold/10">
                <FileText size={14} />
                <span>MCCS Official Edition 2026</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ───── Search Results View (If query active) ───── */}
        {searchResults && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
              <h3 className="font-serif text-xl font-bold text-white">
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h3>
              <span className="font-sans text-xs text-accent-gold font-semibold uppercase tracking-wider">
                {searchResults.totalCount} matches found
              </span>
            </div>

            {searchResults.totalCount === 0 ? (
              <div className="rounded-xl border border-white/10 bg-[#121E2A]/60 p-8 text-center text-white/60">
                <p>No rules or motions matched your query. Try searching for &ldquo;veto&rdquo;, &ldquo;caucus&rdquo;, &ldquo;points&rdquo;, or &ldquo;plagiarism&rdquo;.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* UNSC Matches */}
                {searchResults.unsc.map((rule) => (
                  <div key={rule.id} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider">
                        UNSC · {rule.number}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white mb-3">{rule.title}</h4>
                    <ul className="space-y-1.5 text-xs text-white/80">
                      {rule.content.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* AIPPM Matches */}
                {searchResults.aippm.map((rule) => (
                  <div key={rule.id} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider">
                        AIPPM · {rule.number}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white mb-3">{rule.title}</h4>
                    <ul className="space-y-1.5 text-xs text-white/80">
                      {rule.content.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Motion Matches */}
                {searchResults.motions.map((m) => (
                  <div key={m.motion} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-sans text-[11px] text-accent-gold uppercase tracking-wider block mb-1">
                        Motion Precedence · {m.committee}
                      </span>
                      <h4 className="font-serif text-base font-bold text-white">{m.motion}</h4>
                      <p className="font-body text-xs text-white/70 mt-1">{m.purpose}</p>
                    </div>
                    <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 font-sans text-xs text-accent-gold font-semibold shrink-0">
                      {m.vote}
                    </span>
                  </div>
                ))}

                {/* Policy Matches */}
                {searchResults.policies.map((p) => (
                  <div key={p.title} className="rounded-xl border border-red-500/30 bg-[#121E2A]/90 p-6">
                    <span className="font-sans text-xs text-red-400 font-semibold uppercase tracking-wider block mb-1">
                      Conference Policy · {p.severity}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mb-2">{p.title}</h4>
                    <p className="font-body text-xs text-white/80">{p.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ───── Tab Navigation ───── */}
        {!searchResults && (
          <>
            <ScrollReveal direction="up" delay={0.15}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 ${
                        isActive
                          ? 'border-accent-gold bg-[#152332] shadow-[0_8px_24px_rgba(184,151,106,0.2)]'
                          : 'border-accent-gold/20 bg-[#121E2A]/70 hover:border-accent-gold/40 hover:bg-[#121E2A]'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-accent-gold rounded-t-xl" />
                      )}
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg mb-2 transition-colors ${
                          isActive
                            ? 'border border-accent-gold/40 bg-accent-gold/20 text-accent-gold'
                            : 'border border-white/10 bg-white/5 text-white/60'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <span className="font-serif text-sm font-bold text-white block">
                        {tab.label}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-accent-gold/80 block mt-0.5">
                        {tab.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* ───── Tab Content Panels ───── */}
            <div className="mb-20">
              {/* TAB 1: UNSC Rules */}
              {activeTab === 'unsc' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Committee Architecture Briefing */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                      <div>
                        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                          Security Council Procedural Code
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {unscRules.committee}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 font-sans text-xs text-accent-gold font-semibold">
                          {unscRules.protocol}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-xs text-white/70">
                          {unscRules.format}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {unscRules.sections.map((rule) => {
                        const isExpanded = expandedSections[rule.id];
                        return (
                          <div
                            key={rule.id}
                            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                              rule.highlight
                                ? 'border-accent-gold/50 bg-[#162536]'
                                : 'border-white/10 bg-ink/50'
                            }`}
                          >
                            <button
                              onClick={() => toggleSection(rule.id)}
                              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-sans text-xs font-bold text-accent-gold uppercase tracking-wider px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/10">
                                  {rule.number}
                                </span>
                                <h4 className="font-serif text-base md:text-lg font-bold text-white">
                                  {rule.title}
                                </h4>
                              </div>
                              <ChevronDown
                                size={18}
                                className={`text-accent-gold transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {isExpanded && (
                              <div className="px-5 pb-5 pt-1 border-t border-white/5">
                                <ul className="space-y-2 text-xs md:text-sm text-white/80 leading-relaxed font-body">
                                  {rule.content.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                      <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: AIPPM Rules */}
              {activeTab === 'aippm' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                      <div>
                        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                          Indian Parliamentary Assembly Protocol
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {aippmRules.committee}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 font-sans text-xs text-accent-gold font-semibold">
                          {aippmRules.protocol}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-xs text-white/70">
                          {aippmRules.format}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {aippmRules.sections.map((rule) => {
                        const isExpanded = expandedSections[rule.id];
                        return (
                          <div
                            key={rule.id}
                            className="rounded-xl border border-white/10 bg-ink/50 overflow-hidden"
                          >
                            <button
                              onClick={() => toggleSection(rule.id)}
                              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-sans text-xs font-bold text-accent-gold uppercase tracking-wider px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/10">
                                  {rule.number}
                                </span>
                                <h4 className="font-serif text-base md:text-lg font-bold text-white">
                                  {rule.title}
                                </h4>
                              </div>
                              <ChevronDown
                                size={18}
                                className={`text-accent-gold transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {isExpanded && (
                              <div className="px-5 pb-5 pt-1 border-t border-white/5">
                                <ul className="space-y-2 text-xs md:text-sm text-white/80 leading-relaxed font-body">
                                  {rule.content.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                      <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: Motion Matrix */}
              {activeTab === 'motions' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm shadow-xl relative overflow-x-auto">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                    <div className="border-b border-white/10 pb-5 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Annexure A
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Motion Precedence &amp; Voting Threshold Quick Reference
                      </h3>
                      <p className="font-body text-xs md:text-sm text-white/70 mt-1">
                        Motions must be raised following parliamentary recognition. Higher precedence motions take priority over lower precedence motions.
                      </p>
                    </div>

                    <table className="w-full text-left font-body text-xs md:text-sm">
                      <thead>
                        <tr className="border-b border-accent-gold/30 text-accent-gold font-sans text-xs uppercase tracking-wider">
                          <th className="py-3 px-4">Priority</th>
                          <th className="py-3 px-4">Motion</th>
                          <th className="py-3 px-4">Applicability</th>
                          <th className="py-3 px-4">Purpose &amp; Scope</th>
                          <th className="py-3 px-4">Vote Required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {motionPrecedenceMatrix.map((item) => (
                          <tr key={item.motion} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 px-4 font-mono font-bold text-accent-gold">
                              #{item.priority}
                            </td>
                            <td className="py-4 px-4 font-serif font-bold text-white whitespace-nowrap">
                              {item.motion}
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-0.5 rounded text-[11px] font-sans font-semibold ${
                                  item.committee === 'UNSC Only'
                                    ? 'bg-blue-900/40 text-blue-300 border border-blue-500/30'
                                    : item.committee === 'AIPPM Only'
                                    ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30'
                                    : 'bg-white/5 text-white/80 border border-white/10'
                                }`}
                              >
                                {item.committee}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-white/80 max-w-md">
                              {item.purpose}
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap font-sans font-medium text-accent-gold">
                              {item.vote}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: Code & Policies */}
              {activeTab === 'policies' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Policies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {conferencePolicies.codeOfConduct.map((policy) => (
                      <div
                        key={policy.title}
                        className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-7 backdrop-blur-sm shadow-xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-sans text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border border-red-500/30 bg-red-950/40 text-red-300">
                            {policy.severity}
                          </span>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-white mb-2">
                          {policy.title}
                        </h4>
                        <p className="font-body text-xs md:text-sm text-white/75 leading-relaxed">
                          {policy.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Dress Code Standards */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-8 backdrop-blur-sm shadow-xl">
                    <h3 className="font-serif text-2xl font-bold text-white mb-6">
                      Official Conference Dress Code
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {conferencePolicies.dressCode.map((dc) => (
                        <div key={dc.day} className="rounded-xl border border-white/10 bg-ink/50 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider">
                              {dc.day}
                            </span>
                            <span className="text-[11px] font-sans text-white/50">{dc.committee}</span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-white mb-2">{dc.style}</h4>
                          <p className="font-body text-xs text-white/70 leading-relaxed">{dc.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </>
        )}

        {/* ───── Bottom Call to Action ───── */}
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
              Take the Floor Prepared
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2 relative z-10">
              <span className="h-px w-10 bg-accent-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent-gold" />
              <span className="h-px w-10 bg-accent-gold/40" />
            </div>
            <p className="mx-auto mt-4 max-w-xl font-body text-sm md:text-base text-white/70 relative z-10">
              Master the Rules of Procedure, prepare your position papers, and register your delegation for MCCS 2026 at NIT Patna.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <GlowButton href={siteConfig.registrationUrl} variant="gold">
                Register Delegation
              </GlowButton>
              <GlowButton to="/committees/unsc" variant="outline">
                Explore UNSC Committee
              </GlowButton>
              <GlowButton to="/committees/aippm" variant="outline">
                Explore AIPPM Committee
              </GlowButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
