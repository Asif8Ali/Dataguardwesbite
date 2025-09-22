/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: false // Better for Vercel
  },
  trailingSlash: true
}

module.exports = nextConfig
