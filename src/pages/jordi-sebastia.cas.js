import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import LogoEurope from "../components/elements/logo-europe"
import SebastiaPhoto from "../images/candidates/sebastia-2.jpg"

import { FaFacebook, FaTwitter, FaInstagram, FaChevronRight } from "react-icons/fa"

const SebastiaPage = () => (
  <Layout>
    <SEO lang="es" title="Jordi Sebastià - Elecciones Europeas 2019" />
    <div className="candidate-header candidate-header--europe">
      <div className="container">
        <LogoEurope />
        <div className="candidate-header-link">
          <a href="https://www.compromisoporeuropa.org" target="_blank" rel="noopener noreferrer">compromisoporeuropa.eu <FaChevronRight /></a>
        </div>
      </div>
    </div>
    <div className="container candidate-page jordi-sebastia">
      <div className="row">
        <div className="col-md-4 candidate-photo">
          <div className="candidate-photo">
            <img src={SebastiaPhoto} alt="Jordi Sebastià" />
          </div>
          <div className="candidate-name">
            <h3>Jordi Sebastià</h3>
            <p>Candidato al Parlamento Europeo</p>

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
            <p>¡Hola!</p>

            <p>Soy Jordi Sebastià y me presento a las elecciones del 26 de mayo al Parlamento Europeo para ser tu voz en Europa. Los valencianos y valencianas necesitamos una representación potente en las instituciones europeas porque nuestras necesidades del día a día estén presentes en las decisiones que se toman. Porque nadie lo hará por nosotros, como se ha demostrado con la defensa de nuestro sector de la naranja.</p>
            <p>En los últimos cinco años, desde Compromís hemos demostrado con nuestra labor en Europa que somos la única fuerza que trabaja por las personas de esta tierra y por sus derechos. Como hace Mónica Oltra, como hace Joan Baldoví, como hacen nuestros alcaldes y alcaldesas y nuestros concejales y concejalas en todos los pueblos y ciudades.</p>
            <p>El próximo 26 de mayo, con tu voto, puedes hacer que las personas de las comarcas de Castellón, Valencia y Alicante tengamos una voz fuerte en Europa. Con tu voto lucharemos por una Europa de los derechos frente a la Europa de los poderosos. Porque contigo, somos IMPARABLES.</p>

            <p>Jordi Sebastià</p>
          </div>
        </div>
      </div>
      <div className="row">
        <hr className="my-4" />
        <div className="col-md-6 d-flex align-items-stretch">
          <a href="https://www.compromisoporeuropa.eu" target="_blank" rel="noopener noreferrer" className="europe-block europe-block--website">
            Más información en <u>compromisoporeuropa.eu</u> <span className="europe-block-icon"><FaChevronRight /></span>
          </a>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <a href="/docs/programa_europa_cas.pdf" target="_blank" rel="noopener noreferrer" className="europe-block europe-block--programa">
            Programa Europa 2019 <span className="europe-block-icon"><FaChevronRight /></span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
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
