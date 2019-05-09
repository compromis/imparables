import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"

class Candidates extends React.Component {
 
  render () {
    return (
      <div className="europe">
        <div className="container-fluid candidates candidates--europe">
          <div className="candidates-title candidates-europe-title">
            <h2><IntLink to="/jordi-sebastia">Candidatura Europea</IntLink></h2>
          </div>

          <div className="candidates-europe-name">
            <div className="candidates-txt">
              <IntLink to="/jordi-sebastia">
                <h3>Jordi Sebastià</h3>
                <p><FormattedMessage id="candidates_europe_desc" /></p>
              </IntLink>
            </div>
          </div>

          <div className="candidates-europe-img">
            <IntLink to="/jordi-sebastia" className="candidates-img-wrapper-jordi">
              <div className="candidates-img candidates-img-jordi"></div>
            </IntLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Candidates
