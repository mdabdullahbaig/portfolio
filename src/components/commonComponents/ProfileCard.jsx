import React from "react";
import WraperCard from "./WraperCard";
import "../About.css";


function ProfileCard() {

  return (
      <WraperCard>
        <img
          style={{
            width: "300px",
            height: "400px",
            border: "white solid 2px",
            borderRadius: "15px"
          }}
          className="img-responsive"
          src="https://res.cloudinary.com/diirdewi4/image/upload/c_fit,h_500,w_500/v1565131782/mypic.jpg"
          alt=""
        />
      </WraperCard>
  );
}

export default ProfileCard;
