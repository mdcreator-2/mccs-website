import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, User } from 'lucide-react';

const typeBadgeStyles = {
  nda: 'bg-amber-600/90 text-white border border-amber-400/40',
  india: 'bg-blue-600/90 text-white border border-blue-400/40',
  unaligned: 'bg-slate-600/90 text-white border border-slate-400/40',
  ruling: 'bg-emerald-700/90 text-white border border-emerald-500/40',
  opposition: 'bg-[#1C3B5E] text-white border border-accent-gold/30',
  'ruling-ally': 'bg-amber-700/90 text-white border border-amber-500/40',
  regional: 'bg-slate-700/90 text-white border border-slate-500/40',
};

const typeLabels = {
  nda: 'NDA',
  india: 'INDIA Bloc',
  unaligned: 'Unaligned',
  ruling: 'Ruling Party',
  opposition: 'Opposition',
  'ruling-ally': 'Ruling Ally',
  regional: 'Regional',
};

function PartyCard({ party, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[210px] cursor-pointer overflow-hidden rounded-lg border border-accent-gold/20 bg-[#121E2A]/90 transition-all duration-300 hover:border-accent-gold/50 hover:bg-[#152332] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between"
    >
      {/* Top accent line using party color */}
      <div
        className="absolute inset-x-0 top-0 h-[2.5px] z-[1]"
        style={{ backgroundColor: party.color }}
      />

      {/* Subtle corner pips */}
      <span className="pointer-events-none absolute top-2.5 left-2.5 h-1 w-1 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/60 transition-colors" />
      <span className="pointer-events-none absolute top-2.5 right-2.5 h-1 w-1 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/60 transition-colors" />

      {/* Party color slide-in overlay with dark protection */}
      <div
        className="absolute inset-y-0 left-0 z-0 transition-all duration-500 ease-out"
        style={{
          backgroundColor: party.color,
          width: isHovered ? '100%' : '0%',
          opacity: isHovered ? 0.08 : 0,
        }}
        aria-hidden="true"
      />

      {/* Faint background watermark */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]">
        <Users size={64} strokeWidth={1} className="text-accent-gold" />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex h-full min-h-[210px] flex-col justify-between p-5">
        {/* Top row: Type badge & Abbreviation */}
        <div className="flex items-start justify-between gap-2">
          <span
            className={`inline-block rounded px-2.5 py-1 text-[10px] font-sans uppercase tracking-wider font-semibold ${
              typeBadgeStyles[party.type] || typeBadgeStyles.regional
            }`}
          >
            {typeLabels[party.type] || party.type}
          </span>
          <span
            className="rounded px-2 py-0.5 text-xs font-sans font-bold border border-white/10 bg-white/5"
            style={{ color: party.color }}
          >
            {party.abbreviation}
          </span>
        </div>

        {/* Party name + leader */}
        <div className="mt-4">
          <h3 className="font-serif text-lg font-bold text-white leading-snug transition-colors duration-200 group-hover:text-accent-gold">
            {party.name}
          </h3>

          {party.leader && (
            <div className="mt-3.5 flex items-center gap-2.5 pt-3 border-t border-white/10">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                <User size={13} strokeWidth={2.2} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-sans font-medium uppercase tracking-wider text-accent-gold/80">
                  Party Leader
                </span>
                <span className="block truncate font-sans text-xs font-semibold text-white/95">
                  {party.leader}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default PartyCard;
