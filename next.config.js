module.export = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume/home",
        permanent: true,
      },
    ];
  },
};
