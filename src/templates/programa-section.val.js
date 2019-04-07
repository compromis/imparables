import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import messages from "../lang/val"
import { addLocaleData } from "react-intl"
import localeData from "react-intl/locale-data/ca"
addLocaleData(localeData)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout locale="ca" messages={messages}>
      <div className="container-fluid">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
    }
  }
`