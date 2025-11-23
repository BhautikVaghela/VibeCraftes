import { Calendar, ArrowRight, Search } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';
import { getAllPublishedArticles } from '../utils/newsAggregator';

interface NewsPageProps {
  onSelectArticle: (slug: string) => void;
}

export default function NewsPage({ onSelectArticle }: NewsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [allArticles, setAllArticles] = useState(getAllPublishedArticles());

  useEffect(() => {
    const handleArticlesUpdate = () => {
      setAllArticles(getAllPublishedArticles());
    };

    window.addEventListener('articlesUpdated', handleArticlesUpdate);
    return () => window.removeEventListener('articlesUpdated', handleArticlesUpdate);
  }, []);

  const filteredNews = useMemo(() => {
    return allArticles.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allArticles, searchQuery]);

  const featuredNews = filteredNews.filter((item) => item.section === 'featured');
  const regularNews = filteredNews.filter((item) => item.section === 'latest');

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
                    <button
                      onClick={() => {
                        onSelectArticle(item.slug);
                        window.scrollTo(0, 0);
                      }}
                      className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group"
                    >
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
                  <button
                    onClick={() => {
                      onSelectArticle(item.slug);
                      window.scrollTo(0, 0);
                    }}
                    className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
