import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Programa from "./programa"
import messages from "../lang/val"
import { addLocaleData } from "react-intl"
import localeData from "react-intl/locale-data/ca"
addLocaleData(localeData)

export default ({...props}) => {
  return (
    <Layout locale="ca" messages={messages}>
      <SEO lang="ca" title="Programa 2019" />
      <Programa isFrontPage={false} {...props} />
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
    allMarkdownRemark(filter: { fields: { langKey: { eq: "val" }} }, sort: { order: ASC, fields: [frontmatter___order]}) {
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