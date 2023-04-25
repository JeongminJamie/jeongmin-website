import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import "./cssFiles/header.css"

const Header = () => {

  // figuring out the window size
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth
      if (ismobile < 600) {
        setIsMobile(true)
      }
    })
  }, [isMobile])

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
    </div>
  )
}

export default Header
