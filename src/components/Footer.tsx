import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const offices = [
    {
      city: 'Vadodara',
      address: 'Waghodia Road, Vadodara, Gujarat - 390025',
      phone: '+91-9898218561',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">VibeCrafters</h3>
            <p className="text-gray-400 leading-relaxed">
              Dynamic experiential events partner revolutionizing corporate and community celebrations.
            </p>
            <div className="flex space-x-4 mt-6">
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

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'businesses', 'news', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
                  >
                    {page === 'home' ? 'Home' : page === 'about' ? 'About us' : page === 'businesses' ? 'Our Businesses' : page === 'news' ? 'News & Media' : 'Contact'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Our Offices</h4>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="text-sm">
                  <h5 className="font-semibold text-blue-400 mb-2">{office.city}</h5>
                  <div className="flex items-start text-gray-400 mb-1">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone size={16} className="mr-2" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <h5 className="font-semibold text-white mb-2">Contact Us</h5>
              <div className="flex items-center mb-1">
                <Mail size={16} className="mr-2" />
                <a href="mailto:vibecrafters.entertainment@gmail.com" className="hover:text-amber-400 transition-colors">
                  vibecrafters.entertainment@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919898218561" className="hover:text-amber-400 transition-colors">
                  +91-9898218561
                </a>
              </div>
            </div>
            <div className="text-right">
              <p>&copy; 2024 VibeCrafters Entertainment. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
