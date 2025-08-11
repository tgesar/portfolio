'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Neon backdrop + subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0b0f]/80 backdrop-blur-md" />
        <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_10%_-20%,#8e84ff_0,transparent_40%),radial-gradient(circle_at_90%_140%,#00e5ff_0,transparent_40%)]" />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="relative inline-flex items-center gap-2 text-lg font-semibold tracking-wide"
          aria-label="Trenzin Gesar — Home"
        >
          <span className="relative bg-gradient-to-r from-[#00e5ff] via-[#66f] to-[#8e84ff] bg-clip-text text-transparent">
            Trenzin<span className="opacity-70">.</span>
          </span>
          <span className="pointer-events-none absolute -inset-x-2 -bottom-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-sm text-zinc-300 transition hover:text-white"
            >
              <span className="relative">{l.label}</span>
              {isActive(l.href) && (
                <motion.span
                  layoutId="active-pill"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-md border border-white/10 bg-white/5"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
            </Link>
          ))}

          <div className="mx-2 h-5 w-px bg-white/10" />

          <a
            href="https://github.com/tgesar"
            target="_blank"
            aria-label="GitHub"
            className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:scale-105 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/trenzin-gesar-66a433260/"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:scale-105 hover:text-white"
          >
            <FaLinkedin />
          </a>

          <Link
            href="/contact"
            className="group relative ml-3 inline-flex items-center overflow-hidden rounded-md border border-[#00e5ff]/60 px-4 py-2 text-sm text-white transition hover:text-black"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            <span className="relative">Hire me</span>
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE } }}
            className="mx-auto block w-full max-w-7xl px-5 pb-5 md:hidden"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_30px_-12px_#00e5ff,0_0_60px_-30px_#8e84ff_inset]" />

              <div className="grid">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative px-4 py-3 text-sm transition ${
                      isActive(l.href) ? 'text-white' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {l.label}
                    {isActive(l.href) && (
                      <span className="pointer-events-none absolute inset-0 -z-10 bg-white/5" />
                    )}
                  </Link>
                ))}
              </div>

              <div className="mt-1 grid grid-cols-3 gap-1 p-2">
                <a
                  href="https://github.com/tgesar"
                  target="_blank"
                  className="rounded-md border border-white/10 px-4 py-2 text-center text-sm text-zinc-300 transition hover:text-white"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <FaGithub /> GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/trenzin-gesar-66a433260/"
                  target="_blank"
                  className="rounded-md border border-white/10 px-4 py-2 text-center text-sm text-zinc-300 transition hover:text-white"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <FaLinkedin /> LinkedIn
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="rounded-md border border-[#00e5ff]/60 px-4 py-2 text-center text-sm text-white transition hover:bg-[#00e5ff] hover:text-black"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thin neon line under navbar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </header>
  );
}
