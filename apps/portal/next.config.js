/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@irigasi/ui', '@irigasi/types', '@irigasi/config'],
  reactStrictMode: true,
};

module.exports = nextConfig;
