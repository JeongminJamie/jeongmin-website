import React from "react"
import { Link } from "gatsby"

import "./cssFiles/header_menu.css"

const HeaderMenu = () => {
  return (
    <div className="header_menu">
      <div>HOME</div>
      <div>ABOUT</div>
      <div>PROJECTS</div>
      <div>CONTACT</div>
    </div>
  )
}

export default HeaderMenu
