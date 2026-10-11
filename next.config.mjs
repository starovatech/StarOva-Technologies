/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      { source: "/solutions", destination: "/services", permanent: true },
      // Contact page is switched off for now; enquiries happen in the pop-up
      { source: "/contact", destination: "/", permanent: false },
    ];
  }
};

export default nextConfig;
