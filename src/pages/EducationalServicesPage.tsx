import { GraduationCap, CheckCircle } from 'lucide-react';

interface EducationalServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function EducationalServicesPage({ onNavigate }: EducationalServicesPageProps) {
  const services = [
    {
      icon: GraduationCap,
      title: 'Annual Day & Award Ceremonies',
      description:
        'Recognizing excellence and celebrating milestones with professionally managed stage events and premium presentation.',
      services: [
        'Annual Day Celebrations',
        'Award Distribution Ceremonies',
        'Theme-Based Stage Design',
        'Lighting, Sound & Anchor Management',
      ],
      image: '/assets/annual-day-award-ceremonies.png',
    },
    {
      icon: GraduationCap,
      title: 'Graduation & Convocation Events',
      description:
        'Adding prestige and elegance to academic achievements through well-organized and memorable convocation ceremonies.',
      services: [
        'Graduation Day Planning',
        'Convocation Stage Setup',
        'Guest and VIP Management',
        'Audio-Visual and Presentation Support',
      ],
      image: '/assets/graduation-convocation-events.jpeg',
    },
    {
      icon: GraduationCap,
      title: 'Cultural Programs & Talent Shows',
      description:
        'Encouraging student creativity and participation through engaging cultural performances and competitions.',
      services: [
        'Dance, Music & Drama Shows',
        'Inter-School / Inter-College Talent Events',
        'Stage Choreography and Management',
        'Sound, Lighting & Special Effects',
      ],
      image: '/assets/cultural-programs-talent-shows.jpeg',
    },
    {
      icon: GraduationCap,
      title: 'Freshers & Farewell Parties',
      description:
        'Creating joyful and energetic celebrations that strengthen student bonding and campus culture.',
      services: [
        'Freshers Party Arrangements',
        'Farewell Event Planning',
        'DJ Nights and Entertainment',
        'Student Coordination and Logistics',
      ],
      image: '/assets/freshers-farewell-parties.png',
    },
    {
      icon: GraduationCap,
      title: 'School Carnivals & Campus Festivals',
      description:
        'Designing fun-filled campus celebrations that balance entertainment with institutional values.',
      services: [
        'School & College Carnivals',
        'Fest Theme Planning & Execution',
        'Game Zones and Activity Areas',
        'Live Performances and DJ Setup',
      ],
      image: '/assets/school-carnivals-campus-festivals.png',
    },
    {
      icon: GraduationCap,
      title: 'Seminars, Workshops & Conferences',
      description:
        'Professionally managing academic gatherings that inspire learning and meaningful discussions.',
      services: [
        'Seminar and Workshop Planning',
        'Conference Hall Setup',
        'Audio-Visual and Projector Arrangements',
        'Delegate and Guest Coordination',
      ],
      image: '/assets/seminars-workshops-conferences.png',
    },
    {
      icon: GraduationCap,
      title: 'Student Engagement & Entertainment Activities',
      description:
        'Enhancing participation and enjoyment through interactive experiences that energize and inspire students.',
      services: [
        'Fun Games and Activities',
        'DJ Nights and Campus Entertainment',
        'Motivational and Team-Building Activities',
        'Celebrity or Guest Artist Performances',
      ],
      image: '/assets/student-engagement-entertainment-activities.png',
    },
    {
      icon: GraduationCap,
      title: 'Picnics & Educational Tours',
      description:
        'Organizing safe, exciting, and well-planned outings that offer students exposure, learning, and memorable adventures.',
      services: [
        'School and College Picnics',
        'Industrial and Educational Tours',
        'Leadership and Skill-Development Camps',
        'Travel, Stay & Activity Coordination',
      ],
      image: '/assets/picnics-educational-tours.png',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5">Educational Institute Services</h1>
          <p className="text-sm sm:text-base md:text-lg text-green-100 max-w-3xl">
            Designing disciplined yet vibrant events that celebrate achievements, encourage creativity, and enhance student engagement. From academic ceremonies to cultural festivals and tours, we deliver meaningful experiences with flawless execution.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              Our Educational Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive event solutions for educational institutions
            </p>
          </div>
          <div className="space-y-10 md:space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-5 md:gap-10 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-start mb-3 md:mb-4">
                    <div className="bg-green-100 p-1.5 md:p-2.5 rounded-lg mr-2 md:mr-3 flex-shrink-0">
                      <service.icon size={20} className="text-green-600 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
                    What We Provide:
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={14} className="text-green-500 mr-1.5 md:mr-2 mt-0.5 flex-shrink-0 md:w-5 md:h-5" />
                        <span className="text-gray-700 text-xs md:text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="overflow-hidden rounded-lg md:rounded-xl shadow-md md:shadow-xl bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
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
              <h3 className="text-2xl font-bold text-green-600 mb-4">Seamless Execution</h3>
              <p className="text-gray-600">
                From concept to completion, we handle every detail so you can focus on education and your students
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                Each institution is unique; we tailor our packages and services to match your educational values and budget
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Professional Team</h3>
              <p className="text-gray-600">
                Our experienced coordinators, technicians, and artists work in perfect harmony to deliver exceptional experiences
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Student-Focused Approach</h3>
              <p className="text-gray-600">
                We create events that inspire learning, encourage creativity, and foster student engagement and pride
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Affordable Excellence</h3>
              <p className="text-gray-600">
                Premium quality events don't have to break the bank; our tiered packages ensure accessibility for every institution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-5 leading-tight">Ready to Elevate Your Campus Events?</h2>
          <p className="text-sm sm:text-base md:text-lg text-green-100 mb-5 md:mb-7 max-w-2xl mx-auto leading-relaxed px-2">
            Let's collaborate to create educational experiences that inspire students and celebrate achievements.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-green-600 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-green-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
