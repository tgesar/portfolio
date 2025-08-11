'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaExternalLinkAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

// Use a cubic-bezier instead of the string 'easeOut' to satisfy TS in Framer Motion v10+
const EASE = [0.22, 1, 0.36, 1] as const; // easeOut-ish

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  },
});

const work = [
  {
    title: 'Tundra Webworks — Professional Brand',
    desc:
      'Freelance studio delivering modern, fast, and conversion-focused websites with clean UX, booking flows, and SEO best practices.',
    tags: ['Next.js', 'Tailwind', 'Vercel', 'SEO'],
    link: 'https://tundra-webworks.vercel.app/',
    repo: 'https://github.com/tgesar/tundra-webworks',
  },
  {
    title: 'Golden Nails — Website',
    desc:
      'Lux, mobile-first salon site with improved branding, streamlined booking UX, and responsive, accessible UI.',
    tags: ['Next.js', 'Tailwind', 'Calendar UX', 'Branding'],
    link: 'https://golden-nails-site.vercel.app/',
    repo: 'https://github.com/tgesar/golden-nails-site',
  },
  {
    title: 'Twitch Churn Predictor',
    desc:
      'Pro-level Streamlit dashboard using real metrics for top streamers: paginated table, filters, and simple churn logic to demo insights.',
    tags: ['Python', 'Streamlit', 'Data Viz', 'ML Concepts'],
    link: '',
    repo: 'https://github.com/tgesar/twitch-churn-predictor',
  },
];

