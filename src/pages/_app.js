import '../css/globals.css';

export const metadata = {
  title: 'Donovan Palmer',
  description: 'father, husband, developer'
}

export default function MyApp({
  Component,
  pageProps
}) {
  return <Component {...pageProps} />;
}
