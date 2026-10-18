import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variantStyles = {
  primary:
    'bg-primary text-white hover:shadow-[0_0_20px_rgba(27,58,92,0.4)]',
  gold:
    'bg-accent-gold text-primary hover:shadow-[0_0_20px_rgba(197,165,90,0.5)]',
  outline:
    'border-2 border-primary text-primary hover:bg-primary/5',
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
  const baseClasses = `inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold transition-all duration-300 ${variantStyles[variant] || variantStyles.primary} ${className}`;

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
