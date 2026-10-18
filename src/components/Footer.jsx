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
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-1">
            <h2 className="font-serif text-2xl font-bold">MCCS</h2>
            <p className="mt-1 text-xs uppercase tracking-widest text-accent-gold">
              NIT Patna
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Model Conferences and Committee Simulation. Organized by{' '}
              <span className="font-medium text-white">Expresso Club</span>,
              National Institute of Technology Patna.
            </p>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-accent-gold"
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
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold">
              Venue & Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent-gold" />
                <div>
                  <span className="block font-medium text-white">{siteConfig.venue}</span>
                  <span className="block text-xs text-white/50">Specific Hall: {siteConfig.venueSpecific}</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-accent-gold" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-accent-gold"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href={siteConfig.contact.instagram}
                  aria-label="Instagram"
                  className="rounded-full bg-white/10 p-2 text-white/80 transition-colors hover:bg-accent-gold hover:text-primary"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  aria-label="LinkedIn"
                  className="rounded-full bg-white/10 p-2 text-white/80 transition-colors hover:bg-accent-gold hover:text-primary"
                >
                  <Linkedin size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} MCCS. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Designed &amp; developed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
