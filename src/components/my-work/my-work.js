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
                <p>
                  A full design and development project for an Independent Mortgage and Protection Advice company in the UK.
                </p>
                <p>
                  The site was designed in Sketch, using InVision to get sign off from the client. And given some requirements about adding news stories,
                  a <a href="https://getgrav.org/" title="GRAV CMS">flat file CMS system</a> was used to manage the content.
                </p>
                <p>
                  <a href="https://rfs-ltd.co.uk" title="Russell Financial Solutions website"><strong>View website</strong></a>.
                </p>
              </Work>
              <Work
                title="Play Cricket Concept"
                type="UI design"
                image={data.playCricket.childImageSharp.fluid}
                year="2016"
                alternate={true}
              >
                <p>
                  Being a failed local cricketer and interested in results from many clubs around the country, I wanted a simple app that would allow me to quickly view results.
                </p>
                <p>
                  The app would allow me to track teams and leagues from Play Cricket, and see results and scorecards. So I set about designing some screens in Sketch for a potential iOS based solution.
                </p>
              </Work>
              <Work
                title="The Economist"
                type="Web development"
                image={data.economist.childImageSharp.fluid}
                year="2016"
              >
                <p>
                  An infographic was created to explore an aeroplane of the future. Working closely with the designer, the template and responsive infographic were created using HTML5 and jQuery.
                </p>
              </Work>
            </Section>
          </>
        )}
      />

    );
  }
}

export default MyWork
