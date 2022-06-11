import React from "react";
import "../../styles/Home.scss";
import Button from "../Button/Button";
import avatar from "../../assets/avatar.png";
const Home = () => {
  return (
    <div id="home" className="Home">
      <div className="home-text-container">
        <p>Hello, I'm</p>
        <h1>An Le Hoang</h1>
        <p>Frontend Developer</p>
      </div>
      <div className="button-group-container">
        <Button darkTheme={true} buttonName="Download CV"></Button>
        <a href="#getContact">
          {" "}
          <Button darkTheme={false} buttonName="Let's Talk"></Button>
        </a>
      </div>
      <div className="portait-image-container">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Home;
