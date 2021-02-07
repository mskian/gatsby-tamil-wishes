/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Tamil Wishes",
    author: "Santhosh Veer",
    siteUrl: "https://wishes.tamilwords.net",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tamil Wishes`,
        short_name: `Tamil Wishes`,
        description: `Tamil Wishes - Tamil Festival SMS Wishes and Tamil Greetings.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        legacy: true,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://wishes-five.vercel.app",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-advanced-sitemap",
      options: {
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      },
    },
  ],
}
