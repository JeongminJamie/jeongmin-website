import React from "react"
import { Router, NavLink } from "react-router-dom"

import "./cssFiles/header_menu.css"

const HeaderMenu = () => {
  return (
    <div className="header_menu">
      <NavLink
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className={({ isActive }) => (isActive ? "clicked_menu" : "menu")}>
          HOME
        </div>
      </NavLink>
      <NavLink
        to="/about"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className={({ isActive }) => (isActive ? "clicked_menu" : "menu")}>
          ABOUT
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu">PROJECTS</div>
      </NavLink>
      <NavLink
        to="/contact"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="menu">CONTACT</div>
      </NavLink>
    </div>
  )
}

export default HeaderMenu
