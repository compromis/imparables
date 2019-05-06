import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Candidates from "../components/candidates"
import LocalSites from "../components/local-sites"
import TakeAction from "../components/take-action"
import BCampgaign from "../components/b-campaign"
import News from "../components/news"

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="ca" />
    <Hero />
    <Candidates />
    <LocalSites compact={true} />
    <BCampgaign />
    <TakeAction />
    <News />
  </Layout>
)

export default IndexPage
