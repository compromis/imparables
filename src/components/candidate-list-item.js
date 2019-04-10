import React from "react"
//import { FormattedMessage } from "react-intl"
//import Fade from "react-reveal/Fade"

class CandidateItem extends React.Component {
  constructor(props){
      super(props);
  }
  render () {
    return(
      <div>
        <img src={this.props.image} />
          <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default CandidateItem
