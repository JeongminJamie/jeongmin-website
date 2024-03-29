import * as React from "react"
import { Link } from "gatsby"

import "./cssFiles/sideIconBar.css"

const SideIconBar = () => (
  <section className="heroIcons">
    <div className="Icon">
      <Link to="https://github.com/JeongminJamie" className="iconLink">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
          alt="Github profile"
          className="githubProfile"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
    </div>
    <div className="Icon">
      <Link
        to="https://www.linkedin.com/in/jeongmin-choi-43508a20a/"
        className="iconLink"
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
          alt="Linkedin profile"
          className="linkedinProfile"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
    </div>
    <div className="Icon">
      <Link
        to="https://resume.creddle.io/resume/2an8hfmoz4n"
        className="iconLink"
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
          alt="Resume profile"
          className="resumeProfile"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
    </div>
  </section>
)

export default SideIconBar
