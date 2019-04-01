import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Programa from "../templates/programa"

const ProgramaPage = () => (
  <Layout>
    <SEO lang="es" title="Programa 2019" />
    <Programa />
  </Layout>
)

export default ProgramaPage
