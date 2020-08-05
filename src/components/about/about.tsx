import React from "react";
import style from "./about.module.scss";
import Section from "../section/section";

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

const About = (): JSX.Element => (
  <Section title="About me" background>
    <div className={style.content}>
      <div className={style.copy}>
        <div className={style.text}>
          <p>
            I have dd commercial experience in both UX and Web Development, which has enabled me to
            have a good understanding of the design, experience and development of web products. I
            have a passion for web design, and love turning those ideas into reality.
          </p>
          <p>
            I&apos;ve created this slice of the web to give an overview of what I do and to signpost
            to things I&apos;ve written and worked on. If you have a project that you think I can
            help with, or just want to say hello, then <a href="#contact">get in touch</a>.
          </p>
          <p>I&apos;m a big fan of technology, 80&apos;s music and Dominic Toretto.</p>
        </div>
      </div>

      <dl className={style.list}>
        <div className={style.pair}>
          <dt>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M13.333,13.333H10.667V10.667h2.667Zm-4-6.667H6.667V9.333H9.333Zm4,0H10.667V9.333h2.667Zm-8,4H2.667v2.667H5.333Zm4,0H6.667v2.667H9.333Zm-4-4H2.667V9.333H5.333ZM16,1.333V16H0V1.333H2V2A1.333,1.333,0,0,0,4.667,2V1.333h6.667V2A1.333,1.333,0,1,0,14,2V1.333Zm-1.333,4H1.333v9.333H14.667ZM13.333.667A.667.667,0,0,0,12,.667V2a.667.667,0,0,0,1.333,0ZM4,2A.667.667,0,1,1,2.667,2V.667A.667.667,0,1,1,4,.667Z" />
            </svg>
            Age
          </dt>
          <dd>{getAge("1984/12/19")}</dd>
        </div>
        <div className={style.pair}>
          <dt>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="12"
              height="18"
              viewBox="0 0 12 18"
            >
              <path
                d="M10,0A5.964,5.964,0,0,0,4,5.7C4,8.85,6.6,12.609,10,18c3.4-5.391,6-9.15,6-12.3A5.963,5.963,0,0,0,10,0Zm0,8.25A2.25,2.25,0,1,1,12.25,6,2.25,2.25,0,0,1,10,8.25Z"
                transform="translate(-4)"
              />
            </svg>
            Location
          </dt>
          <dd>
            <address>Barnsley, Yorkshire, England</address>
          </dd>
        </div>
        <div className={style.pair}>
          <dt>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="16"
              height="12.5"
              viewBox="0 0 16 12.5"
            >
              <path d="M13.539,12.5a5.322,5.322,0,0,0,.615-2.5h1.231A5.325,5.325,0,0,0,16,12.5ZM1.846,9.965V6.031L7.385,9.07,12.923,6.8V9.965c0,1.721-3.562,2.535-5.539,2.535C5.506,12.5,1.846,11.63,1.846,9.965Zm12.308-.589V4.9L7.385,7.656,0,3.594,7.949,0l7.436,4.218V9.375Z" />
            </svg>
            Degree
          </dt>
          <dd>Business Information Systems</dd>
        </div>
        <div className={style.pair}>
          <dt>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="15.999"
              height="16"
              viewBox="0 0 15.999 16"
            >
              <g transform="translate(-0.001)">
                <path
                  d="M4.605,16a4.832,4.832,0,0,1-3.419-1.079A4.908,4.908,0,0,1,0,11.416,10.037,10.037,0,0,1,.561,8.249a13.987,13.987,0,0,0,7.205,7.238A10.852,10.852,0,0,1,4.605,16ZM9.69,14.7h0a11.53,11.53,0,0,1-5.427-3.268A9.157,9.157,0,0,1,1.446,6.258,12.346,12.346,0,0,1,6.255,1.451C9.609,1.743,13.871,5.9,14.7,9.693a11.585,11.585,0,0,1-2.1,2.9A11.565,11.565,0,0,1,9.691,14.7ZM4.8,8.983h0l-.472.471,2.326,2.325.472-.471-.691-.691.691-.691.691.691.472-.472L7.6,9.454l.692-.691.692.691.472-.471-.691-.691L9.455,7.6l.691.691.472-.471-.691-.692.691-.691.691.691.472-.471L9.455,4.333l-.472.472.691.691-.691.69L8.292,5.5l-.472.471.691.691-.691.691-.691-.691-.472.471.691.692-.691.69-.691-.69-.473.471.692.691-.692.691L4.8,8.983ZM15.494,7.777v0A14.016,14.016,0,0,0,8.259.558,9.83,9.83,0,0,1,11.424,0a4.9,4.9,0,0,1,3.5,1.192A4.838,4.838,0,0,1,16,4.615a10.6,10.6,0,0,1-.5,3.159Z"
                  transform="translate(0.001 0)"
                />
              </g>
            </svg>
            Interests
          </dt>
          <dd>Sport, Photography, Gaming</dd>
        </div>
      </dl>
    </div>
  </Section>
);

export default About;
