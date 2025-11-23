# How to Create the contact_queries Table in Supabase

## Step 1: Open Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Sign in and select your project (grlpluuwbjqsjmtzhnvs)

## Step 2: Open SQL Editor
1. In the left sidebar, click **"SQL Editor"**
2. Click **"New query"** button

## Step 3: Run This SQL Code
Copy and paste this entire SQL block into the editor, then click **"Run"**:

```sql
-- Create the contact_queries table
CREATE TABLE IF NOT EXISTS public.contact_queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_queries ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts on contact_queries"
ON public.contact_queries
FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: Create a policy to allow authenticated users to read
CREATE POLICY "Allow authenticated reads on contact_queries"
ON public.contact_queries
FOR SELECT
TO authenticated
USING (true);
```

## Step 4: Verify the Table Was Created
1. In the left sidebar, click **"Table Editor"**
2. You should see `contact_queries` in the list
3. Click on it to see the columns

## Step 5: Test the Contact Form
1. Make sure your `.env` file has:
   ```
   VITE_SUPABASE_URL=https://grlpluuwbjqsjmtzhnvs.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
2. Restart your dev server: `npm run dev`
3. Try submitting the contact form
4. Check the `contact_queries` table in Supabase to see if the data was saved

## Troubleshooting
- If you get a permission error, make sure the RLS policy was created successfully
- If the table doesn't appear, refresh the Table Editor page
- Make sure you're running the SQL in the correct project/database


