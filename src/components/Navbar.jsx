import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Committees',
    children: [
      { label: 'UNSC', to: '/committees/unsc' },
      { label: 'AIPPM', to: '/committees/aippm' },
    ],
  },
  { label: 'About', to: '/about' },
  { label: 'Rulebook', to: '/rulebook' },
  { label: 'Team', to: '/team' },
  { label: 'Gallery', to: '/gallery' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [committeesOpen, setCommitteesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary">MCCS</span>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-text-secondary sm:inline">
            Conference
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setCommitteesOpen(true)}
                onMouseLeave={() => setCommitteesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                  onClick={() => setCommitteesOpen((prev) => !prev)}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${committeesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {committeesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-border bg-surface py-2 shadow-lg"
                    >
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={() => setCommitteesOpen(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm transition-colors ${
                                isActive
                                  ? 'bg-primary/5 font-semibold text-primary'
                                  : 'text-text-secondary hover:bg-primary/5 hover:text-primary'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.registrationUrl}
            target={siteConfig.registrationUrl.startsWith('http') ? '_blank' : undefined}
            rel={siteConfig.registrationUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="hidden rounded-full bg-accent-gold px-5 py-2 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-accent-gold/90 hover:shadow-md md:inline-block"
          >
            Register Now
          </a>
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <li key={link.label} className="flex flex-col">
                    <span className="py-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-md py-2 pl-4 text-sm transition-colors ${
                            isActive
                              ? 'font-semibold text-primary'
                              : 'text-text-secondary hover:text-primary'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </li>
                ) : (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-md py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-primary'
                            : 'text-text-secondary hover:text-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
              <li className="mt-2">
                <a
                  href={siteConfig.registrationUrl}
                  target={siteConfig.registrationUrl.startsWith('http') ? '_blank' : undefined}
                  rel={siteConfig.registrationUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-accent-gold py-2.5 text-center text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-accent-gold/90"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
