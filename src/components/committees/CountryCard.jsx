import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const badgeStyles = {
  P5: 'bg-accent-gold text-white',
  E10: 'bg-primary text-white',
  Invited: 'bg-text-secondary text-white',
};

function CountryCard({ country, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className="group relative min-h-[180px] cursor-pointer overflow-hidden rounded-xl border border-border bg-surface transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Flag slide-in overlay (visible on phones, hover slide-in on desktop) */}
      <div
        className="country-flag-overlay absolute inset-y-0 left-0 z-0 bg-cover bg-center transition-all duration-500 ease-out w-full opacity-[0.15] md:w-0 md:opacity-0 md:group-hover:w-full md:group-hover:opacity-[0.15]"
        style={{
          backgroundImage: `url(${country.flag})`,
        }}
        aria-hidden="true"
      />

      {/* Background icon (faint) */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-0 opacity-[0.03] transition-opacity duration-300 md:opacity-[0.06] md:group-hover:opacity-[0.03]">
        <Shield size={72} strokeWidth={1} />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between p-5">
        {/* Top row: Badge */}
        <div className="flex items-start justify-between">
          <span
            className={`inline-block rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              badgeStyles[country.type] || badgeStyles.Invited
            }`}
          >
            {country.type}
          </span>
        </div>

        {/* Country name + delegation type */}
        <div className="mt-auto">
          <h3 className="country-card-title font-serif text-xl font-bold text-text-primary transition-all duration-300 [text-shadow:0_1px_8px_rgba(255,255,255,0.7)] md:[text-shadow:none] md:group-hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.7)]">
            {country.name}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">Dual Delegation</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CountryCard;
