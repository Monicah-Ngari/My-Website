import React from "react";
import "../styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="contact-links container">
      <a
        href="https://www.linkedin.com/in/monicah-ngari-96459321b/"
        target="_blank"
        rel="noopener noreferrer"
        className="col-3"
      >
        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" size="1x" />{" "}
        LinkedIn
      </a>

      <a
        href="https://github.com/Monicah-Ngari"
        target="_blank"
        rel="noopener noreferrer"
        className="col-3"
      >
        <FontAwesomeIcon icon={faGithub} aria-hidden="true" size="1x" /> GitHub
      </a>

      <a href="mailto:wakarimangari@gmail.com" className="col-3">
        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" size="1x" /> Email
        Me
      </a>
    </div>
  );
};
export default Footer;
