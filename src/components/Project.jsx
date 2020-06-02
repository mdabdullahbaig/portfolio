import React from "react";
import ProjectCard from "./commonComponents/ProjectCard";
import Wraper from "./Wraper";
import "./Project.css";


const project_details = [
  {
    name: "DREAM STORES",
    description: "E-commerce website built with Node.js",
    gitLink: "",
    webLink: "https://damp-badlands-99499.herokuapp.com/",
    id: 1
  },
  {
    name: " ANAS ENTERPRISES",
    description: "Personal Shop Website built with Node.js",
    gitLink: "",
    webLink: "https://anasenterprises.herokuapp.com/",
    id: 2
  },
  {
    name: "EXPENSE TRACKER",
    description: "This App will track your expenses.",
    gitLink: "https://github.com/mdabdullahbaig/expense_tracker",
    webLink: "https://myexpensetracker.netlify.app/",
    id: 3
  },
  {
    name: "NEW PROJECT",
    description: "This website is part of my final year project.",
    gitLink: "",
    webLink: "",
    id: 3
  }
];

function Project() {

  return (
    <Wraper>
      <div className="header">
        <h2 className="header-in">
          <b>PROJECTS</b>
        </h2>
        <div className="project-box">
          {project_details.map(detail => (
            <ProjectCard
              key={detail.id}
              name={detail.name}
              description={detail.description}
              gitLink={detail.gitLink}
              webLink={detail.webLink}
            />
          ))}
        </div>
      </div>
    </Wraper>
  );
}

export default Project;
