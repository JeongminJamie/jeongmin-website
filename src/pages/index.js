import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/cssFiles/index.module.css"

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
        <p>A Full-stack Web Developer ready to make a difference in </p>
        <p>people's lives by changing the flow of the web</p>
      </div>
      <div className="contentButton"></div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
