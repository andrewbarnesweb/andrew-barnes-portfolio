import React from "react";
import Img, { FluidObject } from "gatsby-image";
import style from "./blog-card.module.scss";

export interface IBlogCardProps {
  link: string;
  title: string;
  date: Date;
  image: FluidObject;
}

const BlogCard: React.FC<IBlogCardProps> = (props: IBlogCardProps): JSX.Element => {
  const { link, title, date, image } = props;

  return (
    <a className={style.container} href={link} title={title}>
      <div className={style.post}>
        <h3 className={style.link}>{title}</h3>
        <span className={style.separator} />
        <div className={style.time}>
          <strong>Posted: </strong>
          <time dateTime={date.toISOString().split("T")[0]}>
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
};

export default BlogCard;
