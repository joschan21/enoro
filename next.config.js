/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: true,
// })

const nextConfig = {
  async redirects() {
    return [
      process.env.MAINTENANCE_MODE === '1' && {
        source: '/((?!maintenance).*)',
        destination: '/maintenance',
        permanent: false,
      },
    ].filter(Boolean)
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
