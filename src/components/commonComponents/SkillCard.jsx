import React from "react";
import TransitionWraperCard from "./TransitionWraperCard";
import WraperCard from "./WraperCard";

function SkillCard(props) {
    const { name, icon } = props;
  return (
    <TransitionWraperCard>
      <WraperCard>
        <div className="skillCard">
          {icon}
          <h4>{name}</h4>
        </div>
      </WraperCard>
    </TransitionWraperCard>
  );
}

export default SkillCard;
