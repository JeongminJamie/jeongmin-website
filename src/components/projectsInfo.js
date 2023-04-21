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
        <div className="description">
          <p>
            Technologies: React, Express, PostgreSQL, Media Recorder API, AWS S3
          </p>
          <p>
            Talkie project helps users prepare for tech interviews by allowing them
            record audio answers to interview questions, other users provide
            feedback to the answers
          </p>
        </div>
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
      <div className="projectContent">
        <div className="title">Don Don</div>
        <div className="description">
          <p>Technologies: Express, Node, HTML, SASS, jQuery, Ajax</p>
        </div>
      </div>
    </div>
    <div className="project">
      <StaticImage
        className="img"
        src="../images/Scheduler.png"
        style={{ objectFit: "contain" }}
        width={420}
        height={250}
      />
      <div className="projectContent">
        <div className="title">Interview Scheduler</div>{" "}
        <div className="description">
          <p>Technologies: React</p>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsInfo
