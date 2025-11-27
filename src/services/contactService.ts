import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export interface ContactFormPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function submitContactInquiry(payload: ContactFormPayload) {
  console.log('Supabase configured:', isSupabaseConfigured);
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
  
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  }

  const insertPayload = {
    ...payload,
    submitted_at: new Date().toISOString(),
  };

  console.log('Attempting to insert:', insertPayload);
  const { error: storageError } = await supabase.from('contact_queries').insert(insertPayload);

  if (storageError) {
    console.error('Storage error:', storageError);
    if (storageError.message?.includes('contact_queries')) {
      throw new Error(
        'Contact storage table is missing. Please create table "contact_queries" in Supabase with the expected columns.'
      );
    }
    throw new Error(storageError.message || 'Unable to save your inquiry right now.');
  }

  console.log('Data inserted successfully, attempting to send email...');
  const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
    body: payload,
  });

  if (emailError) {
    console.error('Email error:', emailError);
    // Don't throw error for email - data is already saved
    console.warn('Your inquiry was saved but email notification failed.');
  }
  
  console.log('Contact inquiry submitted successfully');
}