// reordered to emphasize your day-to-day strengths first
const stack = [
  'SQL',
  'Power Apps',
  'Power Automate',
  'Next.js',
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'Python',
  'Azure',
  'VMware',
  'ServiceNow',
  'Active Directory',
  'Framer Motion',
  'Git',
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      {/* Background: neon grid + glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_50%_0%,#8e84ff_0,transparent_40%),radial-gradient(circle_at_80%_80%,#00e5ff_0,transparent_35%)]" />
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%)] bg-[length:48px_48px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#8e84ff] opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#00e5ff] opacity-30 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:px-12 lg:px-20">
        {/* Left content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#00e5ff]">
            Problem Solver | Engineer | Developer
          </p>

          <h1 className="mb-3 text-5xl font-bold leading-[1.05] md:text-7xl">
            Hello, I’m{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#66f] to-[#8e84ff] bg-clip-text text-transparent">
              Trenzin Gesar
            </span>
          </h1>

          <h2 className="mb-5 h-[40px] text-2xl text-[#7ee7ff]">
            <Typewriter
              words={['Automation Engineer.', 'Cloud Enthusiast.', 'IT Problem Solver.']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>

          <p className="mb-7 text-lg text-zinc-300">
            A passionate IT Infrastructure Security student focused on automation, cloud, and clean development.
          </p>

          {/* CTAs */}
          <div className="mb-7 flex flex-wrap items-center gap-4">
            <a
              href="/TrenzinGesar.pdf"
              target="_blank"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-[#00e5ff]/60 px-6 py-2 text-white transition"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative">Download Resume</span>
              <FaDownload className="relative" aria-hidden />
            </a>

            <a
              href="https://www.linkedin.com/in/trenzin-gesar-66a433260/"
              target="_blank"
              className="rounded-md border border-white/10 p-2 text-2xl text-[#00e5ff] transition hover:scale-105 hover:border-[#00e5ff]/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tgesar"
              target="_blank"
              className="rounded-md border border-white/10 p-2 text-2xl text-[#8e84ff] transition hover:scale-105 hover:border-[#8e84ff]/40 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Highlight card */}
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_40px_-15px_#00e5ff,0_0_70px_-30px_#8e84ff_inset]" />
            <p className="text-lg font-semibold text-[#9ae8ff]">IT Experience</p>
            <p className="mt-1 text-sm text-zinc-400">
              2+ years across automation, support, and security — with two technical internships (3M & Virtual Radiologic).
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              Fun Fact: I built my first PowerApp before I knew what PowerApps even were!
            </p>
          </div>
        </motion.div>

        {/* Right: large portrait with subtle caption */}
        <motion.div
          className="relative flex flex-col items-center justify-center gap-3 md:ml-12"
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="relative">
            <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px] lg:h-[520px] lg:w-[520px]">
              <div className="absolute inset-0 -z-10 rounded-full shadow-[0_0_80px_-10px_#00e5ff,0_0_40px_-10px_#8e84ff_inset]" />
              <Image
                src="/me.jpeg"
                alt="Portrait of Trenzin Gesar"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 520px, (min-width:768px) 460px, 380px"
                priority
              />
            </div>
          </div>

          {/* Minimal, non-distracting caption */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <div className="relative h-4 w-6">
              <Image src="/flag.png" alt="Tibetan flag" fill className="object-contain" />
            </div>
            <span>Free Tibet</span>
          </div>
        </motion.div>
      </section>

      {/* CREDIBILITY STRIP */}
      <motion.section {...fadeIn(0.1)} className="mx-auto max-w-7xl px-6 pb-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 md:gap-4 md:text-sm">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            Built with Next.js & Tailwind
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            Deployed on Vercel
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            UX-first • Performance-focused
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            Accessibility-minded
          </span>
        </div>
      </motion.section>

      {/* FEATURED WORK */}
      <motion.section {...fadeIn(0.2)} className="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:px-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            <span className="bg-gradient-to-r from-[#00e5ff] to-[#8e84ff] bg-clip-text text-transparent">
              Featured Work
            </span>
          </h3>
          <a
            href="https://github.com/tgesar"
            target="_blank"
            className="group inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
          >
            View all on GitHub
            <FaArrowRight className="transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset] opacity-80" />
              <h4 className="text-lg font-semibold">{w.title}</h4>
              <p className="mt-2 text-sm text-zinc-400">{w.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {w.link && (
                  <a
                    href={w.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-[#7ee7ff] hover:text-white"
                  >
                    Visit <FaExternalLinkAlt />
                  </a>
                )}
                {w.repo && (
                  <a
                    href={w.repo}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-[#c5b8ff] hover:text-white"
                  >
                    Repo <FaGithub />
                  </a>
                )}
              </div>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00e5ff]/10 blur-2xl transition duration-500 group-hover:translate-x-6 group-hover:translate-y-4" />
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section {...fadeIn(0.25)} className="mx-auto max-w-7xl px-6 pb-6 md:px-12 lg:px-20">
        <h3 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
          <span className="bg-gradient-to-r from-[#00e5ff] to-[#8e84ff] bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((s) => (
            <div
              key={s}
              className="group relative rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-zinc-300 backdrop-blur hover:text-white"
              title={s}
            >
              {s}
              <span className="pointer-events-none absolute inset-0 rounded-lg shadow-[0_0_28px_-12px_#00e5ff] opacity-60" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* STATS + CONTACT */}
      <motion.section {...fadeIn(0.3)} className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Stats */}
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />
            <h4 className="text-lg font-semibold">Quick Stats</h4>
            <div className="mt-4 grid grid-cols-2 gap-4 text-zinc-300">
              <div>
                <p className="text-3xl font-bold text-white">2+</p>
                <p className="text-sm">Years in IT</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="text-sm">Highlighted Works</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white"><span className="align-top text-base">∞</span></p>
                <p className="text-sm">Bugs squashed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm">Client-first UX</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />
            <h4 className="text-lg font-semibold">Let’s build something great</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Open to positions, freelance work, and collabs. I focus on clean UX, solid infra, and real business value.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Redirect to your contact page */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#00e5ff]/50 px-4 py-2 text-sm text-white transition hover:bg-[#00e5ff] hover:text-black"
              >
                <FaEnvelope /> Email Me
              </Link>
              <a
                href="tel:+1-612-254-4518"
                className="inline-flex items-center gap-2 rounded-md border border-[#8e84ff]/50 px-4 py-2 text-sm text-white transition hover:bg-[#8e84ff] hover:text-black"
              >
                <FaPhone /> Call
              </a>
              <a
                href="https://github.com/tgesar"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:text-white"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
