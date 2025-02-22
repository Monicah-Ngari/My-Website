// import React from "react";
import "../styles.css";

const Education = () => {
  return (
    <div className="education">
      <h3>Education</h3>
      <strong>
        {" "}
        <em>Diploma:</em>
      </strong>{" "}
      {""}Diploma in Project Planning & Management.
      <br></br>
      <strong>
        {" "}
        <em>Institution:</em>
      </strong>
      {""} Chuka University.
      {""}
      <h5>Additional Courses </h5>
      <strong>Certifications: {""}</strong>
      {""}
      <strong>SheCodes</strong>
      <p>
        {" "}
        Coding Workshop completed through the prestigious SheCodes Free
        Scholarship This rigorous and immersive training program provided me
        with a strong foundation in modern web development and software
        engineering. Throughout the workshop, I engaged in practical, real-world
        projects that enhanced my coding proficiency and problem-solving
        abilities. The program focused on building responsive, interactive, and
        user-friendly applications while emphasizing best coding practices.
        During this intensive training, I developed hands-on expertise in
        various cutting-edge technologies, including:
        <ul>
          <li>
            HTML & CSS – Structured web content and styled interfaces with CSS
            frameworks like Bootstrap and Tailwind.
          </li>
          <li>
            JavaScript & React – Built interactive and dynamic web applications,
            utilizing state management and component-based architecture.
          </li>
          <li> React Native – Developed mobile applications for Android</li>
          <li>
            APIs & Postman – Worked with RESTful APIs for seamless data
            integration, testing, and debugging requests.
          </li>
          <li>
            Linux Commands – Gained familiarity with terminal-based operations,
            file handling, and system navigation for development environments
          </li>
        </ul>
      </p>
    </div>
  );
};
export default Education;
