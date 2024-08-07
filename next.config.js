/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;