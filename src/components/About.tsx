interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Revolutionizing Events in Vadodara & Gujarat
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 md:mb-4 leading-relaxed">
              VibeCrafters Entertainment is a strategy-first experiential events partner delivering comprehensive solutions for corporate excellence and vibrant community celebrations. Our young, energetic team crafts each project with precision, transforming client briefs into innovative narratives and seamless experiences.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 md:mb-8">
              From conceptualization and design to production and execution, we handle everything under one roof. Whether it's sophisticated business events or vibrant community festivities, we focus on delivering seamless, impactful experiences tailored to each audience with integrated stage design, lighting, AV, talent curation, and comprehensive support.
            </p>
            <button
              onClick={() => {
                onNavigate?.('contact');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-sm md:text-base shadow-xl"
            >
              Get in Touch
            </button>
          </div>
          <div className="relative mt-6 md:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Event experience"
                className="w-full h-64 sm:h-72 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl">
              <p className="text-2xl md:text-4xl font-bold">100%</p>
              <p className="text-xs md:text-base font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
