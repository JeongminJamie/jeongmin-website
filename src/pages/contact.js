import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/cssFiles/contact.css"

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
    <body className="wholeContact">
      <Layout>
        <div className="contactContainer">
          <div className="contact">
            <h2 className="contactMeText">Contact Me</h2>
            <p className="contactContent">
              Feel free to contact me with the form below
            </p>
          </div>
          <section className="formContainer">
            <form ref={form} onSubmit={sendEmail} className="emailForm">
              <label>Name</label>
              <input
                className="nameInput"
                type="text"
                placeholder="Enter Your Name"
                name="user_name"
                required
              />
              <label>Email</label>
              <input
                className="emailInput"
                type="email"
                placeholder="Enter Your Email"
                name="user_email"
                required
              />
              <label>Message</label>
              <textarea
                className="messageInput"
                type="text"
                placeholder="Enter Your Message"
                name="user_message"
                required
                cols="30"
                rows="10"
                style={{
                  resize: "none",
                }}
              />
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </form>
          </section>
        </div>
      </Layout>
    </body>
  )
}

export const Head = () => <Seo title="Contact" />

export default Contact
