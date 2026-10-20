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
  ChevronUp,
  Download,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Users,
  MessageSquare,
  HelpCircle,
  Info,
  Gavel,
  Shirt,
  Calendar,
  MapPin,
  ListOrdered,
  Layers,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import GlowButton from '../components/ui/GlowButton';
import { siteConfig } from '../data/siteConfig';
import {
  rulebookMetadata,
  conferenceAtAGlance,
  registrationAndAllocation,
  codeOfConduct,
  committeeBureau,
  flowOfDebate,
  speakersListAndYields,
  motionsAndPointsRules,
  draftResolutionsRules,
  chitsRules,
  unscSpecificData,
  aippmSpecificData,
  awardsAndScoringData,
  icebreakerAndDelegatesChoice,
  quickPhraseGuide,
  unscRules,
  aippmRules,
  conferencePolicies,
  motionPrecedenceMatrix,
} from '../data/rules';

const TABS = [
  { id: 'overview', label: 'Overview & Conduct', icon: BookOpen, subtitle: 'Sections 1 – 3' },
  { id: 'rop', label: 'General Procedure', icon: FileText, subtitle: 'Sections 4 – 6, 8 – 9' },
  { id: 'unsc', label: 'UNSC Rules', icon: Shield, subtitle: 'Section 10' },
  { id: 'aippm', label: 'AIPPM Rules', icon: Landmark, subtitle: 'Section 11' },
  { id: 'motions', label: 'Motions & Phrases', icon: Scale, subtitle: 'Sections 7 & 14' },
  { id: 'scoring', label: 'Scoring & Awards', icon: Award, subtitle: 'Sections 12 – 13' },
];

