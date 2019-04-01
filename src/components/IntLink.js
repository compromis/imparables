import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const IntLink = ({ to, locale, children, ...props }) => {
  const lang = locale === 'es' ? '/cas' : ''
  return (
    <Link to={`${lang}${to}`} {...props}>{children}</Link>
  )
}

IntLink.propTypes = {
  to: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
}

IntLink.defaultProps = {
  to: `/`,
  locale: `ca`
}

export default IntLink
