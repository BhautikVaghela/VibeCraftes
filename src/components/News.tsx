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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">News & Media</h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            Stay updated with our latest achievements and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((item) => (
            <article
              key={item.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-60 object-cover"
              />
              <div className="p-6 md:p-7">
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                  <Calendar size={16} className="mr-2" />
                  <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
                  {item.excerpt}
                </p>
                <button
                  onClick={() => handleReadMore(item.slug)}
                  className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group text-sm md:text-base"
                >
                  <span>Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <button
            onClick={() => {
              onNavigate?.('news');
              window.scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 text-base shadow-lg"
          >
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
