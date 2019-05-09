import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import ImparablesShort from "../components/elements/imparables-short"
import SebastiaPhoto from "../images/candidates/sebastia-2.jpg"

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const SebastiaPage = () => (
  <Layout>
    <SEO lang="es" title="Jordi Sebastià - Elecciones Europeas 2019" />
    <div className="container candidate-page monica-oltra">
      <div className="row">
        <div className="col-12 candidate-header">
          <ImparablesShort />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 candidate-photo">
          <div className="candidate-photo">
            <img src={SebastiaPhoto} alt="Jordi Sebastià" />
          </div>
          <div className="candidate-name">
            <h3>Jordi Sebastià</h3>
            <p>Candidat al Parlament Europeu</p>
            
            <div className="candidate-social">
              <ul>
                <li className="facebook"><a href="https://www.facebook.com/sebastiajordi/" target="_blank" rel="noopener noreferrer"><FaFacebook /> Jordi Sebastià</a></li>
                <li className="twitter"><a href="https://twitter.com/Sebastia_Jordi/" target="_blank" rel="noopener noreferrer"><FaTwitter /> @Sebastia_Jordi</a></li>
                <li className="instagram"><a href="https://www.instagram.com/jordi_sebastia_talavera/" target="_blank" rel="noopener noreferrer"><FaInstagram /> @jordi_sebastia_talavera</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="candidate-letter">
            <p>Hola!</p>

            <p>Sóc Jordi Sebastià i em presente a les eleccions del 26 de maig al Parlament Europeu per a ser la teua veu en Europa. Els valencians i valencianes necessitem una representació potent en les institucions europees perquè les nostres necessitats del dia a dia estiguen presents en les decisions que es prenen. Perquè ningú ho farà per nosaltres, com s’ha demostrat amb la defensa del nostre sector de la taronja.</p>
            <p>En els últims cinc anys, des de Compromís hem demostrat amb la nostra tasca a Europa que som l’única força que treballa per les persones d’esta terra i pels seus drets. Com fa Mónica Oltra, com fa Joan Baldoví, com fan les nostres alcaldes i alcaldesses i regidors i regidores a tots els pobles i ciutats.</p>
            <p>El pròxim 26 de maig, amb el teu vot, pots fer que les persones de les comarques de Castelló, València i Alacant tinguem una veu forta a Europa. Amb el teu vot lluitarem per una Europa de les persones enfront de l’Europa dels poderosos. Perquè amb tu, som IMPARABLES.</p>

            <p>Jordi Sebastià</p>
          </div>
        </div>
        <div className="col-md-12">
          <hr className="my-4" />

          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ql4Moxdos3k" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Vídeo 2 anys" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SebastiaPage
