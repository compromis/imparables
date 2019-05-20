import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import LogoEurope from "../components/elements/logo-europe"

import { FaChevronRight, FaQuestionCircle, FaExclamationCircle, FaComments } from "react-icons/fa"

const VolemSaber = () => (
  <Layout>
    <SEO lang="es" title="Volem Saber - Eleccions Europees 2019 - Compromís" image="https://imparables.compromis.net/images/europe.jpg" />
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
        <h3>El lobby ciutadà a Europa</h3>

        <p>Sabies que n’hi ha més d’11.000 lobbies registrats a Europa? Les grans corporacions inverteixen cada vegada més recursos en influir en les institucions europees per defensar els seus interessos. Mentrestant, qui defensa els teus interessos? Qui defensa a les persones?</p>
        <p>Des de Compromís per Europa creiem que defensar les persones i solucionar els seus problemes del dia a dia ha de ser el paper del Parlament Europeu, i en especial, dels nostres eurodiputats. Lluitar pels interessos col·lectius, els de la majoria, davant dels poderosos.</p>
        <p>Per això volem convertir als nostres representants al Parlament Europeu en un instrument de la ciutadania, acostant les decisions que es prenen a Europa als nostres pobles i ciutats, però sobretot, traslladant les necessitats de la gent al nucli de la Unió Europea.</p>
      </div>

      <hr />

      <div className="row volem-features">
        <div className="col-md-4">
          <span className="volem-features-icon"><FaQuestionCircle /></span>
          <h3>Pregunta</h3>
          <p>Traslladarem les teues preguntes a les institucions europees i et farem arribar les seues respostes.</p>
        </div>
        <div className="col-md-4">
          <span className="volem-features-icon"><FaExclamationCircle /></span>
          <h3>Decideix</h3>
          <p>Podràs votar sobre quins temes vols que formulen les seues intervencions els nostres eurodiputats</p>
        </div>
        <div className="col-md-4">
          <span className="volem-features-icon"><FaComments /></span>
          <h3>Dialoga</h3>
          <p>Parla amb els nostres eurodiputats sobre la seua tasca a través d’un canal de xat.</p>
        </div>
      </div>

      <hr />

      <div className="volem-form">
          <iframe title="Formulari de propostes" src="https://docs.google.com/forms/d/e/1FAIpQLSdwk0AhqT2p_mMp-PB20Z03V_t60oeBt1a68hdSzP6W-Moijw/viewform?embedded=true" width="100%" height="930" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
  
      <div className="row">
        <hr className="my-4" />
        <div className="col-md-6 d-flex align-items-stretch">
          <a href="https://www.compromisoporeuropa.eu" target="_blank" rel="noopener noreferrer" className="europe-block europe-block--website">
            Més informació a <u>compromisoporeuropa.eu</u> <span className="europe-block-icon"><FaChevronRight /></span>
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
