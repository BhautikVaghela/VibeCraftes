import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const section = document.getElementById('our-business');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Experiential Events That<br />Transform Your Brand
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Dynamic event solutions for corporate excellence and vibrant community celebrations across Vadodara and Gujarat
        </p>
        <button
          onClick={scrollToServices}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto space-x-2"
        >
          <span>Explore Our Services</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
