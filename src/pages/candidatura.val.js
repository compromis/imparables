import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import CandidatesEurope from "../components/candidates-europe";
import Candidates from "../components/candidates";
import LocalSites from "../components/local-sites";


const CandidaturaPage = () => (
  <Layout>
    <SEO lang="ca" title="Candidatura - Eleccions Municipals i Europees 2019" />
    <CandidatesEurope />
    <Candidates />
    <LocalSites compact={false} />
  </Layout>
)

export default CandidaturaPage
