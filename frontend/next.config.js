/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // appDir: true
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
