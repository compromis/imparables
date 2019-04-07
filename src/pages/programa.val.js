import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Programa from "../templates/programa"

const ProgramaPage = ({...props}) => (
  <Layout>
    <SEO lang="ca" title="Programa 2019" />
    <Programa {...props} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { langKey: { eq: "val" }} }, sort: { order: DESC, fields: [frontmatter___order]}) {
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

export default ProgramaPage
