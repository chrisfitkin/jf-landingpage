import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-jaguar-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-jaguar-gold to-jaguar-amber rounded-lg flex items-center justify-center">
              <span className="text-jaguar-black font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-bold text-jaguar-light group-hover:text-jaguar-gold transition-colors">
              JaguarForms
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-jaguar-gray hover:text-jaguar-gold transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-jaguar-gray hover:text-jaguar-gold transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-jaguar-gray hover:text-jaguar-gold transition-colors">
              Use Cases
            </a>
            <a
              href="#waitlist"
              className="px-6 py-2.5 bg-gradient-to-r from-jaguar-gold to-jaguar-amber text-jaguar-black font-semibold rounded-lg hover:shadow-lg hover:shadow-jaguar-gold/25 transition-all hover:scale-105"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-jaguar-light p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-jaguar-charcoal"
          >
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#features"
                className="text-jaguar-gray hover:text-jaguar-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-jaguar-gray hover:text-jaguar-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#use-cases"
                className="text-jaguar-gray hover:text-jaguar-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="#waitlist"
                className="px-6 py-2.5 bg-gradient-to-r from-jaguar-gold to-jaguar-amber text-jaguar-black font-semibold rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
