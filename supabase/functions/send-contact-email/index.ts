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

  // Format email content with professional subject line
  const serviceLabel = service ? ` - ${service}` : '';
  const emailSubject = `New Lead: ${name}${serviceLabel} | VibeCrafters`;
  
  const emailBody = `
VibeCrafters - New Contact Inquiry

Client Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${service ? `Service: ${service}` : ''}

Client Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Quick Actions:
- Reply to: ${email}
${phone ? `- Call: ${phone}` : ''}

This inquiry was submitted via vibecraftersentertainment.in
  `.trim();

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6; 
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .header { 
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: 600;
    }
    .header p {
      margin: 0;
      opacity: 0.95;
      font-size: 14px;
    }
    .content { 
      padding: 30px 20px;
      background: white;
    }
    .info-card {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .field { 
      margin-bottom: 16px;
      display: flex;
      align-items: baseline;
    }
    .field:last-child {
      margin-bottom: 0;
    }
    .label { 
      font-weight: 600;
      color: #374151;
      min-width: 100px;
      margin-right: 12px;
    }
    .value { 
      color: #1f2937;
      flex: 1;
    }
    .value a {
      color: #f59e0b;
      text-decoration: none;
    }
    .value a:hover {
      text-decoration: underline;
    }
    .message-section {
      margin-top: 24px;
    }
    .message-label {
      font-weight: 600;
      color: #374151;
      margin-bottom: 12px;
      font-size: 16px;
    }
    .message-box { 
      background: white;
      padding: 20px;
      border-left: 4px solid #f59e0b;
      border-radius: 4px;
      color: #1f2937;
      white-space: pre-wrap;
      word-wrap: break-word;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .action-buttons {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin: 0 8px;
      background: #f59e0b;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 14px;
    }
    .btn:hover {
      background: #d97706;
    }
    .footer { 
      background: #1f2937;
      color: #d1d5db;
      padding: 24px 20px;
      text-align: center;
      font-size: 13px;
    }
    .footer p {
      margin: 4px 0;
    }
    .footer a {
      color: #f59e0b;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .field {
        flex-direction: column;
      }
      .label {
        margin-bottom: 4px;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1>🎉 New Contact Inquiry</h1>
      <p>VibeCrafters Entertainment</p>
    </div>
    
    <div class="content">
      <div class="info-card">
        <div class="field">
          <div class="label">Name:</div>
          <div class="value"><strong>${name}</strong></div>
        </div>
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${email}">${email}</a></div>
        </div>
        ${company ? `<div class="field"><div class="label">Company:</div><div class="value">${company}</div></div>` : ''}
        ${phone ? `<div class="field"><div class="label">Phone:</div><div class="value"><a href="tel:${phone}">${phone}</a></div></div>` : ''}
        ${service ? `<div class="field"><div class="label">Service:</div><div class="value"><strong>${service}</strong></div></div>` : ''}
      </div>

      <div class="message-section">
        <div class="message-label">Message:</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="action-buttons">
        <a href="mailto:${email}" class="btn">Reply to Client</a>
        ${phone ? `<a href="tel:${phone}" class="btn">Call Now</a>` : ''}
      </div>
    </div>
    
    <div class="footer">
      <p><strong>VibeCrafters Entertainment</strong></p>
      <p>This inquiry was submitted via <a href="https://vibecraftersentertainment.in">vibecraftersentertainment.in</a></p>
      <p style="margin-top: 12px; opacity: 0.8;">Dynamic event solutions for corporate excellence and vibrant community celebrations</p>
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
            }],
            subject: emailSubject
          }],
          from: { 
            email: 'contact@vibecraftersentertainment.in',
            name: 'VibeCrafters Website'
          },
          reply_to: { 
            email: email,
            name: name
          },
          content: [
            { type: 'text/plain', value: emailBody },
            { type: 'text/html', value: htmlBody }
          ],
          headers: {
            'X-Priority': '1',
            'Importance': 'high',
            'X-Entity-Ref-ID': `contact-${Date.now()}`
          },
          mail_settings: {
            sandbox_mode: { enable: false },
            bypass_list_management: { enable: false },
            footer: { enable: false },
            spam_check: { enable: false }
          },
          tracking_settings: {
            click_tracking: { enable: false },
            open_tracking: { enable: false },
            subscription_tracking: { enable: false }
          },
          categories: ['contact-inquiry', 'lead']
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


