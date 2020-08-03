import React from "react";
import style from "./skill-card.module.scss";

function getIcon(icon) {
  let svg;

  if (icon === "code") {
    svg = (
      <svg
        data-testid="code-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 16"
      >
        <path d="M8.958,16,12.969,0h2.078L11.031,16ZM16,10.783,21.64,8,16,5.21V2.987l8,3.948v2.13l-8,3.947ZM0,9.066V6.935L8,2.987V5.21L2.36,8,8,10.783v2.23Z" />
      </svg>
    );
  } else if (icon === "design") {
    svg = (
      <svg
        data-testid="design-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="23.999"
        height="24"
        viewBox="0 0 23.999 24"
      >
        <g transform="translate(-0.001)">
          <path
            d="M1.439,16.873,14.1,4.2l1.431,1.431L3.28,17.86l-.725,3.585,3.584-.724L18.362,8.464l1.433,1.431L7.125,22.564,0,24Zm3.844,1.136L16.6,6.7l.7.707L5.988,18.718ZM15.491,2.817,18.306,0,24,5.688,21.182,8.509Z"
            transform="translate(0.001)"
          />
        </g>
      </svg>
    );
  }

  return svg;
}

export interface ISkillProps {
  icon: string;
  skill: string;
  children: React.ReactNode;
}

const SkillCard: React.FC<ISkillProps> = (props: ISkillProps): JSX.Element => {
  const { icon, skill, children } = props;

  return (
    <div className={style.skill}>
      <h3>
        {getIcon(icon)} {skill}
      </h3>
      {children}
    </div>
  );
};

export default SkillCard;
