import React from "react"
import style from "./blog-card.module.scss"

class BlogCard extends React.Component {

  render() {
    return (
      <div className={style.post}>
        <h3><a className={style.link} href={this.props.link}>{this.props.title}</a></h3>
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
        <a href={this.props.link} title={this.props.title}>
          <img src={this.props.image} alt="" />
        </a>
      </div>
    );
  }
}

export default BlogCard
