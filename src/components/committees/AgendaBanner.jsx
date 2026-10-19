import { motion } from 'framer-motion';

function AgendaBanner({ agenda }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative bg-ink px-6 py-12 md:py-16 text-center text-white overflow-hidden border-b border-accent-gold/20"
    >
      {/* Ambient gold radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle 500px at 50% 50%, rgba(184,151,106,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Diplomatic top & bottom hairline borders with central diamond pips */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-accent-gold/50" />
        <span className="h-1.5 w-1.5 mx-2 rotate-45 bg-accent-gold/60" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-gold/30 to-accent-gold/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-accent-gold/25 bg-accent-gold/10 text-accent-gold font-sans text-xs font-semibold uppercase tracking-[0.25em]">
          <span>Official Committee Agenda</span>
        </div>
        <p className="mt-2 font-serif text-xl italic leading-relaxed text-white md:text-2xl lg:text-3xl">
          &ldquo;{agenda}&rdquo;
        </p>
      </div>
    </motion.section>
  );
}

export default AgendaBanner;
