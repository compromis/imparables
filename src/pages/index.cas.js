import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Candidates from "../components/candidates"
import LocalSites from "../components/local-sites"
import TakeAction from "../components/take-action"
import BCampaign from "../components/b-campaign"
import News from "../components/news"
import CandidatesEurope from "../components/candidates-europe";

const IndexPage = () => (
  <Layout isFrontPage={true}> 
    <SEO lang="es" />
    <Hero />
    <Candidates />
    <LocalSites compact={true} />
    <CandidatesEurope />
    <BCampaign />
    <TakeAction />
    <News />
  </Layout>
)

export default IndexPage
