/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: true,
// })

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
