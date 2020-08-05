import React from "react";
import style from "./progress.module.scss";

export interface IProgressProps {
  start: boolean;
  actual: string;
  initial: string;
}

const Progress: React.FC<IProgressProps> = (props: IProgressProps): JSX.Element => {
  const { start, actual, initial } = props;

  return (
    <div className={style.progress}>
      <div data-testid="progress" style={{ width: start ? actual : initial }} />
    </div>
  );
};

export default Progress;
