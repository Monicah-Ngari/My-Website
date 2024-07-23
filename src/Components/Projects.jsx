import React from "react";

const Projects = () => {
  return (
    <div>
      <h3>Key Projects</h3>
      <div className="projects-list">
        <div className="project-item">
          <h4>
            {" "}
            <a href="https://superb-youtiao-7bdfc7.netlify.app/">Weather App</a>
          </h4>
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
          <h4>
            {" "}
            <a href="https://polite-kleicha-bb7bc8.netlify.app/">
              {" "}
              Music Website
            </a>
          </h4>
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
        <div className="project-item">
          <h4>
            {" "}
            <a href="https://steady-salamander-af1b8e.netlify.app/">
              {" "}
              Landing Page
            </a>
          </h4>
          <p>
            <strong>Description:</strong> Created a responsive and dynamic
            personal landing page with Bootstrap and JavaScript.
          </p>
          <p>
            <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
            Bootstrap.
          </p>
          <p>
            <strong>Impact:</strong> Increased effective communication with my
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
