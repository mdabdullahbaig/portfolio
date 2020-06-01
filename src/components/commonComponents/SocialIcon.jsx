import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function SocialIcon(props) {
  const { icon, name, link } = props;
  const iconTool = <span style={{color:"white"}}>{name}</span>;
  return (
    <Tippy content={iconTool} delay={[200,0]} >
      <a style={{textDecoration: "none", color: "white"}} href={link} target="_blank" rel="noopener noreferrer" className="social-brand-icon">
        {icon}
      </a>
    </Tippy>
  );
}

export default SocialIcon;
