module.exports = {
  siteMetadata: {
    title: `Lara Ferrer`,
    description: `¡Hola! Soy Lara, desarrolladora web y consultora SEO. Te animo a que visites mi página web para conocer más sobre mí :)`,
    author: `@Lara`,
    siteUrl: `https://www.lara-ferrer.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/blog" }],
        height: 10,
        prependToBody: false,
        color: `#c9216c`,
        footerHeight: 500,
        headerHeight: 0,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-SD75LYX3EE",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 1000
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        //apiURL: `http://localhost:5000`,
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
