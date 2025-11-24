import { ArrowRight, Briefcase, Sparkles, Users, Gift, Megaphone, Lightbulb } from 'lucide-react';

interface BusinessesProps {
  onNavigate: (page: string) => void;
}

export default function Businesses({ onNavigate }: BusinessesProps) {
  const businesses = [
    {
      icon: Sparkles,
      title: 'Festival Celebrations',
      description:
        'Design, production, artists, AV, permissions, guest experience, branding, hospitality, security. From Holi and Navratri to Diwali and New Year celebrations with customizable packages.',
      color: 'blue',
    },
    {
      icon: Briefcase,
      title: 'MICE Events',
      description:
        'Meetings, Incentives, Conferences & Exhibitions. From AGMs and board meetings to multi-day conferences, dealer meets, and trade shows with complete end-to-end management.',
      color: 'amber',
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description:
        'Annual family days, CSR events, award nights, press conferences, team building, and corporate gifting. Creating memorable moments that strengthen your corporate culture and brand.',
      color: 'green',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Brand Activation',
      description:
        'Product launches, facility openings, in-store experiences, roadshows, campus engagement, and influencer showcases. Driving footfall, engagement, and measurable brand lift.',
      color: 'orange',
    },
    {
      icon: Gift,
      title: 'Corporate Offsite',
      description:
        'Team building adventures, leadership camps, creative workshops, wellness retreats, and incentive travel programs. Building stronger teams and fostering creativity away from the workplace.',
      color: 'rose',
    },
    {
      icon: Lightbulb,
      title: 'Customized Solutions',
      description:
        'Every event is unique. We create bespoke experiences tailored to your specific needs, with integrated design, production, AV, talent curation, and comprehensive support.',
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-700',
    amber: 'from-amber-500 to-amber-700',
    green: 'from-green-500 to-green-700',
    orange: 'from-orange-500 to-orange-700',
    rose: 'from-rose-500 to-rose-700',
    purple: 'from-purple-500 to-purple-700',
  };

  return (
    <section id="our-business" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">Our Services</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive event solutions spanning corporate excellence, festive celebrations, and brand activation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${colorClasses[business.color as keyof typeof colorClasses]} p-6 md:p-7 text-white`}>
                <business.icon size={36} className="mb-4" />
                <h3 className="text-xl md:text-2xl font-bold leading-tight">{business.title}</h3>
              </div>
              <div className="p-6 md:p-7">
                <p className="text-base text-gray-600 mb-5 leading-relaxed">
                  {business.description}
                </p>
                <button
                  onClick={() => onNavigate(business.title === 'Festival Celebrations' ? 'residential-events' : 'businesses')}
                  className="text-amber-600 font-semibold flex items-center space-x-2 hover:text-amber-700 transition-colors text-base group-hover:translate-x-1 duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>Get in Touch</span>
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
