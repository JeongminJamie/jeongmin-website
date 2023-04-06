import * as React from "react"

import Layout from "../components/layout"
import TopProjects from "../components/topProjects"
import ProjectsInfo from "../components/projectsInfo"

import Seo from "../components/seo"

import "../components/cssFiles/projects.css"

const Projects = () => (
  <body className="wholeProjects">
    <Layout>
      <TopProjects />
      <ProjectsInfo />
    </Layout>
  </body>
)

export const Head = () => <Seo title="Projects" />

export default Projects
