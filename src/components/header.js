import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import HeaderMenu from "./header_menu"
import "./cssFiles/header.css"

const Header = () => {
  //useState declaration
  const [width, setWidth] = useState(window.innerWidth)
  const [menuClicked, setMenuClicked] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  // make activeStyle when clicked
  const activeStyles = {
    color: "skyblue",
  }

  return (
    <>
      <div className="header_main">
        <div>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <div className="faceLogo_name">
              <div className="faceLogo_img"></div>
              <span className="myName">Jeongmin Choi</span>
            </div>
          </Link>
        </div>
        {/* show a menu icon if the screen is under 600 and appear x icon when clicked the menu icon */}
        {width < 600 ? (
          <div onClick={() => setMenuClicked(!menuClicked)}>
            {menuClicked ? (
              <div className="x_icon"></div>
            ) : (
              <div className="menu_icon"></div>
            )}
          </div>
        ) : (
          <div className="header_nav">
            <ul className="nav">
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                }}
                activeStyle={activeStyles}
              >
                <li>HOME</li>
              </Link>
              <Link
                to="/about"
                style={{
                  textDecoration: `none`,
                }}
                activeStyle={activeStyles}
              >
                <li>ABOUT</li>
              </Link>
              <Link
                to="/projects"
                style={{
                  textDecoration: `none`,
                }}
                activeStyle={activeStyles}
              >
                <li>PROJECTS</li>
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: `none`,
                }}
                activeStyle={activeStyles}
              >
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div>{menuClicked ? <HeaderMenu /> : <></>}</div>
    </>
  )
}

export default Header
