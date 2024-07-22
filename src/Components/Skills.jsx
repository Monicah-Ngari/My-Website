import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faReact,
  faGitAlt,
  faBootstrap,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills and Expertise</h2>
      <p>
        I am a passionate and skilled web developer specializing in front-end
        development. With a solid foundation in various web technologies and a
        keen eye for detail, I strive to create seamless, user-friendly, and
        visually appealing digital experiences. Here are the key skills that I
        bring to the tech industry:
      </p>

      <h3>Technical Skills</h3>
      <div className="skills-list">
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <p>
            <strong>HTML & CSS:</strong> Proficient in building responsive and
            accessible web pages.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJs} size="2x" />
          <p>
            <strong>JavaScript:</strong> Skilled in vanilla JavaScript and
            modern frameworks.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} size="2x" />
          <p>
            <strong>React:</strong> Experienced in developing dynamic and
            interactive user interfaces.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faGitAlt} size="2x" />
          <p>
            <strong>Version Control:</strong> Expertise in using Git for version
            control and collaboration.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faServer} size="2x" />
          <p>
            <strong>APIs:</strong> Proficient in working with RESTful APIs and
            using Postman for testing.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faLinux} size="2x" />
          <p>
            <strong>Linux:</strong> Competent in using Linux commands for
            development and deployment tasks.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faBootstrap} size="2x" />
          <p>
            <strong>Bootstrap:</strong> Skilled in using Bootstrap for rapid and
            responsive web design.
          </p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faLaptopCode} size="2x" />
          <p>
            <strong>UI/UX Principles:</strong> Understanding of user-centered
            design principles and best practices.
          </p>
        </div>
      </div>

      <h3>Key Projects</h3>
      <div className="projects-list">
        <div className="project-item">
          <h4>Weather App</h4>
          <p>
            <strong>Description:</strong> Developed a full-featured weather
            application using React, integrating various APIs to enhance
            functionality.
          </p>
          <p>
            <strong>Technologies Used:</strong> React, CSS, RESTful APIs.
          </p>
          <p>
            <strong>Impact:</strong> Improved user engagement by 30% through
            enhanced UI/UX design.
          </p>
        </div>
        <div className="project-item">
          <h4>Music Website</h4>
          <p>
            <strong>Description:</strong> Created a responsive and dynamic music
            website with Bootstrap and JavaScript.
          </p>
          <p>
            <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
            Bootstrap.
          </p>
          <p>
            <strong>Impact:</strong> Increased online free music download
          </p>
        </div>
      </div>

      <h3>Additional Skills</h3>
      <ul>
        <li>
          <strong>Team Collaboration:</strong> Experienced in working within
          Agile teams, using tools like Jira.
        </li>
        <li>
          <strong>Documentation:</strong> Skilled in writing clear and concise
          technical documentation.
        </li>
        <li>
          <strong>Coding Bootcamp:</strong> Completed a comprehensive coding
          bootcamp through a SheCodes free scholarship, honing my skills in
          modern web development.
        </li>
        <li>
          <strong>Workshops & Conferences:</strong> Actively participate in tech
          workshops and conferences to stay updated with industry trends.
        </li>
      </ul>
    </div>
  );
};

export default Skills;
