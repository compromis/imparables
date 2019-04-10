import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import CandidateList from "../components/candidate-list";

const CandidaturaPage = () => (
  <Layout>
    <SEO lang="es" title="Candidatura" />
    <CandidateList />
  </Layout>
)

export default CandidaturaPage
