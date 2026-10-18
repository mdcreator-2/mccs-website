import { motion } from 'framer-motion';

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 80, rotateX: 12 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60, rotateY: 8 },
    visible: { opacity: 1, x: 0, rotateY: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60, rotateY: -8 },
    visible: { opacity: 1, x: 0, rotateY: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}) {
  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      className={className}
      style={{ perspective: direction === 'up' ? 1200 : undefined }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
