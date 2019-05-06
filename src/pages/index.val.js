import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Candidates from "../components/candidates"
import TakeAction from "../components/take-action"
import BCampgaign from "../components/b-campaign"
import News from "../components/news"
import CandidatesEurope from "../components/candidates-europe";

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="ca" />
    <Hero />
    <Candidates />
    <CandidatesEurope /> 
    <BCampgaign />
    <TakeAction />
    <News />
  </Layout>
)

export default IndexPage
