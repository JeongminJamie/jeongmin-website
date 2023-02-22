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
        <span>Jeongmin Choi</span>
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
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <li>ABOUT</li>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <li>PROJECTS</li>
        </Link>
        <Link
          to="/"
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
