import { Briefcase, Users, Megaphone, Gift, Lightbulb, CheckCircle } from 'lucide-react';

interface BusinessesPageProps {
  onNavigate: (page: string) => void;
}

export default function BusinessesPage({ onNavigate }: BusinessesPageProps) {
  const businesses = [
    {
      icon: Briefcase,
      title: 'MICE Events',
      description:
        'Meetings, Incentives, Conferences & Exhibitions. Complete end-to-end management from conceptualization to post-event analysis.',
      services: [
        'Annual General Meetings & Board meetings',
        'Conferences and townhalls',
        'Sales meetings and dealer meets',
        'Incentive travel programs',
        'Trade shows and exhibitions',
        'Leadership summits',
      ],
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description:
        'Creating experiences that strengthen corporate culture and elevate brand presence. From intimate gatherings to large celebrations.',
      services: [
        'Annual family days and CSR events',
        'Award nights and milestone celebrations',
        'Press and media events',
        'Team building activities',
        'Employee engagement programs',
        'Corporate gifting solutions',
      ],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Brand Activation',
      description:
        'Strategic brand experiences designed to drive engagement, awareness, and measurable lift. From launches to roadshows.',
      services: [
        'Product launches and promotions',
        'Facility openings',
        'In-store experiences',
        'Mall and roadshow activations',
        'Campus engagement programs',
        'Influencer showcases',
      ],
      image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Gift,
      title: 'Corporate Offsite',
      description:
        'Memorable off-site experiences that foster team bonding, creativity, and motivation. Strategic retreats designed for impact.',
      services: [
        'Team building adventures',
        'Leadership camps',
        'Creative workshops',
        'Executive getaways',
        'Wellness retreats',
        'Incentive travel programs',
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Lightbulb,
      title: 'Customized Solutions',
      description:
        'Every event is unique. We design bespoke experiences tailored to your specific needs with integrated design, production & support.',
      services: [
        'Strategy and concept development',
        'Design and creative direction',
        'Production management',
        'AV and technical support',
        'Talent curation',
        'Post-event impact analysis',
      ],
      image: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 leading-tight">Our Services</h1>
          <p className="text-sm sm:text-base md:text-lg text-amber-50 max-w-3xl leading-relaxed">
            Comprehensive event solutions spanning festivals, corporate events, MICE, brand activations, and customized experiences
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="space-y-12 md:space-y-20">
            {businesses.map((business, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center mb-4 md:mb-5">
                    <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-2.5 md:p-3 rounded-xl md:rounded-2xl mr-3 shadow-md">
                      <business.icon size={24} className="text-amber-600 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {business.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 md:mb-7 leading-relaxed">
                    {business.description}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                    What We Provide:
                  </h3>
                  <div className="space-y-2.5 md:space-y-3">
                    {business.services.map((service, idx) => (
                      <div key={idx} className="flex items-start group">
                        <CheckCircle size={16} className="text-green-500 mr-2 md:mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                        <span className="text-sm md:text-base text-gray-700 leading-relaxed">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={business.image}
                      alt={business.title}
                      className="w-full h-72 sm:h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">
            Why Choose VibeCrafters?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">End-to-End</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                From concept to execution and post-event analysis, we handle everything under one roof with seamless coordination.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-amber-600 mb-3 md:mb-4">Strategy-First</h3>
              <p className="text-sm md:text-base text-gray-600">
                We begin with your business objectives and craft experiences that deliver measurable impact and ROI.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-amber-600 mb-3 md:mb-4">Creative Excellence</h3>
              <p className="text-sm md:text-base text-gray-600">
                Our young, talented team brings fresh perspectives, innovative ideas, and meticulous execution to every event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Elevate Your Next Event?</h2>
          <p className="text-base md:text-xl text-amber-100 mb-6 md:mb-8 max-w-3xl mx-auto">
            Let's collaborate to create an experience that resonates with your audience and achieves your business goals.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-50 transition-colors"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
