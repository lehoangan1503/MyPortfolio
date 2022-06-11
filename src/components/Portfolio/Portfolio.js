import React from "react";
import StickyNavigationBar from "../StickyNavigationBar/StickyNavigationBar/StickyNavigationBar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import MyExperienceAndService from "../MyExperienceAndService/MyExperienceAndService";
import "../../styles/Portfolio.scss";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <StickyNavigationBar></StickyNavigationBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <MyExperienceAndService></MyExperienceAndService>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Portfolio;
