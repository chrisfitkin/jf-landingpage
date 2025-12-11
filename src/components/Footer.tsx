import { MotionMark } from './logos/MotionMark';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-jaguar-black border-t border-jaguar-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <MotionMark size={32} />
            <span className="text-lg font-bold text-jaguar-light">JaguarForms</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm text-jaguar-gray hover:text-jaguar-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-jaguar-gray hover:text-jaguar-gold transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-jaguar-gray hover:text-jaguar-gold transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-jaguar-gray">
            &copy; {currentYear} JaguarForms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
