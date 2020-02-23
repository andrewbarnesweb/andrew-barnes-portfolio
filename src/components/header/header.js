import React from "react"
import style from "./header.module.scss"
import logo from "../../images/logo.svg"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }
  render() {
    return (
      <header>
        <div className={this.state.condition ? `${style.menuContainer} ${style.menuContainerActive}` : style.menuContainer}>
          <img className={style.logo} src={logo} alt="Andrew Barnes' logo" />
          <div className={style.name}>Andrew <strong>Barnes</strong></div>
          <button onClick={this.handleClick} className={style.menuButton}>
            <span className={this.state.condition ? `${style.menuIcon} ${style.menuIconActive}` : style.menuIcon}></span>
          </button>
          <nav>
            <ul className={this.state.condition ? `${style.nav} ${style.navActive}` : style.nav}>
              <li><a href="/about-me">About me</a></li>
              <li><a href="/what-i-do">What I do</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/my-work">My work</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
              </label>
            )}
          </ThemeToggler>
        </div>
      </header>
    );
  }
}

export default Header

// import PropTypes from "prop-types"
// import React from "react"
// import style from "./header.module.scss"

// const Header = ({ siteTitle }) => (
//   <header>
//     <div className={`${style.menuButtonContainer} ${style.active}`}>
//       <button onClick={console.log("You clicked me!")} className={style.menuButton}>
//         <span className={`${style.menuIcon} ${style.active}`}></span>
//       </button>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
