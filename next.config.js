/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')

const withPlugins = require('next-compose-plugins')
const CompressionPlugin = require('compression-webpack-plugin')

const bundleAnalyzer = withBundleAnalyzer({
  compress: true,
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/static/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,s-maxage=31536000, immutable',
          },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400',
          },
        ],
      },
      {
        source: '/static/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400',
          },
        ],
      },
    ]
  },
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['github.com', 'user-images.githubusercontent.com'], // 이미지가 호스팅된 도메인 추가
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.plugins.push(new CompressionPlugin())
    return config
  },
}
module.exports = withPlugins([bundleAnalyzer], nextConfig)
