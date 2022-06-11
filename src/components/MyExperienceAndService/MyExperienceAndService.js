import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../../styles/MyExperienceAndService.scss";
const MyExperienceAndService = () => {
  return (
    <div id="myExperienceAndServices" className="MyExperienceAndService">
      <p>What Skills I Have</p>
      <h2>My Experience</h2>
      <div className="my-experience-container">
        <AnimationOnScroll animateOnce={true} animateIn="skills">
          <h3>Frontend Development</h3>
          <ul>
            <li>
              <BsPatchCheckFill></BsPatchCheckFill>
              HTML <br /> <span className="exp-level">Experienced</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              CSS,Scss,Sass <br />{" "}
              <span className="exp-level">Intermediate</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              JavaScript <br /> <span className="exp-level">Experienced</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              Tailwind <br /> <span className="exp-level">Experienced</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              React <br /> <span className="exp-level">Experienced</span>
            </li>
          </ul>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="skills">
          <h3>Backend Development</h3>
          <ul>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              Node JS <br /> <span className="exp-level">Intermediate</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              Java <br /> <span className="exp-level">Experienced</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              MongoDB <br /> <span className="exp-level">Experienced</span>
            </li>
            <li>
              {" "}
              <BsPatchCheckFill></BsPatchCheckFill>
              MySQL <br /> <span className="exp-level">Experienced</span>
            </li>
          </ul>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default MyExperienceAndService;
