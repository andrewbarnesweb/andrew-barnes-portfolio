import React from "react"

import style from "./404.module.scss"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className={style.error}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This website only has one page. This isn't it 😬! <a href="/">Try here!</a></p>
  </div>
)

export default NotFoundPage
