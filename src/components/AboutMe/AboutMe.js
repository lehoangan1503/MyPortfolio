import React from "react";
import SlideImage from "../SlideImage/SlideImage";
import "../../styles/AboutMe.scss";
import Button from "../Button/Button";
import { GiRibbonMedal } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import { AnimationOnScroll } from "react-animation-on-scroll";
const listImage = [
  {
    id: 0,
    urlImage:
      "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 1,
    urlImage:
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    urlImage:
      "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const AboutMe = () => {
  return (
    <div id="aboutMe" className="AboutMe">
      <p>Get To Know</p>
      <h2>About Me</h2>
      <div className="about-me-container">
        <SlideImage onScroll={false} listImage={listImage}></SlideImage>
        <AnimationOnScroll animateOnce={true} animateIn="text-about-me">
          <div className="card-container">
            <div className="card">
              <GiRibbonMedal></GiRibbonMedal> <br />
              <strong>
                Experience <br /> <p>1+ Years Working</p>
              </strong>
              <p>1+ Years Working</p>
            </div>
            <div className="card">
              <MdPeople></MdPeople> <br />
              <strong>
                Clients <p>100+ Worldwide</p>
              </strong>
              <p>100+ Worldwide</p>
            </div>
            <div className="card">
              <VscFolderLibrary></VscFolderLibrary>
              <br />
              <strong>
                Projects <p>50+ Completed</p>
              </strong>
              <p>50+ Completed</p>
            </div>
          </div>
          <div className="text">
            <p>
              Welcome to My Portfolio! <br />
              I'm a front end developer having 2+ years of work experience at
              local. Now I wanna change to become a freelancer <br />I have a
              special love with cool animation websites so to become a artist
              about web front end I upgrade my self everyday by practicing more
              and more. <br />
              If you want to make a cool websites don't hesitate send me an
              email or let's talk. Looking forward to working with you.
            </p>
          </div>
          <a href="#getContact">
            {" "}
            <Button darkTheme={false} buttonName="Let's Talk"></Button>
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default AboutMe;
