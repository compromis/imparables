import React from "react"
import IntLink from "./elements/IntLink"
import Imparables from "./elements/imparables"
import { FormattedMessage } from "react-intl"
import Fade from "react-reveal/Fade"

const Hero = () => (
  <div className="hero">
    <div className="container-fluid">
      <div className="hero-claim"><Fade duration={2000}><Imparables /></Fade></div>
      <h2><Fade bottom delay={500}><FormattedMessage id="hero_intro" /></Fade></h2>
      <ul className="hero-ctas">
        <li><Fade bottom delay={700}><IntLink to="/hello" className="hero-cta hero-cta--primary"><FormattedMessage id="hero_cta1" /></IntLink></Fade></li>
        <li><Fade bottom delay={900}><IntLink to="/hello" className="hero-cta"><FormattedMessage id="hero_cta2" /></IntLink></Fade></li>
      </ul>
    </div>
  </div>
)

export default Hero
