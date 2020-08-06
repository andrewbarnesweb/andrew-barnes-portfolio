import React from "react";

import Layout from "../components/layout";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import WhatIDo from "../components/what-i-do/what-i-do";
import MyWork from "../components/my-work/my-work";
import Blog from "../components/blog/blog";
import Contact from "../components/contact/contact";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Andrew Barnes | Front End Web Developer &amp; UI/UX Designer" />
    <Intro />
    <About />
    <WhatIDo />
    <Blog />
    <MyWork />
    <Contact />
  </Layout>
);

export default IndexPage;
