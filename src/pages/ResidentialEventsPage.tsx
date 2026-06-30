import { Sparkles, CheckCircle } from 'lucide-react';

interface ResidentialEventsPageProps {
  onNavigate: (page: string) => void;
}

export default function ResidentialEventsPage({ onNavigate }: ResidentialEventsPageProps) {
  const festivals = [
    {
      icon: Sparkles,
      title: 'Wedding Planning & Management',
      description:
        'End-to-end wedding execution handled with perfection, ensuring your big day runs smoothly from start to finish.',
      services: [
        'Complete Wedding Planning & Management',
        'Budgeting and Timeline Planning',
        'Vendor Coordination and Supervision',
        'Ceremony & Reception Flow Management',
      ],
      image: '/assets/wedding-planning-management.jpg',
    },
    {
      icon: Sparkles,
      title: 'Venue Selection & Elegant Décor Designing',
      description:
        'Transforming your venue into a stunning and memorable wedding destination tailored to your style.',
      services: [
        'Venue Selection and Booking Assistance',
        'Elegant Décor Planning and Setup',
        'Floral Arrangements and Stage Designing',
        'Lighting and Ambiance Enhancement',
      ],
      image: '/assets/venue.jpeg',
    },
    {
      icon: Sparkles,
      title: 'Customized Theme Concepts',
      description:
        'Designing personalized wedding themes that bring your dream celebration to life with creativity and style.',
      services: [
        'Theme-based Wedding Planning',
        'Cultural and Modern Concept Design',
        'Customized Décor Styling and Layouts',
        'Creative Entry & Stage Concepts',
      ],
      image: '/assets/Ganpati Final.jpg',
    },
    {
      icon: Sparkles,
      title: 'Entertainment & Artist Management',
      description:
        'Bringing life and energy to your wedding with professional performances and entertainment experiences.',
      services: [
        'Live Bands, DJs, and Celebrity Artists',
        'Cultural Performances & Special Acts',
        'Sound, Lighting, and Stage Setup',
        'Guest Engagement Activities',
      ],
      image: '/assets/Navratri Final.jpg',
    },
    {
      icon: Sparkles,
      title: 'Catering & Dining Experiences',
      description:
        'Offering delightful culinary arrangements that leave a lasting impression on every guest.',
      services: [
        'Customized Menu Planning',
        'Multi-Cuisine Catering Arrangements',
        'Live Food Counters and Theme-Based Dining',
        'Beverage and Dessert Stations',
      ],
      image: '/assets/Diwali Final.jpg',
    },
    {
      icon: Sparkles,
      title: 'Photography & Cinematic Coverage',
      description:
        'Capturing your precious moments with high-quality photography and cinematic wedding films.',
      services: [
        'Professional Wedding Photography',
        'Cinematic Videography and Drone shots',
        'Pre-Wedding and Post-Wedding Shoots',
        'Highlight Reels and Wedding Albums',
      ],
      image: '/assets/New Year Final.jpg',
    },
    {
      icon: Sparkles,
      title: 'Guest Hospitality & Logistics',
      description:
        'Ensuring your guests experience comfort, warmth, and seamless arrangements throughout the celebration.',
      services: [
        'Guest invitation & RSVP management',
        'Travel and Accommodation Planning',
        'Welcome Desk and Guest Coordination',
        'Transportation and On-Site Logistics',
      ],
      image: '/assets/Independence Day Final.jpg',
    },
    {
      icon: Sparkles,
      title: 'Destination Wedding Arrangements',
      description:
        'Turning your dream destination wedding into a flawlessly executed celebration anywhere in the world.',
      services: [
        'Destination Planning & Coordination',
        'Travel and Stay Arrangements',
        'Venue Setup at Destination Locations',
        'Full Event Execution and Support',
      ],
      image: '/assets/Independence Day Final.jpg',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5">Wedding Planner</h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl">
            Creating elegant and unforgettable wedding celebrations that reflect love, culture, and your unique story. From planning to execution, we ensure every moment is beautifully organized and stress-free.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              Our Wedding Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive wedding solutions bringing your dream celebration to life
            </p>
          </div>
          <div className="space-y-10 md:space-y-16">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-5 md:gap-10 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-start mb-3 md:mb-4">
                    <div className="bg-blue-100 p-1.5 md:p-2.5 rounded-lg mr-2 md:mr-3 flex-shrink-0">
                      <festival.icon size={20} className="text-blue-600 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {festival.title}
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
                    {festival.description}
                  </p>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                    What We Provide:
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2">
                    {festival.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={14} className="text-blue-500 mr-1.5 md:mr-2 mt-0.5 flex-shrink-0 md:w-5 md:h-5" />
                        <span className="text-gray-700 text-xs md:text-sm leading-snug">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="overflow-hidden rounded-lg md:rounded-xl shadow-md md:shadow-xl bg-gray-200">
                    <img
                      src={festival.image}
                      alt={festival.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Seamless Execution</h3>
              <p className="text-gray-600">
                From concept to completion, we handle every detail so you can simply enjoy the celebration
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                Each wedding is unique; we tailor our packages and services to match your vision, culture, and budget
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Professional Team</h3>
              <p className="text-gray-600">
                Our experienced coordinators, technicians, and artists work in perfect harmony to deliver exceptional experiences
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Love-Focused Approach</h3>
              <p className="text-gray-600">
                We believe in celebrations that honor your love story, creating intimate and joyful experiences for you and your loved ones
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Affordable Excellence</h3>
              <p className="text-gray-600">
                Premium quality weddings don't have to break the bank; our tiered packages ensure accessibility for every couple
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5 leading-tight">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-5 md:mb-7 max-w-2xl mx-auto leading-relaxed px-2">
            Let's collaborate to create a wedding experience that celebrates your love story and creates unforgettable memories.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
