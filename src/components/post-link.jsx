import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
    <Img width={800} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
  </div>
);
export default PostLink;
