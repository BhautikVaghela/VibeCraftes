import { newsArticles as staticArticles } from '../data/news';
import { getStoredNews } from './newsManager';
import { NewsArticle } from '../types/news';

// Convert static articles to match the admin NewsArticle interface
const convertStaticArticles = () => {
  return staticArticles.map((article, index) => ({
    id: `static-${index}`,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content ? article.content.join('\n\n') : '',
    image: article.image,
    category: article.category,
    date: article.date,
    author: article.author,
    featured: article.featured || false,
    published: true,
    section: (article.featured ? 'featured' : 'latest') as 'featured' | 'latest',
  }));
};

// Get all articles (static + admin-created) that are published
export const getAllPublishedArticles = async (): Promise<NewsArticle[]> => {
  const adminArticles = (await getStoredNews()).filter(article => article.published);
  const staticConverted = convertStaticArticles();
  
  // Combine and sort by date (newest first)
  const allArticles = [...adminArticles, ...staticConverted];
  return allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get article by slug from both sources
export const getArticleBySlug = async (slug: string): Promise<NewsArticle | null> => {
  const adminArticles = await getStoredNews();
  const adminArticle = adminArticles.find(article => article.slug === slug);
  
  if (adminArticle) {
    return adminArticle;
  }
  
  const staticConverted = convertStaticArticles();
  return staticConverted.find(article => article.slug === slug) || null;
};
