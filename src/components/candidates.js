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
        <h2 className="candidates-title">
          <IntLink to="/candidatura">Candidatura Municipal</IntLink>
        </h2>
        <div className="row">
          <div className="candidates-imgs col-lg-12">
            <IntLink to="/monica-oltra" onMouseEnter={() => this.focusCandidate('ribo')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'ribo' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-monica"></div>
              <div className="candidates-txt">
                <h3>Joan Ribó</h3>
                <p><FormattedMessage id="candidates_vlc_desc" /></p>
              </div>
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('natxo')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'natxo' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-natxo"></div>
              <div className="candidates-txt">
                <h3>Natxo Bellido</h3>
                <p><FormattedMessage id="candidates_alacant_desc" /></p>
              </div>  
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('ignasi')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'ignasi' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-ignasi"></div>
              <div className="candidates-txt">
                <h3>Ignasi Garcia</h3>
                <p><FormattedMessage id="candidates_cast_desc" /></p>
              </div>  
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('mireia')} onMouseLeave ={() => this.focusCandidate(null)} className={['candidates-img-wrapper', focused === 'mireia' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-baldo"></div>
              <div className="candidates-txt">
                <h3>Mireia Mollà</h3>
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
