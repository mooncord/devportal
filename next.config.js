/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/applications',
        permanent: true,
      },
      {
        source: '/applications/:applicationId',
        destination: '/applications/:applicationId/information',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
};
