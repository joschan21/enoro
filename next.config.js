/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'i.ytimg.com'],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
}

module.exports = nextConfig
