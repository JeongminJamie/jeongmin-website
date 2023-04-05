import * as React from "react"

import Layout from "../components/layout"
import TopProjects from "../components/topProjects"
import ProjectsInfo from "../components/projectsInfo"

import Seo from "../components/seo"

import "../components/cssFiles/projects.css"

import { StaticImage } from "gatsby-plugin-image"

const Projects = () => (
  <body className="wholeProjects">
    <Layout>
      <TopProjects />
      <StaticImage src="../images/myFace.jpeg" />
      <ProjectsInfo />
    </Layout>
  </body>
)

export const Head = () => <Seo title="Projects" />

export default Projects
