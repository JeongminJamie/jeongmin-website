import * as React from "react"

import TopProjects from "../components/topProjects"
import ProjectsInfo from "../components/projectsInfo"
import Header from "../components/header"

import Seo from "../components/seo"

import "../components/cssFiles/projects.css"

const Projects = () => (
  <body className="wholeProjects">
    <Header />
    <TopProjects />
    <ProjectsInfo />
    <footer
      style={{
        fontSize: `var(--font-sm)`,
      }}
    >
      © {new Date().getFullYear()} &middot; Made by Jeongmin Choi
      {` `}
    </footer>
  </body>
)

export const Head = () => <Seo title="Projects" />

export default Projects
