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
          <Link to="/projects" style={{ textDecorationLine: `none` }}>
            <span>Here.</span>
          </Link>
        </p>
        <p className="introContent">
          I'm willing to share my <span>experiences</span> what I've learned in{" "}
          <span>Web Development.</span> Also, I'm eager to learn and adapt to
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
        <div className="skill">Javascript</div>
        <div className="skill">Node</div>
        <div className="skill">React</div>
        <div className="skill">Express</div>
        <div className="skill">jQuery</div>
        <div className="skill">Ajax</div>
        <div className="skill">EJS</div>
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">SASS</div>
        <div className="skill">Bootstrap</div>
        <div className="skill">SQL</div>
        <div className="skill">Git</div>
        <div className="skill">Github</div>
      </div>
    </div>
  </div>
)

export default AboutMeInfo
