import React from "react"
//import { FormattedMessage } from "react-intl"
//import Fade from "react-reveal/Fade"

const Candidates = () => (
  <div className="container-fluid row">
    <div className="candidates-txt-lg col-lg-6">
        <h2>Mónica Oltra</h2>
        <h3>Candidata a la Presidència del Govern</h3>
    </div>

    <div className="candidates col-lg-6">
      <a href="/">
        <div className="candidates-img candidates-img-first"></div>
        <div className="candidates-txt">
          <h2>Mónica Oltra</h2>
          <h3>Candidata a la Presidència del Govern</h3>
        </div>
      </a>
      <a href="/">
        <div className="candidates-img candidates-img-second"></div>
        <div className="candidates-txt">
          <h2>Joan Baldoví</h2>
          <h3>Candidat al Congrés</h3>
        </div>  
      </a>
    </div>

  </div>
)

export default Candidates
