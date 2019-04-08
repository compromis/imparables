import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TakeAction from "../components/take-action"
import Candidates from "../components/candidates"

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="ca" />
    <Hero />
    <Candidates />
    <TakeAction />
  </Layout>
)

export default IndexPage
