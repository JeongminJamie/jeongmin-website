import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./cssFiles/projectsInfo.css"

const ProjectsInfo = () => (
  <div className="projectsInfo">
    <div className="project">
      <StaticImage
        className="talkieImg"
        src="../images/Talkie2.png"
        objectFit="cover"
        width={420}
        height={250}
      />
      <div className="title">Talkie</div>
      <div className="description"></div>
    </div>
    <div className="project">
      <div className="dondonImg"></div>
      <div className="title">Don Don</div>
      <div className="description"></div>
    </div>
    <div className="project">
      <div className="schedulerImg"></div>
      <div className="title">Interview Scheduler</div>{" "}
      <div className="description"></div>
    </div>
  </div>
)

export default ProjectsInfo
