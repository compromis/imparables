import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"

class Candidates extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: null
    }
  }

  focusCandidate (candidate) {
    this.setState({
      focused: candidate
    })
  }

  render () {
    const { focused } = this.state

    return (
      <div className="container-fluid candidates">
        <div className="candidates-txt-lg-button">
          <IntLink to="/candidatura" className="candidates">Candidatura Municipal</IntLink>
        </div>
        <div className="row">
          <div className="candidates-imgs col-lg-12">
            <IntLink to="/monica-oltra" onMouseEnter={() => this.focusCandidate('ribo')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'ribo' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-monica"></div>
              <div className="candidates-txt">
                <h2>Joan Ribó</h2>
                <p><FormattedMessage id="candidates_vlc_desc" /></p>
              </div>
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('natxo')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'natxo' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-natxo"></div>
              <div className="candidates-txt">
                <h2>Natxo Bellido</h2>
                <p><FormattedMessage id="candidates_alacant_desc" /></p>
              </div>  
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('ignasi')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'ignasi' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-ignasi"></div>
              <div className="candidates-txt">
                <h2>Ignasi Garcia</h2>
                <p><FormattedMessage id="candidates_cast_desc" /></p>
              </div>  
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('mireia')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'mireia' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-baldo"></div>
              <div className="candidates-txt">
                <h2>Mireia Mollà</h2>
                <p><FormattedMessage id="candidates_elx_desc" /></p>
              </div>  
            </IntLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Candidates
