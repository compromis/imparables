import React from "react"
import IntLink from "../components/elements/int-link"
import { Link } from "gatsby"
import { StickyContainer, Sticky } from "react-sticky"
import { FaFileAlt } from "react-icons/fa"
import { FormattedMessage } from "react-intl"

const ProgramaList = ({ list, current }) => (
  <div className="programa-sections">
    <h2><IntLink to="/programa">Programa 2019</IntLink></h2>
    { list.map(({ node }) => <ProgramaBlock key={node.frontmatter.order} fields={node.fields} frontmatter={node.frontmatter} current={current} />) }
  </div>
)

const ProgramaBlock = ({ fields, frontmatter, current }) => (
  <>
    <div className={['programa-category', frontmatter['class'], current === frontmatter['class'] ? 'programa-current' : ''].join(' ')}>{ frontmatter.category }</div>
    <Link to={ fields.slug } className={['programa-block', frontmatter['class']].join(' ')}>
      <span>{ frontmatter.title }</span>
    </Link>
  </>
)

const ProgramaContent = ({ content }) => (
  <div className={content.frontmatter['class']}>
    <h2 className="programa-breadcrumbs"><IntLink to="/programa" className="d-md-none">Programa 2019</IntLink> / { content.frontmatter.category }</h2>
    <h3>{ content.frontmatter.title }</h3>
    <div dangerouslySetInnerHTML={{__html: content.html}} />
  </div>
)

const Programa = ({ isFrontPage, data }) => (
  <div className={['programa', isFrontPage ? 'programa-frontpage' : ''].join(' ')}>
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
                  <div className="programa-background d-none d-md-block" style={ isSticky ? {marginTop: 70} : null}>Programa<br />2019</div>
                  { data.markdownRemark ? <ProgramaList list={data.allMarkdownRemark.edges} current={false} /> : '' }
                  <ul className="programa-download">
                    <li><a href="/docs/programa150_VAL.pdf"><FaFileAlt /> Programa en PDF (Valencià)</a></li>
                    <li><a href="/docs/programa150_CAS.pdf"><FaFileAlt /> Programa en PDF (Castellano)</a></li>
                    <li><a href="/docs/llibret_mesures.pdf"><FaFileAlt /> <FormattedMessage id="programa_download" /></a></li>
                  </ul>
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
