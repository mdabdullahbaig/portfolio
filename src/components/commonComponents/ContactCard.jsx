import React from "react";
import TransitionWraperCard from "./TransitionWraperCard";
import WraperCard from "./WraperCard";

function ContactCard(props) {
  const { icon, text } = props;
  return (
    <TransitionWraperCard>
      <WraperCard>
        <div className="contact-detail">
          <h6>{icon}</h6>
          <h6>{text}</h6>
        </div>
      </WraperCard>
    </TransitionWraperCard>
  );
}

export default ContactCard;
