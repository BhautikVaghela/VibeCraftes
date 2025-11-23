import { Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getAllPublishedArticles } from '../utils/newsAggregator';

interface NewsProps {
  onNavigate?: (page: string) => void;
  onSelectArticle?: (slug: string) => void;
}

export default function News({ onNavigate, onSelectArticle }: NewsProps) {
  const [articles, setArticles] = useState(() => getAllPublishedArticles().slice(0, 3));

  useEffect(() => {
    const handleArticlesUpdate = () => {
      setArticles(getAllPublishedArticles().slice(0, 3));
    };

    window.addEventListener('articlesUpdated', handleArticlesUpdate);
    return () => window.removeEventListener('articlesUpdated', handleArticlesUpdate);
  }, []);

  const handleReadMore = (slug: string) => {
    if (onSelectArticle) {
      onSelectArticle(slug);
      window.scrollTo(0, 0);
      return;
    }
    onNavigate?.('news');
    window.scrollTo(0, 0);
  };

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
          {articles.map((item) => (
            <article
              key={item.slug}
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
                <button
                  onClick={() => handleReadMore(item.slug)}
                  className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group"
                >
                  <span>Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              onNavigate?.('news');
              window.scrollTo(0, 0);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
