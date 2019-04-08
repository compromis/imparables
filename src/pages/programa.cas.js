import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Programa from "../templates/programa"

const ProgramaPage = ({...props}) => (
  <Layout>
    <SEO lang="es" title="Programa 2019" />
    <Programa isFrontPage={true} {...props} />
  </Layout>
)

export const query = graphql`
  query {
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

export default ProgramaPage
