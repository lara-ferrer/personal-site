module.exports = {
  siteMetadata: {
    title: `Lara Ferrer`,
    description: `¡Hola! Soy Lara, desarrolladora web y consultora SEO. Te animo a que visites mi página web para conocer más sobre mí :)`,
    author: `@Lara`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 1000
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: `https://blog-personal-strapi.herokuapp.com`,
        contentTypes: [
        'articulo'
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/profile.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
