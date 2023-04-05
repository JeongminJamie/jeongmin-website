import * as React from "react"
import { Link } from "gatsby"

import "./cssFiles/header.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <div className="header_main">
    <div>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <div className="faceLogo_name">
          <div className="faceLogo_img">
            <StaticImage
              src="../images/myFace.jpeg"
              width={200}
              height={200}
              className="header_face"
              alt="My face"
            />
          </div>
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

console.log(StaticImage)
export default Header
