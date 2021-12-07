module.exports = {
  siteMetadata: {
    title: `Zenia Gist CV`,
    description: `Personal resume website developed using Gatsby and 
      Sanity, hosted on Github Pages. Displays my web presence, work 
      experience, education, projects, achievements, and contact information.`,
    author: `Zenia Gist`,
    siteUrl: `https://zeniagist.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `xbrsrnjb`,
        dataset: `production`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Barlow`,
                variants: [`300`, `400`, `500`, `600`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenia Gist CV`,
        short_name: `ZG CV`,
        start_url: `/`,
        background_color: `#303030`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#ff3f3f`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
