import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { getArticleBySlug } from '../utils/newsAggregator';

interface NewsDetailPageProps {
  slug: string | null;
  onNavigate: (page: string) => void;
  onBack?: () => void;
}

const renderMarkdownContent = (text: string) => {
  let html = text;
  
  html = html.replace(/### (.*?)(\n|$)/g, '<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  html = html.replace(/## (.*?)(\n|$)/g, '<h2 class="text-3xl font-bold text-gray-900 mt-10 mb-5">$1</h2>');
  html = html.replace(/# (.*?)(\n|$)/g, '<h1 class="text-4xl font-bold text-gray-900 mt-12 mb-6">$1</h1>');
  
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  html = html.replace(/^- (.*?)$/gm, '<li class="ml-6">$1</li>');
  html = html.replace(/(<li.*?<\/li>\n?)+/gs, '<ul class="list-disc space-y-2 my-6">$&</ul>');
  
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="ml-6">$1</li>');
  html = html.replace(/(<li.*?<\/li>\n?)+/gs, '<ol class="list-decimal space-y-2 my-6">$&</ol>');
  
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline">$1</a>');
  
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>');
  
  html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 my-6 bg-blue-50 rounded-r">$1</blockquote>');
  
  html = html.replace(/\n\n/g, '</p><p class="mb-6">');
  html = '<p class="mb-6">' + html + '</p>';
  
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
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The story you are looking for may have been moved or archived.</p>
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to News & Media</span>
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center space-x-2 text-blue-100 hover:text-white font-semibold mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to News & Media</span>
          </button>
          <p className="text-sm uppercase tracking-wide text-blue-200 mb-4">{article.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-[420px] object-cover" />
          <div className="p-8 md:p-12 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
              <button className="inline-flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                <Share2 size={18} />
                <span>Share article</span>
              </button>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div 
                className="prose prose-lg prose-blue max-w-none"
                dangerouslySetInnerHTML={renderMarkdownContent(article.content)}
              />
            </div>

            <div className="rounded-xl bg-gray-50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Have a story you want us to cover?</h3>
                <p className="text-gray-600">Talk to our communications team and we'll craft a feature tailored for you.</p>
              </div>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo(0, 0);
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
