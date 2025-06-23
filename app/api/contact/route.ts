import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Contact API received:', body);
    const { firstName, lastName, email, phone, boatInfo, service, message } = body;
    let transporter;
    if (process.env.SMTP_HOST) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
      });
    } else {
      // fallback to Ethereal for local dev
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
    }
    const info = await transporter.sendMail({
      from: email,
      to: 'sanjadsamin2001@gmail.com',
      subject: `New contact form submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nBoat Info: ${boatInfo}\nService: ${service}\nMessage: ${message}`,
    });
    // provide preview URL when using Ethereal
    const previewUrl = nodemailer.getTestMessageUrl?.(info) || undefined;
    return new Response(JSON.stringify({ success: true, previewUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
