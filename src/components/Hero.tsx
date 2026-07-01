import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const section = document.getElementById('our-business');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16 md:mt-24">
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-gray-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-5 leading-tight tracking-tight">
          Experiential Events That<br className="hidden sm:block" /><span className="sm:hidden"> </span>Transform Your Brand
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Dynamic event solutions for corporate excellence and vibrant community celebrations across Vadodara and Gujarat
        </p>
        <button
          onClick={scrollToServices}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-xl hover:shadow-2xl"
        >
          <span>Explore Our Services</span>
          <ArrowRight size={22} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
