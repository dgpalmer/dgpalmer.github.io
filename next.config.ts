import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production'
const isProd = false;

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  assetPrefix: isProd ? '/dgpalmer.github.io-nextjs' : undefined,
  basePath: isProd ? '/dgpalmer.github.io-nextjs' : undefined,
  images: { unoptimized: true },
};
const withMDX = createMDX({
  // add markdown plugins here, as desired
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
