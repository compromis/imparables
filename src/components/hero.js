import React from "react"
import IntLink from "./IntLink"
import Imparables from "./elements/imparables"
import { FormattedMessage } from "react-intl";

const Hero = () => (
  <div className="hero">
    <div className="container-fluid">
      <div className="hero-claim"><Imparables /></div>
      <h2><FormattedMessage id="hero_intro" /></h2>
      <ul class="hero-ctas">
        <li><IntLink to="/hello" className="hero-cta hero-cta--primary"><FormattedMessage id="hero_cta1" /></IntLink></li>
        <li><IntLink to="/hello" className="hero-cta"><FormattedMessage id="hero_cta2" /></IntLink></li>
      </ul>
    </div>
  </div>
)

export default Hero
