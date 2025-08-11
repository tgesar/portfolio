'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowLeft,
} from 'react-icons/fa';

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send message.');
      }

      setStatus('success');
      setMessage('Thanks — your message is on its way. I’ll get back to you soon!');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      {/* Neon background + soft grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_16%_8%,#8e84ff_0,transparent_40%),radial-gradient(circle_at_84%_90%,#00e5ff_0,transparent_35%)]" />
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%)] bg-[length:48px_48px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#8e84ff] opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#00e5ff] opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-20 md:px-12 lg:px-20">
        <div className="w-full max-w-3xl">
          <motion.div
            {...fadeIn(0.05)}
            className="mb-8 flex items-center gap-3 text-sm text-zinc-400"
          >
            <Link href="/" className="inline-flex items-center gap-2 hover:text-white">
              <FaArrowLeft /> Back home
            </Link>
          </motion.div>

          <motion.header {...fadeIn(0.1)} className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#00e5ff]">Contact</p>
            <h1 className="mt-2 text-4xl font-bold leading-[1.1] md:text-5xl">
              Let’s build something{' '}
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#8e84ff] bg-clip-text text-transparent">
                great
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Fill this out and I’ll get back within 1–2 business days. For direct email, you can
              also reach me at <span className="text-[#7ee7ff]">gesartrenzin@gmail.com</span>.
            </p>
          </motion.header>

          <motion.form
            {...fadeIn(0.15)}
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />

            {/* Name row */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="First Name" name="firstName" placeholder="Jane" required />
              <Field label="Last Name" name="lastName" placeholder="Doe" required />
            </div>

            {/* Email */}
            <div className="mt-4">
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Subject */}
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="Project inquiry" required />
            </div>

            {/* Message */}
            <div className="mt-4">
              <Field
                label="Message"
                name="message"
                as="textarea"
                placeholder="Tell me a bit about your goals, timeline, and budget…"
                rows={6}
                required
              />
            </div>

            {/* Status */}
            {status !== 'idle' && (
              <div className="mt-4">
                {status === 'loading' && (
                  <p className="text-sm text-zinc-400">Sending…</p>
                )}
                {status === 'success' && (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
                    <FaCheckCircle /> {message}
                  </p>
                )}
                {status === 'error' && (
                  <p className="inline-flex items-center gap-2 text-sm text-rose-300">
                    <FaExclamationTriangle /> {message}
                  </p>
                )}
              </div>
            )}

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center gap-2 rounded-md border border-[#00e5ff]/60 px-5 py-2 text-sm transition hover:bg-[#00e5ff] hover:text-black disabled:opacity-60"
              >
                <span className="relative">Send Message</span>
                <FaPaperPlane className="transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.form>

          {/* Extra: direct email */}
          <motion.p {...fadeIn(0.2)} className="mt-6 text-center text-xs text-zinc-400">
            Prefer email?{' '}
            <a href="mailto:gesartrenzin@gmail.com" className="text-[#7ee7ff] underline">
              gesartrenzin@gmail.com
            </a>
          </motion.p>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  as,
  type = 'text',
  placeholder,
  rows,
  required,
}: {
  label: string;
  name: string;
  as?: 'textarea';
  type?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  const InputTag: any = as === 'textarea' ? 'textarea' : 'input';
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
        {label} {required && <span className="text-[#7ee7ff]">*</span>}
      </span>
      <InputTag
        name={name}
        type={as ? undefined : type}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none backdrop-blur transition focus:border-[#00e5ff]/60"
      />
    </label>
  );
}
