import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.maba.co.kr',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
