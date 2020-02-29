import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import style from "./toggle.module.scss"

const Toggle = () => {
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className={style.toggleContainer}>
            <svg className={style.toggleIconLight} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M7.111,16V14.151A6.172,6.172,0,0,0,8,14.222a6.173,6.173,0,0,0,.889-.071V16Zm4.609-3.024a6.285,6.285,0,0,0,1.258-1.257l1.309,1.309-1.258,1.258Zm-10.006.052,1.31-1.309A6.234,6.234,0,0,0,4.28,12.976l-1.31,1.31ZM3.556,8A4.444,4.444,0,1,1,8,12.444,4.443,4.443,0,0,1,3.556,8Zm10.595.889A6.173,6.173,0,0,0,14.222,8a6.172,6.172,0,0,0-.071-.889H16V8.889ZM0,8.889V7.111H1.849A6.3,6.3,0,0,0,1.778,8a6.3,6.3,0,0,0,.071.889ZM1.715,2.972,2.973,1.714l1.309,1.31A6.239,6.239,0,0,0,3.024,4.281Zm10,.051,1.309-1.31,1.257,1.257-1.31,1.31A6.234,6.234,0,0,0,11.719,3.023ZM8,1.778a6.3,6.3,0,0,0-.889.071V0H8.889V1.849A6.3,6.3,0,0,0,8,1.778Z" transform="translate(0)" />
            </svg>
            <div className={style.toggle}>
              <input
                type="checkbox"
                id="theme-checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                aria-label="Activate dark mode"
              />{' '}
              <label htmlFor="theme-checkbox">Show dark mode</label>
            </div>
            <svg className={style.toggleIconDark} xmlns="http://www.w3.org/2000/svg" width="16.354" height="18.996" viewBox="0 0 16.354 17.3">
              <path d="M8,16A8,8,0,0,1,8,0a9.7,9.7,0,0,1,3.58.786C9.615,1.122,5.333,2.963,5.333,8a7.2,7.2,0,0,0,6.247,7.214A7.483,7.483,0,0,1,8,16Z" transform="translate(0 3.961) rotate(-20)" />
            </svg>
          </div>
        )}
      </ThemeToggler>
    </div>
  )
}

export default Toggle
