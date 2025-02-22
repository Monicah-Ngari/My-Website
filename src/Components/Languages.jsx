import React from "react";
import css from "../Images/css.jpeg";
import html5 from "../Images/html5.jpeg";
import js from "../Images/js.jpeg";
import react from "../Images/react.jpeg";

function Languages() {
  return (
    <div className="languages-container">
      {" "}
      <div>
        {" "}
        <h1 className="languages-title">My Proficient Languages</h1>
      </div>
      <div className="languages-list">
        <img src={html5} alt="HTML5 image" />
        <img src={css} alt="Css image" />
        <img src={js} alt="Java sript image" />
        <img src={react} alt="React image" />
      </div>
    </div>
  );
}

export default Languages;
