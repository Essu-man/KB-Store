import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Brandy's Shop - Premium Electronics",
  description: 'Discover premium electronics and gadgets at Brandy&apos;s Shop. Your trusted destination for quality tech products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="bg-black text-white py-8 text-center mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-300">© 2025 Brandy&apos;s Shop. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">
              Premium electronics for discerning customers
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}