import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img 
              src="/assets/footer-logo.png" 
              alt="VibeCrafters Entertainment" 
              className="h-12 md:h-14 w-auto object-contain mb-4 brightness-110 mx-auto md:mx-0"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              Dynamic experiential events partner revolutionizing corporate and community celebrations.
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <button className="hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </button>
              <button className="hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </button>
              <button className="hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'businesses', 'residential-events', 'news', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors capitalize text-sm"
                  >
                    {page === 'home' ? 'Home' : page === 'about' ? 'About us' : page === 'businesses' ? 'Corporate Services' : page === 'residential-events' ? 'Festive Events' : page === 'news' ? 'News & Media' : 'Contact'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white text-center md:text-left">Contact Us</h4>
            <div className="space-y-4">
              {/* Office Address */}
              <div className="flex items-start justify-center md:justify-start text-center md:text-left">
                <div className="bg-amber-500/10 p-2.5 rounded-lg mr-3 flex-shrink-0">
                  <MapPin size={18} className="text-amber-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm leading-relaxed">Waghodia Road, Vadodara,<br className="hidden sm:block" /> Gujarat - 390025</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-amber-500/10 p-2.5 rounded-lg mr-3 flex-shrink-0">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <a 
                  href="mailto:vibecrafters.entertainment@gmail.com" 
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex-1 text-center md:text-left break-words"
                >
                  vibecrafters.entertainment@gmail.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-amber-500/10 p-2.5 rounded-lg mr-3 flex-shrink-0">
                  <Phone size={18} className="text-amber-400" />
                </div>
                <a 
                  href="tel:+919898218561" 
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
                >
                  +91-9898218561
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 VibeCrafters Entertainment. All rights reserved.
            </p>
            <button
              onClick={() => onNavigate('admin-login')}
              className="text-gray-500 hover:text-amber-400 transition-colors text-xs flex items-center gap-1"
            >
              <Shield size={14} />
              Admin Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
