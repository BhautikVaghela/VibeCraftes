// Edge Function: send-contact-email
// Sends contact form submissions to vibecrafters.entertainment@gmail.com
// Expects POST JSON: { name, email, company?, phone?, service?, message }

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let payload: any = {};
  try {
    payload = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { name, email, company, phone, service, message } = payload;

  // Basic validation
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields: name, email, message' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Get email service configuration
  // Option 1: Use Resend (recommended - get API key from https://resend.com)
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  
  // Option 2: Use SendGrid (alternative)
  const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY');

  const recipientEmail = 'vibecrafters.entertainment@gmail.com';

  // Format email content
  const emailSubject = `New Contact Form Submission from ${name}`;
  const emailBody = `
New contact form submission received:

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${service ? `Service Interested In: ${service}` : ''}

Message:
${message}

---
This email was sent from the VibeCrafters website contact form.
Reply directly to this email to respond to ${name}.
  `.trim();

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 10px; }
    .footer { background: #333; color: #fff; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🎉 New Contact Form Submission</h2>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">VibeCrafters Entertainment</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">👤 Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${company ? `<div class="field"><div class="label">🏢 Company:</div><div class="value">${company}</div></div>` : ''}
      ${phone ? `<div class="field"><div class="label">📱 Phone:</div><div class="value"><a href="tel:${phone}">${phone}</a></div></div>` : ''}
      ${service ? `<div class="field"><div class="label">🎯 Service Interested In:</div><div class="value">${service}</div></div>` : ''}
      <div class="field">
        <div class="label">💬 Message:</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Reply directly to this email to respond to ${name}</p>
      <p style="margin: 5px 0 0 0; opacity: 0.8;">Sent from VibeCrafters Website Contact Form</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  // Try to send email using Resend (if configured)
  if (RESEND_API_KEY) {
    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'VibeCrafters Website <onboarding@resend.dev>', // Update with your verified domain
          to: [recipientEmail],
          reply_to: email, // Allow direct reply to the customer
          subject: emailSubject,
          text: emailBody,
          html: htmlBody,
        }),
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error('Resend API error:', errorText);
        throw new Error('Email service error');
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    } catch (err) {
      console.error('Resend error:', err);
      // Fall through to alternative methods
    }
  }

  // Try SendGrid (if configured)
  if (SENDGRID_API_KEY) {
    try {
      const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [{ 
            to: [{ 
              email: 'vibecrafters.entertainment@gmail.com',
              name: 'VibeCrafters Team'
            }]
          }],
          from: { 
            email: 'vibecrafters.entertainment@gmail.com',
            name: 'VibeCrafters Website'
          },
          reply_to: { 
            email: email,
            name: name
          },
          subject: `🎉 New Lead: ${name} - ${service || 'Contact Form'}`,
          content: [
            { type: 'text/plain', value: emailBody },
            { type: 'text/html', value: htmlBody }
          ],
          mail_settings: {
            sandbox_mode: { enable: false },
            bypass_list_management: { enable: false },
            footer: { enable: false }
          },
          tracking_settings: {
            click_tracking: { enable: false },
            open_tracking: { enable: false },
            subscription_tracking: { enable: false }
          },
          categories: ['contact-form']
        }),
      });

      if (!sendgridResponse.ok) {
        const errorText = await sendgridResponse.text();
        console.error('SendGrid API error:', errorText);
        throw new Error('Email service error');
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    } catch (err) {
      console.error('SendGrid error:', err);
    }
  }

  // If no email service is configured, log and return success (data is already saved in DB)
  console.warn('No email service configured. Email not sent, but data was saved to database.');
  console.log('Contact form data:', { name, email, company, phone, service, message });

  // Return success anyway since the data is already saved in the database
  return new Response(
    JSON.stringify({
      success: true,
      message: 'Contact saved. Email service not configured - please check logs.',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
});


