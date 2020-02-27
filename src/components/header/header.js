import React from "react"
import style from "./header.module.scss"
import Toggle from "./toggle.js"


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: false,
      visible: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  componentDidMount() {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
      <header className={this.state.visible ? style.containerVisible : style.container}>
        <div className={this.state.condition ? style.menuContainerActive : style.menuContainer}>
          <svg className={style.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" role="img" aria-labelledby="logo-title">
            <title id="logo-title">Logo</title>
            <g data-name="Oval 1 + AB" transform="translate(-0.35 -0.35)">
              <circle className={style.logoBackground} id="Oval_1_Copy" data-name="Oval 1 Copy" cx="26.95" cy="26.95" r="26.95" transform="translate(0.35 0.35)" />
              <circle data-name="Oval 1" cx="21" cy="21" r="21" transform="translate(6.3 6.3)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="3.15" />
              <path d="M19.918,22l-1.087-3.568H13.365L12.279,22H8.854L14.145,6.947h3.886L23.343,22Zm-1.846-6.234q-1.507-4.85-1.7-5.486t-.272-1q-.338,1.313-1.938,6.491Zm7.157-8.757h4.666a8.991,8.991,0,0,1,4.63.907A3.159,3.159,0,0,1,35.965,10.8a3.637,3.637,0,0,1-.631,2.2,2.519,2.519,0,0,1-1.677,1.036v.1a3.3,3.3,0,0,1,2.056,1.189,3.87,3.87,0,0,1,.631,2.317,3.819,3.819,0,0,1-1.482,3.2A6.408,6.408,0,0,1,30.838,22H25.229Zm3.179,5.937h1.846a3.374,3.374,0,0,0,1.871-.4,1.492,1.492,0,0,0,.579-1.323,1.324,1.324,0,0,0-.631-1.236,4.053,4.053,0,0,0-1.994-.374H28.408Zm0,2.522v3.907h2.071a3.072,3.072,0,0,0,1.938-.5,1.855,1.855,0,0,0,.625-1.538q0-1.866-2.666-1.866Z" transform="translate(4.2 12.6)" fill="#fff" />
            </g>
          </svg>

          <div className={style.name}>Andrew <strong>Barnes</strong></div>
          <button onClick={this.handleClick} className={style.menuButton}>
            <span className={this.state.condition ? style.menuIconActive : style.menuIcon}></span>
          </button>
          <nav>
            <ul className={this.state.condition ? style.navActive : style.nav}>
              <li><a onClick={this.handleClick} href="#about-me">About me</a></li>
              <li><a onClick={this.handleClick} href="#what-i-do">What I do</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#my-work">My work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <Toggle />
        </div>
      </header>
    );
  }
}

export default Header
