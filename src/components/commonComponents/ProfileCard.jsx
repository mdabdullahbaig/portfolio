import React from "react";
import WraperCard from "./WraperCard";
import "../About.css";


function ProfileCard() {

  return (
      <WraperCard>
        <img
          style={{
            border: "white solid 2px",
            borderRadius: "15px"
          }}
          className="img-responsive"
          src="https://res.cloudinary.com/diirdewi4/image/upload/c_scale,w_300/v1565131782/mdabdullahbaig-pic-react-project-portfolio.jpg"
          alt=""
        />
      </WraperCard>
  );
}

export default ProfileCard;
