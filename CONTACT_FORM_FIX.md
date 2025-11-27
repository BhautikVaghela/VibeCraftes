# Contact Form Fix - Issue Resolution

## Problem Identified
The contact form was not working because:
1. **Incomplete Supabase URL** in `.env` file
2. Environment variables need to be reloaded
3. Possible missing table or RLS policies in Supabase

## Fixes Applied

### 1. Fixed .env File
**Before:**
```
VITE_SUPABASE_URL=https://ezxqslnrnvzvxfiwuugk.
```

**After:**
```
VITE_SUPABASE_URL=https://ezxqslnrnvzvxfiwuugk.supabase.co
```

### 2. Added Debug Logging
Added console logs to `contactService.ts` to help identify issues:
- Logs Supabase configuration status
- Logs insertion attempts and results
- Logs email sending status
- Better error messages

### 3. Improved Error Handling
- Email failure no longer blocks form submission
- More specific error messages for debugging
- Console warnings for email issues

## Steps to Complete Setup

### A. Local Development

1. **Restart the dev server** to pick up the .env changes:
   ```bash
   # Stop the current server (Ctrl+C in the terminal)
   npm run dev
   ```

2. **Test the connection** by opening `test-supabase.html` in your browser:
   ```bash
   # Open the test file
   start test-supabase.html
   ```

3. **Check the browser console** when submitting the contact form to see detailed logs

### B. Supabase Setup (Required)

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
   - Select your project: `ezxqslnrnvzvxfiwuugk`

2. **Create the table** (if not exists):
   - Go to SQL Editor
   - Run this SQL:
   ```sql
   create table if not exists public.contact_queries (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     email text not null,
     company text,
     phone text,
     service text,
     message text not null,
     submitted_at timestamptz not null default now()
   );
   ```

3. **Set up RLS Policy** (Row Level Security):
   - Go to Authentication → Policies
   - For table `contact_queries`, add a policy:
   ```sql
   -- Allow anonymous users to insert contact queries
   create policy "Allow public inserts"
   on public.contact_queries
   for insert
   to anon
   with check (true);
   
   -- Optional: Allow viewing (for admin dashboard)
   create policy "Allow authenticated read"
   on public.contact_queries
   for select
   to authenticated
   using (true);
   ```

4. **Optional: Set up Edge Function for Email**
   - Go to Edge Functions
   - Create function: `send-contact-email`
   - See `supabase/functions/send-contact-email/index.ts` for implementation
   - Note: Form will work without this, but no email notifications

### C. Vercel Environment Variables

**IMPORTANT**: Add/update these in Vercel dashboard:

1. Go to: https://vercel.com/your-project/settings/environment-variables

2. Add these variables:
   ```
   VITE_SUPABASE_URL = https://ezxqslnrnvzvxfiwuugk.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eHFzbG5ybnZ6dnhmaXd1dWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NjkzMDEsImV4cCI6MjA3OTA0NTMwMX0.IjOVkSKS0egL8DQrVUlYFtHeOz0OjtBcuc7D9MymjDM
   ```

3. **Redeploy** after adding variables

## Testing

### Test Locally:
1. Restart dev server
2. Open http://localhost:5173/contact
3. Fill out the form
4. Open browser console (F12) to see debug logs
5. Submit the form

### Expected Console Output:
```
Supabase configured: true
Supabase URL: https://ezxqslnrnvzvxfiwuugk.supabase.co
Attempting to insert: {name: "...", email: "...", ...}
Data inserted successfully, attempting to send email...
Contact inquiry submitted successfully
```

### Test on Vercel:
1. After deploying with env vars
2. Visit your-site.vercel.app/contact
3. Test form submission
4. Check Supabase Dashboard → Table Editor → contact_queries for new entries

## Troubleshooting

### Error: "Supabase is not configured"
- ✅ Fixed by completing the .env file
- Restart dev server after changes

### Error: "Table missing" or "relation does not exist"
- Run the SQL create table command in Supabase
- Make sure table is in `public` schema

### Error: "new row violates row-level security policy"
- Add the RLS policy for anonymous inserts
- Or disable RLS temporarily for testing

### Form submits but no success message
- Check browser console for errors
- Verify Supabase dashboard shows the new record
- Email function is optional - data saving is primary

### Works locally but not on Vercel
- Add environment variables to Vercel dashboard
- Redeploy after adding env vars
- Check Vercel deployment logs for errors

## Verification Checklist

- [ ] .env file has complete VITE_SUPABASE_URL
- [ ] Dev server restarted after .env changes
- [ ] test-supabase.html shows all green checkmarks
- [ ] Supabase table `contact_queries` exists
- [ ] RLS policy allows anonymous inserts
- [ ] Vercel has environment variables configured
- [ ] Form submission shows success message
- [ ] New entries appear in Supabase dashboard
- [ ] Browser console shows no errors

## Next Steps

1. **Immediate**: Restart dev server and test locally
2. **Supabase**: Create table and RLS policy
3. **Vercel**: Add environment variables and redeploy
4. **Optional**: Set up email edge function for notifications

---

**Files Modified:**
- `.env` - Fixed incomplete URL
- `src/services/contactService.ts` - Added debug logging
- `test-supabase.html` - Created test utility

**Status**: Ready to test after completing Supabase setup
