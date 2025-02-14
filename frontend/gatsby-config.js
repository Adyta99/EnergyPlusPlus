module.exports = {
  siteMetadata: {
    title: `Energy++`,
    description: `Automatic heating system control tool. Provides modelling of the heat flow and heaters control in the building based on 2D plans and sensor data.`,
    author: `@meike_sophie`,
  },
  plugins: [
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#007bc6`,
        display: `standalone`,
        icon: `src/images/icon.png`, // change the icon here and then recompile. This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
