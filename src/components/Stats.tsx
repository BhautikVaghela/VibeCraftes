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
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={48} className="text-white" />
              </div>
              <div className={`font-bold text-white mb-2 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'}`}>
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm md:text-base text-amber-50 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
