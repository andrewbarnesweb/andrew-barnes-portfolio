import React from "react"
import style from "./my-work.module.scss"
import Section from "../section/section"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class MyWork extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            rfs: file(relativePath: { eq: "my-work/rfs.png" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Section title="My work">
              <div className={style.work}>
                <div className={style.details}>
                  <h3>Russell Financial Solutions</h3>
                  <h4>Web design and development</h4>
                  <time dateTime="2020">2020</time>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={style.image}>
                  <Img fluid={data.rfs.childImageSharp.fluid} />
                </div>
              </div>

              <div className={style.work}>
                <div className={style.detailsAlternate}>
                  <h3>Russell Financial Solutions</h3>
                  <h4>Web design and development</h4>
                  <time dateTime="2020">2020</time>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className={style.imageAlternate}>
                  <Img fluid={data.rfs.childImageSharp.fluid} />
                </div>
              </div>
            </Section>
          </>
        )}
      />

    );
  }
}

export default MyWork
