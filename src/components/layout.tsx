import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import metadata from '../utils/metadata'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          {metadata.title}
        </title>
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          name="keywords"
          content={metadata.keywords.join(', ')}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="h-full scroll-smooth">
        <Header />
        {children}
        <Footer />2
      </body>
    </html>
  );
}
