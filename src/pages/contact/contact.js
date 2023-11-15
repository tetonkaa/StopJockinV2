import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./contact.css";

export default function Contact() {
  const contactConfig = {
    YOUR_EMAIL: "ViceDevGroup@Gmail.com",
    description:
      "Want to schedule a haircut? Need help hosting an event at Lot-7? Hit us up!",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "need2add",
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.YOUR_USER_ID,
  };

  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! , Looking forward to reading your email.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contactPage" id="contact">
      <div className="contactPageBody">
        <div className="contactTitle">
          <h1>Contact</h1>
        </div>
        <div className="contactBlurbContainer">
          <div className="contactBlurb">
            <h3>Get in touch</h3>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <p>{contactConfig.description}</p>
          </div>
          <div className="contactFormContainer">
            <form onSubmit={handleSubmit} className="">
              <div>
                <div  className="">
                  <input
                    class="nameInput"
                    id=""
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <input
                    class="emailInput"
                    id=""
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                class="messageInput"
                placeholder="Write your thoughts here..."
                id=""
                name="message"
                divs="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <div>
                <button className="sendButton" type="submit">
                  {formData.loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
