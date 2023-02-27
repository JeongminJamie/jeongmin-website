import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/cssFiles/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className="textCenter">
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className="intro">
        <b>Example pages:</b> Edit <code>src/pages/index.js</code> to update
        this page.
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
