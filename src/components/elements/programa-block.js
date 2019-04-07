import React from "react"
import { Link } from "gatsby"

const ProgramaBlock = ({ fields, frontmatter }) => (
  <>
    <div className={['programa-category', frontmatter['class']].join(' ')}>{ frontmatter.category }</div>
    <Link to={ fields.slug } className={['programa-block', frontmatter['class']].join(' ')}>
      <span>{ frontmatter.title }</span>
    </Link>
  </>
)

export default ProgramaBlock
