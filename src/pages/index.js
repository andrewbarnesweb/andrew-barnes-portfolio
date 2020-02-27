import React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
import WhatIDo from "../components/what-i-do/what-i-do"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <section id="about-me">
    <About />
    </section>
    <section id="what-i-do">
    <WhatIDo />
    </section>
  </Layout>
)

export default IndexPage
