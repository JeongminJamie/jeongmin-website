import { React, useRef } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Layout>
      <div className="contactContainer">
        <h2 className="--text--center">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <input
            type="text"
            placeholder="Your Message"
            name="user_message"
            required
          />
          <textarea name="message" cols="30" rows="10">
            <button type="submit" className="--btn --btn-primary">
              Submit
            </button>
          </textarea>
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default Contact
