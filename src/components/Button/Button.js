import React from "react";
import "../../styles/Button.scss";

const Button = ({ buttonName, darkTheme }) => {
  return (
    <div className="Button">
      {darkTheme ? (
        <button className="dark-theme-button">{buttonName}</button>
      ) : (
        <button className="nomal-button">
          <span></span>
          <span></span>
          <span></span>
          {buttonName}
        </button>
      )}
    </div>
  );
};

export default Button;
