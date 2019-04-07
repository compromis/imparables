import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/val"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No trobat" />
    <div className="container-fluid error-404">
      <h1>La pàgina no existeix</h1>
      <p>No hem trobat la pàgina que busques.</p>
      <p><Link to="/">Torna a la pàgina principal</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
