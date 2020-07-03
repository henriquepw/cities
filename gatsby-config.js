require('dotenv').config();

const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.ts'],
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@assets': 'src/assets/',
          '@atoms': 'src/components/atoms/',
          '@molecules': 'src/components/molecules/',
          '@organisms': 'src/components/organisms/',
          '@templates': 'src/components/templates/',
          "@hooks": "./src/hooks/",
          "@styles": "./src/styles/",
          "@utils": "./src/utils/",
        },
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
