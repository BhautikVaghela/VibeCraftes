export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  featured: boolean;
  published: boolean;
  section: 'featured' | 'latest';
}
