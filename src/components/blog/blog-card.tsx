import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import style from "./blog-card.module.scss";

const BlogCard = ({ link, title, date, image }) => (
  <a className={style.container} href={link} title={title}>
    <div className={style.post}>
      <h3 className={style.link}>{title}</h3>
      <span className={style.separator} />
      <div className={style.time}>
        <strong>Posted: </strong>
        <time dateTime={date}>
          {date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </time>
      </div>
      <Img fluid={image} alt="" />
    </div>
  </a>
);

BlogCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  image: PropTypes.objectOf(PropTypes.object),
};

BlogCard.defaultProps = {
  link: "",
  title: "",
  date: "",
  image: null,
};

export default BlogCard;
