/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets phones on the same Wi-Fi load the dev server (npm run dev only)
  allowedDevOrigins: ["192.168.0.102"],
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
