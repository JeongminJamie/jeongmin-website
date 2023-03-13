import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import SideIcon from "./sideIcon"
import "./cssFiles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="middle_footer">
        <div className="icon_content">
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
