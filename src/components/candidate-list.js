import React from "react"
import ImparablesShort from "./elements/imparables-short"
import CandidateItem from "./candidate-list-item"
import MonicaPhoto from "../images/candidates/monica-oltra.jpg"
import BaldoviPhoto from "../images/candidates/joan-baldovi.jpg"

//import { FormattedMessage } from "react-intl"
//import Fade from "react-reveal/Fade"

const CandidateList = () => (
  <div className="container candidate-list">
    <ImparablesShort />
    <div class="row">
      <div className="col-lg-6">    
        <CandidateItem image={MonicaPhoto} name="Mónica Oltra" description="Candidata a la presidència" />
      </div>
      <div className="col-lg-6">    
        <CandidateItem image={BaldoviPhoto} name="Joan Baldoví" description="Candidat al Congrés" />
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4">    
        <CandidateItem image={MonicaPhoto} name="Mónica Oltra" description="Candidata a la presidència" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={BaldoviPhoto} name="Joan Baldoví" description="Candidat al Congrés" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={BaldoviPhoto} name="Joan Baldoví" description="Candidat al Congrés" />
      </div>
    </div>
    <div class="row">
      <div className="col-lg-4">    
        <CandidateItem image={MonicaPhoto} name="Mónica Oltra" description="Candidata a la presidència" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={BaldoviPhoto} name="Joan Baldoví" description="Candidat al Congrés" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={BaldoviPhoto} name="Joan Baldoví" description="Candidat al Congrés" />
      </div>
    </div>
    


  </div>
)

export default CandidateList
