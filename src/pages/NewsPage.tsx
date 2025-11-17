import { Calendar, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const newsItems = [
    {
      title: 'YourBrand Wins Best Event Management Company Award 2024',
      date: '2024-10-15',
      category: 'Awards',
      excerpt:
        'Recognized for excellence in creating innovative and memorable experiences across multiple industries. The award highlights our commitment to pushing boundaries and delivering exceptional results.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      title: 'Successfully Executed Global Tech Summit with 10,000+ Attendees',
      date: '2024-09-28',
      category: 'Events',
      excerpt:
        'A groundbreaking hybrid event featuring world-renowned speakers and cutting-edge virtual engagement. The summit connected technology leaders from over 50 countries.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      title: 'Expanding Our Services: Introducing AI-Powered Event Analytics',
      date: '2024-09-10',
      category: 'Innovation',
      excerpt:
        'Leveraging artificial intelligence to provide real-time insights and enhance event experiences. Our new platform offers predictive analytics and personalized attendee engagement.',
      image: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      title: 'Partnership Announcement: Collaborating with Leading Venue Networks',
      date: '2024-08-22',
      category: 'Partnerships',
      excerpt:
        'Strategic alliance to bring world-class venues and seamless event experiences to our clients globally. This partnership expands our reach to 100+ premium locations.',
      image: 'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      title: 'Sustainability Initiative: Committing to Carbon-Neutral Events',
      date: '2024-08-05',
      category: 'Sustainability',
      excerpt:
        'Launching our green events program to reduce environmental impact and promote eco-friendly practices. Our goal is to achieve carbon neutrality across all events by 2025.',
      image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      title: 'Record-Breaking Concert Series Attracts 500,000 Attendees',
      date: '2024-07-18',
      category: 'Events',
      excerpt:
        'Our largest concert series to date, featuring international artists across multiple cities. The series showcased our expertise in large-format event production.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      title: 'Industry Report: The Future of Hybrid Events in 2025',
      date: '2024-07-01',
      category: 'Insights',
      excerpt:
        'Our comprehensive research on emerging trends and best practices in hybrid event management. Download the full report for actionable insights and predictions.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      title: 'Team Expansion: Welcoming 50 New Creative Professionals',
      date: '2024-06-15',
      category: 'Company',
      excerpt:
        'Growing our talent pool to meet increasing demand and deliver even more exceptional experiences. Our team now spans 15 countries with diverse expertise.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
  ];

  const filteredNews = newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredNews = filteredNews.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Media</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
            Stay updated with our latest achievements, industry insights, and event highlights
          </p>
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search news and updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </section>

      {featuredNews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group">
                      <span>Read Full Story</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {regularNews.map((item, index) => (
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <time dateTime={item.date}>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {item.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group text-sm">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest news, insights, and event updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
