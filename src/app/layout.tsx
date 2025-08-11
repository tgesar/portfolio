import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar'; // <-- components is inside /app

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trenzin Gesar — Portfolio',
  description: 'Automation • SQL • Clean UX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
