import React from "react"
import PropTypes from "prop-types"
import { injectIntl, intlShape } from "react-intl";
import { Link } from "gatsby"

const IntLink = ({ to, locale, intl, children, ...props }) => {
  const lang = locale ? (locale === 'es' ? '/cas' : '') : (intl.locale === 'es' ? '/cas' : '')
  return (
    <Link to={`${lang}${to}`} {...props}>{children}</Link>
  )
}

IntLink.propTypes = {
  to: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  locale: PropTypes.string
}

IntLink.defaultProps = {
  to: `/`,
}

export default injectIntl(IntLink)
