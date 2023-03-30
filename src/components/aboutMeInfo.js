import * as React from "react"
import { Link } from "gatsby"

import "./cssFiles/aboutMeInfo.css"

const AboutMeInfo = () => (
  <div className="aboutMeInfo">
    <div className="introductionContainer">
      <h3 className="introductionText">Who am I?</h3>
      <div className="introContentContainer">
        <p className="introContent">
          I'm a <span>Full-stack web developer</span> always looking for the
          improvement points of website for high quality product. You can check
          my <span>projects</span> with various stacks clicking right{" "}
          <span>Here.</span>
        </p>
        <p className="introContent">
          I'm willing to share my <span>experiences</span> what I've learned in{" "}
          <span>Web Development.</span> Also, I'm eager to learn and adopt to
          fast transitions of programming.
        </p>
        <p className="introContent">
          I'm open to <span>job opportunities</span> in web development
          industry. If you are interested in my tech skills, feel free to
          contact me through the <span>Contact</span> button below.
        </p>
        <div classsName="contactButtonContainer">
          <Link to="/contact">
            <button className="contactButton">CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="aboutMeSkillContainer">
      <h3 className="skillText">My Skills</h3>
      <div className="skillsContainer">
        <div className="skill">1</div>
        <div className="skill">2</div>
        <div className="skill">3</div>
        <div className="skill">4</div>
        <div className="skill">5</div>
        <div className="skill">6</div>
      </div>
    </div>
  </div>
)

export default AboutMeInfo
