import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Presidenta from "../components/elements/presidenta"
import MonicaPhoto from "../images/candidates/monica-oltra-2.jpg"
import MonicaSignature from "../images/candidates/signatura-monica.svg"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO lang="ca" title="Mónica Oltra" />
    <div className="container candidate-page monica-oltra">
      <div className="row">
        <div className="col-12 candidate-header">
          <Presidenta />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 candidate-photo">
          <div className="candidate-photo">
            <img src={MonicaPhoto} alt="Monica Oltra" />
          </div>
          <div className="candidate-name">
            <h3>Mónica Oltra</h3>
            <p>Candidata a la Presidència de la Generalitat</p>
            
            <div className="candidate-social">
              <ul>
                <li className="facebook"><a href="https://www.facebook.com/monicaoltra/" target="_blank" rel="noopener noreferrer"><FaFacebook /> Mónica Oltra</a></li>
                <li className="twitter"><a href="https://twitter.com/monicaoltra" target="_blank" rel="noopener noreferrer"><FaTwitter /> @monicaoltra</a></li>
                <li className="instagram"><a href="https://www.instagram.com/monicaoltra_/" target="_blank" rel="noopener noreferrer"><FaInstagram /> @monicaoltra_</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="candidate-letter">
            <p>Estimada amiga,<br />estimat amic:</p>

            <p>Fa quatre anys et vaig demanar el teu compromís per a combatre amb valentia els corruptes i treballar infatigablement per recuperar els drets de les persones que la crisi i els mals governs havien abandonat.</p>
            <p>El vot valent de milers de persones va produir un canvi polític tan desitjat com necessari. Gràcies a això hem millorat la vida de la gent des del govern de la Generalitat: les famílies ja no paguen els llibres del col·legi, les persones majors ja no paguen els medicaments, les persones en situació de dependència ja no esperen anys i anys a ser ateses ni paguen el copagament confiscatori, molta gent jove ha trobat faena i donem suport a les persones empresàries i autònomes que cada dia alcen la persiana amb esperança.</p>
            <p>Estem fent justícia amb les víctimes de la crisi, però també hem protegit el nostre territori, lluitem contra els efectes del canvi climàtic i ara som exemple de transparència i bon govern.</p>
            <p>Per això i tot el que queda per fer, hui te torne a demanar el teu compromís. I ho faig amb la mateixa il·lusió, alegria i estima. Per a que la política siga una ferramenta per a la felicitat de les persones.</p>
            <p>Perquè amb el teu vot, serem imparables.</p>

            <p><img src={MonicaSignature} alt="Signatura de Mónica Oltra" className="candidate-signature" /></p>
            <p>Mónica Oltra</p>
          </div>
        </div>
        <div className="col-md-12">
          <hr className="my-4" />

          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vd_G_a_uVN0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Vídeo 2 anys" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
