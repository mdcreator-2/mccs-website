import { motion } from 'framer-motion';

function AgendaBanner({ agenda }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="linen-texture relative bg-ink px-6 py-14 text-center text-white"
    >
      {/* Top and bottom gold rules */}
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <div className="absolute inset-x-0 bottom-0 gold-rule" />

      <span className="relative z-10 mb-4 block text-xs font-sans font-semibold uppercase tracking-[0.3em] text-accent-gold">
        Agenda
      </span>
      <p className="relative z-10 mx-auto max-w-4xl font-serif text-xl italic leading-relaxed md:text-2xl lg:text-3xl">
        &ldquo;{agenda}&rdquo;
      </p>
    </motion.section>
  );
}

export default AgendaBanner;
