import React from "react"
import style from "./blog-card.module.scss"

class BlogCard extends React.Component {

  render() {
    return (
      <a className={style.container} href={this.props.link} title={this.props.title}>
        <div className={style.post}>
          <h3 className={style.link}>{this.props.title}</h3>
          <span className={style.separator}></span>
          <div className={style.time}>
            <strong>Posted: </strong>
            <time datetime={this.props.date}>
              {this.props.date.toLocaleDateString('en-GB', {
                year: "numeric",
                month: "short",
                day: "2-digit"
              })}
            </time>
          </div>
            <img src={this.props.image} alt="" />
        </div>
      </a>
    );
  }
}

export default BlogCard
