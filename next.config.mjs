/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [{ source: "/solutions", destination: "/services", permanent: true }];
  }
};

export default nextConfig;
