export default function Partners() {
  const partners = [
    { name: 'Company A', logo: 'https://via.placeholder.com/150x60/4A90E2/FFFFFF?text=Partner+A' },
    { name: 'Company B', logo: 'https://via.placeholder.com/150x60/50C878/FFFFFF?text=Partner+B' },
    { name: 'Company C', logo: 'https://via.placeholder.com/150x60/E67E22/FFFFFF?text=Partner+C' },
    { name: 'Company D', logo: 'https://via.placeholder.com/150x60/9B59B6/FFFFFF?text=Partner+D' },
    { name: 'Company E', logo: 'https://via.placeholder.com/150x60/E74C3C/FFFFFF?text=Partner+E' },
    { name: 'Company F', logo: 'https://via.placeholder.com/150x60/1ABC9C/FFFFFF?text=Partner+F' },
    { name: 'Company G', logo: 'https://via.placeholder.com/150x60/3498DB/FFFFFF?text=Partner+G' },
    { name: 'Company H', logo: 'https://via.placeholder.com/150x60/F39C12/FFFFFF?text=Partner+H' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
            Our Valued Partners & Clients
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            Trusted by leading brands across industries
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-[100px] md:min-h-[120px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
