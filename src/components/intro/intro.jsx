import React from "react";
import style from "./intro.module.scss";
import avatar from "../../images/avatar.jpg";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    this.setState({
      visible: true,
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <div className={visible ? style.containerVisible : style.container}>
        <img className={style.image} src={avatar} alt="What I look like" />
        <div className={style.content}>
          <div className={style.text}>
            <h1 className={style.name}>Andrew Barnes</h1>
            <h2 className={style.title}>Front End Developer</h2>
            <div className={style.intro}>
              I am a motivated front-end developer based in the United Kingdom,
              skilled in a broad range of the latest online technologies. I am
              passionate about the work I do - creating accessible and optimised
              experiences.
            </div>
          </div>
          <ul className={style.list}>
            <li>
              <a href="https://medium.com/@andrew_barnes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="medium"
                  viewBox="0 0 30.231 24"
                >
                  <title id="medium">Medium</title>
                  <path
                    d="M3.585,4.9A1.17,1.17,0,0,0,3.2,3.909L.382.508V0H9.146l6.774,14.858L21.876,0h8.355V.508L27.818,2.822a.707.707,0,0,0-.268.678v17a.706.706,0,0,0,.268.676l2.357,2.314V24H18.319v-.508l2.442-2.371c.239-.239.239-.31.239-.676V6.7L14.213,23.945H13.3L5.391,6.7V18.259a1.6,1.6,0,0,0,.437,1.325L9,23.436v.509H0v-.509l3.176-3.852a1.535,1.535,0,0,0,.409-1.325V4.9Z"
                    transform="translate(0)"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AndrewBarnesWeb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="twitter"
                  viewBox="0 0 29.532 24"
                >
                  <title id="twitter">Twitter</title>
                  <g transform="translate(0 -0.248)">
                    <path
                      d="M29.532,2.841a12.1,12.1,0,0,1-3.48.954A6.069,6.069,0,0,0,28.717.443a12.137,12.137,0,0,1-3.848,1.47A6.063,6.063,0,0,0,14.543,7.438,17.2,17.2,0,0,1,2.056,1.109,6.067,6.067,0,0,0,3.93,9.2,6.033,6.033,0,0,1,1.187,8.44a6.063,6.063,0,0,0,4.859,6.017,6.073,6.073,0,0,1-2.737.1,6.063,6.063,0,0,0,5.66,4.207A12.182,12.182,0,0,1,0,21.278,17.152,17.152,0,0,0,9.288,24c11.249,0,17.605-9.5,17.221-18.022A12.335,12.335,0,0,0,29.532,2.841Z"
                      transform="translate(0 0.248)"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrewbarnes102/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="linkedin"
                  viewBox="0 0 25.043 24"
                >
                  <title id="linkedin">LinkedIn</title>
                  <path d="M19.838,24V15.235c0-5.271-6.29-4.873-6.29,0V24H8.362V7.3h5.184V9.553c2.187-4.048,11.5-4.347,11.5,3.876V24ZM0,24V7.3H5.218V24ZM.021,2.609A2.588,2.588,0,1,1,2.609,5.218,2.6,2.6,0,0,1,.021,2.609Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/andybarnes102/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="instagram"
                  viewBox="0 0 24 24"
                >
                  <title id="instagram">Instagram</title>
                  <path d="M14.829,6.3c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04A2.63,2.63,0,0,0,6.3,9.172c-.033.738-.041.959-.041,2.828s.008,2.09.041,2.829a2.631,2.631,0,0,0,2.87,2.87c.737.033.959.041,2.828.041s2.091-.007,2.829-.041a2.631,2.631,0,0,0,2.87-2.87c.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828a2.632,2.632,0,0,0-2.87-2.87ZM12,15.6A3.595,3.595,0,1,1,15.6,12,3.595,3.595,0,0,1,12,15.6ZM15.737,9.1a.84.84,0,1,1,.84-.84A.84.84,0,0,1,15.737,9.1Zm-1.4,2.9A2.333,2.333,0,1,1,12,9.667,2.333,2.333,0,0,1,14.333,12ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6.958,14.886a3.864,3.864,0,0,1-4.071,4.072C14.14,18.992,13.9,19,12,19s-2.139-.008-2.886-.042a3.865,3.865,0,0,1-4.072-4.072C5.008,14.14,5,13.9,5,12s.008-2.139.042-2.886A3.863,3.863,0,0,1,9.114,5.043C9.861,5.008,10.1,5,12,5s2.14.008,2.887.043a3.863,3.863,0,0,1,4.071,4.071C18.992,9.861,19,10.1,19,12S18.992,14.14,18.958,14.886Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Intro;
