import React from "react";
import PropTypes from "prop-types";
import style from "./progress.module.scss";

const Progress = ({ start, actual, initial }) => (
  <div className={style.progress}>
    <div data-testid="progress" style={{ width: start ? actual : initial }} />
  </div>
);

Progress.propTypes = {
  start: PropTypes.bool,
  actual: PropTypes.string,
  initial: PropTypes.string,
};

Progress.defaultProps = {
  start: false,
  actual: "",
  initial: "",
};

export default Progress;
