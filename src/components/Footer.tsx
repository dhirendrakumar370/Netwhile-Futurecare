import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Linkedin, Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react';

import NewsletterSignup from './NewsletterSignup';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const verticals = [
  { name: 'Manpower Supply', href: '/services#manpower' },
  { name: 'Solar Projects', href: '/services#solar' },
  { name: 'Loan Services', href: '/services#loans' },
  { name: 'Insurance Services', href: '/services#insurance' },
  { name: 'Security Services', href: '/services#security' },
  { name: 'CCTV & Surveillance', href: '/services#cctv' },
  { name: 'IoT Solutions', href: '/services#iot' },
  { name: 'Software Development', href: '/services#software' },
  { name: 'Business Consulting', href: '/services#consulting' },
  { name: 'Bio Fuel & Green Energy', href: '/services#bio-fuel' },
  { name: 'Renewable Energy', href: '/services#renewable' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="mb-20">
          <NewsletterSignup />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company Info */}
          <div>
            <Link to="/" className="text-xl font-bold tracking-tight text-white mb-6 inline-block">
              <span className="text-brand-teal">Netwhile</span> Futurecare
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Netwhile Futurecare is a government-registered multi-sector solutions provider committed to delivering technical excellence and future-ready expertise across India.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span className="leading-relaxed">D-2/101, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010, India</span>
              </div>
              <div className="text-xs font-medium text-slate-400">
                CIN: U78300UP2024PTC211778
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-teal font-semibold hover:underline"
              >
                View on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Site Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Site Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-teal/40" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business Verticals */}
          <div>
            <h3 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Our Verticals</h3>
            <ul className="space-y-4">
              {verticals.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-teal/40" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Connect With Us</h3>
            <div className="space-y-4 mb-8">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                  <Phone className="w-4 h-4 text-brand-teal group-hover:text-white" />
                </div>
                +91 000 000 0000
              </a>
              <a href="mailto:info@netwhile.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                  <Mail className="w-4 h-4 text-brand-teal group-hover:text-white" />
                </div>
                info@netwhile.com
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <MessageSquare className="w-4 h-4 text-brand-teal group-hover:text-white" />
                </div>
                WhatsApp Business
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all shadow-lg" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all shadow-lg" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all shadow-lg" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all shadow-lg" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
          <p>© 2025 Netwhile Futurecare Private Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
