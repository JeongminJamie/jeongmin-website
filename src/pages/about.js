import * as React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/aboutMe"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <AboutMe />
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
