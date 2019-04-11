import React from "react"
import IntLink from "./elements/int-link"
import Imparables from "./elements/imparables"
import { FormattedMessage } from "react-intl"
import Fade from "react-reveal/Fade"

const Hero = () => (
  <div className="hero">
    <div className="container-fluid hero-content">
      <div className="hero-claim"><Fade duration={2000}><Imparables /></Fade></div>
      <h2><Fade bottom delay={500}><FormattedMessage id="hero_intro" /></Fade></h2>
      <ul className="hero-ctas">
        <li><Fade bottom delay={700}><IntLink to="/candidatura" className="hero-cta hero-cta--primary"><FormattedMessage id="hero_cta1" /></IntLink></Fade></li>
        <li><Fade bottom delay={900}><IntLink to="/programa" className="hero-cta"><FormattedMessage id="hero_cta2" /></IntLink></Fade></li>
        <li><Fade bottom delay={1100}><IntLink to="/actua" className="hero-cta"><FormattedMessage id="hero_cta3" /></IntLink></Fade></li>
      </ul>
    </div>
    <div className="hero-video">
      <iframe
        src="https://player.vimeo.com/video/329846976?background=1&autoplay=1&loop=1&byline=0&title=0"
        frameBorder={0}
        allowFullScreen>
      </iframe>
    </div>
  </div>
)

export default Hero
