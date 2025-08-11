'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaGlobe,
  FaGamepad,
  FaFlag,
} from 'react-icons/fa';

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  },
});

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      {/* Background: neon grid + soft glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_12%_8%,#8e84ff_0,transparent_40%),radial-gradient(circle_at_88%_90%,#00e5ff_0,transparent_35%)]" />
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%)] bg-[length:48px_48px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#8e84ff] opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#00e5ff] opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* HERO */}
        <section className="relative flex flex-col items-center gap-10 py-20 md:flex-row md:items-start md:gap-14">
          {/* Text */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }}
          >
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#00e5ff]">About me</p>
            <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl">
              Building useful systems with{' '}
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#8e84ff] bg-clip-text text-transparent">
                data, automation, and clean UX
              </span>
            </h1>

            <p className="mt-5 text-lg text-zinc-300">
              I’m Trenzin Gesar—an IT infrastructure + automation engineer who loves turning messy
              workflows into simple, reliable tools. Comfortable across SQL and the Power Platform,
              I care about clarity, speed, and user experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['SQL-first mindset', 'Power Automate & Power Apps', 'Next.js UX', 'Azure & ops awareness'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/TrenzinGesar.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-[#00e5ff]/50 px-4 py-2 text-sm hover:bg-[#00e5ff] hover:text-black"
              >
                <FaDownload /> Resume PDF
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#8e84ff]/50 px-4 py-2 text-sm hover:bg-[#8e84ff] hover:text-black"
              >
                Let’s talk <FaExternalLinkAlt />
              </Link>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="relative mx-auto md:mx-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }}
          >
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px]">
              <div className="absolute inset-0 -z-10 rounded-[28px] shadow-[0_0_80px_-10px_#00e5ff,0_0_40px_-10px_#8e84ff_inset]" />
              <Image
                src="/me.jpeg"
                alt="Trenzin Gesar portrait"
                fill
                sizes="(min-width:1024px) 420px, (min-width:640px) 360px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {/* Free Tibet badge */}
            <div className="mx-auto mt-3 flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              <div className="relative h-4 w-6">
                <Image src="/flag.png" alt="Tibetan flag" fill className="object-contain" />
              </div>
              <span>Free Tibet</span>
            </div>
          </motion.div>
        </section>

        {/* STORY + SNAPSHOT */}
        <section className="grid grid-cols-1 gap-8 py-6 md:grid-cols-5">
          {/* Story */}
          <motion.div
            {...fadeIn(0.05)}
            className="relative order-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:order-1 md:col-span-3"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />
            <h2 className="text-xl font-semibold">A quick snapshot</h2>
            <p className="mt-3 text-sm text-zinc-300">
              Minnesota-born and raised. I’m finishing a BASc in IT Infrastructure (Security) and
              specialize in automation and practical data work. Whether it’s a Power App that saves
              a team hours a week or a SQL view that finally makes a dashboard trustworthy, I like
              shipping useful things—fast, with solid UX.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Fact icon={<FaGraduationCap />} label="Graduation" value="August 2025" />
              <Fact icon={<FaGlobe />} label="Languages" value="English, Tibetan" />
              <Fact icon={<FaGamepad />} label="Hobbies" value="Gaming, travel, music" />
              <Fact icon={<FaFlag />} label="Heritage" value="Tibetan" />
            </div>
          </motion.div>

          {/* Quick info chips */}
          <motion.div
            {...fadeIn(0.1)}
            className="relative order-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:order-2 md:col-span-2"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />
            <h3 className="text-sm font-semibold">What I value</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Clear UX over cleverness</li>
              <li>• Automate boring things</li>
              <li>• Logs you can trust</li>
              <li>• Fast feedback loops</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold">Recent focus</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['SQL', 'Power Automate', 'Power Apps', 'Python', 'Next.js', 'Azure'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/TrenzinGesar.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-[#00e5ff]/50 px-3 py-2 text-xs hover:bg-[#00e5ff] hover:text-black"
              >
                <FaDownload /> Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#8e84ff]/50 px-3 py-2 text-xs hover:bg-[#8e84ff] hover:text-black"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </section>

        {/* MINI TIMELINE */}
        <section className="py-10">
          <motion.h2
            {...fadeIn(0.05)}
            className="mb-6 text-2xl font-semibold tracking-tight"
          >
            Journey so far
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#00e5ff] to-transparent md:left-1/2" />

            <div className="space-y-8">
              <TimelineItem
                side="left"
                title="Automation Engineer Intern — 3M"
                date="May 2025 – Present"
                points={[
                  'PowerApps LDIF Viewer for 240k+ SQL rows (fast filters, zero manual queries).',
                  'Power Automate routing + Teams notifications to speed up assignments.',
                ]}
              />
              <TimelineItem
                side="right"
                title="Infrastructure Cloud Engineer — University of Minnesota"
                date="Aug 2024 – Apr 2025"
                points={[
                  'Azure + Splunk monitoring pipelines; clearer incident signal.',
                  'PowerShell automation for VM diagnostics & audits.',
                ]}
              />
              <TimelineItem
                side="left"
                title="IT PM Intern — Virtual Radiologic"
                date="May 2024 – Aug 2024"
                points={[
                  '148-station refresh; AD + GPO, ServiceNow ops.',
                ]}
              />
              <TimelineItem
                side="right"
                title="BASc — IT Infrastructure (Security)"
                date="Sept 2021 – Aug 2025"
                points={['University of Minnesota • Dean’s List • CoPilot Student Ambassador']}
              />
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="pb-20">
          <motion.div
            {...fadeIn(0.05)}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />
            <h3 className="text-lg font-semibold">Open to opportunities & collabs</h3>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-zinc-300">
              If you need someone who can bridge infrastructure, automation, and UI craft — let’s chat.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/TrenzinGesar.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-[#00e5ff]/50 px-4 py-2 text-sm hover:bg-[#00e5ff] hover:text-black"
              >
                <FaDownload /> Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#8e84ff]/50 px-4 py-2 text-sm hover:bg-[#8e84ff] hover:text-black"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

/* ---------- Small components ---------- */

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/5 text-[#7ee7ff]">
        {icon}
      </div>
      <div className="text-sm">
        <p className="text-zinc-400">{label}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

function TimelineItem({
  side,
  title,
  date,
  points,
}: {
  side: 'left' | 'right';
  title: string;
  date: string;
  points: string[];
}) {
  const align =
    side === 'left'
      ? 'md:pr-12 md:text-right md:mr-[52%]'
      : 'md:pl-12 md:text-left md:ml-[52%]';

  return (
    <motion.div
      {...fadeIn(side === 'left' ? 0.05 : 0.1)}
      className={`relative ${align}`}
    >
      {/* Dot */}
      <span
        className={`absolute left-2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#00e5ff] shadow-[0_0_18px_#00e5ff] md:left-1/2`}
      />
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <p className="text-xs font-mono tracking-wide text-[#7ee7ff]">{date}</p>
        <h4 className="mt-1 text-base font-semibold">{title}</h4>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-300">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
