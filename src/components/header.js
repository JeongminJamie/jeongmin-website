import * as React from "react"
import { Link } from "gatsby"

import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      Jeongmin Choi
    </Link>
    <Navbar />
  </header>
)

export default Header
