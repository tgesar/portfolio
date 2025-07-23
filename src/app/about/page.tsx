'use client';

import Image from 'next/image';
import { FaUser, FaGraduationCap, FaGamepad, FaGlobe, FaFlag } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen bg-[#111111] text-white px-8 py-20 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-8 text-white">About me</h1>
          <p className="text-gray-400 text-lg mb-10">Who am I?</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-lg">
            <div className="flex items-center gap-3">
              <FaUser className="text-green-400" />
              <span><strong>Name:</strong> Trenzin Gesar</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-green-400" />
              <span><strong>Graduation:</strong> August 2025</span>
            </div>

            <div className="flex items-center gap-3">
              <FaFlag className="text-green-400" />
              <span><strong>Nationality:</strong> Tibetan</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-green-400" />
              <span><strong>Languages:</strong> English, Tibetan</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGamepad className="text-green-400" />
              <span><strong>Hobbies:</strong> Gaming, Traveling, Listening to Music</span>
            </div>

            <div className="sm:col-span-2 text-gray-300 mt-4">
              <p>
                I&rsquo;m a proud Minnesota local, born and raised here. I&rsquo;ve always loved technology and dreamed of working in a professional tech setting. Every day, I&rsquo;m getting closer to that goal. I&rsquo;m currently pursuing a Bachelor&rsquo;s of Applied Science in Information Technology Infrastructure, with a focus on security and automation.
              </p>
              <p className="mt-4">
                With experience in infrastructure support, cloud systems, and process automation, I enjoy building solutions that make people&rsquo;s lives easier. I&rsquo;m passionate about learning, growing, and creating a lasting impact through tech.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="relative w-[280px] h-[280px] md:w-[325px] md:h-[325px] rounded-full overflow-hidden border-4 border-green-400">
          <Image
            src="/me.jpeg"
            alt="Profile photo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
