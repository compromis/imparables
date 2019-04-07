import React from "react"
import IntLink from "../components/elements/int-link"
import { StickyContainer, Sticky } from "react-sticky"
import ProgramaBlock from "../components/elements/programa-block"

const ProgramaList = ({ list, hasHeader }) => (
  <>
    { hasHeader ? <h2>Programa 2019</h2> : '' }
    { list.map(({ node }) => <ProgramaBlock key={node.frontmatter.order} fields={node.fields} frontmatter={node.frontmatter} />) }
  </>
)

const ProgramaContent = ({ content }) => (
  <div className={content.frontmatter['class']}>
    <h2><IntLink to="/programa">Programa 2019</IntLink> / { content.frontmatter.category }</h2>
    <h3>{ content.frontmatter.title }</h3>
    <div dangerouslySetInnerHTML={{__html: content.html}} />
  </div>
)

const Programa = ({ data }) => (
  <div className="programa">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 col-xl-7 programa-content">
          { 
            data.markdownRemark 
            ? <ProgramaContent content={data.markdownRemark} />
            : <ProgramaList list={data.allMarkdownRemark.edges} hasHeader={true} /> 
          }
        </div>
        <StickyContainer className="col-md-3 programa-nav">
          <Sticky topOffset={-80}>
            {({ style, isSticky }) => (
              <div style={style}>
                <div style={ isSticky ? {marginTop: 70} : null}>
                  <div className="programa-background">Programa<br />2019</div>
                  { data.markdownRemark ? <ProgramaList list={data.allMarkdownRemark.edges} hasHeader={false} /> : '' }
                  <a href="/">Descarrega en PDF</a>
                </div>
              </div>
            )}
          </Sticky>
        </StickyContainer>
      </div>
    </div>
  </div>
)

export default Programa
