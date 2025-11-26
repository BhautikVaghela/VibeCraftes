import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'businesses', label: 'Corporate Services' },
    { id: 'residential-events', label: 'Festive Events' },
    { id: 'news', label: 'News & Media' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center hover:opacity-90 transition-opacity py-2 -ml-2"
          >
            <img 
              src="/assets/header-logo.png" 
              alt="VibeCrafters Entertainment" 
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                } py-2`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 bg-white shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg mx-2 ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-amber-600 to-amber-500 shadow-md'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50 active:bg-amber-100'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInLeft 0.3s ease-out forwards'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
