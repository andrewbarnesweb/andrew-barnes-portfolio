import React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
  </Layout>
)

export default IndexPage
