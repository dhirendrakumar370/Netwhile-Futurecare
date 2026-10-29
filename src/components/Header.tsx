import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      {/* Top Utility Bar */}
      <div className="bg-brand-blue text-white py-2 px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="opacity-80">CIN: U78300UP2024PTC211778</span>
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-1.5 hover:text-brand-teal transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 000 000 0000
            </a>
            <a href="mailto:info@netwhile.com" className="flex items-center gap-1.5 hover:text-brand-teal transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@netwhile.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-teal transition-colors" aria-label="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Twitter"><Twitter className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between gap-8 px-6 py-4 max-w-7xl mx-auto" aria-label="Global">
        {/* Zone 1: Brand Wordmark */}
        <Link to="/" className="text-xl font-bold tracking-tight text-brand-blue whitespace-nowrap shrink-0 flex items-center gap-2">
          <span className="text-brand-teal">Netwhile</span> Futurecare
        </Link>

        {/* Zone 2: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`hover:text-brand-blue transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                location.pathname === item.href ? 'text-brand-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-teal' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:block px-5 py-2.5 text-xs font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="space-y-1 px-6 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="block w-full rounded-lg bg-brand-blue px-3 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-brand-blue/90"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
