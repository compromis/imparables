import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import CandidatesEurope from "../components/candidates-europe";
import Candidates from "../components/candidates";
import LocalSites from "../components/local-sites";

const CandidaturaPage = () => (
  <Layout>
    <SEO lang="es" title="Candidatura - Elecciones Municipales y Europeas 2019" />
    <CandidatesEurope />
    <Candidates />
    <LocalSites compact={false} />
  </Layout>
)

export default CandidaturaPage
