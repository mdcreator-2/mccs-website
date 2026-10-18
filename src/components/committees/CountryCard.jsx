import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const badgeStyles = {
  P5: 'bg-accent-gold text-white',
  E10: 'bg-primary text-white',
  Invited: 'bg-text-secondary text-white',
};

function CountryCard({ country, index = 0 }) {
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
    >
      {/* Flag slide-in overlay */}
      <div
        className="absolute inset-y-0 left-0 z-0 bg-cover bg-center transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${country.flag})`,
          width: isHovered ? '100%' : '0%',
          opacity: isHovered ? 0.15 : 0,
        }}
        aria-hidden="true"
      />

      {/* Background icon (faint) */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.03]">
        <Shield size={72} strokeWidth={1} />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between p-5">
        {/* Top row: Badge + Veto tag */}
        <div className="flex items-start justify-between">
          <span
            className={`inline-block rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              badgeStyles[country.type] || badgeStyles.Invited
            }`}
          >
            {country.type}
          </span>
          {country.veto && (
            <span className="flex items-center gap-1 rounded-full bg-accent-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-gold">
              <CheckCircle size={12} />
              Veto
            </span>
          )}
        </div>

        {/* Country name + delegation type */}
        <div className="mt-auto">
          <h3
            className="font-serif text-xl font-bold text-text-primary transition-all duration-300"
            style={{
              textShadow: isHovered
                ? '0 1px 8px rgba(255,255,255,0.6)'
                : 'none',
            }}
          >
            {country.name}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">Dual Delegation</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CountryCard;
