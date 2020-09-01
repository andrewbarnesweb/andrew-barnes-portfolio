import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import style from "./what-i-do.module.scss";
import Section from "../section/section";
import SkillCard from "./skill-card";
import Progress from "./progress";

const WhatIDo = () => {
  const [visible, setVisible] = useState(false);

  const onChange = isVisible => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <Section anchor="what-i-do" title="What I do">
      <div className={style.skills}>
        <div className={style.skillsContainer}>
          <SkillCard icon="code" skill="Web development">
            <p>
              I have been building websites for as long as I can remember. I am a strong believer in
              an accessible and fast web, by coding in a way that everyone can enjoy.
            </p>
          </SkillCard>
        </div>
        <div className={style.skillsContainer}>
          <SkillCard icon="design" skill="UI design">
            <p>
              I&apos;m experienced in designing clean and accessible user interfaces. From
              wireframes to high fidelity designs. I like to make things look nice!
            </p>
          </SkillCard>
        </div>
      </div>

      <div className={style.info}>
        <div className={style.text}>
          <p>
            <strong>
              Given my professional background, I have a fairly wide skill set. If I had to
              summarise, I&apos;d classify myself as a developer who likes to design.
            </strong>
          </p>
          <p>
            I have a good understanding of the fundamentals of UX and accessibility, which helps me
            to create designs that people will be comfortable using from the start. I am well versed
            in Sketch and XD to create pixel perfect designs.
          </p>
          <p>
            HTML and CSS has always been my bag, but times are changing, and so are my skills.
            I&apos;ve recently started writing JavaScript in TypeScript and getting more familiar
            with React.
          </p>
        </div>
        <div className={style.charts}>
          <h3 className={style.skillTitle}>HTML + CSS/SASS</h3>
          <VisibilitySensor partialVisibility onChange={onChange}>
            <Progress initial="0%" actual="100%" start={visible} />
          </VisibilitySensor>
          <h3 className={style.skillTitle}>TypeScript/JavaScript</h3>
          <Progress initial="0%" actual="80%" start={visible} />

          <h3 className={style.skillTitle}>React</h3>
          <Progress initial="0%" actual="75%" start={visible} />

          <h3 className={style.skillTitle}>Accessibility</h3>
          <Progress initial="0%" actual="85%" start={visible} />

          <h3 className={style.skillTitle}>Design/Sketch</h3>
          <Progress initial="0%" actual="80%" start={visible} />

          <h3 className={style.skillTitle}>Sending GIFs</h3>
          <Progress initial="0%" actual="100%" start={visible} />
        </div>
      </div>
    </Section>
  );
};

export default WhatIDo;
