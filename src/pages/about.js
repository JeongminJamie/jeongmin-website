import * as React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/aboutMe"
import AboutMeInfo from "../components/aboutMeInfo"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <AboutMe />
    <AboutMeInfo />
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
