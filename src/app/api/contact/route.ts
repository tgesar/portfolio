import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Ensure we run on Node (not Edge) for Nodemailer
export const runtime = 'nodejs';

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const getEnv = (name: string): string => {
  const val = process.env[name];
  if (!val) throw new Error(`Missing env: ${name}`);
  return val;
};

export async function POST(req: Request) {
  try {
    // Remove `subject` since we don't use it (avoids no-unused-vars)
    const { firstName, lastName, email, message } =
      (await req.json()) as Partial<ContactPayload>;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: getEnv('SMTP_HOST'),
      port: Number(getEnv('SMTP_PORT')),
      secure: true, // port 465
      auth: {
        user: getEnv('SMTP_USER'),
        pass: getEnv('SMTP_PASS'),
      },
    });

    const finalSubject = 'Portfolio Contact Form';
    const textBody = `FirstName: ${firstName}
lastName: ${lastName}
email: ${email}

Message
${message}`;

    await transporter.sendMail({
      from: getEnv('SMTP_USER'), // from yourself
      to: process.env.TO_EMAIL ?? 'gesartrenzin@gmail.com',
      subject: finalSubject,
      text: textBody,
      replyTo: email, // so you can reply directly to the visitor
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to send message.';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
