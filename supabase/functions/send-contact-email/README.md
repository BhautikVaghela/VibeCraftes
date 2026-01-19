# send-contact-email Edge Function

This Edge Function sends contact form submissions via email to `vibecrafters.entertainment@gmail.com`.

## Setup Instructions

### Option 1: Using Resend (Recommended - Free tier available)

1. Sign up at https://resend.com
2. Get your API key from the dashboard
3. In Supabase Dashboard → Edge Functions → Settings → Secrets, add:
   - `RESEND_API_KEY` = your Resend API key
4. Update the `from` email in `index.ts` to use your verified domain (or use `onboarding@resend.dev` for testing)

### Option 2: Using SendGrid

1. Sign up at https://sendgrid.com
2. Get your API key from the dashboard
3. In Supabase Dashboard → Edge Functions → Settings → Secrets, add:
   - `SENDGRID_API_KEY` = your SendGrid API key

### Deploy the Function

1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link your project: `supabase link --project-ref grlpluuwbjqsjmtzhnvs`
4. Deploy: `supabase functions deploy send-contact-email`

### Without Email Service

If you don't configure an email service, the function will still return success (since the data is already saved in the database by `contactService.ts`). You can check the Supabase logs to see the contact form data.

## Testing

After deployment, test with:

```bash
curl -X POST https://grlpluuwbjqsjmtzhnvs.supabase.co/functions/v1/send-contact-email \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```


