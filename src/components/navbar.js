import * as React from "react"
import { Link } from "gatsby"

import "./navbar.css"

const Navbar = () => (
  <nav className="navbar">
    <div>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <span>김규리 여행 가자고 여행 가자</span>
      </Link>
    </div>
    <div>
      <ul className="menu">
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
  </nav>
)

export default Navbar
