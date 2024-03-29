require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {

  siteMetadata: {
    title: "Kinka Finance",
    description: "Official Contentful Gatsby Starter",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
  ],
};
