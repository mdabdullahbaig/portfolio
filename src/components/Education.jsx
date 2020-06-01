import React from "react";
import { FaSchool, FaHome } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import CollegeCard from "./commonComponents/CollegeCard";
import Wraper from "./Wraper";
import "./Education.css";


const Edu_details = [
  {
    icon: <MdSchool size="120px" />,
    name: "Netaji Subhash Engineering College",
    degree: "Bachelor Of Technology",
    stream: "Computer Science Engineering",
    marks: "7.66 YGPA",
    fromTo: "July 2016 - July 2020",
    id: 1
  },
  {
    icon: <FaSchool size="120px" />,
    name: "B.S. College, Chenari",
    degree: "Higher Secondary XII",
    stream: "Intermediate Science",
    marks: "71.80 %",
    fromTo: "June 2013 - June 2015",
    id: 2
  },
  {
    icon: <FaHome size="120px" />,
    name: "R.D.G. High School, Chenari",
    degree: "Secondary X ",
    stream: "General",
    marks: "70.40 %",
    fromTo: "June 2012 - June 2013",
    id: 3
  }
];

function Education() {
  
  return (
    <Wraper>
      <div className="header">
        <h2 className="header-in">
          <b>EDUCATION</b>
        </h2>
        <div className="college-box">
          {Edu_details.map(detail => (
            <CollegeCard
              key={detail.id}
              icon={detail.icon}
              name={detail.name}
              degree={detail.degree}
              stream={detail.stream}
              marks={detail.marks}
              fromTo={detail.fromTo}
            />
          ))}
        </div>
      </div>
    </Wraper>
  );
}

export default Education;
