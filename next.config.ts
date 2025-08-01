// // next.config.ts
// import type { NextConfig } from "next";
// import withNextIntl from "next-intl/plugin";

// const nextIntlConfig = withNextIntl("./i18n.ts");

// const nextConfig: NextConfig = {
//    experimental: {
//      serverActions: {}
//    }
// };

// export default nextIntlConfig(nextConfig);



// next.config.ts
import type { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

const nextIntlConfig = withNextIntl('./i18n.ts');

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
  unoptimized: true,
};

export default nextIntlConfig(nextConfig);
