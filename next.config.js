/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  images: {
    loader: 'imgix',
    path: ['source.unsplash.com', 'image.tmdb.org'],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  reactStrictMode: true,
  experimental: {
    images: {
        unoptimized: true
    }
  }
}

module.exports = nextConfig
