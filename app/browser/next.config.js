/** @type {import('next').NextConfig} */
const nextConfig = {
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
