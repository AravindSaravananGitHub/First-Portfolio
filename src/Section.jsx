import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";

const Section = ({ menu, setMenu }) => {
  return (
    <>
      <Home menu={menu} setMenu={setMenu} />
      <About menu={menu} setMenu={setMenu} />
      <Education menu={menu} setMenu={setMenu} />
      <Skills menu={menu} setMenu={setMenu} />
      <Projects menu={menu} setMenu={setMenu} />
      <Contacts menu={menu} setMenu={setMenu} />
    </>
  );
};

export default Section;
