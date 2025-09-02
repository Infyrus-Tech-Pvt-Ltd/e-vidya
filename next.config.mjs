/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SSR by default (App Router handles this automatically)
  
  // Optimize for Vercel deployment
  experimental: {
    // Enable server components optimizations
    serverComponentsExternalPackages: ['appwrite'],
  },
  
  // Environment-specific configurations
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Image optimization
  images: {
    domains: ['cloud.appwrite.io'],
  },
  
  // Enable compression
  compress: true,
  
  // Power pack for better performance
  poweredByHeader: false,
};

export default nextConfig;
