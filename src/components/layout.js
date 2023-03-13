/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./cssFiles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <div>
        <section className="heroIcons">
          <div className="github_icon">
            <Link to="https://github.com/JeongminJamie">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="Github profile"
                className="githubProfile"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Link>{" "}
          </div>
          <div className="linkedin_icon">
            <Link to="https://github.com/JeongminJamie">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt="Linkedin profile"
                className="linkedinProfile"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Link>{" "}
          </div>
        </section>
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
