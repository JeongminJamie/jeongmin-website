import * as React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/aboutMe"
import AboutMeInfo from "../components/aboutMeInfo"

import "../components/cssFiles/about.css"

import Seo from "../components/seo"

const About = () => (
  <body className="wholeAbout">
    <Layout>
      <AboutMe />
      <AboutMeInfo />
    </Layout>
  </body>
)

export const Head = () => <Seo title="About" />

export default About
