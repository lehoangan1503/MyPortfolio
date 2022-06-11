import React from "react";
import "../../styles/Contact.scss";
import ContactCards from "./ContactCards/ContactCards";
import ContactForm from "./ContactForm/ContactForm";
const Contact = () => {
  return (
    <div id="getContact" className="Contact">
      <p>Get In Touch</p>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <ContactCards></ContactCards>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
