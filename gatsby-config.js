module.exports = {
  siteMetadata: {
    title: `Imparables - Compromís`,
    description: `Eleccions Municipals i Europees 2019. Aquest 26 de maig, serem #Imparables`,
    keywords: [`compromís`, `28 abril`, `26 de maig`, `eleccions autonòmiques`, `eleccions generals`, `eleccions municipals`, `eleccions europees`, `parlament europeu`, `elecciones europas`, `mónica oltra`, `joan baldoví`, `mónica presidenta`, `joan ribó`, `jordi sebastià`],
    author: `@compromis`,
    image: 'https://imparables.compromis.net/images/thumbnail-municipals.jpg'
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
    `gatsby-transformer-remark`,
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
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'val',
        useLangKeyLayout: true,
        prefixDefault: false,
        markdownRemark: {
          postPage: 'src/templates/programa-section.val.js',
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug,
                    langKey
                  }
                }
              }
            }
          }
          `
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-24972665-26",
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
