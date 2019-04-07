import React from "react"
import ProgramaBlock from "../components/elements/programa-block"

const Programa = ({ data }) => (
  <div className="page-programa">
    <div className="container-fluid">
      <h2>Programa</h2>
      { data.allMarkdownRemark.edges.map(({ node }) => <ProgramaBlock key={node.frontmatter.order} fields={node.fields} frontmatter={node.frontmatter} />) }
    </div>
  </div>
)

export default Programa
