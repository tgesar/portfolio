'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main className="relative bg-[#111111] text-white min-h-screen font-sans overflow-hidden flex items-center justify-center px-6 md:px-20 py-20">
      {/* Background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: '#111111' } },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            color: { value: '#00ff88' },
            links: {
              enable: true,
              distance: 150,
              color: '#00ff88',
              opacity: 0.2,
              width: 1,
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left content */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-base md:text-lg text-green-400 mb-3">
            Problem Solver | Engineer | Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hello, I'm <span className="text-green-400">Trenzin Gesar</span>
          </h1>

          <h2 className="text-green-300 text-2xl md:text-3xl mb-4 h-[40px]">
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

          <p className="text-gray-300 text-lg md:text-xl mb-6">
            A passionate IT Infrastructure Security student focused on automation, cloud, and clean development.
          </p>

          <div className="flex gap-4 mb-6 flex-wrap items-center justify-center md:justify-start">
            <a
              href="/TrenzinGesar.pdf"
              target="_blank"
              className="px-6 py-3 rounded border border-green-400 hover:bg-green-400 hover:text-black transition flex items-center gap-2 text-lg md:text-xl"
            >
              Download Resume
              <HiDownload className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/trenzin-gesar-66a433260/"
              target="_blank"
              className="text-green-400 hover:text-white text-3xl transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tgesar"
              target="_blank"
              className="text-green-400 hover:text-white text-3xl transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Work summary */}
          <div className="mt-8 text-green-300">
            <p className="text-2xl font-semibold">IT Experience</p>
            <span className="text-base md:text-lg text-gray-400">
              2+ years of IT Infrastructure experience across automation, support, and security — with two technical internships (3M & Virtual Radiologic).
            </span>
          </div>

          {/* Fun Fact */}
          <div className="mt-6">
            <p className="text-lg text-gray-400 italic">
              Fun Fact: I built my first PowerApp before I knew what PowerApps even were!
            </p>
          </div>
        </motion.div>

        {/* Right image section */}
        <div className="flex flex-col items-center justify-center gap-4 scale-[1.25]">
          {/* Profile picture with float */}
          <motion.div
            className="relative w-[312px] h-[312px] md:w-[375px] md:h-[375px] rounded-full overflow-hidden border-4 border-green-400"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/me.jpeg"
              alt="My Profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>

          {/* Tibetan flag with float */}
          <motion.div
            className="relative w-[100px] h-[100px] md:w-[125px] md:h-[125px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Image
              src="/flag.png"
              alt="Tibetan Flag"
              layout="fill"
              objectFit="contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
