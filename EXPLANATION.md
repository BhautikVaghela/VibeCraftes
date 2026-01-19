# Simple Explanation of the Contact Form Issue

## What Should Happen (Step by Step):

1. **User fills contact form** → Clicks "Send Message"
2. **Data saved to database** → `contact_queries` table in Supabase ✅
3. **Email sent** → Email goes to `vibecrafters.entertainment@gmail.com` ❌ (This is broken)

## The Problem:

Your contact form code (`contactService.ts`) does this:

```typescript
// Step 1: Save to database ✅ (This works if table exists)
await supabase.from('contact_queries').insert(insertPayload);

// Step 2: Send email ❌ (This is failing)
await supabase.functions.invoke('send-contact-email', { body: payload });
```

**The error you're getting means:**
- The database table `contact_queries` doesn't exist yet
- OR the Edge Function `send-contact-email` is not deployed

## What You Need to Do:

### ✅ Step 1: Create the Database Table
Go to Supabase Dashboard → SQL Editor → Run this:

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

### ✅ Step 2: Deploy the Email Function
The function `send-contact-email` exists in your code but needs to be deployed to Supabase.

**Option A: Using Supabase Dashboard (Easier)**
1. Go to Supabase Dashboard → Edge Functions
2. Click "Create a new function"
3. Name it: `send-contact-email`
4. Copy the code from `supabase/functions/send-contact-email/index.ts`
5. Paste and deploy

**Option B: Using CLI**
```bash
supabase functions deploy send-contact-email
```

### ✅ Step 3: Set Up Email Service (Optional but Recommended)
The function needs an email service to actually send emails. Choose one:

**Resend (Free tier available):**
1. Sign up at https://resend.com
2. Get API key
3. In Supabase Dashboard → Edge Functions → Settings → Secrets
4. Add: `RESEND_API_KEY` = your key

**OR SendGrid:**
1. Sign up at https://sendgrid.com  
2. Get API key
3. Add as secret: `SENDGRID_API_KEY`

## Summary:
- ❌ **Current Issue**: Table missing OR function not deployed
- ✅ **Fix**: Create table + Deploy function + (Optional) Add email service


