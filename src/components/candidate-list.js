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

const CandidateList = () => (
  <div className="container candidate-list">
    <div className="row candidate-list-header">
      <div className="col-lg-8 candidate-list-title">
        <ImparablesShort />
      </div>
      <div className="col-lg-4 candidate-list-subtitle text-right">
        <h2>Candidatura</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">    
        <CandidateItem to="/monica-oltra" image={MonicaPhoto} name="Mónica Oltra" id="monicaoltra" size="lg" />
      </div>
      <div className="col-lg-6">    
        <CandidateItem to="/joan-baldovi" image={BaldoviPhoto} name="Joan Baldoví" id="joanbaldovi" size="lg" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">    
        <CandidateItem image={AitanaPhoto} name="Aitana Mas" id="aitanamas" social={{facebook: 'aitana.mas', twitter: 'AitanaMas', instagram: 'aitana_mas'}} size="sm" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={FranPhoto} name="Fran Ferri" id="franferri" social={{facebook: 'fraferfa', twitter: 'franferri_', instagram: 'franferri'}} size="sm" />
      </div>
      <div className="col-lg-4">    
        <CandidateItem image={MarzaPhoto} name="Vicent Marzà" id="vicentmarza" social={{facebook: 'vicentmarzaibanez', twitter: 'VicentMarza', instagram: 'vicentmarza'}} size="sm" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 offset-lg-2">
        <CandidateItem image={IgnasiPhoto} name="Ignasi Candela" id="ignasicandela" social={{facebook: 'IgnasiCandelaSerna', twitter: 'IgnasiCandela', instagram: 'ignasi_candela_serna'}} size="sm" />
      </div>
      <div className="col-lg-4">
        <CandidateItem image={MartaPhoto} name="Marta Sorlí" id="martasorli" social={{facebook: 'martasorlifresquet', twitter: 'MartaSorli_', instagram: 'martasorli_'}} size="sm" />
      </div>
    </div>
  </div>
)

export default CandidateList
