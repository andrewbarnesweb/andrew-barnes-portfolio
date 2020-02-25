import React from "react"
import style from "./what-i-do.module.scss"
import VisibilitySensor from 'react-visibility-sensor';

class WhatIDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "0"
    }
  }

  onChange(isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    if (isVisible) {
      this.setState({
        width: "0"
      });
    }
  }

  render() {
    return (
      <div className={style.bar}>
        <div style={{ width: this.state.width }}></div>
      </div>
    );
  }
}

export default WhatIDo
