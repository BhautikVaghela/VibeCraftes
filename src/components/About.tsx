interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing Events in Vadodara & Gujarat
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              VibeCrafters Entertainment is a strategy-first experiential events partner delivering comprehensive solutions for corporate excellence and vibrant community celebrations. Our young, energetic team crafts each project with precision, transforming client briefs into innovative narratives and seamless experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From conceptualization and design to production and execution, we handle everything under one roof. Whether it's sophisticated business events or vibrant community festivities, we focus on delivering seamless, impactful experiences tailored to each audience with integrated stage design, lighting, AV, talent curation, and comprehensive support.
            </p>
            <div className="mt-8">
              <button
                onClick={() => {
                  onNavigate?.('contact');
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Event experience"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
