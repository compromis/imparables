import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Presidenta from "../components/elements/presidenta"
import MonicaPhoto from "../images/candidates/monica-oltra-2.jpg"
import MonicaSignature from "../images/candidates/signatura-monica.svg"
import FranPhoto from "../images/candidates/fran-ferri.jpg"
import AitanaPhoto from "../images/candidates/aitana-mas.jpg"
import MarzaPhoto from "../images/candidates/vicent-marza.jpg"
import CandidateItem from "../components/candidate-list-item"

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO lang="es" title="Mónica Oltra" />
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
            <p>Candidata a la Presidencia de la Generalitat</p>
            
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
            <p>Estimada amiga,<br />estimado amigo:</p>

            <p>Hace cuatro años te pedí tu compromiso para combatir con valentía los corruptos y trabajar infatigablemente para recuperar los derechos de las personas que la crisis y los malos gobiernos habían abandonado.</p>
            <p>El voto valiente de miles de personas produjo un cambio político tan deseado como necesario. Gracias a ello hemos mejorado la vida de la gente desde el gobierno de la Generalitat: las familias ya no pagan los libros del colegio, las personas mayores ya no pagan los medicamentos, las personas en situación de dependencia ya no esperan años y años a ser atendidas ni pagan el copago confiscatorio, mucha gente joven ha encontrado trabajo y apoyamos a las personas empresarias y autónomas que cada día levantan la persiana con esperanza.</p>
            <p>Estamos haciendo justicia con las víctimas de la crisis, pero también hemos protegido nuestro territorio, luchamos contra los efectos del cambio climático y ahora somos ejemplo de transparencia y buen gobierno.</p>
            <p>Por eso y todo lo que queda por hacer, hoy te vuelvo a pedir tu compromiso. Y lo hago con la misma ilusión, alegría y amor. Para que la política sea una herramienta para la felicidad de las personas, llenemos las urnas de sonrisas.</p>
            <p>Porque con tu voto, seremos imparables.</p>

            <p><img src={MonicaSignature} alt="Signatura de Mónica Oltra" className="candidate-signature" /></p>
            <p>Mónica Oltra</p>
          </div>
        </div>
        <div className="col-md-12">
          <hr className="my-4" />

          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XJDvtP1PM8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Vídeo 2 anys" allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-md-12 candidate-more">
          <hr className="my-4" />

          <h3>Candidatura a Corts</h3>
          <div className="row candidate-list">
            <div className="col-md-4">
              <CandidateItem image={AitanaPhoto} name="Aitana Mas" id="aitanamas"  social={{facebook: 'aitana.mas', twitter: 'AitanaMas', instagram: 'aitana_mas'}} size="sm" />
            </div>
            <div className="col-md-4">
              <CandidateItem image={FranPhoto} name="Fran Ferri" id="franferri" social={{facebook: 'fraferfa', twitter: 'franferri_', instagram: 'franferri'}} size="sm" />
            </div>
            <div className="col-md-4">
              <CandidateItem image={MarzaPhoto} name="Vicent Marzà" id="vicentmarza" social={{facebook: 'vicentmarzaibanez', twitter: 'VicentMarza', instagram: 'vicentmarza'}} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
