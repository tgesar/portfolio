'use client';

import { FaEnvelope } from 'react-icons/fa';

export default function HireMe() {
  return (
    <main className="min-h-screen bg-[#111111] text-white px-6 py-20 font-sans flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-green-400 mb-6">Let’s Work Together</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        Whether you have a full-time role, internship opportunity, freelance project, or just want to collaborate — feel free to reach out. I'm always open to meaningful tech-driven work!
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=gesartrenzin@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-500 text-black px-6 py-3 rounded hover:bg-green-400 transition"
      >
        <FaEnvelope className="text-xl" />
        Email Me
      </a>
    </main>
  );
}
