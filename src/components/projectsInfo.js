import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./cssFiles/projectsInfo.css"

const ProjectsInfo = () => (
  <div className="projectsContainer">
    <div className="project">
      <StaticImage
        className="img"
        src="../images/Talkie.png"
        objectFit="cover"
        width={420}
        height={250}
      />
      <div className="projectContent">
        <div className="title">Talkie</div>
        <div className="description"></div>
      </div>
    </div>
    <div className="project">
      <StaticImage
        className="img"
        src="../images/DonDon.png"
        objectFit="cover"
        width={420}
        height={250}
      />
      <div className="title">Don Don</div>
      <div className="description"></div>
    </div>
    <div className="project">
      <StaticImage
        className="img"
        src="../images/Scheduler.png"
        style={{ objectFit: "contain" }}
        width={420}
        height={250}
      />
      <div className="title">Interview Scheduler</div>{" "}
      <div className="description"></div>
    </div>
  </div>
)

export default ProjectsInfo
