import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TakeAction from "../components/take-action"

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="ca" />
    <Hero />
    <TakeAction />
  </Layout>
)

export default IndexPage
