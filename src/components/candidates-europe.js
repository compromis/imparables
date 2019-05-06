import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"

class Candidates extends React.Component {
 
  render () {
    return (
      <div className="container-fluid candidates-europe-wrapper">
        <div className="candidates-txt-lg-button candidates-europe-title">
          <IntLink to="/candidatura">Candidatura Europea</IntLink>
        </div>

        <div className="candidates-txt-lg candiadates-europe-name">
          <div className="candidates-txt-lg-names">
            <IntLink to="/monica-oltra">
              <h2>Jordi Sebastià</h2>
              <p><FormattedMessage id="candidates_europe_desc" /></p>
            </IntLink>
          </div>
        </div>

        <div className="candidates-europe-img">
          <IntLink to="/monica-oltra" className="candidates-img-wrapper-jordi">
            <div className="candidates-img candidates-img-jordi"></div>
          </IntLink>
        </div>

      </div>
    )
  }
}

export default Candidates
