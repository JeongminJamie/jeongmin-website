import * as React from "react"

import Header from "./header"
import SideIcon from "./sideIconBar"
import "./cssFiles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="home">
      <Header />
      <div className="middle_footer">
        <SideIcon />
        <div
          className="indexContent"
          style={{
            margin: `0 auto`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              fontSize: `var(--font-sm)`,
            }}
          >
            © {new Date().getFullYear()} &middot; Made by Jeongmin Choi
            {` `}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
