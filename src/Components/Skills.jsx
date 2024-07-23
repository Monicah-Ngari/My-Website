import React from "react";
import "../styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

      <h3>
        <em>Technical Skills</em>
      </h3>
      <ul class="skills">
        <li class="skill">
          Crafting pixel-perfect, responsive layouts with HTML5 and CSS3 to
          ensure optimal user experience across all devices.
        </li>
        <li class="skill">
          Mastering JavaScript to build interactive and dynamic web applications
          that engage users and enhance usability.
        </li>
        <li class="skill">
          Harnessing the power of React.js to develop robust and scalable
          front-end solutions, delivering seamless user interfaces and efficient
          data management.
        </li>
        <li class="skill">
          Demonstrating strong problem-solving abilities and meticulous
          attention to detail in debugging and troubleshooting, ensuring smooth
          functionality and performance.
        </li>
        <li class="skill">
          Proficient in utilizing Linux operating systems, including
          command-line navigation, package management, and system administration
          tasks.
        </li>
        <li class="skill">Web Development.</li>
        <li class="skill">
          Experienced in seamlessly integrating third-party APIs to enhance web
          application functionality.
        </li>
      </ul>

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
