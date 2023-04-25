import React, { useState } from "react"
import { Link } from "gatsby"

import "./cssFiles/header_menu.css"

const HeaderMenu = () => {
  const [isClicked, setIsClicked] = useState("")

  return (
    <div className="header_menu">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <div
          className={({ isClicked }) => {
            return isClicked === "Home" ? "clicked_menu" : "menu"
          }}
          onClick={() => setIsClicked("Home")}
        >
          HOME
        </div>
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: `none`,
        }}
      >
        <div
          className={isClicked === "About" ? "menu" : "clicked_menu"}
          onClick={() => setIsClicked("About")}
        >
          ABOUT
        </div>
      </Link>
      <Link
        to="/projects"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu" onClick={() => setIsClicked("Projects")}>
          PROJECTS
        </div>
      </Link>
      <Link
        to="/contact"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu" onClick={() => setIsClicked("Contact")}>
          CONTACT
        </div>
      </Link>
    </div>
  )
}

export default HeaderMenu
