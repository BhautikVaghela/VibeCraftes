export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  author: string;
  readTime: string;
  content: string[];
  highlights?: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const newsArticles: NewsArticle[] = [];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug) || null;
}

