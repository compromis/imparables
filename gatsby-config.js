module.exports = {
  siteMetadata: {
    title: `Imparables - Compromís`,
    description: ``,
    keywords: [`compromís`, `28 abril`, `eleccions autonòmiques`, `eleccions generals`, `mónica oltra`, `joan baldoví`, `mónica presidenta`],
    author: `@compromis`,
    image: 'https://imparables.compromis.net/images/thumbnail.png'
  },
  plugins: [
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
        name: `Imparables - Compromís`,
        short_name: `Imparables`,
        start_url: `/`,
        background_color: `#D25C27`,
        theme_color: `#D25C27`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-192x192.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
            variants: [`700`]
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'val',
        useLangKeyLayout: true,
        prefixDefault: false
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
