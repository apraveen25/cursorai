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
      <body>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <main>{children}</main>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
} 