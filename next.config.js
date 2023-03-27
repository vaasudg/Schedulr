/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  images: {
    loader: 'imgix',
    domains: ['source.unsplash.com', 'image.tmdb.org'],
  },
  reactStrictMode: true,
  experimental: {
    images: {
        unoptimized: true
    }
  }
}

module.exports = nextConfig
