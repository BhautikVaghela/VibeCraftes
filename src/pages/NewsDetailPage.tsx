import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { getArticleBySlug } from '../utils/newsAggregator';

interface NewsDetailPageProps {
  slug: string | null;
  onNavigate: (page: string) => void;
  onBack?: () => void;
}

const renderMarkdownContent = (text: string) => {
  let html = text;
  
  html = html.replace(/### (.*?)(\n|$)/g, '<h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-5 md:mt-8 mb-2.5 md:mb-4">$1</h3>');
  html = html.replace(/## (.*?)(\n|$)/g, '<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-6 md:mt-10 mb-3 md:mb-5">$1</h2>');
  html = html.replace(/# (.*?)(\n|$)/g, '<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 md:mt-12 mb-4 md:mb-6">$1</h1>');
  
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  html = html.replace(/^- (.*?)$/gm, '<li class="ml-4 md:ml-6">$1</li>');
  html = html.replace(/(<li.*?<\/li>\n?)+/gs, '<ul class="list-disc space-y-1.5 md:space-y-2 my-4 md:my-6">$&</ul>');
  
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="ml-4 md:ml-6">$1</li>');
  html = html.replace(/(<li.*?<\/li>\n?)+/gs, '<ol class="list-decimal space-y-1.5 md:space-y-2 my-4 md:my-6">$&</ol>');
  
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline">$1</a>');
  
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-mono text-gray-800">$1</code>');
  
  html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 md:pl-6 py-2 italic text-gray-700 my-4 md:my-6 bg-blue-50 rounded-r">$1</blockquote>');
  
  html = html.replace(/\n\n/g, '</p><p class="mb-4 md:mb-6">');
  html = '<p class="mb-4 md:mb-6">' + html + '</p>';
  
  return { __html: html };
};

export default function NewsDetailPage({ slug, onNavigate, onBack }: NewsDetailPageProps) {
  const article = slug ? getArticleBySlug(slug) : null;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      onNavigate('news');
    }
    window.scrollTo(0, 0);
  };

  if (!article) {
    return (
      <div className="pt-20 md:pt-28 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Article Not Found</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">The story you are looking for may have been moved or archived.</p>
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to News & Media</span>
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20 bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-10 md:py-14 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center space-x-1.5 md:space-x-2 text-blue-100 hover:text-white font-semibold mb-4 md:mb-6 transition-colors text-sm md:text-base"
          >
            <ArrowLeft size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Back to News & Media</span>
          </button>
          <p className="text-xs md:text-sm uppercase tracking-wide text-blue-200 mb-2 md:mb-3">{article.category}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-blue-100 text-sm md:text-base">
            <div className="flex items-center space-x-1.5 md:space-x-2">
              <Calendar size={14} className="md:w-[18px] md:h-[18px]" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <span className="w-1 h-1 rounded-full bg-blue-200"></span>
            <span>By {article.author}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 pb-12 md:pb-20">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-48 sm:h-64 md:h-80 lg:h-[420px] object-cover" />
          <div className="p-5 sm:p-6 md:p-10 lg:p-12 space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 md:px-3 py-1 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
              <button className="inline-flex items-center space-x-1.5 md:space-x-2 text-gray-500 hover:text-blue-600 transition-colors text-sm md:text-base">
                <Share2 size={16} className="md:w-[18px] md:h-[18px]" />
                <span>Share article</span>
              </button>
            </div>

            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              <div 
                className="prose prose-sm md:prose-base lg:prose-lg prose-blue max-w-none"
                dangerouslySetInnerHTML={renderMarkdownContent(article.content)}
              />
            </div>

            <div className="rounded-lg md:rounded-xl bg-gray-50 p-4 sm:p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1.5 md:mb-2">Have a story you want us to cover?</h3>
                <p className="text-sm md:text-base text-gray-600">Talk to our communications team and we'll craft a feature tailored for you.</p>
              </div>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo(0, 0);
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
