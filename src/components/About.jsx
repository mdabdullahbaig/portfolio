import React from "react";
import "./About.css";
import ProfileCard from "./commonComponents/ProfileCard";
import NameCard from "./commonComponents/NameCard";
import Wraper from './Wraper'
function About() {
  return (
    <Wraper>
    <div className="about">
      <h2 className="about-in"><b>ABOUT</b></h2>
      <div className="about-box">
        <div className="profileCard">
          <ProfileCard />
        </div>
        <div className="nameCard">
          <NameCard />
        </div>
      </div>
    </div>
    </Wraper>
  );
}

export default About;
