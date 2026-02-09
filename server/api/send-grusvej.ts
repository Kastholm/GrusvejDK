import { Resend } from 'resend';

export default defineEventHandler(async (event) => {

  const { email, phone, name, grusvej, text } = await readBody(event);

  console.log('Grusvej form data received:', { email, phone, name, grusvej, text })

  // Check if API key exists
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set in environment variables');
    return { success: false, error: 'Email service is not configured' };
  }

  // Initialize Resend inside the handler
  const resend = new Resend(apiKey);

  try {
    // Send the email via Resend
    const data = await resend.emails.send({
      from: 'Grusvej <onboarding@resend.dev>',
      to: ['kontakt@grusvej.dk'], 
      subject: `Ny grusvejs forespørgsel fra ${name}`,
      html: `
        <p><strong>Ny grusvejs forespørgsel:</strong></p>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${grusvej}</p>
        <p><strong>Besked:</strong></p>
        <p>${text || 'Ingen besked givet'}</p>
      `,
    });

    console.log('Grusvej email sent:', data)

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message || 'Unknown error' };
  }
});
