import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"

class Candidates extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: 'monica'
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
        <div className="row">
          <div className="candidates-txt-lg col-lg-5">
              <div className="candidates-txt-lg-button">
                <IntLink to="/candidatura"><FormattedMessage id="candidates_header" /></IntLink>
              </div>
              <div className="candidates-txt-lg-names">
                <IntLink to="/monica-oltra" className={['candidates-txt-lg-name monica', focused === 'monica' ? 'focused' : ''].join(' ')}>
                  <h2>Mónica Oltra</h2>
                  <p><FormattedMessage id="candidates_monica_desc" /></p>
                </IntLink>
                <IntLink to="/joan-baldovi" className={['candidates-txt-lg-name baldo', focused === 'baldo' ? 'focused' : ''].join(' ')}>
                  <h2>Joan Baldoví</h2>
                  <p><FormattedMessage id="candidates_baldo_desc" /></p>
                </IntLink>
              </div>
          </div>

          <div className="candidates-imgs col-lg-7">
            <IntLink to="/monica-oltra" onMouseEnter={() => this.focusCandidate('monica')} className={['candidates-img-wrapper', focused === 'monica' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-monica"></div>
              <div className="candidates-txt">
                <h2>Mónica Oltra</h2>
                <p><FormattedMessage id="candidates_monica_desc" /></p>
              </div>
            </IntLink>
            <IntLink to="/joan-baldovi" onMouseEnter={() => this.focusCandidate('baldo')} className={['candidates-img-wrapper', focused === 'baldo' ? 'focused' : ''].join(' ')}>
              <div className="candidates-img candidates-img-baldo"></div>
              <div className="candidates-txt">
                <h2>Joan Baldoví</h2>
                <p><FormattedMessage id="candidates_baldo_desc" /></p>
              </div>  
            </IntLink>
            <IntLink to="/candidatura" className="candidates-all"><FormattedMessage id="candidates_all" /></IntLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Candidates
