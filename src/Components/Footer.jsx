import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="contact-links">
      <p>
        <a
          href="https://www.linkedin.com/in/monicah-ngari-96459321b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" size="1x" />{" "}
          LinkedIn
        </a>
      </p>
      <p>
        <a
          href="https://github.com/Monicah-Ngari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" size="1x" />{" "}
          GitHub
        </a>
      </p>
      <p>
        <a href="mailto:wakarimangari@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" size="1x" />{" "}
          Email Me
        </a>
      </p>
    </div>
  );
};
export default Footer;
