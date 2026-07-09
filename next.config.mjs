/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  allowedDevOrigins: ['192.168.1.24'],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
