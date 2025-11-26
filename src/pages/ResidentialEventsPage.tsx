import { Sparkles, CheckCircle } from 'lucide-react';

interface ResidentialEventsPageProps {
  onNavigate: (page: string) => void;
}

export default function ResidentialEventsPage({ onNavigate }: ResidentialEventsPageProps) {
  const festivals = [
    {
      icon: Sparkles,
      title: 'Uttarayan',
      description:
        'Celebrate the arrival of winter with the spectacular festival of kites. Uttarayan brings a vibrant splash of colors to the sky and fosters community bonding through friendly kite-flying competitions and joyful gatherings. Our events ensure safety, fun, and traditional flair that honors this beloved celebration.',
      services: [
        'Thematic kite-flying zones and safety arrangements',
        'Custom festive décor with vibrant colors',
        'Traditional Gujarati snacks and refreshments',
        'Live folk music and cultural performances',
        'Professional event coordination and crowd management',
      ],
      image: '/assets/Uttrayan.png',
    },
    {
      icon: Sparkles,
      title: 'Holi',
      description:
        'Immerse in the joyful festival of colors that symbolizes the victory of good over evil. Holi celebrations with us are safe, eco-friendly, and filled with music, dance, and vibrant fun. We ensure an inclusive environment where every age group can joyfully participate in this energetic festivity.',
      services: [
        'Eco-friendly and skin-safe colored powders',
        'DJ and live music for dance celebrations',
        'Secure play areas and water stations',
        'Refreshments and cooling zones',
        'Full event supervision and waste management',
      ],
      image: '/assets/Holi.png',
    },
    {
      icon: Sparkles,
      title: 'Ganapati',
      description:
        'Ganapati festival is a time for devotion, artistry, and togetherness. Our team designs exquisite pandals and orchestrates soulful prayers alongside vibrant cultural performances, creating a spiritually enriching experience for the entire society.',
      services: [
        'Elegant and thematic pandal setup',
        'Audio arrangements for prayers and bhajans',
        'Cultural dance and music programs',
        'Prasad and catering services',
        'Assistance in idol installation and immersion logistics',
      ],
      image: '/assets/Ganpati.png',
    },
    {
      icon: Sparkles,
      title: 'Navratri',
      description:
        'Navratri is a vibrant celebration of dance and devotion. We bring the rhythms of garba and dandiya to life with expertly managed events featuring dazzling lighting, authentic cuisine, and traditional music that creates an unforgettable atmosphere for all participants.',
      services: [
        'Professional sound and lighting systems',
        'Stage setup for performances and DJs',
        'Authentic traditional cuisine stalls',
        'Dandiya sticks and costume rental options',
        'Crowd control and event flow management',
      ],
      image: '/assets/Navratri.png',
    },
    {
      icon: Sparkles,
      title: 'Diwali',
      description:
        'The festival of lights, Diwali, marks joy, prosperity, and new beginnings. Our Diwali events are crafted to light up the community\'s spirit with beautiful rangoli, safe and mesmerizing light displays, fireworks, and warm festive gatherings with delicious sweets and snacks.',
      services: [
        'Rangoli and décor artistic installations',
        'Safe and supervised fireworks displays',
        'Lighting arrangements including diyas and LEDs',
        'Sweet and savory catering options',
        'Guest management and safety protocols',
      ],
      image: '/assets/diwali.png',
    },
    {
      icon: Sparkles,
      title: 'New Year Party',
      description:
        'Bring in the new year with style and celebration! Our New Year parties are thoughtfully curated with vibrant décor, live DJs, and engaging entertainment to make the transition memorable and joyous for your society members.',
      services: [
        'Trendy and elegant party décor',
        'Live DJ and curated music playlists',
        'Light shows and interactive entertainment',
        'Customized catering and bar services',
        'Event security and guest coordination',
      ],
      image: '/assets/New Year.png',
    },
    {
      icon: Sparkles,
      title: 'Independence Day',
      description:
        'Celebrate the pride of our nation with stirring flag-hoisting ceremonies, patriotic programs, and delicious communal meals. We create inspiring events that strengthen community bonds and honor the spirit of freedom.',
      services: [
        'Flag hoisting setup and protocol management',
        'Patriotic décor and stage arrangements',
        'Cultural dance and music performances',
        'Special catering featuring traditional dishes',
        'Coordination of speeches, contests, and activities',
      ],
      image: '/assets/Independence Day.png',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5">Residential Events</h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl">
            Celebrating culture and community with style. From traditional festivals to joyful celebrations, we deliver memorable experiences for your society
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored celebration packages designed to match your vision and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Silver Package */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 p-6 md:p-8 text-white text-center">
                <div className="inline-block p-2.5 md:p-4 bg-white/20 rounded-full mb-3 md:mb-4">
                  <Sparkles size={32} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">Silver Package</h3>
                <p className="text-gray-100 text-sm md:text-base">Our Starter Package</p>
              </div>
              <div className="p-5 md:p-8">
                <p className="text-gray-600 text-center mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                  A perfect introduction to festive celebrations, this package covers all the essentials to create an engaging and colorful atmosphere while keeping things simple and budget friendly.
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-gray-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Standard décor and setup</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-gray-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Standard lighting and sound</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-gray-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Essential arrangements</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-gray-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Catering and event production</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-gray-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Full event management</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Golden Package */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 md:border-4 border-amber-400 relative">
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 md:px-4 py-0.5 md:py-1 rounded-bl-lg text-xs md:text-sm font-semibold">
                POPULAR
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-6 md:p-8 text-white text-center">
                <div className="inline-block p-2.5 md:p-4 bg-white/20 rounded-full mb-3 md:mb-4">
                  <Sparkles size={32} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">Golden Package</h3>
                <p className="text-amber-100 text-sm md:text-base">Our Preferred Package</p>
              </div>
              <div className="p-5 md:p-8">
                <p className="text-gray-600 text-center mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                  Our most popular choice, offering a balanced mix of decorations, entertainment, and catering to create lively, enjoyable events for larger groups.
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Premium décor and theming</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Professional sound & lighting</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Entertainment arrangement</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Catering arrangements</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Full event management</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Choose Golden
                </button>
              </div>
            </div>

            {/* Platinum Package */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 md:p-8 text-white text-center">
                <div className="inline-block p-2.5 md:p-4 bg-white/20 rounded-full mb-3 md:mb-4">
                  <Sparkles size={32} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 md:mb-2">Platinum Package</h3>
                <p className="text-purple-100 text-sm md:text-base">Our Premium Package</p>
              </div>
              <div className="p-5 md:p-8">
                <p className="text-gray-600 text-center mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                  The ultimate celebration experience with full-scale décor, premium entertainment, advanced audio-visuals, and seamless event management for grand festivals.
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-purple-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Luxury & theme décor</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-purple-500 mr-2 md:mr-3 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Premium sound and lighting</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-purple-500 mr-3 flex-shrink-0" />
                    <span>Premium catering & hospitality</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-purple-500 mr-3 flex-shrink-0" />
                    <span>Complete event production</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-purple-500 mr-3 flex-shrink-0" />
                    <span>Full event management</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Go Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-14 md:space-y-20">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="bg-blue-100 p-2 md:p-2.5 rounded-lg mr-2.5 md:mr-3">
                      <festival.icon size={24} className="text-blue-600 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                      {festival.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {festival.description}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                    What We Provide:
                  </h3>
                  <ul className="space-y-2 md:space-y-2.5">
                    {festival.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={16} className="text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0 md:w-5 md:h-5" />
                        <span className="text-gray-700 text-sm md:text-base">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={festival.image}
                    alt={festival.title}
                    className="rounded-lg md:rounded-xl shadow-lg md:shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose VibeCrafters?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Seamless Execution</h3>
              <p className="text-gray-600">
                From concept to completion, we handle every detail so you can simply enjoy the celebration
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                Each festival and community is unique; we tailor our packages and services to match your society's vision and budget
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Professional Team</h3>
              <p className="text-gray-600">
                Our experienced coordinators, technicians, and artists work in perfect harmony to deliver exceptional experiences
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Community-Focused Approach</h3>
              <p className="text-gray-600">
                We believe in celebrations that bring people together, fostering inclusivity and joy across all age groups
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Affordable Excellence</h3>
              <p className="text-gray-600">
                Premium quality celebrations don't have to break the bank; our tiered packages ensure accessibility for every community
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Celebrate Your Next Festival?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's collaborate to create a festive experience that brings joy and unity to your community.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
