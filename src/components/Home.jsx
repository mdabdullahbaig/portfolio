import React from "react";
import About from "./About"
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Interest from "./Interest";
import Contact from "./Contact";
import Wraper from "./Wraper";

function Home() {
  return (
    <Wraper>
      <About />
      <Education />
      <Skills />
      <Project />
      <Interest />
      <Contact />
    </Wraper>
  );
}

export default Home;
