import React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
  </Layout>
)

export default IndexPage
