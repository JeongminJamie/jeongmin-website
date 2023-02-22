import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav className="navbar">
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <span>Jeongmin Choi</span>
    </Link>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>PROJECTS</li>
      <li>CONTACT</li>
    </ul>
  </nav>
)

export default Navbar
