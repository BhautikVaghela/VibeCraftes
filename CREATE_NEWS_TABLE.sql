-- Create news_articles table in Supabase
-- Run this SQL in your Supabase SQL Editor: https://supabase.com/dashboard/project/ezxqslnrnvzvxfiwuugk/sql

CREATE TABLE IF NOT EXISTS news_articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Events',
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author TEXT NOT NULL DEFAULT 'VibeCrafters Team',
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT TRUE,
  section TEXT NOT NULL DEFAULT 'latest' CHECK (section IN ('featured', 'latest')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view published articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can insert articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can update articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can delete articles" ON news_articles;

-- Policy: Anyone can read published articles
CREATE POLICY "Anyone can view published articles"
ON news_articles FOR SELECT
USING (published = true);

-- Policy: Authenticated users can insert articles
CREATE POLICY "Authenticated users can insert articles"
ON news_articles FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users can update articles
CREATE POLICY "Authenticated users can update articles"
ON news_articles FOR UPDATE
USING (auth.role() = 'authenticated');

-- Policy: Authenticated users can delete articles
CREATE POLICY "Authenticated users can delete articles"
ON news_articles FOR DELETE
USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_news_articles_published ON news_articles(published);
CREATE INDEX IF NOT EXISTS idx_news_articles_date ON news_articles(date DESC);
CREATE INDEX IF NOT EXISTS idx_news_articles_slug ON news_articles(slug);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_news_articles_updated_at ON news_articles;

-- Create trigger to update updated_at on article updates
CREATE TRIGGER update_news_articles_updated_at
BEFORE UPDATE ON news_articles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
