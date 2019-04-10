import React from "react"
import IntLink from "./elements/int-link"
//import { FormattedMessage } from "react-intl"
//import Fade from "react-reveal/Fade"

class CandidateItem extends React.Component {
  constructor(props){
      super(props);
  }
  render () {
    const { name, description, image, to, size } = this.props

    return(
      <IntLink to={to ? to : '#'} className={['candidate-list-item', 'candidate-list-item-' + size, to ? '' : 'is-not-link'].join(' ')}>
        <div className="candidate-list-item-image">
          <img src={image} alt={name} />
        </div>
        <div className="candidate-list-item-name">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </IntLink>
    )
  }
}

export default CandidateItem
