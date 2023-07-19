/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/spa',
  output: 'standalone',
  // reactStrictMode: false, // for dev mode only
  rewrites() {
    return [
      { source: '/spa/_next/:path*', destination: '/_next/:path*' },
      // we need to register every new api route here
      { source: '/spa/api/profile-auth/:path*', destination: '/api/profile-auth/:path*' },
    ];
  },
};

module.exports = nextConfig;
