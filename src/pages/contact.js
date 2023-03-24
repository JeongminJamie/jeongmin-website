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
    <Layout>
      <div className="contactContainer">
        <h2 className="contactText">Contact Me</h2>
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
  )
}

export const Head = () => <Seo title="Contact Jeongmin" />

export default Contact
