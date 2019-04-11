import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Programa from "./programa"
import messages from "../lang/cas"
import { addLocaleData } from "react-intl"
import localeData from "react-intl/locale-data/es"
addLocaleData(localeData)

export default ({data, ...props}) => {
  return (
    <Layout locale="es" messages={messages}>
      <SEO lang="ca" title={data.markdownRemark.frontmatter.title + " - Programa 2019"} />
      <Programa isFrontPage={false} data={data} {...props} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        category,
        class
      }
    },
    allMarkdownRemark(filter: { fields: { langKey: { eq: "cas" }} }, sort: { order: ASC, fields: [frontmatter___order]}) {
      edges {
        node {
          frontmatter {
            title,
            category,
            order,
            class
          },
          fields {
            slug,
            langKey,
          }
        }
      }
    }
  }
`