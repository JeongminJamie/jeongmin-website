import * as React from "react"
import { Link } from "gatsby"
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
        <div className="descriptionCt">
          <p className="description">
            Technologies: React, Express, PostgreSQL, Media Recorder API, AWS S3
          </p>
          <p className="description">
            Talkie project helps users prepare for tech interviews by allowing
            them record audio answers to interview questions, other users
            provide feedback to the answers.
          </p>
        </div>
        <div classsName="repoButtonCt">
          <Link
            to="https://github.com/khabizat/Talkie"
            style={{ textDecorationLine: `none` }}
          >
            <div className="repoLink">Repo</div>
          </Link>
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
        <div className="descriptionCt">
          <p className="description">
            Technologies: Express, Node, HTML, SASS, jQuery, Ajax
          </p>
          <p className="description">
            Don Don project is a food ordering website that customers can order
            food online, to pick up later. Customers can browse the menu and
            place orders, and the restaurant owner can manage orders and update
            the menu as desired.
          </p>
        </div>
        <div classsName="repoButtonCt">
          <Link
            to="https://github.com/JeongminJamie/food-pickup-app"
            style={{ textDecorationLine: `none` }}
          >
            <div className="repoLink">Repo</div>
          </Link>
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
        <div className="descriptionCt">
          <p className="description">Technologies: React</p>
          <p className="description">
            Interview Scheduler is a web that users can book, cancel, and delete
            interviews in real-time
          </p>
        </div>
        <div classsName="repoButtonCt">
          <Link
            to="https://github.com/JeongminJamie/scheduler"
            style={{ textDecorationLine: `none` }}
          >
            <div className="repoLink">Repo</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsInfo
