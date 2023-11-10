import React, { useState } from "react";
import * as emailjs from "emailjs-com";

export default function Contact() {
  const contactConfig = {
    YOUR_EMAIL: "ViceDevGroup@Gmail.com",
    description:
      "Need an application or website to be built? Write to us and we'll get back as soon as possible",
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
    <div className="contactPage">
      <div className="mb-5 mt-3 pt-md-3">
        <div lg="8">
          <h1 className="display-4 mb-4">Contact</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </div>
      </div>
      <div className="sec_sp">
        <div lg="12">
          {/* <Alert
                //show={formData.show}
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? "d-block" : "d-none"
                }`}
                onClose={() => setFormdata({ show: false })}
                dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert> */}
        </div>
        <div lg="5" className="mb-5">
          <h3 className="divor_sec py-4">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
          </address>
          <p>{contactConfig.description}</p>
        </div>
        <div lg="7" className="contactFormContainer">
          <form onSubmit={handleSubmit} className="">
            <div>
              <div lg="6" className="">
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
              <div lg="6" className="">
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
              <div lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  {formData.loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
