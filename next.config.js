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
