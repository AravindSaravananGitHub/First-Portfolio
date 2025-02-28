import React from "react";
import "./projects.scss";

const Projects = ({ menu, setMenu }) => {
  return (
    <div
      className='projects'
      id='projects'
      onClick={() => setMenu(false)}
    ></div>
  );
};

export default Projects;
