import './globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { Providers } from '../providers';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Template Next.js',
  description: 'Template for Next.js 13 for new projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