export default function RulebookPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    'unsc-composition': true,
    'unsc-rules': true,
    'aippm-rules': true,
    'conduct-all': true,
    'res-format': true,
    'res-voting': true,
  });

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Comprehensive search across all 14 sections
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();

    // Section 1: At a Glance
    const glanceMatches = conferenceAtAGlance.filter(
      (item) =>
        item.field.toLowerCase().includes(q) ||
        item.unsc.toLowerCase().includes(q) ||
        item.aippm.toLowerCase().includes(q)
    );

    // Section 2: Registration
    const regMatches = registrationAndAllocation.filter(
      (item) => item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
    );

    // Section 3: Conduct
    const conductMatches = codeOfConduct.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q)
    );

    // Section 4: Bureau
    const bureauMatches = committeeBureau.filter(
      (item) => item.role.toLowerCase().includes(q) || item.responsibilities.toLowerCase().includes(q)
    );

    // Section 5: Flow of Debate
    const flowMatches = flowOfDebate.filter(
      (item) => item.stage.toLowerCase().includes(q) || item.details.toLowerCase().includes(q)
    );

    // Section 6: Speakers List
    const speakerMatches = [];
    if (
      speakersListAndYields.generalSpeakersList.toLowerCase().includes(q) ||
      speakersListAndYields.speakingTime.toLowerCase().includes(q) ||
      speakersListAndYields.yields.toLowerCase().includes(q)
    ) {
      speakerMatches.push({
        title: 'Speakers\' List & Yields',
        text: `${speakersListAndYields.generalSpeakersList} ${speakersListAndYields.speakingTime} ${speakersListAndYields.yields}`,
      });
    }

    // Section 7: Motions & Points
    const motionMatches = motionsAndPointsRules.motionsTable.filter(
      (m) =>
        m.motion.toLowerCase().includes(q) ||
        m.purpose.toLowerCase().includes(q) ||
        m.mustState.toLowerCase().includes(q)
    );
    const pointMatches = motionsAndPointsRules.pointsTable.filter(
      (p) =>
        p.point.toLowerCase().includes(q) ||
        p.use.toLowerCase().includes(q) ||
        p.mayInterrupt.toLowerCase().includes(q)
    );

    // Section 8: Draft Resolutions
    const resMatches = [];
    draftResolutionsRules.formatAndSubmission.forEach((item, idx) => {
      if (item.toLowerCase().includes(q)) {
        resMatches.push({ section: 'Format & Submission', text: item });
      }
    });
    draftResolutionsRules.introductionAndAmendments.forEach((item, idx) => {
      if (item.toLowerCase().includes(q)) {
        resMatches.push({ section: 'Introduction & Amendments', text: item });
      }
    });
    draftResolutionsRules.votingProcedure.forEach((item, idx) => {
      if (item.toLowerCase().includes(q)) {
        resMatches.push({ section: 'Voting Procedure', text: item });
      }
    });

    // Section 9: Chits
    const chitsMatches = chitsRules.filter((text) => text.toLowerCase().includes(q));

    // Section 10: UNSC
    const unscMatches = unscSpecificData.rules.filter(
      (r) => r.title.toLowerCase().includes(q) || r.text.toLowerCase().includes(q)
    );
    const unscCompMatches = unscSpecificData.compositionTable.filter(
      (c) =>
        c.category.toLowerCase().includes(q) ||
        c.members.toLowerCase().includes(q) ||
        c.status.toLowerCase().includes(q)
    );

    // Section 11: AIPPM
    const aippmMatches = aippmSpecificData.rules.filter(
      (r) => r.title.toLowerCase().includes(q) || r.text.toLowerCase().includes(q)
    );

    // Section 12: Scoring & Awards
    const criteriaMatches = awardsAndScoringData.evaluationCriteria.filter(
      (c) =>
        c.criterion.toLowerCase().includes(q) ||
        c.whatBureauLooksFor.toLowerCase().includes(q)
    );
    const awardMatches = awardsAndScoringData.awardsList.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.eligibility.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
    );

    // Section 13: Icebreaker & Best Dressed
    const iceMatches = [];
    if (
      icebreakerAndDelegatesChoice.icebreaker.description.toLowerCase().includes(q) ||
      icebreakerAndDelegatesChoice.icebreaker.title.toLowerCase().includes(q)
    ) {
      iceMatches.push({
        title: icebreakerAndDelegatesChoice.icebreaker.title,
        text: icebreakerAndDelegatesChoice.icebreaker.description,
      });
    }
    icebreakerAndDelegatesChoice.delegatesChoice.rules.forEach((rule) => {
      if (rule.toLowerCase().includes(q)) {
        iceMatches.push({
          title: "Delegate's Choice: Best Dressed",
          text: rule,
        });
      }
    });

    // Section 14: Quick Phrase Guide
    const phraseMatches = quickPhraseGuide.filter(
      (p) => p.intent.toLowerCase().includes(q) || p.phrase.toLowerCase().includes(q)
    );

    const totalCount =
      glanceMatches.length +
      regMatches.length +
      conductMatches.length +
      bureauMatches.length +
      flowMatches.length +
      speakerMatches.length +
      motionMatches.length +
      pointMatches.length +
      resMatches.length +
      chitsMatches.length +
      unscMatches.length +
      unscCompMatches.length +
      aippmMatches.length +
      criteriaMatches.length +
      awardMatches.length +
      iceMatches.length +
      phraseMatches.length;

    return {
      glance: glanceMatches,
      registration: regMatches,
      conduct: conductMatches,
      bureau: bureauMatches,
      flow: flowMatches,
      speaker: speakerMatches,
      motions: motionMatches,
      points: pointMatches,
      resolutions: resMatches,
      chits: chitsMatches,
      unsc: unscMatches,
      unscComp: unscCompMatches,
      aippm: aippmMatches,
      criteria: criteriaMatches,
      awards: awardMatches,
      icebreaker: iceMatches,
      phrases: phraseMatches,
      totalCount,
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
        {/* ───── Official Header ───── */}
        <ScrollReveal direction="up">
          <div className="text-center mb-4">
            <span className="font-sans text-xs uppercase tracking-widest text-accent-gold font-bold px-3 py-1 rounded-full border border-accent-gold/30 bg-accent-gold/10 inline-block mb-3">
              {rulebookMetadata.organization} &bull; {rulebookMetadata.institution}
            </span>
          </div>
          <SectionHeading
            light
            title="Official Delegate Rulebook"
            subtitle={`${rulebookMetadata.title} · ${rulebookMetadata.dates} · ${rulebookMetadata.committees}`}
          />
        </ScrollReveal>

        {/* ───── Preamble Banner ───── */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="mx-auto max-w-4xl mt-4 mb-8">
            <div className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5 backdrop-blur-sm shadow-lg flex items-start gap-3.5">
              <Gavel className="text-accent-gold shrink-0 mt-0.5" size={20} />
              <div className="text-xs sm:text-sm font-body text-white/90 leading-relaxed">
                <span className="font-semibold text-accent-gold">Governing Framework: </span>
                {rulebookMetadata.preamble}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ───── Search & Quick Action Bar ───── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mb-10 max-w-4xl">
            <div className="relative flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-accent-gold/25 bg-[#121E2A]/90 p-3 sm:p-4 backdrop-blur-sm shadow-xl">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent-gold/80" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search rules, motions, points, draft resolutions, chits, scoring criteria, dress code..."
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
                <span>14 Codified Sections</span>
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
                <p>No rules or sections matched your query. Try searching for &ldquo;caucus&rdquo;, &ldquo;sponsors&rdquo;, &ldquo;placard&rdquo;, &ldquo;points&rdquo;, &ldquo;chits&rdquo;, or &ldquo;delimitation&rdquo;.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Conference at a Glance matches */}
                {searchResults.glance.map((g) => (
                  <div key={g.field} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 1 · Conference at a Glance
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-2">{g.field}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-white/80">
                      <div><strong className="text-accent-gold">UNSC:</strong> {g.unsc}</div>
                      <div><strong className="text-accent-gold">AIPPM:</strong> {g.aippm}</div>
                    </div>
                  </div>
                ))}

                {/* Registration matches */}
                {searchResults.registration.map((r) => (
                  <div key={r.title} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 2 · Registration &amp; Allocation
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{r.title}</h4>
                    <p className="font-body text-xs text-white/80">{r.text}</p>
                  </div>
                ))}

                {/* Conduct matches */}
                {searchResults.conduct.map((c) => (
                  <div key={c.id} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider">
                        Section 3 · Code of Conduct
                      </span>
                      <span className="text-[11px] font-sans text-accent-gold/80 px-2 py-0.5 rounded border border-accent-gold/20 bg-accent-gold/5">
                        {c.tag}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{c.title}</h4>
                    <p className="font-body text-xs text-white/80">{c.text}</p>
                  </div>
                ))}

                {/* Bureau matches */}
                {searchResults.bureau.map((b) => (
                  <div key={b.role} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 4 · The Committee Bureau
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{b.role}</h4>
                    <p className="font-body text-xs text-white/80">{b.responsibilities}</p>
                  </div>
                ))}

                {/* Flow matches */}
                {searchResults.flow.map((f) => (
                  <div key={f.stage} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 5 · Flow of Debate (Step {f.step})
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{f.stage}</h4>
                    <p className="font-body text-xs text-white/80">{f.details}</p>
                  </div>
                ))}

                {/* Speakers list matches */}
                {searchResults.speaker.map((s, idx) => (
                  <div key={idx} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 6 · Speakers&apos; List, Speaking Time and Yields
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{s.title}</h4>
                    <p className="font-body text-xs text-white/80">{s.text}</p>
                  </div>
                ))}

                {/* Motion matches */}
                {searchResults.motions.map((m) => (
                  <div key={m.motion} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-sans text-[11px] text-accent-gold uppercase tracking-wider block mb-1">
                        Section 7 · Motion (Precedence #{m.order})
                      </span>
                      <h4 className="font-serif text-base font-bold text-white">{m.motion}</h4>
                      <p className="font-body text-xs text-white/70 mt-1">{m.purpose}</p>
                      <p className="font-sans text-[11px] text-accent-gold/80 mt-1">Must state: {m.mustState}</p>
                    </div>
                  </div>
                ))}

                {/* Points matches */}
                {searchResults.points.map((p) => (
                  <div key={p.point} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 7 · Points
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">Point of {p.point}</h4>
                    <p className="font-body text-xs text-white/80">{p.use}</p>
                    <span className="text-[11px] font-sans text-accent-gold/90 mt-2 inline-block">
                      May interrupt speaker? <strong className="text-white">{p.mayInterrupt}</strong>
                    </span>
                  </div>
                ))}

                {/* Draft resolution matches */}
                {searchResults.resolutions.map((r, idx) => (
                  <div key={idx} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 8 · Draft Resolutions &amp; Voting ({r.section})
                    </span>
                    <p className="font-body text-xs text-white/80">{r.text}</p>
                  </div>
                ))}

                {/* Chits matches */}
                {searchResults.chits.map((c, idx) => (
                  <div key={idx} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 9 · Chits
                    </span>
                    <p className="font-body text-xs text-white/80">{c}</p>
                  </div>
                ))}

                {/* UNSC Specific matches */}
                {searchResults.unsc.map((u) => (
                  <div key={u.title} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 10 · UNSC Specific Rules
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{u.title}</h4>
                    <p className="font-body text-xs text-white/80">{u.text}</p>
                  </div>
                ))}
                {searchResults.unscComp.map((c) => (
                  <div key={c.category} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 10 · UNSC Composition
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{c.category} ({c.status})</h4>
                    <p className="font-body text-xs text-white/80">{c.members}</p>
                  </div>
                ))}

                {/* AIPPM Specific matches */}
                {searchResults.aippm.map((a) => (
                  <div key={a.title} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 11 · AIPPM Specific Rules
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{a.title}</h4>
                    <p className="font-body text-xs text-white/80">{a.text}</p>
                  </div>
                ))}

                {/* Scoring criteria matches */}
                {searchResults.criteria.map((c) => (
                  <div key={c.criterion} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 12 · Scoring Matrix (Max: UNSC {c.unsc} pts | AIPPM {c.aippm} pts)
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{c.criterion}</h4>
                    <p className="font-body text-xs text-white/80">{c.whatBureauLooksFor}</p>
                  </div>
                ))}

                {/* Award matches */}
                {searchResults.awards.map((a) => (
                  <div key={a.name} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 12 · Awards ({a.eligibility})
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{a.name}</h4>
                    <p className="font-body text-xs text-white/80">{a.description}</p>
                  </div>
                ))}

                {/* Icebreaker & Best Dressed */}
                {searchResults.icebreaker.map((i, idx) => (
                  <div key={idx} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 13 · Icebreaker &amp; Delegate&apos;s Choice
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">{i.title}</h4>
                    <p className="font-body text-xs text-white/80">{i.text}</p>
                  </div>
                ))}

                {/* Phrase Guide matches */}
                {searchResults.phrases.map((p) => (
                  <div key={p.intent} className="rounded-xl border border-accent-gold/30 bg-[#121E2A]/90 p-5">
                    <span className="font-sans text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                      Section 14 · Quick Phrase Guide
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mb-1">When I want to: {p.intent}</h4>
                    <p className="font-mono text-xs text-accent-gold bg-ink/70 p-2.5 rounded border border-white/5">{p.phrase}</p>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-300 ${
                        isActive
                          ? 'border-accent-gold bg-[#152332] shadow-[0_8px_24px_rgba(184,151,106,0.2)]'
                          : 'border-accent-gold/20 bg-[#121E2A]/70 hover:border-accent-gold/40 hover:bg-[#121E2A]'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-accent-gold rounded-t-xl" />
                      )}
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg mb-2 transition-colors ${
                          isActive
                            ? 'border border-accent-gold/40 bg-accent-gold/20 text-accent-gold'
                            : 'border border-white/10 bg-white/5 text-white/60'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-bold text-white block leading-tight">
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
              {/* TAB 1: Overview & Conduct (Sections 1 – 3) */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Section 1: The Conference at a Glance */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative overflow-x-auto">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 1
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        The Conference at a Glance
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Executive comparison of council parameters, agendas, delegate strength, voting procedures, and dress code.
                      </p>
                    </div>

                    <table className="w-full text-left font-body text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-accent-gold/30 text-accent-gold font-sans text-xs uppercase tracking-wider">
                          <th className="py-3 px-4 w-1/4">Parameter</th>
                          <th className="py-3 px-4 w-3/8 text-blue-300">UNSC</th>
                          <th className="py-3 px-4 w-3/8 text-amber-300">AIPPM</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {conferenceAtAGlance.map((row) => (
                          <tr key={row.field} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 px-4 font-serif font-bold text-white whitespace-nowrap">
                              {row.field}
                            </td>
                            <td className="py-3 px-4 text-white/90 leading-relaxed">
                              {row.unsc}
                            </td>
                            <td className="py-3 px-4 text-white/90 leading-relaxed">
                              {row.aippm}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Section 2: Registration and Allocation */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 2
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Registration and Allocation
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Policies governing portfolio preferences, first-come first-served allotments, and dual-delegation quotas.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {registrationAndAllocation.map((item, idx) => (
                        <div key={item.title} className="rounded-xl border border-white/10 bg-ink/50 p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold">
                              {idx + 1}
                            </span>
                            <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                          </div>
                          <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Code of Conduct */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 3
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Code of Conduct &amp; Ethics
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Mandatory behavioral standards, speech ethics, originality guidelines, penalties, and grievance mechanisms.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {codeOfConduct.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-xl border border-white/10 bg-ink/50 p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-sans text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/10 text-accent-gold font-semibold">
                                {item.tag}
                              </span>
                            </div>
                            <h4 className="font-serif text-base font-bold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: General Rules of Procedure (Sections 4 – 6, 8 – 9) */}
              {activeTab === 'rop' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Section 4: The Committee Bureau */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 4
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        The Committee Bureau
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Roles, powers, and responsibilities of the Executive Dais in each committee.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {committeeBureau.map((officer) => (
                        <div key={officer.role} className="rounded-xl border border-white/10 bg-ink/50 p-5">
                          <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-gold block mb-1">
                            Executive Dais
                          </span>
                          <h4 className="font-serif text-xl font-bold text-white mb-2">{officer.role}</h4>
                          <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                            {officer.responsibilities}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 5: Flow of Debate */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 5
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Flow of Debate &amp; Parliamentary Cycle
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        From opening roll call to final adjournment: how debate progresses through committee sessions.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {flowOfDebate.map((step) => (
                        <div key={step.step} className="rounded-xl border border-white/10 bg-ink/50 p-4 flex items-start gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent-gold/40 bg-accent-gold/20 font-serif font-bold text-accent-gold text-sm">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="font-serif text-base font-bold text-white mb-1">{step.stage}</h4>
                            <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 6: Speakers' List, Speaking Time and Yields */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 6
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Speakers&apos; List, Speaking Time and Yields
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Floor recognition rules, default speaking durations, and permissible yield structures.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-xl border border-white/10 bg-ink/50 p-5">
                        <h4 className="font-serif text-base font-bold text-accent-gold mb-1">
                          General Speakers&apos; List (GSL)
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                          {speakersListAndYields.generalSpeakersList}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-white/10 bg-ink/50 p-5">
                          <h4 className="font-serif text-base font-bold text-accent-gold mb-1">
                            Speaking Time Protocol
                          </h4>
                          <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                            {speakersListAndYields.speakingTime}
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-ink/50 p-5">
                          <h4 className="font-serif text-base font-bold text-accent-gold mb-1">
                            Yielding Regulations
                          </h4>
                          <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                            {speakersListAndYields.yields}
                          </p>
                        </div>
                      </div>

                      {/* Yield Types Breakdown */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {speakersListAndYields.yieldTypes.map((y) => (
                          <div key={y.target} className="p-3.5 rounded-lg border border-accent-gold/20 bg-accent-gold/5">
                            <span className="font-serif text-sm font-bold text-white block mb-0.5">{y.target}</span>
                            <span className="font-body text-xs text-white/70">{y.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 8: Draft Resolutions and Voting */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 8
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Draft Resolutions and Voting
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Resolution clause structure, sponsorship requirements, amendments, and chamber lockdown voting protocol.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Format and Submission */}
                      <div className="rounded-xl border border-white/10 bg-ink/50 p-5">
                        <h4 className="font-serif text-base font-bold text-accent-gold mb-3 flex items-center gap-2">
                          <FileText size={18} />
                          <span>Format and Submission</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-body">
                          {draftResolutionsRules.formatAndSubmission.map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                              <span className="leading-relaxed">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Introduction, debate and amendments */}
                      <div className="rounded-xl border border-white/10 bg-ink/50 p-5">
                        <h4 className="font-serif text-base font-bold text-accent-gold mb-3 flex items-center gap-2">
                          <Layers size={18} />
                          <span>Introduction, Debate and Amendments</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-body">
                          {draftResolutionsRules.introductionAndAmendments.map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                              <span className="leading-relaxed">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Voting Procedure */}
                      <div className="rounded-xl border border-accent-gold/30 bg-[#162536] p-5">
                        <h4 className="font-serif text-base font-bold text-accent-gold mb-3 flex items-center gap-2">
                          <Gavel size={18} />
                          <span>Voting Procedure (Room Sealed)</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 font-body">
                          {draftResolutionsRules.votingProcedure.map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                              <span className="leading-relaxed">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 9: Chits */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 9
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Chits Policy &amp; Routing
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Bilateral communication during formal sessions through the Chair&apos;s desk.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {chitsRules.map((rule, idx) => (
                        <div key={idx} className="rounded-xl border border-white/10 bg-ink/50 p-5 flex items-start gap-3">
                          <MessageSquare className="text-accent-gold shrink-0 mt-1" size={18} />
                          <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                            {rule}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: UNSC Rules (Section 10) */}
              {activeTab === 'unsc' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                      <div>
                        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                          Section 10 · Security Council Procedural Code
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {unscSpecificData.committee}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                          <strong>Agenda:</strong> {unscSpecificData.agenda}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 font-sans text-xs text-accent-gold font-semibold">
                          Harvard RoP Base
                        </span>
                        <span className="rounded-full border border-red-500/30 bg-red-950/40 px-3 py-1 font-sans text-xs text-red-300 font-semibold">
                          NO VETO POWER
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-xs text-white/70">
                          {unscSpecificData.format}
                        </span>
                      </div>
                    </div>

                    {/* Composition Table */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-serif text-lg font-bold text-white">
                          Council Composition &amp; Membership
                        </h4>
                        <span className="font-sans text-[11px] text-white/50 italic">
                          {unscSpecificData.compositionNote}
                        </span>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-left font-body text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-accent-gold/30 bg-ink/60 text-accent-gold font-sans text-xs uppercase tracking-wider">
                              <th className="py-3 px-4 w-1/3">Category</th>
                              <th className="py-3 px-4 w-1/2">Members</th>
                              <th className="py-3 px-4">Voting Rights</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 bg-ink/30">
                            {unscSpecificData.compositionTable.map((row) => (
                              <tr key={row.category} className="hover:bg-white/[0.02] transition-colors">
                                <td className="py-3.5 px-4 font-serif font-bold text-white">
                                  {row.category}
                                </td>
                                <td className="py-3.5 px-4 text-white/80 leading-relaxed">
                                  {row.members}
                                </td>
                                <td className="py-3.5 px-4">
                                  <span className={`px-2.5 py-1 rounded text-xs font-sans font-semibold ${
                                    row.status.includes('No Veto')
                                      ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30'
                                      : row.status.includes('Non-voting')
                                      ? 'bg-red-900/40 text-red-300 border border-red-500/30'
                                      : 'bg-blue-900/40 text-blue-300 border border-blue-500/30'
                                  }`}>
                                    {row.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* UNSC Specific Rules */}
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white mb-4">
                        Council Specific Rules
                      </h4>
                      <div className="space-y-3.5">
                        {unscSpecificData.rules.map((rule) => (
                          <div
                            key={rule.title}
                            className={`rounded-xl border p-5 transition-all ${
                              rule.highlight
                                ? 'border-accent-gold/60 bg-[#172637] shadow-md'
                                : 'border-white/10 bg-ink/50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="font-serif text-base font-bold text-white">
                                {rule.title}
                              </span>
                              {rule.highlight && (
                                <span className="font-sans text-[10px] font-bold text-accent-gold uppercase tracking-wider px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/15">
                                  Crucial Procedure Change
                                </span>
                              )}
                            </div>
                            <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                              {rule.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: AIPPM Rules (Section 11) */}
              {activeTab === 'aippm' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                      <div>
                        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                          Section 11 · Indian Parliamentary Forum Protocol
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {aippmSpecificData.committee}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                          <strong>Agenda:</strong> {aippmSpecificData.agenda}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 font-sans text-xs text-accent-gold font-semibold">
                          Parliamentary Style
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-xs text-white/70">
                          {aippmSpecificData.format}
                        </span>
                      </div>
                    </div>

                    {/* AIPPM Rules List */}
                    <div className="space-y-3.5">
                      {aippmSpecificData.rules.map((rule) => (
                        <div
                          key={rule.title}
                          className="rounded-xl border border-white/10 bg-ink/50 p-5"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-serif text-base font-bold text-white">
                              {rule.title}
                            </span>
                          </div>
                          <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                            {rule.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 5: Motions & Phrases (Sections 7 & 14) */}
              {activeTab === 'motions' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Section 7: Motions and Points */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 7
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Motions and Points
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        {motionsAndPointsRules.general}
                      </p>
                    </div>

                    {/* Order of Precedence Box */}
                    <div className="rounded-xl border border-accent-gold/30 bg-accent-gold/5 p-4 mb-6">
                      <span className="font-sans text-xs font-bold text-accent-gold uppercase tracking-wider block mb-2">
                        Order of Precedence (When multiple motions are on the floor)
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold">
                        {motionsAndPointsRules.motionsOrderOfPrecedence.map((m, idx) => (
                          <div key={m} className="flex items-center gap-2">
                            <span className="bg-ink/80 text-white px-3 py-1.5 rounded border border-white/10">
                              {idx + 1}. {m}
                            </span>
                            {idx < motionsAndPointsRules.motionsOrderOfPrecedence.length - 1 && (
                              <span className="text-accent-gold">&gt;</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Motions Table */}
                    <h4 className="font-serif text-lg font-bold text-white mb-3">
                      Permissible Parliamentary Motions
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
                      <table className="w-full text-left font-body text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-accent-gold/30 bg-ink/60 text-accent-gold font-sans text-xs uppercase tracking-wider">
                            <th className="py-3 px-4">Motion</th>
                            <th className="py-3 px-4">Purpose</th>
                            <th className="py-3 px-4">Must State</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-ink/30">
                          {motionsAndPointsRules.motionsTable.map((m) => (
                            <tr key={m.motion} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-3.5 px-4 font-serif font-bold text-white whitespace-nowrap">
                                {m.motion}
                              </td>
                              <td className="py-3.5 px-4 text-white/80 max-w-md">
                                {m.purpose}
                              </td>
                              <td className="py-3.5 px-4 font-sans text-xs text-accent-gold font-medium">
                                {m.mustState}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Points Table */}
                    <h4 className="font-serif text-lg font-bold text-white mb-3">
                      Parliamentary Points
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-white/10">
                      <table className="w-full text-left font-body text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-accent-gold/30 bg-ink/60 text-accent-gold font-sans text-xs uppercase tracking-wider">
                            <th className="py-3 px-4">Point</th>
                            <th className="py-3 px-4">Use</th>
                            <th className="py-3 px-4 whitespace-nowrap">May Interrupt Speaker?</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-ink/30">
                          {motionsAndPointsRules.pointsTable.map((p) => (
                            <tr key={p.point} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-3.5 px-4 font-serif font-bold text-white whitespace-nowrap">
                                Point of {p.point}
                              </td>
                              <td className="py-3.5 px-4 text-white/80 max-w-md">
                                {p.use}
                              </td>
                              <td className="py-3.5 px-4 whitespace-nowrap">
                                <span className={`px-2.5 py-1 rounded text-xs font-sans font-semibold ${
                                  p.mayInterrupt === 'Yes'
                                    ? 'bg-red-900/40 text-red-300 border border-red-500/30'
                                    : p.mayInterrupt.includes('Only')
                                    ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30'
                                    : 'bg-white/5 text-white/70 border border-white/10'
                                }`}>
                                  {p.mayInterrupt}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section 14: Quick Phrase Guide */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 14
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Quick Phrase Guide
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Exact parliamentary phrases for floor interventions, motions, and points.
                      </p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-white/10">
                      <table className="w-full text-left font-body text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-accent-gold/30 bg-ink/60 text-accent-gold font-sans text-xs uppercase tracking-wider">
                            <th className="py-3 px-4 w-1/3">I want to ...</th>
                            <th className="py-3 px-4 w-2/3">I say ...</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-ink/30">
                          {quickPhraseGuide.map((q) => (
                            <tr key={q.intent} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-3.5 px-4 font-serif font-bold text-white">
                                {q.intent}
                              </td>
                              <td className="py-3.5 px-4 font-mono text-xs sm:text-sm text-accent-gold">
                                {q.phrase}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 6: Scoring & Awards (Sections 12 – 13) */}
              {activeTab === 'scoring' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Section 12: Awards and Scoring */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 12
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Awards and Scoring System
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        {awardsAndScoringData.scoringProcess}
                      </p>
                    </div>

                    {/* Evaluation Matrix Table */}
                    <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
                      <table className="w-full text-left font-body text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-accent-gold/30 bg-ink/60 text-accent-gold font-sans text-xs uppercase tracking-wider">
                            <th className="py-3 px-4 w-1/4">Criterion</th>
                            <th className="py-3 px-4 w-1/2">What the Bureau Looks For</th>
                            <th className="py-3 px-4 text-center text-blue-300">UNSC (Marks)</th>
                            <th className="py-3 px-4 text-center text-amber-300">AIPPM (Marks)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-ink/30">
                          {awardsAndScoringData.evaluationCriteria.map((item) => (
                            <tr key={item.criterion} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-3.5 px-4 font-serif font-bold text-white">
                                {item.criterion}
                              </td>
                              <td className="py-3.5 px-4 text-white/80">
                                {item.whatBureauLooksFor}
                              </td>
                              <td className="py-3.5 px-4 text-center font-mono font-bold text-blue-300">
                                {item.unsc}
                              </td>
                              <td className="py-3.5 px-4 text-center font-mono font-bold text-amber-300">
                                {item.aippm}
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-accent-gold/10 font-bold border-t border-accent-gold/30">
                            <td className="py-3 px-4 font-serif text-white">Total Marks</td>
                            <td className="py-3 px-4 text-xs font-sans text-accent-gold uppercase tracking-wider">Cumulative Total</td>
                            <td className="py-3 px-4 text-center font-mono text-accent-gold">100</td>
                            <td className="py-3 px-4 text-center font-mono text-accent-gold">100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Awards List */}
                    <h4 className="font-serif text-lg font-bold text-white mb-3">
                      Official Committee Awards
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      {awardsAndScoringData.awardsList.map((award) => (
                        <div key={award.name} className="rounded-xl border border-white/10 bg-ink/50 p-5 flex flex-col justify-between">
                          <div>
                            <span className="font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/10 text-accent-gold inline-block mb-2">
                              {award.eligibility}
                            </span>
                            <h5 className="font-serif text-lg font-bold text-white mb-2">{award.name}</h5>
                            <p className="font-body text-xs text-white/75 leading-relaxed">{award.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="font-body text-xs text-white/60 italic">
                      <strong>Tie-Breaking Protocol:</strong> {awardsAndScoringData.tieBreaker}
                    </p>
                  </div>

                  {/* Section 13: Icebreaker and Delegate's Choice Awards */}
                  <div className="rounded-2xl border border-accent-gold/25 bg-[#121E2A]/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative">
                    <span className="pointer-events-none absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />
                    <span className="pointer-events-none absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent-gold/30" />

                    <div className="border-b border-white/10 pb-4 mb-6">
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-gold block mb-1">
                        Section 13
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Icebreaker &amp; Delegate&apos;s Choice Awards
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                        Community building session and peer-voted recognition.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Icebreaker */}
                      <div className="rounded-xl border border-white/10 bg-ink/50 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="text-accent-gold" size={20} />
                          <h4 className="font-serif text-lg font-bold text-white">
                            {icebreakerAndDelegatesChoice.icebreaker.title}
                          </h4>
                        </div>
                        <span className="font-sans text-xs text-accent-gold block mb-3">
                          {icebreakerAndDelegatesChoice.icebreaker.date}
                        </span>
                        <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed mb-3">
                          {icebreakerAndDelegatesChoice.icebreaker.description}
                        </p>
                        <p className="font-body text-xs text-white/60 italic">
                          {icebreakerAndDelegatesChoice.icebreaker.organizer}
                        </p>
                      </div>

                      {/* Delegate's Choice: Best Dressed */}
                      <div className="rounded-xl border border-white/10 bg-ink/50 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Shirt className="text-accent-gold" size={20} />
                          <h4 className="font-serif text-lg font-bold text-white">
                            {icebreakerAndDelegatesChoice.delegatesChoice.title}
                          </h4>
                        </div>
                        <div className="flex gap-2 mb-3">
                          {icebreakerAndDelegatesChoice.delegatesChoice.awards.map((name) => (
                            <span key={name} className="px-2.5 py-0.5 rounded text-xs font-sans font-semibold border border-accent-gold/30 bg-accent-gold/10 text-accent-gold">
                              {name}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-body">
                          {icebreakerAndDelegatesChoice.delegatesChoice.rules.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                              <span className="leading-relaxed">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
              Master the Rules of Procedure, prepare your position papers, and register your delegation for NIT Patna MUN 2026.
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
