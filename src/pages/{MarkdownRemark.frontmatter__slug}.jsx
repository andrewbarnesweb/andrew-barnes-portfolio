import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import * as style from "./post.module.scss";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container" style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.article} style={{ maxWidth: "680px", margin: "0 48px" }}>
        <p>
          <a href="/">Home</a> | <a href="/blog">Blog</a>
        </p>
        <time>{frontmatter.date}</time>
        <h1>{frontmatter.title}</h1>
        <p className={style.subtitle}>{frontmatter.subtitle && frontmatter.subtitle}</p>
        <Img
          width={800}
          className={style.featuredImage}
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
        />
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
