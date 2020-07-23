import React from "react";
import PropTypes from "prop-types";
import "./layout.scss";
import style from "./footer.module.scss";

import Header from "./header/header";

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <main>{children}</main>
      <footer className={style.footer}>
        <nav className={style.footerLinks} aria-label="Footer links">
          <ul>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#what-i-do">What I do</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#my-work">My work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div>&copy; Andrew Barnes {(new Date().getFullYear())}</div>
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
