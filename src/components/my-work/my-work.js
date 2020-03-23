import React from "react"
import Section from "../section/section"
import Work from "./work"
import { StaticQuery, graphql } from "gatsby"

class MyWork extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            rfs: file(relativePath: { eq: "my-work/rfs.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            playCricket: file(relativePath: { eq: "my-work/play-cricket.png" }) {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            economist: file(relativePath: { eq: "my-work/economist.jpg" }) {
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
            <Section title="My work">
              <Work
                title="Russell Financial Solutions"
                type="Web design and development"
                image={data.rfs.childImageSharp.fluid}
                year="2020"
                skills="Design / Development / Sketch / Grav"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Work>
              <Work
                title="Play Cricket Concept"
                type="Web design and development"
                image={data.playCricket.childImageSharp.fluid}
                year="2020"
                alternate={true}
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Work>
              <Work
                title="The Economist"
                type="Web design and development"
                image={data.economist.childImageSharp.fluid}
                year="2020"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Work>
            </Section>
          </>
        )}
      />

    );
  }
}

export default MyWork
