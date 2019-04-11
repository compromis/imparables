import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const CandidateItemWrapper = ({children, to, ...props}) => (
  <>
    { to ? <IntLink to={to} {...props}>{children}</IntLink> : <div {...props}>{children}</div> }
  </>
)

class CandidateItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bioDisplayed: false
    }
  }

  toggleBio () {
    if (this.props.to) return

    this.setState({
      bioDisplayed: !this.state.bioDisplayed
    })
  }

  render () {
    const { name, id, image, to, size, social } = this.props
    const { bioDisplayed } = this.state

    return (
      <CandidateItemWrapper to={to} className={['candidate-list-item', 'candidate-list-item-' + size].join(' ')}>
        <div className="candidate-list-item-image" onClick={() => { this.toggleBio()}} >
          <img src={image} alt={name} />
        </div>
        <div className="candidate-list-item-name">
          <h3 onClick={() => { this.toggleBio()}}>{name}</h3>
          <p className="candidate-list-item-description"><FormattedMessage id={'candidates_' + id + '_desc'} /></p>
          <div className={['candidate-list-item-bio', bioDisplayed ? '' : 'd-none'].join(' ')}>
            { social ? 
              <div className="candidate-social">
                <ul>
                  <li className="facebook"><a href={'https://www.facebook.com/' + social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /> {name}</a></li>
                  <li className="twitter"><a href={'https://twitter.com/' + social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /> @{social.twitter}</a></li>
                  <li className="instagram"><a href={'https://www.instagram.com/' + social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /> @{social.instagram}</a></li>
                </ul>
              </div> : '' }
            <FormattedMessage id={'candidates_' + id + '_bio'} />
          </div>
        </div>
      </CandidateItemWrapper>
    )
  }
}

export default CandidateItem
