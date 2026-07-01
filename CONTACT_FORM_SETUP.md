# Contact Form Setup Guide

This guide will walk you through making the contact form fully functional. There are 5 main steps.

## Step 1: Set Up Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Fill in your Supabase credentials:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

   **Where to find these:**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project
   - Click "Settings" → "API" in the left sidebar
   - Copy the "Project URL" and "anon" key

---

## Step 2: Create the Database Table

1. Go to your Supabase project dashboard
2. Click **"SQL Editor"** in the left sidebar
3. Click **"New query"** button
4. Copy and paste this SQL:

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

-- Create a policy to allow authenticated users to read all records
CREATE POLICY "Allow authenticated reads on contact_queries"
ON public.contact_queries
FOR SELECT
TO authenticated
USING (true);
```

5. Click **"Run"** button
6. Verify: Go to **"Table Editor"** → You should see `contact_queries` table

---

## Step 3: Deploy the Email Service

You need to set up an email service to send notifications. Choose ONE option:

### Option A: Use Resend (Recommended - Free tier available)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Create an API key:
   - Click **"Settings"** in the sidebar
   - Click **"API Keys"**
   - Click **"Create API Key"**
   - Copy the key and add it to `.env`:
     ```
     RESEND_API_KEY=your-key-here
     ```

4. Deploy the Edge Function (see Step 4 below)

### Option B: Use SendGrid (Alternative)

1. Go to [https://sendgrid.com](https://sendgrid.com)
2. Sign up for a free account
3. Create an API key:
   - Click **"Settings"** → **"API Keys"**
   - Click **"Create API Key"**
   - Copy the key and add it to `.env`:
     ```
     SENDGRID_API_KEY=your-key-here
     ```

4. Deploy the Edge Function (see Step 4 below)

---

## Step 4: Deploy the Edge Function

### Using Supabase CLI (Recommended)

1. **Install Supabase CLI:**
   ```bash
   npm install -g supabase
   ```

2. **Login to Supabase:**
   ```bash
   supabase login
   ```

3. **Link your project:**
   ```bash
   supabase link --project-ref your-project-id
   ```
   (Find your project ID in Supabase dashboard URL)

4. **Deploy the function:**
   ```bash
   supabase functions deploy send-contact-email
   ```

5. **Add secrets to the function:**
   
   For **Resend**:
   ```bash
   supabase secrets set RESEND_API_KEY your-resend-api-key
   ```
   
   For **SendGrid**:
   ```bash
   supabase secrets set SENDGRID_API_KEY your-sendgrid-api-key
   ```

### Manual Deployment (Alternative)

1. Go to your Supabase Dashboard
2. Click **"Edge Functions"** in the left sidebar
3. Click **"Create a new function"**
4. Name it: `send-contact-email`
5. Copy the code from `supabase/functions/send-contact-email/index.ts`
6. Paste it into the Supabase editor
7. Click **"Deploy"**
8. Add secrets (see instructions above)

---

## Step 5: Update the Recipient Email (Optional)

If you want to send emails to a different address:

1. Go to `supabase/functions/send-contact-email/index.ts`
2. Find this line:
   ```typescript
   const recipientEmail = 'vibecrafters.entertainment@gmail.com';
   ```
3. Replace with your email address
4. Re-deploy the function:
   ```bash
   supabase functions deploy send-contact-email
   ```

---

## Testing the Contact Form

1. **Restart the dev server:**
   ```bash
   npm run dev
   ```

2. **Go to the contact page:**
   - Navigate to `/contact` in your browser

3. **Fill out and submit the form**

4. **Verify the submission:**
   - Check your email inbox for the notification
   - Go to Supabase → Table Editor → `contact_queries`
   - You should see the submission data there

---

## Troubleshooting

### "Supabase is not configured" error
- Make sure `.env` file exists in the project root
- Check that `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Restart the dev server: `npm run dev`

### "Permission denied" error when submitting
- Make sure the RLS policy was created in Step 2
- Go to Table Editor → `contact_queries` → Security tab
- Verify the "Allow anonymous inserts" policy exists

### Email not being sent
- Check that the email service API key is correctly set in the Edge Function secrets
- Go to Edge Functions → send-contact-email → check the logs
- Make sure you're using the correct environment variable name (`RESEND_API_KEY` or `SENDGRID_API_KEY`)

### Form submits but shows error
- Check the browser console for error messages
- Check Supabase Edge Function logs
- Verify the `.env` file is being read (the app should show no config error)

---

## Summary

After following these steps, your contact form will:
- ✅ Accept form submissions
- ✅ Store data in Supabase database
- ✅ Send email notifications to your inbox
- ✅ Show success/error messages to users

Estimated time: 10-15 minutes