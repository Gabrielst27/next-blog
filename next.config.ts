import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    seconds: {
      stale: 0,
      revalidate: 30,
      expire: 30,
    },
  },
};

export default nextConfig;
