import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as style from "./blog.module.scss";
import BlogCard from "./blog-card";
import Section from "../section/section";

const Blog = () => (
  <StaticQuery
    query={graphql`
      query {
        bemGrandchildren: file(relativePath: { eq: "blog/bem-grandchildren.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 150, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bemSass: file(relativePath: { eq: "blog/bem-and-sass.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 150, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        focusIndicators: file(relativePath: { eq: "blog/focus-indicators.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 150, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wcagAccessibility: file(relativePath: { eq: "blog/wcag-accessibility.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 150, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Section anchor="latest-posts" title="Latest Posts" background>
          <div className={style.posts}>
            <BlogCard
              title="BEM CSS Tip: Dealing with grandchild elements"
              date={new Date("2021-05-13")}
              link="https://andrew-barnes.medium.com/bem-css-tip-dealing-with-grandchild-elements-d7378b51e722"
              image={data.bemGrandchildren.childImageSharp.fluid}
            />
            <BlogCard
              title="WCAG: Accessible colour and contrast ratios"
              date={new Date("2021-03-30")}
              link="https://bootcamp.uxdesign.cc/wcag-accessible-colour-and-contrast-ratios-5e94ea3f81f4"
              image={data.wcagAccessibility.childImageSharp.fluid}
            />
            <BlogCard
              title="Accessible custom focus indicators"
              date={new Date("2019-07-02")}
              link="https://uxdesign.cc/accessible-custom-focus-indicators-da4768d1fb7b?source=friends_link&sk=6cfd4853877b935c7cf6fce80da9afa0"
              image={data.focusIndicators.childImageSharp.fluid}
            />
            <BlogCard
              title="BEM and SASS: A perfect match"
              date={new Date("2019-06-19")}
              link="https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894?source=friends_link&sk=45b6d470cdfff5d4635c03201fc5038c"
              image={data.bemSass.childImageSharp.fluid}
            />
          </div>
          <div>
            <a className={style.link} href="/blog" title="All blog posts">
              See all posts
            </a>
          </div>
        </Section>
      </>
    )}
  />
);

export default Blog;
