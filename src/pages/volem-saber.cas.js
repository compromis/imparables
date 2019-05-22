import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import LogoEurope from "../components/elements/logo-europe"

import { FaChevronRight, FaQuestionCircle, FaExclamationCircle, FaComments, FaArrowRight } from "react-icons/fa"

const VolemSaber = () => (
  <Layout>
    <SEO lang="es" title="Volem Saber - Elecciones Europeas 2019 - Compromís" image="https://imparables.compromis.net/images/thumbnail-volemsaber-cas.jpg" />
    <div className="candidate-header candidate-header--europe">
      <div className="container">
        <LogoEurope />
        <div className="candidate-header-link">
          <a href="https://www.compromisoporeuropa.eu" target="_blank" rel="noopener noreferrer">compromisoporeuropa.eu <FaChevronRight /></a>
        </div>
      </div>
    </div>
    <div className="container volem-saber">
      <div className="volem-intro">
        <h2>VolemSaber.eu</h2>
        <h3>El lobby ciudadano en Europa</h3>

        <p>¿Sabías que hay más de 11.000 lobbies registrados en Europa? Las grandes corporaciones invierten cada vez más recursos en influir en las instituciones europeas para defender sus intereses. Mientras tanto, ¿quien defiende tus intereses? ¿Quién defiende a las personas?</p>
        <p>Desde Compromiso por Europa creemos que defender a las personas y solucionar sus problemas del día a día debe ser el papel del Parlamento Europeo, y en especial, de nuestros eurodiputados. Luchar por los intereses colectivos, los de la mayoría, ante los poderosos.</p>
        <p>Por eso queremos convertir a nuestros representantes en el Parlamento Europeo en un instrumento de la ciudadanía, acercando las decisiones que se toman en Europa, en nuestros pueblos y ciudades, pero sobre todo, trasladando las necesidades de la gente al núcleo de la Unión Europea.</p>
      </div>

      <hr />

      <div className="row volem-features">
        <div className="col-md-4">
          <span className="volem-features-icon"><FaQuestionCircle /></span>
          <h3>Pregunta</h3>
          <p>Trasladaremos tus preguntas a las instituciones europeas y te haremos llegar sus respuestas.</p>
        </div>
        <div className="col-md-4">
          <span className="volem-features-icon"><FaExclamationCircle /></span>
          <h3>Decide</h3>
          <p>Podrás votar sobre qué temas quieres que formulen sus intervenciones nuestros eurodiputados.</p>
        </div>
        <div className="col-md-4">
          <span className="volem-features-icon"><FaComments /></span>
          <h3>Dialoga</h3>
          <p>Habla con nuestros eurodiputados sobre su tarea a través de un canal de chat.</p>
        </div>
      </div>

      <hr />

      <div className="volem-form">
          <iframe title="Formulario de propuestas" src="https://docs.google.com/forms/d/e/1FAIpQLSdwk0AhqT2p_mMp-PB20Z03V_t60oeBt1a68hdSzP6W-Moijw/viewform?embedded=true" width="100%" height="930" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>

      <div className="volem-vote">
        <FaArrowRight /> Esta página web es un prototipo. La única forma de hacerlo realidad es votar <strong>Compromiso por Europa</strong> el 26 de mayo.
      </div>
  
      <div className="row">
        <hr className="my-4" />
        <div className="col-md-6 d-flex align-items-stretch">
          <a href="https://www.compromisoporeuropa.eu" target="_blank" rel="noopener noreferrer" className="europe-block europe-block--website">
            Más información en <u>compromisoporeuropa.eu</u> <span className="europe-block-icon"><FaChevronRight /></span>
          </a>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <a href="/docs/programa_europa_val.pdf" target="_blank" rel="noopener noreferrer" className="europe-block europe-block--programa">
            Programa Europa 2019 <span className="europe-block-icon"><FaChevronRight /></span>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default VolemSaber
