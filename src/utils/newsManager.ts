import { NewsArticle } from '../types/news';
import { supabase } from '../lib/supabaseClient';

const STORAGE_KEY = 'vibecrafters_news_articles';

// Get articles from Supabase (fallback to localStorage for backwards compatibility)
export const getStoredNews = async (): Promise<NewsArticle[]> => {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching news from Supabase:', error);
      // Fallback to localStorage
    }
  }
  
  // Fallback to localStorage if Supabase is not available
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

// Synchronous version for compatibility (will return empty array initially)
export const getStoredNewsSync = (): NewsArticle[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

export const addNews = async (article: Omit<NewsArticle, 'id' | 'slug'>): Promise<NewsArticle> => {
  const slug = generateSlug(article.title);
  const newArticle = {
    ...article,
    slug,
    section: article.section || 'latest',
    date: new Date().toISOString(),
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .insert([newArticle])
        .select()
        .single();
      
      if (error) throw error;
      window.dispatchEvent(new Event('articlesUpdated'));
      return data;
    } catch (error) {
      console.error('Error adding news to Supabase:', error);
      throw error;
    }
  }
  
  // Fallback to localStorage
  const articles = getStoredNewsSync();
  const localArticle: NewsArticle = {
    ...newArticle,
    id: Date.now().toString(),
  };
  articles.push(localArticle);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  window.dispatchEvent(new Event('articlesUpdated'));
  return localArticle;
};

export const updateNews = async (id: string, updates: Partial<NewsArticle>): Promise<NewsArticle | null> => {
  if (supabase) {
    try {
      const updateData: any = { ...updates };
      if (updates.title) {
        updateData.slug = generateSlug(updates.title);
      }
      
      const { data, error } = await supabase
        .from('news_articles')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      window.dispatchEvent(new Event('articlesUpdated'));
      return data;
    } catch (error) {
      console.error('Error updating news in Supabase:', error);
      throw error;
    }
  }
  
  // Fallback to localStorage
  const articles = getStoredNewsSync();
  const index = articles.findIndex(a => a.id === id);
  if (index === -1) return null;
  
  const updatedArticle = {
    ...articles[index],
    ...updates,
    slug: updates.title ? generateSlug(updates.title) : articles[index].slug,
  };
  
  articles[index] = updatedArticle;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  window.dispatchEvent(new Event('articlesUpdated'));
  return updatedArticle;
};

export const deleteNews = async (id: string): Promise<boolean> => {
  if (supabase) {
    try {
      const { error } = await supabase
        .from('news_articles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      window.dispatchEvent(new Event('articlesUpdated'));
      return true;
    } catch (error) {
      console.error('Error deleting news from Supabase:', error);
      return false;
    }
  }
  
  // Fallback to localStorage
  const articles = getStoredNewsSync();
  const filtered = articles.filter(a => a.id !== id);
  if (filtered.length === articles.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event('articlesUpdated'));
  return true;
};

export const getNewsById = async (id: string): Promise<NewsArticle | null> => {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching news by ID from Supabase:', error);
    }
  }
  
  const articles = getStoredNewsSync();
  return articles.find(a => a.id === id) || null;
};

export const getNewsBySlug = async (slug: string): Promise<NewsArticle | null> => {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching news by slug from Supabase:', error);
    }
  }
  
  const articles = getStoredNewsSync();
  return articles.find(a => a.slug === slug) || null;
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};
