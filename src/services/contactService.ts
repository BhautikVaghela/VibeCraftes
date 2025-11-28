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
  
  try {
    const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
      body: payload,
    });

    if (emailError) {
      console.error('Email invocation error:', emailError);
      console.error('Error details:', JSON.stringify(emailError, null, 2));
    } else {
      console.log('Email function invoked successfully');
      console.log('Response:', emailData);
    }
  } catch (err) {
    console.error('Exception during email send:', err);
  }
  
  console.log('Contact inquiry submitted successfully');
}

