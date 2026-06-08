import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-parchment flex items-center justify-center">
                <span className="text-ink font-serif text-2xl font-bold">R</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold tracking-tight">Ramah</span>
                <span className="block text-xs uppercase tracking-wider text-parchment/60">Bible College</span>
              </div>
            </div>
            <p className="text-parchment/70 text-base max-w-sm">
              Equipping the saints for the work of the ministry through sound biblical education and spiritual formation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-medium text-parchment/40">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/" className="text-parchment/70 hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="text-parchment/70 hover:text-gold transition-colors">About</Link>
              <Link to="/programs" className="text-parchment/70 hover:text-gold transition-colors">Programs</Link>
              <Link to="/faculty" className="text-parchment/70 hover:text-gold transition-colors">Faculty</Link>
              <Link to="/contact" className="text-parchment/70 hover:text-gold transition-colors">Contact</Link>
              <Link to="/apply" className="text-parchment/70 hover:text-gold transition-colors">Apply Now</Link>
            </div>
            {/* Login Links */}
            <div className="pt-4 border-t border-parchment/10">
              <div className="flex gap-4">
                <a 
                  href="https://ramahbiblecollege.org/student-login" 
                  className="text-xs uppercase tracking-wider text-parchment/50 hover:text-gold transition-colors"
                >
                  Student Login
                </a>
                <span className="text-parchment/30">|</span>
                <a 
                  href="https://ramahbiblecollege.org/admin-login" 
                  className="text-xs uppercase tracking-wider text-parchment/50 hover:text-gold transition-colors"
                >
                  Admin Login
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-medium text-parchment/40">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-parchment/70 text-sm">
                  C/O Ramah Chapel International<br />
                  5 Lodge Close, Hutton, Brentwood<br />
                  CM13 1SW, United Kingdom
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="text-parchment/70 text-sm">+44 (0)7983 332 175</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="text-parchment/70 text-sm">richcommey@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-parchment/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-parchment/40 text-sm">
              © {new Date().getFullYear()} Ramah Bible College. All rights reserved.
            </p>
            <p className="text-parchment/40 text-sm">
              A Spirit-filled Christian Institution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
