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
};
