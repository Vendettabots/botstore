/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /HeartbeatWorker\.js$/, // Hedef dosya
      loader: 'null-loader',        // Bu dosyayı yoksay
    });
    return config;
  },
};

module.exports = nextConfig;
