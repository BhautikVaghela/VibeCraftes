-- Fix RLS Policies for news_articles
-- Run this in Supabase SQL Editor to allow admin operations without Supabase auth

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Anyone can view published articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can insert articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can update articles" ON news_articles;
DROP POLICY IF EXISTS "Authenticated users can delete articles" ON news_articles;

-- Create permissive policies
-- Anyone can read published articles
CREATE POLICY "Anyone can view published articles"
ON news_articles FOR SELECT
USING (published = true);

-- Allow insert from anyone (your app has its own admin auth)
CREATE POLICY "Allow insert for all users"
ON news_articles FOR INSERT
WITH CHECK (true);

-- Allow update for all users
CREATE POLICY "Allow update for all users"
ON news_articles FOR UPDATE
USING (true);

-- Allow delete for all users
CREATE POLICY "Allow delete for all users"
ON news_articles FOR DELETE
USING (true);
