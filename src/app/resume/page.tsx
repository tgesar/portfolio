'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="flex flex-col md:flex-row text-white min-h-screen bg-[#111111] animate-fade-in">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-[#1e1e1e] px-4 py-8 flex flex-col gap-4">
        {['experience', 'education', 'skills'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 rounded-md text-sm font-mono transition ${
              activeTab === tab ? 'bg-green-400 text-black font-bold' : 'bg-[#2e2c33]'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 py-10">
        <h1 className="text-4xl font-bold font-mono mb-2">My {activeTab}</h1>
        <p className="text-gray-400 mb-8">
          {activeTab === 'experience' && 'Where have I made an impact?'}
          {activeTab === 'education' && 'Where have I learned?'}
          {activeTab === 'skills' && 'What can I do?'}
        </p>

        {/* Experience */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              logo="/3m.png"
              alt="3M Logo"
              date="May 2025 – Present"
              title="Automation Engineer Intern"
              company="3M"
              bullets={[
                'Developed PowerApps LDIF Table Viewer to search and filter over 240,000+ SQL rows interactively',
                'Improved workflow for Cognizant end users by replacing manual SQL queries with UI-based navigation',
                'Created automated task assignment notification system using Power Automate and Microsoft Teams'
              ]}
            />
            <Card
              logo="/vrad.jpg"
              alt="vRad Logo"
              date="May 2024 – August 2024"
              title="IT Project Management Intern"
              company="Virtual Radiologic"
              bullets={[
                'Completed hardware refresh project for 148 radiologist stations including imaging and deployment',
                'Applied Group Policies and ensured Active Directory domain connectivity on imaged PCs',
                'Collaborated with CDW to ensure timely delivery and setup of IT hardware',
                'Managed IT service requests and support using ServiceNow'
              ]}
            />
            <Card
              logo="/umn.png"
              alt="UMN Logo"
              date="August 2024 – April 2025"
              title="Infrastructure Cloud Engineer"
              company="University of Minnesota"
              bullets={[
                'Monitored and maintained Azure-hosted infrastructure using Splunk, VMware, and vCenter',
                'Repaired VM hosts using PowerShell and custom scripts to remove recovery partitions',
                'Implemented Azure DevOps pipelines for CI/CD of cloud services',
                'Streamlined provisioning runbook requests through automated ServiceNow ticketing system'
              ]}
            />
            <Card
              logo="/fairview.png"
              alt="Fairview Logo"
              date="Aug 2022 – May 2023"
              title="Technical Support Product Specialist"
              company="Fairview Health Services"
              bullets={[
                'Used PeopleSoft to manage inventory, par values, and equipment tracking across hospital units',
                'Improved route delivery efficiency by 21% through analysis and process refinement',
                'Maintained documentation for $50,000+ VACS medical equipment',
                'Coordinated medical supply replenishment ensuring accurate real-time tracking'
              ]}
            />
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <EducationCard
              logo="/umn.png"
              alt="UMN Logo"
              name="University of Minnesota"
              title="BASc in Information Technology Infrastructure - Security"
              details={[
                'September 2021 – August 2025',
                '4x Dean\'s List Recipient',
                'Microsoft CoPilot Student Ambassador'
              ]}
            />
            <EducationCard
              logo="/mankato.png"
              alt="Mankato State Logo"
              name="Minnesota State University, Mankato"
              title="PSEO: Developmental Psychology"
              details={[
                'August 2020 – May 2021',
                'Weekly leadership & mentorship with 6th graders on drug awareness and peer pressure'
              ]}
            />
            <EducationCard
              logo="/coursera.png"
              alt="Coursera Logo"
              name="Google / Coursera"
              title="Cybersecurity Specialization Certificate"
              details={[
                'August 2023 – February 2024',
                '8-course program on security risks, network protection, Python automation, and detection/response',
                <Link key="cert" href="https://www.coursera.org/account/accomplishments/professional-cert/NB7GYCWW6H7Y" target="_blank" className="text-blue-400 underline">View certificate</Link>
              ]}
            />
          </div>
        )}

        {/* Skills */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-4">
            {[
              { name: 'SQL', file: 'sql' },
              { name: 'PowerApps', file: 'powerapps' },
              { name: 'PowerAutomate', file: 'powerautomate' },
              { name: 'SSMS', file: 'sql' },
              { name: 'Azure', file: 'azure' },
              { name: 'VMware', file: 'vmware' },
              { name: 'Python', file: 'python' },
              { name: 'Splunk', file: 'splunk' },
              { name: 'HTML', file: 'html' },
              { name: 'CSS', file: 'css' },
              { name: 'React JS', file: 'react' },
              { name: 'Next JS', file: 'next' },
              { name: 'Tailwind CSS', file: 'css' },
              { name: 'PowerShell', file: 'powershell' },
            ].map((skill: { name: string; file: string }) => (
              <div key={skill.name} className="flex justify-center items-center group relative">
                <Image
                  src={`/${skill.file}.svg`}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="object-contain grayscale transition duration-200 group-hover:grayscale-0"
                />
                <div className="absolute bottom-[-1.5rem] text-xs text-center text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ logo, alt, date, title, company, bullets }: CardProps) {
  return (
    <div className="bg-[#2e2c33] p-6 rounded-2xl flex items-start gap-4">
      <div className="min-w-20 min-h-20 rounded-full bg-white relative overflow-hidden">
        <Image src={logo} alt={alt} fill className="object-cover scale-100" />
      </div>
      <div>
        <p className="text-green-400 text-sm font-mono mb-1">{date}</p>
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-400 text-sm font-mono mb-2">{company}</p>
        <ul className="text-gray-300 text-sm list-disc ml-5 space-y-1">
          {bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

function EducationCard({ logo, alt, name, title, details }: EducationCardProps) {
  return (
    <div className="bg-[#2e2c33] p-6 rounded-xl flex items-start gap-4">
      <div className="relative w-20 h-20 rounded-full bg-white overflow-hidden shrink-0">
        <Image
          src={logo}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-green-400 font-mono text-sm">{name}</p>
        <h2 className="text-lg font-semibold font-mono">{title}</h2>
        <ul className="text-gray-400 text-sm font-mono list-disc ml-4 mt-1 space-y-1">
          {details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
    </div>
  );
}

