import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import style from "./section.module.scss";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      visible: false,
    };
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        visible: true,
      });
    }
  }

  render() {
    const { visible } = this.state;
    const { title } = this.props;
    const { children } = this.props;
    const { background } = this.props;

    let classes;

    if (background) {
      classes = style.containerVisibleBackground;
    } else {
      classes = style.containerVisible;
    }

    return (
      <VisibilitySensor partialVisibility onChange={this.onChange}>
        <div className={visible ? classes : style.container}>
          <div className={style.content}>
            <h2 className={style.title}>{title}</h2>
            {children}
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

Section.propTypes = {
  background: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
};

Section.defaultProps = {
  background: false,
  children: null,
  title: "",
};

export default Section;
