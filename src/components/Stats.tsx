import { Award, Calendar, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Calendar,
      value: '500+',
      label: 'Events Delivered',
      description: 'From concept to execution',
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
    <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={48} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-amber-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
