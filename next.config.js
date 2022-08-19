module.exports = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["i.ibb.co"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
