import React from "react";
import { FaReact, FaNode } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { RiFlutterLine } from "react-icons/ri";
import SkillCard from "./commonComponents/SkillCard";
import Wraper from "./Wraper";
import "./Skills.css";


const Ski_details = [
  {
    name: "React.js",
    icon: <FaReact size="5rem" />,
    id: 1
  },
  {
    name: "Node.js",
    icon: <FaNode size="5rem" />,
    id: 2
  },
  {
    name: "MongoBD",
    icon: <DiMongodb size="5rem" />,
    id: 3
  },
  {
    name: "Flutter",
    icon: <RiFlutterLine size="5rem" />,
    id: 4
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 size="5rem" />,
    id: 5
  },
  {
    name: "HTML",
    icon: <DiHtml5 size="5rem" />,
    id: 6
  },
  {
    name: "CSS",
    icon: <DiCss3 size="5rem" />,
    id: 7
  }
];
function Skills() {
 
  return (
    <Wraper>
      <div className="header">
        <h2 className="header-in">
          <b>SKILLS</b>
        </h2>
        <div className="skill-box">
          {Ski_details.map(detail => (
            <SkillCard key={detail.id} name={detail.name} icon={detail.icon} />
          ))}
        </div>
      </div>
    </Wraper>
  );
}

export default Skills;
