import React from "react"
import { FormattedMessage } from "react-intl"
import Logo from "./elements/logo"
import Imparables from "./elements/imparables"

const Footer = () => (
  <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h4><FormattedMessage id="footer_follow" /><a className="footer-logo" href="https://compromis.net/?skip=1"><Logo monochrome={1} /></a></h4>
          <div><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=compromis&amp;show_screen_name=true&amp;show_count=true&amp;size=l&amp;lang=es" className="twitter" frameBorder={0} title="twitter"></iframe></div>
          <div><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fcoaliciocompromis&amp;width=450&amp;layout=standard&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=252515324782640&amp;locale=ca_ES" className="facebook" frameBorder={0} title="facebook"></iframe></div>
        </div>
        <div className="col-lg-6">
          <p><Imparables /></p>
          <p><FormattedMessage id="footer_campaign" values={{ imparables: <a href="/">#Imparables</a>, compromis: <strong>Compromís</strong> }} /></p>
          <p><a href="mailto:info@compromis.net">info@compromis.net</a> | 96 382 66 06 | Plaça del Pilar, 1 - 46001 València</p>
          <p><a href="https://compromis.net/?skip=1">compromis.net</a></p>
        </div>
      </div>  
    </div>
  </div>
)

export default Footer
