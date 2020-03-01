import React from "react"
import style from "./my-work.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import VisibilitySensor from 'react-visibility-sensor';

class MyWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        visible: true
      });
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            rfs: file(relativePath: { eq: "my-work/rfs.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <VisibilitySensor partialVisibility={true} onChange={this.onChange.bind(this)}>
              <div className={this.state.visible ? style.containerVisible : style.container}>
                <h2 className={style.title}>My work</h2>

                <div className={style.work}>
                  <div className={style.details}>
                    <h3>Russell Financial Solutions</h3>
                    <h4>Web design and development</h4>
                    <time datetime="2020">2020</time>
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
                    <time datetime="2020">2020</time>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                  <div className={style.imageAlternate}>
                    <Img fluid={data.rfs.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
            </VisibilitySensor>
          </>
        )}
      />

    );
  }
}

export default MyWork
