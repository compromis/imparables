import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TakeAction from "../components/take-action"

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="es" />
    <Hero />
    <TakeAction />
  </Layout>
)

export default IndexPage
