import * as React from "react"
import { Link } from "gatsby"

import "./cssFiles/projectsInfo.css"

const ProjectsInfo = () => (
  <div className="projectsContainer">
    {/* Talkie section */}
    <div className="project">
      <div className="talkie_img"></div>
      <div className="projectContent">
        <div className="title">Talkie</div>
        <div className="descriptionCt">
          <p className="description">
            <span>Technologies:</span> React, Express, PostgreSQL, Media
            Recorder API, AWS S3
          </p>
          <p className="description">
            Talkie project helps users prepare for tech interviews by allowing
            them record audio answers to interview questions, other users
            provide feedback to the answers.
          </p>
        </div>
        <div classsName="repoLinkCt">
          <Link
            to="https://github.com/khabizat/Talkie"
            style={{ textDecorationLine: `none` }}
          >
            <div className="repoLink">Repo</div>
          </Link>
        </div>
      </div>
    </div>

    {/* Don Don section */}
    <div className="project">
      <div className="dondon_img"></div>
      <div className="projectContent">
        <div className="title">Don Don</div>
        <div className="descriptionCt">
          <p className="description">
            <span>Technologies:</span> Express, Node, HTML, SASS, jQuery, Ajax
          </p>
          <p className="description">
            Don Don project is a food ordering website that customers can order
            food online, to pick up later. Customers can browse the menu and
            place orders, and the restaurant owner can manage orders and update
            the menu as desired.
          </p>
        </div>
        <div classsName="repoLinkCt">
          <Link
            to="https://github.com/JeongminJamie/food-pickup-app"
            style={{ textDecorationLine: `none` }}
          >
            <div className="repoLink">Repo</div>
          </Link>
        </div>
      </div>
    </div>

    {/* Scheduler section */}
    <div className="project">
      <div className="scheduler_img"></div>
      <div className="projectContent">
        <div className="title">Interview Scheduler</div>{" "}
        <div className="descriptionCt">
          <p className="description">
            {" "}
            <span>Technologies:</span> React
          </p>
          <p className="description">
            Interview Scheduler is a web that users can book, cancel, and delete
            interviews in real-time
          </p>
        </div>
        <div classsName="repoLinkCt">
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
