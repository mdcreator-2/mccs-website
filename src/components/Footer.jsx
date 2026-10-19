import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Linkedin, ArrowUp, Shield, Landmark, BookOpen } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const CHAMBER_LINKS = [
  { label: 'UNSC Chamber (31 Oct)', to: '/committees/unsc', icon: Shield },
  { label: 'AIPPM Chamber (1 Nov)', to: '/committees/aippm', icon: Landmark },
  { label: 'Official Rulebook', to: '/rulebook', icon: BookOpen },
];

const QUICK_LINKS = [
  { label: 'Conference Home', to: '/' },
  { label: 'About MCCS', to: '/about' },
  { label: 'Executive Secretariat', to: '/team' },
  { label: 'Diplomatic Gallery', to: '/gallery' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink text-white overflow-hidden border-t border-accent-gold/20">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(184,151,106,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Diplomatic Top Border Insignia */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-gold/30 to-accent-gold/50" />
        <div className="flex items-center gap-1.5 px-4 py-2">
          <span className="h-1 w-1 rounded-full bg-accent-gold/50" />
          <span className="h-2 w-2 rotate-45 border border-accent-gold bg-accent-gold/20" />
          <span className="h-1 w-1 rounded-full bg-accent-gold/50" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-gold/30 to-accent-gold/50" />
      </div>

      {/* Corner Ornaments */}
      <div className="pointer-events-none absolute top-6 left-6 z-[2] h-10 w-10 border-l border-t border-accent-gold/20">
        <span className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>
      <div className="pointer-events-none absolute top-6 right-6 z-[2] h-10 w-10 border-r border-t border-accent-gold/20">
        <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-accent-gold/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Lineage */}
          <div className="sm:col-span-1">
            <Link to="/" className="inline-block group" aria-label="NIT Patna MUN MCCS Home">
              <div className="relative flex items-center gap-3">
                <img
                  src="/Logo-mun-white.webp"
                  alt="NIT Patna MUN Logo"
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-[0_0_15px_rgba(184,151,106,0.35)] transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <span className="font-serif text-lg font-bold tracking-tight text-white block">
                    MCCS 2026
                  </span>
                  <span className="font-sans text-[11px] text-accent-gold uppercase tracking-wider block">
                    NIT Patna MUN
                  </span>
                </div>
              </div>
            </Link>

            <p className="mt-4 font-body text-sm leading-relaxed text-white/70">
              Model Conferences and Committee Simulation. A premier dual-chamber diplomatic summit organized by{' '}
              <span className="font-medium text-white/95">Expresso Club</span> at National Institute of Technology Patna.
            </p>

            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/10">
              <img
                src="/expresso-logo.webp"
                alt="Expresso Club Logo"
                className="h-8 w-auto object-contain opacity-85 transition-opacity hover:opacity-100"
              />
              <div className="font-sans text-xs text-white/60 leading-tight">
                <span className="block font-semibold text-white/90">Expresso Club</span>
                <span>The Literary &amp; Art Club · NIT Patna</span>
              </div>
            </div>
          </div>

          {/* Chamber Portals */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-accent-gold uppercase mb-4">
              Chambers &amp; Rules
            </h3>
            <ul className="space-y-3 font-body text-sm">
              {CHAMBER_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2.5 text-white/70 transition-colors hover:text-accent-gold"
                    >
                      <Icon size={14} className="text-accent-gold/70 transition-transform group-hover:scale-110" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-accent-gold uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 font-body text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 transition-colors hover:text-accent-gold flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-gold/40" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venue & Diplomatic Liaison */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-accent-gold uppercase mb-4">
              Diplomatic Liaison
            </h3>
            <ul className="space-y-3.5 text-sm font-body">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-gold" />
                <span className="text-white/80 leading-snug">
                  {siteConfig.venue}
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-accent-gold" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/80 transition-colors hover:text-accent-gold"
                >
                  {siteConfig.contact.email}
                </a>
              </li>

              {/* Social Channels */}
              <li className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.contact.instagram}
                  aria-label="Expresso Club Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-gold/30 bg-[#121E2A] text-accent-gold transition-all hover:border-accent-gold hover:bg-accent-gold/15 hover:scale-105"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  aria-label="Expresso Club LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-gold/30 bg-[#121E2A] text-accent-gold transition-all hover:border-accent-gold hover:bg-accent-gold/15 hover:scale-105"
                >
                  <Linkedin size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Diplomatic Credentials & Return to Top */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-sans text-xs text-white/50">
            &copy; {new Date().getFullYear()} MCCS · National Institute of Technology Patna. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-accent-gold/80">
              Held under the auspices of Expresso Club
            </span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 rounded border border-accent-gold/25 bg-[#121E2A] px-3 py-1 text-xs font-sans font-medium text-white/70 transition-all hover:border-accent-gold hover:text-accent-gold"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
