import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="./Home">Home</Link>
            </li>
            <li>
              <Link to="./Education">Education</Link>
            </li>
            <li>
              <Link to="./Skills">Skills</Link>
            </li>
            <li>
              <Link to="./Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
