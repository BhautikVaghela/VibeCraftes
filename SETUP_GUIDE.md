# Complete Setup Guide - Database + Email

Your contact form is already configured to do **BOTH**:
1. ✅ Save to database
2. ✅ Send email

You just need to set up 3 things:

---

## Step 1: Create Database Table ⚠️ REQUIRED

1. Go to: https://supabase.com/dashboard
2. Select your project: **grlpluuwbjqsjmtzhnvs**
3. Click **"SQL Editor"** in left sidebar
4. Click **"New query"**
5. Copy and paste this SQL:

```sql
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

ALTER TABLE public.contact_queries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on contact_queries"
ON public.contact_queries
FOR INSERT
TO anon
WITH CHECK (true);
```

6. Click **"Run"** button (or press Ctrl+Enter)
7. ✅ Verify: Go to **"Table Editor"** → You should see `contact_queries` table

---

## Step 2: Deploy Email Function ⚠️ REQUIRED

### Option A: Using Supabase Dashboard (Easiest)

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click **"Edge Functions"** in left sidebar
4. Click **"Create a new function"**
5. Function name: `send-contact-email`
6. Open the file: `supabase/functions/send-contact-email/index.ts` in your code editor
7. Copy ALL the code from that file
8. Paste it into the Supabase editor
9. Click **"Deploy"**

### Option B: Using Supabase CLI

```bash
# Install Supabase CLI (if not installed)
npm install -g supabase

# Login
supabase login

# Link your project
supabase link --project-ref grlpluuwbjqsjmtzhnvs

# Deploy the function
supabase functions deploy send-contact-email
```

---

## Step 3: Configure Email Service (Optional but Recommended)

To actually send emails, you need an email service. Choose one:

### Option A: Resend (Recommended - Free tier)

1. Sign up at: https://resend.com
2. Go to **API Keys** section
3. Click **"Create API Key"**
4. Copy the API key
5. In Supabase Dashboard → **Edge Functions** → **Settings** → **Secrets**
6. Click **"Add new secret"**
7. Name: `RESEND_API_KEY`
8. Value: Paste your Resend API key
9. Click **"Save"**

### Option B: SendGrid

1. Sign up at: https://sendgrid.com
2. Go to **Settings** → **API Keys**
3. Create API key
4. In Supabase → Edge Functions → Settings → Secrets
5. Add secret: `SENDGRID_API_KEY` = your SendGrid API key

---

## Step 4: Test It! 🎉

1. Make sure your `.env` file has:
   ```
   VITE_SUPABASE_URL=https://grlpluuwbjqsjmtzhnvs.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

2. Restart your dev server:
   ```bash
   npm run dev
   ```

3. Go to your contact page and submit the form

4. Check:
   - ✅ Database: Go to Supabase → Table Editor → `contact_queries` → See your data
   - ✅ Email: Check `vibecrafters.entertainment@gmail.com` inbox

---

## What Happens When Form is Submitted:

```
User submits form
    ↓
1. Data saved to database (contact_queries table) ✅
    ↓
2. Edge Function called (send-contact-email) ✅
    ↓
3. Email sent to vibecrafters.entertainment@gmail.com ✅
```

---

## Troubleshooting:

**Error: "Contact storage table is missing"**
→ You haven't created the table yet. Do Step 1.

**Error: "Function not found" or "send-contact-email failed"**
→ You haven't deployed the function yet. Do Step 2.

**Data saved but no email received**
→ Email service not configured. Do Step 3 (or check Supabase logs to see the data).

**Everything works but want to see the data**
→ Go to Supabase Dashboard → Table Editor → `contact_queries` → View all submissions


