'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <main className="relative bg-[#111111] text-white min-h-screen px-6 py-20 md:px-20 font-sans overflow-hidden flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-start gap-10 scale-[1.2]">
        {/* Left content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-base text-green-400 mb-2">
            Problem Solver | Engineer | Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
  Hello, I&rsquo;m <span className="text-green-400">Trenzin Gesar</span>

</h1>

          <h2 className="text-green-300 text-2xl mb-4 h-[40px]">
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

          <p className="text-gray-300 mb-6 text-lg">
            A passionate IT Infrastructure Security student focused on automation, cloud, and clean development.
          </p>

          <div className="flex gap-4 mb-6 flex-wrap items-center">
            <a
              href="/TrenzinGesar.pdf"
              target="_blank"
              className="px-6 py-2 rounded border border-green-400 hover:bg-green-400 hover:text-black transition flex items-center gap-2"
            >
              Download Resume <FaDownload />
            </a>
            <a href="https://www.linkedin.com/in/trenzin-gesar-66a433260/" target="_blank" className="text-green-400 hover:text-white text-2xl transition" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/tgesar" target="_blank" className="text-green-400 hover:text-white text-2xl transition" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>

          {/* Work summary */}
          <div className="mt-8 text-green-300 text-lg">
            <p className="text-xl font-semibold">IT Experience</p>
            <span className="text-sm text-gray-400">
              2+ years of IT Infrastructure experience across automation, support, and security — with two technical internships (3M & Virtual Radiologic).
            </span>
          </div>

          {/* Fun Fact */}
          <div className="mt-6">
            <p className="text-md text-gray-400 italic">
              Fun Fact: I built my first PowerApp before I knew what PowerApps even were!
            </p>
          </div>
        </motion.div>

        {/* Right image section */}
        <div className="flex flex-col items-center justify-center md:ml-[120px] gap-4 scale-[1.25]">
          {/* Profile picture */}
          <motion.div
            className="relative w-[312px] h-[312px] md:w-[375px] md:h-[375px] rounded-full overflow-hidden border-4 border-green-400"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/me.jpeg"
              alt="My Profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>

          {/* Tibetan flag below photo */}
          <motion.div
            className="relative w-[100px] h-[100px] md:w-[125px] md:h-[125px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
