import React from "react";
import TransitionWraperCard from "./TransitionWraperCard";

function ProjectCard(props) {
    const { name, description, gitLink, webLink} = props;
  return (
    <TransitionWraperCard>
        <div style={{}} className="projectCard">
          <h4>{name}</h4>
          <h6>{description}</h6>

          <a style={{textDecoration: "none", color:"white"}} href={gitLink} target="_blank" rel="noopener noreferrer" className="projectButton">Source Code</a>
          <a style={{textDecoration: "none", color:"white"}} href={webLink} target="_blank" rel="noopener noreferrer" className="projectButton">Live Demo</a>
        </div>
    </TransitionWraperCard>
  );
}

export default ProjectCard;
