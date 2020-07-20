import React from "react"
import style from "./blog.module.scss"
import BlogCard from "./blog-card"
import Section from "../section/section"
import { StaticQuery, graphql } from "gatsby"

class Blog extends React.Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            redesign: file(relativePath: { eq: "blog/redesign.png" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bemSass: file(relativePath: { eq: "blog/bem-and-sass.png" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            focusIndicators: file(relativePath: { eq: "blog/focus-indicators.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            variableNames: file(relativePath: { eq: "blog/code.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Section title="Blog" background={true}>
              <div className={style.posts}>
                <BlogCard
                  title="Website update (Part 2): The design"
                  date={new Date("2020-02-21")}
                  link="https://medium.com/@andrew_barnes/website-update-part-2-the-design-d85b18c66470?source=friends_link&sk=661dbbbaab28cda70ae8d781b5d6ca28"
                  image={data.redesign.childImageSharp.fluid}
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
                <BlogCard
                  title="Colour variable names that scale"
                  date={new Date("2019-06-02")}
                  link="https://medium.com/swlh/colour-variable-names-that-scale-28663ae04052?source=friends_link&sk=b3627dc527e26c499778b7d186651301"
                  image={data.variableNames.childImageSharp.fluid}
                />
              </div>
              <div><a className={style.link} href="https://medium.com/@andrew_barnes" title="Medium Posts">See all posts</a></div>
            </Section>
          </>
        )}
      />

    );
  }
}

export default Blog
