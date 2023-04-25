import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import "./cssFiles/header.css"

const Header = () => {
  //useState declaration
  const [width, setWidth] = useState(window.innerWidth)
  const [menuClicked, setMenuClicked] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  return (
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
            <svg
              height="30"
              width="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
            </svg>
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
            >
              <li>HOME</li>
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: `none`,
              }}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              to="/projects"
              style={{
                textDecoration: `none`,
              }}
            >
              <li>PROJECTS</li>
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: `none`,
              }}
            >
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
