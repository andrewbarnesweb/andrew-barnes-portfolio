import React from "react"
import style from "./contact.module.scss"
import Section from "../section/section"

class Contact extends React.Component {

  render() {
    return (
      <Section title="Contact" background={true}>
        <div className={style.content}>
          <div className={style.copy}>
            <div className={style.text}>
              <p><strong>If you want to get in touch, it'd be great to hear from you! Will be a nice break from the spam that generally comes through...</strong></p>
              <p>I'm always interested to hear about potential projects and opportunities. I won't always be available, but I'll be sure to let you know as soon as possible.</p>
            </div>

            <ul className={style.social}>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="contact-twitter" viewBox="0 0 29.532 24">
                  <title id="contact-twitter">Twitter</title>
                  <g transform="translate(0 -0.248)">
                    <path d="M29.532,2.841a12.1,12.1,0,0,1-3.48.954A6.069,6.069,0,0,0,28.717.443a12.137,12.137,0,0,1-3.848,1.47A6.063,6.063,0,0,0,14.543,7.438,17.2,17.2,0,0,1,2.056,1.109,6.067,6.067,0,0,0,3.93,9.2,6.033,6.033,0,0,1,1.187,8.44a6.063,6.063,0,0,0,4.859,6.017,6.073,6.073,0,0,1-2.737.1,6.063,6.063,0,0,0,5.66,4.207A12.182,12.182,0,0,1,0,21.278,17.152,17.152,0,0,0,9.288,24c11.249,0,17.605-9.5,17.221-18.022A12.335,12.335,0,0,0,29.532,2.841Z" transform="translate(0 0.248)" />
                  </g>
                </svg>
                <a href="https://twitter.com/AndrewBarnesWeb">@andrewbarnesweb</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="contact-linkedin" viewBox="0 0 25.043 24">
                  <title id="contact-linkedin">LinkedIn</title>
                  <path d="M19.838,24V15.235c0-5.271-6.29-4.873-6.29,0V24H8.362V7.3h5.184V9.553c2.187-4.048,11.5-4.347,11.5,3.876V24ZM0,24V7.3H5.218V24ZM.021,2.609A2.588,2.588,0,1,1,2.609,5.218,2.6,2.6,0,0,1,.021,2.609Z" />
                </svg>
                <a href="https://www.linkedin.com/in/andrewbarnes102/">in/andrewbarnes102</a>
              </li>
            </ul>
          </div>

          <form className={style.form} name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea rows="5" id="message" name="message" required></textarea>

            <button type="submit">Send message</button>
          </form>
        </div>
      </Section>
    );
  }
}

export default Contact
