import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import SideIcon from "./sideIconBar"
import "./cssFiles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="middle_footer">
        <SideIcon />
        <div
          className="indexContent"
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
        </div>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Made by Jeongmin Choi
          {` `}
        </footer>
      </div>
    </>
  )
}

export default Layout
