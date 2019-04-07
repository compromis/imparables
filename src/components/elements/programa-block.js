import React from "react"
import { Link } from "gatsby"

const ProgramaBlock = ({ fields, frontmatter }) => (
  <Link to={fields.slug}>
    { frontmatter.title }
  </Link>
)

export default ProgramaBlock
