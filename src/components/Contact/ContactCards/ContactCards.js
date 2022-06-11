import React from "react";
import "../../../styles/ContactCards.scss";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
const ContactCards = () => {
  return (
    <div className="ContactCards">
      <div className="card-container">
        <div className="card">
          <AiOutlineMail></AiOutlineMail> <br />
          <strong>Email</strong>
          <br />
          <span>lehoangan15031998@gmail.com</span>
          <a
            href="mailto:lehoangan15031998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Send a message</p>
          </a>
        </div>
        <div className="card">
          <RiMessengerLine></RiMessengerLine> <br />
          <strong>Messenger</strong>
          <br />
          <span>An Le Hoang</span>
          <a
            href="https://www.facebook.com/messages/t/hoangan.le.9256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Send a message</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
