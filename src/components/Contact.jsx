import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail, MdCall } from "react-icons/md";
import ContactCard from "./commonComponents/ContactCard";
import ContactForm from "./commonComponents/ContactForm";
import Wraper from "./Wraper";
import "./Contact.css";

const contact_details = [
  {
    icon: <FaMapMarkerAlt size="50px" />,
    text: "Kolkata, India",
    id: 1
  },
  {
    icon: <MdCall size="50px" />,
    text: "+91-9955778059",
    id: 2
  },
  {
    icon: <MdMail size="50px" />,
    text: "abdullahhussainbaig1997@gmail.com",
    id: 3
  }
];

function Contact() {

  return (
    <Wraper>
      <div className="header">
        <h2 className="header-in">
          <b>CONTACT US</b>
        </h2>
        <div className="contact-box">
          <div className="contact-form">
            <ContactForm />
          </div>
          <div className="contact-card">
            {contact_details.map(detail => (
              <ContactCard
                key={detail.id}
                icon={detail.icon}
                text={detail.text}
              />
            ))}
          </div>
        </div>
        <br />
        <br />
      </div>
    </Wraper>
  );
}

export default Contact;
