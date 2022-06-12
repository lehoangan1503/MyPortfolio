import React from "react";
import "../../styles/Projects.scss";
import Project from "./Project/Project";
import catImage from "../../assets/cat-paradise.png";
import twitterPostImage from "../../assets/twitter-post.png";

const projects = [
  {
    projectUrlImage: catImage,
    projectName: "Cat Paradise",
    sourceLink: "https://github.com/lehoangan1503/CatParadiseProject",
    liveDemoLink: "http://catparadise.herokuapp.com/",
  },
  {
    projectUrlImage: twitterPostImage,
    projectName: "Twitter Post clone older version",
    sourceLink: "https://github.com/lehoangan1503/twitter-post-clone",
    liveDemoLink: "https://anlehoang-twitter.herokuapp.com/",
  },
];
const listProject = projects.map((project) => {
  return (
    <Project
      key={project.sourceLink}
      projectUrlImage={project.projectUrlImage}
      projectName={project.projectName}
      sourceLink={project.sourceLink}
      liveDemoLink={project.liveDemoLink}
    ></Project>
  );
});
const Projects = () => {
  return (
    <div id="projects" className="Projects">
      <p>My Recent Work</p>
      <h2>Projects</h2>
      <div className="projects-container"> {listProject}</div>
    </div>
  );
};

export default Projects;
