/** @type {import('next').NextConfig} */
const { join } = require('path');

const nextConfig = {
  experimental: {
    // https://nextjs.org/docs/pages/api-reference/next-config-js/output#caveats
    outputFileTracingRoot: join(__dirname, '../../'),
  },
  linaria: {
    /**
     * https://vercel.com/docs/build-step#caching
     * で記載されているディレクトリにビルド結果をキャッシュさせる
     */
    cacheDirectory: './.next/cache/.linaria-cache',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
