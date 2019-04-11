import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import ImparablesShort from "../components/elements/imparables-short"
import BaldoPhoto from "../images/candidates/joan-baldovi-2.jpg"
import BaldoSignature from "../images/candidates/signature-baldo.svg"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO lang="es" title="Joan Baldoví" />
    <div className="container candidate-page monica-oltra">
      <div className="row">
        <div className="col-12 candidate-header">
          <ImparablesShort />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 candidate-photo">
          <div className="candidate-photo">
            <img src={BaldoPhoto} alt="Joan Baldoví" />
          </div>
          <div className="candidate-name">
            <h3>Joan Baldoví</h3>
            <p>Candidat al Congrés</p>
            
            <div className="candidate-social">
              <ul>
                <li className="facebook"><a href="https://www.facebook.com/joanbaldovi/" target="_blank" rel="noopener noreferrer"><FaFacebook /> Joan Baldoví</a></li>
                <li className="twitter"><a href="https://twitter.com/joanbaldovi/" target="_blank" rel="noopener noreferrer"><FaTwitter /> @joanbaldovi</a></li>
                <li className="instagram"><a href="https://www.instagram.com/joanbaldovi/" target="_blank" rel="noopener noreferrer"><FaInstagram /> @joanbaldovi</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="candidate-letter">
            <p>Hola!</p>

            <p>Sóc Joan Baldoví i em presente a les eleccions del 28 d’abril per a ser la teua veu a Madrid i defensar els interessos valencians. Els interessos de totes i tots.</p>
            <p>Durant estos anys Compromís hem demostrat al Congrés i el Senat que els valencians i valencianes som un poble digne, honest i treballador. Hem explicat a tota Espanya el que hem aconseguit a la nostra terra: acabar amb la corrupció del Partit Popular i posar en el centre de la política a les persones i el seu benestar. I hem treballat sense descans per a traslladar a l’Estat el que ja funciona a la Generalitat i als Ajuntaments valencians: acords plurals i estables de forces progressistes per a millorar la vida de la gent.</p>
            <p>En les últimes dècades, els valencians i valencianes hem rebut menys recursos dels que necessitem per culpa d’un model de finançament autonòmic que ens discrimina. No volem ser més que ningú, però tampoc volem ser ciutadans de segona. Volem un tracte just per a invertir més recursos en sanitat, educació, serveis socials i creació d’ocupació. Cal a Madrid una veu valenciana, nítida, valenta i decidida per a acabar amb esta injustícia.</p>
            <p>El pròxim 28 d’abril, amb el teu vot, podem fer que les coses canvien. Amb el teu vot pots fer possible un grup parlamentari valencià potent amb més diputats i diputades que coneguen la realitat dels nostres pobles i ciutats, que entenguen els problemes que enfrontem en el dia a dia i que s’impliquen en buscar solucions. Un grup que quan haja de prendre decisions no ho faça pensant en el que manen des de la seu del partit a Madrid o Barcelona, sinó que ho faça pensant en la vida dels 4.963.703 de valencians i valencianes. Un grup que defense els drets socials de totes i tots i plante cara a l’odi i la intolerància.</p>
            <p>Amb el teu vot, podrem aconseguir un grup parlamentari que siga aliat del pròxim govern valencià presidit per Mónica Oltra; i que siga garantia de que la dreta no torne ni al govern central ni a les institucions valencianes.</p>
            <p>Et demane que el pròxim 28 d’abril votes amb il·lusió a qui penses que millor ens pot representar a Madrid. Si finalment ho fas per Compromís, em compromet a que el teu vot siga útil tots i cadascun dels dies de la legislatura. Amb el teu vot, serem imparables.</p>

            <p><img src={BaldoSignature} alt="Signatura de Joan Baldoví" className="candidate-signature" /></p>
            <p>Joan Baldoví</p>
          </div>
        </div>
        <div className="col-md-12">
          <hr className="my-4" />

          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rwijYPlLAsE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Vídeo 2 anys" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
