import { Users, Target, Globe, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Strategy-First Approach',
      description:
        'We begin with your business objectives and craft event narratives that deliver measurable impact and resonate with your audience.',
    },
    {
      icon: Globe,
      title: 'End-to-End Solutions',
      description:
        'From conceptualization to post-event analysis, we handle every aspect under one roof—design, production, AV, talent, hospitality, security, and compliance.',
    },
    {
      icon: Users,
      title: 'Talented Young Team',
      description:
        'Our energetic, creative professionals bring fresh perspectives and innovative ideas to every project, ensuring your events stand out.',
    },
    {
      icon: Award,
      title: 'Quality-Driven Execution',
      description:
        'Meticulous attention to detail, flawless coordination, and seamless execution are at the core of everything we deliver.',
    },
  ];

  const milestones = [
    { year: '2018', event: 'Founded VibeCrafters Entertainment with a vision to revolutionize event management' },
    { year: '2019', event: 'Established presence across Vadodara with successful corporate and community event portfolio' },
    { year: '2020', event: 'Expanded into MICE and brand activation services' },
    { year: '2022', event: 'Launched corporate offsite and customized event solutions' },
    { year: '2024', event: '500+ successful events delivered with 100% client satisfaction' },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 leading-tight">About VibeCrafters</h1>
          <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
            Revolutionizing experiential events through innovation, strategy, and impeccable execution
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Our Story
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 md:mb-4 leading-relaxed">
                VibeCrafters Entertainment emerged from a passion to transform the event management landscape in Vadodara and Gujarat. We recognized the need for a dynamic, strategy-first partner who understands both corporate excellence and vibrant community celebrations.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 md:mb-4 leading-relaxed">
                Built by a team of young, creative professionals, we've consistently delivered over 500 memorable events that elevate brands, energize teams, and bring communities together. Our approach goes beyond logistics—we create compelling narratives, seamless experiences, and measurable outcomes.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Today, we stand as a trusted experiential events partner, known for transforming ambitious briefs into extraordinary realities. Whether it's a sophisticated business conference, a vibrant festival celebration, or a strategic brand activation, we handle every detail with precision and passion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="rounded-lg shadow-lg h-48 sm:h-56 md:h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Event setup"
                className="rounded-lg shadow-lg h-48 sm:h-56 md:h-64 w-full object-cover mt-6 md:mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12 leading-tight">
            What Drives Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-amber-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <value.icon size={24} className="text-amber-600 md:w-7 md:h-7" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Ready to Create Something Extraordinary?</h2>
          <p className="text-sm sm:text-base md:text-lg text-amber-100 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate to bring your vision to life with our expertise, innovation, and passion for excellence.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-amber-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-amber-50 transition-colors shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
