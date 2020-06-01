import React from "react";
import WraperCard from "./WraperCard";
import TransitionWraperCard from "./TransitionWraperCard";

function CollegeCard(props) {
  const { icon, name, degree, stream, marks, fromTo } = props;
  return (
    <TransitionWraperCard>
      <WraperCard>
        <div className="collegeCard">
            {icon}
          <h4>{name}</h4>
          <h5>{degree}</h5>
          <h6>{stream}</h6>
          <p>Marks: {marks} <br/>{fromTo}</p>
          <span></span>
        </div>
      </WraperCard>
    </TransitionWraperCard>
  );
}

export default CollegeCard;
