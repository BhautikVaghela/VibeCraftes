import { NewsArticle } from '../types/news';

const STORAGE_KEY = 'vibecrafters_news_articles';

export const getStoredNews = (): NewsArticle[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

export const addNews = (article: Omit<NewsArticle, 'id' | 'slug'>): NewsArticle => {
  const articles = getStoredNews();
  const newArticle: NewsArticle = {
    ...article,
    id: Date.now().toString(),
    slug: generateSlug(article.title),
    section: article.section || 'latest',
  };
  articles.push(newArticle);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return newArticle;
};

export const updateNews = (id: string, updates: Partial<NewsArticle>): NewsArticle | null => {
  const articles = getStoredNews();
  const index = articles.findIndex(a => a.id === id);
  if (index === -1) return null;
  
  const updatedArticle = {
    ...articles[index],
    ...updates,
    slug: updates.title ? generateSlug(updates.title) : articles[index].slug,
  };
  
  articles[index] = updatedArticle;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return updatedArticle;
};

export const deleteNews = (id: string): boolean => {
  const articles = getStoredNews();
  const filtered = articles.filter(a => a.id !== id);
  if (filtered.length === articles.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
};

export const getNewsById = (id: string): NewsArticle | null => {
  const articles = getStoredNews();
  return articles.find(a => a.id === id) || null;
};

export const getNewsBySlug = (slug: string): NewsArticle | null => {
  const articles = getStoredNews();
  return articles.find(a => a.slug === slug) || null;
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};
