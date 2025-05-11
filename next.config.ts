import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // add markdown plugins here, as desired
  extension: /\.(md|msx)$/,
});

export default withMDX(nextConfig);
