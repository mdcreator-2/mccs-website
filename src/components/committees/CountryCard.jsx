import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const badgeStyles = {
  P5: 'bg-accent-gold text-ink font-bold border border-accent-gold',
  E10: 'bg-[#1C3B5E] text-white border border-accent-gold/30 font-semibold',
  Invited: 'bg-white/10 text-white/90 border border-white/20 font-medium',
};

function CountryCard({ country, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative min-h-[180px] cursor-pointer overflow-hidden rounded-lg border border-accent-gold/20 bg-[#121E2A]/90 transition-all duration-300 hover:border-accent-gold/50 hover:bg-[#152332] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
    >
      {/* Corner pips */}
      <span className="pointer-events-none absolute top-2 left-2 h-1 w-1 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/60 transition-colors" />
      <span className="pointer-events-none absolute top-2 right-2 h-1 w-1 rounded-full bg-accent-gold/30 group-hover:bg-accent-gold/60 transition-colors" />

      {/* Flag slide-in overlay with dark gradient protection for text contrast */}
      <div
        className="country-flag-overlay absolute inset-y-0 left-0 z-0 bg-cover bg-center transition-all duration-500 ease-out w-full opacity-[0.18] md:w-0 md:opacity-0 md:group-hover:w-full md:group-hover:opacity-[0.22]"
        style={{
          backgroundImage: `url(${country.flag})`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/60 to-transparent" />

      {/* Background icon (faint) */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]">
        <Shield size={72} strokeWidth={1} className="text-accent-gold" />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between p-5">
        {/* Top row: Badge */}
        <div className="flex items-start justify-between">
          <span
            className={`inline-block rounded px-2.5 py-1 text-[10px] font-sans uppercase tracking-wider ${
              badgeStyles[country.type] || badgeStyles.Invited
            }`}
          >
            {country.type}
          </span>
          <span className="font-mono text-[11px] text-accent-gold/60 uppercase">
            {country.code}
          </span>
        </div>

        {/* Country name + delegation type */}
        <div className="mt-auto">
          <h3 className="country-card-title font-serif text-xl font-bold text-white transition-colors duration-200 group-hover:text-accent-gold">
            {country.name}
          </h3>
          <p className="mt-1 font-sans text-xs text-white/60">Dual Delegation</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CountryCard;
