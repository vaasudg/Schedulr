/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  images: {
    domains: ['source.unsplash.com', 'image.tmdb.org'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
