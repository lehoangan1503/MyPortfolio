import React from "react";
import { BiHomeHeart, BiUser, BiClipboard } from "react-icons/bi";
import { BsFileCode } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import "../../../styles/StickyNavigationBar.scss";

const StickyNavigationBar = () => {
  return (
    <nav className="StickyNavigationBar">
      <a href="#home">
        <BiHomeHeart></BiHomeHeart>
      </a>
      <a href="#aboutMe">
        <BiUser></BiUser>
      </a>
      <a href="#myExperienceAndServices">
        <BiClipboard></BiClipboard>
      </a>
      <a href="#projects">
        <BsFileCode></BsFileCode>
      </a>
      <a href="#getContact">
        <MdOutlineContactPhone></MdOutlineContactPhone>
      </a>
    </nav>
  );
};

export default StickyNavigationBar;
