import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';

export const metadata: Metadata = {
  title: 'Office AddIns - MS Office Add-in Development Experts',
  description: 'Professional MS Office Add-in development services for Excel, Word, PowerPoint, and Outlook. Custom solutions to enhance productivity and streamline workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ClientOnly fallback={
          <div className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-md bg-gradient-to-r from-primary to-secondary"></div>
                <div className="w-32 h-6 bg-gradient-to-r from-primary to-secondary opacity-20 rounded"></div>
              </div>
              <div className="hidden md:flex space-x-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-16 h-6 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        }>
          <Navbar />
        </ClientOnly>
        <main className="flex-grow pt-2">{children}</main>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
} 