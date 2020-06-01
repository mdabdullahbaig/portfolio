import React from "react";
import Wraper from "./Wraper";
import "./Interest.css";

function Interest(props) {
  return (
    <Wraper>
      <div className="header">
        <h2 className="header-in">
          <b>Interests</b>
        </h2>
        <div className="interest-box">
          <p>
            Apart from being a <span className="spanClass">web developer</span>,
            I enjoy most of my time being outdoors. I like to code on{" "}
            <span className="spanClass">real world Problems</span>, where you
            can implement a real situation with the help of code.
          </p>
          <p>
            I spend large amount of my free time exploring the{" "}
            <span className="spanClass">latest technology </span>
            advancements in the <span className="spanClass">front-end</span> web
            development, as well as <span className="spanClass">back-end </span>
            web development world.
          </p>
          <p>
            I built this portfolio website using
            <span className="spanClass"> React.js</span> and some third party
            library. I used <span className="spanClass"> FramerMotion</span>{" "}
            library for animation. There is a contact section where you can give
            me feedback and ask anything. For taking data from form in contact
            section, I used <span className="spanClass"> React Hook Form</span>{" "}
            and for frontent validation <span className="spanClass">yup</span>{" "}
            library. I made API with <span className="spanClass">Node.js</span>{" "}
            , <span className="spanClass">Express</span> and
            <span className="spanClass"> Nodemailer</span>. Nodemailer is
            amazing API for sending email through Gmail. For database I used{" "}
            <span className="spanClass"> Mlab</span> for that form.
          </p>
        </div>
        <h2 style={{ textAlign: "right", padding: "40px" }}>Thank You!</h2>
      </div>
    </Wraper>
  );
}

export default Interest;
