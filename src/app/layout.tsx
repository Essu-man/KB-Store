import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Electronics Marketplace',
  description: 'Inspired by Telefonika and Mercari',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          © 2025 Brandy's Shop.
        </footer>
      </body>
    </html>
  );
}