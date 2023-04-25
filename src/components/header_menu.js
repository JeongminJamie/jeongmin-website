import React from "react"
import { Link } from "gatsby"

import "./cssFiles/header_menu.css"

const HeaderMenu = () => {
  return (
    <div className="header_menu">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu">HOME</div>
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu">ABOUT</div>
      </Link>
      <Link
        to="/projects"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu">PROJECTS</div>
      </Link>
      <Link
        to="/contact"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu">CONTACT</div>
      </Link>
    </div>
  )
}

export default HeaderMenu
