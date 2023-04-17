import * as React from "react"

import "./cssFiles/projectsInfo.css"

const ProjectsInfo = () => (
  <div className="projectsInfo">
    <div className="project">
      <div className="talkieImg"></div>
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
