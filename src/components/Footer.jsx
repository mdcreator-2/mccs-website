import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const FOOTER_LINKS = [
  {
    heading: 'Committees',
    links: [
      { label: 'UNSC', to: '/committees/unsc' },
      { label: 'AIPPM', to: '/committees/aippm' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Rulebook', to: '/rulebook' },
      { label: 'Team', to: '/team' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Gold top rule */}
      <div className="gold-rule" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Link to="/" className="inline-block group" aria-label="NIT Patna MUN MCCS Home">
              <img
                src="/Logo-mun-white.webp"
                alt="NIT Patna MUN Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/60">
              Model Conferences and Committee Simulation. Organized by{' '}
              <span className="font-medium text-white/90">Expresso Club</span>,
              National Institute of Technology Patna.
            </p>
            <div className="mt-4 flex items-center gap-3 pt-3 border-t border-white/10">
              <img
                src="/expresso-logo.webp"
                alt="Expresso Club Logo"
                className="h-8 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
              <div className="font-body text-xs text-white/50 leading-snug">
                <span className="block font-medium text-white/80">Expresso Club</span>
                The Literary &amp; Art Club, NIT Patna
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-accent-gold">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-white/60 transition-colors hover:text-accent-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Venue */}
          <div>
            <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-accent-gold">
              Venue & Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent-gold/70" />
                <div>
                  <span className="block font-body font-medium text-white/90">{siteConfig.venue}</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-accent-gold/70" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-body text-white/60 transition-colors hover:text-accent-gold"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href={siteConfig.contact.instagram}
                  aria-label="Instagram"
                  className="rounded-full border border-white/10 p-2 text-white/60 transition-all hover:border-accent-gold hover:text-accent-gold"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 p-2 text-white/60 transition-all hover:border-accent-gold hover:text-accent-gold"
                >
                  <Linkedin size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} MCCS. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Designed &amp; developed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
