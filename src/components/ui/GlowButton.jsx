import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variantStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-light',
  gold:
    'bg-accent-gold text-primary-dark font-semibold hover:bg-accent-gold-dark hover:text-white',
  outline:
    'border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark',
  'outline-white':
    'border border-white/40 text-white hover:bg-white/10',
};

export default function GlowButton({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  onClick,
  ...rest
}) {
  const baseClasses = `inline-flex items-center justify-center rounded px-8 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-300 ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={baseClasses} onClick={onClick} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onClick={onClick}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
