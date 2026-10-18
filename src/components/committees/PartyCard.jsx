import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const typeBadgeStyles = {
  ruling: 'bg-success text-white',
  opposition: 'bg-primary-light text-white',
  'ruling-ally': 'bg-accent-gold text-white',
  regional: 'bg-text-secondary text-white',
};

const typeLabels = {
  ruling: 'Ruling',
  opposition: 'Opposition',
  'ruling-ally': 'Ruling Ally',
  regional: 'Regional',
};

function PartyCard({ party, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative min-h-[180px] cursor-pointer overflow-hidden rounded-xl border border-border bg-surface transition-shadow duration-300 hover:shadow-lg"
      style={{ borderLeftWidth: '4px', borderLeftColor: party.color }}
    >
      {/* Party color slide-in overlay */}
      <div
        className="absolute inset-y-0 left-0 z-0 transition-all duration-500 ease-out"
        style={{
          backgroundColor: party.color,
          width: isHovered ? '100%' : '0%',
          opacity: isHovered ? 0.12 : 0,
        }}
        aria-hidden="true"
      />

      {/* Faint background icon */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.03]">
        <Users size={64} strokeWidth={1} />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between p-5">
        {/* Top row: Type badge */}
        <div className="flex items-start justify-between">
          <span
            className={`inline-block rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              typeBadgeStyles[party.type] || typeBadgeStyles.regional
            }`}
          >
            {typeLabels[party.type] || party.type}
          </span>
          <span
            className="rounded-full px-2.5 py-1 text-xs font-bold"
            style={{ color: party.color }}
          >
            {party.abbreviation}
          </span>
        </div>

        {/* Party name + leader */}
        <div className="mt-auto">
          <h3
            className="font-serif text-lg font-bold text-text-primary transition-all duration-300"
            style={{
              textShadow: isHovered
                ? '0 1px 8px rgba(255,255,255,0.6)'
                : 'none',
            }}
          >
            {party.name}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">
            Leader: {party.leader}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default PartyCard;
