import { Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getAllPublishedArticles } from '../utils/newsAggregator';
import { NewsArticle } from '../types/news';

interface NewsProps {
  onNavigate?: (page: string) => void;
  onSelectArticle?: (slug: string) => void;
}

export default function News({ onNavigate, onSelectArticle }: NewsProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  const loadArticles = async () => {
    const allArticles = await getAllPublishedArticles();
    setArticles(allArticles.slice(0, 3));
  };

  useEffect(() => {
    loadArticles();

    const handleArticlesUpdate = () => {
      loadArticles();
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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">News & Media</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Stay updated with our latest achievements and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {articles.map((item) => (
            <article
              key={item.slug}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-5 md:p-6">
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                  <Calendar size={14} className="mr-1.5 md:w-4 md:h-4" />
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
