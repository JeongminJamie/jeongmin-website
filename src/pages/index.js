import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/cssFiles/index.css"

const IndexPage = () => (
  <Layout>
    <div
      className="homeContent"
      style={{
        textAlign: `center`,
      }}
    >
      <h1>HI, I'M JEONGMIN CHOI</h1>
      <div className="contentInfo">
        <p>A Full-stack Web Developer ready to make a difference </p>
        <p> in people's lives by changing the flow of the web</p>
      </div>
      <div classsName="projectsButton">
        <Link to="/projects">
          <button className="btn">PROJECTS</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
