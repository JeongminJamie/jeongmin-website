import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav
    className="navbar"
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    <div>
      <Link to="/">
        <span>Jeongmin Choi</span>
      </Link>
    </div>
    <div>
      <ul
        style={{
          display: `flex`,
          listStyle: `none`,
        }}
      >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </nav>
)

export default Navbar
