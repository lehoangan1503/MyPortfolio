import React from "react";
import Button from "../../Button/Button";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import "../../../styles/Project.scss";
const Project = ({
  projectUrlImage,
  projectName,
  sourceLink,
  liveDemoLink,
}) => {
  return (
    <div className="Project">
      <AnimationOnScroll animateOnce={true} animateIn="project-container">
        <div className="project-image">
          <img src={projectUrlImage} alt="" />
        </div>
        <b>{projectName}</b>
        <div className="button-group">
          <a href={sourceLink} target="_blank" rel="noopener  noreferrer">
            <Button darkTheme={true} buttonName="View Source"></Button>
          </a>
          <a href={liveDemoLink} target="_blank" rel="noopener  noreferrer">
            {" "}
            <Button darkTheme={true} buttonName="Live Demo"></Button>
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Project;
