import { motion } from 'framer-motion';

function AgendaBanner({ agenda }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-primary px-6 py-12 text-center text-white"
      style={{
        borderTop: '1px solid rgba(197, 165, 90, 0.3)',
        borderBottom: '1px solid rgba(197, 165, 90, 0.3)',
      }}
    >
      <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
        Agenda
      </span>
      <p className="mx-auto max-w-4xl font-serif text-xl italic leading-relaxed md:text-2xl lg:text-3xl">
        &ldquo;{agenda}&rdquo;
      </p>
    </motion.section>
  );
}

export default AgendaBanner;
