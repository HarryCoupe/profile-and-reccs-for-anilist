/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["s4.anilist.co"],
  },
  useFileSystemPublicRoutes: false,
};
