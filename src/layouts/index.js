import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl";

import Header from "../components/header"

const Layout = ({ locale, messages, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <IntlProvider locale={locale} messages={messages}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} locale={locale} />
          <main>{children}</main>
        </>
      </IntlProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
