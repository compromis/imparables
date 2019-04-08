import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TakeAction from "../components/take-action"
import BCampaign from "../components/b-campaign"
import Candidates from "../components/candidates"

const IndexPage = () => (
  <Layout isFrontPage={true}> 
    <SEO lang="es" />
    <Hero />
    <Candidates />
    <TakeAction />
    <BCampaign />
  </Layout>
)

export default IndexPage
