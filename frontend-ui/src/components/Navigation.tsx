import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { LayoutGrid, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-parchment/98 border-b border-stone/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container-editorial">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ink flex items-center justify-center">
              <span className="text-parchment font-serif text-xl font-bold">R</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-ink' : 'text-parchment'
              }`}>Ramah</span>
              <span className={`block text-xs uppercase tracking-wider transition-colors ${
                scrolled ? 'text-stone' : 'text-parchment/60'
              }`}>Bible College</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                  scrolled 
                    ? 'text-ink/70 hover:text-ink' 
                    : 'text-parchment/80 hover:text-parchment'
                }`}
                activeProps={{ className: scrolled ? 'text-ink font-semibold' : 'text-parchment font-semibold' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className={`text-xs py-3 px-6 font-medium uppercase tracking-wider transition-all ${
                scrolled 
                  ? 'bg-ink text-parchment hover:bg-gold hover:text-ink' 
                  : 'border border-parchment text-parchment hover:border-gold hover:bg-gold hover:text-ink'
              }`}
            >
              Apply Now
            </Link>
            
            {/* Login Links */}
            <div className={`flex items-center gap-4 pl-4 border-l ${
              scrolled ? 'border-stone/20' : 'border-parchment/20'
            }`}>
              <a 
                href="https://ramahbiblecollege.org/student-login" 
                className={`text-xs uppercase tracking-wider transition-colors ${
                  scrolled ? 'text-ink/60 hover:text-gold' : 'text-parchment/60 hover:text-gold'
                }`}
              >
                Student Login
              </a>
              <span className={`text-xs ${scrolled ? 'text-stone/40' : 'text-parchment/40'}`}>|</span>
              <a 
                href="https://ramahbiblecollege.org/admin-login" 
                className={`text-xs uppercase tracking-wider transition-colors ${
                  scrolled ? 'text-ink/60 hover:text-gold' : 'text-parchment/60 hover:text-gold'
                }`}
              >
                Admin Login
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-ink' : 'text-parchment'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <LayoutGrid size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-x-0 top-20 bg-parchment border-t border-stone/10 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="py-6 px-4 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-medium text-ink/70 hover:text-ink"
                  onClick={() => setIsOpen(false)}
                  activeProps={{ className: 'text-ink font-semibold' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/apply"
                className="btn-primary text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
              
              {/* Login Links */}
              <div className="pt-4 mt-4 border-t border-stone/10">
                <p className="text-xs uppercase tracking-wider text-stone/50 mb-3">Portal Login</p>
                <div className="flex gap-4">
                  <a 
                    href="https://ramahbiblecollege.org/student-login"
                    className="text-sm font-medium text-ink/70 hover:text-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Login
                  </a>
                  <span className="text-stone/30">|</span>
                  <a 
                    href="https://ramahbiblecollege.org/admin-login"
                    className="text-sm font-medium text-ink/70 hover:text-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Login
                  </a>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
