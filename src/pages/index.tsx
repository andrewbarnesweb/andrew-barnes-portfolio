import React from "react";

import Layout from "../components/layout";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import WhatIDo from "../components/what-i-do/what-i-do";
import MyWork from "../components/my-work/my-work";
import Blog from "../components/blog/blog";
import Contact from "../components/contact/contact";
import SEO from "../components/seo";

const IndexPage: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Andrew Barnes | Front End Web Developer &amp; UI/UX Designer" />
      <Intro />
      <section id="about-me">
        <About />
      </section>
      <section id="what-i-do">
        <WhatIDo />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="my-work">
        <MyWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default IndexPage;
