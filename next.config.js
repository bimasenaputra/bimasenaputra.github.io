/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/bimasenaputra/' : ''.
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig