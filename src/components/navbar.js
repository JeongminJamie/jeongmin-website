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
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </nav>
)

export default Navbar
