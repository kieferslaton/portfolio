module.exports = {
  siteMetadata: {
    title: `Kiefer Slaton`,
    description: `Web Developer in Ridgeland, MS`,
    author: `@gatsbyjs`,
    siteUrl: `https://kieferslaton.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://protected-reef-85895.herokuapp.com',
        collectionTypes: [`skills`, `work-experiences`, `educations`, `projects`],
        singleTypes: [`about-me`],
        queryLimit: 1000
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
