import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2> About Me </h2>
      <p>
        I am a web developer with a passion for creating beautiful and
        functional user experiences. I love to learn new technologies and
        improve my skills. In my free time, I enjoy hiking, reading, and
        spending time with my family.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
