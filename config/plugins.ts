module.exports = {
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "localhost",
        port: 1025,
        ignoreTLS: true,
      },
      settings: {
        defaultFrom: "email@strapi.mydomain.com",
      },
    },
  },
};
