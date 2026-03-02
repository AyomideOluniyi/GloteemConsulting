import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BRAND, INTEGRATIONS } from '@/config/integrations';

export const metadata: Metadata = {
  title: `Leadership and Organisational Development Consultancy | ${BRAND.name}`,
  description:
    'Gloteem Consulting provides leadership development, organisational strategy and healthcare consultancy services for growing businesses and care providers.',
  keywords: [
    'leadership development consultancy',
    'organisational development consultant',
    'healthcare consultancy services',
    'care advisory',
    'operational strategy',
    'start-up business structure support',
  ],
  icons: {
    icon: '/gtlogo/Gloteemlogo.png',
  },
  openGraph: {
    title: BRAND.name,
    description: BRAND.tagline,
    type: 'website',
    url: `https://${INTEGRATIONS.domain}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
