## Contact Form Supabase Setup

1. Create a project (or use an existing one) in Supabase and grab the URL and anon key. Add them to a `.env` file at the repo root:
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. In Supabase SQL editor run:
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

3. Deploy an Edge Function named `send-contact-email` that sends the payload it receives to `vibecrafters.entertainment@gmail.com`.

4. Grant `insert` access on `contact_queries` to the `anon` role (or create an RLS policy) so the public client can insert rows.

5. Restart `npm run dev` after setting env vars.


