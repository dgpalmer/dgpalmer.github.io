import type { Metadata } from 'next';
import Header from './components/sections/header';
import Footer from './components/sections/footer';
import './css/globals.css';

export const metadata: Metadata = {
  title: 'Donovan Palmer',
  description: 'father, husband, developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
