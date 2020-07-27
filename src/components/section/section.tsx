import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import style from "./section.module.scss";

export interface ISectionProps {
  background?: boolean;
  children: React.ReactNode;
  title: string;
}

const Section: React.FC<ISectionProps> = (props: ISectionProps): JSX.Element => {
  const { background, children, title } = props;
  const [visible, setVisible] = useState(false);

  const onChange = isVisible => {
    if (isVisible) {
      setVisible(true);
    }
  };

  let classes: string;

  if (background) {
    classes = style.containerVisibleBackground;
  } else {
    classes = style.containerVisible;
  }

  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div className={visible ? classes : style.container}>
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          {children}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Section;