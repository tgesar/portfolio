import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Ensure we run on Node (not Edge) for Nodemailer
export const runtime = 'nodejs';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  TO_EMAIL = 'gesartrenzin@gmail.com', // where you receive messages
} = process.env;

function required(name: string, val: any) {
  if (!val) throw new Error(`Missing env: ${name}`);
  return val;
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Basic validation (subject is ignored but allowed in payload)
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: required('SMTP_HOST', SMTP_HOST),
      port: Number(required('SMTP_PORT', SMTP_PORT)),
      secure: true, // port 465
      auth: {
        user: required('SMTP_USER', SMTP_USER),
        pass: required('SMTP_PASS', SMTP_PASS),
      },
    });

    // Your requested fixed subject + specific body format
    const finalSubject = 'Portfolio Contact Form';
    const textBody =
`FirstName: ${firstName}
lastName: ${lastName}
email: ${email}

Message
${message}`;

    // Send the email FROM yourself, TO yourself.
    await transporter.sendMail({
      from: SMTP_USER,     // comes from your address
      to: TO_EMAIL,        // goes to your inbox
      subject: finalSubject,
      text: textBody,
      // Helpful so you can reply straight to the visitor:
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
