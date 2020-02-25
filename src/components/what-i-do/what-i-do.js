import React from "react"
import style from "./what-i-do.module.scss"
import SkillCard from "./skill-card"
import VisibilitySensor from 'react-visibility-sensor';

class WhatIDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      blockVisible: false
    }
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        visible: true
      });
    }
  }

  onBlockChange(isVisible) {
    if (isVisible) {
      this.setState({
        blockVisible: true
      });
    }
  }

  render() {
    return (
      <VisibilitySensor partialVisibility={true} onChange={this.onBlockChange.bind(this)}>
        <div className={this.state.blockVisible ? style.containerVisible : style.container} id="what-i-do">
          <h2 className={style.title}>What I do</h2>
          <div className={style.skills}>
            <div className={style.skillsContainer}>
              <SkillCard icon="code" skill="Web development">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Quis nostrud exercitation.
                </p>
              </SkillCard>
            </div>
            <div className={style.skillsContainer}>
              <SkillCard icon="design" skill="UI design">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Quis nostrud exercitation.
                </p>
              </SkillCard>
            </div>
          </div>

          <div className={style.info}>
            <div className={style.text}>
              <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className={style.charts}>
              <h3 className={style.skillTitle}>Skill one</h3>
                <VisibilitySensor partialVisibility={true} onChange={this.onChange.bind(this)}>
                <div className={style.bar}>
                  <div style={{ width: this.state.visible ? "80%" : "0%" }}></div>
                </div>
                </VisibilitySensor>
              <h3 className={style.skillTitle}>Skill two</h3>
              <div className={style.bar}>
                <div style={{ width: this.state.visible ? "90%" : "0%" }}></div>
              </div>

              <h3 className={style.skillTitle}>Skill three</h3>
              <div className={style.bar}>
                <div style={{ width: this.state.visible ? "70%" : "0%" }}></div>
              </div>

              <h3 className={style.skillTitle}>Skill four</h3>
              <div className={style.bar}>
                <div style={{ width: this.state.visible ? "85%" : "0%" }}></div>
              </div>

              <h3 className={style.skillTitle}>Social skills</h3>
              <div className={style.bar}>
                <div style={{ width: this.state.visible ? "95%" : "0%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default WhatIDo
