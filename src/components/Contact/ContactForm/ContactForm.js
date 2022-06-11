import React from "react";
import "../../../styles/ContactForm.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";

const ContactForm = () => {
  const form = useRef();

  const [mailSendSuccess, setMailSendSuccess] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "contact_service",
        "contact_template",
        form.current,
        "F9EDyv2y80kjI8AX6"
      );
      console.log(`status ${response.status} \n text: ${response.text}`);
      setMailSendSuccess(true);
      setTimeout(() => {
        setMailSendSuccess(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ContactForm">
      <form onSubmit={submitForm} ref={form}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required={true}
          />
        </div>
        <div className="form-group">
          {" "}
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required={true}
          />
        </div>
        <div className="form-group">
          {" "}
          <textarea
            name="message"
            id="your-message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required={true}
          ></textarea>
        </div>

        <div>
          {" "}
          <input className="submit-button" type="submit" value="Send Message" />
        </div>
      </form>
      {mailSendSuccess ? (
        <div className="send-successfully">
          <span>Email has been sent successfully</span>{" "}
          <BsFillCheckCircleFill></BsFillCheckCircleFill>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactForm;
