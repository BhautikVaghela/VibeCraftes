import { Award, Calendar, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Calendar,
      value: 'Creative Minds',
      label: 'Quality-Driven Execution',
      description: 'Excellence in every detail',
    },
    {
      icon: Globe,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Memorable experiences guaranteed',
    },
    {
      icon: Award,
      value: 'Top-Tier',
      label: 'Event Partner',
      description: 'Trusted across Gujarat',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-5 md:p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <div className="flex justify-center mb-3">
                <stat.icon size={36} className="text-white md:w-12 md:h-12" />
              </div>
              <div className={`font-bold text-white mb-1.5 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'}`}>
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-semibold text-white mb-1.5">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-amber-50 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
