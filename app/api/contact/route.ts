import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { INTEGRATIONS } from '@/config/integrations';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log('API key present:', !!process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { fullName, email, organisation, enquiryType, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification email to Glory
    const result = await resend.emails.send({
      from: 'Gloteem Consulting <onboarding@resend.dev>',
      to: INTEGRATIONS.email.contact,
      replyTo: email,
      subject: `New Enquiry: ${enquiryType} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="background: #1B2A4A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #C9A84C; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 14px;">Gloteem Consulting Website</p>
          </div>
          <div style="background: #F7F5F0; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e0ddd6;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px; font-size: 14px;">Name</td><td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${fullName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #E07B39;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Organisation</td><td style="padding: 8px 0; font-size: 14px;">${organisation || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Enquiry Type</td><td style="padding: 8px 0; font-size: 14px;">${enquiryType}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-left: 4px solid #C9A84C; border-radius: 0 6px 6px 0;">
              <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log('Notification email result:', JSON.stringify(result));

    // Send auto-reply to sender
    await resend.emails.send({
      from: 'Gloteem Consulting <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for reaching out — Gloteem Consulting',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="background: #1B2A4A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #C9A84C; margin: 0; font-size: 20px;">Thank you, ${fullName}</h2>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 14px;">Gloteem Consulting</p>
          </div>
          <div style="background: #F7F5F0; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e0ddd6;">
            <p style="font-size: 15px; line-height: 1.7;">We've received your message and will be in touch within 2 business days.</p>
            <p style="font-size: 15px; line-height: 1.7;">In the meantime, you can book a consultation directly:</p>
            <a href="${INTEGRATIONS.calendly.url}" style="display: inline-block; background: #E07B39; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-top: 8px;">Book a Consultation</a>
            <p style="margin-top: 32px; font-size: 13px; color: #888;">Best regards,<br><strong style="color: #1B2A4A;">Glory Adebanjo-Taiwo</strong><br>Gloteem Consulting</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Your message has been received.' }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
