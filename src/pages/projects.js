import * as React from "react"

import Layout from "../components/layout"
import TopProjects from "../components/topProjects"
import ProjectsInfo from "../components/projectsInfo"

import Seo from "../components/seo"

const Projects = () => (
  <Layout>
    <TopProjects />
    <ProjectsInfo />
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default Projects
