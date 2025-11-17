import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      title: 'YourBrand Wins Best Event Management Company Award 2024',
      date: '2024-10-15',
      excerpt:
        'Recognized for excellence in creating innovative and memorable experiences across multiple industries.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Successfully Executed Global Tech Summit with 10,000+ Attendees',
      date: '2024-09-28',
      excerpt:
        'A groundbreaking hybrid event featuring world-renowned speakers and cutting-edge virtual engagement.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Expanding Our Services: Introducing AI-Powered Event Analytics',
      date: '2024-09-10',
      excerpt:
        'Leveraging artificial intelligence to provide real-time insights and enhance event experiences.',
      image: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Media</h2>
          <p className="text-xl text-gray-600">
            Stay updated with our latest achievements and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group">
                  <span>Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
