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
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About VibeCrafters</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl">
            Revolutionizing experiential events through innovation, strategy, and impeccable execution
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                VibeCrafters Entertainment emerged from a passion to transform the event management landscape in Vadodara and Gujarat. We recognized the need for a dynamic, strategy-first partner who understands both corporate excellence and vibrant community celebrations.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Built by a team of young, creative professionals, we've consistently delivered over 500 memorable events that elevate brands, energize teams, and bring communities together. Our approach goes beyond logistics—we create compelling narratives, seamless experiences, and measurable outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand as a trusted experiential events partner, known for transforming ambitious briefs into extraordinary realities. Whether it's a sophisticated business conference, a vibrant festival celebration, or a strategic brand activation, we handle every detail with precision and passion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Event setup"
                className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <value.icon size={32} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise, innovation, and passion for excellence.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
