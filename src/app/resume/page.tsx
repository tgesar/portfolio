'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

type TabKey = 'experience' | 'education' | 'skills';

interface CardProps {
  logo: string;
  alt: string;
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

interface EducationCardProps {
  logo: string;
  alt: string;
  name: string;
  title: string;
  details: (string | ReactNode)[];
}

const tabs: { key: TabKey; label: string }[] = [
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
];

// Framer Motion v10+ TS-safe easing (easeOut-like)
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  },
});

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<TabKey>('experience');

  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white overflow-hidden">
      {/* Neon background + subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_15%_10%,#8e84ff_0,transparent_40%),radial-gradient(circle_at_85%_85%,#00e5ff_0,transparent_35%)]" />
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.035)_25%,rgba(255,255,255,.035)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.035)_75%,rgba(255,255,255,.035)_76%,transparent_77%)] bg-[length:48px_48px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#8e84ff] opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#00e5ff] opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="sticky top-0 z-10 w-full md:w-1/4 lg:w-1/5 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 backdrop-blur px-5 py-6">
          <motion.div {...fadeIn(0.05)} className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-[#00e5ff] to-[#8e84ff] bg-clip-text text-transparent">
                  Resume
                </span>
              </h1>
              <a
                href="/TrenzinGesar.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-[#00e5ff]/50 px-3 py-2 text-xs hover:bg-[#00e5ff] hover:text-black"
              >
                <FaDownload /> PDF
              </a>
            </div>

            <nav className="grid gap-2">
              {tabs.map((t) => {
                const active = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`relative w-full rounded-md px-4 py-3 text-left text-sm font-mono tracking-wide transition ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    {t.label}
                    {active && (
                      <span className="pointer-events-none absolute inset-0 rounded-md shadow-[0_0_30px_-10px_#00e5ff,0_0_50px_-25px_#8e84ff_inset]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-zinc-300">
              <p className="font-semibold text-white">Focus</p>
              <p className="mt-1">
                Practical data work with <span className="text-[#7ee7ff]">SQL</span>, automation with{' '}
                <span className="text-[#7ee7ff]">Power Automate</span> &{' '}
                <span className="text-[#7ee7ff]">Power Apps</span>, and clean, reliable UI/UX.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['SQL', 'Power Automate', 'Power Apps', 'Python', 'Next.js', 'Azure'].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-[#8e84ff]/50 px-3 py-2 text-xs hover:bg-[#8e84ff] hover:text-black"
                >
                  Work with me <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-6 py-10 md:px-10">
          <motion.h2 {...fadeIn(0.08)} className="text-3xl font-bold tracking-tight">
            {activeTab === 'experience' && 'Experience — Data • SQL • Automation'}
            {activeTab === 'education' && 'Education — Foundations & Certificates'}
            {activeTab === 'skills' && 'Skills — Tools I Ship With'}
          </motion.h2>
          <motion.p {...fadeIn(0.12)} className="mt-2 text-sm text-zinc-400">
            {activeTab === 'experience' && 'Recent roles where I delivered measurable impact.'}
            {activeTab === 'education' && 'Degrees & programs that shaped my approach.'}
            {activeTab === 'skills' && 'The stack I use to build reliable, user-focused solutions.'}
          </motion.p>

          {/* EXPERIENCE */}
          {activeTab === 'experience' && (
            <motion.div {...fadeIn(0.15)} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card
                logo="/3m.png"
                alt="3M Logo"
                date="May 2025 – Present"
                title="Automation Engineer Intern"
                company="3M"
                bullets={[
                  'Developed PowerApps LDIF Table Viewer to search and filter over 240,000+ SQL rows interactively.',
                  'Improved workflow for Cognizant end users by replacing manual SQL queries with UI-based navigation.',
                  'Created automated task assignment notifications using Power Automate + Microsoft Teams.',
                ]}
              />
              <Card
                logo="/umn.png"
                alt="UMN Logo"
                date="August 2024 – April 2025"
                title="Infrastructure Cloud Engineer"
                company="University of Minnesota"
                bullets={[
                  'Monitored and maintained Azure-hosted infrastructure using Splunk, VMware, and vCenter.',
                  'Repaired VM hosts with PowerShell scripts (e.g., removing recovery partitions) to stabilize services.',
                  'Implemented CI/CD with Azure DevOps for cloud services; streamlined ServiceNow runbook requests.',
                ]}
              />
              <Card
                logo="/vrad.jpg"
                alt="vRad Logo"
                date="May 2024 – August 2024"
                title="IT Project Management Intern"
                company="Virtual Radiologic"
                bullets={[
                  'Completed hardware refresh for 148 radiologist stations including imaging and deployment.',
                  'Applied Group Policies and ensured AD domain connectivity; coordinated logistics with CDW.',
                  'Managed IT service requests and support using ServiceNow across distributed teams.',
                ]}
              />
              <Card
                logo="/fairview.png"
                alt="Fairview Logo"
                date="Aug 2022 – May 2023"
                title="Technical Support Product Specialist"
                company="Fairview Health Services"
                bullets={[
                  'Used PeopleSoft to manage inventory, par values, and equipment tracking across hospital units.',
                  'Improved route delivery efficiency by 21% through analysis and process refinement.',
                  'Maintained documentation for $50,000+ VACS medical equipment; ensured accurate, real-time tracking.',
                ]}
              />
            </motion.div>
          )}

          {/* EDUCATION */}
          {activeTab === 'education' && (
            <motion.div {...fadeIn(0.15)} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <EducationCard
                logo="/umn.png"
                alt="UMN Logo"
                name="University of Minnesota"
                title="BASc in Information Technology Infrastructure — Security"
                details={[
                  'September 2021 – August 2025',
                  "Dean’s List (4x), Microsoft CoPilot Student Ambassador",
                ]}
              />
              <EducationCard
                logo="/mankato.png"
                alt="Mankato State Logo"
                name="Minnesota State University, Mankato"
                title="PSEO: Developmental Psychology"
                details={[
                  'August 2020 – May 2021',
                  'Weekly leadership & mentorship with 6th graders on drug awareness and peer pressure.',
                ]}
              />
              <EducationCard
                logo="/coursera.png"
                alt="Coursera Logo"
                name="Google / Coursera"
                title="Cybersecurity Specialization Certificate"
                details={[
                  'August 2023 – February 2024 • 8-course program: security risks, network protection, Python automation, detection/response.',
                  <Link
                    key="cert"
                    href="https://www.coursera.org/account/accomplishments/professional-cert/NB7GYCWW6H7Y"
                    target="_blank"
                    className="text-[#7ee7ff] underline"
                  >
                    View certificate
                  </Link>,
                ]}
              />
            </motion.div>
          )}

          {/* SKILLS */}
          {activeTab === 'skills' && (
            <motion.div {...fadeIn(0.15)} className="mt-8 space-y-10">
              {/* Highlight band */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset]" />
                <h3 className="text-lg font-semibold">Core Focus</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  SQL for real data work, Power Platform for automation, and modern web for clean, reliable UIs.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['SQL', 'Power Automate', 'Power Apps', 'Python', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Categorized chips */}
              <div className="grid gap-6 md:grid-cols-3">
                <SkillGroup
                  title="Data & Automation"
                  items={[
                    'SQL',
                    'Power Automate',
                    'Power Apps',
                    'Python',
                    'PowerShell',
                    'REST APIs',
                    'SSMS',
                    'OAuth2',
                  ]}
                />
                <SkillGroup
                  title="Web & Frontend"
                  items={['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'HTML', 'CSS']}
                />
                <SkillGroup
                  title="Cloud & Ops"
                  items={['Azure', 'VMware', 'ServiceNow', 'Splunk', 'Git', 'CI/CD', 'Active Directory']}
                />
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {[
                  { name: 'SQL', file: 'sql' },
                  { name: 'PowerApps', file: 'powerapps' },
                  { name: 'PowerAutomate', file: 'powerautomate' },
                  { name: 'SSMS', file: 'sql' },
                  { name: 'Python', file: 'python' },
                  { name: 'PowerShell', file: 'powershell' },
                  { name: 'Next JS', file: 'next' },
                  { name: 'React JS', file: 'react' },
                  { name: 'Tailwind CSS', file: 'css' },
                  { name: 'TypeScript', file: 'typescript' },
                  { name: 'Node.js', file: 'node' },
                  { name: 'Azure', file: 'azure' },
                  { name: 'VMware', file: 'vmware' },
                  { name: 'ServiceNow', file: 'servicenow' },
                  { name: 'Splunk', file: 'splunk' },
                  { name: 'Active Directory', file: 'activedirectory' },
                  { name: 'HTML', file: 'html' },
                  { name: 'CSS', file: 'css' },
                  { name: 'Git', file: 'git' },
                ].map((skill) => (
                  <div key={skill.name} className="group relative flex items-center justify-center">
                    <Image
                      src={`/${skill.file}.svg`}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="object-contain grayscale transition duration-200 group-hover:grayscale-0"
                    />
                    <div className="absolute -bottom-5 text-[10px] text-zinc-400 opacity-0 transition group-hover:opacity-100">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

/* ------------------------ Components ------------------------ */

function Card({ logo, alt, date, title, company, bullets }: CardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset] opacity-80" />
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white">
          <Image src={logo} alt={alt} fill className="object-contain p-1" />
        </div>
        <div>
          <p className="text-xs font-mono tracking-wide text-[#7ee7ff]">{date}</p>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
          <p className="text-xs font-mono text-zinc-400">{company}</p>
          <ul className="mt-3 list-disc space-y-1 text-sm text-zinc-300 pl-5">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00e5ff]/10 blur-2xl transition duration-500 group-hover:translate-x-6 group-hover:translate-y-4" />
    </article>
  );
}

function EducationCard({ logo, alt, name, title, details }: EducationCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_45px_-18px_#00e5ff,0_0_80px_-40px_#8e84ff_inset] opacity-80" />
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white">
          <Image src={logo} alt={alt} fill className="object-contain p-1" />
        </div>
        <div>
          <p className="text-xs font-mono tracking-wide text-[#7ee7ff]">{name}</p>
          <h3 className="mt-1 text-base font-semibold">{title}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-zinc-300">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_35px_-18px_#00e5ff,0_0_70px_-40px_#8e84ff_inset]" />
      <h4 className="text-sm font-semibold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
