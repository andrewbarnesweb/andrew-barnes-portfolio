import React from "react"
import style from "./work.module.scss"
import Img from "gatsby-image"

class Work extends React.Component {

  render() {
    return (
      <div className={style.work}>
        <div className={this.props.alternate ? style.detailsAlternate : style.details}>
          <h3>{this.props.title}</h3>
          <h4>{this.props.type}</h4>
          <time className={style.time} dateTime={this.props.year}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
              <path d="M13.333,13.333H10.667V10.667h2.667Zm-4-6.667H6.667V9.333H9.333Zm4,0H10.667V9.333h2.667Zm-8,4H2.667v2.667H5.333Zm4,0H6.667v2.667H9.333Zm-4-4H2.667V9.333H5.333ZM16,1.333V16H0V1.333H2V2A1.333,1.333,0,0,0,4.667,2V1.333h6.667V2A1.333,1.333,0,1,0,14,2V1.333Zm-1.333,4H1.333v9.333H14.667ZM13.333.667A.667.667,0,0,0,12,.667V2a.667.667,0,0,0,1.333,0ZM4,2A.667.667,0,1,1,2.667,2V.667A.667.667,0,1,1,4,.667Z" />
            </svg>
            {this.props.year}
          </time>
          {this.props.children}
          <div className={style.skills}>{this.props.skills}</div>
        </div>
        <div className={this.props.alternate ? style.imageAlternate : style.image}>
          <Img fluid={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Work
