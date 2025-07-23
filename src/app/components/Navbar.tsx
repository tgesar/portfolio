'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#111111] text-white border-b border-[#2e2c33]">
      <Link href="/" className="font-bold text-xl hover:underline">Trenzin.</Link>

      <div className="flex gap-6 text-sm text-white items-center">
        <Link href="/" className="hover:text-green-400">Home</Link>
        <Link href="/resume" className="hover:text-green-400">Resume</Link>
        <Link href="/about" className="hover:text-green-400">About</Link>
        <Link
          href="/contact"
          className="bg-green-500 text-black px-4 py-2 rounded-full font-medium hover:bg-green-600"
        >
          Hire me
        </Link>
      </div>
    </nav>
  );
}
