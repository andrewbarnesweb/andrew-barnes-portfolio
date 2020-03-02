import React from "react"
import style from "./section.module.scss"
import VisibilitySensor from 'react-visibility-sensor';

class Section extends React.Component {
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
      <VisibilitySensor partialVisibility={true} onChange={this.onChange.bind(this)}>
        <div className={this.state.visible ? this.props.background ? style.containerVisibleBackground : style.containerVisible : style.container}>
          <div className={style.content}>
            <h2 className={style.title}>{this.props.title}</h2>
            {this.props.children}
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Section
