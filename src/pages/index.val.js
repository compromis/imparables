import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Candidates from "../components/candidates"
import TakeAction from "../components/take-action"
import BCampgaign from "../components/b-campaign"
import Impagables from "../components/impagables"

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="ca" />
    <Hero />
    <Candidates />
    <BCampgaign />
    <Impagables />
    <TakeAction />
  </Layout>
)

export default IndexPage
