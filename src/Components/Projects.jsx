import React from "react";
import "../styles.css";
import Weatherapp from "../Images/Weather.jpeg";
import Musicweb from "../Images/Music.jpeg";
import Landingpage from "../Images/Landing.jpeg";

const Projects = () => {
  return (
    <div className="container">
      <div className="projects-list">
        <h3>Key Projects</h3>
        <div>
          <ul>
            <li>
              <div className="project-item">
                <h4> Weather App</h4>
                <a href="https://superb-youtiao-7bdfc7.netlify.app/">
                  <img
                    src={Weatherapp}
                    alt="weather application"
                    style={{ width: "200px", height: "auto" }}
                  />
                </a>
                <p>
                  <strong>Description:</strong> Developed a full-featured
                  weather application using React, integrating various APIs to
                  enhance functionality.
                </p>
                <p>
                  <strong>Technologies Used:</strong> React, CSS, RESTful APIs.
                </p>
                <p>
                  <strong>Impact:</strong> Improved user engagement by 30%
                  through enhanced UI/UX design.
                </p>
              </div>
            </li>
            <li>
              <div className="project-item">
                <h4> Music Website</h4>
                <a href="https://polite-kleicha-bb7bc8.netlify.app/">
                  {" "}
                  <img
                    src={Musicweb}
                    alt="music website"
                    style={{ width: "200px", height: "auto" }}
                  />
                </a>
                <p>
                  <strong>Description:</strong> Created a responsive and dynamic
                  music website with Bootstrap and JavaScript.
                </p>
                <p>
                  <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
                  Bootstrap.
                </p>
                <p>
                  <strong>Impact:</strong> Increased online free music download
                </p>
              </div>
            </li>
            <li>
              <div className="project-item">
                <h4> Landing Page</h4>
                <a href="https://steady-salamander-af1b8e.netlify.app/">
                  {" "}
                  <img
                    src={Landingpage}
                    alt="landing page"
                    style={{ width: "200px", height: "auto" }}
                  />
                </a>
                <p>
                  <strong>Description:</strong> Created a responsive and dynamic
                  personal landing page with Bootstrap and JavaScript.
                </p>
                <p>
                  <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
                  Bootstrap.
                </p>
                <p>
                  <strong>Impact:</strong> Increased effective communication
                  with my clients.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;
