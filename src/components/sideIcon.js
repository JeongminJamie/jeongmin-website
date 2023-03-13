import * as React from "react"
import { Link } from "gatsby"

import "./cssFiles/navbar.css"

const SideIcon = () => (
  <section className="heroIcons">
    <div className="github_icon">
      <Link to="https://github.com/JeongminJamie">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
          alt="Github profile"
          className="githubProfile"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </Link>{" "}
    </div>
    <div className="linkedin_icon">
      <Link to="https://github.com/JeongminJamie">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
          alt="Linkedin profile"
          className="linkedinProfile"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </Link>{" "}
    </div>
  </section>
)

export default SideIcon
