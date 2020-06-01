import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaAddressCard
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import TransitionWraperCard from "./TransitionWraperCard";
const socialIcons = [
  {
    name: "LinkedIn",
    Icon: <FaLinkedin size="50px" />,
    link: "https://www.linkedin.com/in/mdabdullahbaig",
    id: 1
  },
  {
    name: "GitHub",
    Icon: <FaGithub size="50px" />,
    link: "https://github.com/mdabdullahbaig",
    id: 2
  },
  {
    name: "Facebook",
    Icon: <FaFacebook size="50px" />,
    link: "https://www.facebook.com/mdabdullahbaig1",
    id: 3
  },
  {
    name: "Instagram",
    Icon: <FaInstagram size="50px" />,
    link: "https://www.instagram.com/mdabdullahbaig",
    id: 4
  },
  {
    name: "Resume",
    Icon: <FaAddressCard size="50px" />,
    link:
      "https://drive.google.com/file/d/1jhjd8B89RKIIfizuOBnkoZ30_1weDbTl/view?usp=sharing",
    id: 5
  }
];

function NameCard() {
  
  return (
    <TransitionWraperCard>
      <h2>MD ABDULLAH BAIG</h2>
      <h4>FULL STACK DEVELOPER</h4>
      <p>
        To acquire a challenging position in an environment where I can best
        utilize my skills and education.
      </p>
      <div className="social-icon">
        {socialIcons.map(socialIcon => (
          <SocialIcon
            key={socialIcon.id}
            icon={socialIcon.Icon}
            name={socialIcon.name}
            link={socialIcon.link}
          />
        ))}
      </div>
    </TransitionWraperCard>
  );
}

export default NameCard;
