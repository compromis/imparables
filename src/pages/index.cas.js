import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Candidates from "../components/candidates"
import TakeAction from "../components/take-action"
import BCampaign from "../components/b-campaign"
import Impagables from "../components/impagables"

const IndexPage = () => (
  <Layout isFrontPage={true}> 
    <SEO lang="es" />
    <Hero />
    <Candidates />
    <BCampaign />
    <Impagables />
    <TakeAction />
  </Layout>
)

export default IndexPage
