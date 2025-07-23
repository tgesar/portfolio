'use client';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#111111] text-white flex items-center justify-center p-10">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-400">Hire Me</h1>
        <p className="text-lg text-gray-300 mb-8">
          Want to get in touch? Send me an email at{' '}
          <a
            href="mailto:gesartrenzin@gmail.com"
            className="text-green-400 underline"
          >
            gesartrenzin@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
