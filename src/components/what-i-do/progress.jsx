import React from "react";
import PropTypes from "prop-types";
import style from "./progress.module.scss";

const Progress = ({
  start,
  actual,
  initial,
}) => (
  <div className={style.progress}>
    <div style={{ width: start ? actual : initial }} />
  </div>
);

Progress.propTypes = {
  start: PropTypes.number,
  actual: PropTypes.number,
  initial: PropTypes.number,
};

Progress.defaultProps = {
  start: 0,
  actual: 0,
  initial: 0,
};

export default Progress;
