import React from "react"
import style from "./progress.module.scss"

class Progress extends React.Component {
  render() {
    return (
      <div className={style.progress}>
        <div style={{ width: this.props.start ? this.props.actual : this.props.initial }}></div>
      </div>
    );
  }
}

export default Progress
