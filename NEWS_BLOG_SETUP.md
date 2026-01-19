# Setup Instructions for News Blog Database

## Step 1: Create the Supabase Table

1. **Go to Supabase SQL Editor**: 
   https://supabase.com/dashboard/project/ezxqslnrnvzvxfiwuugk/sql/new

2. **Copy and paste the SQL from `CREATE_NEWS_TABLE.sql`**

3. **Click "Run"** to create the table

## Step 2: Test the Blog System

1. **Login as Admin**: Go to https://vibecraftersentertainment.in/admin

2. **Create a test blog post**:
   - Fill in all fields
   - Upload an image
   - Click "Publish Article"

3. **Check if it appears**: Go to News & Media page

4. **Test from another browser/incognito**: 
   - Open a new incognito window
   - Go to https://vibecraftersentertainment.in/news
   - The blog should be visible!

## What Changed:

### Before (localStorage - didn't work):
- Blog saved only in admin's browser
- Other users couldn't see it
- Data lost on browser clear

### After (Supabase - works for everyone):
- Blog saved in cloud database
- Visible to ALL users
- Persistent and reliable
- Can be accessed from any device

## Troubleshooting:

If blogs don't appear:
1. Check browser console for errors (F12)
2. Verify Supabase table was created correctly
3. Check that articles have `published = true`
4. Make sure your `.env` file has correct Supabase credentials

## Features:
✅ Create, Edit, Delete blogs from admin panel
✅ Upload images or use URLs
✅ Publish/Unpublish articles
✅ Categorize articles
✅ Featured articles section
✅ Search functionality
✅ Responsive design
✅ **Blog posts visible to everyone!**
