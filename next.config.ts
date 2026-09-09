import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages (no Node server there).
  output: "export",

  // Emits /work/slug/index.html instead of /work/slug.html so GitHub Pages
  // resolves nested routes without a rewrite layer.
  trailingSlash: true,

  // The Next image optimizer needs a server; export ships the files as-is.
  images: { unoptimized: true },
};

export default nextConfig;
