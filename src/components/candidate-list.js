import React from "react"
import ImparablesShort from "./elements/imparables-short"
import CandidateItem from "./candidate-list-item"

import MonicaPhoto from "../images/candidates/monica-oltra.jpg"
import BaldoviPhoto from "../images/candidates/joan-baldovi.jpg"
import AitanaPhoto from "../images/candidates/aitana-mas.jpg"
import FranPhoto from "../images/candidates/fran-ferri.jpg"
import MarzaPhoto from "../images/candidates/vicent-marza.jpg"
import IgnasiPhoto from "../images/candidates/ignasi-candela.jpg"
import MartaPhoto from "../images/candidates/marta-sorli.jpg"

//import { FormattedMessage } from "react-intl"
//import Fade from "react-reveal/Fade"

const CandidateList = () => (
  <div className="container candidate-list">
    <ImparablesShort />
    <div class="row">
      <div className="col-lg-6">    
        <CandidateItem to="/monica-oltra" image={MonicaPhoto} name="Mónica Oltra" description="Candidata a la presidència" size="lg" />
      </div>
      <div className="col-lg-6">    
        <CandidateItem to="/joan-baldovi" image={BaldoviPhoto} name="Joan Baldoví" description="Candidat al Congrés" size="lg" />
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4">    
        <CandidateItem image={AitanaPhoto} name="Aitana Mas" description="Candidat al Congrés" size="sm" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={FranPhoto} name="Fran Ferri" description="Candidat al Congrés" size="sm" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={MartaPhoto} name="Marta Sorlí" description="Candidat al Congrés" size="sm" />
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4">    
        <CandidateItem image={MarzaPhoto} name="Vicent Marzà" description="Candidata a la presidència" size="sm" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={IgnasiPhoto} name="Ignasi Candela" description="Candidat al Congrés" size="sm" />
      </div>
    </div>
    


  </div>
)

export default CandidateList
