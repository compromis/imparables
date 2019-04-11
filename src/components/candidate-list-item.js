import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"
//import Fade from "react-reveal/Fade"

const CandidateItemWrapper = ({children, to, ...props}) => (
  <>
    { to ? <IntLink to={to} {...props}>{children}</IntLink> : <div {...props}>{children}</div> }
  </>
)

const CandidateItem = ({ name, id, image, to, size }) => (
  <CandidateItemWrapper to={to} className={['candidate-list-item', 'candidate-list-item-' + size].join(' ')}>
    <div className="candidate-list-item-image">
      <img src={image} alt={name} />
    </div>
    <div className="candidate-list-item-name">
      <h3>{name}</h3>
      <p><FormattedMessage id={'candidates_' + id + '_desc'} /></p>
    </div>
  </CandidateItemWrapper>
)

export default CandidateItem
